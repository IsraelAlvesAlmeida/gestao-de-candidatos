<?php
require_once __DIR__ . '/../vendor/autoload.php';

use App\Controllers\AuthController;
use App\Models\User; // Certifique-se de que o nome da classe é Usuario ou User

// 1. Cabeçalhos (Headers) - Mantenha sempre no topo
// header("Access-Control-Allow-Origin: http://localhost:5173"); // Em produção usar este e não com *
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// 1. Responde a requisições OPTIONS (Pre-flight)
// IMPORTANTE: Se o cliente fizer uma requisição POST, ele primeiro enviará uma requisição OPTIONS para verificar se o servidor aceita a requisição POST. Se não respondermos a essa requisição OPTIONS, o navegador bloqueará a requisição POST.
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 2. Captura e Decodifica os dados JSON
$input = file_get_contents("php://input");
$dados = json_decode($input, true);

// 3. Define a ação com base no campo "action" do JSON, ou vazio se não existir
$action = $dados['action'] ?? '';

// 4. Roteamento Simples para Login e Cadastro
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    /* ************************************************************************** */
    // --- ROTA DE CADASTRO ---
    if ($action === 'register') {
        $nome = trim($dados['nome'] ?? '');
        $email = trim($dados['email'] ?? '');
        $senha = $dados['senha'] ?? '';

        file_put_contents('debug.log', "--- Dados de Registro ---\n", FILE_APPEND);
        file_put_contents('debug.log', print_r($dados, true) . "_____\n", FILE_APPEND);

        // 1. Validação de campos vazios
        if (empty($nome) || empty($email) || empty($senha)) {
            http_response_code(400);
            echo json_encode(["erro" => "Todos os campos são obrigatórios."]);
            exit;
        }

        // 2. Validação de formato de e-mail
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(["erro" => "Formato de e-mail inválido."]);
            exit;
        }

        // 2.1 Validação de força de senha no PHP (Segurança Extra)
        if (strlen($senha) < 8 || !preg_match('/[A-Z]/', $senha) || !preg_match('/[0-9]/', $senha)) {
            http_response_code(400);
            echo json_encode(["erro" => "A senha enviada não atende aos requisitos de segurança."]);
            exit;
        }

        $userModel = new User();

        // 3. Verificação de E-mail Duplicado
        if ($userModel->emailExiste($email)) {
            http_response_code(409); // 409 Conflict
            echo json_encode(["erro" => "Este e-mail já está em uso."]);
            exit;
        }

        // 4. Se passou por tudo, tenta cadastrar
        $sucesso = $userModel->cadastrar($nome, $email, $senha);

        if ($sucesso) {
            http_response_code(201); // 201 Created
            echo json_encode(["sucesso" => true, "mensagem" => "Usuário criado com sucesso!"]);
        } else {
            http_response_code(500);
            echo json_encode(["erro" => "Erro ao criar usuário no banco de dados."]);
        }
        exit;
    }

    /* ************************************************************************** */
    // --- ROTA DE LOGIN ---
    if ($action === 'login' || empty($action)) {
        $email = $dados['email'] ?? '';
        $senha = $dados['senha'] ?? '';

        if (empty($email) || empty($senha)) {
            http_response_code(400);
            echo json_encode(["erro" => "E-mail e senha são obrigatórios."]);
            exit;
        }

        $auth = new AuthController();
        $resultado = $auth->login($email, $senha);

        http_response_code(isset($resultado['erro']) ? 401 : 200);
        echo json_encode($resultado);
        exit;
    }

    /* ************************************************************************** */
    // --- ROTA DE ALTERAR SENHA ---
    if ($action === 'change_password') {
        $id = $dados['id'] ?? '';
        $senhaAtual = $dados['senhaAtual'] ?? '';
        $novaSenha = $dados['novaSenha'] ?? '';

        // Cria (ou limpa) um arquivo chamado debug.txt na pasta public
        // Ele vai salvar exatamente o que o PHP recebeu no array $dados
        //file_put_contents('debug.log', "--- Nova Requisição ---\n", FILE_APPEND);
        //file_put_contents('debug.log', print_r($dados, true), FILE_APPEND);

        if (empty($id) || empty($senhaAtual) || empty($novaSenha)) {
            http_response_code(400);
            echo json_encode(["erro" => "Todos os campos são obrigatórios."]);

            file_put_contents('debug.log', "--- Valida Campos Vazios ---\n", FILE_APPEND);
            file_put_contents('debug.log', print_r($dados, true), FILE_APPEND);
            exit;
        }

        $userModel = new User();
        $sucesso = $userModel->atualizarSenha($id, $senhaAtual, $novaSenha);


        // LIMPEZA DE SEGURANÇA e DEBUG
        // ob_clean(); // Apaga qualquer eco ou aviso que tenha saído antes
        // file_put_contents('debug.log', "--- Valor de sucesso se TRUE ---\n", FILE_APPEND);
        // file_put_contents('debug.log', print_r($sucesso, true), FILE_APPEND);

        if ($sucesso) {
            http_response_code(200);
            echo json_encode(["sucesso" => true, "mensagem" => "Senha atualizada com sucesso!"]);
        } else {
            http_response_code(401);
            echo json_encode(["erro" => "A senha atual digitada está incorreta."]);
        }
        exit;
    }
}


// 5. Fallback para métodos não permitidos
http_response_code(405);
echo json_encode(["erro" => "Método não permitido ou ação inválida."]);
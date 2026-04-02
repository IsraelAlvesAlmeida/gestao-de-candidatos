<?php

namespace App\Models;

use App\Database\Connection;
use PDO;

class User
{
    private $db;

    public function __construct()
    {
        $this->db = Connection::get();
    }

    public function cadastrar($nome, $email, $senha)
    {
        // 1. Gerar o HASH profissional da senha
        $senhaHash = password_hash($senha, PASSWORD_BCRYPT);

        $sql = "INSERT INTO usuarios (nome, email, senha) VALUES (:nome, :email, :senha)";
        $stmt = $this->db->prepare($sql);

        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':senha', $senhaHash);

        return $stmt->execute();
    }

    /**
     * Verifica se um e-mail já está cadastrado
     * @return bool
     */
    public function emailExiste($email)
    {
        $sql = "SELECT id FROM usuarios WHERE email = :email LIMIT 1";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':email', $email);
        $stmt->execute();

        return $stmt->rowCount() > 0; // Retorna true se achar alguém
    }

    /**
     * Busca um usuário pelo e-mail para validar o login
     */
    public function buscarPorEmail($email)
    {
        $stmt = $this->db->prepare("SELECT * FROM usuarios WHERE email = :email");
        $stmt->bindParam(':email', $email);
        $stmt->execute();

        return $stmt->fetch(); // Retorna o array com os dados do usuário ou false
    }

    /**
     * Verifica se a senha fornecida bate com o hash do banco e atualiza para a nova senha se estiver correta
     * @return bool
     */
    public function atualizarSenha($id, $senhaAtual, $novaSenha)
    {
        // 1. Pegar a senha atual (Hash) do banco
        $sql = "SELECT senha FROM usuarios WHERE id = :id";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$usuario){
            return false; // Usuário não encontrado
        }
            

        // 2. O PHP compara a senha digitada com o Hash guardado
        if (password_verify($senhaAtual, $usuario['senha'])) {
            // 3. Se estiver correta, gera o novo Hash
            $novoHash = password_hash($novaSenha, PASSWORD_BCRYPT);

            $updateSql = "UPDATE usuarios SET senha = :novaSenha WHERE id = :id";
            $updateStmt = $this->db->prepare($updateSql);
            $updateStmt->bindParam(':novaSenha', $novoHash);
            $updateStmt->bindParam(':id', $id);

            return $updateStmt->execute();
        }

        return false; // Senha atual está errada
    }
}
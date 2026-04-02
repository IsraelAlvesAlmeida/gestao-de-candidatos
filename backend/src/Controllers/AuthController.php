<?php

namespace App\Controllers;

use App\Models\User;

class AuthController
{

    public function login($email, $senha)
    {
        $userModel = new User();
        $usuario = $userModel->buscarPorEmail($email);

        // 1. Verifica se o usuário existe
        if (!$usuario) {
            return ["erro" => "E-mail não existe."];
        }

        // 2. Verifica se a senha bate com o Hash do banco
        // O password_verify é a função oficial do PHP para segurança
        if (!password_verify($senha, $usuario['senha'])) {
            return ["erro" => "Senha incorreta."];
        }

        // 3. Login com sucesso! 
        // Em um sistema real, aqui geraríamos um Token (JWT)
        return [
            "sucesso" => true,
            "usuario" => [
                "id" => $usuario['id'],
                "nome" => $usuario['nome'],
                "email" => $usuario['email']
            ]
        ];
    }
}
<?php

namespace App\Database; // Certifique-se de usar o App\ se configurou o PSR-4 assim

use PDO;
use PDOException;

/**
 * Classe Connection usando o padrão Singleton.
 * Garante que apenas uma conexão com o banco seja aberta durante a requisição.
 */
class Connection
{
    // Instância estática para o Singleton
    private static $instance = null;

    // Configurações (Poderiam vir de um arquivo .env no futuro)
    private static $host = "localhost";
    private static $dbname = "gestao_candidatos";
    private static $user = "root";
    private static $pass = "";

    /**
     * Método estático para obter a conexão
     * @return PDO
     */
    public static function get()
    {
        if (self::$instance === null) {
            try {
                $dsn = "mysql:host=" . self::$host . ";dbname=" . self::$dbname . ";charset=utf8";

                self::$instance = new PDO($dsn, self::$user, self::$pass);

                // Configurações de segurança e erro
                self::$instance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                self::$instance->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

            } catch (PDOException $e) {
                // Log de erro (profissional)
                error_log("Erro de conexão: " . $e->getMessage());
                die(json_encode(["error" => "Erro interno no servidor de dados."]));
            }
        }

        return self::$instance;
    }
}
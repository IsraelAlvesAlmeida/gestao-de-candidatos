// Rota privada para proteger as páginas internas
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/AuthContext";

// Essa função é usada para proteger as rotas internas. Ela verifica se o usuário está logado e, se não estiver, redireciona para a página de login.
export const PrivateRoute = () => {
    // Pega o estado de autenticação do contexto
    const { user, loading } = useAuth();

    // Enquanto o "vigilante" está verificando o cartão de acesso, mostramos uma mensagem de carregamento
    if (loading) return <div>Carregando...</div>;

    // Se não tem usuário, manda para o login
    return user ? <Outlet /> : <Navigate to="/" replace />;
};
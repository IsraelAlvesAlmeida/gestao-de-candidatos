import { useState } from "react";
import { Outlet, NavLink, Link, Navigate } from "react-router";
import Footer from "../components/Footer";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import { notify } from "../utils/Alerts";

export default function AuthLayout() {

    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu mobile

    const { user, logout, loading } = useAuth(); // Pega o estado de autenticação do contexto
    const navigate = useNavigate(); // Hook para navegar programaticamente após o logout

    // Função para lidar com o logout, que limpa o estado de autenticação e redireciona para a página de login
    const handleLogout = async () => {
        const result = await notify.confirm(
            "Tem certeza que deseja sair?",
            "A sessão será encerrada."
        );

        if (result.isConfirmed) { //funcao em Authcontext.tsx 
            logout(); // Limpa o estado de autenticação - localStorage e o estado do React
            navigate("/", { replace: true }); // Redireciona para a página de login
            notify.success("Até logo!"); // Notificação de sucesso
        }
    };

    // Enquanto verifica o localStorage, mostra um loading ou nada
    if (loading) return <div>Carregando...</div>;

    // Se o usuário não estiver logado, redireciona para a página inicial (login)
    if (!user) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="auth-wrapper bg-light min-vh-100">
            {/* Cole aqui a sua Navbar que estava no root.tsx */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow navAuth" id="header">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/auth/home">
                        <img src="/img/logo.png" alt="logo" height="40" className="d-inline-block align-text-top" />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* A lógica de abrir/fechar deve estar nesta div abaixo */}
                    <div className={`navbar-collapse custom-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNavAltMarkup">
                        <div className="navbar-nav fs-5 gap-3">
                            <NavLink className="nav-link" to="/auth/home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                            <NavLink className="nav-link" to="/auth/recursos" onClick={() => setIsMenuOpen(false)}>Recursos</NavLink>
                            <NavLink className="nav-link" to="/auth/meusdados" onClick={() => setIsMenuOpen(false)}>Meus Dados</NavLink>
                            <NavLink className="nav-link" to="/auth/alterarsenha" onClick={() => setIsMenuOpen(false)}>Alterar Senha</NavLink>
                            <Link className="btn btn-outline-secondary sair" to="/">SAIR</Link>
                        </div>
                    </div>
                    <div className="px-3 btn-sair">
                        <button className="btn btn-danger" onClick={handleLogout}>SAIR</button>
                    </div>
                </div>

            </nav>

            <main className="container-fluid bg-light main flex-grow-1">
                <Outlet /> {/* Aqui entrarão Meus Dados, Alterar Senha, etc */}
            </main>

            {/* O Footer entra aqui, fora do main */}
            <Footer />
        </div>
    );
}
import { Outlet, Link, NavLink } from "react-router";
import { useState } from "react";
import Footer from "~/components/Footer";

export default function PublicLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="public-wrapper pt-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow navAuth">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="img/logo.png" alt="logo" height="40" className="d-inline-block align-text-top" />
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
                            <Link className="nav-link" to="#">Home</Link>
                            <NavLink className="nav-link" to="/sobre-empresa">Sobre Empresa</NavLink>
                            <NavLink className="nav-link" to="/contato">Contato</NavLink>
                            <Link className="btn btn-success me-2 btn-area-candidato-mobile" to="/"><i className="fas fa-user me-2"></i>Área do Candidato</Link>
                        </div>
                    </div>
                    <div className="text-end btn-area-candidato">
                        <Link className="btn btn-success me-2" to="/"><i className="fas fa-user me-2"></i>Área do Candidato</Link>
                    </div>
                </div>

            </nav>

            <main className="container-fluid" id="public-layout">
                <Outlet /> {/* Aqui entrarão as páginas públicas */}
            </main>

            <footer className="py-4 text-center mt-5">
                <Footer />
            </footer>
        </div>
    );
}
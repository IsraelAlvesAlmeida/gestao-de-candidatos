import { Link } from "react-router";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-white border-top py-4 mt-5">
            <div className="container-fluid px-md-5">
                <div className="row align-items-center g-3">
                    {/* Logo e Copyright */}
                    <div className="col-12 col-md-4 text-center text-md-start">
                        <img src="/img/logo.png" alt="Logo" width="30" className="mb-2 opacity-75" />
                        <p className="text-muted small mb-0">
                            &copy; {year} Dev. Israel Almeida. <br className="d-md-none" />
                            Todos os direitos reservados.
                        </p>
                    </div>

                    {/* Links Úteis */}
                    <div className="col-12 col-md-4 text-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <Link to="#" className="text-decoration-none text-muted small px-2 border-end">Privacidade</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" className="text-decoration-none text-muted small px-2 border-end">Termos de Uso</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" className="text-decoration-none text-muted small px-2">Suporte</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Redes Sociais ou Versão */}
                    <div className="col-12 col-md-4 text-center text-md-end">
                        <div className="d-flex justify-content-center justify-content-md-end gap-3">
                            <Link to="#" className="text-muted fs-5"><i className="fa-brands fa-facebook"></i></Link>
                            <Link to="#" className="text-muted fs-5"><i className="fa-brands fa-instagram"></i></Link>
                            <Link to="#" className="text-muted fs-5"><i className="fa-brands fa-linkedin"></i></Link>
                        </div>
                        <small className="text-muted-50 d-block mt-1 fs-6 versao">v1.0.4-stable</small>
                    </div>
                </div>
            </div>
        </footer>
    );
}
import { Link, Outlet } from "react-router";

export default function PublicLayout() {
    return (
        <>
            <nav className="navbar navbar-light bg-white border-bottom shadow-sm py-3">
                <div className="container">
                    <Link className="navbar-brand mx-auto mx-lg-0" to="/">
                        <img src="/img/logo.png" alt="logo" height="50" />
                    </Link>
                    <div className="d-none d-lg-block">
                        <span className="text-muted small">Suporte: (11) 0000-0000</span>
                    </div>
                </div>
            </nav>
            <main className="min-vh-100 bg-white">
                <Outlet />
            </main>
        </>
    );
}
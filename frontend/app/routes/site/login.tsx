import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { notify } from "../../utils/Alerts";
import { useAuth } from "../../contexts/AuthContext";
import { apiRequest } from "../../services/api";
import type { Route } from "./+types/login";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Login | Gestão de Candidatos" },
        { name: "description", content: "Acesse sua conta para gerenciar suas candidaturas." },
    ];
}

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    // ESTADOS
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true);
            
            // Usando o padrão camelCase para as variáveis e enviando para o PHP
            const result = await apiRequest("login", {
                email: email,
                senha: password
            });

            if (result.sucesso) {
                login(result.usuario); // Atualiza o contexto global
                notify.success("Bem-vindo de volta!");
                navigate("/auth/home");
            }
        } catch (error: any) {
            notify.error(error.message || "E-mail ou senha inválidos.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container d-lg-flex login align-items-center content-public">
            
            <form onSubmit={handleSubmit} className="row g-3 col-sm-12 col-md-12 col-lg-6 shadow-sm p-4 rounded bg-white">
                <div className="alert alert-success p-3 d-flex justify-content-center align-items-center mb-4">
                    <h2 className="text-uppercase mt-2">Login</h2>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail <small>-Teste (admin@admin.com)</small></label>
                    <input 
                        type="email"  
                        className="form-control" 
                        id="email" 
                        placeholder="exemplo@dominio.com" 
                        autoComplete="username" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Senha <small>- Teste (@Admin01)</small></label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Digite sua senha" 
                        autoComplete="current-password" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="d-flex align-items-center justify-content-end gap-3 mt-4">
                    <Link className="btn btn-outline-secondary" to="/criar-conta">
                        Criar Conta
                    </Link>
                    
                    <button 
                        className="btn btn-primary d-flex align-items-center" 
                        type="submit" 
                        disabled={loading || !email || !password}
                    >
                        {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2"></span>
                                Autenticando...
                            </>
                        ) : (
                            "Acessar"
                        )}
                    </button>
                </div>
            </form>

            <div className="img-security d-none d-lg-block ms-lg-5">
                <img 
                    src="/img/computer-security.jpg" 
                    alt="Ilustração de Segurança" 
                    className="img-fluid rounded shadow"
                />
            </div>

        </div>
    );
}
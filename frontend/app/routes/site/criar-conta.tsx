import { notify } from "../../utils/Alerts";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import type { Route } from "./+types/criar-conta";
import { PasswordValidator } from "../../utils/Validators";
import { apiRequest } from "../../services/api";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Criar Conta" },
        { name: "description", content: "Crie sua conta para acessar o sistema." },
    ];
}

export default function Register() {
    const navigate = useNavigate();

    // ESTADOS
    const [loading, setLoading] = useState(false);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    // VALIDAÇÃO EM TEMPO REAL
    const validation = PasswordValidator.validate(senha);
    const senhasCoincidem = senha.length > 0 && senha === confirmarSenha;

    // Regra para habilitar o botão: Senha forte E senhas iguais E não estar carregando
    const podeEnviar = validation.isValid && senhasCoincidem && !loading;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Garantia extra antes de disparar o fetch
        if (!senhasCoincidem) {
            notify.error("As senhas não coincidem.");
            return;
        }

        try {
            setLoading(true);
            const result = await apiRequest("register", { nome, email, senha });

            if (result.sucesso) {
                notify.success("Conta criada com sucesso! Faça login.");
                navigate("/");
            }
        } catch (error: any) {
            notify.error(error.message || "Erro ao conectar com o servidor.");
        } finally {
            setLoading(false);
        }
    };

    // Função auxiliar para cores
    const getRequisitoClass = (condicao: boolean) => {
        return condicao ? "text-success" : "text-warning";
    };

    return (
        <div className="container d-lg-flex login py-5">
            <form onSubmit={handleSubmit} className="row g-3 col-sm-12 col-md-12 col-lg-8">
                <div className="alert alert-secondary p-3 d-flex justify-content-center mb-4">
                    <h2 className="text-uppercase mt-2">Criar Conta</h2>
                </div>

                <div className="mb-3 col-sm-12 col-md-12 col-lg-6">
                    <label htmlFor="nome" className="form-label">Nome Completo</label>
                    <input type="text" className="form-control" id="nome" placeholder="John Doe"
                        required name="nome" value={nome} onChange={(e) => setNome(e.target.value)}
                        autoComplete="name" />
                </div>

                <div className="mb-3 col-sm-12 col-md-12 col-lg-6">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" className="form-control" placeholder="example@example.com"
                        required name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email" />
                </div>

                <div className="mb-3 col-sm-12 col-md-12 col-lg-6">
                    <label htmlFor="senha" className="form-label">Senha</label>
                    <input type="password" className="form-control" placeholder="********"
                        required name="senha" value={senha} onChange={(e) => setSenha(e.target.value)}
                        autoComplete="new-password" />
                </div>

                <div className="mb-3 col-sm-12 col-md-12 col-lg-6 position-relative">
                    <label htmlFor="confirmarSenha" className="form-label">Confirmar Senha</label>
                    <input type="password" className="form-control" placeholder="********"
                        required name="confirmarSenha" value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        autoComplete="new-password" />

                    {confirmarSenha && !senhasCoincidem && (
                        <small className="text-danger txt-senha-difere">As senhas não coincidem.</small>
                    )}
                </div>

                <div className="d-flex align-items-end justify-content-end gap-3 mt-4">
                    <Link className="btn btn-outline-secondary" to="/">Já tenho conta!</Link>

                    <button type="submit" className="btn btn-primary" disabled={!podeEnviar}>
                        {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2"></span>
                                Processando...
                            </>
                        ) : "Criar conta"}
                    </button>
                </div>
            </form>

            <div className="col-sm-12 col-md-12 col-lg-4 mt-5 m-lg-5 mx-auto">
                <ul className="detalhes-senha alert alert-warning list-unstyled p-4">
                    <li className="mb-2"><h6>Sua senha deve conter ...</h6></li>
                    <li className={`${getRequisitoClass(PasswordValidator.hasMinLength(senha))} mb-1`}>
                        <i className={`fa-solid ${PasswordValidator.hasMinLength(senha) ? 'fa-check-circle' : 'fa-caret-right'} px-3`}></i>
                        No mínimo 8 caracteres.
                    </li>
                    <li className={`${getRequisitoClass(PasswordValidator.hasUpperCase(senha))} mb-1`}>
                        <i className={`fa-solid ${PasswordValidator.hasUpperCase(senha) ? 'fa-check-circle' : 'fa-caret-right'} px-3`}></i>
                        Uma letra maiúscula.
                    </li>
                    <li className={`${getRequisitoClass(PasswordValidator.hasLowerCase(senha))} mb-1`}>
                        <i className={`fa-solid ${PasswordValidator.hasLowerCase(senha) ? 'fa-check-circle' : 'fa-caret-right'} px-3`}></i>
                        Uma letra minúscula.
                    </li>
                    <li className={`${getRequisitoClass(PasswordValidator.hasNumber(senha))} mb-1`}>
                        <i className={`fa-solid ${PasswordValidator.hasNumber(senha) ? 'fa-check-circle' : 'fa-caret-right'} px-3`}></i>
                        Um número.
                    </li>
                    <li className={`${getRequisitoClass(PasswordValidator.hasSpecial(senha))} mb-1`}>
                        <i className={`fa-solid ${PasswordValidator.hasSpecial(senha) ? 'fa-check-circle' : 'fa-caret-right'} px-3`}></i>
                        Um caracter especial.
                    </li>
                </ul>
            </div>
        </div>
    );
}
import React, { useState } from "react";
import { useAuth } from "~/contexts/AuthContext";
import { PasswordValidator } from "../../utils/Validators";
import { notify } from "../../utils/Alerts";
import { apiRequest } from "../../services/api";
import type { Route } from "./+types/alterar-senha";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Alterar senha" },
        { name: "description", content: "Área de segurança para alteração de senha do candidato." },
    ];
}

export default function Alterarsenha() {
    const { user } = useAuth();

    // ESTADOS
    const [loading, setLoading] = useState(false);
    const [senhaAtual, setSenhaAtual] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    // VALIDAÇÃO EM TEMPO REAL
    const validation = PasswordValidator.validate(novaSenha);
    const senhasCoincidem = novaSenha.length > 0 && novaSenha === confirmarSenha;

    // Regra para habilitar o botão: Senha forte E coincidem E preencheu a atual E não está carregando
    const podeEnviar = validation.isValid && senhasCoincidem && senhaAtual.length > 0 && !loading;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!senhasCoincidem) {
            notify.error("As senhas não coincidem.");
            return;
        }

        try {
            setLoading(true);
            const result = await apiRequest("change_password", {id: user?.id, senhaAtual, novaSenha });

            if (result.sucesso) {
                notify.success("Senha alterada com sucesso!");
                // Reseta os campos após o sucesso
                setSenhaAtual("");
                setNovaSenha("");
                setConfirmarSenha("");
            }
        } catch (error: any) {
            notify.error(error.message || "Erro ao alterar senha.");
        } finally {
            setLoading(false);
        }
    };

    const getRequisitoClass = (condicao: boolean) => {
        return condicao ? "text-success" : "text-warning";
    };

    return (
        <div className="container bg-white shadow content">
            <div className="box-inscricao">
                <h3 className="me-2">ÁREA DO CANDIDATO -</h3>
                <h5>Alterar Senha</h5>
            </div>

            <div className="row p-3">
                <form onSubmit={handleSubmit} className="col-sm-12 col-md-12 col-lg-6 mb-4 senha">
                    <div className="row align-items-center p-2">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <label htmlFor="senhaAtual" className="col-form-label">Senha Atual</label>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-8">
                            <input type="password" id="senhaAtual" className="form-control"
                                placeholder="************" required maxLength={20}
                                value={senhaAtual} onChange={(e) => setSenhaAtual(e.target.value)}
                                autoComplete="current-password" />
                        </div>
                    </div>

                    <div className="row align-items-center p-2">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <label htmlFor="novaSenha" className="col-form-label">Nova Senha</label>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-8">
                            <input type="password" id="novaSenha" className="form-control"
                                placeholder="************" required maxLength={20}
                                value={novaSenha} onChange={(e) => setNovaSenha(e.target.value)}
                                autoComplete="new-password" />
                        </div>
                    </div>

                    <div className="row align-items-center p-2">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <label htmlFor="confirmarSenha" className="col-form-label">Confirmar Nova Senha</label>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-8 position-relative">
                            <input type="password" id="confirmarSenha" className="form-control"
                                placeholder="************" required maxLength={20}
                                value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}
                                autoComplete="new-password" />

                            {novaSenha && confirmarSenha && !senhasCoincidem && (
                                <small className="text-danger txt-senha-difere" >
                                    As senhas não coincidem.
                                </small>
                            )}
                        </div>
                    </div>

                    <div className="text-end mt-3 p-2">
                        <button type="submit" className="btn btn-secondary" disabled={!podeEnviar}>
                            {loading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2"></span>
                                    Alterando...
                                </>
                            ) : "Alterar senha"}
                        </button>
                    </div>
                </form>

                <div className="col-sm-12 col-md-12 col-lg-6">
                    <ul className="detalhes-senha alert alert-warning list-unstyled p-3">
                        <li><h6>Sua nova senha deve conter ...</h6></li>
                        <li className={`${getRequisitoClass(PasswordValidator.hasMinLength(novaSenha))} mb-1`}>
                            <i className={`fa-solid ${PasswordValidator.hasMinLength(novaSenha) ? 'fa-check-circle' : 'fa-caret-right'} px-3`}></i>
                            No mínimo 8 caracteres.
                        </li>
                        <li className={`${getRequisitoClass(PasswordValidator.hasUpperCase(novaSenha))} mb-1`}>
                            <i className={`fa-solid ${PasswordValidator.hasUpperCase(novaSenha) ? 'fa-check-circle' : 'fa-caret-right'} px-3`}></i>
                            Uma letra maiúscula.
                        </li>
                        <li className={`${getRequisitoClass(PasswordValidator.hasLowerCase(novaSenha))} mb-1`}>
                            <i className={`fa-solid ${PasswordValidator.hasLowerCase(novaSenha) ? 'fa-check-circle' : 'fa-caret-right'} px-3`}></i>
                            Uma letra minúscula.
                        </li>
                        <li className={`${getRequisitoClass(PasswordValidator.hasNumber(novaSenha))} mb-1`}>
                            <i className={`fa-solid ${PasswordValidator.hasNumber(novaSenha) ? 'fa-check-circle' : 'fa-caret-right'} px-3`}></i>
                            Um número.
                        </li>
                        <li className={`${getRequisitoClass(PasswordValidator.hasSpecial(novaSenha))} mb-1`}>
                            <i className={`fa-solid ${PasswordValidator.hasSpecial(novaSenha) ? 'fa-check-circle' : 'fa-caret-right'} px-3`}></i>
                            Um caracter especial.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
// Importa o tipo Route, que vem da configuração automática do React Router v7.
// Isso serve para dar tipagem ao objeto "meta" logo abaixo.
import type { Route } from "./+types/home";
import { NavLink } from "react-router";

// Função especial "meta" usada pelo React Router v7.
// Ela define metadados da página, como título e descrição.
// Esses dados podem ser usados para SEO ou aparecer no <head>.
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Home" }, // título da aba do navegador
        { name: "description", content: "Welcome to React Router!" }, // meta description
    ];
}

// Componente principal da página Home.
// É exportado como default, então o Router vai usar esse componente
// quando a rota "/" for acessada.
export default function Home() {
    return (
        <div className="container bg-white shadow content">

            <div className="box-inscricao">
                <h3>ÁREA DO CANDIDATO - &nbsp;</h3>
                <h5>MINHAS INSCRIÇÕES</h5>
            </div>

            <div className="box-tabela">
                <div className="d-flex justify-content-between p-4 px-2">
                    <div className="d-flex gap-2 align-items-center justify-content-center">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <span className="fs-6 msg">Histórico de Inscrições</span>
                    </div>
                    <div>
                        <button type="button" className="btn btn-sm btn-outline-secondary">NOVA INSCRIÇÃO</button>
                    </div>
                </div>

                <div className="text-center">
                    <p className="flex-wrap fw-bolder m-0 title">MAUÁ - CONCURSO PÚBLICO</p>
                </div>
                <div className="table-responsive">

                    <table className="table table-bordered">
                        <thead>
                            <tr className="title">
                                <th>Inscrição</th>
                                <th>Vaga</th>
                                <th>Data de Inscrição</th>
                                <th>Situação</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="align-middle">
                                <td><a href="#" className="text-decoration-none" role="button">30150</a></td>
                                <td>
                                    <p>Analista de Sistemas Júnior</p>
                                </td>
                                <td>15/03/2026 00:44</td>
                                <td>
                                    <p className="btn btn-sm btn-success">Confirmado</p>
                                </td>
                                <td className="text-start">
                                    <p><i className="fa-solid fa-chevron-right"></i>&nbsp;
                                    <NavLink className="text-decoration-none" role="button" to="/auth/inscricao">Mais informações</NavLink>
                                    </p>
                                    <p><i className="fa-solid fa-chevron-right"></i>&nbsp;
                                    <NavLink className="text-decoration-none" role="button" to="/auth/documentos">Envio de Documentos</NavLink>
                                    </p>
                                </td>
                            </tr>
                            <tr className="align-middle">
                                <td><a href="#" className="text-decoration-none" role="button">30150</a></td>
                                <td>
                                    <p>Professor Ensino Médio</p>
                                </td>
                                <td>20/03/2025 20:44</td>
                                <td>
                                    <p className="btn btn-sm btn-warning">Pendente</p>
                                </td>
                                <td className="text-start">
                                    <p><i className="fa-solid fa-chevron-right"></i>&nbsp;
                                    <NavLink className="text-decoration-none" role="button" to="/inscricao">Mais informações</NavLink>
                                    </p>
                                    <p><i className="fa-solid fa-chevron-right"></i>&nbsp;
                                    <NavLink className="text-decoration-none" role="button" to="/documentos">Envio de Documentos</NavLink>
                                    </p>
                                </td>
                            </tr>
                            <tr className="align-middle">
                                <td><a href="#" className="text-decoration-none" role="button">30150</a></td>
                                <td>
                                    <p>Fiscal Operacinal CONTRAN</p>
                                </td>
                                <td>12/06/2024 15:44</td>
                                <td>
                                    <p className="btn btn-sm btn-danger">Encerrado</p>
                                </td>
                                <td className="text-start">
                                    <p><i className="fa-solid fa-chevron-right"></i>&nbsp;
                                    <NavLink className="text-decoration-none" role="button" to="/inscricao">Mais informações</NavLink>
                                    </p>
                                    <p><i className="fa-solid fa-chevron-right"></i>&nbsp;
                                    <NavLink className="text-decoration-none" role="button" to="/documentos">Envio de Documentos</NavLink>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <p className="text-secondary msg mt-2">* Clique na inscrição desejada para mais informações.</p>
                </div>
            </div>

        </div>
    );
}


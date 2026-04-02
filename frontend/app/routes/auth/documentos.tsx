// Importa o tipo Route, que vem da configuração automática do React Router v7.
// Isso serve para dar tipagem ao objeto "meta" logo abaixo.
import type { Route } from "./+types/documentos";
import { NavLink } from "react-router";


// Função especial "meta" usada pelo React Router v7.
// Ela define metadados da página, como título e descrição.
// Esses dados podem ser usados para SEO ou aparecer no <head>.
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Documentos" }, // título da aba do navegador
        { name: "description", content: "Welcome to React Router!" }, // meta description
    ];
}

// Componente principal da página Home.
// É exportado como default, então o Router vai usar esse componente
// quando a rota "/" for acessada.
export default function Documentos() {
    return (
        <div className="container bg-white shadow content">

            <div className="box-inscricao">
                <h3>ÁREA DO CANDIDATO - &nbsp;</h3>
                <h5>Documentos</h5>
            </div>

            <div className="table-responsive box-tabela">
                <table className="table table-bordered">
                    <thead>
                        <tr className="title">
                            <th>Categoria</th>
                            <th>Tipo</th>
                            <th>Documento</th>
                            <th>Emviado em</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nenhum documento cadastrado</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div className="alert alert-danger">
                    <span className="fs-6"><i className="fa-solid fa-xmark mx-2"></i>Não há modalidades disponíveis para envio de arquivo no momento.</span>
                </div>
            </div>
            <div className="px-5 d-flex justify-content-end">
                <NavLink className="btn btn-secondary" role="button" to="/home">VOLTAR</NavLink>
            </div>
        </div>
    );
}


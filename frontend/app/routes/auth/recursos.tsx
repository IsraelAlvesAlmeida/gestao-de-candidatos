// Importa o tipo Route, que vem da configuração automática do React Router v7.
// Isso serve para dar tipagem ao objeto "meta" logo abaixo.
import type { Route } from "./+types/recursos";


// Função especial "meta" usada pelo React Router v7.
// Ela define metadados da página, como título e descrição.
// Esses dados podem ser usados para SEO ou aparecer no <head>.
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Recursos" }, // título da aba do navegador
        { name: "description", content: "Welcome to React Router!" }, // meta description
    ];
}

// Componente principal da página Home.
// É exportado como default, então o Router vai usar esse componente
// quando a rota "/" for acessada.
export default function Recursos() {
    return (
        <div className="container bg-white shadow content">

            <div className="box-inscricao">
                <h3>ÁREA DO CANDIDATO - &nbsp;</h3>
                <h5>Recursos</h5>
            </div>
            <div className="text-end mt-3 px-5">
                <button type="button" className="btn btn-sm btn-secondary"><i className="fa-solid fa-arrow-down me-2"></i>MUDAR ORDENAÇÃO</button>
            </div>

            <div className="box-info p-3">
                <h6 className="p-2 ">MAUÁ - CONCURSO PÚBLICO Nº 01/2025</h6>
                <ul className="recursos d-flex flex-column gap-2">
                    <li><a href="#">Edital de Resutado de Isenção</a> <span className="data">(13/01/2026 00:00 a 14/01/2026 18:00)</span></li>
                    <li><a href="#">Edital de Divulgação de Candidatos com Deficiência </a> <span className="data">(13/01/2026 00:00 a 14/01/2026 18:00)</span></li>
                    <li><a href="#">Edital de Divulgação da Relação de Candidatos Inscritos como Negros</a> <span className="data">(13/01/2026 00:00 a 14/01/2026 18:00)</span></li>
                    <li><a href="#">Edital de Divulgação dos Gabaritos </a> <span className="data">(13/01/2026 00:00 a 14/01/2026 18:00)</span></li>
                    <li><a href="#">Edital de Resultado da Prova Objetiva, Exceto Gabarito</a> <span className="data">(13/01/2026 00:00 a 14/01/2026 18:00)</span></li>
                </ul>
            </div>

        </div>
    );
}


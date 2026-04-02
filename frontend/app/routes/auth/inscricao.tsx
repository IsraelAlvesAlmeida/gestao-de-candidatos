// Importa o tipo Route, que vem da configuração automática do React Router v7.
// Isso serve para dar tipagem ao objeto "meta" logo abaixo.
import type { Route } from "./+types/inscricao";
import { NavLink } from "react-router";


// Função especial "meta" usada pelo React Router v7.
// Ela define metadados da página, como título e descrição.
// Esses dados podem ser usados para SEO ou aparecer no <head>.
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Inscrição" }, // título da aba do navegador
        { name: "description", content: "Welcome to React Router!" }, // meta description
    ];
}

// Componente principal da página Home.
// É exportado como default, então o Router vai usar esse componente
// quando a rota "/" for acessada.
export default function Inscricao() {
    return (
        <div className="container bg-white shadow content" id="candidato">

            <div className="box-inscricao">
                <h3>ÁREA DO CANDIDATO -&nbsp;</h3>
                <h5>MINHAS INSCRIÇÕES #30150</h5>
            </div>

            <div className="box-info position-relative pb-3">
                <div className="cabecalho mb-3">
                    <h6>DETALHES DA INSCRIÇÃO</h6>
                </div>
                <div className="foto">
                    <div className="img">
                        <img src="img/user.png" alt="foto usuario" />
                    </div>
                    <a href="#">Alterar foto</a>
                </div>
                <div className="dados">
                    <span className="campo">CONCURSO PÚBLICO - MAUÁ - Nº 01/2025</span>
                </div>
                <div className="dados">
                    <span className="campo">Nome:</span><span className="info">Israel Alves de Almeida</span>
                </div>
                <div className="dados">
                    <span className="campo">Inscrição:</span><span className="info">30150</span>
                </div>
                <div className="dados">
                    <span className="campo">Vaga:</span><span className="info">Analista de Sistemas Júnior</span>
                </div>
                <div className=" m-2 mx-4 alert alert-secondary">
                    <span>Ensino Superior Completo na área de Computação</span>
                </div>
                <div className="dados">
                    <span className="campo">Situação:</span><span className="info">Confirmado</span>
                </div>
            </div>

            <div className="box-info">
                <div className="cabecalho mb-3">
                    <h6>Anexos</h6>
                </div>
                <div className="dados">
                    <p className="link"><i className="fa-solid fa-chevron-right"></i>&nbsp;<a href="#" className="text-decoration-none" role="button">CLIQUE PARA ACESSAR O GABARITO PRELIMINAR</a></p>
                </div>
            </div>

            <div className="box-info">
                <div className="cabecalho mb-3">
                    <h6>PROVAS OBJETIVAS</h6>
                </div>
                <div className="alert alert-secondary dados m-4 p-3">
                    <p><strong>Local da Prova</strong></p>
                    <p>E.E. VISCONDE DE MAUÁ - T</p>
                    <p>15/03/2026 - 1º andar - Sala 05</p>
                    <p><strong>Endereço:</strong> Rua Santos Dumont, 26, Centro, Maua, SP</p>
                    <button type="button" className="btn btn-sm btn-secondary shadow">IMPRIMIR CARTÃO DE CONVOCAÇÃO</button>
                </div>
                <div className="dados">
                    <h6 className="fw-bold text-secondary">Cartão Resposta</h6>
                    <p className="cartao text-truncate">
                        <i className="fa-solid fa-chevron-right"></i>&nbsp;
                        <a href="#" className="text-decoration-none d-inline-block text-truncate" role="button" >
                            72d91e44d5b768198aar893282a3d1c8c42840e8dee7f.jpg
                        </a>
                    </p>
                </div>
            </div>
            <div className="px-5 d-flex justify-content-end">
                <NavLink className="btn btn-secondary" role="button" to="/home">VOLTAR</NavLink>
            </div>
        </div>
    );
}


// Importa o tipo Route, que vem da configuração automática do React Router v7.
// Isso serve para dar tipagem ao objeto "meta" logo abaixo.
import { NavLink } from "react-router";
import type { Route } from "./+types/meus-dados";


// Função especial "meta" usada pelo React Router v7.
// Ela define metadados da página, como título e descrição.
// Esses dados podem ser usados para SEO ou aparecer no <head>.
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Meus Dados" }, // título da aba do navegador
        { name: "description", content: "Welcome to React Router!" }, // meta description
    ];
}

// Componente principal da página Home.
// É exportado como default, então o Router vai usar esse componente
// quando a rota "/" for acessada.
export default function Meusdados() {
    return (
        <div className="container bg-white shadow content">

            <div className="box-inscricao">
                <h3>ÁREA DO CANDIDATO - &nbsp;</h3>
                <h5>Meus dados</h5>
            </div>

            <div className="box-info">
                <div className="col-12">
                    <h6 className="title">DADOS PESSOAIS</h6>
                    <div className="minhaFoto">
                        <div className="imagem">
                            <img src="/img/user.png" alt="foto usuario" />
                        </div>
                        <a href="#">Alterar foto</a>
                    </div>
                </div>
                <div className="row mb-5 p-3 meusDados">

                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Nome Completo <small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="Israel Alves de Almeida" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4  mb-4">
                        <label className="form-label">CPF<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="123.456.789-00" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4  mb-4">
                        <label className="form-label">Data Nascimento<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="20/11/1989" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4  mb-4">
                        <label className="form-label">Sexo<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="Masculino" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4  mb-4">
                        <label className="form-label">E-mail<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="israeldevjob@gmail.com" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4  mb-4">
                        <label className="form-label">Tipo Documento<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="RG" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Número<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="1234567X" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Órgão<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="SSP" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">UF<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="SP" />
                    </div>
                </div>
            </div>

            <div className="box-info">
                <h6 className="title">DADOS ADICIONAIS</h6>
                <div className="row mb-5 p-4 meusDados">
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Estado Civil<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="Casado" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Escolaridade<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="Ensino Superior" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Qnt Filhos<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="1" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Nome da Mãe<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="Carol de Souza Mazarinni" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Nacionalidade<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="Brasileira" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Naturalidade / Cidade<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="Mauá" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Naturalidade / Estado<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="SP" />
                    </div>
                </div>
            </div>

            <div className="box-info">
                <h6 className="title">ENDEREÇO E CONTATO</h6>
                <div className="row mb-5 p-4 meusDados">
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">CEP<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="09350-000" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Endereço<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="Av. Itapark" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Número<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="3000" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Complemento<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="C2" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Bairro<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="Itapark" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Estado<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="SP" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Cidade<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="Mauá" />
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Telefone<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="(11) 4545-6252" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <label className="form-label">Celular<small className="text-danger px-1">*</small></label>
                        <input type="text" className="form-control" disabled placeholder="..." value="(11) 95100-8709" />
                    </div>
                    <div className="form-check px-5 mt-2 mb-4">
                        <input className="form-check-input" type="checkbox" placeholder="..." value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Declaro ter lido e concordado com os termos do edital.
                        </label>
                    </div>
                    <div className="text-end">
                        <NavLink className="btn btn-secondary" role="button" to="/home">VOLTAR</NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
}


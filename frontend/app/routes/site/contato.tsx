
import type { Route } from "./+types/contato";


// Função especial "meta" usada pelo React Router v7.
// Ela define metadados da página, como título e descrição.
// Esses dados podem ser usados para SEO ou aparecer no <head>.
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Contato" }, // título da aba do navegador
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
                <h3>Contato</h3>
            </div>

            <div className="p-3">
                <div className="row">
                    {/* Informações de contato */}
                    <div className="col-sm-12 col-md-12 col-lg-6 p-4">
                        <div className="m-3 me-auto p-4 rounded dados-contato">
                            <h4 className="mb-4">Informações</h4>
                            <p><strong>Endereço:</strong> Rua das Flores, 123 - Ribeirão Pires, SP</p>
                            <p><strong>Telefone:</strong> (11) 99999-8888</p>
                            <p><strong>Email:</strong> contato@empresaexemplo.com</p>
                            <p><strong>Horário de atendimento:</strong> Seg - Sex, 9h às 18h</p>
                        </div>
                    </div>

                    {/* Formulário de contato */}
                    <div className="col-sm-12 col-md-12 col-lg-6 p-4">
                        <div className="p-4 rounded enviar-msg">
                            <h4>Envie uma mensagem</h4>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="nome" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="nome" placeholder="Seu nome" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Seu email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mensagem" className="form-label">Mensagem</label>
                                    <textarea className="form-control" id="mensagem" rows={4} placeholder="Digite sua mensagem"></textarea>
                                </div>
                                <div className="text-end">
                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 d-flex justify-content-center">
                <div className="col-10">
                    <h4 className="mb-3 title">Localização</h4>
                    <div className="ratio ratio-16x9">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.123456789!2d-46.413!3d-23.707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff123456789%3A0xabcdef123456789!2sRibeir%C3%A3o%20Pires%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1712345678901" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa de localização"
                        ></iframe>
                    </div>
                </div>
            </div>

        </div>
    );
}



import type { Route } from "./+types/sobre-empresa";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Sobre a Empresa" }, // título da aba do navegador
        { name: "description", content: "Saiba mais sobre a nossa empresa." }, // meta description
    ];
}


export default function SobreEmpresa() {
    return (
        <div className="container bg-white shadow content">

            <div className="box-inscricao">
                <h3>Sobre a Empresa</h3>
            </div>

            <div className="p-5 box">
                <div className="row mb-5">
                    <div className="col-sm-12 col-md-6 p-3 m-b-4 mb-md-0">
                        <img
                            src="/img/logo.png"
                            alt="História da empresa"
                            className="img-fluid rounded shadow-sm mb-3"
                        />
                    </div>
                    <div className="col-sm-12 col-md-6 p-3 d-flex align-items-center">
                        <p className="text-justify p-3">
                            Fundada em 2005, nossa empresa nasceu com o propósito de aproximar
                            pessoas e tecnologia. Ao longo dos anos, crescemos com base em
                            inovação, ética e compromisso com nossos clientes. Hoje somos
                            referência em soluções digitais que transformam negócios e
                            experiências.
                        </p>
                    </div>
                </div>

                {/* Missão, Visão e Valores */}
                <div className="row text-center mb-5">
                    <div className="col-sm-12 col-md-4 p-3">
                        <div className="p-4 card rounded shadow-sm">
                            <h4>Missão</h4>
                            <p>
                                Oferecer soluções tecnológicas que simplifiquem processos e
                                melhorem a vida das pessoas.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 p-3">
                        <div className="p-4 card rounded shadow-sm">
                            <h4>Visão</h4>
                            <p>
                                Ser reconhecida como líder em inovação digital na América Latina
                                até 2030.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 p-3">
                        <div className="p-4 card rounded shadow-sm">
                            <h4>Valores</h4>
                            <p>
                                Ética, transparência, inovação, respeito às pessoas e
                                responsabilidade socioambiental.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Segunda imagem + complemento */}
                <div className="row mb-5">
                    <div className="col-sm-12 col-md-6 p-3 d-flex align-items-center">
                        <p className="text-justify p-5">
                            Além de tecnologia, acreditamos em impacto social. Desenvolvemos
                            projetos de inclusão digital e apoiamos iniciativas educacionais em
                            comunidades locais. Nosso compromisso vai além do mercado: queremos
                            deixar um legado positivo para a sociedade.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6 d-flex justify-content-center">
                        <img
                            width={250}
                            src="/img/equipe.png"
                            alt="Equipe da empresa"
                            className="img-fluid rounded shadow-sm mb-3"
                        />
                    </div>
                </div>

                {/* Mapa da sede */}
                <div className="row">
                    <div className="col-12 mx-auto">
                        <h4 className="mb-3 title">Nossa Sede</h4>
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.123456789!2d-46.413!3d-23.707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff123456789%3A0xabcdef123456789!2sMau%C3%A1%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1712345678901" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa da sede"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}


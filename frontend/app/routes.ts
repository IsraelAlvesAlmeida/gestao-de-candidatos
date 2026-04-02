import { type RouteConfig, index, layout, route, prefix } from "@react-router/dev/routes";

export default [
    
    // Rotas Públicas (Login, Home Externa, etc)
    layout("layouts/PublicLayout.tsx", [
        index("routes/site/login.tsx"), // Login como página inicial, por exemplo
        route("criar-conta", "routes/site/criar-conta.tsx"),
        route("sobre-empresa", "routes/site/sobre-empresa.tsx"),
        route("contato", "routes/site/contato.tsx"),
    ]),

    // Rotas Internas (Área logada)
    layout("layouts/AuthLayout.tsx", [
        ...prefix("auth", [
            route("home", "routes/auth/home.tsx"),
            route("recursos", "routes/auth/recursos.tsx"),
            route("meusdados", "routes/auth/meus-dados.tsx"),
            route("alterarsenha", "routes/auth/alterar-senha.tsx"),

            //sub-páginas
            route("documentos", "routes/auth/documentos.tsx"),
            route("inscricao", "routes/auth/inscricao.tsx"),
        ])
    ]),
] satisfies RouteConfig;
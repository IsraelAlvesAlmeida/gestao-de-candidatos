import type { Route } from "./+types/root";
import "./app.css";
import { Meta, Links, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse } from "react-router";
import { AuthProvider } from "./contexts/AuthContext";

export const links: Route.LinksFunction = () => [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
    {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
    },
    {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
    },
    { rel: "stylesheet", href: "/css/style.css" },
];

// O Layout aqui é apenas o "envelope" de HTML
export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body suppressHydrationWarning>
                {children}
                <ScrollRestoration />
                <Scripts />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
            </body>
        </html>
    );
}

export default function App() {
    return (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "Ocorreu um erro inesperado.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Erro";
        details = error.status === 404 ? "Página não encontrada." : error.statusText || details;
    } else if (import.meta.env.DEV && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="container p-5">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && <pre className="bg-light p-3"><code>{stack}</code></pre>}
        </main>
    );
}
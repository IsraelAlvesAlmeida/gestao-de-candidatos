
// Este arquivo é um serviço de API genérico para o frontend. 
// Ele centraliza as requisições ao backend, facilitando a manutenção e a reutilização do código.
const BASE_URL = "http://localhost/gestao-de-candidatos/backend/public/index.php";

export const apiRequest = async (action: string, data: object) => {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, ...data }),
    });

    // O fetch não rejeita no 400/500, então verificamos manualmente
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.erro || "Erro na requisição");
    }

    return response.json();
};
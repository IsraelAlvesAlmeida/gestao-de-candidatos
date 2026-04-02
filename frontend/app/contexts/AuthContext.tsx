import React, { createContext, useContext, useState, useEffect } from "react";

// Definimos o que o nosso "Vigilante" vai guardar
// Ele tem o "cartão de acesso" (user), as funções para entrar e sair, e um estado de "verificando o cartão" (loading).
interface AuthContextType { // Define a estrutura do nosso contexto de autenticação
    user: any; // Aqui você pode criar uma interface mais específica para o usuário, com os campos que realmente usa (ex: id, nome, email)
    login: (userData: any) => void; // Função para "entrar" no sistema, que recebe os dados do usuário
    logout: () => void; // Função para "sair" do sistema, que não precisa de parâmetros
    loading: boolean; // Estado para indicar se estamos "verificando o cartão" (carregando os dados do usuário)
}

// Criamos o contexto, que é como um "cofre" onde vamos guardar o estado de autenticação e as funções para manipular esse estado.
const AuthContext = createContext<AuthContextType | null>(null);

// O "Guardião" do nosso contexto, que vai envolver toda a aplicação e fornecer o estado de autenticação para quem precisar.
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null); // Estado para guardar os dados do usuário (o "cartão de acesso")
    const [loading, setLoading] = useState(true); // Estado para indicar que estamos "verificando o cartão" (carregando os dados do usuário)

    // Quando o app carrega, verifica se já existe alguém no "cartão de acesso" (localStorage)
    useEffect(() => {
        const savedUser = localStorage.getItem("user_data"); // Tenta pegar os dados do usuário do localStorage
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser)); // Se tiver, coloca no estado do React
            } catch (e) {
                localStorage.removeItem("user_data"); // Se o JSON estiver corrompido, limpa o localStorage para evitar problemas futuros    
            }
        }
        setLoading(false); // Depois de verificar, diz que não estamos mais "verificando o cartão" (carregando os dados do usuário)
    }, []);

    // Função para "entrar" no sistema, que guarda os dados do usuário e salva no localStorage para manter a sessão mesmo se a página for recarregada.
    const login = (userData: any) => {
        setUser(userData); // Guarda os dados do usuário no estado do React
        localStorage.setItem("user_data", JSON.stringify(userData));
    };

    // Função para "sair" do sistema, que limpa os dados do usuário e remove do localStorage.
    const logout = () => {
        setUser(null); // Limpa o estado do usuário
        localStorage.removeItem("user_data"); // Remove do localStorage para garantir que a sessão seja encerrada mesmo após recarregar a página
        setLoading(false); // Garante que o loading não trave após sair
    };

    // O "Guardião" entrega o "cartão de acesso" e as chaves para entrar e sair para toda a aplicação.
    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar o contexto facilmente
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    return context;
};
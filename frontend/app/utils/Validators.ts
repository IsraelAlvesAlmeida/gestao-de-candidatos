export const PasswordValidator = {
    // Funções atômicas (individuais)
    hasMinLength: (s: string) => s.length >= 8,
    hasUpperCase: (s: string) => /[A-Z]/.test(s),
    hasLowerCase: (s: string) => /[a-z]/.test(s),
    hasNumber: (s: string) => /\d/.test(s),
    hasSpecial: (s: string) => /[@$!%*?&]/.test(s),

    // Função de validação completa (Objeto de Resumo)
    validate: (password: string) => {
        const res = {
            minLength: password.length >= 8,
            upperCase: /[A-Z]/.test(password),
            lowerCase: /[a-z]/.test(password),
            number: /\d/.test(password),
            special: /[@$!%*?&]/.test(password),
        };

        return {
            ...res,
            // É válido apenas se todos os critérios acima forem true
            isValid: res.minLength && res.upperCase && res.lowerCase && res.number && res.special
        };
    },

    // Verifica se duas strings são iguais
    areEqual: (s1: string, s2: string) => s1 === s2
};
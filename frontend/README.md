# Gestão de Candidatos

## Frontend High-Performance

* Este é o braço de interface de um sistema de gestão de candidatos, desenvolvido com foco em Performance, Modularização e User Experience (UX). O projeto utiliza as tecnologias mais recentes do ecossistema React para garantir um código limpo, tipado e escalável.

## Stack Tecnológica

* Framework: React Router v7 (Aproveitando os novos recursos de Framework para gerenciamento de rotas).

* Linguagem: TypeScript (Tipagem estática rigorosa para segurança e previsibilidade).

* Build Tool: Vite (Ambiente de desenvolvimento ultra-rápido).

* Styling: Bootstrap 5 (Layout responsivo e componentes consistentes).

* Icons: FontAwesome 6.

## Arquitetura e Engenharia de Software

* O projeto não é apenas uma coleção de telas; ele foi construído seguindo padrões de projeto (Design Patterns) modernos:

### Camada de Serviço (API Service)

* Diferente de abordagens básicas, este projeto implementa um Singleton de API.

* Centralização: Uso de uma função apiRequest que padroniza todos os fetch.

* Tratamento de Erros: Interceptação global de status HTTP (400, 404, 500) transformando-os em exceções tratáveis.

S* egurança de Tipos: Mapeamento de objetos CamelCase (Frontend) para SnakeCase (Backend PHP).

### Autenticação e Segurança

* Context API: Gerenciamento de estado global para o usuário autenticado através do AuthContext.

* Persistence: Sincronização automática com LocalStorage para manter a sessão ativa.

* Validation Engine: Implementação de uma classe estática PasswordValidator para validação complexa de requisitos de senha (Regex, Comprimento, Caracteres Especiais).

## Roteamento Avançado

    * Nested Routes: Gerenciamento eficiente de estados de visualização.

    * Hierarquia de Layouts: Segregação total de contextos entre áreas Públicas e Áreas Autenticadas (Auth Guards).

    * Route Colocation: Organização lógica de arquivos dentro da pasta routes/ seguindo a nova convenção do React Router v7.

## Diferenciais de UX (User Experience)

* Feedback em Tempo Real: Indicadores visuais dinâmicos (Verde/Amarelo) para requisitos de segurança de senha.

* Estados de Loading: Botões inteligentes com spinners que evitam double-tap e informam o status da requisição ao usuário.

* Navegação Preditiva: Uso de NavLink com estado isActive para feedback visual imediato no menu.

* Notificações Toast: Integração com sistema de alertas personalizados para sucessos e falhas de rede.

## Como Executar o Projeto

Pré-requisitos
Node.js (>= 18)

NPM ou Yarn

Instalação e Inicialização
Bash

### 1. Clone o repositório
* git clone https://github.com/seu-usuario/nome-do-projeto.git

### 2. Acesse a pasta
* cd nome-do-projeto

### 3. Instale as dependências
* npm install

### 4. Inicie o servidor de desenvolvimento
* npm run dev
* Acesse o sistema em: http://localhost:5173

## Roadmap e Próximos Passos

[x] Integração completa com API REST (PHP)

[x] Sistema de Autenticação (Login/Logout)

[x] Alteração Dinâmica de Senha

[ ] Migração de Fetch para Axios

[ ] Implementação de Dashboard de Candidaturas

[ ] Upload de Currículos (PDF/Docx)

### Desenvolvido por Israel Almeida - Focado em entregar código limpo e funcional.
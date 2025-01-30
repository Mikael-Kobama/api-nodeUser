# API de Usuários com Express e Prisma

Esta API simples permite realizar operações básicas de CRUD (Criar, Ler, Atualizar e Deletar) para usuários, utilizando o Express e o Prisma para manipulação de dados. O projeto também inclui rotas para filtrar os usuários com base nos parâmetros de consulta (query params).

## Funcionalidades

A API possui as seguintes funcionalidades:

- **Criar Usuário**: Adiciona um novo usuário ao banco de dados.
- **Listar Usuários**: Retorna todos os usuários ou filtra por parâmetros como nome, e-mail e idade.
- **Editar Usuário**: Atualiza as informações de um usuário existente.
- **Deletar Usuário**: Exclui um usuário do banco de dados.

## Tecnologias Utilizadas

- **Express**: Framework para criação de APIs.
- **Prisma**: ORM para acesso ao banco de dados.
- **Node.js**: Ambiente de execução para o código.

## Como Rodar o Projeto

### Pré-requisitos

1. **Node.js** e **npm** (ou **yarn**) instalados em sua máquina.
2. **Banco de dados** configurado com Prisma (basta rodar as migrações conforme o arquivo de configuração `schema.prisma`).

### Passos para executar a API localmente

1. Clone este repositório para sua máquina:
   ```bash
   git clone https://seu-repositorio-url.git
   cd nome-do-diretorio

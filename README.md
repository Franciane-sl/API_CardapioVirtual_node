# API Cardápio Virtual

API REST desenvolvida em **Node.js** e **Express**, com integração ao **PostgreSQL**, para fins de estudo, uso em portfólio e integração com aplicações web reais.

---

## Status do Projeto
Em desenvolvimento (MVP quase completo).  
- Funcionalidades principais já implementadas e testadas via Postman:  
  - Usuários/Users (CRUD)  
  - Produtos/Products (CRUD)  
  - Categorias/Categories (CRUD)  
  - Endereços/Adress (CRUD)  
  - Autenticação com JWT  
- Falta implementar completamente as regras de acesso por tipo de usuário (admin, user, etc.)

---

## Objetivo
- Servir como **projeto de portfólio** demonstrando boas práticas de backend  
- Servir para **integração com front-end web real**  
- Servir como **material de estudo** e referência didática para Node.js e Express

---

##  Tecnologias Utilizadas
- Node.js  
- Express  
- Sequelize (ORM)  
- PostgreSQL  
- JWT (JSON Web Token) para autenticação  
- bcrypt para hash de senhas  
- npm para gerenciamento de pacotes

---

## Autenticação e Segurança
- Senhas dos usuários armazenadas **com hash** usando bcrypt  
- Login via JWT com tempo de expiração de 1 hora  
- Middleware de autorização e autenticação (falta definir regras de acesso por tipo de usuário)

---

## Como Rodar o Projeto

1. Instale as dependências:
   
```bash
npm install
```
2. Crie um arquivo .env com as variáveis necessárias:

```bash
PORT=3000
DB_NAME=cardapioNode
DB_USER=postgres
DB_PASSWORD=1234
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=your_secret_key
```
3. Rode a API em modo de desenvolvimento:
  ```bash
npm run dev
```
## Endpoints da API

- Usuários (/users)

```bash

POST   /users           → cria um novo usuário
GET    /users           → lista todos os usuários
GET    /users/id       → busca usuário pelo ID
PUT    /users/id       → atualiza usuário pelo ID
DELETE /users/id       → remove usuário pelo ID

```
- Produtos (/products)

 ```bash

POST   /products        → cria um novo produto
GET    /products        → lista todos os produtos
GET    /products/id    → busca produto pelo ID
PUT    /products/id    → atualiza produto pelo ID
DELETE /products/id    → remove produto pelo ID

```
- Categorias (/categories)

 ```bash

POST   /categories      → cria uma nova categoria
GET    /categories      → lista todas as categorias
GET    /categories/id  → busca categoria pelo ID
PUT    /categories/id  → atualiza categoria pelo ID
DELETE /categories/id  → remove categoria pelo ID
```

- Autenticação (/auth)

 ```bash

POST /auth/login        → login do usuário (retorna token JWT)
GET  /auth/me           → retorna dados do usuário autenticado
                         (protegido pelo authMiddleware)

```

- Endereços (/adress)

 ```bash

POST   /adress/user_id  → cria um novo endereço para o usuário do tipo cliente
GET    /adress/user_id  → lista endereços 
PUT    /adress/user_id  → atualiza endereço 
DELETE /adress/user_id  → remove endereço 
```

##  Testes

- Todos os endpoints já foram testados usando Postman.

##  Observações

- Projeto ainda em desenvolvimento; regras de acesso por tipo de usuário estão pendentes

- Estrutura organizada em MVC + Services + Middleware

- Branch principal de desenvolvimento: develop

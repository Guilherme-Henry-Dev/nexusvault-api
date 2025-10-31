# 🎮 NexusVault API  

**API RESTful desenvolvida em Node.js + Express + Prisma + PostgreSQL, o cofre gamer para cadastrar, listar e gerenciar jogos de forma segura e escalável.**

---

## 🚀 Visão Geral  

A **NexusVault API** é o back-end do ecossistema NexusVault, responsável por toda a lógica de autenticação, persistência de dados e controle de acesso.  
Desenvolvida com **arquitetura modular**, autenticação via **JWT (Bearer Token)** e **ORM Prisma**, ela garante segurança, clareza e performance nas operações.

> ⚙️ **Status:** Online  
> 🧩 **Próximas features:** Reviews personalizadas, estatísticas no dashboard, upload de capas e sistema de tags avançadas.

---

## 🧠 Principais Funcionalidades  

✅ **Autenticação JWT** → Registro e login seguros de usuários  
🎮 **CRUD completo de jogos** (privado e protegido por token)  
📦 **Arquitetura modular** → Controllers, services, routes e middlewares organizados  
🧩 **Validação de dados com Zod** → Inputs e schemas consistentes  
🗄️ **Prisma ORM + PostgreSQL** → Banco de dados robusto e tipado  
🔒 **Middlewares de segurança** → Proteção contra acessos não autorizados  

---

## 🛠️ Tecnologias Utilizadas  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=fff)<br>
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=fff)<br>
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=fff)<br>
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=fff)<br>
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=fff)<br>
![Zod](https://img.shields.io/badge/Zod-1F2937?style=for-the-badge&logo=zod&logoColor=fff)<br>
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=fff)

---

## ⚙️ Estrutura do Projeto  

```
📁 src/
 ├─ controllers/     → lógica principal das rotas  
 ├─ middlewares/     → autenticação e tratamento de erros  
 ├─ routes/          → definição de endpoints REST  
 ├─ services/        → regras de negócio (auth e games)  
 ├─ prisma/          → schema e migrações do banco de dados  
 └─ server.ts        → ponto de entrada da aplicação  
```

---

## 🧩 Endpoints Principais  

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/register` | Cria um novo usuário |
| `POST` | `/login` | Realiza login e retorna token JWT |
| `GET` | `/games` | Lista todos os jogos do usuário autenticado |
| `POST` | `/games` | Adiciona um novo jogo |
| `PUT` | `/games/:id` | Atualiza informações de um jogo |
| `DELETE` | `/games/:id` | Remove um jogo cadastrado |

---

## 💻 Como Executar Localmente  

```bash
# 1️⃣ Instalar dependências
npm install

# 2️⃣ Rodar as migrações do Prisma
npx prisma migrate dev --name init

# 3️⃣ Gerar o cliente Prisma
npx prisma generate

# 4️⃣ Iniciar o servidor
npm run dev
```

🌐 Servidor rodando em: [http://localhost:3333](http://localhost:3333)

---

## 📘 Documentação Swagger  

A documentação está disponível via **Swagger UI**, facilitando testes e integração com o front-end.  
📄 Arquivo: `swagger.json` (na raiz do projeto)

---

## 🌍 Deploy  

🔗 Repositório: [Guilherme-Henry-Dev/nexusvault-api](https://github.com/Guilherme-Henry-Dev/nexusvault-api)

---

## 👨‍💻 Autor  

**Guilherme Henry**  
💼 Desenvolvedor Fullstack com foco em Front-End  
📍 Belo Horizonte - MG  

<br> <div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Guilherme-Henry-Dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/guilhermehenryf)
[![Portfólio](https://img.shields.io/badge/🌐_Portfólio-121212?style=for-the-badge&logo=vercel&logoColor=white)](https://portifolio-guilherme-nu.vercel.app)
</div>



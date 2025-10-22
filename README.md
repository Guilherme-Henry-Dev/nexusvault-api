# 🚀 NexusVault API

O **NexusVault** é um projeto fullstack autoral em desenvolvimento, criado para centralizar e armazenar informações sobre **jogos, animes e séries**, permitindo registrar experiências pessoais, avaliações e estatísticas em um painel interativo.

Esta é a **API (Back-End)** do projeto, responsável por gerenciar autenticação, banco de dados, rotas e integração com o front-end.

---

## 🧠 Status do Projeto

🟡 **Em desenvolvimento**

---

## 🛠️ Tecnologias Utilizadas

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
- ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
- ![Zod](https://img.shields.io/badge/Zod-3066BE?style=for-the-badge)
- ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
- ![bcrypt](https://img.shields.io/badge/bcrypt-004C7F?style=for-the-badge)
- ![dotenv](https://img.shields.io/badge/dotenv-008000?style=for-the-badge)
- ![CORS](https://img.shields.io/badge/CORS-333333?style=for-the-badge)

---

## 📁 Estrutura do Projeto

```
nexusvault-api/
 ├── prisma/
 │   └── schema.prisma
 ├── src/
 │   ├── controllers/
 │   ├── middlewares/
 │   ├── routes/
 │   ├── services/
 │   ├── utils/
 │   ├── validations/
 │   └── server.ts
 ├── .env
 ├── package.json
 ├── tsconfig.json
 └── README.md
```

---

## ⚙️ Como Executar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/Guilherme-Henry-Dev/nexusvault-api.git
cd nexusvault-api
```

### 2️⃣ Instalar dependências
```bash
npm install
```

### 3️⃣ Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto com:
```
DATABASE_URL="sua_conexao_postgresql"
JWT_SECRET="um-segredo-bem-forte"
PORT=3333
```

### 4️⃣ Rodar as migrações do Prisma
```bash
npx prisma migrate dev
```

### 5️⃣ Executar o servidor
```bash
npm run dev
```
A API estará rodando em:
```
http://localhost:3333
```

---

## 🔗 Endpoints Principais

| Método | Rota | Descrição |
|--------|------|------------|
| POST | `/auth/register` | Cria um novo usuário |
| POST | `/auth/login` | Faz login e retorna token JWT |
| GET | `/games` | Lista todos os jogos cadastrados do usuário |
| POST | `/games` | Cadastra um novo jogo |

---

## 🧩 Próximas Etapas

- [ ] Implementar CRUD completo de jogos  
- [ ] Criar sistema de avaliações e notas  
- [ ] Adicionar suporte a animes e séries  
- [ ] Criar documentação Swagger  
- [ ] Implementar testes automatizados  
- [ ] Integrar com o Front-End NexusVault

---

## 👨‍💻 Autor

**Guilherme Henry**  
💼 Designer & Desenvolvedor Front-End  
📍 Foco em branding, design digital e desenvolvimento web  
🔗 [LinkedIn](https://www.linkedin.com/in/guilherme-henry/)  
🔗 [GitHub](https://github.com/Guilherme-Henry-Dev)

---

> *“Um portal entre mundos, onde memórias digitais se tornam eternas.” — NexusVault*

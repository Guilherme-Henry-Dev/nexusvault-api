# 🎮 NexusVault API

API REST do NexusVault — seu cofre gamer para cadastrar, listar e gerenciar jogos.
Stack: Node.js + Express + Prisma + PostgreSQL com JWT (Bearer) para autenticação.

> Status: Em desenvolvimento (MVP funcional com auth e games)
> Próximas features: reviews, estatísticas/dash, uploads de capa, tags avançadas.

## Funcionalidades
- Autenticação JWT (register, login)
- CRUD de Jogos (privado)
- Estrutura modular (controllers, services, routes, middlewares)
- Validações com Zod
- Prisma ORM + PostgreSQL

## Instalação
```bash
npm install
npx prisma migrate dev --name init
npx prisma generate
npm run dev
```

Servidor em: http://localhost:3333

## Documentação Swagger
O arquivo swagger.json está incluído na raiz do projeto.

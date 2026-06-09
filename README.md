# Creative Formula Engine

Creative Formula Engine is the base application for an ad-creative analysis and idea-generation workflow. It provides a Next.js App Router frontend, a Prisma data layer, shared Zod schemas, and the first set of AI integration boundaries for future feature work.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- Prisma with SQLite
- Zod for runtime validation

## Install

```bash
npm install
```

## Environment variables

1. Copy `.env.example` to `.env`.
2. Fill in the values you need.

```bash
cp .env.example .env
```

Required variables:

- `DATABASE_URL`
- `OPENAI_API_KEY`
- `AI_PROVIDER`
- `OPENAI_MODEL`

## Prisma workflow

Generate the Prisma client:

```bash
npm run prisma:generate
```

Create and apply the first local migration:

```bash
npm run prisma:migrate -- --name init
```

Seed the local database:

```bash
npm run seed
```

Open Prisma Studio:

```bash
npm run prisma:studio
```

## Start the dev server

```bash
npm run dev
```

The default local URL is:

```text
http://localhost:3000
```

## Project structure

```text
prisma/
src/
  app/
  components/
  lib/
    ai/
    db/
    schemas/
```

## Roadmap

1. Add ad-upload and source-ingestion flows.
2. Build analysis APIs that persist validated `AdAnalysis` records.
3. Add formula extraction and idea-generation endpoints.
4. Introduce evaluation, revision, and history views.
5. Add auth, rate limiting, and production database support.


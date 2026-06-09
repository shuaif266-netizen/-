const setupChecklist = [
  "Next.js App Router scaffolded with TypeScript and Tailwind CSS.",
  "Prisma configured with SQLite and an AdAnalysis model.",
  "Shared Zod schemas and AI integration boundaries added.",
  "Seed data ready for local development.",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 py-16">
      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.08em] text-slate-500">
          Creative Formula Engine
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold text-slate-950">
          A base system for creative ad analysis, formula extraction, and idea generation.
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          This project is intentionally lean. It establishes the application shell, database model,
          validation layer, and AI provider boundaries so feature work can build on stable
          contracts.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {setupChecklist.map((item) => (
          <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm leading-6 text-slate-700">{item}</p>
          </div>
        ))}
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">Next steps</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
            <li>Run Prisma migrate to create the local SQLite database.</li>
            <li>Seed the example ad-analysis records.</li>
            <li>Build API routes that parse model output through Zod before returning it.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}


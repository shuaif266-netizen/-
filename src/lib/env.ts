import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  OPENAI_API_KEY: z.string().optional().default(""),
  AI_PROVIDER: z.enum(["openai"]).default("openai"),
  OPENAI_MODEL: z.string().min(1).default("gpt-4.1-mini"),
});

export const env = envSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  AI_PROVIDER: process.env.AI_PROVIDER,
  OPENAI_MODEL: process.env.OPENAI_MODEL,
});

export type Env = typeof env;


import { z } from "zod";

export const generatedIdeaSchema = z.object({
  title: z.string().min(1),
  concept: z.string().min(1),
  audience: z.string().min(1),
  channel: z.string().min(1),
  hook: z.string().min(1),
  visualDirection: z.string().min(1),
  copyDirection: z.string().min(1),
  rationale: z.string().min(1),
});

export const generatedIdeaListSchema = z.object({
  ideas: z.array(generatedIdeaSchema).min(1),
});

export type GeneratedIdea = z.infer<typeof generatedIdeaSchema>;


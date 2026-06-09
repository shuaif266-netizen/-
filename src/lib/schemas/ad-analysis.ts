import { z } from "zod";

export const adAnalysisSchema = z.object({
  id: z.string().cuid().optional(),
  brand: z.string().min(1),
  product: z.string().min(1),
  rawAdContent: z.string().min(1),
  targetAudience: z.string().min(1),
  coreMessage: z.string().min(1),
  creativeHook: z.string().min(1),
  elementA: z.string().min(1),
  elementB: z.string().min(1),
  bridge: z.string().min(1),
  bridgeType: z.string().min(1),
  emotion: z.string().min(1),
  narrativePattern: z.string().min(1),
  visualPattern: z.string().min(1),
  copywritingPattern: z.string().min(1),
  whyItFeelsCreative: z.string().min(1),
  reusableFormula: z.string().min(1),
  fullAnalysisJson: z.record(z.string(), z.unknown()),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export type AdAnalysis = z.infer<typeof adAnalysisSchema>;


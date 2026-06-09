import { env } from "@/lib/env";

import type { AITextProvider, GenerateTextParams, GenerateTextResult } from "./types";

type OpenAIResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
};

export class OpenAIProvider implements AITextProvider {
  async generateText(params: GenerateTextParams): Promise<GenerateTextResult> {
    if (!env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not configured.");
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: params.model ?? env.OPENAI_MODEL,
        temperature: params.temperature ?? 0.7,
        messages: [
          { role: "system", content: params.systemPrompt },
          { role: "user", content: params.userPrompt },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI request failed with status ${response.status}.`);
    }

    const data = (await response.json()) as OpenAIResponse;
    const text = data.choices?.[0]?.message?.content?.trim();

    if (!text) {
      throw new Error("OpenAI returned an empty response.");
    }

    return {
      provider: "openai",
      model: params.model ?? env.OPENAI_MODEL,
      text,
    };
  }
}

export const openAIProvider = new OpenAIProvider();


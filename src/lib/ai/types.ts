export type AIProviderName = "openai";

export interface GenerateTextParams {
  systemPrompt: string;
  userPrompt: string;
  model?: string;
  temperature?: number;
}

export interface GenerateTextResult {
  provider: AIProviderName;
  model: string;
  text: string;
}

export interface AITextProvider {
  generateText(params: GenerateTextParams): Promise<GenerateTextResult>;
}


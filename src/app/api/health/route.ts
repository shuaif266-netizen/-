import { NextResponse } from "next/server";
import { z } from "zod";

const healthResponseSchema = z.object({
  status: z.literal("ok"),
  service: z.literal("creative-formula-engine"),
});

export async function GET() {
  const payload = healthResponseSchema.parse({
    status: "ok",
    service: "creative-formula-engine",
  });

  return NextResponse.json(payload);
}


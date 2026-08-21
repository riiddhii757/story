import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const startedAt = Date.now();
  await new Promise((resolve) => setTimeout(resolve, 500));
  return NextResponse.json({
    ok: true,
    workflow: body.workflow ?? "unknown",
    status: "completed",
    durationMs: Date.now() - startedAt,
    steps: ["trigger", "ai-agent", "validation", "notification"]
  });
}

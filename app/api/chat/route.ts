import { streamText, UIMessage, convertToModelMessages } from "ai";
import { openai } from "@ai-sdk/openai";
export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openai("gpt-4.1-mini"),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}

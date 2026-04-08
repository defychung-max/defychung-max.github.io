export type ChatHistoryItem = {
  role: "user" | "model";
  parts: string;
};

type ChatResponse = {
  text?: string;
  error?: string;
};

function getChatApiUrl() {
  const configuredBase = import.meta.env.VITE_CHAT_API_URL?.trim();

  if (!configuredBase) {
    return "/api/chat";
  }

  return `${configuredBase.replace(/\/+$/, "")}/api/chat`;
}

export async function chatWithLabAI(message: string, history: ChatHistoryItem[] = []) {
  const response = await fetch(getChatApiUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message,
      history
    })
  });

  const data = (await response.json().catch(() => ({}))) as ChatResponse;

  if (!response.ok) {
    throw new Error(data.error || "Chat request failed.");
  }

  if (!data.text) {
    throw new Error("The chat API returned an empty response.");
  }

  return data.text;
}

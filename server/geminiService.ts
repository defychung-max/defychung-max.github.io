import { GoogleGenAI } from "@google/genai";
import { LAB_INFO, RESEARCH_AREAS, MEMBERS, PUBLICATIONS } from "../src/constants";

export type ChatHistoryItem = {
  role: "user" | "model";
  parts: string;
};

const KOREAN_KEYWORDS = {
  paper: "\uB17C\uBB38",
  journal: "\uC800\uB110",
  conference: "\uD559\uD68C",
  list: "\uBAA9\uB85D",
  all: "\uC804\uCCB4",
  every: "\uBAA8\uB450",
  latest: "\uCD5C\uC2E0",
  recent: "\uCD5C\uADFC",
  show: "\uBCF4\uC5EC\uC918",
  tell: "\uC54C\uB824\uC918",
  listed: "\uAC8C\uC2DC\uB41C",
  site: "\uC0AC\uC774\uD2B8",
  author: "\uC800\uC790",
  venue: "\uD559\uC220\uC9C0/\uD559\uD68C",
  year: "\uC5F0\uB3C4",
  type: "\uC720\uD615"
} as const;

const SORTED_PUBLICATIONS = [...PUBLICATIONS].sort((a, b) => {
  if (b.year !== a.year) return b.year - a.year;
  return a.title.localeCompare(b.title);
});

const PUBLICATION_CONTEXT = SORTED_PUBLICATIONS.map((publication, index) =>
  `${index + 1}. ${publication.title} | Authors: ${publication.authors} | Venue: ${publication.venue} | Year: ${publication.year} | Type: ${publication.type}`
).join("\n");

function getGeminiModel() {
  return process.env.GEMINI_MODEL?.trim() || "gemini-3-flash-preview";
}

function getAiClient() {
  const apiKey = process.env.GEMINI_API_KEY?.trim();

  if (!apiKey) {
    throw new Error("Missing GEMINI_API_KEY. Add it to your server environment before starting the app.");
  }

  return new GoogleGenAI({ apiKey });
}

const SYSTEM_PROMPT = `
You are the SBCML Lab Assistant, an AI chatbot for the Smart Bio-Communication & Machine Learning Lab at Hanyang University.
Your goal is to provide information about the lab's research, members, publications, and general information to visitors.

Lab Information:
- Name: ${LAB_INFO.fullName} (${LAB_INFO.name})
- University: ${LAB_INFO.university}
- Department: ${LAB_INFO.department}
- Location: ${LAB_INFO.location}
- PI: ${MEMBERS[0].name}

Research Areas:
${RESEARCH_AREAS.map((area) => `- ${area.title}: ${area.description}`).join("\n")}

Key Members:
${MEMBERS.map((member) => `- ${member.name} (${member.role}): ${member.description}`).join("\n")}

Recent Publications:
${SORTED_PUBLICATIONS.map((publication) => `- "${publication.title}" (${publication.year}) by ${publication.authors} at ${publication.venue} [${publication.type}]`).join("\n")}

Publication Source of Truth:
${PUBLICATION_CONTEXT}

Instructions:
- Be professional, helpful, and academic in tone.
- If you don't know the answer, suggest contacting the lab at ${LAB_INFO.email}.
- Keep responses concise but informative.
- Use Markdown for formatting.
- When the user asks about publications or papers, answer only from the Publication Source of Truth.
- When asked to list publications, provide the complete list from the Publication Source of Truth.
- Mention the title, authors, venue, year, and type when answering publication questions.
- If a publication question has no match, explicitly say no matching paper was found in the site publication list.
- Match the language of the user's question. Reply in Korean for Korean questions and English for English questions.
`;

function isKorean(text: string) {
  return /[\uAC00-\uD7A3]/.test(text);
}

function includesAny(text: string, keywords: string[]) {
  return keywords.some((keyword) => text.includes(keyword));
}

function getPublicationKeywords() {
  return [
    "publication",
    "publications",
    "paper",
    "papers",
    "article",
    "articles",
    KOREAN_KEYWORDS.paper,
    KOREAN_KEYWORDS.journal,
    KOREAN_KEYWORDS.conference
  ];
}

function wantsFullPublicationList(message: string) {
  const normalized = message.toLowerCase();
  return includesAny(normalized, [
    "list",
    "all",
    "every",
    "show all",
    "full list",
    KOREAN_KEYWORDS.list,
    KOREAN_KEYWORDS.all,
    KOREAN_KEYWORDS.every,
    KOREAN_KEYWORDS.show,
    KOREAN_KEYWORDS.tell
  ]);
}

function tokenizePublicationQuery(message: string) {
  const normalized = message.toLowerCase();
  const stripped = normalized
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean);

  const stopwords = new Set([
    "publication",
    "publications",
    "paper",
    "papers",
    "article",
    "articles",
    "list",
    "all",
    "every",
    "latest",
    "recent",
    "newest",
    "show",
    "tell",
    "what",
    "which",
    "are",
    "is",
    "on",
    "this",
    "that",
    "these",
    "those",
    "do",
    "does",
    "have",
    "has",
    "by",
    "from",
    "for",
    "please",
    "give",
    "published",
    "listed",
    "me",
    "about",
    "the",
    "our",
    "lab",
    "site",
    KOREAN_KEYWORDS.paper,
    KOREAN_KEYWORDS.list,
    KOREAN_KEYWORDS.all,
    KOREAN_KEYWORDS.every,
    KOREAN_KEYWORDS.latest,
    KOREAN_KEYWORDS.recent,
    KOREAN_KEYWORDS.show,
    KOREAN_KEYWORDS.tell,
    KOREAN_KEYWORDS.listed,
    KOREAN_KEYWORDS.site,
    KOREAN_KEYWORDS.journal,
    KOREAN_KEYWORDS.conference
  ]);

  return stripped
    .map((token) => token.replace(/\uB144(?:\uB3C4)?$/, ""))
    .filter((token) => !stopwords.has(token) && token.length > 1);
}

function formatPublicationEntry(publication: typeof SORTED_PUBLICATIONS[number], index: number, korean: boolean) {
  const authorLabel = korean ? KOREAN_KEYWORDS.author : "Authors";
  const venueLabel = korean ? KOREAN_KEYWORDS.venue : "Venue";
  const yearLabel = korean ? KOREAN_KEYWORDS.year : "Year";
  const typeLabel = korean ? KOREAN_KEYWORDS.type : "Type";

  return `${index + 1}. **${publication.title}**\n   - ${authorLabel}: ${publication.authors}\n   - ${venueLabel}: ${publication.venue}\n   - ${yearLabel}: ${publication.year}\n   - ${typeLabel}: ${publication.type}`;
}

function formatPublicationList(publications: typeof SORTED_PUBLICATIONS, korean: boolean) {
  const intro = korean
    ? `\uC774 \uC0AC\uC774\uD2B8 Publications \uD398\uC774\uC9C0\uC5D0 \uAC8C\uC2DC\uB41C \uB17C\uBB38\uC740 \uCD1D ${publications.length}\uD3B8\uC785\uB2C8\uB2E4.`
    : `There are ${publications.length} publications listed on the Publications page of this site.`;

  return [intro, ...publications.map((publication, index) => formatPublicationEntry(publication, index, korean))].join("\n");
}

function formatMatchedPublications(publications: typeof SORTED_PUBLICATIONS, message: string) {
  const korean = isKorean(message);

  if (publications.length === 0) {
    return korean
      ? `\uD604\uC7AC \uC774 \uC0AC\uC774\uD2B8\uC758 Publications \uBAA9\uB85D\uC5D0\uC11C \uC9C8\uBB38\uACFC \uC77C\uCE58\uD558\uB294 \uB17C\uBB38\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.`
      : "I could not find a publication matching your question in the site's Publications list.";
  }

  if (publications.length === SORTED_PUBLICATIONS.length || wantsFullPublicationList(message)) {
    return formatPublicationList(publications, korean);
  }

  const intro = korean
    ? `\uC9C8\uBB38\uACFC \uC77C\uCE58\uD558\uB294 \uB17C\uBB38\uC740 ${publications.length}\uD3B8\uC785\uB2C8\uB2E4.`
    : `I found ${publications.length} matching publication(s).`;

  return [intro, ...publications.map((publication, index) => formatPublicationEntry(publication, index, korean))].join("\n");
}

function resolvePublicationAnswer(message: string) {
  const normalized = message.toLowerCase();
  if (!includesAny(normalized, getPublicationKeywords())) {
    return null;
  }

  const korean = isKorean(message);

  if (includesAny(normalized, ["latest", "recent", "newest", KOREAN_KEYWORDS.latest, KOREAN_KEYWORDS.recent])) {
    const latestYear = Math.max(...SORTED_PUBLICATIONS.map((publication) => publication.year));
    const latestPublications = SORTED_PUBLICATIONS.filter((publication) => publication.year === latestYear);
    const intro = korean
      ? `\uC774 \uC0AC\uC774\uD2B8\uC5D0 \uAC8C\uC2DC\uB41C \uCD5C\uC2E0 \uB17C\uBB38\uC740 ${latestYear}\uB144 \uB17C\uBB38 ${latestPublications.length}\uD3B8\uC785\uB2C8\uB2E4.`
      : `The latest publications listed on this site are ${latestPublications.length} paper(s) from ${latestYear}.`;

    return [intro, ...latestPublications.map((publication, index) => formatPublicationEntry(publication, index, korean))].join("\n");
  }

  const yearMatch = message.match(/\b(19|20)\d{2}\b/);
  let matchedPublications = SORTED_PUBLICATIONS;

  if (yearMatch) {
    matchedPublications = matchedPublications.filter((publication) => publication.year === Number(yearMatch[0]));
  }

  const tokens = tokenizePublicationQuery(message);
  if (tokens.length > 0) {
    matchedPublications = matchedPublications.filter((publication) => {
      const haystack = `${publication.title} ${publication.authors} ${publication.venue} ${publication.type} ${publication.year}`.toLowerCase();
      return tokens.every((token) => haystack.includes(token));
    });
  }

  return formatMatchedPublications(matchedPublications, message);
}

export async function chatWithLabAI(message: string, history: ChatHistoryItem[] = []) {
  const publicationAnswer = resolvePublicationAnswer(message);
  if (publicationAnswer) {
    return publicationAnswer;
  }

  const ai = getAiClient();
  const response = await ai.models.generateContent({
    model: getGeminiModel(),
    contents: [
      ...history.map((item) => ({ role: item.role, parts: [{ text: item.parts }] })),
      { role: "user", parts: [{ text: message }] }
    ],
    config: {
      systemInstruction: SYSTEM_PROMPT
    }
  });

  return response.text || "I'm sorry, I couldn't process that request.";
}

import express from "express";
import dotenv from "dotenv";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer as createViteServer } from "vite";
import type { Request, Response } from "express";
import { chatWithLabAI, type ChatHistoryItem } from "./geminiService";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const isProduction = process.argv.includes("--prod");

dotenv.config({ path: path.resolve(rootDir, ".env.local") });
dotenv.config({ path: path.resolve(rootDir, ".env") });

const port = Number(process.env.PORT || 3000);

function withCors(req: Request, res: Response) {
  const allowedOrigin = process.env.ALLOWED_ORIGIN?.trim();
  const requestOrigin = req.headers.origin;

  if (!allowedOrigin) {
    return;
  }

  if (allowedOrigin === "*" || requestOrigin === allowedOrigin) {
    res.setHeader("Access-Control-Allow-Origin", allowedOrigin === "*" ? "*" : allowedOrigin);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
}

async function createApp() {
  const app = express();

  app.use((req, res, next) => {
    withCors(req, res);

    if (req.method === "OPTIONS") {
      res.status(204).end();
      return;
    }

    next();
  });

  app.use(express.json({ limit: "1mb" }));

  app.get("/api/health", (_req, res) => {
    res.json({
      ok: true,
      model: process.env.GEMINI_MODEL?.trim() || "gemini-3-flash-preview"
    });
  });

  app.post("/api/chat", async (req, res) => {
    const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";
    const rawHistory = Array.isArray(req.body?.history) ? req.body.history : [];

    if (!message) {
      res.status(400).json({ error: "A non-empty 'message' field is required." });
      return;
    }

    const history: ChatHistoryItem[] = rawHistory
      .filter((item): item is ChatHistoryItem => {
        return (
          item &&
          (item.role === "user" || item.role === "model") &&
          typeof item.parts === "string"
        );
      })
      .slice(-12);

    try {
      const text = await chatWithLabAI(message, history);
      res.json({ text });
    } catch (error) {
      console.error("Chat API Error:", error);
      res.status(500).json({
        error: error instanceof Error ? error.message : "The chatbot request failed."
      });
    }
  });

  if (isProduction) {
    const distDir = path.resolve(rootDir, "dist");
    app.use(express.static(distDir));

    app.get("*", async (_req, res) => {
      const indexHtml = await fs.readFile(path.join(distDir, "index.html"), "utf8");
      res.status(200).setHeader("Content-Type", "text/html").end(indexHtml);
    });

    return app;
  }

  const vite = await createViteServer({
    root: rootDir,
    server: {
      middlewareMode: true
    },
    appType: "spa"
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res, next) => {
    try {
      const url = req.originalUrl;
      const templatePath = path.resolve(rootDir, "index.html");
      const template = await fs.readFile(templatePath, "utf8");
      const html = await vite.transformIndexHtml(url, template);
      res.status(200).setHeader("Content-Type", "text/html").end(html);
    } catch (error) {
      vite.ssrFixStacktrace(error as Error);
      next(error);
    }
  });

  return app;
}

createApp()
  .then((app) => {
    app.listen(port, () => {
      const mode = isProduction ? "production" : "development";
      console.log(`[chat-server] ${mode} server running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
  });

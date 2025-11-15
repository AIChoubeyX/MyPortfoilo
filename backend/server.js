import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { SYSTEM_PROMPT } from "./systemPrompt.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// CORS (only local dev)
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "http://localhost:8080",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ---- OpenRouter Model Fallback List (Free Models) ----
const OPENROUTER_MODELS = [
  "mistralai/mistral-7b-instruct:free",
  "openchat/openchat-3.5:free",
  "gryphe/mythomax-l2-13b:free",
  "undi95/toppy-m-7b:free",
  "nousresearch/nous-hermes-2-mixtral-8x7b-dpo:free"
];

// Health check
app.get("/", (req, res) => {
  res.json({
    status: "Server running",
    timestamp: new Date().toISOString(),
    openrouterKey: !!process.env.OPENROUTER_API_KEY,
  });
});

// ---- Chat Route ----
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  console.log("\n=== CHAT REQUEST ===");
  console.log("📨 Message:", message);

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  if (!process.env.OPENROUTER_API_KEY) {
    return res.status(500).json({
      reply: "Server is not configured with OpenRouter API key.",
    });
  }

  // --- Try each model until one succeeds ---
  for (const model of OPENROUTER_MODELS) {
    try {
      console.log(`⚡ Trying model: ${model}`);

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: message },
          ],
          max_tokens: 2048,
          temperature: 0.9,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(`❌ Model failed: ${model}`, data);
        continue; // try next model
      }

      const reply = data?.choices?.[0]?.message?.content;

      if (reply) {
        console.log(`✅ Successful using model: ${model}`);
        return res.json({ reply, model });
      }

    } catch (err) {
      console.error(`💥 Error with model ${model}:`, err.message);
      continue; // try next model
    }
  }

  // If all models fail
  return res.status(500).json({
    reply: "All AI models failed to respond. Try again later.",
  });
});

// 404
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.path,
  });
});

// Start server
app.listen(PORT, () => {
  console.log("==========================================");
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔑 OpenRouter Key: ${process.env.OPENROUTER_API_KEY ? "✔️" : "❌"}`);
  console.log("==========================================");
});

export default app;

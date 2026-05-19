import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for querying the Gemini AI
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, systemInstruction, customApiKey } = req.body;
      
      let apiKey = customApiKey || process.env.GEMINI_API_KEY;
      
      if (!apiKey || apiKey === "undefined" || apiKey === "") {
        // Fallback to VITE_GEMINI_API_KEY if testing locally and not using AI Studio
        apiKey = process.env.VITE_GEMINI_API_KEY;
      }
      
      let ai;
      if (!apiKey || apiKey === "undefined" || apiKey === "your-api-key-here" || apiKey === "") {
        console.warn("Using default GoogleGenAI initialization. No explicit API key found.");
        ai = new GoogleGenAI(); // Fallback to let the SDK try to find it
      } else {
        ai = new GoogleGenAI({ apiKey });
      }
      
      const response = await ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.2,
        }
      }).sendMessage({ message: messages[messages.length - 1].content }); // Using the last user message to continue

      res.json({ response: response.text });
      
    } catch (error: any) {
      console.error("AI Error:", error);
      
      let errorMessage = "EVALUATION FAULT: A network or processing error interrupted the analysis.";
      if (error?.message?.includes('API key not valid') || error?.status === 'INVALID_ARGUMENT') {
        errorMessage = "EVALUATION FAULT: The provided Gemini API Key is invalid or expired. Please check your API key configuration.";
      }
      
      res.status(500).json({ error: errorMessage });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

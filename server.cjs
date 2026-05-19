var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, systemInstruction, customApiKey } = req.body;
      let apiKey = customApiKey || process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "undefined" || apiKey === "") {
        apiKey = process.env.VITE_GEMINI_API_KEY;
      }
      let ai;
      if (!apiKey || apiKey === "undefined" || apiKey === "your-api-key-here" || apiKey === "") {
        console.warn("Using default GoogleGenAI initialization. No explicit API key found.");
        ai = new import_genai.GoogleGenAI();
      } else {
        ai = new import_genai.GoogleGenAI({ apiKey });
      }
      const response = await ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction,
          temperature: 0.2
        }
      }).sendMessage({ message: messages[messages.length - 1].content });
      res.json({ response: response.text });
    } catch (error) {
      console.error("AI Error:", error);
      let errorMessage = "EVALUATION FAULT: A network or processing error interrupted the analysis.";
      if (error?.message?.includes("API key not valid") || error?.status === "INVALID_ARGUMENT") {
        errorMessage = "EVALUATION FAULT: The provided Gemini API Key is invalid or expired. Please check your API key configuration.";
      }
      res.status(500).json({ error: errorMessage });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map

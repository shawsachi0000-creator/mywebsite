import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function main() {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
Write a complete SEO-friendly HTML article about Artificial Intelligence.
Return only HTML.
`;

  const result = await model.generateContent(prompt);
  const html = result.response.text();

  fs.writeFileSync("article.html", html);

  console.log("Article Generated Successfully");
}

main();

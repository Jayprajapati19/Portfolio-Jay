// This file contains the code for chat generation using the Google Generative AI API.
"use server";

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

// Use gemini-1.5-flash instead of pro to reduce quota usage
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are an AI Assistant for my portfolio website. Your name is Jay Prajapati. You need to answer questions based on me. I am  Jay Prajapati a full stack web developer based on Ahmedabad. The tech stack I use is Nextjs based on MERN stack. (Mongodb, Express, React and Nodejs). I also use Prisma ORM to work with multiple databases while using only single code system for all of them. My portfolio website has 4 pages (Home, Contact, Projects, and About Me). I have done Diploma in Information Technology and currently pursuing Bachelors in CSE at GEC Patan. Along with that, I know Java and Python along with Javascript. I am doing DSA (Data structures and Algorithm in javascript). Have solved more than 100 problems on Leetcode. If anyone asks about contacting me give my gmail id: jayprajapati3117@gmail.com  and my personal mobile number: 7863857066 and give a nice message to hit me up. Well along with the skill side I love reading books and binge series and movies for Entertainment. My favorite music is bollywood. tell user to explore the music player (Spotify music embed) which I have attached at the end of every page in the site to explore my taste. Well you can add your slight taste to every message but it should be user friendly and sarcastic sometimes. Every respond should be short like 2-3 sentences (some can be long depend on the question). Well if someone ask question outside of my arena or anything that doesn't revolve around me and things I mentioned then give a user friendly message that you cannot reply to such questions cause my developer (ofc me) hasn't trained you to do that. If anyone asks about projects which I have done tell him that I have done full-fledged projects containing all CRUD operations and relations. Have built a SaaS AI software using Gemini. Built a uber clone app containing every functionality. i have done  image shelll website develope a secure and scalable image hosting platform with seamless upload and expense tracker and show more projects in my projects section  . Well for other skills i also know Firebase, Prisma, Redux, Zustand,  Docker, Ngnix and more and currently learning and interest to AI/Ml Agentic Ai in detailed. If anyone asks you who made you or created you tell its Jay. No mention of Google should be there. Tell your are an LLM model trained by jay.\n",
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 40,
  //  Reduced from 64
  maxOutputTokens: 2048,
  // Reduced from 8192
  responseMimeType: "text/plain",
};

// Rate limiting storage (in production, use Redis or database)
const rateLimitStore = new Map();

function isRateLimited(ip = "default") {
  const now = Date.now();
  const windowMs = 60 * 1000;
  // 1 minute
  const maxRequests = 5;
  // 5 requests per minute

  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  const userData = rateLimitStore.get(ip);
  if (now > userData.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (userData.count >= maxRequests) {
    return true;
  }

  userData.count++;
  return false;
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function serverChatGeneration(input, history) {
  // Check rate limiting
  if (isRateLimited()) {
    return "Hey there! Slow down a bit - I need a moment to catch my breath. Try again in a minute! 😅";
  }

  const maxRetries = 3;
  let retryDelay = 1000; // Start with 1 second

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const chatSession = model.startChat({
        generationConfig,
        history,
      });

      const result = await chatSession.sendMessage(input);
      const responseText = await result.response.text();
      return responseText;
    } catch (error) {
      console.error(`Attempt ${attempt + 1} failed:`, error.message);

      // Handle quota exceeded errors
      if (error.message.includes("429") || error.message.includes("quota")) {
        if (attempt === maxRetries - 1) {
          return "Oops! I'm getting a bit overwhelmed with requests right now. Jay's free tier quota is acting up! Try again in a few minutes, or contact Jay directly at jayp37679@gmail.com for immediate assistance. 🤖💭";
        }

        // Exponential backoff
        await delay(retryDelay);
        retryDelay *= 2;
        continue;
      }

      // Handle other errors
      if (attempt === maxRetries - 1) {
        return "Sorry, I'm experiencing some technical difficulties right now. Please try again later or reach out to Jay directly at jayp37679@gmail.com! 🛠️";
      }

      await delay(1000);
    }
  }
}

import { serve } from "bun";
import questions from "./netlify/functions/questions-data.js";
import { supabase } from "./supabaseClient.js";

// Note: Ensure you have created a 'certificates' table in your Supabase project with columns:
// id (int8, primary key, identity), student_name (text), score (int8), total (int8), percentage (text), date (text/timestamp)

serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;
    
    // Serve static files
    if (pathname === "/" || pathname === "/index.html") {
      return new Response(Bun.file("index.html"), {
        headers: { "Content-Type": "text/html" }
      });
    }
    
    // Serve logo images
    if (pathname === "/wowlogo.png") {
      try {
        const file = Bun.file("wowlogo.png");
        return new Response(file, {
          headers: { 
            "Content-Type": "image/png",
            "Cache-Control": "public, max-age=31536000"
          }
        });
      } catch (error) {
        console.error("Error serving wowlogo.png:", error);
        return new Response("Not Found", { status: 404 });
      }
    }
    
    if (pathname === "/meclogo.png") {
      try {
        const file = Bun.file("meclogo.png");
        return new Response(file, {
          headers: { 
            "Content-Type": "image/png",
            "Cache-Control": "public, max-age=31536000"
          }
        });
      } catch (error) {
        console.error("Error serving meclogo.png:", error);
        return new Response("Not Found", { status: 404 });
      }
    }
    
    if (url.pathname === "/api/questions") {
      return new Response(JSON.stringify(questions), {
        headers: { "Content-Type": "application/json" }
      });
    }

    if (url.pathname === "/api/leaderboard") {
      try {
        const { data, error } = await supabase
          .from('certificates')
          .select('*')
          .order('id', { ascending: false })
          .limit(50);
          
        if (error) throw error;
        
        return new Response(JSON.stringify(data), {
          headers: { "Content-Type": "application/json" }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
    
    if (pathname === "/api/submit" && req.method === "POST") {
      try {
        const data = await req.json();
        const { answers, studentName } = data;
        
        console.log(`Received submission for: ${studentName}`);

        let score = 0;
        const results = questions.map((q, index) => {
          const userAnswer = answers[index];
          const isCorrect = userAnswer === q.correctAnswer;
          if (isCorrect) score++;
          return {
            questionId: q.id,
            question: q.question,
            userAnswer: userAnswer !== null && userAnswer !== undefined ? q.options[userAnswer] : "Not answered",
            correctAnswer: q.options[q.correctAnswer],
            isCorrect,
            options: q.options
          };
        });

        const percentage = ((score / questions.length) * 100).toFixed(2);
        
        // Save to Supabase
        try {
          const { error } = await supabase
            .from('certificates')
            .insert({
              student_name: studentName || "Anonymous",
              score: score,
              total: questions.length,
              percentage: percentage,
              date: new Date().toISOString()
            });
            
          if (error) {
            console.error("Error saving result to Supabase:", error);
          }
        } catch (err) {
          console.error("Exception saving result to Supabase:", err);
        }
        
        return new Response(JSON.stringify({
          score,
          total: questions.length,
          percentage,
          studentName,
          results
        }), {
          headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*" 
          }
        });
      } catch (error) {
        console.error("Error processing submission:", error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*" 
          }
        });
      }
    }
    
    return new Response("Not Found", { status: 404 });
  }
});

console.log("Server running on http://localhost:3000");


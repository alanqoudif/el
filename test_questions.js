
try {
  const { questions, handler } = require('./netlify/functions/questions.js');
  console.log("Successfully required questions.js");
  console.log(`Loaded ${questions.length} questions`);
  console.log("Handler type:", typeof handler);
  
  // Test handler execution
  handler().then(res => {
      console.log("Handler response status:", res.statusCode);
      console.log("Handler body length:", res.body.length);
  }).catch(err => {
      console.error("Handler execution failed:", err);
  });

} catch (err) {
  console.error("Failed to require questions.js:", err);
}

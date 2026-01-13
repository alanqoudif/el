const questions = require('./questions-data');

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    // Parse request body
    let data;
    if (typeof req.body === 'string') {
      data = JSON.parse(req.body);
    } else if (req.body) {
      data = req.body;
    } else {
      return res.status(400).json({ error: 'Request body is missing' });
    }
    
    const { answers, studentName } = data;
    
    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ error: 'Invalid answers format' });
    }
    
    if (!studentName || typeof studentName !== 'string' || studentName.trim() === '') {
      return res.status(400).json({ error: 'Student name is required' });
    }
    
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
    
    return res.status(200).json({
      score,
      total: questions.length,
      percentage: ((score / questions.length) * 100).toFixed(2),
      studentName: studentName.trim(),
      results
    });
  } catch (error) {
    console.error('Error processing submission:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message 
    });
  }
};
# Quiz Platform - Asynchronous Quiz 1

A quiz platform that allows students to take a 77-question multiple choice quiz. Works both locally with Bun and on Netlify.

## Features

- Student name entry before starting the quiz
- 77 multiple choice questions
- Timer (90 minutes)
- Question navigation grid
- Answer tracking (Answered/Not Answered/Not Visited)
- Results page showing:
  - Total score
  - Percentage
  - Correct and incorrect answers
  - Correct answer for each question

## Local Development

### Installation

1. Install Bun (if not already installed):
```bash
curl -fsSL https://bun.sh/install | bash
```

2. Install dependencies:
```bash
bun install
```

### Running the Application

Start the server:
```bash
bun start
```

Or:
```bash
bun server.js
```

The application will be available at: http://localhost:3000

## Deployment on Netlify

This application is configured to work on Netlify using Netlify Functions.

### Steps to Deploy:

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect to Netlify:**
   - Go to [Netlify](https://www.netlify.com/)
   - Click "New site from Git"
   - Connect your repository

3. **Build Settings:**
   - Build command: (leave empty or use `echo "No build needed"`)
   - Publish directory: `.` (root directory)

4. **Deploy:**
   - Netlify will automatically detect `netlify.toml` and deploy
   - The site will be live at `https://your-site.netlify.app`

### Netlify Configuration

The project includes:
- `netlify.toml` - Netlify configuration file
- `netlify/functions/` - Serverless functions for API endpoints
  - `questions.js` - Returns all quiz questions
  - `submit.js` - Handles quiz submission and scoring

## Usage

1. Open your browser and navigate to the application URL
2. Enter your name and click "Start Quiz"
3. Answer all 77 questions
4. Click "Finish Test" when done (or wait for timer to expire)
5. View your results with detailed feedback

## Project Structure

- `server.js` - Bun server with API endpoints (for local development)
- `index.html` - Frontend HTML/CSS/JavaScript
- `package.json` - Project dependencies and scripts
- `netlify.toml` - Netlify configuration
- `netlify/functions/` - Netlify serverless functions
  - `questions.js` - API endpoint for questions
  - `submit.js` - API endpoint for quiz submission

## API Endpoints

- `GET /api/questions` - Get all quiz questions
- `POST /api/submit` - Submit quiz answers and get results

## Notes

- The application works as a static site on Netlify with serverless functions
- No build process is required - files are served as-is
- Images (`wowlogo.png`, `meclogo.png`) are served as static assets


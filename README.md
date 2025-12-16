# Quiz Platform - Asynchronous Quiz 1

A quiz platform built with Bun that allows students to take a 77-question multiple choice quiz.

## Features

- Student name entry before starting the quiz
- 77 multiple choice questions
- Timer (5 minutes)
- Question navigation grid
- Answer tracking (Answered/Not Answered/Not Visited)
- Results page showing:
  - Total score
  - Percentage
  - Correct and incorrect answers
  - Correct answer for each question

## Installation

1. Install Bun (if not already installed):
```bash
curl -fsSL https://bun.sh/install | bash
```

2. Install dependencies:
```bash
bun install
```

## Running the Application

Start the server:
```bash
bun start
```

Or:
```bash
bun server.js
```

The application will be available at: http://localhost:3000

## Usage

1. Open your browser and navigate to http://localhost:3000
2. Enter your name and click "Start Quiz"
3. Answer all 77 questions
4. Click "Finish Test" when done (or wait for timer to expire)
5. View your results with detailed feedback

## Project Structure

- `server.js` - Bun server with API endpoints
- `index.html` - Frontend HTML/CSS/JavaScript
- `package.json` - Project dependencies and scripts

## API Endpoints

- `GET /api/questions` - Get all quiz questions
- `POST /api/submit` - Submit quiz answers and get results


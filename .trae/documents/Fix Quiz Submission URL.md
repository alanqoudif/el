I will fix the "Unknown error" by correcting the API endpoint in your `index.html` file.

**The Problem:**
The "Unknown error" occurs because the website is trying to send the answers to `/.netlify/functions/submit`, but your local server is listening on `/api/submit`. This causes a "404 Not Found" error, which the browser fails to read as JSON, resulting in the "Unknown error" message.

**The Plan:**
1.  **Update `index.html`:** Change the submission URL from `/.netlify/functions/submit` to `/api/submit`.
2.  **Verify:** Ensure the change is applied so the quiz submits successfully to your local server.

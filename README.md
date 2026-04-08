<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI chatbot site

This app now uses a safer architecture:

- Browser UI -> `/api/chat`
- Server -> Gemini API
- `GEMINI_API_KEY` stays on the server side only

## Local development

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Create `.env.local` in the project root.
3. Add your Gemini settings:

```env
GEMINI_API_KEY="YOUR_REAL_GEMINI_API_KEY"
GEMINI_MODEL="gemini-3-flash-preview"
```

4. Start the app:
   `npm run dev`

The development server runs the Vite frontend and the `/api/chat` endpoint together on the same port.

## API key location

- Local development: store the key in `.env.local` at the project root.
- Production hosting: store the key in your server host's environment variables or secret manager.
- Do not put the Gemini API key in client-side code, `vite.config.ts`, or public GitHub Pages assets.

## Deployment note

If you deploy this as a static-only GitHub Pages site, the secure chat API cannot run there because GitHub Pages does not provide a private server runtime.

For a secure chatbot deployment, host the app or at least the `/api/chat` route on a platform that supports server-side environment variables, such as:

- Google AI Studio app hosting
- Google Cloud Run
- Render
- Railway
- Vercel / Netlify functions

If your frontend and backend are on different origins, set `VITE_CHAT_API_URL` to the API base URL and optionally `ALLOWED_ORIGIN` on the server.

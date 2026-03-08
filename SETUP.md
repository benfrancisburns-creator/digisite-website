# DigiBot — Setup Instructions

Two files to add to the project, one environment variable to set, one line to add to your layout.

---

## Step 1 — Add the files

Copy both files into your existing project:

```
netlify/functions/chat.js      →  handles the API call server-side
src/components/DigiBot.astro   →  the chat widget
```

---

## Step 2 — Add your Anthropic API key

In Netlify dashboard:
→ Site settings → Environment variables → Add variable

```
Key:    ANTHROPIC_API_KEY
Value:  your key from platform.anthropic.com
```

For local dev, create a `.env` file in your project root:
```
ANTHROPIC_API_KEY=sk-ant-...
```

Get your API key at: https://platform.anthropic.com/settings/api-keys
New accounts get $5 free credit — no card needed to start.

---

## Step 3 — Add DigiBot to your layout

In your main layout file (e.g. `src/layouts/Layout.astro`), import and add the component just before `</body>`:

```astro
---
import DigiBot from '../components/DigiBot.astro';
---

<!-- your existing layout -->
<DigiBot />
</body>
```

---

## Step 4 — Deploy

Push to GitHub. Netlify picks up the function automatically from the `netlify/functions/` folder and deploys it as a serverless endpoint at `/api/chat`.

No additional Netlify config needed.

---

## How it works

- DigiBot pops open automatically after 4 seconds with a greeting and four suggested questions
- Conversation history is maintained through the session so context carries forward
- The Netlify function keeps your API key server-side — never exposed in the browser
- Model: Claude Haiku (fast, cheap — ~£0.01 per full conversation)
- Max response length: 600 tokens (keeps replies concise)

---

## Estimated running cost

| Monthly conversations | Estimated cost |
|---|---|
| 50 | ~$0.50 |
| 200 | ~$2.00 |
| 1,000 | ~$10.00 |

Negligible at digiscaff.co.uk traffic levels in the early months.

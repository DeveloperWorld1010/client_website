# CodeBheem — Next.js + Tailwind CSS

CodeBheem is a responsive, animated developer-services website rebuilt with **Next.js 16 App Router** and **Tailwind CSS v4**. It is designed for Vercel deployment and uses a Next.js Route Handler + Resend for the working project enquiry form.

## Stack

- Next.js 16.3.1 (App Router / Turbopack)
- React 19.2
- Tailwind CSS v4 via `@tailwindcss/postcss`
- Responsive server-rendered pages
- Minimal client JavaScript only for navigation, reveal effects, FAQ and contact form
- Next.js Route Handler at `app/api/contact/route.js`
- Resend REST API for contact-email delivery
- Vercel-ready

## Local setup

Requires Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

The project includes `allowedDevOrigins` for `127.0.0.1`, so opening the local site with `http://127.0.0.1:3000` does not trigger the Next.js dev-resource cross-origin warning.

## Tailwind setup

Tailwind v4 is configured through:

- `postcss.config.mjs`
- `app/globals.css` with `@import "tailwindcss"`
- utility classes throughout pages/components
- a small custom `@theme` for CodeBheem design tokens and animation keyframes

There is intentionally no `tailwind.config.js` because Tailwind v4 does not require one for this setup.

## Configure the working contact form

Create a Resend account/API key and configure:

```env
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_TO_EMAIL=your-email@example.com
RESEND_FROM_EMAIL=CodeBheem <hello@yourdomain.com>
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

For production sending, verify your sending domain in Resend and use an address on that domain for `RESEND_FROM_EMAIL`.

The form includes:

- browser required/email validation
- server-side validation and length limits
- JSON content-type and body-size checks
- hidden honeypot anti-bot field
- basic burst rate limiting
- HTML escaping before email rendering
- server-only Resend API key
- visitor email as `reply_to`
- client request timeout and server email-provider timeout

> Note: in-memory rate limiting is only a lightweight burst guard on serverless hosting. For strict distributed rate limiting, add a durable store such as Vercel KV/Redis later.

## Deploy to Vercel

1. Push this folder to GitHub/GitLab/Bitbucket.
2. Import the repository in Vercel.
3. Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `RESEND_FROM_EMAIL`, and `NEXT_PUBLIC_SITE_URL` in Project Settings → Environment Variables.
4. Deploy.
5. Submit a test enquiry from `/contact` and verify that the email arrives.

No PHP runtime is required.

## Main routes

- `/`
- `/services`
- `/portfolio`
- `/about`
- `/pricing`
- `/contact`
- `/privacy`

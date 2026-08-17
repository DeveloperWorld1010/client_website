# CodeBheem — Next.js + Tailwind CSS

CodeBheem is a responsive, animated developer-services website rebuilt with **Next.js 16 App Router** and **Tailwind CSS v4**. It is designed for Vercel deployment and uses a Next.js Route Handler + SMTP for the working project enquiry form.

## Stack

- Next.js 16.3.1 (App Router / Turbopack)
- React 19.2
- Tailwind CSS v4 via `@tailwindcss/postcss`
- Responsive server-rendered pages
- Minimal client JavaScript only for navigation, reveal effects, FAQ and contact form
- Next.js Route Handler at `app/api/contact/route.js`
- Nodemailer SMTP for contact-email delivery
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

- `postcss.config.cjs`
- `app/globals.css` with `@import "tailwindcss"`
- utility classes throughout pages/components
- a small custom `@theme` for CodeBheem design tokens and animation keyframes

There is intentionally no `tailwind.config.js` because Tailwind v4 does not require one for this setup.

## Configure the working contact form

The contact form uses SMTP. For a free Gmail setup, enable 2-Step Verification in your Google account, create an App Password, then configure:

```env
CONTACT_TO_EMAIL=your-gmail@gmail.com
CONTACT_FROM_EMAIL=CodeBheem <your-gmail@gmail.com>
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-character-google-app-password
```

Use the Google App Password, not your normal Gmail password.

The form includes:

- browser required/email validation
- server-side validation and length limits
- JSON content-type and body-size checks
- hidden honeypot anti-bot field
- basic burst rate limiting
- HTML escaping before email rendering
- server-only SMTP credentials
- visitor email as `reply_to`
- client request timeout

> Note: in-memory rate limiting is only a lightweight burst guard on serverless hosting. For strict distributed rate limiting, add a durable store such as Vercel KV/Redis later.

## Deploy to Vercel

1. Push this folder to GitHub/GitLab/Bitbucket.
2. Import the repository in Vercel.
3. Add `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, and `NEXT_PUBLIC_SITE_URL` in Project Settings → Environment Variables.
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

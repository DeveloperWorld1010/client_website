# CodeBheem — Next.js Edition

The original CodeBheem multi-page website rebuilt with **Next.js App Router** for Vercel deployment. It keeps the same responsive, animated dark UI and replaces the old PHP/Netlify form with a Vercel-compatible Next.js API route.

## Stack

- Next.js App Router
- React
- Plain CSS (same CodeBheem design; no Tailwind required)
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

## Configure the working contact form

Create a Resend account/API key and configure these environment variables:

```env
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_TO_EMAIL=your-email@example.com
RESEND_FROM_EMAIL=CodeBheem <hello@yourdomain.com>
```

For production sending, verify your sending domain in Resend and use an address on that domain for `RESEND_FROM_EMAIL`.

The form includes:

- required-field and email validation
- server-side validation and length limits
- hidden honeypot anti-bot field
- basic burst rate limiting
- HTML escaping before email rendering
- no API key exposed to the browser
- user email set as the reply-to address

## Deploy to Vercel

1. Push this folder to GitHub, GitLab, or Bitbucket.
2. Import the repository in Vercel.
3. In **Project Settings → Environment Variables**, add:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `RESEND_FROM_EMAIL`
   - `NEXT_PUBLIC_SITE_URL` (recommended; your Vercel/custom domain)
4. Deploy.
5. Submit a test enquiry from `/contact` and verify the email arrives.

No PHP runtime is required.

## Important before production

Set `NEXT_PUBLIC_SITE_URL` to your final Vercel/custom domain. If it is omitted, the project uses `https://codebheem.vercel.app` as a placeholder canonical URL.

## Main routes

- `/`
- `/services`
- `/portfolio`
- `/about`
- `/pricing`
- `/contact`
- `/privacy`


# 🚀 Cloudflare Form Setup Guide

This guide will help you set up the complete Cloudflare form submission system for Artadent.

## ✅ What's Already Done

1. **Worker Code**: Complete form handler with Turnstile verification
2. **Frontend Integration**: Contact form updated with Turnstile widget
3. **Environment Setup**: Configuration files ready

## 🔧 Setup Steps (5-10 minutes)

### Step 1: Get Cloudflare Account & Turnstile Keys

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Turnstile** (left sidebar)
3. Click **"Add Site"**
4. Add these domains:
   - `localhost` (for development)
   - `artadent.vercel.app` (or your domain)
5. Choose **"Managed"** mode
6. Copy the **Site Key** and **Secret Key**

### Step 2: Update Frontend with Real Site Key

Edit `/src/app/kontakt/contact-form.tsx` line 392:
```tsx
siteKey="YOUR_ACTUAL_SITE_KEY_HERE" // Replace this
```

### Step 3: Deploy Worker

```bash
# Go to worker directory
cd artadent-forms

# Login to Cloudflare (first time only)
wrangler login

# Set environment variables
wrangler secret put TURNSTILE_SECRET_KEY
# Enter your Turnstile secret key when prompted

# For email (use placeholder initially)
wrangler secret put SMTP_HOST
# Enter: smtp.gmail.com

wrangler secret put SMTP_PORT  
# Enter: 587

wrangler secret put SMTP_USER
# Enter: your.email@gmail.com

wrangler secret put SMTP_PASS
# Enter: your_gmail_app_password

wrangler secret put EMAIL_FROM
# Enter: noreply@artadent.no

wrangler secret put EMAIL_TO
# Enter: your.email@gmail.com

# Deploy the worker
wrangler deploy
```

### Step 4: Update Frontend Endpoint

After deployment, update the worker URL in `/src/app/kontakt/contact-form.tsx` line 91:
```tsx
const response = await fetch('https://artadent-forms.YOUR-ACCOUNT.workers.dev', {
```

Replace `YOUR-ACCOUNT` with your actual Cloudflare account name.

## 📧 Email Setup Options

### Option A: Gmail (Quick Start)
1. Enable 2FA on your Gmail account
2. Generate an [App Password](https://support.google.com/accounts/answer/185833)
3. Use these settings:
   - SMTP_HOST: `smtp.gmail.com`
   - SMTP_PORT: `587`
   - SMTP_USER: `your.email@gmail.com`
   - SMTP_PASS: `your_app_password`

### Option B: Professional Email
- If you have a domain email (like `info@artadent.no`), use your hosting provider's SMTP settings

### Option C: Email Service (Recommended for Production)
- **Resend**: [resend.com](https://resend.com) - Easy integration
- **SendGrid**: [sendgrid.com](https://sendgrid.com) - Reliable delivery
- **Postmark**: [postmarkapp.com](https://postmarkapp.com) - Fast delivery

## 🧪 Testing

1. **Local Testing**:
   ```bash
   cd artadent-forms
   wrangler dev
   ```

2. **Form Testing**:
   - Fill out the contact form
   - Complete Turnstile verification
   - Submit and check for success message

3. **Production Testing**:
   - Deploy worker: `wrangler deploy`
   - Test live form on your website

## 🔄 Making Changes

### Update Worker Code:
```bash
cd artadent-forms
# Edit src/index.ts
wrangler deploy
```

### Update Environment Variables:
```bash
wrangler secret put VARIABLE_NAME
```

### Update Frontend:
```bash
# Edit contact form
npm run build && git push
```

## 🆘 Troubleshooting

### Worker Not Receiving Requests
- Check CORS headers in worker
- Verify worker URL in frontend
- Check browser console for errors

### Turnstile Not Working
- Verify site key is correct
- Check domain is added to Turnstile site
- Ensure secret key is set in worker

### Emails Not Sending
- Check SMTP credentials
- Verify email provider allows SMTP
- Check worker logs: `wrangler tail`

## 📝 Current Status

- ✅ Worker code complete
- ✅ Frontend integration ready  
- ✅ Turnstile spam protection
- ⚠️ Placeholder site key (needs your real key)
- ⚠️ Placeholder worker URL (needs deployment)
- ⚠️ Email placeholders (needs your SMTP)

## 🎯 Next Steps

1. Set up Cloudflare Turnstile
2. Deploy worker with real credentials
3. Update frontend with real endpoints
4. Test complete flow
5. 🚀 Launch!

---

**Need help?** The setup is designed to work with placeholders initially, so you can deploy and test step-by-step.
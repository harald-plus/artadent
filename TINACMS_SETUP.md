# TinaCMS Setup Guide

Follow these steps to enable the TinaCMS editing interface for your Artadent website.

## 1. Create TinaCMS Cloud Account

1. **Visit:** [app.tina.io](https://app.tina.io)
2. **Sign up** using your GitHub account (recommended)
3. **Create new project:**
   - Project name: `Artadent`
   - Repository: `harald-plus/artadent`
   - Branch: `main`

## 2. Get Your Credentials

After creating the project, TinaCMS will provide:
- **Client ID** (starts with something like `c7d2f8e1-...`)
- **Token** (long string for API access)

## 3. Configure Environment Variables

1. **Copy the template:**
   ```bash
   cp .env.local.template .env.local
   ```

2. **Edit `.env.local`** and add your credentials:
   ```env
   NEXT_PUBLIC_TINA_CLIENT_ID=your_actual_client_id_here
   TINA_TOKEN=your_actual_token_here
   GITHUB_BRANCH=main
   ```

## 4. Test TinaCMS Locally

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Visit the admin interface:**
   - Go to: http://localhost:3000/admin
   - You should see the TinaCMS editing interface

3. **Test editing:**
   - Click on "Tjenester" (Services) to edit services
   - Click on "Klinikker" (Locations) to edit clinic info
   - Click on "Anmeldelser" (Testimonials) to manage reviews

## 5. Deploy to Vercel

1. **Add environment variables to Vercel:**
   - Go to your Vercel dashboard
   - Select the `artadent` project
   - Go to Settings > Environment Variables
   - Add both `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN`

2. **Deploy:**
   ```bash
   git add .
   git commit -m "Enable TinaCMS with credentials"
   git push
   ```

## 6. Verify Deployment

1. **Check build logs** in Vercel dashboard
2. **Visit your live site:** https://your-site.vercel.app/admin
3. **Test content editing** on the live site

## Content Management After Setup

### For Content Editors (Non-technical):
- Visit: `https://your-site.com/admin`
- Click "Edit with TinaCMS" on any page
- Use the visual editor to modify content
- Changes are saved directly to GitHub

### For Developers:
- Edit markdown files in `/content/` directory
- Commit and push changes as usual
- TinaCMS provides additional visual editing layer

## Troubleshooting

**Build fails with "Client not configured":**
- Check that environment variables are set correctly
- Ensure credentials are valid in TinaCMS Cloud

**Admin interface not loading:**
- Verify `NEXT_PUBLIC_TINA_CLIENT_ID` is set (must start with `NEXT_PUBLIC_`)
- Check browser console for errors

**Changes not saving:**
- Ensure `TINA_TOKEN` has proper permissions
- Check GitHub repository access in TinaCMS Cloud dashboard

## Content Structure

```
content/
├── services/          # Dental services with pricing
├── locations/         # Clinic information
├── testimonials/      # Patient reviews
└── pages/            # General page content (future)
```

Each content type has a rich editor with:
- Text formatting
- Image uploads
- Structured fields (price, category, etc.)
- Preview functionality
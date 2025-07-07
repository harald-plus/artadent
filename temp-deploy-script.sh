#!/bin/bash

# Temporary deployment script for Artadent forms
echo "🚀 Deploying Artadent Forms Worker..."

# Set API token
export CLOUDFLARE_API_TOKEN="Wamq0bvoBonmyG34E-b3X14V8v8Jh7p59wpG5h9U"

# Deploy the worker
echo "📦 Deploying worker..."
wrangler deploy

# Display next steps
echo ""
echo "✅ Worker deployed successfully!"
echo ""
echo "🔧 Next steps:"
echo "1. Go to: https://dash.cloudflare.com/workers"
echo "2. Click on 'artadent-forms' worker"
echo "3. Go to Settings → Environment Variables"
echo "4. Add these secrets:"
echo "   - TURNSTILE_SECRET_KEY: 0x4AAAAAABkO7BQ5o8uAhgdJ"
echo "   - SMTP_HOST: smtp.gmail.com"
echo "   - SMTP_PORT: 587"
echo "   - SMTP_USER: your.email@gmail.com"
echo "   - SMTP_PASS: your_gmail_app_password"
echo "   - EMAIL_FROM: noreply@artadent.no"
echo "   - EMAIL_TO: your.email@gmail.com"
echo ""
echo "📝 Then update the frontend with the worker URL!"
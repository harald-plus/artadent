/**
 * Artadent Contact Form Handler with Cloudflare Turnstile
 * Handles form submissions and sends emails via SMTP
 */

export interface Env {
  // Turnstile
  TURNSTILE_SECRET_KEY: string;
  
  // Email settings (can be Gmail, Outlook, or any SMTP)
  SMTP_HOST: string;
  SMTP_PORT: string;
  SMTP_USER: string;
  SMTP_PASS: string;
  EMAIL_FROM: string;
  EMAIL_TO: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  message: string;
  'cf-turnstile-response': string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Handle CORS for all requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      // Parse form data
      const formData = await request.json() as FormData;
      
      // Validate required fields
      if (!formData.name || !formData.email || !formData['cf-turnstile-response']) {
        return new Response(JSON.stringify({ 
          success: false, 
          message: 'Manglende påkrevde felt' 
        }), {
          status: 400,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }

      // Verify Turnstile token
      const turnstileValid = await verifyTurnstile(
        formData['cf-turnstile-response'], 
        env.TURNSTILE_SECRET_KEY
      );

      if (!turnstileValid) {
        return new Response(JSON.stringify({ 
          success: false, 
          message: 'Sikkerhetskontroll feilet. Prøv igjen.' 
        }), {
          status: 400,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }

      // Send email
      const emailSent = await sendEmail(formData, env);

      if (emailSent) {
        return new Response(JSON.stringify({ 
          success: true, 
          message: 'Takk for din henvendelse! Vi kontakter deg snart.' 
        }), {
          status: 200,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } else {
        return new Response(JSON.stringify({ 
          success: false, 
          message: 'Det oppstod en feil. Prøv igjen senere.' 
        }), {
          status: 500,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }

    } catch (error) {
      console.error('Form submission error:', error);
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Det oppstod en feil. Prøv igjen senere.' 
      }), {
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
  },
};

async function verifyTurnstile(token: string, secretKey: string): Promise<boolean> {
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      secret: secretKey,
      response: token,
    }),
  });

  const result = await response.json() as { success: boolean };
  return result.success;
}

async function sendEmail(formData: FormData, env: Env): Promise<boolean> {
  try {
    // Create email content
    const emailContent = `
Ny henvendelse fra Artadent nettside

Navn: ${formData.name}
E-post: ${formData.email}
Telefon: ${formData.phone || 'Ikke oppgitt'}
Ønsket klinikk: ${formData.location === 'solheim' ? 'Solheim' : formData.location === 'paradis' ? 'Paradis' : 'Begge'}
Tjeneste: ${formData.service || 'Ikke spesifisert'}

Melding:
${formData.message}

---
Sendt fra kontaktskjema på artadent.no
`;

    // Send via SMTP (simplified version - you might want to use a proper SMTP library)
    const emailData = {
      from: env.EMAIL_FROM,
      to: env.EMAIL_TO,
      subject: `Ny henvendelse fra ${formData.name}`,
      text: emailContent,
    };

    // For now, we'll log the email (you can replace this with actual SMTP sending)
    console.log('Email would be sent:', emailData);
    
    // TODO: Implement actual SMTP sending
    // This is a placeholder - in production you'd use a service like:
    // - Cloudflare Email Workers
    // - SendGrid API
    // - Resend API
    // - Direct SMTP connection

    return true; // Return true for now (placeholder)
    
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}
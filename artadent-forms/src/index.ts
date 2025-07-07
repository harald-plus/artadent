/**
 * Artadent Contact Form Handler with Cloudflare Turnstile and Email
 * Handles form submissions and sends emails
 */

export interface Env {
  // Turnstile
  TURNSTILE_SECRET_KEY: string;
  
  // Email settings
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
      console.log('Verifying Turnstile token...', {
        hasToken: !!formData['cf-turnstile-response'],
        tokenLength: formData['cf-turnstile-response']?.length,
        hasSecretKey: !!env.TURNSTILE_SECRET_KEY
      });
      
      const turnstileValid = await verifyTurnstile(
        formData['cf-turnstile-response'], 
        env.TURNSTILE_SECRET_KEY
      );

      console.log('Turnstile verification result:', turnstileValid);

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

      // Send email using MailChannels (free for Cloudflare Workers)
      const emailSent = await sendEmailViaMailChannels(formData, env);

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
  try {
    console.log('Making Turnstile verification request...');
    
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

    console.log('Turnstile API response status:', response.status);
    
    const result = await response.json() as { success: boolean; 'error-codes'?: string[] };
    console.log('Turnstile API result:', result);
    
    return result.success;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

// Using MailChannels - free email service for Cloudflare Workers
async function sendEmailViaMailChannels(formData: FormData, env: Env): Promise<boolean> {
  try {
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

    const emailHtml = `
<h2>Ny henvendelse fra Artadent nettside</h2>
<p><strong>Navn:</strong> ${formData.name}</p>
<p><strong>E-post:</strong> ${formData.email}</p>
<p><strong>Telefon:</strong> ${formData.phone || 'Ikke oppgitt'}</p>
<p><strong>Ønsket klinikk:</strong> ${formData.location === 'solheim' ? 'Solheim' : formData.location === 'paradis' ? 'Paradis' : 'Begge'}</p>
<p><strong>Tjeneste:</strong> ${formData.service || 'Ikke spesifisert'}</p>
<br>
<p><strong>Melding:</strong></p>
<p>${formData.message.replace(/\n/g, '<br>')}</p>
<br>
<hr>
<p><em>Sendt fra kontaktskjema på artadent.no</em></p>
`;

    // Send via MailChannels API
    const response = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: env.EMAIL_TO, name: 'Artadent' }],
          },
        ],
        from: {
          email: env.EMAIL_FROM,
          name: 'Artadent Nettskjema',
        },
        reply_to: {
          email: formData.email,
          name: formData.name,
        },
        subject: `Ny henvendelse fra ${formData.name}`,
        content: [
          {
            type: 'text/plain',
            value: emailContent,
          },
          {
            type: 'text/html',
            value: emailHtml,
          },
        ],
      }),
    });

    if (!response.ok) {
      console.error('MailChannels error:', await response.text());
      return false;
    }

    console.log('Email sent successfully via MailChannels');
    return true;
    
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}
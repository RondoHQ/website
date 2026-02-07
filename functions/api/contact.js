import { Resend } from 'resend';

// CORS preflight handler
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    }
  });
}

// Form submission handler
export async function onRequestPost(context) {
  const { request, env } = context;

  const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  try {
    // Parse form data
    const formData = await request.formData();

    // Honeypot check — bots fill this, humans don't see it
    if (formData.get('website')) {
      // Return 200 to not tip off bots, but don't send email
      return new Response(
        JSON.stringify({ success: true, message: 'Bedankt voor je bericht!' }),
        { status: 200, headers: corsHeaders }
      );
    }

    // Extract and trim fields
    const data = {
      name: formData.get('name')?.trim() || '',
      email: formData.get('email')?.trim() || '',
      club_name: formData.get('club_name')?.trim() || '',
      member_count: formData.get('member_count')?.trim() || '',
      message: formData.get('message')?.trim() || ''
    };

    // Server-side validation: required fields
    if (!data.name || !data.email || !data.club_name) {
      return new Response(
        JSON.stringify({ error: 'Naam, e-mail en clubnaam zijn verplicht.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: 'Ongeldig e-mailadres.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Length limits to prevent abuse
    if (data.name.length > 200 || data.email.length > 254 || data.club_name.length > 200 || data.member_count.length > 50 || data.message.length > 5000) {
      return new Response(
        JSON.stringify({ error: 'Een of meer velden zijn te lang.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Build email body (plain text)
    const lines = [
      'Nieuw contactformulier bericht van de Rondo website',
      '',
      `Naam: ${data.name}`,
      `E-mail: ${data.email}`,
      `Clubnaam: ${data.club_name}`,
    ];

    if (data.member_count) {
      lines.push(`Aantal leden: ${data.member_count}`);
    }

    lines.push('');

    if (data.message) {
      lines.push(`Bericht:`);
      lines.push(data.message);
    } else {
      lines.push('Geen bericht ingevoerd.');
    }

    const emailBody = lines.join('\n');

    // Send via Resend
    const resend = new Resend(env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: `rondo.club <${env.FROM_EMAIL}>`,
      to: env.RECIPIENT_EMAIL,
      subject: `Rondo contactformulier: ${data.club_name}`,
      text: emailBody,
      reply_to: data.email
    });

    if (error) {
      console.error('Resend API error:', JSON.stringify(error));
      return new Response(
        JSON.stringify({ error: 'Er ging iets mis bij het verzenden. Probeer het later opnieuw.' }),
        { status: 500, headers: corsHeaders }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.'
      }),
      { status: 200, headers: corsHeaders }
    );

  } catch (err) {
    console.error('Form submission error:', err?.message || err);
    return new Response(
      JSON.stringify({ error: 'Er ging iets mis. Probeer het later opnieuw.' }),
      { status: 500, headers: corsHeaders }
    );
  }
}

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, X-Client-Info, apikey, Content-Type, X-Application-Name',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert email into database (ignore duplicates)
    await supabase
      .from('email_signups_2026_01_06_19_18')
      .insert([{ email: email, signup_type: 'free_resources' }]);

    // Send email with Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY')!;
    const domain = Deno.env.get('RESEND_DOMAIN');
    const fromEmail = domain ? `send@${domain}` : 'onboarding@resend.dev';

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: email,
        subject: 'Your Free Marketing Resources',
        html: `
          <h1>Your Free Marketing Resources</h1>
          <p>Thanks for your interest! Here are your free resources:</p>
          <ul>
            <li>Case Study: $45K to $185K/Month</li>
            <li>90-Day Growth Blueprint</li>
            <li>Marketing Audit Checklist</li>
          </ul>
          <p>Ready to grow faster? <a href="https://calendly.com/brody-amplomarketing/30min?month=2026-01">Schedule a free strategy call</a></p>
        `
      })
    });

    if (!emailResponse.ok) {
      throw new Error(`Resend error: ${emailResponse.status}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
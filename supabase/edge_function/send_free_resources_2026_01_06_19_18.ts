import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, X-Client-Info, apikey, Content-Type, X-Application-Name',
};

// Helper function to determine from email
function getFromEmail() {
  const domain = Deno.env.get('RESEND_DOMAIN');
  if (domain) {
    return `send@${domain}`;
  }
  return 'onboarding@resend.dev'; // Default fallback
}

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

    // Insert email into database
    const { data: insertData, error: insertError } = await supabase
      .from('email_signups_2026_01_06_19_18')
      .insert([
        { 
          email: email,
          signup_type: 'free_resources'
        }
      ])
      .select();

    if (insertError) {
      // If email already exists, that's okay - just send the email
      if (!insertError.message.includes('duplicate key')) {
        throw insertError;
      }
    }

    // Send email with free resources
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY not found');
    }

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #1e3a8a; text-align: center;">Your Free Marketing Resources</h1>
        
        <p>Hi there!</p>
        
        <p>Thanks for your interest in growing your business. While you might not be ready for our full partnership right now, we want to help you succeed.</p>
        
        <h2 style="color: #1e3a8a;">Here's what we're sending you:</h2>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>📊 Case Study: $45K to $185K/Month</h3>
          <p>See exactly how we took a struggling e-commerce business and tripled their revenue in 120 days.</p>
          
          <h3>📖 Free Guide: 90-Day Growth Blueprint</h3>
          <p>Our step-by-step framework for building predictable revenue systems.</p>
          
          <h3>🎯 Bonus: Marketing Audit Checklist</h3>
          <p>Use this to identify what's broken in your current marketing (and how to fix it).</p>
        </div>
        
        <p><strong>Download links:</strong></p>
        <ul>
          <li><a href="#" style="color: #1e3a8a;">Case Study: $45K to $185K/Month</a></li>
          <li><a href="#" style="color: #1e3a8a;">90-Day Growth Blueprint</a></li>
          <li><a href="#" style="color: #1e3a8a;">Marketing Audit Checklist</a></li>
        </ul>
        
        <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Ready to grow faster?</strong></p>
          <p>When you're ready for our full partnership, we're here. Schedule a free strategy call anytime.</p>
          <p><a href="https://calendly.com/brody-amplomarketing/30min?month=2026-01" style="background: #d97706; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Schedule Free Call</a></p>
        </div>
        
        <p>Best,<br>The Amplo Team</p>
        
        <hr style="margin: 30px 0;">
        <p style="font-size: 12px; color: #6b7280;">
          You're receiving this because you signed up for free marketing resources at our website. 
          We won't spam you - this is a one-time email with your requested resources.
        </p>
      </div>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: getFromEmail(),
        to: email,
        subject: 'Your Free Marketing Resources (Case Study + Growth Blueprint)',
        html: emailContent,
        text: emailContent.replace(/<[^>]*>/g, '') // Strip HTML for text version
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Resend API error: ${response.status} ${errorText}`);
    }

    const result = await response.json();

    // Update database to mark email as sent
    if (insertData && insertData.length > 0) {
      await supabase
        .from('email_signups_2026_01_06_19_18')
        .update({ 
          email_sent: true, 
          email_sent_at: new Date().toISOString() 
        })
        .eq('id', insertData[0].id);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        message_id: result.id 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email', 
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
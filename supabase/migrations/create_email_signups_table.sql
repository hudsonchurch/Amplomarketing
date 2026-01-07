-- Create table for email capture from free resources signup
CREATE TABLE public.email_signups_2026_01_06_19_18 (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  signup_type VARCHAR(50) NOT NULL DEFAULT 'free_resources',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email_sent BOOLEAN DEFAULT FALSE,
  email_sent_at TIMESTAMP WITH TIME ZONE
);

-- Create index for faster queries
CREATE INDEX idx_email_signups_email ON public.email_signups_2026_01_06_19_18(email);
CREATE INDEX idx_email_signups_created_at ON public.email_signups_2026_01_06_19_18(created_at);

-- Enable RLS
ALTER TABLE public.email_signups_2026_01_06_19_18 ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting (anyone can sign up)
CREATE POLICY "Anyone can insert email signups" ON public.email_signups_2026_01_06_19_18
FOR INSERT WITH CHECK (true);

-- Create policy for reading (only authenticated users can read)
CREATE POLICY "Only authenticated users can read email signups" ON public.email_signups_2026_01_06_19_18
FOR SELECT USING (auth.role() = 'authenticated');
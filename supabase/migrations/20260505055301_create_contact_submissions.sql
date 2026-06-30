/*
  # Contact form submissions

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `phone` (text, required)
      - `email` (text)
      - `vehicle` (text)
      - `vin` (text, optional chassis number)
      - `service` (text)
      - `message` (text)
      - `created_at` (timestamptz)
  2. Security
    - Enable RLS on `contact_submissions`
    - Allow anonymous INSERT so public visitors can submit
    - No SELECT policy (submissions are private, readable via service role only)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  email text DEFAULT '',
  vehicle text DEFAULT '',
  vin text DEFAULT '',
  service text DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

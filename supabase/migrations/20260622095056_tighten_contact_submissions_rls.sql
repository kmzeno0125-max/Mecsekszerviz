-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- Create a tighter policy that requires name and phone to be non-empty
CREATE POLICY "insert_contact_submission" ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(trim(name)) > 0
    AND length(trim(phone)) >= 6
  );
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  vin: string;
  service: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const MAILTRAP_API_KEY = Deno.env.get("MECSEK_API");
    if (!MAILTRAP_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Mail service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const payload: ContactPayload = await req.json();
    const { name, phone, email, vehicle, vin, service, message } = payload;

    const htmlBody = `
      <h2>Új kapcsolatfelvételi űrlap beküldés</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Név:</td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Telefon:</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">E-mail:</td><td style="padding:8px;border-bottom:1px solid #eee;">${email || "Nem adott meg"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Jármű:</td><td style="padding:8px;border-bottom:1px solid #eee;">${vehicle || "Nem adott meg"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Alvázszám:</td><td style="padding:8px;border-bottom:1px solid #eee;">${vin || "Nem adott meg"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Szolgáltatás:</td><td style="padding:8px;border-bottom:1px solid #eee;">${service || "Nem választott"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Üzenet:</td><td style="padding:8px;border-bottom:1px solid #eee;">${message || "Nincs üzenet"}</td></tr>
      </table>
    `;

    const textBody = `Új kapcsolatfelvételi űrlap beküldés\n\nNév: ${name}\nTelefon: ${phone}\nE-mail: ${email || "Nem adott meg"}\nJármű: ${vehicle || "Nem adott meg"}\nAlvázszám: ${vin || "Nem adott meg"}\nSzolgáltatás: ${service || "Nem választott"}\nÜzenet: ${message || "Nincs üzenet"}`;

    const mailResponse = await fetch("https://send.api.mailtrap.io/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Token": MAILTRAP_API_KEY,
      },
      body: JSON.stringify({
        from: { email: "info@mecsekszerviz.hu", name: "Mecsek Szerviz" },
        to: [{ email: "info@mecsekszerviz.hu" }],
        subject: `Új üzenet: ${name} - ${service || "Általános"}`,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!mailResponse.ok) {
      const errText = await mailResponse.text();
      console.error("Mailtrap error:", errText);
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

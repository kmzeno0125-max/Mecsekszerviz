import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import mapImage from '../assets/files_8595244-2026-04-16T13-28-29-455Z-image.png';
import { supabase } from '../lib/supabase';

type FormData = {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  vin: string;
  service: string;
  message: string;
  privacy: boolean;
};

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  vehicle: '',
  vin: '',
  service: '',
  message: '',
  privacy: false,
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const formPayload = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      vehicle: form.vehicle,
      vin: form.vin,
      service: form.service,
      message: form.message,
    };

    const { error } = await supabase.from('contact_submissions').insert(formPayload);
    if (error) {
      setLoading(false);
      setErrorMsg('Az üzenet küldése nem sikerült. Kérjük próbálja újra, vagy hívjon minket telefonon.');
      return;
    }

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload),
      });
    } catch {
      // Email sending is best-effort; form submission already saved to DB
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="kapcsolat" className="bg-bg-light py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="font-headline font-bold text-text-dark uppercase tracking-wide mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Vedd fel velünk a kapcsolatot
          </h2>
          <p className="font-body text-secondary text-base sm:text-lg max-w-xl mx-auto">
            Időpont, kérdés, árajánlat – írj vagy hívj, gyorsan válaszolunk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <div className="card-hover bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-headline font-bold text-text-dark uppercase tracking-wide text-base mb-1">Cím</div>
                  <div className="font-body text-secondary text-sm">7633 Pécs, Páfrány u. 8.</div>
                </div>
              </div>
            </div>

            <div className="card-hover bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-headline font-bold text-text-dark uppercase tracking-wide text-base mb-1">Telefon</div>
                  <a href="tel:+36203573771" className="font-body text-primary font-medium text-base hover:underline">
                    +36 20 357 3771
                  </a>
                </div>
              </div>
            </div>

            <div className="card-hover bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-headline font-bold text-text-dark uppercase tracking-wide text-base mb-1">E-mail</div>
                  <a href="mailto:info@mecsekszerviz.hu" className="font-body text-primary font-medium text-sm hover:underline">
                    info@mecsekszerviz.hu
                  </a>
                </div>
              </div>
            </div>

            <div className="card-hover bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="font-headline font-bold text-text-dark uppercase tracking-wide text-base mb-2">Nyitvatartás</div>
                  <div className="space-y-1 font-body text-sm text-secondary">
                    <div className="flex justify-between gap-8"><span>Hétfő – Péntek</span><span className="font-medium text-text-dark">8:00 – 17:00</span></div>
                    <div className="flex justify-between gap-8"><span>Szombat</span><span className="font-medium text-text-dark">8:00 – 12:00</span></div>
                    <div className="flex justify-between gap-8"><span>Vasárnap</span><span className="font-medium text-primary">ZÁRVA</span></div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="tel:+36203573771"
              className="flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white font-headline font-bold text-xl uppercase tracking-wide px-8 py-5 rounded-xl transition-colors duration-200 w-full shadow-lg shadow-primary/20"
              aria-label="Hívj most: +36 20 357 3771"
            >
              <Phone size={22} />
              Hívj most: +36 20 357 3771
            </a>

            <div>
              <a
                href="https://maps.google.com/?q=7633+Pécs,+Páfrány+u.+8."
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group"
                style={{ borderRadius: '12px', overflow: 'hidden' }}
              >
                <img
                  src={mapImage}
                  alt="Térkép – 7633 Pécs, Páfrány u. 8."
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: '12px',
                    display: 'block',
                  }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '12px' }}
                >
                  <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '15px' }}>
                    📍 Megnyitás Google Térképen
                  </span>
                </div>
              </a>
              <div className="text-center pt-2.5 space-y-1">
                <div className="font-body" style={{ color: 'rgba(80,80,80,0.8)', fontSize: '14px' }}>7633 Pécs, Páfrány u. 8.</div>
                <a
                  href="https://maps.google.com/?q=7633+Pécs,+Páfrány+u.+8."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body hover:underline"
                  style={{ color: 'rgba(80,80,80,0.7)', fontSize: '14px' }}
                >
                  Megnyitás Google Térképen
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle size={56} className="text-green-500 mb-4" />
                <h3 className="font-headline font-bold text-text-dark text-3xl uppercase mb-3">
                  Üzenet elküldve!
                </h3>
                <p className="font-body text-secondary text-base">
                  Köszönjük megkeresését! Hamarosan felvesszük Önnel a kapcsolatot.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                // action="https://formspree.io/f/YOUR_FORM_ID"
                // method="POST"
                className="space-y-4"
              >
                <div>
                  <label className="block font-body text-text-dark text-sm font-medium mb-1.5">
                    Teljes neve <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="input-focus-glow w-full border border-gray-200 rounded-lg px-4 py-3 font-body text-sm transition-all duration-200"
                    placeholder="Pl. Kovács János"
                  />
                </div>

                <div>
                  <label className="block font-body text-text-dark text-sm font-medium mb-1.5">
                    Telefonszám <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="input-focus-glow w-full border border-gray-200 rounded-lg px-4 py-3 font-body text-sm transition-all duration-200"
                    placeholder="+36 20 123 4567"
                  />
                </div>

                <div>
                  <label className="block font-body text-text-dark text-sm font-medium mb-1.5">
                    E-mail cím
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="input-focus-glow w-full border border-gray-200 rounded-lg px-4 py-3 font-body text-sm transition-all duration-200"
                    placeholder="pelda@email.hu"
                  />
                </div>

                <div>
                  <label className="block font-body text-text-dark text-sm font-medium mb-1.5">
                    Jármű típusa
                  </label>
                  <input
                    type="text"
                    name="vehicle"
                    value={form.vehicle}
                    onChange={handleChange}
                    className="input-focus-glow w-full border border-gray-200 rounded-lg px-4 py-3 font-body text-sm transition-all duration-200"
                    placeholder="Pl. VW Golf, Ford Transit"
                  />
                </div>

                <div>
                  <label className="block font-body text-text-dark text-sm font-medium mb-1.5">
                    Alvázszám <span className="text-secondary/60 font-normal">(opcionális)</span>
                  </label>
                  <input
                    type="text"
                    name="vin"
                    maxLength={17}
                    value={form.vin}
                    onChange={handleChange}
                    className="input-focus-glow w-full border border-gray-200 rounded-lg px-4 py-3 font-body text-sm transition-all duration-200 uppercase"
                    placeholder="Pl. WVWZZZ1JZXW000001"
                  />
                </div>

                <div>
                  <label className="block font-body text-text-dark text-sm font-medium mb-1.5">
                    Szolgáltatás típusa
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="input-focus-glow w-full border border-gray-200 rounded-lg px-4 py-3 font-body text-sm transition-all duration-200 bg-white"
                  >
                    <option value="">Válasszon...</option>
                    <option value="gumiszerviz">Gumiszerviz</option>
                    <option value="futomű">Futómű beállítás</option>
                    <option value="olajcsere">Olajcsere</option>
                    <option value="diagnosztika">Diagnosztika</option>
                    <option value="flottaszerviz">Flottaszerviz</option>
                    <option value="egyeb">Egyéb</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-text-dark text-sm font-medium mb-1.5">
                    Üzenet / megjegyzés
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-focus-glow w-full border border-gray-200 rounded-lg px-4 py-3 font-body text-sm transition-all duration-200 resize-none"
                    placeholder="Írja le kérését, kérdését..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacy"
                    id="privacy"
                    required
                    checked={form.privacy}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 accent-primary flex-shrink-0"
                  />
                  <label htmlFor="privacy" className="font-body text-secondary text-sm leading-relaxed">
                    Elfogadom az{' '}
                    <a href="#" className="text-primary hover:underline">
                      adatvédelmi tájékoztatót
                    </a>{' '}
                    <span className="text-primary">*</span>
                  </label>
                </div>

                {errorMsg && (
                  <div className="font-body text-sm text-primary bg-primary/10 border border-primary/30 rounded-lg px-4 py-3">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-press flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-headline font-bold text-lg uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_6px_24px_rgba(214,40,40,0.4)]"
                  aria-label="Üzenet küldése"
                >
                  <Send size={18} />
                  {loading ? 'Küldés...' : 'Üzenet küldése'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

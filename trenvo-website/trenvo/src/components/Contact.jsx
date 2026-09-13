import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import { siteConfig } from '../data/config';

const SERVICE_OPTIONS = [
  'TikTok Shop Setup & Configuration',
  'Product Research, Sourcing & Listings',
  'Content Strategy & Creator Outreach',
  'TikTok Ads & Campaign Management',
  'Order Operations & Fulfilment Support',
  'Analytics, Reporting & Store Optimization',
  'Full A–Z Management',
  'Not sure yet',
];

const STORE_STATUS_OPTIONS = [
  "I don't have a store yet",
  'Store created, not yet launched',
  'Live store, low or no sales',
  'Live store, looking to scale',
];

const BUDGET_OPTIONS = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $10,000',
  '$10,000+',
  'Prefer to discuss',
];

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  business: '',
  service: '',
  storeStatus: '',
  budget: '',
  message: '',
  consent: false,
};

function Field({ label, error, children, htmlFor }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-soft">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
          <AlertCircle className="h-3.5 w-3.5" /> {error}
        </p>
      )}
    </div>
  );
}

const inputClasses =
  'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-soft placeholder:text-muted/60 outline-none transition-colors focus:border-teal/60';

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const update = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
  };

  const validate = () => {
    const next = {};
    if (!form.firstName.trim()) next.firstName = 'First name is required.';
    if (!form.lastName.trim()) next.lastName = 'Last name is required.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (!form.phone.trim()) next.phone = 'Phone number is required.';
    if (!form.country.trim()) next.country = 'Country is required.';
    if (!form.service) next.service = 'Select the service you need.';
    if (!form.storeStatus) next.storeStatus = 'Select your current store status.';
    if (!form.consent) next.consent = 'Please confirm you agree before submitting.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'New TRENVO Consultation Request',
          _template: 'table',
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          country: form.country,
          business: form.business,
          interestedService: form.service,
          storeStatus: form.storeStatus,
          budget: form.budget,
          message: form.message,
        }),
      });

      if (!response.ok) throw new Error('Submission failed');
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-deepblue/40 py-20 sm:py-28">
      <div className="container-xl grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)]">
        <div ref={ref} className="reveal">
          <span className="text-sm font-medium text-teal">Contact</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-soft sm:text-4xl">
            Let's Discuss Your TikTok Shop
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            Reach out directly or fill out the consultation form and we'll follow up with next
            steps.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="glass-card flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-teal/40"
            >
              <Mail className="h-5 w-5 shrink-0 text-teal" />
              <span className="text-sm text-soft">{siteConfig.email}</span>
            </a>
            <a
              href={siteConfig.phoneLink}
              className="glass-card flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-teal/40"
            >
              <Phone className="h-5 w-5 shrink-0 text-teal" />
              <span className="text-sm text-soft">{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-teal/40"
            >
              <MessageCircle className="h-5 w-5 shrink-0 text-teal" />
              <span className="text-sm text-soft">Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-card rounded-3xl p-6 shadow-card sm:p-8"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="First Name" htmlFor="firstName" error={errors.firstName}>
              <input
                id="firstName"
                className={inputClasses}
                value={form.firstName}
                onChange={update('firstName')}
                autoComplete="given-name"
              />
            </Field>
            <Field label="Last Name" htmlFor="lastName" error={errors.lastName}>
              <input
                id="lastName"
                className={inputClasses}
                value={form.lastName}
                onChange={update('lastName')}
                autoComplete="family-name"
              />
            </Field>
            <Field label="Email Address" htmlFor="email" error={errors.email}>
              <input
                id="email"
                type="email"
                className={inputClasses}
                value={form.email}
                onChange={update('email')}
                autoComplete="email"
              />
            </Field>
            <Field label="Phone Number" htmlFor="phone" error={errors.phone}>
              <input
                id="phone"
                type="tel"
                className={inputClasses}
                value={form.phone}
                onChange={update('phone')}
                autoComplete="tel"
              />
            </Field>
            <Field label="Country" htmlFor="country" error={errors.country}>
              <input
                id="country"
                className={inputClasses}
                value={form.country}
                onChange={update('country')}
                autoComplete="country-name"
              />
            </Field>
            <Field label="Business / Brand Name" htmlFor="business">
              <input
                id="business"
                className={inputClasses}
                value={form.business}
                onChange={update('business')}
                placeholder="Optional if not yet decided"
              />
            </Field>

            <Field label="Interested Service" htmlFor="service" error={errors.service}>
              <select
                id="service"
                className={inputClasses}
                value={form.service}
                onChange={update('service')}
              >
                <option value="">Select a service</option>
                {SERVICE_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Current Store Status" htmlFor="storeStatus" error={errors.storeStatus}>
              <select
                id="storeStatus"
                className={inputClasses}
                value={form.storeStatus}
                onChange={update('storeStatus')}
              >
                <option value="">Select current status</option>
                {STORE_STATUS_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Estimated Budget Range" htmlFor="budget">
              <select
                id="budget"
                className={inputClasses}
                value={form.budget}
                onChange={update('budget')}
              >
                <option value="">Select a range</option>
                {BUDGET_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </Field>

            <div className="sm:col-span-2">
              <Field label="Goals / Message" htmlFor="message">
                <textarea
                  id="message"
                  rows={4}
                  className={inputClasses}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell us briefly about your product and goals"
                />
              </Field>
            </div>
          </div>

          <label className="mt-5 flex items-start gap-3 text-sm text-muted">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={update('consent')}
              className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 text-teal focus:ring-teal"
            />
            I agree to be contacted about my request and have read the{' '}
            <a href="/privacy-policy" className="text-teal underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </label>
          {errors.consent && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
              <AlertCircle className="h-3.5 w-3.5" /> {errors.consent}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal to-amber px-7 py-3.5 font-semibold text-midnight shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-70"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Request My Free Consultation
              </>
            )}
          </button>

          {status === 'success' && (
            <p className="mt-4 flex items-center gap-2 rounded-xl bg-teal/10 px-4 py-3 text-sm text-teal">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              Thank you — your request has been sent. We'll be in touch shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-300">
              <AlertCircle className="h-4 w-4 shrink-0" />
              Something went wrong sending your request. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

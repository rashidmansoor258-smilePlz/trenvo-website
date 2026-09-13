// ---------------------------------------------------------------------------
// TRENVO SITE CONFIGURATION
// Edit the values below to update contact details, links, and (once available)
// verified performance statistics or client testimonials across the whole site.
// ---------------------------------------------------------------------------

export const siteConfig = {
  brand: 'TRENVO',
  tagline: 'TikTok Commerce, Built to Scale',
  domain: 'https://www.trenvo.co', // TODO: replace with live domain

  email: 'rashidmansoor258@gmail.com',
  phoneDisplay: '+92 334 0712851',
  phoneLink: 'tel:+923340712851',
  whatsappLink:
    'https://wa.me/923340712851?text=Hello%20TRENVO%2C%20I%20would%20like%20to%20discuss%20TikTok%20Shop%20services.',
  gmailComposeLink:
    'https://mail.google.com/mail/?view=cm&fs=1&to=rashidmansoor258@gmail.com&su=TRENVO%20Free%20Consultation',

  // Static-form endpoint. FormSubmit sends an activation email to this address
  // the first time the form is submitted — see README for details.
  formEndpoint: 'https://formsubmit.co/rashidmansoor258@gmail.com',
};

// Toggle to true once real, written-permission client testimonials are supplied.
export const SHOW_TESTIMONIALS = false;

// Placeholder slots only. Do not fill with invented names, quotes or numbers.
// Replace each entry with genuine, permissioned testimonial data before enabling.
export const testimonials = [
  {
    name: '', // e.g. "First name, Last initial"
    role: '', // e.g. "Founder, Home & Kitchen brand"
    quote: '',
  },
  {
    name: '',
    role: '',
    quote: '',
  },
];

// No performance numbers are published until verified data is provided.
// Add real, sourced figures here (and only here) once available — every
// component that could show a stat reads from this object instead of
// hardcoding a number.
export const verifiedStats = {
  // example shape once real data exists:
  // storesLaunched: { value: '48', label: 'TikTok Shops launched' },
};

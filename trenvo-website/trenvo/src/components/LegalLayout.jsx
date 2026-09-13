import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function LegalLayout({ title, updated, children }) {
  return (
    <main className="bg-midnight pb-24 pt-32">
      <div className="container-xl max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-teal transition-colors hover:text-amber"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to TRENVO
        </Link>

        <h1 className="mt-6 font-display text-3xl font-bold text-soft sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>

        <div className="prose-invert mt-10 flex flex-col gap-6 text-sm leading-relaxed text-muted [&_h2]:mt-4 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-soft [&_strong]:text-soft">
          {children}
        </div>
      </div>
    </main>
  );
}

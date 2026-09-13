import LegalLayout from '../components/LegalLayout';
import { siteConfig } from '../data/config';

export default function EarningsDisclaimer() {
  return (
    <LegalLayout title="Earnings Disclaimer" updated="[Insert date before publishing]">
      <p>
        This disclaimer applies to all pages of the TRENVO website and to conversations with
        our team. This is starter, editable content — have it reviewed by a qualified
        professional before publishing.
      </p>

      <h2>No Guarantees</h2>
      <p>
        <strong>
          TRENVO does not guarantee any specific level of sales, revenue, profit or business
          growth.
        </strong>{' '}
        Any figures discussed in a consultation are illustrative or based on general industry
        patterns, not a promise of results for your specific store.
      </p>

      <h2>Factors Outside Our Control</h2>
      <p>
        TikTok Shop outcomes depend on many variables, including product-market fit, pricing,
        competition, advertising spend, platform policy changes, seasonality, supplier
        reliability and your own execution. TRENVO does not control these factors and cannot
        guarantee any particular outcome because of them.
      </p>

      <h2>Your Own Due Diligence</h2>
      <p>
        You are responsible for evaluating whether launching or operating a TikTok Shop is
        appropriate for your circumstances, including your available capital and risk
        tolerance, before proceeding.
      </p>

      <h2>Reporting</h2>
      <p>
        Where we share performance updates during an engagement, they reflect actual store or
        campaign data available at that time and are not projections or guarantees of future
        performance.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this disclaimer can be sent to {siteConfig.email} or{' '}
        {siteConfig.phoneDisplay}.
      </p>
    </LegalLayout>
  );
}

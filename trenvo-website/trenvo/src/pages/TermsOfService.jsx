import LegalLayout from '../components/LegalLayout';
import { siteConfig } from '../data/config';

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" updated="[Insert date before publishing]">
      <p>
        These Terms of Service govern your use of the TRENVO website and any services
        described on it. This is starter, editable content — have it reviewed by a qualified
        professional for your jurisdiction before publishing.
      </p>

      <h2>Services Described</h2>
      <p>
        Information on this site describes TikTok Shop-related services TRENVO may provide,
        including store setup support, product sourcing guidance, content and creator
        outreach, advertising management, and store operations support. Specific scope, fees
        and deliverables for any engagement are agreed separately in writing.
      </p>

      <h2>No Guaranteed Outcomes</h2>
      <p>
        TRENVO does not guarantee specific sales, revenue, profit or growth outcomes. Results
        depend on factors including your product, market conditions, available budget,
        execution and platform policies, many of which are outside our control. See our{' '}
        <a href="/earnings-disclaimer" className="text-teal underline underline-offset-2">
          Earnings Disclaimer
        </a>{' '}
        for further detail.
      </p>

      <h2>Client Responsibilities</h2>
      <p>
        Clients remain the owner of their TikTok Shop account, storefront and brand. Clients
        are responsible for providing accurate information and for compliance with TikTok
        Shop's own policies and applicable law in their market.
      </p>

      <h2>Payments</h2>
      <p>
        Fees, payment schedules and refund terms (if any) for a specific engagement are set
        out in a separate agreement or invoice prior to work beginning.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the extent permitted by law, TRENVO is not liable for indirect, incidental or
        consequential losses arising from use of our services or this website.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to {siteConfig.email} or{' '}
        {siteConfig.phoneDisplay}.
      </p>
    </LegalLayout>
  );
}

import LegalLayout from '../components/LegalLayout';
import { siteConfig } from '../data/config';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="[Insert date before publishing]">
      <p>
        This Privacy Policy explains how TRENVO ("we," "us," or "our") collects, uses and
        protects information submitted through this website, including our consultation form.
        This is starter, editable content — review it with a qualified professional before
        publishing on a live domain.
      </p>

      <h2>Information We Collect</h2>
      <p>
        When you submit our consultation form, we collect the details you provide, which may
        include your name, email address, phone number, country, business or brand name,
        service interest, current store status, budget range and any message you include.
      </p>

      <h2>How We Use Information</h2>
      <p>
        We use submitted information to respond to consultation requests, understand your
        business goals, and provide relevant services. We do not sell personal information to
        third parties.
      </p>

      <h2>Form Processing</h2>
      <p>
        Consultation form submissions are delivered via a third-party form-processing service
        to {siteConfig.email}. Please review that provider's own privacy practices, as they
        may process and temporarily store submitted data on our behalf.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain submitted information for as long as reasonably necessary to respond to your
        inquiry and maintain business records, unless you request deletion sooner.
      </p>

      <h2>Your Choices</h2>
      <p>
        You may request access to, correction of, or deletion of information you have
        submitted by contacting us at {siteConfig.email}.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent to {siteConfig.email} or{' '}
        {siteConfig.phoneDisplay}.
      </p>
    </LegalLayout>
  );
}

import { Link } from "react-router-dom";
import { LegalLayout, LegalSection, LegalList } from "@/components/LegalLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { siteConfig } from "@/lib/siteConfig";

const PrivacyPage = () => {
  const pageMeta = usePageMeta(
    "Privacy Policy | DEVIK DIGITAL SOLUTIONS",
    "How DEVIK DIGITAL SOLUTIONS collects, uses, shares, and protects information across its website, AI demo platforms, and Facebook Messenger, Instagram, and WhatsApp messaging integrations."
  );

  return (
    <>
      {pageMeta}
      <LegalLayout
        title="Privacy Policy"
        lastUpdated="May 9, 2026"
        intro={
          <p>
            <strong className="text-primary">Devik Digital Solutions</strong> ("we", "us", "our")
            is a custom software development company building websites, mobile apps, AI assistants,
            and automation workflows for businesses across many industries (including, for example,
            healthcare practices, retail, professional services, e-commerce, real estate, hospitality,
            and education). This Privacy Policy explains what information we collect when you visit
            our website, interact with one of our demo platforms, or message our connected business
            accounts on Facebook Messenger, Instagram, or WhatsApp (collectively, the "Service"),
            and how we use, share, and protect that information.
          </p>
        }
      >
        <LegalSection title="1. Information We Collect">
          <p className="mb-3">
            When you submit a form, request a quote, book a call, or chat with our AI assistant on
            any channel, we may collect:
          </p>
          <LegalList
            items={[
              <><strong className="text-primary">Contact information:</strong> name, business name, phone number, email address</>,
              <><strong className="text-primary">Inquiry details:</strong> service of interest, project description, preferred date or time slot, budget range, and any other details you choose to share</>,
              <><strong className="text-primary">Messaging metadata:</strong> conversation history with our AI assistant, timestamps, channel of origin (web, Facebook Messenger, Instagram, WhatsApp), and platform-issued user IDs (such as Page-Scoped User ID, Instagram-Scoped User ID, or WhatsApp phone number)</>,
              <><strong className="text-primary">Technical data:</strong> IP address, browser type, device information, and basic analytics about how pages are viewed</>,
            ]}
          />
        </LegalSection>

        <LegalSection title="2. How We Use Information">
          <LegalList
            items={[
              "Respond to inquiries and fulfill booking, quote, or consultation requests, including confirmation emails",
              "Provide automated replies through our AI assistant on the website and on connected Meta platforms",
              "Maintain conversation context across messages so the AI can hold a coherent thread",
              "Improve the quality and accuracy of our automation, websites, and AI services",
              "Demonstrate platform capabilities to prospective clients (in aggregated, non-identifying form)",
              "Comply with legal obligations and respond to lawful requests",
            ]}
          />
        </LegalSection>

        <LegalSection title="3. How Information Is Shared">
          <p className="mb-3">
            We do not sell your personal information. Data is shared only with the processors below,
            strictly to operate the Service:
          </p>
          <LegalList
            items={[
              <><strong className="text-primary">Supabase</strong> &mdash; secure database hosting for inquiry, booking, and conversation records</>,
              <><strong className="text-primary">Meta Platforms (Facebook, Instagram, WhatsApp)</strong> &mdash; to send and receive messages on the channels you used to contact us</>,
              <><strong className="text-primary">Groq</strong> &mdash; AI inference provider that processes message text to generate replies</>,
              <><strong className="text-primary">Resend</strong> &mdash; transactional email delivery for confirmations and follow-ups</>,
              <><strong className="text-primary">n8n / VPS hosting</strong> &mdash; workflow automation infrastructure operated under our control</>,
              <><strong className="text-primary">Vercel</strong> &mdash; static hosting for our public website</>,
            ]}
          />
          <p className="mt-3">
            All processors operate under contractual privacy obligations consistent with GDPR and
            CCPA where applicable. We may also disclose information when required by law, court
            order, or to protect the rights and safety of users or our business.
          </p>
        </LegalSection>

        <LegalSection title="4. How We Use Meta Platform Data">
          <p>
            When you message one of our connected Facebook, Instagram, or WhatsApp accounts, Meta
            shares limited information with us so we can reply &mdash; typically your platform-issued
            ID, the public name on your profile, and the message content you sent. We use this
            information solely to respond to your message, route the conversation to a human team
            member if needed, and keep a record of our exchange. We do not use Meta platform data
            for advertising, profiling unrelated to your inquiry, or any purpose you have not
            initiated by contacting us.
          </p>
        </LegalSection>

        <LegalSection title="5. Data Retention">
          <p>
            Inquiry and booking records are retained for up to 24 months from your last interaction
            unless you request deletion sooner. AI conversation history is retained for up to 90
            days for context continuity, then automatically purged. Records we are required to keep
            for legal, tax, or accounting reasons may be retained longer where the law requires it.
          </p>
        </LegalSection>

        <LegalSection title="6. Your Rights">
          <p className="mb-3">
            Depending on your jurisdiction (including under GDPR in the EU/UK and CCPA in
            California), you may at any time:
          </p>
          <LegalList
            items={[
              "Request a copy of personal information we hold about you",
              "Request correction of inaccurate information or deletion of your data",
              "Withdraw consent and opt out of further messaging",
              "Object to or restrict certain processing",
              "Lodge a complaint with your local data-protection authority",
            ]}
          />
          <p className="mt-3">
            To exercise these rights, see our{" "}
            <Link to="/data-deletion" className="font-semibold text-primary underline-offset-4 hover:underline">
              Data Deletion Instructions
            </Link>
            .
          </p>
        </LegalSection>

        <LegalSection title="7. Children's Privacy">
          <p>
            The Service is not directed to children under 13. We do not knowingly collect personal
            information from children. If you believe a child has provided us information, contact
            us and we will delete it.
          </p>
        </LegalSection>

        <LegalSection title="8. Security">
          <p>
            We use TLS encryption in transit, encrypted database storage, and access controls on
            administrative dashboards. While we take security seriously, no method of electronic
            transmission or storage is 100% secure.
          </p>
        </LegalSection>

        <LegalSection title="9. International Transfers">
          <p>
            Our processors may store and process data in the United States, European Union, or
            other jurisdictions. By using the Service you consent to such international transfers,
            which are made under appropriate safeguards required by applicable law.
          </p>
        </LegalSection>

        <LegalSection title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. The "Last updated" date at the top
            of this page will reflect any change. Material changes will be communicated through the
            Service or by email where appropriate.
          </p>
        </LegalSection>

        <LegalSection title="11. Contact">
          <p>
            <strong className="text-primary">Devik Digital Solutions</strong> &mdash; {siteConfig.location}
            <br />
            Email:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </LegalSection>
      </LegalLayout>
    </>
  );
};

export default PrivacyPage;

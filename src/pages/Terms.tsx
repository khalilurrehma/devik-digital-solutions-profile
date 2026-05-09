import { LegalLayout, LegalSection, LegalList } from "@/components/LegalLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { siteConfig } from "@/lib/siteConfig";

const TermsPage = () => {
  const pageMeta = usePageMeta(
    "Terms of Service | DEVIK DIGITAL SOLUTIONS",
    "Terms governing your use of the DEVIK DIGITAL SOLUTIONS website, AI demo platforms, and Facebook Messenger, Instagram, and WhatsApp messaging integrations."
  );

  return (
    <>
      {pageMeta}
      <LegalLayout
        title="Terms of Service"
        lastUpdated="May 9, 2026"
        intro={
          <p>
            These Terms of Service ("Terms") govern your access to and use of the website, demo
            platforms, AI assistants, and messaging integrations operated by{" "}
            <strong className="text-primary">Devik Digital Solutions</strong> ("we", "us", "our")
            at devikdigitalsolutions.com and through connected accounts on Facebook Messenger,
            Instagram, and WhatsApp (collectively, the "Service"). By using the Service, you agree
            to these Terms.
          </p>
        }
      >
        <LegalSection title="1. The Service">
          <p>
            Devik Digital Solutions is a custom software development company. We design and build
            websites, mobile applications, backend systems, AI assistants, and automation
            workflows for businesses across many industries &mdash; including (for example)
            healthcare practices, retail, professional services, e-commerce, real estate,
            hospitality, and education. The Service includes our company website, demo platforms
            we host to showcase our capabilities, and AI-powered booking and messaging assistants
            available through web chat and connected Meta accounts. Demo platforms are provided
            for evaluation and prospect engagement; bookings made through them may not result in
            actual scheduled visits unless explicitly confirmed by a represented business.
          </p>
        </LegalSection>

        <LegalSection title="2. Eligibility">
          <p>
            You must be at least 13 years old (or older where required by local law) to use the
            Service. If you are using the Service on behalf of a business, you represent that you
            are authorised to do so.
          </p>
        </LegalSection>

        <LegalSection title="3. Acceptable Use">
          <p className="mb-3">You agree not to:</p>
          <LegalList
            items={[
              "Use the Service for unlawful purposes or in violation of any applicable law or regulation",
              "Interfere with or disrupt the Service or its underlying infrastructure",
              "Send spam, malware, abusive content, or impersonate others",
              "Attempt to reverse engineer, scrape, or extract source code from the Service",
              "Use automated means to access the Service except as expressly allowed",
              "Submit false or misleading information through any contact, booking, or chat surface",
            ]}
          />
        </LegalSection>

        <LegalSection title="4. AI-Generated Responses">
          <p>
            Our chat and booking assistants are powered by large language models. Replies are
            generated automatically and may contain inaccuracies. They are not professional advice
            of any kind &mdash; including but not limited to medical, legal, financial, or
            tax advice. Always verify important details directly with the relevant business or a
            qualified professional before acting on a reply.
          </p>
        </LegalSection>

        <LegalSection title="5. User Content">
          <p>
            When you submit information through the Service (forms, bookings, chats, files, or
            messages), you grant us a limited, non-exclusive, worldwide license to process that
            content solely to provide and improve the Service. We do not claim ownership of the
            content you submit.
          </p>
        </LegalSection>

        <LegalSection title="6. Third-Party Platforms">
          <p>
            When you interact with us through Facebook Messenger, Instagram, or WhatsApp, your
            interaction is also subject to Meta's terms and policies. Your use of any other
            third-party service linked from ours (such as Calendly, payment providers, or social
            networks) is governed by that party's terms. We are not responsible for those
            third-party services.
          </p>
        </LegalSection>

        <LegalSection title="7. Intellectual Property">
          <p>
            All content, branding, code, designs, and materials made available through the Service
            are the property of Devik Digital Solutions or its licensors and are protected by
            applicable intellectual-property laws. Nothing in these Terms grants you any right or
            license to use our trademarks, logos, or proprietary materials without prior written
            consent.
          </p>
        </LegalSection>

        <LegalSection title="8. Disclaimer of Warranties">
          <p>
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of
            any kind, express or implied, including warranties of merchantability, fitness for a
            particular purpose, or non-infringement. We do not warrant that the Service will be
            uninterrupted, error-free, or completely secure.
          </p>
        </LegalSection>

        <LegalSection title="9. Limitation of Liability">
          <p>
            To the maximum extent permitted by law, Devik Digital Solutions shall not be liable
            for any indirect, incidental, special, consequential, or punitive damages, or any loss
            of profits, revenue, data, or goodwill, arising out of or related to your use of the
            Service.
          </p>
        </LegalSection>

        <LegalSection title="10. Termination">
          <p>
            We may suspend or terminate access to the Service at any time, without notice, for
            conduct that violates these Terms or that we determine is harmful to other users, to
            us, or to third parties.
          </p>
        </LegalSection>

        <LegalSection title="11. Changes to These Terms">
          <p>
            We may update these Terms from time to time. The "Last updated" date will reflect any
            change. Continued use of the Service after changes are posted constitutes your
            acceptance of the updated Terms.
          </p>
        </LegalSection>

        <LegalSection title="12. Governing Law">
          <p>
            These Terms are governed by the laws of the jurisdiction in which Devik Digital
            Solutions is incorporated, without regard to its conflict-of-law principles.
          </p>
        </LegalSection>

        <LegalSection title="13. Contact">
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

export default TermsPage;

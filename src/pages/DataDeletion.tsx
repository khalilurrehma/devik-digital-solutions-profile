import { useState } from "react";
import { AlertTriangle, CheckCircle2, Copy, Mail, ShieldCheck } from "lucide-react";
import { LegalLayout, LegalSection, LegalList } from "@/components/LegalLayout";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { usePageMeta } from "@/hooks/usePageMeta";
import { toast } from "@/hooks/use-toast";
import { siteConfig } from "@/lib/siteConfig";

const DELETION_SUBJECT = "Data Deletion Request";

const DELETION_BODY = `Hello DEVIK DIGITAL SOLUTIONS team,

I am requesting deletion of the personal data you hold about me.

- Phone / email / username I used when interacting with you:
- Channel of interaction (Web / Facebook Messenger / Instagram / WhatsApp):
- I confirm I am the owner of the contact information above.

Thank you,
[Your name]`;

const buildDeletionMailto = () =>
  `mailto:${siteConfig.email}?subject=${encodeURIComponent(DELETION_SUBJECT)}&body=${encodeURIComponent(DELETION_BODY)}`;

const DataDeletionPage = () => {
  const pageMeta = usePageMeta(
    "Data Deletion Instructions | DEVIK DIGITAL SOLUTIONS",
    "How to request deletion of personal data DEVIK DIGITAL SOLUTIONS holds about you, including inquiry records and AI conversation history from web chat, Facebook Messenger, Instagram, or WhatsApp."
  );

  const [open, setOpen] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      toast({
        title: "Email address copied",
        description: siteConfig.email,
      });
    } catch {
      toast({
        title: "Couldn't copy automatically",
        description: `Please copy this address manually: ${siteConfig.email}`,
        variant: "destructive",
      });
    }
  };

  const handleOpenEmail = () => {
    window.location.href = buildDeletionMailto();
    toast({
      title: "Email draft prepared",
      description:
        "Your default email app should open with the request pre-filled. We process verifiable requests within 30 days.",
    });
  };

  return (
    <>
      {pageMeta}
      <LegalLayout
        title="Data Deletion Instructions"
        lastUpdated="May 9, 2026"
        intro={
          <p>
            You can request deletion of any personal data we hold about you at any time. We will
            delete the data within 30 days of receiving a verifiable request, except where we are
            required to retain it by law (for example, financial or tax records).
          </p>
        }
      >
        <LegalSection title="What can be deleted">
          <LegalList
            items={[
              "Your name, business name, phone number, and email collected through any contact, booking, or quote form",
              "Inquiry, booking, or project records associated with you",
              "Conversation history with our AI assistant on the website, Facebook Messenger, Instagram, or WhatsApp",
              "Platform-issued identifiers we hold (such as Page-Scoped User ID, Instagram-Scoped User ID, or WhatsApp phone number)",
              "Files or attachments you sent through any of the above channels",
            ]}
          />
        </LegalSection>

        <LegalSection title="How to request deletion">
          <p className="mb-3">
            Click the button below to start a verified deletion request. We will open a pre-filled
            email so you only need to add your contact details and send.
          </p>
          <LegalList
            items={[
              <><strong className="text-primary">Subject:</strong> "Data Deletion Request"</>,
              "The phone number, email, or username you used when interacting with us",
              "The channel (Web, Facebook Messenger, Instagram, or WhatsApp) where the interaction took place",
              "A short note confirming you are the owner of that contact information",
            ]}
          />
          <p className="mt-3">
            We may ask one verification question to confirm your identity. You will receive a
            confirmation email when the deletion is complete.
          </p>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-heading font-bold text-white shadow-[0_12px_30px_-10px_rgba(10,31,61,0.6)] transition hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4" />
              Email a Deletion Request
            </button>
          </div>
        </LegalSection>

        <LegalSection title="Deleting via Meta platforms">
          <p className="mb-3">
            If you contacted us through Facebook Messenger, Instagram, or WhatsApp and want Meta to
            also remove records of the interaction from your side, you can request that
            separately:
          </p>
          <LegalList
            items={[
              <a
                href="https://accountscenter.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Meta Accounts Center &rarr; Your information
              </a>,
              <a
                href="https://www.instagram.com/accounts/manage_access/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Instagram &rarr; Apps and Websites &rarr; Remove
              </a>,
            ]}
          />
          <p className="mt-3">
            Removing app access on Instagram or Facebook stops new data sharing, but you should
            still email us to delete data we have already collected.
          </p>
        </LegalSection>

        <LegalSection title="Timeframe">
          <p>
            We process verifiable deletion requests within 30 days of receipt. If we cannot fully
            delete certain data due to legal or contractual obligations (for example, financial
            records we are required to retain), we will inform you and explain why.
          </p>
        </LegalSection>

        <LegalSection title="Contact">
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg gap-0 overflow-hidden border-0 bg-white p-0 shadow-[0_40px_120px_-30px_rgba(8,24,46,0.5)] sm:rounded-3xl">
          {/* Banner header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0a1f3d] via-[#0f2a52] to-[#081729] px-6 py-7 text-white sm:px-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-6 h-32 w-32 rounded-full bg-blue-500/15 blur-3xl" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
                <ShieldCheck className="h-6 w-6 text-sky-200" />
              </div>
              <div className="flex-1">
                <DialogHeader className="space-y-1.5 text-left">
                  <DialogTitle className="font-heading text-xl font-extrabold text-white sm:text-[22px]">
                    Confirm Your Deletion Request
                  </DialogTitle>
                  <DialogDescription className="text-[13px] leading-relaxed text-white/75">
                    We&apos;ll prepare a pre-filled email so you only need to add your contact
                    details. Our team monitors this inbox during business hours.
                  </DialogDescription>
                </DialogHeader>
              </div>
            </div>
          </div>

          <div className="space-y-5 px-6 py-6 sm:px-8">
            {/* What happens */}
            <div className="rounded-2xl border border-primary/10 bg-gradient-to-br from-sky-50/70 to-white p-4">
              <p className="mb-3 flex items-center gap-2 text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-primary/70">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                What happens next
              </p>
              <ul className="space-y-2 text-[13px] text-foreground">
                <li className="flex items-start gap-2.5">
                  <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  <span>We log your request in our system as soon as the email arrives.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  <span>You may receive one short verification reply to confirm your identity.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  <span>Your data is deleted and you receive a written confirmation within 30 days.</span>
                </li>
              </ul>
            </div>

            {/* Warning */}
            <div className="flex items-start gap-3 rounded-2xl border border-amber-300/50 bg-amber-50 p-4">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
              <div className="flex-1 text-[12.5px] leading-relaxed text-amber-900">
                <p className="font-heading font-semibold">This action is permanent.</p>
                <p className="mt-1 text-amber-900/85">
                  Deleted records cannot be recovered. Records we are required to keep by law (such as
                  financial or tax documents) may be retained where the law requires it.
                </p>
              </div>
            </div>

            {/* Email recipient row */}
            <div className="rounded-2xl border border-border bg-slate-50/70 p-4">
              <p className="mb-2 text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Send to
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <code className="break-all rounded-md bg-white px-2.5 py-1.5 text-[13px] font-medium text-primary ring-1 ring-border">
                  {siteConfig.email}
                </code>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-[12px] font-heading font-semibold text-foreground transition hover:bg-slate-50"
                >
                  <Copy className="h-3.5 w-3.5" />
                  Copy
                </button>
              </div>
            </div>
          </div>

          <DialogFooter className="flex flex-col-reverse gap-2 border-t border-border bg-slate-50/60 px-6 py-4 sm:flex-row sm:items-center sm:justify-end sm:space-x-2 sm:px-8">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-border bg-white px-5 py-2.5 text-sm font-heading font-semibold text-foreground transition hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleOpenEmail}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-heading font-bold text-white shadow-[0_10px_24px_-10px_rgba(10,31,61,0.6)] transition hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4" />
              Open Email Client
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DataDeletionPage;

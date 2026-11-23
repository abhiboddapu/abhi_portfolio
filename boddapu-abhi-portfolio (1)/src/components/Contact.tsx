import { useState, type FormEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  AlertCircle,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  Send,
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { SectionHeading } from './SectionHeading';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialValues: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const validate = (form: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name (at least 2 characters).';
    }
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim() || form.subject.trim().length < 3) {
      nextErrors.subject = 'Please enter a brief subject.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Please write a message of at least 10 characters.';
    }
    return nextErrors;
  };

  const handleFieldChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (statusMessage) {
      setStatusMessage(null);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setStatusMessage({
        type: 'error',
        text: `Unable to copy automatically. Email: ${personalInfo.email}`,
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatusMessage({
        type: 'error',
        text: 'Please review the highlighted fields before opening your email client.',
      });
      return;
    }

    const encodedSubject = encodeURIComponent(values.subject.trim());
    const encodedBody = encodeURIComponent(
      `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`
    );
    const mailtoHref = `mailto:${personalInfo.email}?subject=${encodedSubject}&body=${encodedBody}`;

    window.location.href = mailtoHref;

    setStatusMessage({
      type: 'success',
      text: `Your email client has been prepared with a draft to ${personalInfo.email}. If it did not open automatically, use the direct email link on the left.`,
    });
  };

  const handleResumeRequest = () => {
    if (personalInfo.resumeUrl) {
      const link = document.createElement('a');
      link.href = personalInfo.resumeUrl;
      link.download = 'Boddapu_Abhi_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    setValues((prev) => ({
      ...prev,
      subject: prev.subject || 'Resume Request — Boddapu Abhi',
      message:
        prev.message ||
        'Hi Abhi, I came across your portfolio and would like to request your latest resume.',
    }));
    setStatusMessage({
      type: 'success',
      text: 'Pre-filled a resume request in the form. Complete your name and email to open your mail app.',
    });
  };

  return (
    <section
      id="contact"
      className="bg-slate-50 py-20 transition-colors duration-200 dark:bg-[#08090D] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="06"
          kicker="Get In Touch"
          title="Let's Connect"
          subtitle="Have an idea, opportunity, or interesting conversation? Let's connect."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Direct Contact Details & Resume */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-[#272A35] dark:bg-[#11131A] dark:shadow-none sm:p-8 lg:col-span-5"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                Direct Channels
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#A1A1AA]">
                Open to internship opportunities, software &amp; AI collaborations, hackathons, and creative media conversations.
              </p>

              <div className="mt-8 space-y-5 border-t border-slate-200 pt-6 dark:border-[#272A35]">
                {/* Email */}
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-500 dark:text-[#A1A1AA]">
                      Email
                    </p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-[#38BDF8] break-all"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-[#8B5CF6]" aria-hidden="true" />
                      <span>{personalInfo.email}</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs font-medium text-slate-700 transition-colors hover:border-[#8B5CF6] hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] dark:border-[#272A35] dark:bg-[#171A23] dark:text-[#A1A1AA] dark:hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check
                          className="h-3.5 w-3.5 text-sky-600 dark:text-[#38BDF8]"
                          aria-hidden="true"
                        />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* GitHub */}
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-[#A1A1AA]">
                    GitHub
                  </p>
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-[#A78BFA]"
                  >
                    <Github
                      className="h-4 w-4 shrink-0 text-violet-600 dark:text-[#A78BFA]"
                      aria-hidden="true"
                    />
                    <span>github.com/abhiboddapu</span>
                  </a>
                </div>

                {/* LinkedIn */}
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-[#A1A1AA]">
                    LinkedIn
                  </p>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-[#38BDF8]"
                  >
                    <Linkedin
                      className="h-4 w-4 shrink-0 text-sky-600 dark:text-[#38BDF8]"
                      aria-hidden="true"
                    />
                    <span>linkedin.com/in/boddapu-abhi-59a362321</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Action */}
            <div className="mt-8 border-t border-slate-200 pt-6 dark:border-[#272A35]">
              <button
                type="button"
                onClick={handleResumeRequest}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:border-[#8B5CF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] dark:border-[#272A35] dark:bg-[#171A23] dark:text-white cursor-pointer whitespace-nowrap"
              >
                <Download
                  className="h-4 w-4 text-sky-600 dark:text-[#38BDF8]"
                  aria-hidden="true"
                />
                <span>
                  {personalInfo.resumeUrl ? 'Download Resume' : 'Request Resume'}
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Validated Contact Form (Mailto Handoff) */}
          <motion.form
            noValidate
            onSubmit={handleSubmit}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-[#272A35] dark:bg-[#171A23] dark:shadow-none sm:p-8 lg:col-span-7"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-slate-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(e) => handleFieldChange('name', e.target.value)}
                  placeholder="Your full name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  className={`mt-2 w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] dark:bg-[#08090D] dark:text-white dark:placeholder-[#A1A1AA]/60 ${
                    errors.name
                      ? 'border-rose-500 dark:border-rose-400'
                      : 'border-slate-200 dark:border-[#272A35]'
                  }`}
                />
                {errors.name && (
                  <p
                    id="contact-name-error"
                    className="mt-1.5 text-xs text-rose-600 dark:text-rose-400"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-slate-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  className={`mt-2 w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] dark:bg-[#08090D] dark:text-white dark:placeholder-[#A1A1AA]/60 ${
                    errors.email
                      ? 'border-rose-500 dark:border-rose-400'
                      : 'border-slate-200 dark:border-[#272A35]'
                  }`}
                />
                {errors.email && (
                  <p
                    id="contact-email-error"
                    className="mt-1.5 text-xs text-rose-600 dark:text-rose-400"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-subject"
                className="block text-sm font-medium text-slate-900 dark:text-white"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={(e) => handleFieldChange('subject', e.target.value)}
                placeholder="Opportunity, collaboration, or question"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={
                  errors.subject ? 'contact-subject-error' : undefined
                }
                className={`mt-2 w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] dark:bg-[#08090D] dark:text-white dark:placeholder-[#A1A1AA]/60 ${
                  errors.subject
                    ? 'border-rose-500 dark:border-rose-400'
                    : 'border-slate-200 dark:border-[#272A35]'
                }`}
              />
              {errors.subject && (
                <p
                  id="contact-subject-error"
                  className="mt-1.5 text-xs text-rose-600 dark:text-rose-400"
                >
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-slate-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={values.message}
                onChange={(e) => handleFieldChange('message', e.target.value)}
                placeholder="Share details about your idea, opportunity, or inquiry..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? 'contact-message-error' : undefined
                }
                className={`mt-2 w-full resize-y rounded-lg border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] dark:bg-[#08090D] dark:text-white dark:placeholder-[#A1A1AA]/60 ${
                  errors.message
                    ? 'border-rose-500 dark:border-rose-400'
                    : 'border-slate-200 dark:border-[#272A35]'
                }`}
              />
              {errors.message && (
                <p
                  id="contact-message-error"
                  className="mt-1.5 text-xs text-rose-600 dark:text-rose-400"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {statusMessage && (
              <div
                role="status"
                aria-live="polite"
                className={`mt-5 flex items-start gap-2.5 rounded-lg border p-3.5 text-xs leading-relaxed sm:text-sm ${
                  statusMessage.type === 'success'
                    ? 'border-sky-500/40 bg-sky-50 text-slate-900 dark:border-[#38BDF8]/40 dark:bg-[#38BDF8]/10 dark:text-white'
                    : 'border-rose-500/40 bg-rose-50 text-rose-900 dark:border-rose-400/40 dark:bg-rose-400/10 dark:text-rose-200'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-[#38BDF8]"
                    aria-hidden="true"
                  />
                ) : (
                  <AlertCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400"
                    aria-hidden="true"
                  />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-slate-500 dark:text-[#A1A1AA]">
                Opens your email client addressed to{' '}
                <span className="font-medium text-slate-900 dark:text-white">
                  {personalInfo.email}
                </span>
              </p>

              <button
                type="submit"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#8B5CF6] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#7C3AED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Compose Email</span>
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

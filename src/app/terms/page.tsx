"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[30vh] flex items-center overflow-hidden bg-gray-950">
        <div className="absolute inset-0 overlay-gradient opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Terms of <span className="shimmer-text">Service</span>
            </h1>
            <p className="mt-4 text-lg text-white/60">
              Last updated: January 10, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-950 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-800
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3
              prose-p:text-gray-400 prose-p:leading-relaxed
              prose-li:text-gray-400
              prose-strong:text-white
              prose-a:text-[#6366f1] prose-a:no-underline hover:prose-a:text-[#818cf8]"
          >
            <p>
              Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the website operated by Fast Mode LLC (&quot;us&quot;, &quot;we&quot;, &quot;our&quot;, or the &quot;Company&quot;).
            </p>
            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>

            <h2>1. Services</h2>
            <p>
              Fast Mode LLC provides transportation staffing solutions, including but not limited to CDL driver placement, dispatching, safety and compliance support, accounting and billing services, virtual recruiting, and 24/7 after-hours support (collectively, the &quot;Services&quot;). The specific terms, scope, and pricing of any Services will be outlined in a separate agreement or proposal between you and Fast Mode LLC.
            </p>

            <h2>2. Use of the Website</h2>
            <p>
              You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the website. Prohibited behavior includes but is not limited to:
            </p>
            <ul>
              <li>Harassing or causing distress or inconvenience to any other user</li>
              <li>Transmitting obscene or offensive content</li>
              <li>Disrupting the normal flow of dialogue within the website</li>
              <li>Attempting to gain unauthorized access to any part of the website or its related systems</li>
              <li>Using the website in any way that could damage, disable, or impair the website</li>
            </ul>

            <h2>3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of Fast Mode LLC and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Fast Mode LLC.
            </p>

            <h2>5. Submissions and Contact Forms</h2>
            <p>
              When you submit information through our contact forms or other means on the website, you represent that the information you provide is accurate and complete. We will use the information you submit in accordance with our{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>

            <h2>6. SMS/Text Message Terms</h2>
            <p>
              By opting in to receive SMS/text messages from Fast Mode LLC, you agree to the following:
            </p>
            <ul>
              <li><strong>Marketing Messages:</strong> You consent to receive marketing text messages from Fast Mode LLC at the phone number provided. Up to 4 messages per month. Message and data rates may apply.</li>
              <li><strong>Transactional Messages:</strong> You consent to receive non-marketing text messages from Fast Mode LLC about order updates, appointment reminders, and other transactional notifications. Up to 4 messages per month. Message and data rates may apply.</li>
            </ul>
            <p>
              <strong>Opt-Out:</strong> You may opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any message. After opting out, you will receive a one-time confirmation message and will no longer receive SMS communications unless you opt in again.
            </p>
            <p>
              <strong>Help:</strong> For assistance, reply <strong>HELP</strong> to any message or contact us at{" "}
              <a href="mailto:info@fastmodecruit.com">info@fastmodecruit.com</a>.
            </p>
            <p>
              <strong>Consent Not Required for Purchase:</strong> SMS consent is not a condition of any purchase. Your consent to receive SMS messages is not shared with any third parties or affiliates for their marketing purposes.
            </p>
            <p>
              <strong>Supported Carriers:</strong> Compatible with major US carriers including AT&amp;T, Verizon, T-Mobile, Sprint, and others. Carriers are not liable for delayed or undelivered messages.
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              Our Service may contain links to third-party websites or services that are not owned or controlled by Fast Mode LLC.
            </p>
            <p>
              Fast Mode LLC has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Fast Mode LLC shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any such websites or services.
            </p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>
              The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
            </p>
            <p>
              Fast Mode LLC, its subsidiaries, affiliates, and its licensors do not warrant that: (a) the Service will function uninterrupted, secure, or available at any particular time or location; (b) any errors or defects will be corrected; (c) the Service is free of viruses or other harmful components; or (d) the results of using the Service will meet your requirements.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              In no event shall Fast Mode LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from: (a) your access to or use of or inability to access or use the Service; (b) any conduct or content of any third party on the Service; (c) any content obtained from the Service; and (d) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Fast Mode LLC and its licensees and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&apos;s fees), resulting from or arising out of: (a) your use and access of the Service; or (b) a breach of these Terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of Iowa, United States, without regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, you can contact us:
            </p>
            <ul>
              <li>By email: <a href="mailto:info@fastmodecruit.com">info@fastmodecruit.com</a></li>
              <li>By phone: <a href="tel:+18778141807">(877) 814-1807</a></li>
              <li>By mail: Fast Mode LLC, 315 E 5th St Ste 202, Waterloo, IA</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}

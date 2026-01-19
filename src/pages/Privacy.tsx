import { motion } from "framer-motion";
import Footer from "@/components/landing/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Privacy = () => {
  useScrollToTop();

  return (
    <div className="pt-[72px]">

      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <motion.article
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-display font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            Last Updated: January 16, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4">1. Data Collection and Scope</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information necessary to provide relationship coaching, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Communications:</strong> Text messages, images, and voice notes shared in the WhatsApp group.</li>
              <li><strong>Metadata:</strong> Time stamps, frequency of interaction, and phone numbers.</li>
              <li><strong>Integrations:</strong> Event titles and times from Google/Apple Calendars and metadata from Google Photos.</li>
              <li><strong>Payment Info:</strong> Processed via Stripe; we do not store full credit card numbers.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4">2. Legal Basis for Processing (GDPR/PDPA)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We process data under the following legal bases:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Consent:</strong> Your explicit agreement upon joining the Service.</li>
              <li><strong>Contractual Necessity:</strong> To deliver the coaching services you have requested.</li>
              <li><strong>Legitimate Interests:</strong> To improve our AI models and ensure service security.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4">3. Use of AI and Automated Processing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your data is processed by Large Language Models (LLMs) provided by third parties (e.g., OpenAI, Anthropic).
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Training:</strong> We may use anonymized or pseudonymized data to improve our service accuracy.</li>
              <li><strong>Human Review:</strong> To ensure safety and quality, limited anonymized data segments may be reviewed by trained personnel.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal data. We share information only with:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Service Providers:</strong> Infrastructure and AI partners bound by strict Data Processing Agreements (DPAs).</li>
              <li><strong>Legal Compliance:</strong> When required by law, court order, or to protect the safety of an individual.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4">5. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Data is primarily stored on secure servers in the United States. For users in the EU or Singapore, we utilize Standard Contractual Clauses (SCCs) to ensure your data receives protection equivalent to local laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4">6. Data Retention and Deletion</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Right to Erasure:</strong> You may request full data deletion at any time by sending the command /deleteMyData via WhatsApp or emailing privacy@happyduo.ai.</li>
              <li><strong>Account Closure:</strong> Upon account termination, personal data is typically deleted or anonymized within 30 days.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4">7. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard technical and organizational measures, including AES-256 encryption at rest and TLS 1.3 encryption in transit, to protect your sanctuary.
            </p>
          </section>

          <hr className="my-12 border-foreground/20" />

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-6">Privacy Policy FAQ (Non-Legal)</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Are you reading my private messages? 🤖</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am an AI, so I "process" your messages to give you coaching, but I don't have "feelings" or curiosity! 🤖 Most of the work is 100% automated. Occasionally, a human might look at an anonymous snippet of a chat to help me learn how to be a better coach, but they never know who you are. Your privacy is a sanctuary! 🏰🤫✨
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Can I take my data back? 🫧</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Absolutely! 🫧 Your love story belongs to you. If you ever want to start over or leave, just type /deleteMyData. We'll wipe the slate clean, and your information will be permanently deleted from our system. 🧹💖
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Do you sell my info to advertisers? 💎</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Never. Ever. We aren't interested in selling your data; we are interested in helping you stay connected. Your relationship is the product, not your data. 💎🛡️
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Why do you need my calendar and photos? 📸</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I only use them to help you! I look at your calendar to find "date night" gaps and your photos to remind you of beautiful times you've shared. 📸 It's all about creating more "us-time"!
                </p>
              </div>
            </div>
          </section>
        </motion.article>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;

import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Terms = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-background pt-[72px]">
      <Header />

      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <motion.article
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-display font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">
            Effective Date: January 16, 2026 • Last Updated: January 16, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Happy Duo (the "Service"), operated by Happy Duo Inc. ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you must immediately cease use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4">2. Eligibility and Authority</h2>
            <p className="text-muted-foreground leading-relaxed">
              You must be at least 18 years of age to use the Service. By adding the Happy Duo bot to a WhatsApp group or interacting with it individually, you represent and warrant that (a) you have the legal capacity to enter into this agreement; (b) you and your partner have both consented to the presence of the AI in your private communications; and (c) your use of the Service does not violate any applicable law or regulation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4">3. Description of Service and AI Functionality</h2>
            <p className="text-muted-foreground leading-relaxed">
              Happy Duo is an artificial intelligence assistant designed to facilitate relationship coaching and communication support. The Service utilizes large language models (LLMs) to analyze text, tone, and interaction patterns. You acknowledge that AI is an evolving technology and that results may vary in accuracy, tone, and relevance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4">4. Medical and Mental Health Disclaimer (CRITICAL)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 font-semibold">
              HAPPY DUO IS NOT A LICENSED THERAPIST, MEDICAL PROVIDER, OR CRISIS INTERVENTION SERVICE.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>No Professional Advice:</strong> The Service provides automated coaching and information for educational and relationship-enhancement purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.</li>
              <li><strong>Crisis Protocol:</strong> The Service is not monitored by humans in real-time and is not equipped to handle emergencies. If you are experiencing a mental health crisis, domestic violence, or any life-threatening situation, you must contact local emergency services or a crisis hotline immediately.</li>
              <li><strong>Assumption of Risk:</strong> You rely on any information provided by the Service solely at your own risk.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4">5. Subscription and Payments</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Free Trial:</strong> The Service may offer a 30-day free trial. Upon expiration, access requires a paid subscription.</li>
              <li><strong>Fees:</strong> The current subscription rate is $8.99 USD per month per couple.</li>
              <li><strong>Billing:</strong> Payments are processed via third-party providers (e.g., Stripe). Subscriptions auto-renew unless canceled at least 24 hours before the billing cycle ends.</li>
              <li><strong>Referral Program:</strong> For every successful referral resulting in a new paid subscription, the referring couple receives one month of Service at no cost.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4">6. User Conduct and Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              You retain ownership of the content you provide. However, you grant us a worldwide, royalty-free license to process this content to deliver the Service. You agree not to use the Service for illegal acts, harassment, or to transmit malicious software. We reserve the right to terminate access for any user violating these standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4">7. Third-Party Integrations</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service integrates with WhatsApp (Meta), Google Calendar, and Google Photos. Use of these integrations is subject to the terms and privacy policies of those third parties. We are not responsible for the functionality or security of third-party platforms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, Happy Duo Inc. shall not be liable for any indirect, incidental, special, or consequential damages, including relationship dissolution, emotional distress, or loss of data. Our total liability shall not exceed the amount paid by you for the Service in the 12 months preceding the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4">9. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.
            </p>
          </section>

          <hr className="my-12 border-foreground/20" />

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-6">Terms of Service FAQ (Non-Legal)</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What is the "Love Contract" all about? 📜</h3>
                <p className="text-muted-foreground leading-relaxed">
                  It is basically our way of making sure we are on the same page! It explains that Happy Duo is here to help you grow, but it isn't a replacement for a human doctor or therapist. It also covers the "business" side, like how the 30-day free trial and the $8.99 monthly subscription work. ✨
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What happens if the AI gives me weird advice? 🤔</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI is like a very smart assistant that is still learning! 🧠 While I try to be as helpful as possible, the Terms remind you that you are the captain of your own relationship. Always use your best judgment! 🚢💖
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How do I get my free months? 🎁</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We love it when you spread the word! 🥳 For every couple you refer who joins the Happy Duo family, you get a month of service for free. It's our way of saying thanks for being part of our mission! 💰🎁
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Is there a trick to making this work best? 🌟</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes! Consistency is everything. 🌟 And for the smoothest experience: 📌 Pin this chat to the top of your WhatsApp! 📌 Keeping us at the top reminds you both every day that your connection is your #1 priority. 🥇💍
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

export default Terms;

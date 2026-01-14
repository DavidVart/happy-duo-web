import { Check, Gift, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const benefits = [
  "Unlimited AI coaching for both partners",
  "Smart feedback on all conversations",
  "Relationship score tracking",
  "Personalized challenges & date ideas",
  "Calendar integration (Google & Apple)",
  "Google Photos integration",
  "Anniversary & important date reminders",
  "Fully customizable privacy settings",
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge mx-auto">
            <span className="text-lg">💝</span>
            <span>Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Invest in your{" "}
            <span className="gradient-text">happiness together</span>
          </h2>
        </motion.div>

        <motion.div 
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-card rounded-2xl border-3 border-foreground shadow-[8px_8px_0_hsl(var(--foreground))] overflow-hidden" style={{ borderWidth: '3px' }}>
            {/* Header */}
            <div className="bg-feature-yellow border-b-2 border-foreground p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-primary fill-current" />
                <span className="font-display font-semibold text-lg">Happy Duo</span>
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-display font-bold">$8.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">for both of you 💕</p>
            </div>

            {/* Benefits */}
            <div className="p-8 space-y-6">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent border-2 border-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button variant="whatsapp" size="xl" className="w-full border-2 border-foreground">
                Start 30-Day Free Trial
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Cancel anytime. You won't be charged until your trial ends.
              </p>
            </div>

            {/* Referral bonus */}
            <div className="border-t-2 border-foreground p-6 bg-feature-pink">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-card border-2 border-foreground flex items-center justify-center">
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold font-display">Share the love</h4>
                  <p className="text-sm text-muted-foreground">
                    Refer a couple and get <strong>1 month free</strong> when they start their trial!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

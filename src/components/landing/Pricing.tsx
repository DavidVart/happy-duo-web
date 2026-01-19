import { Check, Gift, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

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
  const [isAnnual, setIsAnnual] = useState(false);

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
            <span className="text-primary">happiness together</span>
          </h2>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className={`font-medium transition-colors ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-14 h-8 rounded-full border-2 border-foreground transition-colors ${
              isAnnual ? 'bg-[hsl(var(--logo-yellow))]' : 'bg-muted'
            }`}
          >
            <span
              className={`absolute top-1 w-5 h-5 rounded-full bg-foreground transition-transform ${
                isAnnual ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`font-medium transition-colors ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
            Annually
          </span>
          {isAnnual && (
            <span className="bg-[hsl(var(--logo-yellow))] text-[hsl(var(--logo-yellow-foreground))] text-xs font-bold px-2 py-1 rounded-full border border-foreground">
              Save 50%
            </span>
          )}
        </motion.div>

        <motion.div 
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-card rounded-2xl border-3 border-foreground shadow-[8px_8px_0_hsl(var(--foreground))] overflow-hidden relative" style={{ borderWidth: '3px' }}>
            {/* Best Value Badge */}
            {isAnnual && (
              <div className="absolute -top-1 -right-1 z-10">
                <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-bl-lg rounded-tr-lg border-2 border-foreground">
                  Best value
                </div>
              </div>
            )}
            
            {/* Header */}
            <div className="bg-feature-yellow border-b-2 border-foreground p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-primary fill-current" />
                <span className="font-display font-semibold text-lg">Happy Duo</span>
              </div>
              <div className="flex items-baseline justify-center gap-1">
                {isAnnual ? (
                  <>
                    <span className="text-2xl text-muted-foreground line-through mr-2">$8.99</span>
                    <span className="text-5xl font-display font-bold">$4.49</span>
                  </>
                ) : (
                  <span className="text-5xl font-display font-bold">$8.99</span>
                )}
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                for both of you 💕
                {isAnnual && <span className="block mt-1">billed annually</span>}
              </p>
            </div>

            {/* Benefits */}
            <div className="p-8 space-y-6">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[hsl(var(--logo-yellow))] border-2 border-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[hsl(var(--logo-yellow-foreground))]" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="xl" className="w-full border-2 border-foreground">
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

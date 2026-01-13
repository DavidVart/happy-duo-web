import { Check, Gift, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <div className="text-center space-y-4 mb-16">
          <div className="section-badge mx-auto">
            <span className="text-lg">💝</span>
            <span>Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Invest in your{" "}
            <span className="gradient-text">happiness together</span>
          </h2>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative">
            {/* Decorative glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur opacity-30" />
            
            <div className="relative bg-card rounded-2xl border-2 border-primary/20 overflow-hidden">
              {/* Header */}
              <div className="bg-hero-bg p-8 text-center">
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
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="whatsapp" size="xl" className="w-full">
                  Start 30-Day Free Trial
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  No credit card required. Cancel anytime.
                </p>
              </div>

              {/* Referral bonus */}
              <div className="border-t border-border p-6 bg-feature-yellow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center">
                    <Gift className="w-6 h-6 text-amber-600" />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

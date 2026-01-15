import { useState } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Phone submitted:", phoneNumber);
  };

  return (
    <section className="relative overflow-hidden hero-section">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-badge">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Relationship Coach</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Your AI coach for{" "}
                <span className="text-[hsl(var(--primary))]">stronger relationships</span>
                {" "}in WhatsApp
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Happy Duo helps couples communicate better, celebrate each other, 
                and grow together—right where you already chat.
              </p>

              {/* WhatsApp CTA Form - Stripe-style unified input */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative flex items-center max-w-md bg-card rounded-full border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))] p-1.5 pl-5">
                  <input
                    type="tel"
                    placeholder="WhatsApp number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground min-w-0"
                  />
                  <Button type="submit" variant="hero" className="rounded-full px-6 h-11 gap-2 shrink-0">
                    Start now
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  🎉 Start your <strong>30-day free trial</strong> today.
                </p>
              </form>
            </motion.div>

            {/* Right Content - Illustration */}
            <motion.div 
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src={heroIllustration}
                  alt="Happy couple using Happy Duo on their phones"
                  className="relative rounded-2xl border-3 border-foreground shadow-[8px_8px_0_hsl(var(--foreground))] max-w-full h-auto"
                  style={{ borderWidth: '3px' }}
                />
                
                {/* Floating badges */}
                <motion.div 
                  className="absolute -left-4 top-1/4 bg-card rounded-xl border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))] p-3"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-feature-blue border-2 border-foreground flex items-center justify-center">
                      <span className="text-lg">💬</span>
                    </div>
                    <span className="text-sm font-medium">Real-time feedback</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -right-4 bottom-1/4 bg-card rounded-xl border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))] p-3"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-feature-pink border-2 border-foreground flex items-center justify-center">
                      <span className="text-lg">❤️</span>
                    </div>
                    <span className="text-sm font-medium">Love Score: 94%</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
    </section>
  );
};

export default Hero;

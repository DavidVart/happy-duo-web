import { useState, useEffect } from "react";
import { MessageCircle, Sparkles, Copy, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PhoneInput } from "@/components/ui/phone-input";
import heroIllustration from "@/assets/hero-illustration.png";
import confetti from "canvas-confetti";
import { addToWaitlist } from "@/services/airtable";
import { toast } from "sonner";

const Hero = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(1454);

  // Ticker logic: increment by 1 every 3-5 minutes
  useEffect(() => {
    const randomInterval = () => Math.floor(Math.random() * (300000 - 180000 + 1)) + 180000; // 3-5 min in ms

    const tick = () => {
      setWaitlistCount(prev => prev + 1);
    };

    let timeoutId: NodeJS.Timeout;
    const scheduleTick = () => {
      timeoutId = setTimeout(() => {
        tick();
        scheduleTick();
      }, randomInterval());
    };

    scheduleTick();
    return () => clearTimeout(timeoutId);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#fcd411', '#f66299', '#16b4dc'],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;

    setIsSubmitting(true);
    try {
      await addToWaitlist(phoneNumber);
      setIsSubmitted(true);
      triggerConfetti();
      toast.success("You're on the waitlist! 🎉");
    } catch (error) {
      console.error("Failed to add to waitlist:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const referralLink = "happyduo.ai/join?ref=123";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://${referralLink}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToHero = () => {
    const heroInput = document.getElementById('hero-phone-input');
    if (heroInput) {
      heroInput.scrollIntoView({ behavior: 'smooth' });
      heroInput.focus();
    }
  };

  return (
    <section id="hero-section" className="relative overflow-hidden hero-section pt-24 md:pt-28">
      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
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

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Your AI coach for{" "}
              <span className="text-[hsl(var(--primary))]">stronger relationships</span>
              {" "}in WhatsApp
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl">
              Happy Duo helps couples communicate better, celebrate each other, and grow together—right where you already chat.
            </p>

            {/* WhatsApp CTA Form - with country flag picker */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative max-w-md bg-card rounded-2xl sm:rounded-full border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))] p-2 sm:p-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <div className="flex-1 min-w-0 sm:pl-3 sm:pr-[170px]">
                      <PhoneInput
                        id="hero-phone-input"
                        value={phoneNumber}
                        onChange={(value) => setPhoneNumber(value || "")}
                        placeholder="Enter your WhatsApp number"
                        defaultCountry="US"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Mobile: normal flow button */}
                    <Button
                      type="submit"
                      variant="hero"
                      className="sm:hidden rounded-full px-4 h-10 gap-2 w-full text-sm whitespace-nowrap"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        <>
                          Join the waitlist
                          <MessageCircle className="w-4 h-4" />
                        </>
                      )}
                    </Button>

                    {/* Tablet/Desktop: pinned inside the pill */}
                    <Button
                      type="submit"
                      variant="hero"
                      className="hidden sm:inline-flex absolute right-1.5 top-1.5 bottom-1.5 rounded-full px-5 gap-2 h-auto text-sm md:text-base whitespace-nowrap"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        <>
                          Join the waitlist
                          <MessageCircle className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  🔥 <strong>{waitlistCount.toLocaleString()}</strong> others have already joined.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4 max-w-md"
              >
                <div className="bg-card rounded-2xl border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))] p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[hsl(var(--logo-yellow))] border-2 border-foreground flex items-center justify-center">
                    <Check className="w-8 h-8 text-[hsl(var(--logo-yellow-foreground))]" />
                  </div>
                  <h3 className="text-xl font-display font-bold">You're on the list!</h3>
                  <p className="text-muted-foreground">We'll text you soon. 💕</p>

                  <div className="pt-4 border-t border-foreground/10 space-y-3">
                    <p className="text-sm font-medium">Share to move up the list:</p>
                    <div className="flex items-center gap-2 bg-secondary rounded-full p-2 border border-foreground/20">
                      <span className="flex-1 text-sm text-muted-foreground truncate px-3">{referralLink}</span>
                      <Button
                        type="button"
                        variant="hero"
                        size="sm"
                        className="rounded-full gap-2"
                        onClick={handleCopyLink}
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? "Copied!" : "Copy Link"}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-none">
              <img
                src={heroIllustration}
                alt="Happy couple using Happy Duo on their phones"
                className="relative rounded-2xl border-3 border-foreground shadow-[8px_8px_0_hsl(var(--foreground))] w-full h-auto object-cover"
                style={{ borderWidth: '3px' }}
              />

              {/* Floating badges - hidden on small screens */}
              <motion.div
                className="absolute -left-4 top-1/4 bg-card rounded-xl border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))] p-3 hidden sm:block"
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
                className="absolute -right-4 bottom-1/4 bg-card rounded-xl border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))] p-3 hidden sm:block"
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
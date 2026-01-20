import { useState, useEffect } from "react";
import { MessageCircle, Sparkles, Mail, Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { addToWaitlist, generateReferralLink, getReferralFromUrl } from "@/lib/airtable";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referralLink, setReferralLink] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check for referral code in URL
    const ref = getReferralFromUrl();
    if (ref) {
      setReferralCode(ref);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const result = await addToWaitlist({
      email,
      signupSource: referralCode ? 'Referral' : 'Website',
      referredBy: referralCode || undefined,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      setReferralLink(generateReferralLink(email));
      toast({
        title: "You're on the list! 🎉",
        description: result.position 
          ? `You're #${result.position} on the waitlist.`
          : "We'll notify you when Happy Duo is ready.",
      });
    } else {
      toast({
        title: "Oops!",
        description: result.error || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleCopyReferral = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "Share it with friends to move up the waitlist.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Couldn't copy",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="relative overflow-hidden hero-section pt-16 md:pt-20">
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

              {/* Referral badge */}
              {referralCode && !isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-feature-yellow rounded-full border-2 border-foreground text-sm font-medium"
                >
                  🎁 You were referred! Sign up to get priority access.
                </motion.div>
              )}

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  /* Email CTA Form */
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-3"
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="relative max-w-md bg-card rounded-2xl sm:rounded-full border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))] p-2 sm:p-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <div className="flex-1 min-w-0 sm:pl-3 sm:pr-[170px]">
                          <div className="flex items-center gap-2">
                            <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            <Input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email"
                              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 text-base placeholder:text-muted-foreground/60"
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>

                        {/* Mobile: normal flow button */}
                        <Button
                          type="submit"
                          variant="hero"
                          className="sm:hidden rounded-full px-4 h-10 gap-2 w-full text-sm whitespace-nowrap"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Joining..." : "Join waitlist"}
                          <MessageCircle className="w-4 h-4" />
                        </Button>

                        {/* Tablet/Desktop: pinned inside the pill */}
                        <Button
                          type="submit"
                          variant="hero"
                          className="hidden sm:inline-flex absolute right-1.5 top-1.5 bottom-1.5 rounded-full px-5 gap-2 h-auto text-sm md:text-base whitespace-nowrap"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Joining..." : "Join waitlist"}
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      🎉 Be the first to try Happy Duo when we launch.
                    </p>
                  </motion.form>
                ) : (
                  /* Success state with referral */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3 text-lg font-medium text-foreground">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      You're on the waitlist!
                    </div>
                    
                    <div className="max-w-md p-4 bg-card rounded-xl border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))]">
                      <p className="text-sm font-medium mb-3">
                        🚀 Want to move up the list? Share your referral link:
                      </p>
                      <div className="flex gap-2">
                        <Input
                          value={referralLink}
                          readOnly
                          className="text-sm bg-muted/50"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={handleCopyReferral}
                          className="flex-shrink-0 border-2 border-foreground"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Each friend who joins boosts your priority!
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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

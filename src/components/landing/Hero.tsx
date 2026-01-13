import { useState } from "react";
import { MessageCircle, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle WhatsApp signup
    console.log("Phone submitted:", phoneNumber);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="hero-section doodle-pattern mx-4 mt-4 rounded-3xl">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="section-badge">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Relationship Coach</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Your AI coach for{" "}
                <span className="gradient-text">stronger relationships</span>
                {" "}in WhatsApp
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Happy Duo helps couples communicate better, celebrate each other, 
                and grow together—right where you already chat.
              </p>

              {/* WhatsApp CTA Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <div className="relative flex-1">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="Enter your WhatsApp number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="pl-12 h-14 text-base rounded-xl border-2 border-border focus:border-accent"
                    />
                  </div>
                  <Button type="submit" variant="whatsapp" size="xl" className="gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Get Started
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  🎉 Start your <strong>30-day free trial</strong> today. No credit card required.
                </p>
              </form>
            </div>

            {/* Right Content - Illustration */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <img
                  src={heroIllustration}
                  alt="Happy couple using Happy Duo on their phones"
                  className="relative rounded-2xl shadow-2xl max-w-full h-auto animate-float"
                />
                
                {/* Floating badges */}
                <div className="absolute -left-4 top-1/4 bg-card rounded-xl shadow-lg p-3 animate-float-delayed">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-lg">💬</span>
                    </div>
                    <span className="text-sm font-medium">Real-time feedback</span>
                  </div>
                </div>
                
                <div className="absolute -right-4 bottom-1/4 bg-card rounded-xl shadow-lg p-3 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-lg">❤️</span>
                    </div>
                    <span className="text-sm font-medium">Love Score: 94%</span>
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

export default Hero;

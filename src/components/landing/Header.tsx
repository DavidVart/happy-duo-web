import { Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Solid top bar */}
      <div className="bg-foreground text-background py-2 text-center text-sm font-medium">
        🎉 Start your <strong>30-day free trial</strong> today — No credit card required!
      </div>
      
      <div className="bg-card border-b-2 border-foreground">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary border-2 border-foreground flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground fill-current" />
            </div>
            <span className="text-xl font-display font-bold">Happy Duo</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
              How it Works
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors font-medium">
              FAQ
            </a>
          </nav>

          <Button variant="hero" size="lg" className="hidden md:flex border-2 border-foreground">
            Get Started
          </Button>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-2 border-foreground bg-card">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Features
              </a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                How it Works
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Pricing
              </a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                FAQ
              </a>
              <Button variant="hero" size="lg" className="border-2 border-foreground w-full">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

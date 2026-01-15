import { Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="bg-card border-b-2 border-foreground">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary border-2 border-foreground flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground fill-current" />
            </div>
            <span className="text-xl font-display font-bold">Happy Duo</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" onClick={(e) => handleSmoothScroll(e, 'features')} className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, 'how-it-works')} className="text-foreground hover:text-primary transition-colors font-medium">
              How it Works
            </a>
            <a href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')} className="text-foreground hover:text-primary transition-colors font-medium">
              Pricing
            </a>
            <a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')} className="text-foreground hover:text-primary transition-colors font-medium">
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
              <a href="#features" onClick={(e) => handleSmoothScroll(e, 'features')} className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Features
              </a>
              <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, 'how-it-works')} className="text-foreground hover:text-primary transition-colors font-medium py-2">
                How it Works
              </a>
              <a href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')} className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Pricing
              </a>
              <a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')} className="text-foreground hover:text-primary transition-colors font-medium py-2">
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

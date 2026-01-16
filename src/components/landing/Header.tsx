import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import logo from "@/assets/happy-duo-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[hsl(var(--hero-bg))]/80 backdrop-blur-md border-b border-foreground/10' 
            : 'bg-[hsl(var(--hero-bg))]'
        }`}
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Mobile: centered logo with absolute positioning */}
          <div className="lg:hidden absolute left-1/2 -translate-x-1/2">
            <img src={logo} alt="Happy Duo" className="h-10 w-auto" />
          </div>
          {/* Desktop: left-aligned logo */}
          <div className="hidden lg:flex items-center">
            <img src={logo} alt="Happy Duo" className="h-14 w-auto" />
          </div>
          
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#features" onClick={(e) => handleSmoothScroll(e, 'features')} className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Features
            </a>
            <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, 'how-it-works')} className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              How it Works
            </a>
            <a href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')} className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Pricing
            </a>
            <a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')} className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              FAQ
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="lg" className="font-bold">
              Log in
            </Button>
            <Button variant="hero" size="lg">
              Start now
            </Button>
          </div>

          {/* Spacer for mobile to balance hamburger */}
          <div className="lg:hidden w-10" />
          
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-t border-foreground/20 ${
            isScrolled ? 'bg-[hsl(var(--hero-bg))]/90 backdrop-blur-md' : 'bg-[hsl(var(--hero-bg))]'
          }`}>
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
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" size="lg" className="w-full font-bold">
                  Log in
                </Button>
                <Button variant="hero" size="lg" className="w-full">
                  Start now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

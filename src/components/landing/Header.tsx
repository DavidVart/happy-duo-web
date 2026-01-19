import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/happy-duo-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation when coming from another page
  useEffect(() => {
    if (isHomePage && location.hash) {
      const targetId = location.hash.replace('#', '');
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [isHomePage, location.hash]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (isHomePage) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      navigate(`/#${targetId}`);
    }
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
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
          {/* Logo - left aligned on all screens */}
          <div className="flex items-center">
            <button onClick={handleLogoClick} className="cursor-pointer">
              <img src={logo} alt="Happy Duo" className="h-10 lg:h-14 w-auto object-contain" />
            </button>
          </div>
          
          {/* Desktop navigation */}
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

          {/* Right side: buttons + hamburger */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Buttons always visible */}
            <Button variant="outline" size="sm" className="font-bold hidden sm:inline-flex lg:hidden">
              Log in
            </Button>
            <Button variant="hero" size="sm" className="hidden sm:inline-flex lg:hidden">
              Start now
            </Button>
            
            {/* Desktop buttons */}
            <Button variant="outline" size="lg" className="font-bold hidden lg:inline-flex">
              Log in
            </Button>
            <Button variant="hero" size="lg" className="hidden lg:inline-flex">
              Start now
            </Button>
            
            {/* Hamburger menu - only on mobile/tablet */}
            <button 
              className="lg:hidden p-2 ml-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
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
              {/* Show buttons only on very small screens where they're hidden in header */}
              <div className="flex flex-col gap-2 pt-2 sm:hidden">
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
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import logo from "@/assets/happy-duo-logo.png";
import WaitlistModal from "./WaitlistModal";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);
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
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [isHomePage, location.hash]);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isHomePage) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${targetId}`);
    }
  };

  const openWaitlistModal = () => {
    setMobileMenuOpen(false);
    setWaitlistModalOpen(true);
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
    <>
      {/* Yellow Marquee Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[hsl(var(--logo-yellow))] border-b border-foreground/20 overflow-hidden">
        <div className="marquee-container py-1.5">
          <div className="marquee-content">
            <span className="marquee-text text-sm font-medium text-[hsl(var(--logo-yellow-foreground))]">
              🎉 Waitlist now open — join now to secure early access &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
              🎉 Waitlist now open — join now to secure early access &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
              🎉 Waitlist now open — join now to secure early access &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
              🎉 Waitlist now open — join now to secure early access &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
            </span>
          </div>
        </div>
      </div>

      <header className="fixed top-8 left-0 right-0 z-50 w-full">
        <div
          className={`transition-all duration-300 ${isScrolled
            ? 'bg-[hsl(var(--hero-bg))]/80 backdrop-blur-md border-b border-foreground/10'
            : 'bg-[hsl(var(--hero-bg))]'
            }`}
        >
          <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
            {/* Logo - left aligned, smaller on mobile */}
            <div className="flex items-center flex-shrink-0">
              <button onClick={handleLogoClick} className="cursor-pointer">
                <img
                  src={logo}
                  alt="Happy Duo"
                  className="h-6 sm:h-8 lg:h-14 w-auto object-contain"
                />
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
              <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
                Blog
              </Link>
            </nav>

            {/* Right side: buttons + hamburger */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 flex-shrink-0">
              {/* Mobile/Tablet buttons - No login, just Join Waitlist */}
              <Button variant="hero" size="sm" className="lg:hidden text-[10px] sm:text-xs px-2 sm:px-3 h-7 sm:h-8" onClick={openWaitlistModal}>
                Join Waitlist
              </Button>

              {/* Desktop buttons - No login, just Join Waitlist */}
              <Button variant="hero" size="lg" className="hidden lg:inline-flex" onClick={openWaitlistModal}>
                Join Waitlist
              </Button>

              {/* 2-line Hamburger menu - only on mobile/tablet */}
              <button
                className={`lg:hidden p-2 ml-1 flex flex-col gap-[6px] hamburger-2-line ${mobileMenuOpen ? 'is-open' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <span className="hamburger-line w-5 sm:w-6 h-[2px] bg-current transition-transform duration-300 origin-center" />
                <span className="hamburger-line w-5 sm:w-6 h-[2px] bg-current transition-transform duration-300 origin-center" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${mobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Solid background */}
        <div className="absolute inset-0 bg-[hsl(var(--hero-bg))]" />

        {/* Header with logo and close button - matches main header exactly */}
        <div className="relative z-10 pt-8">
          <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
            <div className="flex items-center flex-shrink-0">
              <button onClick={handleLogoClick} className="cursor-pointer">
                <img
                  src={logo}
                  alt="Happy Duo"
                  className="h-6 sm:h-8 w-auto object-contain"
                />
              </button>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <Button variant="hero" size="sm" className="text-[10px] sm:text-xs px-2 sm:px-3 h-7 sm:h-8" onClick={openWaitlistModal}>
                Join Waitlist
              </Button>

              {/* Close button (X) - matches hamburger exactly */}
              <button
                className="p-2 ml-1 flex flex-col gap-[6px] hamburger-2-line is-open"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <span className="hamburger-line w-5 sm:w-6 h-[2px] bg-current transition-transform duration-300 origin-center" />
                <span className="hamburger-line w-5 sm:w-6 h-[2px] bg-current transition-transform duration-300 origin-center" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="relative z-10 container mx-auto px-4 pt-8 flex flex-col gap-6">
          <a
            href="#features"
            onClick={(e) => handleSmoothScroll(e, 'features')}
            className="text-foreground hover:text-primary transition-colors font-medium text-xl py-2"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => handleSmoothScroll(e, 'how-it-works')}
            className="text-foreground hover:text-primary transition-colors font-medium text-xl py-2"
          >
            How it Works
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleSmoothScroll(e, 'pricing')}
            className="text-foreground hover:text-primary transition-colors font-medium text-xl py-2"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={(e) => handleSmoothScroll(e, 'faq')}
            className="text-foreground hover:text-primary transition-colors font-medium text-xl py-2"
          >
            FAQ
          </a>
          <Link
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="text-foreground hover:text-primary transition-colors font-medium text-xl py-2"
          >
            Blog
          </Link>
        </nav>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal open={waitlistModalOpen} onOpenChange={setWaitlistModalOpen} />
    </>
  );
};

export default Header;
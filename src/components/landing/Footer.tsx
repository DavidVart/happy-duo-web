import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/happy-duo-logo.png";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
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

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="Happy Duo" className="h-10 md:h-12 w-auto max-w-[150px] md:max-w-none object-contain" />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a 
              href="#features" 
              onClick={(e) => handleSmoothScroll(e, 'features')}
              className="text-background/70 hover:text-background transition-colors cursor-pointer"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => handleSmoothScroll(e, 'how-it-works')}
              className="text-background/70 hover:text-background transition-colors cursor-pointer"
            >
              How it Works
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleSmoothScroll(e, 'pricing')}
              className="text-background/70 hover:text-background transition-colors cursor-pointer"
            >
              Pricing
            </a>
            <Link to="/about" className="text-background/70 hover:text-background transition-colors">
              About
            </Link>
            <Link to="/privacy" className="text-background/70 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/70 hover:text-background transition-colors">
              Terms of Service
            </Link>
          </nav>

          <p className="text-sm text-background/50">
            © 2026 Happy Duo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

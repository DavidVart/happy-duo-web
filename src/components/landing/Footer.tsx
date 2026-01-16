import { Link } from "react-router-dom";
import logo from "@/assets/happy-duo-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center">
            <img src={logo} alt="Happy Duo" className="h-10 md:h-12 w-auto" />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a 
              href="#features" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-background/70 hover:text-background transition-colors cursor-pointer"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-background/70 hover:text-background transition-colors cursor-pointer"
            >
              How it Works
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
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
            © 2025 Happy Duo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

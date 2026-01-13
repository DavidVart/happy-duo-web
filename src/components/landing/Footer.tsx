import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground fill-current" />
            </div>
            <span className="text-xl font-display font-bold">Happy Duo</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#features" className="text-background/70 hover:text-background transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-background/70 hover:text-background transition-colors">
              How it Works
            </a>
            <a href="#pricing" className="text-background/70 hover:text-background transition-colors">
              Pricing
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              Terms of Service
            </a>
          </nav>

          <p className="text-sm text-background/50">
            © 2025 Happy Duo. Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50"
        >
          <div className="bg-card border-2 border-foreground rounded-2xl shadow-[4px_4px_0_hsl(var(--foreground))] p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🍪</span>
              <div className="flex-1">
                <p className="text-sm text-foreground mb-3">
                  We use cookies to enhance your experience and analyze site usage.{" "}
                  <Link to="/privacy" className="underline hover:text-primary transition-colors">
                    Learn more
                  </Link>
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={handleAccept}
                    size="sm"
                    className="bg-logo-yellow text-foreground hover:bg-logo-yellow/90 border-2 border-foreground shadow-[2px_2px_0_hsl(var(--foreground))] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-xs font-semibold"
                  >
                    Accept
                  </Button>
                  <Button
                    onClick={handleDecline}
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground hover:bg-[#16b4dc]/20 text-xs"
                  >
                    Decline
                  </Button>
                </div>
              </div>
              <button
                onClick={handleDecline}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;

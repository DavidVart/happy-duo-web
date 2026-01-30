import { useState } from "react";
import { MessageCircle, Check, Copy, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/phone-input";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { addToWaitlist } from "@/services/airtable";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { generateReferralLink } from "@/lib/referral";

interface WaitlistModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const WaitlistModal = ({ open, onOpenChange }: WaitlistModalProps) => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [copied, setCopied] = useState(false);
    const [referralLink, setReferralLink] = useState<string>("");

    const triggerConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#fcd411", "#f66299", "#16b4dc"],
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!phoneNumber) return;

        setIsSubmitting(true);
        try {
            await addToWaitlist(phoneNumber);
            // Generate unique referral link for this user
            const link = generateReferralLink(phoneNumber);
            setReferralLink(link);
            setIsSubmitted(true);
            triggerConfetti();
            toast.success("You're on the waitlist! 🎉");
        } catch (error) {
            console.error("Failed to add to waitlist:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleClose = (newOpen: boolean) => {
        if (!newOpen) {
            // Reset state when closing
            setTimeout(() => {
                setPhoneNumber("");
                setIsSubmitted(false);
            }, 300);
        }
        onOpenChange(newOpen);
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md bg-card border-2 border-foreground shadow-[8px_8px_0_hsl(var(--foreground))] rounded-2xl p-6">
                <DialogHeader className="text-center">
                    <DialogTitle className="text-2xl font-display font-bold">
                        Join the Waitlist
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                        Be among the first to experience Happy Duo
                    </DialogDescription>
                </DialogHeader>

                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="bg-secondary rounded-full border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))] p-1.5">
                            <div className="flex items-center gap-2">
                                <div className="flex-1 min-w-0 pl-3">
                                    <PhoneInput
                                        id="modal-phone-input"
                                        value={phoneNumber}
                                        onChange={(value) => setPhoneNumber(value || "")}
                                        placeholder="Enter your WhatsApp number"
                                        defaultCountry="GB"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            variant="hero"
                            className="w-full rounded-full h-12 gap-2 text-base"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Joining...
                                </>
                            ) : (
                                <>
                                    Join the waitlist
                                    <MessageCircle className="w-5 h-5" />
                                </>
                            )}
                        </Button>
                    </form>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-4 mt-4"
                    >
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto rounded-full bg-[hsl(var(--logo-yellow))] border-2 border-foreground flex items-center justify-center">
                                <Check className="w-8 h-8 text-[hsl(var(--logo-yellow-foreground))]" />
                            </div>
                            <h3 className="text-xl font-display font-bold">
                                You're on the list!
                            </h3>
                            <p className="text-muted-foreground">We'll text you soon. 💕</p>

                            <div className="pt-4 border-t border-foreground/10 space-y-3">
                                <p className="text-sm font-medium">
                                    🚀 You moved up! Share to climb even higher:
                                </p>
                                <div className="flex items-center gap-2 bg-secondary rounded-full p-2 border border-foreground/20">
                                    <span className="flex-1 text-xs text-muted-foreground truncate px-3">
                                        {referralLink}
                                    </span>
                                    <Button
                                        type="button"
                                        variant="hero"
                                        size="sm"
                                        className="rounded-full gap-2"
                                        onClick={handleCopyLink}
                                    >
                                        {copied ? (
                                            <Check className="w-4 h-4" />
                                        ) : (
                                            <Copy className="w-4 h-4" />
                                        )}
                                        {copied ? "Copied!" : "Copy Link"}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default WaitlistModal;

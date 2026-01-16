import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Happy Duo work and are my conversations reviewed by humans?",
    answer: "Happy Duo creates a dedicated WhatsApp group where both you and your partner chat. Our AI coach joins this group and monitors conversations in real-time to provide helpful feedback. Your messages are encrypted and never shared with third parties. Chats may be reviewed on an aggregated basis by professional therapists to ensure service quality—your names always remain anonymous, so feel confident sharing your most intimate conversations.",
  },
  {
    question: "Is my data private and secure?",
    answer: "Absolutely. We use end-to-end encryption and never sell or share your personal data. All conversation analysis happens securely, and you have full control over your data. You can delete your account and all associated data at any time.",
  },
  {
    question: "Can I control what feedback I receive?",
    answer: "Yes! You have full control over how and when the AI coach intervenes. You can choose to receive private feedback (1-on-1 messages) or have insights shared in the group chat. You can also customize the frequency and types of feedback.",
  },
  {
    question: "What happens during the 30-day free trial?",
    answer: "You get full access to all Happy Duo features for 30 days. Try the smart feedback, relationship scoring, date ideas, and all integrations. You won't be charged until your trial ends, and you can cancel anytime.",
  },
  {
    question: "How does the relationship score work?",
    answer: "Our AI analyzes the tone, sentiment, and patterns in your conversations to calculate an 'emotional bank account' score. Positive interactions add to your balance, while tense moments are flagged for improvement. It's a helpful way to visualize your communication health.",
  },
  {
    question: "Can I use Happy Duo with other messaging apps?",
    answer: "Currently, Happy Duo works exclusively with WhatsApp, as it's the most widely-used messaging platform globally. We're exploring support for other platforms like iMessage and Telegram for future releases.",
  },
  {
    question: "What integrations are available?",
    answer: "Happy Duo integrates with Google Calendar, Apple Calendar, and Google Photos. Calendar sync helps you remember important dates and plan couple activities, while Photos integration lets you relive beautiful memories together.",
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel anytime from your account settings. There are no cancellation fees, and you'll continue to have access until the end of your billing period. Your data can be exported or deleted upon request.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge mx-auto">
            <span className="text-lg">❓</span>
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Frequently asked{" "}
            <span className="text-primary">questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Happy Duo
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bold-card rounded-xl px-6 border-2 border-foreground data-[state=open]:shadow-[4px_4px_0_hsl(var(--foreground))]"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

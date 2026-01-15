import { 
  MessageSquareHeart, 
  TrendingUp, 
  PartyPopper, 
  Calendar,
  ImageIcon,
  Settings2
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: MessageSquareHeart,
    title: "Conflict De-escalation",
    description: "When Happy Duo senses a conversation is getting heated, it gently intervenes to suggest a time-out—so you can cool off and reconnect later.",
    color: "pink" as const,
  },
  {
    icon: TrendingUp,
    title: "Relationship Score",
    description: "Track your emotional bank account. See how your communication impacts your bond over time.",
    color: "yellow" as const,
  },
  {
    icon: PartyPopper,
    title: "Challenges & Prompts",
    description: "Never forget an anniversary. Get personalized date ideas, movie recommendations, and romantic reminders.",
    color: "blue" as const,
  },
  {
    icon: Calendar,
    title: "Calendar Integration",
    description: "Sync with Google or Apple Calendar. Add couple events easily and get reminders for important moments.",
    color: "purple" as const,
  },
  {
    icon: ImageIcon,
    title: "Memory Lane",
    description: "Connect to Google Photos and relive beautiful moments together with surprise photo shares.",
    color: "pink" as const,
  },
  {
    icon: Settings2,
    title: "Fully Customizable",
    description: "Control how and when the coach intervenes. Private feedback or shared insights—you decide.",
    color: "yellow" as const,
  },
];


const colorClasses = {
  pink: "bg-feature-pink",
  yellow: "bg-feature-yellow",
  blue: "bg-feature-blue",
  purple: "bg-feature-purple",
};

const iconColorClasses = {
  pink: "text-primary",
  yellow: "text-amber-600",
  blue: "text-blue-600",
  purple: "text-purple-600",
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge mx-auto">
            <span className="text-lg">✨</span>
            <span>Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Everything you need to{" "}
            <span className="text-[hsl(var(--primary))]">thrive together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Happy Duo works silently in your WhatsApp, offering support exactly when you need it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${colorClasses[feature.color]} feature-card rounded-2xl p-6`}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl bg-card border-2 border-foreground flex items-center justify-center ${iconColorClasses[feature.color]}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;

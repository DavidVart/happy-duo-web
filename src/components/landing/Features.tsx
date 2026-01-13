import { 
  MessageSquareHeart, 
  TrendingUp, 
  PartyPopper, 
  Calendar,
  ImageIcon,
  Settings2
} from "lucide-react";

const features = [
  {
    icon: MessageSquareHeart,
    title: "Smart Feedback",
    description: "Get gentle suggestions when a message could be more constructive. Celebrate together when you communicate well.",
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
  blue: "text-hero-border",
  purple: "text-purple-600",
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="section-badge mx-auto">
            <span className="text-lg">✨</span>
            <span>Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Everything you need to{" "}
            <span className="gradient-text">thrive together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Happy Duo works silently in your WhatsApp, offering support exactly when you need it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${colorClasses[feature.color]} rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl bg-card flex items-center justify-center ${iconColorClasses[feature.color]}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

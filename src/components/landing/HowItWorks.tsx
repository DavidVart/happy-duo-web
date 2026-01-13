import { MessageCircle, Users, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Enter your WhatsApp number",
    description: "Sign up with your phone number and invite your partner to join.",
  },
  {
    number: "02",
    icon: Users,
    title: "Create your couple group",
    description: "Happy Duo creates a special WhatsApp group for you both. Pin it for easy access.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Start chatting naturally",
    description: "Talk as you normally would. Your AI coach observes and helps you grow together.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="section-badge mx-auto">
            <span className="text-lg">🚀</span>
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Get started in{" "}
            <span className="gradient-text">3 simple steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl p-8 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

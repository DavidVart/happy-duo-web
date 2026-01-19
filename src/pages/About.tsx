import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

// Import logos
import metaLogo from "@/assets/logos/meta.png";
import bainLogo from "@/assets/logos/bain.png";
import stanfordLogo from "@/assets/logos/stanford.png";
import michiganLogo from "@/assets/logos/michigan.svg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const logos = [
  { name: "Meta", src: metaLogo },
  { name: "Bain & Co", src: bainLogo },
  { name: "Stanford", src: stanfordLogo },
  { name: "Michigan", src: michiganLogo },
];

const About = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-24 md:pt-32 md:pb-32">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-[750px] mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8">
                The Foundation of Humanity
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-[1.8]">
                We believe the couple is the engine of human creation. Every family, every community, and the very future of our species begins with the bond between two people. When that bond is strong, it provides the stability upon which everything else is built.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-24 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-[750px] mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-[1.8] mb-16">
                But today, that engine is under unprecedented strain. We are living through a global epidemic of loneliness and a rising mental health crisis among our youth. We are bombarded by algorithms that thrive on social division, and the ambient stress of environmental and global instability follows us home, leaking into the messages we exchange with the person we love most.
              </p>

              <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
                The Reality of the Modern Bond
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-[1.8]">
                The data tells a story of "The Great Disconnection":
              </p>

              <div className="space-y-6">
                <motion.div 
                  className="p-6 rounded-2xl bg-background border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  variants={fadeInUp}
                >
                  <h3 className="font-display font-semibold text-lg mb-2">The Partnership Gap</h3>
                  <p className="text-muted-foreground leading-[1.7]">
                    In many developed nations, the rate of formal unions has collapsed by over 50% since the 1970s.
                  </p>
                </motion.div>

                <motion.div 
                  className="p-6 rounded-2xl bg-background border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  variants={fadeInUp}
                >
                  <h3 className="font-display font-semibold text-lg mb-2">The Fragility of Connection</h3>
                  <p className="text-muted-foreground leading-[1.7]">
                    Nearly half of all modern partnerships dissolve within the first decade, often leaving families in the wake of the fallout.
                  </p>
                </motion.div>

                <motion.div 
                  className="p-6 rounded-2xl bg-background border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  variants={fadeInUp}
                >
                  <h3 className="font-display font-semibold text-lg mb-2">The Loneliness Epidemic</h3>
                  <p className="text-muted-foreground leading-[1.7]">
                    It is no longer just about staying together; it is about staying connected. Recent studies show that 6 out of 10 couples feel "lonely" within their relationship, living more like logistics-focused roommates than romantic partners.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Myth */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-[750px] mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                The Myth of "Day 0"
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-[1.8] mb-8">
                When a relationship begins, we assume its strength is a permanent gift. We believe the magic of Day 0—the effortless empathy and constant attention—is the default state.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground leading-[1.8]">
                But the truth is that staying strong together is not natural; it is intentional. In today's accelerated world, the odds are stacked against us. We work longer hours. We are tethered to our offices by our pockets. We travel more for careers and live further away from the traditional safety nets of friends and family. This pressure falls entirely on the "minimal family unit"—the couple—expecting them to be everything for each other while having less time than ever to actually talk.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Problem with Old Solutions */}
        <section className="py-24 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-[750px] mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Our Couples Changed. The Help Didn't.
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-[1.8] mb-12">
                Our lives have moved online, but our support systems are stuck in the past. We still rely on a model of intervention that is increasingly out of sync with how we live:
              </p>

              <div className="space-y-8">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  variants={fadeInUp}
                >
                  <h3 className="font-display font-semibold text-xl mb-3">The Scheduling Headache</h3>
                  <p className="text-muted-foreground leading-[1.8]">
                    Traditional therapy requires syncing busy calendars for a single hour that often feels like an added chore.
                  </p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  variants={fadeInUp}
                >
                  <h3 className="font-display font-semibold text-xl mb-3">The Missing Middle</h3>
                  <p className="text-muted-foreground leading-[1.8]">
                    A weekly session cannot capture the thousands of micro-interactions—the texts, the voice notes, the shared photos—where a relationship actually lives.
                  </p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  variants={fadeInUp}
                >
                  <h3 className="font-display font-semibold text-xl mb-3">The Modern Complexity</h3>
                  <p className="text-muted-foreground leading-[1.8]">
                    Whether navigating the challenges of neurodivergent parenting or the distance of a long-haul career, couples need support that is as dynamic as their lives.
                  </p>
                </motion.div>
              </div>

              <motion.p 
                className="text-lg md:text-xl text-foreground font-medium leading-[1.8] mt-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                variants={fadeInUp}
              >
                We believe we can help couples grow stronger without adding more work to their already full plates.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-[750px] mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Magic in the Micro-Moments
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-[1.8] mb-8">
                We started Happy Duo because we believe the best support is the kind that meets you where you are: in your pocket, in your chat, and in your daily life.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground leading-[1.8] mb-8">
                By leveraging the leap in AI, we can finally provide individualized, real-time coaching at a fraction of the cost of traditional methods. We aren't here to replace the deep work of therapy; we are here to support the daily habit of being a team.
              </p>

              <motion.p 
                className="text-xl md:text-2xl text-foreground font-semibold leading-[1.8] p-8 rounded-2xl bg-feature-pink border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={fadeInUp}
              >
                We celebrate the favors, find the gaps in your calendar, and nudge you back toward each other when the world tries to pull you apart. Happy Duo is the guardian of the couple—because when the couple thrives, humanity thrives.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-24 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-[750px] mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Built by a Team From
              </h2>
              <p className="text-muted-foreground mb-12 leading-[1.8]">
                We brought together a team bridging top-tier technology and human strategy to solve this deeply human problem.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
                {logos.map((company, index) => (
                  <motion.div
                    key={company.name}
                    className="group cursor-default"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    variants={fadeInUp}
                  >
                    <img 
                      src={company.src} 
                      alt={company.name}
                      className={`w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${
                        company.name === "Michigan" ? "h-10 md:h-12" : "h-8 md:h-10"
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

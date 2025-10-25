import { Play, Lightbulb, Rocket, TrendingUp, TestTube } from "lucide-react";
import heroImage from "../assets/about-hero.jpg";

const AboutUs = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Discover & Understand",
      description:
        "Every great project starts with understanding. I take time to learn about your goals, audience, and vision — uncovering the challenges and opportunities that shape the direction of the design and development process.",
    },
    {
      icon: Rocket,
      title: "Plan & Strategize",
      description:
        "Once the vision is clear, I create a structured roadmap — outlining the design style, technology stack, and timeline. This stage ensures that every detail aligns with your brand and purpose before development begins.",
    },
    {
      icon: TrendingUp,
      title: "Design & Develop",
      description:
        "Using modern frameworks and clean UI principles, I turn ideas into fully responsive, interactive, and optimized digital experiences. Every line of code and every visual element is crafted to deliver both performance and beauty.",
    },
    {
      icon: TestTube,
      title: "Launch & Support",
      description:
        "After deployment, I continue to monitor performance and offer support to ensure everything runs perfectly. From updates to enhancements, I stay involved to help your digital presence grow with your goals.",
    },
  ];

  return (
    <div className=" w-full max-w-[1300px] h-screen overflow-y-scroll text-white">
      {/* Hero Section */}
      <section className="relative  flex items-center ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-mainBg via-mainBg/85 to-mainBg/30" />
        </div>

        <div className="container relative z-10 px-6 py-32">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-[1.1]">
              Turning vision into beautiful, functional digital reality{" "}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Maximize Your Potential with Our Enterprise Technology Solutions.
              Let us help you unlock the full potential of your business with
              our innovative designs.
            </p>
            <button className="flex items-center gap-4 group hover-scale">
              <div className="w-20 h-20 rounded-full bg-primary/10 backdrop-blur-sm border-2 border-primary/40 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/60 transition-all duration-300">
                <span>
                  <i class="fi fi-sr-link-alt text-3xl"></i>{" "}
                </span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                  Know more about us
                </div>
                <div className="text-sm text-muted-foreground">
                  connect.webpiece@gmail.com
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent opacity-20" />
      </section>

      {/* Services Section */}
      <section className="bg-primary py-24 relative">
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-20 max-w-3xl leading-tight animate-fade-in">
            How We Build Exceptional Digital Experiences{" "}
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-14 max-w-6xl">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex gap-6 group animate-fade-in hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Icon
                        className="w-8 h-8 text-primary-foreground"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-primary-foreground mb-4 group-hover:translate-x-1 transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";
import heroImage from "@/assets/hero-sao-tome.jpg";

export const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("linha-tempo");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 animate-[float_20s_ease-in-out_infinite]"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center pt-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Pre-title */}
              <p className="text-white/70 text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-6 animate-fade-up">
                A verdadeira história de
              </p>
              
              {/* Main Title */}
              <h1 className="font-heading text-white mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
                <span className="block text-5xl md:text-7xl lg:text-8xl font-bold mb-2">
                  São Tomé
                </span>
                <span className="block text-5xl md:text-7xl lg:text-8xl font-bold text-gradient">
                  e Príncipe
                </span>
              </h1>

              {/* Question Hook */}
              <p className="text-white/90 text-2xl md:text-3xl lg:text-4xl font-heading font-medium mb-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
                Conheces mesmo a tua história?
              </p>

              {/* Description */}
              <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "300ms" }}>
                Uma jornada interativa pelos segredos, lutas e vitórias que moldaram a nossa nação.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
                <Button 
                  onClick={scrollToNextSection}
                  className="h-14 px-8 rounded-full text-base font-semibold bg-white text-foreground hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  Começar a Jornada
                </Button>
                <Button 
                  variant="ghost"
                  className="h-14 px-8 rounded-full text-base font-medium text-white border border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 group"
                >
                  <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Ver Trailer
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="relative z-10 py-8 md:py-12">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                {[
                  { value: "500+", label: "Anos de História" },
                  { value: "50+", label: "Personagens" },
                  { value: "100+", label: "Factos Ocultos" }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center animate-fade-up"
                    style={{ animationDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="text-2xl md:text-4xl font-heading font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-xs md:text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "800ms" }}>
          <button
            onClick={scrollToNextSection}
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-xs font-medium tracking-wider uppercase">Explorar</span>
            <div className="w-8 h-12 rounded-full border-2 border-current flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-current rounded-full animate-[float_2s_ease-in-out_infinite]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-sao-tome.jpg";

export const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("linha-tempo");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-slide-up">
            {/* Pre-title */}
            <p className="text-white/90 text-lg md:text-xl mb-4 animate-fade-in">
              A verdadeira história de
            </p>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              São Tomé
              <br />
              <span className="bg-gradient-tropical bg-clip-text text-transparent animate-glow">
                e Príncipe
              </span>
            </h1>

            {/* Emotional Hook */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl text-white font-semibold mb-4">
                Conhece mesmo a tua história?
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Descobre os segredos, as lutas e as vitórias que moldaram o nosso país. 
                Uma jornada interativa através dos tempos que vai mudar a tua perspectiva.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                variant="hero" 
                size="xl"
                onClick={scrollToNextSection}
                className="min-w-48"
              >
                Começar a Jornada
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 min-w-48"
              >
                Sobre o Projeto
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-white/70 text-sm">Anos de História</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-white/70 text-sm">Personagens Cruciais</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-white/70 text-sm">Fatos Ocultos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToNextSection}
          className="text-white hover:bg-white/10 rounded-full"
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};
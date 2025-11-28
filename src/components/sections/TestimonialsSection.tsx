import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Quote, ChevronDown, ChevronUp } from "lucide-react";

interface Testimonial {
  name: string;
  age: string;
  location: string;
  story: string;
  quote: string;
  period: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dona Esperança",
    age: "78 anos",
    location: "Santana",
    period: "Viveu a Independência",
    quote: "Vi o país nascer com os meus próprios olhos. A alegria desse dia nunca mais se repetiu.",
    story: "Lembro-me bem do dia 12 de julho de 1975. Estava na praça central quando a bandeira foi hasteada pela primeira vez. Todas as pessoas choravam de alegria. Tínhamos esperado tanto por esse momento."
  },
  {
    name: "Senhor João Carlos",
    age: "82 anos", 
    location: "Trindade",
    period: "Trabalhador das Roças",
    quote: "As roças eram duras, mas foi lá que aprendi o valor do trabalho em equipa.",
    story: "Comecei a trabalhar nas plantações de cacau aos 12 anos. Era trabalho pesado, mas os trabalhadores cuidavam uns dos outros como uma grande família."
  },
  {
    name: "Mãe Vitória",
    age: "85 anos",
    location: "Água Grande", 
    period: "Período Colonial Tardio",
    quote: "Nós, mulheres, sempre encontrámos formas de ajudar, mesmo quando parecia impossível.",
    story: "Durante a época mais difícil do colonialismo, as mulheres organizavam-se em segredo. Fazíamos coletas para ajudar famílias necessitadas."
  },
  {
    name: "Tio Miguel",
    age: "74 anos",
    location: "Lobata",
    period: "Primeiros Anos da Democracia", 
    quote: "A democracia trouxe esperança, mas também muitos desafios.",
    story: "Quando chegaram as primeiras eleições livres em 1991, eu já tinha 41 anos. Nunca tinha votado livremente na minha vida."
  }
];

export const TestimonialsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section id="testemunhos" className="section-padding bg-background relative">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Vozes da História
          </p>
          <h2 className="text-foreground mb-6">
            Testemunhos
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            As vozes dos que viveram a história. Experiências reais de pessoas 
            que testemunharam as transformações do nosso país.
          </p>
          <div className="divider mt-8" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <article 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-card"
            >
              {/* Header */}
              <div className="bg-gradient-warm p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-warm-foreground font-heading font-bold text-xl mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-warm-foreground/80 text-sm">
                      {testimonial.age} • {testimonial.location}
                    </p>
                    <p className="text-warm-foreground/60 text-xs mt-1">
                      {testimonial.period}
                    </p>
                  </div>
                  <button
                    onClick={() => setPlayingIndex(playingIndex === index ? null : index)}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-warm-foreground hover:bg-white/30 transition-colors"
                  >
                    {playingIndex === index ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4 ml-0.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Quote */}
              <div className="p-6">
                <div className="flex gap-3 mb-4">
                  <Quote className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-foreground text-lg italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Expandable Story */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedIndex === index ? "max-h-48" : "max-h-0"
                }`}>
                  <p className="text-muted-foreground leading-relaxed pt-4 border-t border-border">
                    {testimonial.story}
                  </p>
                </div>

                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="flex items-center gap-2 text-primary font-medium text-sm mt-4 hover:gap-3 transition-all"
                >
                  {expandedIndex === index ? (
                    <>Mostrar menos <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>Ler história completa <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>

                {/* Audio Indicator */}
                {playingIndex === index && (
                  <div className="flex items-center gap-2 text-primary text-sm mt-4 pt-4 border-t border-border">
                    <div className="flex gap-0.5">
                      {[...Array(4)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-1 bg-primary rounded-full animate-pulse"
                          style={{ 
                            height: `${12 + Math.random() * 8}px`,
                            animationDelay: `${i * 100}ms` 
                          }}
                        />
                      ))}
                    </div>
                    <span>A reproduzir testemunho...</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-ocean rounded-3xl p-8 md:p-10 text-center max-w-3xl mx-auto">
          <h3 className="text-white text-2xl md:text-3xl font-heading font-bold mb-4">
            Contribui com a tua História
          </h3>
          <p className="text-white/80 mb-6 leading-relaxed">
            Tens familiares com histórias importantes para partilhar? 
            Ajuda-nos a preservar estas memórias para as futuras gerações.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-white text-secondary hover:bg-white/90 rounded-full h-12 px-6 font-semibold">
              Gravar Testemunho
            </Button>
            <Button variant="ghost" className="text-white border border-white/30 hover:bg-white/10 rounded-full h-12 px-6 font-medium">
              Enviar História Escrita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, Quote } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  name: string;
  age: string;
  location: string;
  story: string;
  audioFile?: string;
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
    story: "Lembro-me bem do dia 12 de julho de 1975. Estava na praça central quando a bandeira de São Tomé e Príncipe foi hasteada pela primeira vez. Todas as pessoas choravam de alegria. Tínhamos esperado tanto por esse momento. Eu tinha 29 anos e três filhos pequenos. Pensei: 'Agora os meus filhos vão crescer num país livre.' Foi o dia mais bonito da minha vida."
  },
  {
    name: "Senhor João Carlos",
    age: "82 anos", 
    location: "Trindade",
    period: "Trabalhador das Roças",
    quote: "As roças eram duras, mas foi lá que aprendi o valor do trabalho em equipa.",
    story: "Comecei a trabalhar nas plantações de cacau aos 12 anos. Era trabalho pesado, mas os trabalhadores cuidavam uns dos outros como uma grande família. Tínhamos os nossos códigos, as nossas canções, as nossas formas de resistir. Quando não havia comida suficiente, partilhávamos o pouco que tínhamos. Isso ensinou-me que juntos somos mais fortes."
  },
  {
    name: "Mãe Vitória",
    age: "85 anos",
    location: "Água Grande", 
    period: "Período Colonial Tardio",
    quote: "Nós, mulheres, sempre encontrámos formas de ajudar, mesmo quando parecia impossível.",
    story: "Durante a época mais difícil do colonialismo, as mulheres organizavam-se em segredo. Fazíamos coletas para ajudar famílias necessitadas, escondíamos pessoas que estavam a ser perseguidas, e ensinávamos as crianças sobre a nossa cultura quando as autoridades tentavam proibir. Nunca desistimos de acreditar que dias melhores viriam."
  },
  {
    name: "Tio Miguel",
    age: "74 anos",
    location: "Lobata",
    period: "Primeiros Anos da Democracia", 
    quote: "A democracia trouxe esperança, mas também muitos desafios que ainda estamos a aprender a enfrentar.",
    story: "Quando chegaram as primeiras eleições livres em 1991, eu já tinha 41 anos. Nunca tinha votado livremente na minha vida. Lembro-me de estar na fila, nervoso, mas também orgulhoso. Pensava: 'Finalmente posso escolher.' Mas depois veio a desilusão quando alguns políticos não cumpriram as promessas. Aprendi que a democracia não é só votar - é participar todos os dias."
  }
];

export const TestimonialsSection = () => {
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedTestimonial(expandedTestimonial === index ? null : index);
  };

  return (
    <section id="testemunhos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Testemunhos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As vozes dos que viveram a história. Experiências reais de pessoas 
            que testemunharam as transformações do nosso país.
          </p>
          <div className="w-24 h-1 bg-gradient-tropical mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Audio Note */}
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-12 max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <Volume2 className="w-5 h-5 text-accent" />
            <p className="text-foreground text-sm">
              <strong>Nota:</strong> Esta é uma demonstração. Numa versão real, 
              incluiríamos gravações áudio reais dos testemunhos.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-tropical transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-warm p-6 text-warm-foreground">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-warm-foreground/90 text-sm">
                        {testimonial.age} • {testimonial.location}
                      </p>
                      <p className="text-warm-foreground/80 text-xs mt-1">
                        {testimonial.period}
                      </p>
                    </div>
                    
                    {/* Audio Controls (Demo) */}
                    <Button
                      variant="secondary"
                      size="icon"
                      className="shrink-0"
                      onClick={() => setPlayingAudio(playingAudio === index ? null : index)}
                    >
                      {playingAudio === index ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-6 pb-4">
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <p className="text-lg italic text-foreground leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>

                {/* Story Preview/Full */}
                <div className="px-6 pb-6">
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedTestimonial === index ? 'max-h-96' : 'max-h-20'
                  }`}>
                    <p className="text-muted-foreground leading-relaxed">
                      {testimonial.story}
                    </p>
                  </div>
                  
                  {/* Expand Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(index)}
                    className="mt-3 text-primary hover:text-primary/80"
                  >
                    {expandedTestimonial === index ? 'Mostrar Menos' : 'Ler História Completa'}
                  </Button>
                </div>

                {/* Audio Playing Indicator */}
                {playingAudio === index && (
                  <div className="px-6 pb-4">
                    <div className="flex items-center gap-2 text-primary text-sm">
                      <div className="flex gap-1">
                        <div className="w-1 h-3 bg-primary animate-pulse"></div>
                        <div className="w-1 h-4 bg-primary animate-pulse" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-1 h-2 bg-primary animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-1 h-3 bg-primary animate-pulse" style={{animationDelay: '0.3s'}}></div>
                      </div>
                      <span>A reproduzir testemunho...</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-ocean p-8 rounded-xl shadow-depth max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Contribui com a tua História
            </h3>
            <p className="text-white/90 mb-6">
              Tens familiares ou conheces pessoas com histórias importantes para partilhar? 
              Ajuda-nos a preservar estas memórias para as futuras gerações.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Gravar Testemunho
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Enviar História Escrita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
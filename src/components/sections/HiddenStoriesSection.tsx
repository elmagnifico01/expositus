import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, AlertTriangle, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

interface HiddenStory {
  id: string;
  title: string;
  preview: string;
  fullStory: string;
  icon: React.ReactNode;
  category: "revolt" | "manipulation" | "resistance" | "corruption";
}

const hiddenStories: HiddenStory[] = [
  {
    id: "revolta-silenciosa-1960",
    title: "A Revolta Silenciosa de 1960",
    preview: "Uma rebelião organizada por mulheres que nunca chegou aos livros de história...",
    fullStory: "Em 1960, as mulheres das plantações organizaram uma greve silenciosa que paralisou a economia colonial durante semanas. Lideradas por Mãe Rosa, uma anciã respeitada, elas coordenaram uma resistência pacífica mas devastadoramente eficaz. As autoridades coloniais tentaram esconder este evento, mas os relatos orais preservaram esta história de coragem feminina.",
    icon: <Shield className="w-6 h-6" />,
    category: "revolt"
  },
  {
    id: "ouro-que-nunca-existiu",
    title: "O Ouro que Nunca Existiu",
    preview: "Como uma mentira sobre riquezas minerais mudou o destino das ilhas...",
    fullStory: "Entre 1920-1940, rumores falsos sobre depósitos de ouro foram espalhados pelas autoridades para atrair mais colonos e investimento. Esta manipulação levou ao desmatamento de vastas áreas e ao sofrimento de comunidades inteiras que foram forçadas a trabalhar em minas inexistentes. A verdade só foi revelada décadas depois.",
    icon: <AlertTriangle className="w-6 h-6" />,
    category: "manipulation"
  },
  {
    id: "rede-secreta-solidariedade",
    title: "A Rede Secreta de Solidariedade",
    preview: "Um sistema clandestino que salvou centenas de vidas durante a repressão...",
    fullStory: "Durante os anos mais duros da repressão colonial, formou-se uma rede secreta de solidariedade entre diferentes comunidades. Usando sinais tradicionais e rotas secretas pelas montanhas, esta rede conseguiu salvar centenas de pessoas da perseguição política e ajudar famílias em dificuldades.",
    icon: <Eye className="w-6 h-6" />,
    category: "resistance"
  },
  {
    id: "escandalo-cacau-fantasma",
    title: "O Escândalo do Cacau Fantasma",
    preview: "Milhões roubados através de plantações que só existiam no papel...",
    fullStory: "Nos anos 80, descobriu-se um esquema onde funcionários corruptos criavam plantações fictícias de cacau para desviar fundos internacionais. O escândalo envolveu políticos de alto escalão e resultou no desaparecimento de milhões de dólares destinados ao desenvolvimento agrícola.",
    icon: <Zap className="w-6 h-6" />,
    category: "corruption"
  }
];

export const HiddenStoriesSection = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "revolt":
        return "from-accent to-accent/80";
      case "manipulation":
        return "from-warm to-warm/80";
      case "resistance":
        return "from-secondary to-secondary/80";
      case "corruption":
        return "from-destructive to-destructive/80";
      default:
        return "from-muted to-muted/80";
    }
  };

  const getCategoryText = (category: string) => {
    switch (category) {
      case "revolt":
        return "Revolta";
      case "manipulation":
        return "Manipulação";
      case "resistance":
        return "Resistência";
      case "corruption":
        return "Corrupção";
      default:
        return "História";
    }
  };

  return (
    <section id="historias-ocultas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Histórias Ocultas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Os segredos que não te contaram na escola. Histórias de resistência, 
            manipulação e coragem que foram escondidas ou esquecidas.
          </p>
          <div className="w-24 h-1 bg-gradient-tropical mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {hiddenStories.map((story, index) => (
            <Link key={index} to={`/historia/${story.id}`}>
              <Card 
                className="group hover:shadow-depth transition-all duration-500 transform hover:scale-105 cursor-pointer overflow-hidden h-full"
              >
              <CardContent className="p-0">
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${getCategoryColor(story.category)} p-4 text-white`}>
                  <div className="flex items-center gap-3">
                    {story.icon}
                    <span className="font-semibold text-sm uppercase tracking-wide">
                      {getCategoryText(story.category)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {story.preview}
                  </p>
                  
                  <Button variant="tropical" size="sm" className="w-full mt-4">
                    Ler História Completa
                  </Button>
                </div>
              </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-warm p-8 rounded-xl shadow-depth max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-warm-foreground mb-4">
              Tens uma história oculta para partilhar?
            </h3>
            <p className="text-warm-foreground/90 mb-6">
              Muitas histórias ainda estão por descobrir. Se conheces factos ou 
              relatos que deviam ser partilhados, ajuda-nos a completar a nossa história.
            </p>
            <Button variant="secondary" size="lg">
              Partilhar História
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
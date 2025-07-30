import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Coffee, Music, Palette, Globe, Star } from "lucide-react";

interface Curiosity {
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  category: "geography" | "culture" | "language" | "food" | "nature" | "unique";
}

const curiosities: Curiosity[] = [
  {
    title: "O País Mais Pequeno de África",
    description: "São Tomé e Príncipe é o segundo país mais pequeno de África, mas tem uma biodiversidade impressionante.",
    details: "Com apenas 1.001 km², o país é ligeiramente menor que a cidade de Londres, mas abriga espécies únicas de plantas e animais que não existem em mais nenhum lugar do mundo. A densidade de espécies endémicas por km² é uma das mais altas do planeta.",
    icon: <MapPin className="w-6 h-6" />,
    category: "geography"
  },
  {
    title: "A Língua Forro",
    description: "O crioulo forro é uma mistura única de português com línguas africanas e tem expressões fascinantes.",
    details: "Expressões como 'Leve sa ku bo' (vai com Deus) e 'N ka ten sede' (tenho saudades) mostram a rica mistura cultural. A língua preserva elementos das línguas bantu misturados com português antigo, criando uma forma única de expressão cultural.",
    icon: <Globe className="w-6 h-6" />,
    category: "language"
  },
  {
    title: "O Cacau Mais Fino do Mundo",
    description: "São Tomé produz um dos cacaus mais premium do mundo, com sabor único devido ao solo vulcânico.",
    details: "O cacau são-tomense é considerado 'fine flavor' pelos padrões internacionais. O solo vulcânico rico e o clima tropical húmido criam condições perfeitas para um cacau com notas frutadas e florais distintivas, muito procurado pelos melhores chocolateiros do mundo.",
    icon: <Coffee className="w-6 h-6" />,
    category: "food"
  },
  {
    title: "Danço Congo e Puíta",
    description: "Danças tradicionais que contam histórias através de movimentos e ritmos únicos.",
    details: "O Danço Congo representa a resistência cultural africana, com máscaras coloridas e movimentos que imitam animais. A Puíta é uma dança sensual que celebra a feminilidade. Ambas são Património Cultural Imaterial e continuam vivas nas festas populares.",
    icon: <Music className="w-6 h-6" />,
    category: "culture"
  },
  {
    title: "Arte Tchiloli",
    description: "Uma forma teatral única que mistura tradições europeias e africanas.",
    details: "O Tchiloli é um auto popular baseado na 'Tragédia do Marquês de Mântua', mas reinterpretado com elementos africanos. As representações incluem máscaras, danças e músicas tradicionais, criando uma arte performativa completamente original.",
    icon: <Palette className="w-6 h-6" />,
    category: "culture"
  },
  {
    title: "Pico de São Tomé",
    description: "O ponto mais alto do país oferece uma vista espetacular e biodiversidade única.",
    details: "Com 2.024 metros de altitude, o Pico de São Tomé é um vulcão extinto coberto por floresta nativa. A subida revela diferentes ecosistemas: desde florestas tropicais na base até vegetação de montanha no topo. É habitat de espécies raras como o íbis-de-são-tomé.",
    icon: <Star className="w-6 h-6" />,
    category: "nature"
  }
];

export const CuriositiesSection = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "geography":
        return "bg-primary text-primary-foreground";
      case "culture":
        return "bg-accent text-accent-foreground";
      case "language":
        return "bg-secondary text-secondary-foreground";
      case "food":
        return "bg-warm text-warm-foreground";
      case "nature":
        return "bg-accent text-accent-foreground";
      case "unique":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "geography":
        return "Geografia";
      case "culture":
        return "Cultura";
      case "language":
        return "Língua";
      case "food":
        return "Gastronomia";
      case "nature":
        return "Natureza";
      case "unique":
        return "Único";
      default:
        return "Curiosidade";
    }
  };

  return (
    <section id="curiosidades" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Curiosidades e Cultura
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Detalhes fascinantes sobre a nossa terra que talvez não conhecesses. 
            Desde a nossa biodiversidade única até às tradições mais especiais.
          </p>
          <div className="w-24 h-1 bg-gradient-tropical mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Fun Fact */}
        <div className="bg-gradient-tropical p-6 rounded-xl shadow-tropical mb-12 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Sabias que...?
          </h3>
          <p className="text-foreground text-lg">
            São Tomé e Príncipe foi o primeiro país tropical a abolir a escravatura 
            e tem mais espécies de plantas por km² do que qualquer outro país africano!
          </p>
        </div>

        {/* Curiosities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curiosities.map((curiosity, index) => (
            <Card 
              key={index}
              className="group hover:shadow-depth transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Category Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 ${getCategoryColor(curiosity.category)}`}>
                  {curiosity.icon}
                  {getCategoryLabel(curiosity.category)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {curiosity.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {curiosity.description}
                </p>

                {/* Details (revealed on hover) */}
                <div className="max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  <div className="border-t border-border pt-4">
                    <p className="text-foreground text-sm leading-relaxed mb-4">
                      {curiosity.details}
                    </p>
                    <Button variant="accent" size="sm" className="w-full">
                      Explorar Mais
                    </Button>
                  </div>
                </div>

                {/* Hover Hint */}
                <div className="group-hover:opacity-0 transition-opacity duration-300">
                  <Button variant="outline" size="sm" className="w-full">
                    Passar o rato para descobrir
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Language Examples */}
        <div className="mt-16 bg-gradient-warm p-8 rounded-xl shadow-depth max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-warm-foreground text-center mb-8">
            Aprende Algumas Expressões em Forro
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/20 p-4 rounded-lg">
              <p className="text-warm-foreground font-semibold text-lg mb-1">
                "Leve sa ku bo"
              </p>
              <p className="text-warm-foreground/90">
                Vai com Deus (despedida carinhosa)
              </p>
            </div>
            
            <div className="bg-white/20 p-4 rounded-lg">
              <p className="text-warm-foreground font-semibold text-lg mb-1">
                "Ô minu môsu"
              </p>
              <p className="text-warm-foreground/90">
                Oh meu rapaz/rapariga (carinhoso)
              </p>
            </div>
            
            <div className="bg-white/20 p-4 rounded-lg">
              <p className="text-warm-foreground font-semibold text-lg mb-1">
                "N ka ten sede"
              </p>
              <p className="text-warm-foreground/90">
                Tenho saudades
              </p>
            </div>
            
            <div className="bg-white/20 p-4 rounded-lg">
              <p className="text-warm-foreground font-semibold text-lg mb-1">
                "Ku sa ben"
              </p>
              <p className="text-warm-foreground/90">
                Que sejas bem-vindo
              </p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Button variant="secondary" size="lg">
              Aprender Mais Forro
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
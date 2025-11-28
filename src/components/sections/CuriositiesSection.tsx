import { Button } from "@/components/ui/button";
import { MapPin, Coffee, Music, Palette, Globe, Mountain } from "lucide-react";

interface Curiosity {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  color: string;
}

const curiosities: Curiosity[] = [
  {
    title: "O País Mais Pequeno de África",
    description: "Com apenas 1.001 km², abriga espécies únicas que não existem em mais nenhum lugar do mundo.",
    icon: <MapPin className="w-5 h-5" />,
    category: "Geografia",
    color: "bg-primary text-primary-foreground"
  },
  {
    title: "A Língua Forro",
    description: "Um crioulo único que mistura português antigo com línguas bantu, criando expressões fascinantes.",
    icon: <Globe className="w-5 h-5" />,
    category: "Língua",
    color: "bg-secondary text-secondary-foreground"
  },
  {
    title: "O Cacau Mais Fino do Mundo",
    description: "O solo vulcânico cria um cacau 'fine flavor' muito procurado pelos melhores chocolateiros.",
    icon: <Coffee className="w-5 h-5" />,
    category: "Gastronomia",
    color: "bg-warm text-warm-foreground"
  },
  {
    title: "Danço Congo e Puíta",
    description: "Danças tradicionais que contam histórias através de movimentos e ritmos únicos africanos.",
    icon: <Music className="w-5 h-5" />,
    category: "Cultura",
    color: "bg-accent text-accent-foreground"
  },
  {
    title: "Arte Tchiloli",
    description: "Uma forma teatral única que mistura tradições europeias e africanas com máscaras coloridas.",
    icon: <Palette className="w-5 h-5" />,
    category: "Cultura",
    color: "bg-accent text-accent-foreground"
  },
  {
    title: "Pico de São Tomé",
    description: "Com 2.024 metros, este vulcão extinto é habitat de espécies raras como o íbis-de-são-tomé.",
    icon: <Mountain className="w-5 h-5" />,
    category: "Natureza",
    color: "bg-accent text-accent-foreground"
  }
];

const forroExpressions = [
  { forro: "Leve sa ku bo", meaning: "Vai com Deus (despedida)" },
  { forro: "Ô minu môsu", meaning: "Oh meu rapaz/rapariga" },
  { forro: "N ka ten sede", meaning: "Tenho saudades" },
  { forro: "Ku sa ben", meaning: "Que sejas bem-vindo" }
];

export const CuriositiesSection = () => {
  return (
    <section id="curiosidades" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Descobre Mais
          </p>
          <h2 className="text-foreground mb-6">
            Curiosidades e Cultura
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Detalhes fascinantes sobre a nossa terra que talvez não conhecesses.
          </p>
          <div className="divider mt-8" />
        </div>

        {/* Fun Fact Banner */}
        <div className="bg-gradient-tropical rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto mb-16 shadow-glow">
          <p className="text-primary-foreground text-sm font-medium uppercase tracking-wider mb-2">Sabias que...?</p>
          <p className="text-primary-foreground text-lg md:text-xl font-medium leading-relaxed">
            São Tomé e Príncipe foi o primeiro país tropical a abolir a escravatura 
            e tem mais espécies de plantas por km² do que qualquer outro país africano!
          </p>
        </div>

        {/* Curiosities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {curiosities.map((curiosity, index) => (
            <article 
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-card transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Badge */}
              <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${curiosity.color}`}>
                {curiosity.icon}
                {curiosity.category}
              </span>

              {/* Content */}
              <h3 className="text-foreground group-hover:text-primary transition-colors text-xl font-semibold mb-3">
                {curiosity.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {curiosity.description}
              </p>
            </article>
          ))}
        </div>

        {/* Forro Language Section */}
        <div className="bg-gradient-warm rounded-3xl p-8 md:p-10 max-w-4xl mx-auto">
          <h3 className="text-warm-foreground text-2xl md:text-3xl font-heading font-bold text-center mb-8">
            Aprende Forro
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {forroExpressions.map((expr, index) => (
              <div key={index} className="bg-white/20 rounded-xl p-4">
                <p className="text-warm-foreground font-semibold text-lg mb-1">
                  "{expr.forro}"
                </p>
                <p className="text-warm-foreground/80 text-sm">
                  {expr.meaning}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button className="bg-white text-warm hover:bg-white/90 rounded-full h-12 px-8 font-semibold">
              Aprender Mais Forro
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

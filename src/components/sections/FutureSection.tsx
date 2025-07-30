import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Heart, Lightbulb, Users, Target, Zap } from "lucide-react";
import futureImage from "@/assets/futuro-illustration.jpg";

interface Action {
  title: string;
  description: string;
  category: "education" | "community" | "politics" | "innovation" | "environment" | "culture";
  icon: React.ReactNode;
}

const actions: Action[] = [
  {
    title: "Lidera na Tua Escola",
    description: "Organiza debates sobre história, cria grupos de estudo e partilha conhecimentos com os colegas.",
    category: "education",
    icon: <Lightbulb className="w-5 h-5" />
  },
  {
    title: "Envolve-te na Comunidade",
    description: "Participa em ações comunitárias, ajuda os mais velhos e preserva as tradições locais.",
    category: "community", 
    icon: <Heart className="w-5 h-5" />
  },
  {
    title: "Fiscaliza e Participa",
    description: "Acompanha as decisões políticas, vai às assembleias públicas e exerce os teus direitos cívicos.",
    category: "politics",
    icon: <Target className="w-5 h-5" />
  },
  {
    title: "Inova e Empreende",
    description: "Usa tecnologia para resolver problemas locais, cria soluções sustentáveis e empreende.",
    category: "innovation",
    icon: <Rocket className="w-5 h-5" />
  },
  {
    title: "Protege o Ambiente",
    description: "Preserva a biodiversidade única das ilhas, promove turismo sustentável e energias limpas.",
    category: "environment",
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: "Preserva a Cultura",
    description: "Aprende e ensina forro, documenta histórias orais e mantém vivas as tradições são-tomenses.",
    category: "culture",
    icon: <Users className="w-5 h-5" />
  }
];

export const FutureSection = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "education":
        return "from-primary to-primary/80";
      case "community":
        return "from-accent to-accent/80";
      case "politics":
        return "from-secondary to-secondary/80";
      case "innovation":
        return "from-warm to-warm/80";
      case "environment":
        return "from-accent to-secondary";
      case "culture":
        return "from-primary to-accent";
      default:
        return "from-muted to-muted/80";
    }
  };

  return (
    <section id="futuro" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Futuro Possível
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O futuro de São Tomé e Príncipe está nas tuas mãos. 
            Descobre como podes contribuir para um país mais justo, próspero e sustentável.
          </p>
          <div className="w-24 h-1 bg-gradient-tropical mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Hero Message */}
        <div className="relative mb-16">
          <img 
            src={futureImage} 
            alt="Futuro de São Tomé e Príncipe" 
            className="w-full h-80 md:h-96 object-cover rounded-xl shadow-depth"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl flex items-end">
            <div className="p-8 text-white w-full">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Tu És a Mudança
              </h3>
              <p className="text-xl text-white/90 max-w-2xl">
                A história não pára. Cada geração tem a oportunidade de escrever 
                um novo capítulo. Agora é a tua vez.
              </p>
            </div>
          </div>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {actions.map((action, index) => (
            <Card 
              key={index}
              className="group hover:shadow-tropical transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${getCategoryColor(action.category)} p-6 text-white`}>
                  <div className="flex items-center gap-3">
                    {action.icon}
                    <span className="font-bold text-lg">Ação</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {action.description}
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    Começar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-sunset p-8 md:p-12 rounded-xl shadow-depth text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            A Nossa Visão para 2050
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">100%</div>
              <p className="text-foreground/80">Energias Renováveis</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">Zero</div>
              <p className="text-foreground/80">Pobreza Extrema</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">1º</div>
              <p className="text-foreground/80">País Sustentável de África</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-ocean p-8 md:p-12 rounded-xl shadow-depth max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Junta-te ao Movimento
            </h3>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Não esperes por outros. O país que queremos construir começa com pequenas ações hoje. 
              Cada escolha que fazes, cada palavra que dizes, cada ação que tomas - tudo conta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="secondary" size="lg" className="font-bold">
                Comprometer-me
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Partilhar Visão
              </Button>
            </div>

            {/* Final Quote */}
            <div className="border-t border-white/20 pt-6">
              <p className="text-white/90 italic text-lg">
                "O futuro não é algo que nos acontece. É algo que criamos."
              </p>
              <p className="text-white/70 text-sm mt-2">
                - Geração expositus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
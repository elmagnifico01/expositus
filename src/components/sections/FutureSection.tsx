import { Button } from "@/components/ui/button";
import { Rocket, Heart, Lightbulb, Users, Target, Zap, ArrowRight } from "lucide-react";
import futureImage from "@/assets/futuro-illustration.jpg";

interface Action {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const actions: Action[] = [
  {
    title: "Lidera na Tua Escola",
    description: "Organiza debates sobre história e partilha conhecimentos com os colegas.",
    icon: <Lightbulb className="w-5 h-5" />,
    color: "from-primary to-primary/80"
  },
  {
    title: "Envolve-te na Comunidade",
    description: "Participa em ações comunitárias e preserva as tradições locais.",
    icon: <Heart className="w-5 h-5" />,
    color: "from-accent to-accent/80"
  },
  {
    title: "Fiscaliza e Participa",
    description: "Acompanha as decisões políticas e exerce os teus direitos cívicos.",
    icon: <Target className="w-5 h-5" />,
    color: "from-secondary to-secondary/80"
  },
  {
    title: "Inova e Empreende",
    description: "Usa tecnologia para resolver problemas locais e cria soluções sustentáveis.",
    icon: <Rocket className="w-5 h-5" />,
    color: "from-warm to-warm/80"
  },
  {
    title: "Protege o Ambiente",
    description: "Preserva a biodiversidade única e promove turismo sustentável.",
    icon: <Zap className="w-5 h-5" />,
    color: "from-accent to-secondary"
  },
  {
    title: "Preserva a Cultura",
    description: "Aprende e ensina forro, documenta histórias orais e mantém vivas as tradições.",
    icon: <Users className="w-5 h-5" />,
    color: "from-primary to-accent"
  }
];

export const FutureSection = () => {
  return (
    <section id="futuro" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            O Amanhã Começa Hoje
          </p>
          <h2 className="text-foreground mb-6">
            Futuro Possível
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            O futuro de São Tomé e Príncipe está nas tuas mãos. 
            Descobre como podes contribuir para um país melhor.
          </p>
          <div className="divider mt-8" />
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden max-w-5xl mx-auto mb-16">
          <img 
            src={futureImage} 
            alt="Futuro de São Tomé e Príncipe" 
            className="w-full h-72 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <h3 className="text-white text-3xl md:text-4xl font-heading font-bold mb-3">
              Tu És a Mudança
            </h3>
            <p className="text-white/80 text-lg max-w-xl">
              A história não pára. Cada geração tem a oportunidade de escrever 
              um novo capítulo. Agora é a tua vez.
            </p>
          </div>
        </div>

        {/* Actions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {actions.map((action, index) => (
            <article 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-card transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${action.color} p-5`}>
                <div className="flex items-center gap-3 text-white">
                  {action.icon}
                  <span className="font-semibold">Ação</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-foreground group-hover:text-primary transition-colors text-xl font-semibold mb-3">
                  {action.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {action.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Começar agora</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Vision 2050 */}
        <div className="bg-gradient-sunset rounded-3xl p-8 md:p-12 text-center mb-16 max-w-4xl mx-auto">
          <h3 className="text-foreground text-2xl md:text-3xl font-heading font-bold mb-8">
            A Nossa Visão para 2050
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "100%", label: "Energias Renováveis" },
              { value: "Zero", label: "Pobreza Extrema" },
              { value: "1º", label: "País Sustentável de África" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <p className="text-foreground/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-ocean rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h3 className="text-white text-2xl md:text-3xl font-heading font-bold mb-4">
            Junta-te ao Movimento
          </h3>
          <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
            Não esperes por outros. O país que queremos construir começa com pequenas ações hoje.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="bg-white text-secondary hover:bg-white/90 rounded-full h-12 px-8 font-semibold transition-all duration-300 hover:scale-105">
              Comprometer-me
            </Button>
            <Button variant="ghost" className="text-white border border-white/30 hover:bg-white/10 rounded-full h-12 px-8 font-medium">
              Partilhar Visão
            </Button>
          </div>

          {/* Final Quote */}
          <div className="pt-6 border-t border-white/20">
            <p className="text-white/90 italic text-lg">
              "O futuro não é algo que nos acontece. É algo que criamos."
            </p>
            <p className="text-white/60 text-sm mt-2">
              — Geração expositus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

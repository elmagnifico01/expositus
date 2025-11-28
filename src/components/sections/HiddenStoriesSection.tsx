import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, AlertTriangle, Eye, Zap } from "lucide-react";
import { Link } from "react-router-dom";

interface HiddenStory {
  id: string;
  title: string;
  preview: string;
  icon: React.ReactNode;
  category: "revolt" | "manipulation" | "resistance" | "corruption";
}

const hiddenStories: HiddenStory[] = [
  {
    id: "revolta-silenciosa-1960",
    title: "A Revolta Silenciosa de 1960",
    preview: "Uma rebelião organizada por mulheres que nunca chegou aos livros de história...",
    icon: <Shield className="w-5 h-5" />,
    category: "revolt"
  },
  {
    id: "ouro-que-nunca-existiu",
    title: "O Ouro que Nunca Existiu",
    preview: "Como uma mentira sobre riquezas minerais mudou o destino das ilhas...",
    icon: <AlertTriangle className="w-5 h-5" />,
    category: "manipulation"
  },
  {
    id: "rede-secreta-solidariedade",
    title: "A Rede Secreta de Solidariedade",
    preview: "Um sistema clandestino que salvou centenas de vidas durante a repressão...",
    icon: <Eye className="w-5 h-5" />,
    category: "resistance"
  },
  {
    id: "escandalo-cacau-fantasma",
    title: "O Escândalo do Cacau Fantasma",
    preview: "Milhões roubados através de plantações que só existiam no papel...",
    icon: <Zap className="w-5 h-5" />,
    category: "corruption"
  }
];

const getCategoryInfo = (category: string) => {
  switch (category) {
    case "revolt": return { label: "Revolta", color: "bg-accent text-accent-foreground" };
    case "manipulation": return { label: "Manipulação", color: "bg-warm text-warm-foreground" };
    case "resistance": return { label: "Resistência", color: "bg-secondary text-secondary-foreground" };
    case "corruption": return { label: "Corrupção", color: "bg-destructive text-destructive-foreground" };
    default: return { label: "História", color: "bg-muted text-muted-foreground" };
  }
};

export const HiddenStoriesSection = () => {
  return (
    <section id="historias-ocultas" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            O Que Não Te Contaram
          </p>
          <h2 className="text-foreground mb-6">
            Histórias Ocultas
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Os segredos que não te contaram na escola. Histórias de resistência, 
            manipulação e coragem que foram escondidas ou esquecidas.
          </p>
          <div className="divider mt-8" />
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {hiddenStories.map((story, index) => {
            const categoryInfo = getCategoryInfo(story.category);
            return (
              <Link 
                key={story.id} 
                to={`/historia/${story.id}`}
                className="group block"
              >
                <article className="h-full bg-card rounded-2xl p-6 md:p-8 shadow-card transition-all duration-500 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-primary/10">
                  {/* Category Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${categoryInfo.color}`}>
                      {story.icon}
                      {categoryInfo.label}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-foreground group-hover:text-primary transition-colors mb-3 text-xl md:text-2xl">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {story.preview}
                  </p>
                  
                  {/* Link */}
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Ler história completa</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-warm rounded-3xl p-8 md:p-10 text-center shadow-lg">
            <h3 className="text-warm-foreground text-2xl md:text-3xl font-heading font-bold mb-4">
              Tens uma história para partilhar?
            </h3>
            <p className="text-warm-foreground/90 mb-6 leading-relaxed">
              Muitas histórias ainda estão por descobrir. Ajuda-nos a completar a nossa história.
            </p>
            <Button className="bg-white text-warm hover:bg-white/90 rounded-full px-8 h-12 font-semibold">
              Partilhar História
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

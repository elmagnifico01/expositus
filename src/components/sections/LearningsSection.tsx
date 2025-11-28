import { TrendingDown, AlertCircle, Target, Lightbulb, BookOpen, Users } from "lucide-react";

interface Learning {
  pastIssue: string;
  currentProblem: string;
  lesson: string;
  solution: string;
  icon: React.ReactNode;
}

const learnings: Learning[] = [
  {
    pastIssue: "Exploração Colonial dos Recursos",
    currentProblem: "Dependência Económica Externa",
    lesson: "A história mostra-nos que a dependência de uma única fonte económica torna o país vulnerável.",
    solution: "Diversificar a economia, investir na educação técnica e promover o empreendedorismo local.",
    icon: <TrendingDown className="w-5 h-5" />
  },
  {
    pastIssue: "Falta de Representação Popular",
    currentProblem: "Baixa Participação Cívica",
    lesson: "Quando o povo não participa nas decisões, os resultados raramente beneficiam a maioria.",
    solution: "Criar mais espaços de participação cívica e educar sobre direitos políticos.",
    icon: <AlertCircle className="w-5 h-5" />
  },
  {
    pastIssue: "Corrupção nos Tempos Coloniais",
    currentProblem: "Corrupção nos Dias de Hoje",
    lesson: "A corrupção sempre foi um problema, mas hoje temos mais ferramentas para a combater.",
    solution: "Transparência governamental e sistemas de fiscalização independente.",
    icon: <Target className="w-5 h-5" />
  },
  {
    pastIssue: "Divisões Sociais Impostas",
    currentProblem: "Divisões Políticas e Sociais",
    lesson: "As divisões enfraquecem-nos. A nossa força sempre veio da união e solidariedade.",
    solution: "Promover o diálogo inter-comunitário e focar em objetivos comuns.",
    icon: <Lightbulb className="w-5 h-5" />
  }
];

export const LearningsSection = () => {
  return (
    <section id="aprendizado" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Lições do Passado
          </p>
          <h2 className="text-foreground mb-6">
            O que Aprendemos?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            A história repete-se quando não aprendemos com ela. Vamos comparar 
            os erros do passado com os problemas de hoje.
          </p>
          <div className="divider mt-8" />
        </div>

        {/* Learnings Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {learnings.map((learning, index) => (
            <article 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-card"
            >
              {/* Header */}
              <div className="bg-gradient-warm p-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-warm-foreground">
                  {learning.icon}
                </div>
                <span className="text-warm-foreground font-semibold">Lição Histórica</span>
              </div>

              <div className="p-6">
                {/* Past vs Present */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-destructive/10 rounded-xl p-4">
                    <p className="text-destructive text-xs font-semibold uppercase tracking-wider mb-2">Passado</p>
                    <p className="text-foreground text-sm font-medium">{learning.pastIssue}</p>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-4">
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">Hoje</p>
                    <p className="text-foreground text-sm font-medium">{learning.currentProblem}</p>
                  </div>
                </div>

                {/* Lesson */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-primary" />
                    <span className="text-foreground font-semibold text-sm">A Lição</span>
                  </div>
                  <p className="text-muted-foreground text-sm italic leading-relaxed">
                    {learning.lesson}
                  </p>
                </div>

                {/* Solution */}
                <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">Caminho para a Solução</p>
                  <p className="text-foreground text-sm leading-relaxed">
                    {learning.solution}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-ocean rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-white text-2xl md:text-3xl font-heading font-bold mb-8">
            E Tu? O que Podes Fazer?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: BookOpen, title: "Educa-te", desc: "Conhece a história e os problemas atuais" },
              { icon: Users, title: "Participa", desc: "Envolve-te na comunidade e processos democráticos" },
              { icon: Target, title: "Age", desc: "Põe em prática as lições aprendidas" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <button className="bg-white text-secondary hover:bg-white/90 rounded-full px-8 h-12 font-semibold transition-all duration-300 hover:scale-105">
            Comprometer-me com a Mudança
          </button>
        </div>
      </div>
    </section>
  );
};

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    lesson: "A história mostra-nos que a dependência de uma única fonte económica ou de poderes externos torna o país vulnerável.",
    solution: "Diversificar a economia, investir na educação técnica e promover o empreendedorismo local para reduzir a dependência externa.",
    icon: <TrendingDown className="w-6 h-6" />
  },
  {
    pastIssue: "Falta de Representação Popular",
    currentProblem: "Baixa Participação Cívica",
    lesson: "Quando o povo não participa nas decisões, os resultados raramente beneficiam a maioria.",
    solution: "Criar mais espaços de participação cívica, educar sobre direitos políticos e facilitar o acesso à informação pública.",
    icon: <AlertCircle className="w-6 h-6" />
  },
  {
    pastIssue: "Corrupção nos Tempos Coloniais",
    currentProblem: "Corrupção nos Dias de Hoje",
    lesson: "A corrupção sempre foi um problema, mas hoje temos mais ferramentas para a combater se trabalharmos juntos.",
    solution: "Transparência governamental, educação sobre direitos dos cidadãos e sistemas de fiscalização independente.",
    icon: <Target className="w-6 h-6" />
  },
  {
    pastIssue: "Divisões Sociais Impostas",
    currentProblem: "Divisões Políticas e Sociais",
    lesson: "As divisões enfraquecem-nos. A nossa força sempre veio da união e solidariedade entre comunidades.",
    solution: "Promover o diálogo inter-comunitário, celebrar a diversidade cultural e focar em objetivos comuns.",
    icon: <Lightbulb className="w-6 h-6" />
  }
];

export const LearningsSection = () => {
  return (
    <section id="aprendizado" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que Aprendemos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A história repete-se quando não aprendemos com ela. Vamos comparar 
            os erros do passado com os problemas de hoje para encontrar soluções.
          </p>
          <div className="w-24 h-1 bg-gradient-tropical mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Learnings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {learnings.map((learning, index) => (
            <Card 
              key={index}
              className="hover:shadow-depth transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Header with Icon */}
                <div className="bg-gradient-warm p-6 text-warm-foreground">
                  <div className="flex items-center gap-3 mb-4">
                    {learning.icon}
                    <span className="font-bold text-lg">Lição Histórica</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Past vs Present */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Past Issue */}
                    <div className="p-4 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                      <h4 className="font-semibold text-destructive mb-2">
                        Passado
                      </h4>
                      <p className="text-sm text-foreground">
                        {learning.pastIssue}
                      </p>
                    </div>

                    {/* Current Problem */}
                    <div className="p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
                      <h4 className="font-semibold text-primary mb-2">
                        Hoje
                      </h4>
                      <p className="text-sm text-foreground">
                        {learning.currentProblem}
                      </p>
                    </div>
                  </div>

                  {/* Lesson */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-primary" />
                      A Lição
                    </h4>
                    <p className="text-muted-foreground italic leading-relaxed">
                      {learning.lesson}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <h4 className="font-semibold text-accent mb-3">
                      Caminho para a Solução
                    </h4>
                    <p className="text-foreground text-sm leading-relaxed">
                      {learning.solution}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-ocean p-8 rounded-xl shadow-depth max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              E Tu? O que Podes Fazer?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Educate-te</h4>
                <p className="text-white/90 text-sm">
                  Conhece a história e os problemas atuais
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Participa</h4>
                <p className="text-white/90 text-sm">
                  Envolve-te na comunidade e nos processos democráticos
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Age</h4>
                <p className="text-white/90 text-sm">
                  Põe em prática as lições aprendidas
                </p>
              </div>
            </div>
            <Button variant="secondary" size="lg" className="font-bold">
              Comprometer-me com a Mudança
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
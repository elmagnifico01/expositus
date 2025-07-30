import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Users, BookOpen, Zap } from "lucide-react";
import charactersImage from "@/assets/personagens-illustration.jpg";

interface Character {
  name: string;
  role: string;
  period: string;
  description: string;
  impact: string;
  type: "leader" | "people" | "intellectual" | "activist";
  quote?: string;
}

const characters: Character[] = [
  {
    name: "Manuel Pinto da Costa",
    role: "Primeiro Presidente",
    period: "1975-1991",
    description: "Líder da independência e figura central na formação do estado moderno de São Tomé e Príncipe.",
    impact: "Conduziu o país à independência e estabeleceu as bases do estado são-tomense moderno, apesar dos desafios do período pós-colonial.",
    type: "leader",
    quote: "A independência é apenas o primeiro passo. O verdadeiro desafio é construir uma nação justa e próspera."
  },
  {
    name: "Mãe Antónia (Dona Antónia)",
    role: "Líder Comunitária",
    period: "1940-1980",
    description: "Parteira e curandeira tradicional que se tornou uma figura respeitada de resistência pacífica durante o período colonial.",
    impact: "Preservou tradições médicas africanas e organizou redes de apoio comunitário que salvaram inúmeras vidas.",
    type: "people",
    quote: "A nossa força está na união. Quando cuidamos uns dos outros, ninguém nos pode vencer."
  },
  {
    name: "Francisco Tenreiro",
    role: "Poeta e Geógrafo",
    period: "1921-1963",
    description: "Primeiro poeta são-tomense de renome internacional, pioneiro da literatura de expressão portuguesa em África.",
    impact: "Deu voz poética à experiência são-tomense e influenciou uma geração de escritores africanos.",
    type: "intellectual",
    quote: "Sou africano, sou são-tomense, sou universal. A minha palavra é ponte entre mundos."
  },
  {
    name: "Carlos Graça",
    role: "Ativista Estudantil",
    period: "1960-1975",
    description: "Jovem estudante que organizou protestos pacíficos e redes de conscientização política durante os anos finais do colonialismo.",
    impact: "Mobilizou a juventude são-tomense para a causa da independência através da educação e organização comunitária.",
    type: "activist",
    quote: "Os jovens são o motor da mudança. É nossa responsabilidade construir o futuro que queremos ver."
  },
  {
    name: "Alda Graça do Espírito Santo",
    role: "Poetisa e Ativista",
    period: "1926-2010",
    description: "Poetisa revolucionária e uma das vozes mais importantes da literatura são-tomense, lutadora incansável pelos direitos da mulher.",
    impact: "Através da sua poesia e ativismo, deu visibilidade às questões sociais e de género em São Tomé e Príncipe.",
    type: "intellectual",
    quote: "Escrevo com o sangue do meu povo, com a dor e a esperança de quem não tem voz."
  },
  {
    name: "Tomé Vera Cruz",
    role: "Pescador e Líder Sindical",
    period: "1950-1990",
    description: "Pescador que se tornou líder sindical, organizando os trabalhadores da pesca para melhores condições de trabalho.",
    impact: "Estabeleceu os primeiros sindicatos de pescadores e melhorou significativamente as condições de trabalho no setor pesqueiro.",
    type: "people",
    quote: "O mar nos dá sustento, mas unidos conseguimos muito mais do que peixe."
  }
];

export const CharactersSection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "leader":
        return <Crown className="w-5 h-5" />;
      case "people":
        return <Users className="w-5 h-5" />;
      case "intellectual":
        return <BookOpen className="w-5 h-5" />;
      case "activist":
        return <Zap className="w-5 h-5" />;
      default:
        return <Users className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "leader":
        return "bg-primary text-primary-foreground";
      case "people":
        return "bg-accent text-accent-foreground";
      case "intellectual":
        return "bg-secondary text-secondary-foreground";
      case "activist":
        return "bg-warm text-warm-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "leader":
        return "Líder";
      case "people":
        return "Povo";
      case "intellectual":
        return "Intelectual";
      case "activist":
        return "Ativista";
      default:
        return "Pessoa";
    }
  };

  return (
    <section id="personagens" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Personagens Cruciais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As pessoas que moldaram a nossa história. Desde líderes famosos até 
            heróis anónimos que fizeram a diferença nas suas comunidades.
          </p>
        </div>

        {/* Background Image */}
        <div className="relative mb-12">
          <img 
            src={charactersImage} 
            alt="Personagens históricos de São Tomé e Príncipe" 
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-depth"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Heróis da Nossa Terra
              </h3>
              <p className="text-white/90 text-lg">
                Cada pessoa fez a diferença na sua época
              </p>
            </div>
          </div>
        </div>

        {/* Characters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <Card 
              key={index}
              className="hover:shadow-tropical transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden group"
              onClick={() => setSelectedCharacter(character)}
            >
              <CardContent className="p-6">
                {/* Type Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 ${getTypeColor(character.type)}`}>
                  {getTypeIcon(character.type)}
                  {getTypeLabel(character.type)}
                </div>

                {/* Character Info */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {character.name}
                </h3>
                <p className="text-primary font-semibold mb-1">
                  {character.role}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {character.period}
                </p>
                <p className="text-foreground text-sm leading-relaxed">
                  {character.description}
                </p>

                {/* Quote Preview */}
                {character.quote && (
                  <div className="mt-4 p-3 bg-muted/50 rounded-lg border-l-4 border-primary">
                    <p className="text-sm italic text-muted-foreground">
                      "{character.quote.slice(0, 50)}..."
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Character Details Modal */}
        {selectedCharacter && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in"
               onClick={() => setSelectedCharacter(null)}>
            <Card className="max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slide-up"
                  onClick={(e) => e.stopPropagation()}>
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-3 ${getTypeColor(selectedCharacter.type)}`}>
                      {getTypeIcon(selectedCharacter.type)}
                      {getTypeLabel(selectedCharacter.type)}
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {selectedCharacter.name}
                    </h3>
                    <p className="text-xl text-primary font-semibold">
                      {selectedCharacter.role}
                    </p>
                    <p className="text-muted-foreground">
                      {selectedCharacter.period}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Biografia
                  </h4>
                  <p className="text-foreground leading-relaxed">
                    {selectedCharacter.description}
                  </p>
                </div>

                {/* Impact */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Impacto Histórico
                  </h4>
                  <p className="text-foreground leading-relaxed">
                    {selectedCharacter.impact}
                  </p>
                </div>

                {/* Quote */}
                {selectedCharacter.quote && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Citação Memorável
                    </h4>
                    <div className="p-4 bg-gradient-warm rounded-lg">
                      <p className="text-warm-foreground italic text-lg leading-relaxed">
                        "{selectedCharacter.quote}"
                      </p>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                  <Button 
                    variant="tropical" 
                    onClick={() => setSelectedCharacter(null)}
                    className="flex-1"
                  >
                    Continuar Explorando
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Partilhar História
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};
import { useState } from "react";
import { X, Crown, Users, BookOpen, Zap, Quote } from "lucide-react";
import { useScrollLock } from "@/hooks/useScrollLock";
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
    impact: "Conduziu o país à independência e estabeleceu as bases do estado são-tomense moderno.",
    type: "leader",
    quote: "A independência é apenas o primeiro passo. O verdadeiro desafio é construir uma nação justa e próspera."
  },
  {
    name: "Mãe Antónia",
    role: "Líder Comunitária",
    period: "1940-1980",
    description: "Parteira e curandeira tradicional que se tornou uma figura respeitada de resistência pacífica.",
    impact: "Preservou tradições médicas africanas e organizou redes de apoio comunitário.",
    type: "people",
    quote: "A nossa força está na união. Quando cuidamos uns dos outros, ninguém nos pode vencer."
  },
  {
    name: "Francisco Tenreiro",
    role: "Poeta e Geógrafo",
    period: "1921-1963",
    description: "Primeiro poeta são-tomense de renome internacional, pioneiro da literatura africana.",
    impact: "Deu voz poética à experiência são-tomense e influenciou gerações de escritores.",
    type: "intellectual",
    quote: "Sou africano, sou são-tomense, sou universal."
  },
  {
    name: "Carlos Graça",
    role: "Ativista Estudantil",
    period: "1960-1975",
    description: "Jovem estudante que organizou protestos pacíficos durante os anos finais do colonialismo.",
    impact: "Mobilizou a juventude são-tomense para a causa da independência.",
    type: "activist",
    quote: "Os jovens são o motor da mudança."
  },
  {
    name: "Alda Graça do Espírito Santo",
    role: "Poetisa e Ativista",
    period: "1926-2010",
    description: "Poetisa revolucionária e lutadora incansável pelos direitos da mulher.",
    impact: "Através da sua poesia e ativismo, deu visibilidade às questões sociais e de género.",
    type: "intellectual",
    quote: "Escrevo com o sangue do meu povo, com a dor e a esperança de quem não tem voz."
  },
  {
    name: "Tomé Vera Cruz",
    role: "Pescador e Líder Sindical",
    period: "1950-1990",
    description: "Pescador que se tornou líder sindical, organizando os trabalhadores da pesca.",
    impact: "Estabeleceu os primeiros sindicatos de pescadores e melhorou condições de trabalho.",
    type: "people",
    quote: "O mar nos dá sustento, mas unidos conseguimos muito mais do que peixe."
  }
];

const getTypeInfo = (type: string) => {
  switch (type) {
    case "leader": return { icon: Crown, label: "Líder", color: "bg-primary text-primary-foreground" };
    case "people": return { icon: Users, label: "Povo", color: "bg-accent text-accent-foreground" };
    case "intellectual": return { icon: BookOpen, label: "Intelectual", color: "bg-secondary text-secondary-foreground" };
    case "activist": return { icon: Zap, label: "Ativista", color: "bg-warm text-warm-foreground" };
    default: return { icon: Users, label: "Pessoa", color: "bg-muted text-muted-foreground" };
  }
};

export const CharactersSection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  useScrollLock(!!selectedCharacter);

  return (
    <section id="personagens" className="section-padding bg-background relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Quem Fez a Diferença
          </p>
          <h2 className="text-foreground mb-6">
            Personagens Cruciais
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            As pessoas que moldaram a nossa história. Desde líderes famosos até 
            heróis anónimos que fizeram a diferença.
          </p>
          <div className="divider mt-8" />
        </div>

        {/* Featured Image */}
        <div className="relative mb-16 rounded-3xl overflow-hidden max-w-5xl mx-auto">
          <img 
            src={charactersImage} 
            alt="Personagens históricos" 
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <h3 className="text-white text-2xl md:text-3xl font-heading font-bold mb-2">
              Heróis da Nossa Terra
            </h3>
            <p className="text-white/80 text-lg">
              Cada pessoa fez a diferença na sua época
            </p>
          </div>
        </div>

        {/* Characters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character) => {
            const typeInfo = getTypeInfo(character.type);
            const Icon = typeInfo.icon;
            return (
              <button
                key={character.name}
                onClick={() => setSelectedCharacter(character)}
                className="group text-left bg-card rounded-2xl p-6 shadow-card transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Badge */}
                <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${typeInfo.color}`}>
                  <Icon className="w-3.5 h-3.5" />
                  {typeInfo.label}
                </span>

                {/* Info */}
                <h3 className="text-foreground group-hover:text-primary transition-colors mb-1 text-xl font-semibold">
                  {character.name}
                </h3>
                <p className="text-primary/80 font-medium text-sm mb-1">
                  {character.role}
                </p>
                <p className="text-muted-foreground text-xs mb-4">
                  {character.period}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {character.description}
                </p>

                {/* Quote Preview */}
                {character.quote && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-muted-foreground text-sm italic line-clamp-2">
                      "{character.quote}"
                    </p>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedCharacter && (
        <div 
          className="fixed inset-0 bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={() => setSelectedCharacter(null)}
        >
          <div 
            className="bg-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-border">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {(() => {
                    const typeInfo = getTypeInfo(selectedCharacter.type);
                    const Icon = typeInfo.icon;
                    return (
                      <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-3 ${typeInfo.color}`}>
                        <Icon className="w-3.5 h-3.5" />
                        {typeInfo.label}
                      </span>
                    );
                  })()}
                  <h3 className="text-foreground text-2xl md:text-3xl font-heading font-bold mb-1">
                    {selectedCharacter.name}
                  </h3>
                  <p className="text-primary font-semibold">{selectedCharacter.role}</p>
                  <p className="text-muted-foreground text-sm">{selectedCharacter.period}</p>
                </div>
                <button 
                  onClick={() => setSelectedCharacter(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <h4 className="text-foreground font-semibold mb-2">Biografia</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedCharacter.description}
                </p>
              </div>

              <div>
                <h4 className="text-foreground font-semibold mb-2">Impacto Histórico</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedCharacter.impact}
                </p>
              </div>

              {selectedCharacter.quote && (
                <div className="bg-gradient-warm rounded-2xl p-6">
                  <Quote className="w-8 h-8 text-warm-foreground/50 mb-3" />
                  <p className="text-warm-foreground text-lg italic leading-relaxed">
                    "{selectedCharacter.quote}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

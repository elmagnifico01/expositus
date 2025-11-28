import { useState } from "react";
import { X } from "lucide-react";
import { useScrollLock } from "@/hooks/useScrollLock";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "colonial" | "independence" | "democracy" | "modern";
  details?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1470",
    title: "Descobrimento das Ilhas",
    description: "Navegadores portugueses descobrem as ilhas desabitadas.",
    type: "colonial",
    details: "João de Santarém e Pêro Escobar foram os primeiros europeus a avistar as ilhas, encontrando-as completamente desabitadas mas com rica biodiversidade."
  },
  {
    year: "1493",
    title: "Início da Colonização",
    description: "Chegada dos primeiros colonos e escravos africanos.",
    type: "colonial",
    details: "O sistema de plantation é implementado, baseado no trabalho escravo importado principalmente da costa africana."
  },
  {
    year: "1875",
    title: "Abolição da Escravatura",
    description: "Fim oficial da escravatura, início do trabalho contratado.",
    type: "colonial",
    details: "Apesar da abolição oficial, muitos trabalhadores continuaram em condições semelhantes à escravidão sob o sistema de 'serviçais'."
  },
  {
    year: "1953",
    title: "Massacre de Batepá",
    description: "Revolta popular brutalmente reprimida.",
    type: "independence",
    details: "Centenas de são-tomenses foram mortos numa das mais violentas represálias do período colonial. Este evento marcou profundamente a luta pela independência."
  },
  {
    year: "1975",
    title: "Independência",
    description: "São Tomé e Príncipe torna-se país independente.",
    type: "independence",
    details: "Sob a liderança do MLSTP, o país conquista a independência de Portugal, iniciando uma nova era como nação soberana."
  },
  {
    year: "1990",
    title: "Democratização",
    description: "Transição para o sistema democrático multipartidário.",
    type: "democracy",
    details: "O país abandona o sistema de partido único e abraça a democracia, realizando as primeiras eleições livres e multipartidárias."
  },
  {
    year: "2024",
    title: "Era Digital",
    description: "Nova geração constrói o futuro do país.",
    type: "modern",
    details: "Os jovens são-tomenses usam tecnologia e educação para transformar o país, preservando a cultura enquanto constroem um futuro próspero."
  }
];

export const TimelineSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  useScrollLock(!!selectedEvent);

  const getEventColor = (type: string) => {
    switch (type) {
      case "colonial": return "bg-warm";
      case "independence": return "bg-accent";
      case "democracy": return "bg-secondary";
      case "modern": return "bg-primary";
      default: return "bg-muted";
    }
  };

  return (
    <section id="linha-tempo" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Através dos Tempos
          </p>
          <h2 className="text-foreground mb-6">
            Linha do Tempo
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Uma jornada através dos momentos que definiram a nossa história, 
            desde a chegada dos primeiros navegadores até aos dias de hoje.
          </p>
          <div className="divider mt-8" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-px" />

          {/* Events */}
          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 mt-2">
                  <div className={`w-full h-full rounded-full ${getEventColor(event.type)} ring-4 ring-background`} />
                </div>

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="group text-left md:text-inherit w-full"
                  >
                    <div className="bg-card rounded-2xl p-6 shadow-card transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 ${getEventColor(event.type)}`}>
                        {event.year}
                      </span>
                      <h3 className="text-foreground group-hover:text-primary transition-colors mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </button>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="bg-card rounded-3xl max-w-lg w-full shadow-xl animate-scale-in overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`${getEventColor(selectedEvent.type)} p-6`}>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-white/80 text-sm font-medium">{selectedEvent.year}</span>
                  <h3 className="text-white text-2xl font-heading font-bold mt-1">
                    {selectedEvent.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="text-white/80 hover:text-white transition-colors p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <p className="text-muted-foreground mb-4">
                {selectedEvent.description}
              </p>
              {selectedEvent.details && (
                <p className="text-foreground leading-relaxed">
                  {selectedEvent.details}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

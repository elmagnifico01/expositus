import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import timelineImage from "@/assets/timeline-illustration.jpg";

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
    description: "Revolta popular brutalmente reprimida pelas autoridades coloniais.",
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

  const getEventColor = (type: string) => {
    switch (type) {
      case "colonial":
        return "bg-warm text-warm-foreground";
      case "independence":
        return "bg-accent text-accent-foreground";
      case "democracy":
        return "bg-secondary text-secondary-foreground";
      case "modern":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="linha-tempo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Linha do Tempo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma jornada através dos momentos que definiram a nossa história, 
            desde a chegada dos primeiros navegadores até aos dias de hoje.
          </p>
        </div>

        {/* Background Image */}
        <div className="relative mb-12">
          <img 
            src={timelineImage} 
            alt="Ilustração da história de São Tomé e Príncipe" 
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-depth"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent rounded-xl"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-tropical md:transform md:-translate-x-1/2"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-warm md:transform md:-translate-x-1/2 z-10 animate-glow"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                  <Card className="hover:shadow-tropical transition-all duration-300 transform hover:scale-105 cursor-pointer"
                        onClick={() => setSelectedEvent(event)}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getEventColor(event.type)}`}>
                          {event.year}
                        </span>
                        <Calendar className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Details Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in"
               onClick={() => setSelectedEvent(null)}>
            <Card className="max-w-2xl w-full animate-scale-in"
                  onClick={(e) => e.stopPropagation()}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-4 py-2 rounded-full text-lg font-bold ${getEventColor(selectedEvent.type)}`}>
                    {selectedEvent.year}
                  </span>
                  <div className="flex items-center gap-2 text-primary">
                    <MapPin className="w-5 h-5" />
                    <Users className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {selectedEvent.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {selectedEvent.description}
                </p>
                {selectedEvent.details && (
                  <p className="text-foreground leading-relaxed mb-6">
                    {selectedEvent.details}
                  </p>
                )}
                <Button 
                  variant="tropical" 
                  onClick={() => setSelectedEvent(null)}
                  className="w-full"
                >
                  Continuar Explorando
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};
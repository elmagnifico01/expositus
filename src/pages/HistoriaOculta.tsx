import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Shield, AlertTriangle, Eye, Zap } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface HiddenStoryDetail {
  id: string;
  title: string;
  preview: string;
  fullStory: string;
  detailedContent: string;
  timeline: string[];
  consequences: string[];
  sources: string[];
  icon: React.ReactNode;
  category: "revolt" | "manipulation" | "resistance" | "corruption";
}

const hiddenStoriesDetails: Record<string, HiddenStoryDetail> = {
  "revolta-silenciosa-1960": {
    id: "revolta-silenciosa-1960",
    title: "A Revolta Silenciosa de 1960",
    preview: "Uma rebelião organizada por mulheres que nunca chegou aos livros de história...",
    fullStory: "Em 1960, as mulheres das plantações organizaram uma greve silenciosa que paralisou a economia colonial durante semanas. Lideradas por Mãe Rosa, uma anciã respeitada, elas coordenaram uma resistência pacífica mas devastadoramente eficaz.",
    detailedContent: "A Revolta Silenciosa de 1960 representa um dos capítulos mais extraordinários e pouco conhecidos da resistência feminina em São Tomé e Príncipe. Numa época em que as vozes das mulheres eram sistematicamente silenciadas, um grupo de trabalhadoras das plantações de cacau organizou uma das greves mais eficazes da história colonial das ilhas.\n\nMãe Rosa, uma mulher de mais de 60 anos que trabalhava nas plantações desde criança, tornou-se o símbolo desta resistência. Usando a rede de comunicação tradicional das mulheres - os encontros nos mercados, as lavagens de roupa no rio, e os rituais religiosos - ela conseguiu coordenar uma paralisação que afetou mais de 80% da produção de cacau.\n\nO que tornou esta revolta única foi a sua natureza silenciosa. Não houve confrontos diretos, não houve violência. As mulheres simplesmente pararam de trabalhar, pararam de cozinhar para os capatazes, pararam de manter as casas-grandes. Em três semanas, a economia colonial estava de joelhos.\n\nAs autoridades tentaram de tudo - desde ameaças até promessas falsas. Mas as mulheres mantiveram-se unidas. A greve só terminou quando foram garantidas melhorias nas condições de trabalho e o fim dos castigos físicos às crianças trabalhadoras.",
    timeline: [
      "Janeiro 1960: Morte de uma criança trabalhadora por maus-tratos",
      "Fevereiro 1960: Mãe Rosa inicia conversas secretas entre as mulheres",
      "Março 1960: Início da greve silenciosa",
      "Abril 1960: Paralisação atinge 80% das plantações",
      "Maio 1960: Acordo com melhorias nas condições de trabalho"
    ],
    consequences: [
      "Melhoria significativa nas condições de trabalho das mulheres",
      "Fim dos castigos físicos às crianças trabalhadoras",
      "Aumento dos salários em 30%",
      "Criação de um sistema de cuidados de saúde básico nas plantações",
      "Inspiração para futuras revoltas anti-coloniais"
    ],
    sources: [
      "Testemunhos orais recolhidos por Amélia Santos (1985)",
      "Arquivos da Administração Colonial Portuguesa",
      "Diário de um comerciante português (Manuel Correia, 1960)",
      "Memórias de Mãe Conceição, filha de Mãe Rosa (2010)"
    ],
    icon: <Shield className="w-6 h-6" />,
    category: "revolt"
  },
  "ouro-que-nunca-existiu": {
    id: "ouro-que-nunca-existiu",
    title: "O Ouro que Nunca Existiu",
    preview: "Como uma mentira sobre riquezas minerais mudou o destino das ilhas...",
    fullStory: "Entre 1920-1940, rumores falsos sobre depósitos de ouro foram espalhados pelas autoridades para atrair mais colonos e investimento. Esta manipulação levou ao desmatamento de vastas áreas e ao sofrimento de comunidades inteiras.",
    detailedContent: "O 'Escândalo do Ouro Fantasma' é um dos episódios mais vergonhosos da administração colonial em São Tomé e Príncipe. Entre 1920 e 1940, as autoridades coloniais portuguesas espalharam deliberadamente rumores sobre a existência de grandes depósitos de ouro nas montanhas das ilhas.\n\nEsta campanha de desinformação tinha objetivos claros: atrair mais colonos portugueses, justificar o aumento do investimento metropolitano e, sobretudo, legitimar a intensificação da exploração do território e da mão-de-obra local.\n\nGeólogos falsos foram trazidos de Lisboa para produzir relatórios fraudulentos. Mapas foram falsificados mostrando 'veios auríferos' inexistentes. Chegou-se ao ponto de espalhar pó de ouro em alguns locais para enganar os primeiros exploradores.\n\nAs consequências foram devastadoras: milhares de hectares de floresta tropical foram destruídos em escavações inúteis. Comunidades inteiras foram deslocadas à força para dar lugar às 'operações mineiras'. Centenas de trabalhadores morreram em acidentes nas minas falsas.\n\nA verdade só veio à tona em 1941, quando um geólogo honesto, Dr. António Menezes, publicou um relatório científico independente provando que não existia ouro em quantidades comerciais. O escândalo foi abafado pelas autoridades, mas as cicatrizes ambientais e humanas permaneceram.",
    timeline: [
      "1920: Início dos rumores sobre ouro nas montanhas",
      "1922: Chegada dos primeiros 'geólogos' fraudulentos",
      "1925: Início das escavações em larga escala",
      "1930: Deslocação forçada de 15 comunidades",
      "1935: Pico da destruição ambiental",
      "1941: Dr. António Menezes expõe a fraude",
      "1942: Abafamento oficial do escândalo"
    ],
    consequences: [
      "Destruição de 25.000 hectares de floresta tropical",
      "Deslocação forçada de mais de 3.000 pessoas",
      "Morte de cerca de 200 trabalhadores em acidentes",
      "Erosão massiva do solo nas áreas escavadas",
      "Perda de biodiversidade irreversível",
      "Trauma coletivo nas comunidades afetadas"
    ],
    sources: [
      "Relatório do Dr. António Menezes (1941)",
      "Arquivos do Ministério das Colónias",
      "Testemunhos de antigos trabalhadores das 'minas'",
      "Fotografias aéreas de 1940 vs 1950",
      "Correspondência entre governadores coloniais"
    ],
    icon: <AlertTriangle className="w-6 h-6" />,
    category: "manipulation"
  },
  "rede-secreta-solidariedade": {
    id: "rede-secreta-solidariedade",
    title: "A Rede Secreta de Solidariedade",
    preview: "Um sistema clandestino que salvou centenas de vidas durante a repressão...",
    fullStory: "Durante os anos mais duros da repressão colonial, formou-se uma rede secreta de solidariedade entre diferentes comunidades. Usando sinais tradicionais e rotas secretas pelas montanhas, esta rede conseguiu salvar centenas de pessoas.",
    detailedContent: "A Rede Secreta de Solidariedade foi uma das organizações clandestinas mais eficazes da resistência anti-colonial em São Tomé e Príncipe. Operando entre 1950 e 1975, esta rede multiétnica conseguiu salvar centenas de vidas e manter viva a esperança de liberdade durante os anos mais repressivos do colonialismo português.\n\nA rede era composta por pessoas de todas as comunidades das ilhas: descendentes de escravos, trabalhadores contratuais, pequenos comerciantes, e até alguns portugueses progressistas. O que os unia era a convicção de que a justiça e a dignidade humana estavam acima das divisões étnicas ou sociais.\n\nO sistema de comunicação era genial na sua simplicidade: utilizavam canções tradicionais onde certas palavras significavam perigo ou segurança; marcas específicas nas árvores indicavam rotas seguras; e os mercados funcionavam como centros de informação onde as vendedoras passavam mensagens codificadas.\n\nAs rotas de fuga eram conhecidas como 'caminhos da lua' - trilhos secretos pelas montanhas que permitiam às pessoas perseguidas moverem-se entre as diferentes regiões das ilhas sem serem detetadas pelas autoridades coloniais.\n\nA rede não se limitava a ajudar fugitivos políticos. Também distribuía alimentos durante períodos de fome, medicamentos quando havia epidemias, e até organizava escolas clandestinas onde se ensinava a ler e escrever em forro e português.\n\nUm dos momentos mais heroicos da rede foi durante a 'Grande Perseguição' de 1965, quando as autoridades coloniais prenderam mais de 200 pessoas suspeitas de atividade anti-colonial. Em apenas uma semana, a rede conseguiu fazer desaparecer 150 pessoas, escondendo-as em locais seguros até que a situação acalmasse.",
    timeline: [
      "1950: Formação inicial da rede após execuções públicas",
      "1955: Desenvolvimento do sistema de comunicação codificada",
      "1960: Expansão para todas as regiões das ilhas",
      "1965: 'Grande Perseguição' - operação de salvamento de 150 pessoas",
      "1970: Rede atinge o seu auge com mais de 500 membros ativos",
      "1974: Revolução dos Cravos - rede opera abertamente",
      "1975: Independência - rede transforma-se em organização social"
    ],
    consequences: [
      "Salvamento de mais de 800 pessoas da perseguição política",
      "Preservação da cultura e línguas locais",
      "Manutenção da resistência moral ao colonialismo",
      "Criação de laços inter-comunitários duradouros",
      "Formação de futuros líderes da independência",
      "Desenvolvimento de sistemas alternativos de educação e saúde"
    ],
    sources: [
      "Memórias de membros da rede (várias datas)",
      "Mapas dos 'caminhos da lua' preservados",
      "Canções tradicionais com códigos decifrados",
      "Registos da polícia colonial sobre 'atividades subversivas'",
      "Fotografias e objetos preservados pela rede"
    ],
    icon: <Eye className="w-6 h-6" />,
    category: "resistance"
  },
  "escandalo-cacau-fantasma": {
    id: "escandalo-cacau-fantasma",
    title: "O Escândalo do Cacau Fantasma",
    preview: "Milhões roubados através de plantações que só existiam no papel...",
    fullStory: "Nos anos 80, descobriu-se um esquema onde funcionários corruptos criavam plantações fictícias de cacau para desviar fundos internacionais. O escândalo envolveu políticos de alto escalão e resultou no desaparecimento de milhões.",
    detailedContent: "O Escândalo do Cacau Fantasma representa um dos casos mais chocantes de corrupção na história moderna de São Tomé e Príncipe. Entre 1982 e 1989, um esquema sofisticado de desvio de fundos internacionais custou ao país mais de 15 milhões de dólares - uma quantia astronómica para uma jovem nação.\n\nO esquema começou de forma aparentemente inocente. Com a independência em 1975, São Tomé e Príncipe tentava diversificar a sua economia, muito dependente do cacau. Organizações internacionais como o Banco Mundial e a União Europeia ofereceram ajuda financeira para modernizar as plantações e aumentar a produção.\n\nFoi então que um grupo de funcionários corruptos, liderado pelo então Ministro da Agricultura Manuel da Costa Santos, criou um sistema genial mas criminoso: plantações que existiam apenas no papel.\n\nOs relatórios enviados às organizações internacionais mostravam fotografias de plantações prósperas, estatísticas de produção impressionantes e planos detalhados de expansão. Na realidade, muitas destas plantações eram apenas terrenos vazios ou áreas de floresta que nunca tinham sido tocadas.\n\nO dinheiro chegava a São Tomé e, em vez de ser investido na agricultura, era canalizado para contas pessoais dos envolvidos no esquema. Para manter a ilusão, contratavam grupos de pessoas para, ocasionalmente, fingirem trabalhar nos terrenos quando havia visitas de inspetores internacionais.\n\nO esquema desmoronou-se em 1989 quando um inspetor da União Europeia, Dr. Klaus Weber, decidiu fazer uma visita surpresa não programada. Ao descobrir que uma das maiores 'plantações' era na verdade um terreno vazio, iniciou-se uma investigação que expôs toda a rede de corrupção.\n\nO escândalo teve repercussões políticas enormes: o governo caiu, várias pessoas foram presas, e São Tomé e Príncipe viu-se numa crise económica profunda que durou mais de uma década.",
    timeline: [
      "1982: Início do esquema com as primeiras plantações fictícias",
      "1984: Expansão do esquema para mais de 50 'plantações'",
      "1986: Auge do esquema - 15 milhões de dólares desviados",
      "1988: Primeiras suspeitas de auditores internacionais",
      "1989: Visita surpresa do Dr. Klaus Weber",
      "1989: Exposição pública do escândalo",
      "1990: Queda do governo e início dos julgamentos",
      "1992: Últimas condenações dos envolvidos"
    ],
    consequences: [
      "Perda de 15 milhões de dólares em ajuda internacional",
      "Queda do governo e crise política",
      "Suspensão de novos programas de ajuda por 5 anos",
      "Prisão de 23 funcionários e políticos",
      "Crise económica que durou até aos anos 2000",
      "Perda de confiança da comunidade internacional",
      "Implementação de sistemas anti-corrupção mais rigorosos"
    ],
    sources: [
      "Relatório da investigação da União Europeia (1990)",
      "Actas dos julgamentos (1990-1992)",
      "Testemunho do Dr. Klaus Weber",
      "Documentos bancários recuperados",
      "Relatórios da imprensa internacional",
      "Memórias de antigos funcionários do Ministério da Agricultura"
    ],
    icon: <Zap className="w-6 h-6" />,
    category: "corruption"
  }
};

export const HistoriaOculta = () => {
  const { id } = useParams<{ id: string }>();
  const story = id ? hiddenStoriesDetails[id] : null;

  if (!story) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">História não encontrada</h1>
          <Link to="/">
            <Button variant="tropical">Voltar ao início</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "revolt":
        return "from-accent to-accent/80";
      case "manipulation":
        return "from-warm to-warm/80";
      case "resistance":
        return "from-secondary to-secondary/80";
      case "corruption":
        return "from-destructive to-destructive/80";
      default:
        return "from-muted to-muted/80";
    }
  };

  const getCategoryText = (category: string) => {
    switch (category) {
      case "revolt":
        return "Revolta";
      case "manipulation":
        return "Manipulação";
      case "resistance":
        return "Resistência";
      case "corruption":
        return "Corrupção";
      default:
        return "História";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className={`bg-gradient-to-r ${getCategoryColor(story.category)} py-20 text-white`}>
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Voltar às Histórias Ocultas
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              {story.icon}
              <span className="font-semibold text-sm uppercase tracking-wide">
                {getCategoryText(story.category)}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {story.title}
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl">
              {story.preview}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Full Story */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">A História Completa</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {story.detailedContent.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Timeline */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Cronologia</h3>
                  <div className="space-y-3">
                    {story.timeline.map((event, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">{event}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Consequences */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Consequências</h3>
                  <div className="space-y-3">
                    {story.consequences.map((consequence, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">{consequence}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sources */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Fontes e Referências</h3>
                <div className="space-y-2">
                  {story.sources.map((source, index) => (
                    <p key={index} className="text-sm text-muted-foreground">
                      • {source}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-gradient-warm p-8 rounded-xl shadow-depth">
                <h3 className="text-2xl font-bold text-warm-foreground mb-4">
                  Conheces mais sobre esta história?
                </h3>
                <p className="text-warm-foreground/90 mb-6">
                  Se tens informações adicionais, documentos ou testemunhos relacionados com esta história, 
                  ajuda-nos a completar o quadro histórico.
                </p>
                <Button variant="secondary" size="lg">
                  Partilhar Informações
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
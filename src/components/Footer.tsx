import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-tropical rounded-full animate-glow"></div>
              <span className="text-2xl font-bold">expositus</span>
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              Contando a verdadeira história de São Tomé e Príncipe para a nova geração. 
              Preservando o passado, inspirando o futuro.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explorar</h4>
            <ul className="space-y-3">
              <li>
                <a href="#linha-tempo" className="text-background/80 hover:text-background transition-colors">
                  Linha do Tempo
                </a>
              </li>
              <li>
                <a href="#historias-ocultas" className="text-background/80 hover:text-background transition-colors">
                  Histórias Ocultas
                </a>
              </li>
              <li>
                <a href="#personagens" className="text-background/80 hover:text-background transition-colors">
                  Personagens Cruciais
                </a>
              </li>
              <li>
                <a href="#testemunhos" className="text-background/80 hover:text-background transition-colors">
                  Testemunhos
                </a>
              </li>
              <li>
                <a href="#curiosidades" className="text-background/80 hover:text-background transition-colors">
                  Curiosidades
                </a>
              </li>
              <li>
                <a href="#futuro" className="text-background/80 hover:text-background transition-colors">
                  Futuro Possível
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Contribute */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contribuir</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-background/60" />
                <span className="text-background/80 text-sm">info@expositus.st</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-background/60" />
                <span className="text-background/80 text-sm">+239 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-background/60" />
                <span className="text-background/80 text-sm">São Tomé, STP</span>
              </div>
            </div>
            <Button variant="secondary" size="sm" className="w-full">
              Partilhar História
            </Button>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="bg-gradient-warm p-6 rounded-lg">
            <h4 className="text-warm-foreground font-bold text-lg mb-3">
              A Nossa Missão
            </h4>
            <p className="text-warm-foreground/90 leading-relaxed">
              Democratizar o acesso à história são-tomense, especialmente para os jovens, 
              através de narrativas envolventes e tecnologia acessível. Queremos que cada 
              são-tomense conheça e se orgulhe da sua história.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-background/60 text-sm mb-4 md:mb-0">
            © 2024 expositus. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2 text-background/80">
            <span className="text-sm">Feito com</span>
            <Heart className="w-4 h-4 text-red-500 animate-glow" />
            <span className="text-sm">para São Tomé e Príncipe</span>
          </div>
        </div>

        {/* Languages */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-4 text-background/60 text-sm">
            <span>Português</span>
            <span>•</span>
            <span>Forro</span>
            <span>•</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
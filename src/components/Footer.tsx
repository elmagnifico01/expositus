import { Heart, Mail, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  explore: [
    { label: "Linha do Tempo", href: "#linha-tempo" },
    { label: "Histórias Ocultas", href: "#historias-ocultas" },
    { label: "Personagens", href: "#personagens" },
    { label: "Testemunhos", href: "#testemunhos" },
    { label: "Curiosidades", href: "#curiosidades" },
    { label: "Futuro Possível", href: "#futuro" }
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "YouTube", href: "#" }
  ]
};

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-tropical flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">e</span>
              </div>
              <span className="text-2xl font-heading font-semibold text-background">
                expositus
              </span>
            </div>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm">
              Contando a verdadeira história de São Tomé e Príncipe para a nova geração. 
              Preservando o passado, inspirando o futuro.
            </p>
            <div className="space-y-2 text-background/60 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@expositus.st</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>São Tomé, STP</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="text-background font-semibold mb-4">Explorar</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h4 className="text-background font-semibold mb-4">Social</h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission */}
          <div className="md:col-span-2">
            <h4 className="text-background font-semibold mb-4">Línguas</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li>Português</li>
              <li>Forro</li>
              <li>English</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © 2024 expositus. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-1.5 text-background/70 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-destructive fill-destructive" />
              <span>para São Tomé e Príncipe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useScrollLock } from "@/hooks/useScrollLock";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Lock scroll when mobile menu is open
  useScrollLock(isOpen);

  const navItems = [
    { id: "inicio", label: "Início" },
    { id: "linha-tempo", label: "Linha do Tempo" },
    { id: "historias-ocultas", label: "Histórias Ocultas" },
    { id: "personagens", label: "Personagens" },
    { id: "aprendizado", label: "O que Aprendemos?" },
    { id: "testemunhos", label: "Testemunhos" },
    { id: "curiosidades", label: "Curiosidades" },
    { id: "futuro", label: "Futuro Possível" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-warm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-tropical rounded-full animate-glow"></div>
            <span className="text-xl font-bold text-foreground">expositus</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary hover:bg-primary/10"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="w-full justify-start text-foreground hover:text-primary hover:bg-primary/10"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
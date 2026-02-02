import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Funcionalidades", href: "#features" },
    { label: "Benefícios", href: "#benefits" },
    { label: "Preços", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  // Função para abrir o sistema de login
  const handleLoginClick = () => {
    window.open("https://apolicesystem.onrender.com/index.html", "_blank");
  };

  // Função para abrir o WhatsApp
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5581999207087", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg text-foreground">
              Apólice System
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Botão Entrar Atualizado */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLoginClick}
            >
              Entrar
            </Button>
            
            {/* Botão Começar Grátis (WhatsApp) */}
            <Button onClick={handleWhatsAppClick}>
              Começar Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                {/* Botão Entrar Mobile Atualizado */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleLoginClick}
                >
                  Entrar
                </Button>
                
                {/* Botão Começar Grátis Mobile (WhatsApp) */}
                <Button onClick={handleWhatsAppClick}>
                  Começar Grátis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Funcionalidades", href: "#features" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Preços", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // --- FUNÇÕES DE REDIRECIONAMENTO ---
  
  // Função para abrir o WhatsApp
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5581999207087?text=Olá! Gostaria de começar gratuitamente no Apólice System.",
      "_blank"
    );
  };

  // Função para o Login Externo
  const handleLoginClick = () => {
    window.location.href = "https://apolicesystem.onrender.com/index.html";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Logo com Destaque Visual Mantido */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="w-10 h-10 rounded-xl bg-[#00A86B] flex items-center justify-center shadow-sm">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-xl text-gray-900">
            Apólice System
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-sm font-medium text-gray-600 hover:text-[#00A86B] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botões de Ação (Atualizados) */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="text-gray-900 hover:text-[#00A86B]"
            onClick={handleLoginClick} // Redireciona para o Render
          >
            Entrar
          </Button>
          <Button 
            className="bg-[#00A86B] hover:bg-[#008f5d] text-white font-medium px-6"
            onClick={handleWhatsAppClick} // Abre o WhatsApp
          >
            Começar Grátis
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-4 md:hidden shadow-lg flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-gray-600 font-medium py-2 hover:text-[#00A86B]"
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-2 border-t pt-4">
            <Button variant="ghost" onClick={handleLoginClick}>Entrar</Button>
            <Button className="bg-[#00A86B] text-white" onClick={handleWhatsAppClick}>Começar Grátis</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
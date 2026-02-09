import { useState } from "react"; // Importar useState
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, X } from "lucide-react"; // Importar X
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  // Estado para controlar a visibilidade do vídeo
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const features = [
    "Dashboard intuitivo",
    "Gestão de apólices",
    "Relatórios gerenciais",
  ];

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5581999207087?text=Olá! Gostaria de saber mais sobre o Apólice System.",
      "_blank"
    );
  };

  // ID do vídeo extraído do link que você enviou
  const videoId = "27db2lvM4iY"; 

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Sistema SaaS para Corretores de Seguros
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Gerencie suas{" "}
            <span className="text-primary">apólices de seguro</span> com
            eficiência
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Centralize a gestão de apólices, propostas e clientes em uma única
            plataforma. Automatize processos e tome decisões estratégicas com
            relatórios inteligentes.
          </p>

          {/* Feature List */}
          <div className="flex flex-wrap gap-4 mb-8">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-foreground"
              >
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="xl" 
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto min-w-[200px]"
            >
              Começar Gratuitamente
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="heroOutline" 
              size="xl" 
              className="w-full sm:w-auto min-w-[200px]"
              onClick={() => setIsVideoOpen(true)} // Abre o Modal
            >
              <Play className="mr-2 w-5 h-5" />
              Ver Demonstração
            </Button>
          </div>
        </div>
      </div>

      {/* --- MODAL DE VÍDEO --- */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          
          {/* Fundo clicável para fechar */}
          <div 
            className="absolute inset-0" 
            onClick={() => setIsVideoOpen(false)}
          ></div>

          {/* Botão Fechar (X) Flutuante */}
          <button 
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-[110]"
          >
            <X className="w-10 h-10" />
          </button>

          {/* Container do Vídeo (Aspect Ratio 16:9) */}
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-300">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="Demonstração Apólice System"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
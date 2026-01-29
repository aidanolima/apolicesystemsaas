import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
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

          {/* CTA Buttons - AJUSTADOS AQUI */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="xl" // Garante altura igual ao outro botão
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto min-w-[200px]" // Garante largura mínima igual
            >
              Começar Gratuitamente
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="heroOutline" 
              size="xl" 
              className="w-full sm:w-auto min-w-[200px]" // Garante largura mínima igual
            >
              <Play className="mr-2 w-5 h-5" />
              Ver Demonstração
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
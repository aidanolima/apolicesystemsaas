import React, { useState } from "react"; // Adicionado useState
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, X } from "lucide-react"; // Adicionado X para fechar o modal

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para o modal

  const whatsappLink = "https://wa.me/5581999207087?text=Olá! Gostaria de saber mais sobre o Apólice System.";
  
  // Link da sua agenda do Google
  const googleCalendarUrl = "https://calendar.app.google/nYGRTAwM3WYL7n2T8";

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="py-20 bg-primary relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para transformar sua gestão de seguros?
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Junte-se a mais de 500 corretores que já estão economizando tempo e
            aumentando sua produtividade com o Apólice System.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-[1.02]"
              onClick={handleWhatsAppClick}
            >
              Começar Gratuitamente
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              variant="heroOutline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => setIsModalOpen(true)} // Abre o Modal do Google
            >
              Agendar Demonstração
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="text-sm text-primary-foreground/60 mt-8">
            ✓ 07 dias grátis &nbsp;&nbsp; ✓ Sem cartão de crédito &nbsp;&nbsp; ✓
            Cancele quando quiser
          </p>
        </div>
      </div>

      {/* MODAL DO GOOGLE CALENDAR */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden relative shadow-2xl animate-in fade-in zoom-in duration-300">
            
            {/* Header do Modal */}
            <div className="flex justify-between items-center p-4 border-b bg-gray-50">
              <span className="font-semibold text-gray-700">Agendar Demonstração</span>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Iframe do Calendário */}
            <iframe 
              src={googleCalendarUrl}
              className="w-full h-full border-0"
              title="Agendamento Apólice System"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTA;
import React, { useState, useEffect } from 'react';
import { X } from "lucide-react"; // Usando lucide para manter o padrão do seu projeto

const DemoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const googleCalendarUrl = "https://calendar.app.google/nYGRTAwM3WYL7n2T8";

  // Bloqueia o scroll do fundo quando o modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      {/* Botão de Disparo */}
      <button 
        onClick={() => setIsOpen(true)}
        className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all font-medium"
      >
        Agendar Demonstração
      </button>

      {/* Estrutura do Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
          
          {/* Botão de Fechar Externo (Garante que o usuário nunca fique travado) */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-[110] border border-white/20"
            title="Fechar Agendamento"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="bg-white w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden relative shadow-2xl animate-in zoom-in duration-300">
            
            {/* Header Interno (Opcional, mas ajuda no contexto) */}
            <div className="flex justify-between items-center p-4 border-b bg-gray-50 md:hidden">
               <span className="font-semibold text-gray-700">Agendar Demo</span>
               <button onClick={() => setIsOpen(false)} className="text-gray-500 text-2xl">&times;</button>
            </div>

            {/* Iframe do Google Calendar */}
            <iframe 
              src={googleCalendarUrl}
              className="w-full h-full border-0"
              title="Agendamento Google"
              allow="payment" // Necessário para alguns fluxos do Google
            ></iframe>
          </div>

          {/* Clique no fundo também fecha o modal para melhor UX */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
};

export default DemoModal;
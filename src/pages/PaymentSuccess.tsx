import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Home } from "lucide-react";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  // Efeito de entrada suave dos textos
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-2xl overflow-hidden text-center relative p-8 md:p-12 animate-in fade-in zoom-in duration-500">
        
        {/* --- ANIMAÇÃO DO CHECK --- */}
        <div className="flex justify-center mb-8">
          <div className="relative w-24 h-24">
            {/* Círculo de Fundo Pulsante */}
            <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
            <div className="relative bg-[#00A86B] w-24 h-24 rounded-full flex items-center justify-center shadow-lg shadow-green-200">
              <svg 
                className="w-12 h-12 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="3"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M5 13l4 4L19 7" 
                  className="animate-draw-check" // Classe personalizada definida abaixo
                />
              </svg>
            </div>
          </div>
        </div>

        {/* --- CONTEÚDO DE TEXTO --- */}
        <div className={`transition-all duration-700 ease-out transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Pagamento Confirmado!
          </h1>
          <p className="text-[#00A86B] font-semibold text-lg mb-6">
            Seja bem-vindo ao Apólice System
          </p>

          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-8 text-left">
            <p className="text-gray-600 text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Transação finalizada com sucesso.
            </p>
            <p className="text-gray-600 text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              E-mail de confirmação enviado.
            </p>
            <p className="text-gray-600 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Acesso liberado imediatamente.
            </p>
          </div>

          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Tudo pronto! Você já pode acessar seu painel e começar a transformar a gestão da sua corretora.
          </p>

          <div className="space-y-3">
            <Button 
              onClick={() => navigate("/dashboard")} // Redireciona para o painel
              size="xl"
              className="w-full bg-[#00A86B] hover:bg-[#008f5d] text-white shadow-lg shadow-green-200/50 hover:shadow-green-200/80 transition-all text-lg h-14"
            >
              Ir para meu Dashboard
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button 
              variant="ghost" 
              onClick={() => navigate("/")} 
              className="w-full text-gray-400 hover:text-gray-600"
            >
              <Home className="w-4 h-4 mr-2" />
              Voltar para a Home
            </Button>
          </div>
        </div>
        
        {/* Decorativo Superior */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-300 via-[#00A86B] to-green-300"></div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
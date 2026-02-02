import React, { useEffect, useState } from "react";
// Removemos o useNavigate pois vamos para um link externo
import { Button } from "@/components/ui/button";
import { LogIn, CheckCircle, Home } from "lucide-react";
// Import para o link interno da home, caso o usuário queira voltar
import { useNavigate } from "react-router-dom"; 

const PaymentSuccess = () => {
  const navigate = useNavigate(); // Usado apenas para o botão "Voltar para Home"
  const [showContent, setShowContent] = useState(false);

  // URL do seu sistema externo
  const SYSTEM_LOGIN_URL = "https://apolicesystem.onrender.com/index.html";

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleLoginRedirect = () => {
    // Redirecionamento externo para o Render
    window.location.href = SYSTEM_LOGIN_URL;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-2xl overflow-hidden text-center relative p-8 md:p-12 animate-in fade-in zoom-in duration-500">
        
        {/* --- ANIMAÇÃO DO CHECK --- */}
        <div className="flex justify-center mb-8">
          <div className="relative w-24 h-24">
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
                  className="animate-draw-check" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* --- CONTEÚDO --- */}
        <div className={`transition-all duration-700 ease-out transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Pagamento Confirmado!
          </h1>
          <p className="text-[#00A86B] font-semibold text-lg mb-6">
            Plano ativado com sucesso
          </p>

          {/* Card Informativo */}
          <div className="bg-green-50 rounded-xl p-5 border border-green-100 mb-8 text-left">
            <h3 className="text-green-800 font-bold text-sm mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Próximo Passo
            </h3>
            <p className="text-green-700 text-sm leading-relaxed">
              Sua conta foi criada. Em breve receberá um e-mail com instruções de acesso ao Apólice System em ambiente seguro.
            </p>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={handleLoginRedirect}
              size="xl"
              className="w-full bg-[#00A86B] hover:bg-[#008f5d] text-white shadow-lg shadow-green-200/50 hover:shadow-green-200/80 transition-all text-lg h-14"
            >
              <LogIn className="mr-2 w-5 h-5" />
              Acessar Sistema
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")} 
              className="w-full text-gray-400 hover:text-gray-600"
            >
              <Home className="w-4 h-4 mr-2" />
              Voltar para o Site
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
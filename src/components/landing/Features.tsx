import React, { useState } from "react";
import { 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  FileText, 
  Smartphone, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";

// Definição das funcionalidades principais
const features = [
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Segurança de Dados",
    description: "Seus dados e de seus clientes protegidos com criptografia de ponta a ponta e backups diários.",
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Automação Inteligente",
    description: "Envie lembretes de renovação e parcelas via WhatsApp e E-mail sem levantar um dedo.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: "Relatórios Gerenciais",
    description: "Tenha visão total do seu negócio com dashboards de vendas, comissões e performance.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Gestão de Clientes (CRM)",
    description: "Histórico completo de cada segurado, apólices vigentes e oportunidades de cross-sell.",
  },
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: "Controle de Apólices",
    description: "Organize documentos, propostas e endossos digitalmente. Adeus papelada.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: "Acesso Mobile",
    description: "Acesse sua corretora de qualquer lugar. O sistema é 100% responsivo para celular e tablet.",
  },
];

// Array com as 10 telas do sistema chamando da pasta local, com os títulos atualizados
const systemScreens = [
  { url: "/telas/tela1.png", title: "Segurança Login" },
  { url: "/telas/tela2.png", title: "Dashboard Gestão" },
  { url: "/telas/tela3.png", title: "Gestão Apólices" },
  { url: "/telas/tela4.png", title: "Gestão Clientes" },
  { url: "/telas/tela5.png", title: "Gestão Usuários Sistema" },
  { url: "/telas/tela6.png", title: "Emissão de Apólices" },
  { url: "/telas/tela7.png", title: "Cadastro de Clientes" },
  { url: "/telas/tela8.png", title: "Relatórios Gerais" },
  { url: "/telas/tela9.png", title: "Gestão de Usuários" },
  { url: "/telas/tela10.png", title: "Relatórios Impressos" },
];

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? systemScreens.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === systemScreens.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      {/* Sessão de Funcionalidades */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Funcionalidades
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Tudo o que um corretor de seguros moderno precisa
            </h2>
            <p className="text-gray-500 text-lg">
              Ferramentas poderosas desenhadas especificamente para o dia a dia do corretor de seguros moderno.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
              >
                <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sessão do Carrossel de Telas */}
      <section id="system-preview" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Conheça o Sistema
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Interface Simples e Intuitiva
            </h2>
            <p className="text-gray-500 text-lg">
              Navegue pelas telas da nossa plataforma e veja como é fácil gerenciar seus clientes e apólices.
            </p>
          </div>

          {/* Carrossel Principal */}
          <div className="max-w-5xl mx-auto relative group">
            
            {/* Alterado: Usando tag <img /> ao invés de background image para 
              garantir que não haja espaços vazios no topo ou laterais.
            */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white border border-gray-200 flex items-center justify-center">
              
              <img
                src={systemScreens[currentIndex].url}
                alt={systemScreens[currentIndex].title}
                className="w-full h-auto object-contain transition-opacity duration-500 ease-in-out"
              />

              {/* Overlay com Título da Tela (Centralizado) */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-16">
                <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg text-center">
                  {systemScreens[currentIndex].title}
                </h3>
              </div>

            </div>

            {/* Botão Voltar */}
            <button
              onClick={prevSlide}
              className="absolute top-[50%] -translate-y-[-50%] left-4 text-2xl rounded-full p-2 bg-white/90 hover:bg-white text-gray-800 shadow-lg cursor-pointer transition-all hover:scale-110"
              aria-label="Tela anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Botão Avançar */}
            <button
              onClick={nextSlide}
              className="absolute top-[50%] -translate-y-[-50%] right-4 text-2xl rounded-full p-2 bg-white/90 hover:bg-white text-gray-800 shadow-lg cursor-pointer transition-all hover:scale-110"
              aria-label="Próxima tela"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicadores (Dots) abaixo do carrossel */}
            <div className="flex flex-wrap justify-center py-4 gap-2 mt-4">
              {systemScreens.map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`transition-all duration-300 h-3 rounded-full cursor-pointer shadow-sm ${
                    currentIndex === slideIndex ? "bg-primary w-6" : "bg-gray-300 w-3 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir para a tela ${slideIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
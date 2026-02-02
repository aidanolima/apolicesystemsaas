import TermsCheckbox from "@/components/TermsCheckbox";
import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

<TermsCheckbox 
  onCheckedChange={(checked) => {
    console.log("Usuário aceitou?", checked);
    // Atualize o estado do seu formulário aqui
  }} 
/>

const Lgpd = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* <Header /> */}

      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold text-[#00A86B] mb-8">LGPD e Seus Direitos</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="bg-[#e6fff6] p-6 rounded-lg border border-[#00A86B]/20 mb-8">
              <p className="text-sm text-[#008f5d] font-semibold">
                Compromisso com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6">1. Seus Direitos como Titular</h3>
            <p>
              De acordo com a LGPD, você tem direito a: confirmação da existência de tratamento; acesso aos dados; correção de dados incompletos ou desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6">2. Controlador vs. Operador</h3>
            <p>
              O Apólice System atua como <strong>Operador</strong> dos dados dos segurados que você insere na plataforma, e como <strong>Controlador</strong> dos seus dados de cadastro como assinante.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6">3. Encarregado de Dados (DPO)</h3>
            <p>
              Para exercer seus direitos ou tirar dúvidas sobre dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados através do e-mail: privacidade@aslsolucoes.tech.
            </p>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Lgpd;
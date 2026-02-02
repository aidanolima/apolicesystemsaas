import TermsCheckbox from "@/components/TermsCheckbox";
import React from "react";
// Importe seu Header e Footer existentes aqui
// import Header from "../components/Header";
// import Footer from "../components/Footer";

<TermsCheckbox 
  onCheckedChange={(checked) => {
    console.log("Usuário aceitou?", checked);
    // Atualize o estado do seu formulário aqui
  }} 
/>

const TermosDeUso = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* <Header /> */}
      
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>Última atualização: Fevereiro de 2026</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6">1. Aceitação dos Termos</h3>
            <p>
              Ao acessar e usar o Apólice System ("Plataforma"), você concorda em cumprir e ficar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, você não deve usar nossos serviços.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6">2. Descrição do Serviço</h3>
            <p>
              O Apólice System é uma plataforma SaaS (Software as a Service) projetada para auxiliar corretores de seguros na gestão de apólices, clientes e propostas. O serviço é fornecido "no estado em que se encontra".
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6">3. Assinatura e Cancelamento</h3>
            <p>
              Oferecemos planos de assinatura mensal. Você pode cancelar sua assinatura a qualquer momento. Conforme o Código de Defesa do Consumidor, oferecemos uma garantia de 7 dias para reembolso total em caso de desistência na primeira compra.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6">4. Responsabilidades do Usuário</h3>
            <p>
              Você é responsável por manter a confidencialidade de sua conta e senha. Você concorda em não usar o serviço para qualquer finalidade ilegal ou não autorizada.
            </p>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default TermosDeUso;
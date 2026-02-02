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

const Privacidade = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* <Header /> */}

      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              No Apólice System, a privacidade dos seus dados e dos dados dos seus clientes é nossa prioridade. Esta política descreve como coletamos e usamos suas informações.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6">1. Coleta de Dados</h3>
            <p>
              Coletamos informações que você nos fornece diretamente, como nome, e-mail, telefone e dados de apólices inseridos no sistema para fins de gestão.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6">2. Uso das Informações</h3>
            <p>
              Usamos as informações para: operar e manter o serviço; melhorar a experiência do usuário; enviar comunicações técnicas e administrativas; e processar pagamentos.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6">3. Compartilhamento de Dados</h3>
            <p>
              Não vendemos seus dados pessoais. Podemos compartilhar dados com prestadores de serviços terceirizados estritamente para a operação do sistema (ex: servidores em nuvem, processadores de pagamento).
            </p>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Privacidade;
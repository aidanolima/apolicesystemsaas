import React, { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Shield, Lock, FileText } from "lucide-react";

// --- CONTEÚDOS DOS TEXTOS (Pode separar em outro arquivo se preferir) ---
const LEGAL_CONTENT = {
  terms: {
    title: "Termos de Uso",
    icon: <FileText className="w-6 h-6 text-primary" />,
    text: (
      <div className="space-y-4 text-gray-600">
        <p><strong>1. Aceitação:</strong> Ao usar o Apólice System, você concorda com estes termos. O serviço é fornecido "como está" para auxiliar na gestão de corretoras.</p>
        <p><strong>2. Uso do Sistema:</strong> Você é responsável pela segurança de sua senha e por todo o conteúdo inserido na plataforma.</p>
        <p><strong>3. Pagamentos:</strong> O serviço é pré-pago mensalmente. A inadimplência poderá resultar na suspensão do acesso após aviso prévio.</p>
        <p><strong>4. Cancelamento:</strong> Você pode cancelar a qualquer momento. Oferecemos garantia de 7 dias na primeira compra.</p>
        <p><strong>5. Responsabilidade:</strong> Não nos responsabilizamos por perdas indiretas ou lucros cessantes decorrentes do uso da plataforma.</p>
      </div>
    ),
  },
  privacy: {
    title: "Política de Privacidade",
    icon: <Lock className="w-6 h-6 text-primary" />,
    text: (
      <div className="space-y-4 text-gray-600">
        <p><strong>1. Coleta:</strong> Coletamos nome, e-mail e dados de faturamento estritamente para a prestação do serviço.</p>
        <p><strong>2. Uso:</strong> Seus dados são usados para autenticação, suporte técnico e melhorias no sistema.</p>
        <p><strong>3. Compartilhamento:</strong> Não vendemos seus dados. Compartilhamos apenas com processadores de pagamento (gateway) necessários para a operação.</p>
        <p><strong>4. Segurança:</strong> Utilizamos criptografia SSL e servidores seguros para proteger suas informações.</p>
      </div>
    ),
  },
  lgpd: {
    title: "LGPD e Seus Direitos",
    icon: <Shield className="w-6 h-6 text-primary" />,
    text: (
      <div className="space-y-4 text-gray-600">
        <p><strong>1. Seus Direitos:</strong> Conforme a Lei 13.709/2018, você tem direito a acessar, corrigir e excluir seus dados pessoais.</p>
        <p><strong>2. Papéis:</strong> O Apólice System atua como OPERADOR dos dados dos seus clientes (segurados) e CONTROLADOR dos seus dados de cadastro.</p>
        <p><strong>3. Encarregado (DPO):</strong> Para solicitações referentes a dados, entre em contato através do nosso canal de suporte oficial.</p>
      </div>
    ),
  },
};

// --- COMPONENTE PRINCIPAL ---
interface TermsCheckboxProps {
  onCheckedChange: (checked: boolean) => void;
}

const TermsCheckbox = ({ onCheckedChange }: TermsCheckboxProps) => {
  // Estado para saber qual modal está aberto (null = nenhum)
  const [activeModal, setActiveModal] = useState<"terms" | "privacy" | "lgpd" | null>(null);

  // Bloqueia o scroll da página de trás quando o modal abre
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [activeModal]);

  return (
    <>
      {/* O CHECKBOX EM SI */}
      <div className="flex items-start space-x-3 mt-4">
        <Checkbox
          id="terms"
          onCheckedChange={onCheckedChange}
          className="mt-1 border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none text-gray-600 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Li e concordo com os{" "}
            <span 
              onClick={() => setActiveModal("terms")}
              className="text-primary hover:underline cursor-pointer font-bold"
            >
              Termos de Uso
            </span>
            ,{" "}
            <span 
              onClick={() => setActiveModal("privacy")}
              className="text-primary hover:underline cursor-pointer font-bold"
            >
              Privacidade
            </span>{" "}
            e{" "}
            <span 
              onClick={() => setActiveModal("lgpd")}
              className="text-primary hover:underline cursor-pointer font-bold"
            >
              LGPD
            </span>
            .
          </label>
          <p className="text-xs text-muted-foreground">
            Você precisa aceitar para continuar.
          </p>
        </div>
      </div>

      {/* O MODAL GENÉRICO (Renderiza se activeModal não for null) */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          
          {/* Fundo clicável para fechar */}
          <div 
            className="absolute inset-0" 
            onClick={() => setActiveModal(null)}
          ></div>

          <div className="bg-white w-full max-w-2xl max-h-[85vh] rounded-xl shadow-2xl flex flex-col relative z-10 animate-in zoom-in-95 duration-200">
            
            {/* Header do Modal */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50 rounded-t-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                  {LEGAL_CONTENT[activeModal].icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {LEGAL_CONTENT[activeModal].title}
                </h3>
              </div>
              
              <button
                onClick={() => setActiveModal(null)}
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Conteúdo com Scroll */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              {LEGAL_CONTENT[activeModal].text}
            </div>

            {/* Footer do Modal */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-xl flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Entendi e Concordo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TermsCheckbox;
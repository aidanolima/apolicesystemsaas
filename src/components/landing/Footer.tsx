import React, { useState, useEffect } from "react";
import { Shield, X, Lock, FileText, Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox"; 
import { toast } from "sonner"; // <--- IMPORTANTE: Importando o disparador de notificação

// --- CONTEÚDO DOS TEXTOS LEGAIS ---
const LEGAL_CONTENT: Record<string, { title: string; icon: JSX.Element; text: JSX.Element }> = {
  terms: {
    title: "Termos de Uso",
    icon: <FileText className="w-6 h-6 text-primary" />,
    text: (
      <div className="space-y-4 text-gray-600 text-left">
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
      <div className="space-y-4 text-gray-600 text-left">
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
      <div className="space-y-4 text-gray-600 text-left">
        <p><strong>1. Seus Direitos:</strong> Conforme a Lei 13.709/2018, você tem direito a acessar, corrigir e excluir seus dados pessoais.</p>
        <p><strong>2. Papéis:</strong> O Apólice System atua como OPERADOR dos dados dos seus clientes (segurados) e CONTROLADOR dos seus dados de cadastro.</p>
        <p><strong>3. Encarregado (DPO):</strong> Para solicitações referentes a dados, entre em contato através do nosso canal de suporte oficial.</p>
      </div>
    ),
  },
};

const Footer = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isAccepted, setIsAccepted] = useState(false);

  // Resetar o estado do aceite
  useEffect(() => {
    setIsAccepted(false);
  }, [activeModal]);

  // Bloqueia scroll
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [activeModal]);

  // --- FUNÇÃO DE CONFIRMAÇÃO ---
  const handleConfirm = () => {
    if (activeModal && isAccepted) {
      // Dispara o aviso de sucesso
      toast.success(`${LEGAL_CONTENT[activeModal].title} aceito com sucesso!`, {
        description: "Seu registro foi atualizado.",
        duration: 3000,
      });
      
      // Fecha o modal
      setActiveModal(null);
    }
  };

  const links = {
    produto: [
      { label: "Funcionalidades", href: "#features" },
      { label: "Preços", href: "#pricing" },
      { label: "Integrações", href: "#" },
      { label: "Atualizações", href: "#" },
    ],
    empresa: [
      { label: "Sobre Nós", href: "#" },
      { label: "Carreiras", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contato", href: "#" },
    ],
    suporte: [
      { label: "Central de Ajuda", href: "#" },
      { label: "Documentação", href: "#" },
      { label: "Status do Sistema", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
    legal: [
      { label: "Termos de Uso", key: "terms" },
      { label: "Privacidade", key: "privacy" },
      { label: "LGPD", key: "lgpd" },
    ],
  };

  return (
    <footer className="bg-foreground py-16 relative">
      <div className="container mx-auto px-4">
        {/* Grid Principal */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg text-background">
                Apólice System
              </span>
            </a>
            <p className="text-background/60 text-sm max-w-xs">
              A plataforma completa para corretores de seguros gerenciarem
              apólices, propostas e clientes com eficiência.
            </p>
          </div>

          {/* Colunas */}
          {[
            { title: "Produto", items: links.produto },
            { title: "Suporte", items: links.suporte }
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-background mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.items.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-background/60 hover:text-background text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => setActiveModal(link.key)}
                    className="text-background/60 hover:text-background text-sm transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Apólice System. Todos os direitos reservados ASL Soluções Tech - CNPJ 58.256.588/0001-29.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-background/40 hover:text-background text-sm transition-colors">LinkedIn</a>
            <a href="#" className="text-background/40 hover:text-background text-sm transition-colors">Instagram</a>
            <a href="#" className="text-background/40 hover:text-background text-sm transition-colors">YouTube</a>
          </div>
        </div>
      </div>

      {/* --- MODAL --- */}
      {activeModal && LEGAL_CONTENT[activeModal] && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          
          <div 
            className={`absolute inset-0 ${!isAccepted ? 'pointer-events-none' : ''}`} 
            onClick={() => isAccepted && setActiveModal(null)}
          ></div>

          <div className="bg-white w-full max-w-2xl max-h-[85vh] rounded-xl shadow-2xl flex flex-col relative z-10 animate-in zoom-in-95 duration-200">
            
            {/* Header */}
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
                disabled={!isAccepted}
                className={`p-2 rounded-full transition-all ${
                  isAccepted 
                    ? "text-gray-400 hover:text-red-500 hover:bg-red-50" 
                    : "text-gray-200 cursor-not-allowed"
                }`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Conteúdo */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              {LEGAL_CONTENT[activeModal].text}
            </div>

            {/* Footer com Ação */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-xl flex flex-col sm:flex-row justify-between items-center gap-4">
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms-accept" 
                  checked={isAccepted}
                  onCheckedChange={(checked) => setIsAccepted(checked === true)}
                  className="border-gray-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label
                  htmlFor="terms-accept"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 cursor-pointer select-none"
                >
                  Li e concordo com o documento
                </label>
              </div>

              {/* Botão com Chamada da Função handleConfirm */}
              <button
                onClick={handleConfirm} 
                disabled={!isAccepted}
                className={`px-6 py-2 font-medium rounded-lg transition-all flex items-center gap-2 ${
                  isAccepted
                    ? "bg-primary text-white hover:bg-primary/90 shadow-md transform hover:-translate-y-0.5"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                {isAccepted && <Check className="w-4 h-4" />}
                {isAccepted ? "Confirmar e Fechar" : "Aceite para Fechar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
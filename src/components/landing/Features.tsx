import { Shield, Zap, BarChart3, Users, FileText, Smartphone } from "lucide-react";

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

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Tudo o que sua corretora precisa
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
  );
};

export default Features;
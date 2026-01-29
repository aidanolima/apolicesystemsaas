import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  // Função para abrir o WhatsApp
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5581999207087?text=Olá! Gostaria de saber mais sobre o teste grátis de 07 dias do Apólice System.",
      "_blank"
    );
  };

  const benefits = [
    {
      title: "Aumente sua produtividade",
      description:
        "Automatize tarefas repetitivas e foque no que realmente importa: atender seus clientes.",
      items: [
        "Importação automática de dados de PDFs",
        "Preenchimento inteligente de formulários",
        "Notificações automáticas por e-mail",
      ],
    },
    {
      title: "Tome decisões estratégicas",
      description:
        "Acesse dashboards e relatórios que transformam dados em insights acionáveis.",
      items: [
        "Gráficos de desempenho em tempo real",
        "Relatórios personalizados",
        "Análise de tendências de vendas",
      ],
    },
    {
      title: "Segurança garantida",
      description:
        "Seus dados e documentos protegidos com as melhores práticas de segurança.",
      items: [
        "Criptografia de ponta a ponta",
        "Backup automático na nuvem",
        "Controle de acesso por usuário",
      ],
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Benefícios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Por que escolher o Apólice System?
          </h2>
          <p className="text-muted-foreground">
            Transforme sua rotina de trabalho com ferramentas desenvolvidas
            especialmente para corretores de seguros.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {index + 1}
              </div>

              <h3 className="font-semibold text-xl text-foreground mb-3 mt-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground mb-6">{benefit.description}</p>

              <ul className="space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA - Alterado aqui */}
        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg"
            onClick={handleWhatsAppClick} // Adicionado o evento de clique
            className="hover:scale-105 transition-transform" // Adicionei um efeito suave ao passar o mouse
          >
            Experimente Grátis por 07 dias
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
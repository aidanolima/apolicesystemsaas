import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      description: "Ideal para corretores autônomos",
      price: "97",
      period: "/mês",
      features: [
        "Até 100 apólices",
        "Até 100 clientes",
        "1 usuário",
        "Dashboard básico",
        "Upload de PDFs",
        "Relatórios simples",
        "Suporte por email",
      ],
      cta: "Começar Agora",
      link: "https://mpago.la/2QZMBFa",
      highlighted: false,
    },
    {
      name: "Profissional",
      description: "Para corretoras em crescimento",
      price: "197",
      period: "/mês",
      features: [
        "Até 1000 apólices",
        "Até 1000 clientes",
        "5 usuários",
        "Dashboard completo",
        "Relatórios avançados",
        "Importação automática",
        "Notificações por email",
        "Suporte prioritário",
      ],
      cta: "Escolher Plano",
      link: "https://mpago.li/2aNP6fF",
      highlighted: true,
    },
    {
      name: "Corporate",
      description: "Para grandes operações",
      price: "497",
      period: "/mês",
      features: [
        "Apólices ilimitadas",
        "Clientes ilimitados",
        "Usuários ilimitados",
        "Todas as funcionalidades",
        "API de integração",
        "White-label",
        "Gerente de conta",
        "SLA garantido",
      ],
      cta: "Falar com Vendas",
      link: "https://mpago.la/2QZMBFa",
      highlighted: false,
    },
  ];

  const handlePlanClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <section id="pricing" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Preços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Planos que crescem com você
          </h2>
          <p className="text-muted-foreground">
            Escolha o plano ideal para o seu negócio. Todos incluem 07 dias
            grátis para testar.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground scale-105 shadow-2xl"
                  : "bg-background border border-border hover:border-primary/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Mais Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`font-semibold text-xl mb-1 ${
                    plan.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.highlighted
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span
                  className={`text-4xl font-bold ${
                    plan.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  R${plan.price}
                </span>
                <span
                  className={`${
                    plan.highlighted
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.highlighted
                          ? "text-primary-foreground"
                          : "text-primary"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted
                          ? "text-primary-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "heroOutline" : "default"}
                className={`w-full ${
                  plan.highlighted
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : ""
                }`}
                size="lg"
                onClick={() => handlePlanClick(plan.link)}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o período de teste gratuito?",
      answer:
        "Você tem 07 dias para experimentar todas as funcionalidades do plano escolhido sem compromisso. Não é necessário cartão de crédito para começar. Após o período de teste, você pode optar por continuar com uma assinatura ou cancelar sem custos.",
    },
    {
      question: "Posso importar apólices de outros sistemas?",
      answer:
        "Sim! O Apólice System possui uma funcionalidade avançada de importação que extrai dados automaticamente de PDFs de apólices. Nossa tecnologia de reconhecimento inteligente preenche os formulários automaticamente, economizando seu tempo.",
    },
    {
      question: "Meus dados estão seguros?",
      answer:
        "Absolutamente. Utilizamos criptografia de ponta a ponta, autenticação JWT, e armazenamento redundante com Amazon S3. Todos os acessos são protegidos por token e mantemos backups diários dos seus dados.",
    },
    {
      question: "Quantos usuários posso ter no sistema?",
      answer:
        "Depende do seu plano. O Starter permite 1 usuário, o Profissional até 5, e o Enterprise oferece usuários ilimitados. Você pode fazer upgrade a qualquer momento conforme sua equipe cresce.",
    },
    {
      question: "Existe suporte técnico disponível?",
      answer:
        "Sim! Oferecemos suporte por email para todos os planos. Clientes do plano Profissional têm suporte prioritário, e clientes Enterprise contam com um gerente de conta dedicado e SLA garantido.",
    },
    {
      question: "Posso cancelar minha assinatura a qualquer momento?",
      answer:
        "Sim, você pode cancelar sua assinatura quando quiser, sem multas ou taxas adicionais. Seus dados permanecerão acessíveis até o final do período já pago.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground">
            Tire suas dúvidas sobre o Apólice System. Não encontrou o que
            procura? Entre em contato conosco.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

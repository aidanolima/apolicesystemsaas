import {
  LayoutDashboard,
  FileText,
  Users,
  BarChart3,
  Upload,
  Lock,
  Mail,
  Search,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Dashboard Intuitivo",
      description:
        "Visualize KPIs importantes como clientes ativos, veículos cadastrados e apólices emitidas em tempo real.",
    },
    {
      icon: FileText,
      title: "Gestão de Apólices",
      description:
        "Cadastre, edite e gerencie apólices com upload de PDFs e armazenamento seguro na nuvem (Amazon S3).",
    },
    {
      icon: Users,
      title: "Gestão de Clientes",
      description:
        "Mantenha um cadastro completo dos seus clientes com histórico de propostas e apólices vinculadas.",
    },
    {
      icon: BarChart3,
      title: "Relatórios Gerenciais",
      description:
        "Gere relatórios detalhados para análise de desempenho e tomada de decisões estratégicas.",
    },
    {
      icon: Upload,
      title: "Importação Automática",
      description:
        "Extraia dados automaticamente de PDFs de apólices usando reconhecimento inteligente (Regex).",
    },
    {
      icon: Lock,
      title: "Segurança Avançada",
      description:
        "Proteção com JWT, autenticação segura e redundância de arquivos para máxima confiabilidade.",
    },
    {
      icon: Mail,
      title: "Notificações Automáticas",
      description:
        "Receba alertas por e-mail sobre novas propostas, renovações e eventos importantes.",
    },
    {
      icon: Search,
      title: "Busca Inteligente",
      description:
        "Encontre rapidamente propostas e apólices por ID, cliente ou qualquer campo relevante.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Tudo que você precisa para gerenciar seguros
          </h2>
          <p className="text-muted-foreground">
            Uma plataforma completa desenvolvida para otimizar seu trabalho como
            corretor de seguros.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

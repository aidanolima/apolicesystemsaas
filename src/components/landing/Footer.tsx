import { Shield } from "lucide-react";

const Footer = () => {
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
      { label: "Termos de Uso", href: "#" },
      { label: "Privacidade", href: "#" },
      { label: "LGPD", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
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

          {/* Produto */}
          <div>
            <h4 className="font-semibold text-background mb-4">Produto</h4>
            <ul className="space-y-2">
              {links.produto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-semibold text-background mb-4">Suporte</h4>
            <ul className="space-y-2">
              {links.suporte.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Apólice System. Todos os direitos reservados a ASL Soluções Tech.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-background/40 hover:text-background text-sm transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-background/40 hover:text-background text-sm transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-background/40 hover:text-background text-sm transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

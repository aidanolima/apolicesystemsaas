import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ricardo Costa",
      role: "Corretor Susep • RC Seguros",
      content: "Desde que implementei o Apólice System, reduzi em 40% o tempo gasto com burocracia. A gestão de renovações automática salvou contratos que eu nem lembrava que iriam vencer.",
      initials: "RC",
      image: "/placeholder-ricardo.jpg" // Substitua pelo caminho real depois
    },
    {
      name: "Ribamar Santos",
      role: "Especialista em Vida • Santos Corretora",
      content: "A organização financeira que o sistema trouxe é impagável. Consigo ver minhas comissões futuras e controlar o fluxo de caixa com uma clareza que nunca tive usando planilhas.",
      initials: "RS",
      image: "/placeholder-ribamar.jpg"
    },
    {
      name: "Mariana Torres",
      role: "Gestora de Seguros • Torres & Co.",
      content: "O acesso mobile é o grande diferencial. Fecho negócios direto na visita ao cliente consultando as informações no celular. Interface limpa, rápida e o suporte é nota 10.",
      initials: "MT",
      image: "/placeholder-mariana.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <Quote className="absolute -top-10 -left-10 w-64 h-64 text-primary rotate-12" />
        <Quote className="absolute -bottom-10 -right-10 w-64 h-64 text-primary rotate-12 scale-x-[-1]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Aprovado por quem entende de seguros
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Veja como corretores de todo o Brasil estão transformando suas operações.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 flex flex-col relative group"
            >
              {/* Aspas decorativas no card */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-100 group-hover:text-primary/20 transition-colors" />

              {/* Estrelas */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Texto */}
              <blockquote className="text-gray-600 leading-relaxed mb-8 flex-grow italic">
                "{testimonial.content}"
              </blockquote>

              {/* Autor */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
                <Avatar className="w-12 h-12 border-2 border-primary/20">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <div className="font-bold text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-primary text-xs font-medium mt-0.5">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
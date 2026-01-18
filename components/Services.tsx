
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Higienização Industrial",
      desc: "Processos automatizados de limpeza para reutilização segura de Big Bags.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.673.337a4 4 0 01-1.909.48H10a4 4 0 01-4-4V7a4 4 0 014-4h2a4 4 0 014 4v3" />
        </svg>
      )
    },
    {
      title: "Reparo e Manutenção",
      desc: "Substituição de alças e reparos estruturais com costura reforçada.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: "Logística Integrada",
      desc: "Gestão de estoque e entrega just-in-time para sua linha de produção.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "Reciclagem de PP",
      desc: "Compromisso ambiental através do descarte e reprocessamento correto.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold uppercase tracking-tighter mb-4">
            SERVIÇOS <span className="text-red-600">INDUSTRIAIS</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">
            Muito além do produto, oferecemos suporte técnico especializado para otimizar sua cadeia de suprimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gray-50 text-black flex items-center justify-center rounded-sm mb-8 transition-colors group-hover:bg-red-600 group-hover:text-white">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-4">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

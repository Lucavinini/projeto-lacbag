
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="empresa" className="py-20 md:py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative z-10">
            <div className="absolute -top-6 md:-top-10 -left-6 md:-left-10 w-24 md:w-40 h-24 md:h-40 border-t-4 md:border-t-8 border-l-4 md:border-l-8 border-red-600 opacity-50 hidden sm:block"></div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mb-6 md:mb-8 leading-none">
              SOLIDEZ QUE<br />
              <span className="text-red-600">INSPIRA</span> CONFIANÇA.
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
              Com mais de 25 anos de atuação, a LACBAG consolidou-se como referência nacional no mercado de embalagens flexíveis. Nossa missão é prover soluções que garantam a integridade dos seus insumos.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h4 className="text-red-600 font-bold uppercase tracking-widest text-xs mb-2">Segurança</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Testes rigorosos de carga e resistência para garantir zero falhas operacionais.</p>
              </div>
              <div>
                <h4 className="text-red-600 font-bold uppercase tracking-widest text-xs mb-2">Sustentabilidade</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Iniciativas de reciclagem de PP e redução contínua do impacto ambiental.</p>
              </div>
            </div>

            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-6">
               <img src="https://api.iconify.design/logos:iso.svg" alt="ISO Logo" className="h-8 md:h-12 grayscale invert opacity-70" />
               <div className="hidden sm:block h-10 w-px bg-gray-800"></div>
               <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest max-w-[200px]">Acreditados pelos Maiores Players do Mercado</span>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1553413077-190dd3062649?auto=format&fit=crop&q=80&w=1000" 
              alt="Industrial Plant" 
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
            <div className="absolute bottom-0 right-0 bg-red-600 p-6 md:p-10 translate-x-4 md:translate-x-10 translate-y-4 md:translate-y-10 hidden xl:block">
               <span className="block text-4xl font-black italic">+250</span>
               <span className="text-xs uppercase font-bold tracking-widest">Colaboradores</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

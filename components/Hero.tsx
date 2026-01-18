
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          alt="Industrial Big Bags"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-red-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4 md:mb-6">
            Líder em Soluções FIBC
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            RESISTÊNCIA QUE<br />
            <span className="text-red-600">CARREGA</span> O SEU NEGÓCIO.
          </h1>
          <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 max-w-xl leading-relaxed">
            Big bags de alta performance para mineração, agricultura e indústria química. Segurança certificada e logística eficiente para sua operação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto bg-red-600 text-white px-8 md:px-10 py-4 rounded-sm text-sm md:text-base font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg">
              Ver Catálogo
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 md:px-10 py-4 rounded-sm text-sm md:text-base font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Nossos Serviços
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar - Hidden on mobile, visible on large screens */}
      <div className="absolute bottom-10 left-6 right-6 hidden lg:block text-white/50">
        <div className="flex space-x-12 border-t border-white/10 pt-8">
          <div>
            <span className="block text-2xl font-bold text-white">10k+</span>
            <span className="text-[10px] uppercase tracking-widest">Toneladas Mensais</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-white">ISO 9001</span>
            <span className="text-[10px] uppercase tracking-widest">Qualidade Certificada</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-white">24/7</span>
            <span className="text-[10px] uppercase tracking-widest">Suporte Técnico</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

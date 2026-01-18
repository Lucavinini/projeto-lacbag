
import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold uppercase tracking-tighter mb-8 leading-tight">
              CONTATO E <br/><span className="text-red-600">LOCALIZAÇÃO</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              <div>
                <h4 className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-2">Endereço Principal</h4>
                <p className="text-base md:text-lg font-semibold leading-snug">Av. Industrial, 1500 - Distrito Industrial</p>
                <p className="text-gray-600 text-sm">Curitiba, PR - Brasil</p>
              </div>
              
              <div>
                <h4 className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-2">Telefone</h4>
                <p className="text-base md:text-lg font-semibold">+55 (41) 3344-5566</p>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-2">Email Comercial</h4>
                <p className="text-base md:text-lg font-semibold">vendas@lacbag.com.br</p>
              </div>

              <div className="sm:col-span-2 lg:col-span-1 pt-4">
                <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-red-600 transition-colors">
                  Enviar Mensagem
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 h-[350px] md:h-[450px] bg-gray-200 relative overflow-hidden shadow-inner border border-gray-300">
             {/* Mock Map View */}
             <div className="absolute inset-0 bg-slate-300">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover opacity-60 mix-blend-multiply grayscale"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                   <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center animate-bounce shadow-xl">
                      <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
                   </div>
                   <div className="mt-4 bg-black text-white text-[9px] md:text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-lg">
                      Sede LACBAG
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

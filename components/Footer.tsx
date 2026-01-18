
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
             <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                <span className="text-black font-extrabold text-lg">LB</span>
              </div>
              <span className="text-lg font-bold tracking-tighter text-white">
                LAC<span className="text-red-600">BAG</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Líder em embalagens flexíveis e serviços industriais. Tecnologia a serviço da sua logística.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-600 mb-6">Produtos</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-semibold">
              <li><a href="#" className="hover:text-white transition-colors">Big Bags Padrão</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Modelos Condutivos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Especiais Food Grade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Acessórios de Içamento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-600 mb-6">Institucional</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-semibold">
              <li><a href="#empresa" className="hover:text-white transition-colors">Nossa História</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certificações</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog Industrial</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-600 mb-6">Siga-nos</h4>
            <div className="flex space-x-4">
               {['LinkedIn', 'YouTube', 'Instagram'].map(social => (
                 <a key={social} href="#" className="w-10 h-10 border border-gray-800 flex items-center justify-center text-xs font-bold hover:bg-red-600 hover:border-red-600 transition-all uppercase">
                    {social.charAt(0)}
                 </a>
               ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-[0.2em] text-gray-600">
           <p>© 2024 LACBAG Solutions. Todos os direitos reservados.</p>
           <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacidade</a>
              <a href="#" className="hover:text-white">Termos de Uso</a>
              <a href="#" className="hover:text-white">Sitemap</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

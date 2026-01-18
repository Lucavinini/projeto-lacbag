
import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  specs: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, specs }) => (
  <div className="bg-white border border-gray-200 group overflow-hidden">
    <div className="h-64 overflow-hidden bg-gray-100">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-8">
      <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">{title}</h3>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">{description}</p>
      <ul className="space-y-2 mb-8">
        {specs.map((spec, i) => (
          <li key={i} className="flex items-center text-xs text-gray-500 font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-red-600 mr-3"></span>
            {spec}
          </li>
        ))}
      </ul>
      <button className="w-full py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-red-600 transition-colors">
        Solicitar Cotação
      </button>
    </div>
  </div>
);

const Products: React.FC = () => {
  const products = [
    {
      title: "Big Bag Padrão",
      description: "Ideal para materiais granulares e pós de uso geral. Construído com polipropileno de alta densidade.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      specs: ["Capacidade: 500kg - 2000kg", "Fator de Segurança: 5:1 ou 6:1", "Tratamento Anti-UV"]
    },
    {
      title: "Big Bag Condutivo (Tipo C)",
      description: "Desenvolvido para prevenir descargas eletrostáticas em ambientes com risco de explosão.",
      image: "https://images.unsplash.com/photo-1590674033314-142213192931?auto=format&fit=crop&q=80&w=800",
      specs: ["Aterramento Obrigatório", "Norma IEC 61340", "Segurança em Áreas Classificadas"]
    },
    {
      title: "Big Bag Food Grade",
      description: "Fabricado em ambiente controlado, livre de contaminantes para indústria alimentícia.",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800",
      specs: ["Certificação BRC/GFSI", "Corte Ultrassônico", "Inspecionado Eletronicamente"]
    }
  ];

  return (
    <section id="produtos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold uppercase tracking-tighter mb-4">
              Soluções em <span className="text-red-600">Armazenamento</span>
            </h2>
            <div className="h-1 w-20 bg-red-600 mb-6"></div>
            <p className="text-gray-600 font-medium">
              Desenvolvemos embalagens flexíveis que atendem às mais rigorosas normas de segurança e qualidade do mercado internacional.
            </p>
          </div>
          <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-red-600 hover:border-red-600 transition-all">
            Ver Todos os Modelos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => <ProductCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  );
};

export default Products;

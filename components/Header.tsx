
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Produtos', href: '#produtos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Empresa', href: '#empresa' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 z-50">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-black flex items-center justify-center rounded">
            <span className="text-white font-extrabold text-lg md:text-xl">LB</span>
          </div>
          <span className={`text-lg md:text-xl font-bold tracking-tighter ${isScrolled || isMenuOpen ? 'text-black' : 'text-white'}`}>
            LAC<span className="text-red-600">BAG</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-semibold tracking-wide uppercase transition-colors hover:text-red-600 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="#contato"
            className="hidden sm:inline-block bg-red-600 text-white px-4 md:px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
          >
            Orçamento
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden z-50 p-2 ${isScrolled || isMenuOpen ? 'text-black' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold uppercase tracking-widest text-black hover:text-red-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsMenuOpen(false)}
            className="w-full max-w-xs text-center bg-red-600 text-white py-4 rounded-sm text-sm font-bold uppercase tracking-widest"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

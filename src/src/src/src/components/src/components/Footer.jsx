import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">ConectaEmpreendedores</h3>
          <p className="text-gray-400">
            Conectando empreendedores talentosos com oportunidades únicas. Encontre especialistas em economia, terapia, nutrição, advocacia e muito mais.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link to="/sobre" className="text-gray-400 hover:text-white">Sobre Nós</Link></li>
            <li><Link to="/empreendedores" className="text-gray-400 hover:text-white">Empreendedores</Link></li>
            <li><Link to="/conteudo" className="text-gray-400 hover:text-white">Conteúdo</Link></li>
            <li><Link to="/agenda" className="text-gray-400 hover:text-white">Agenda</Link></li>
            <li><Link to="/contato" className="text-gray-400 hover:text-white">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contato</h3>
          <p className="text-gray-400">contato@conectaempreendedores.com</p>
          <p className="text-gray-400">(11) 9999-9999</p>
          <p className="text-gray-400">São Paulo, SP</p>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} ConectaEmpreendedores. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-purple-700">CEConectaEmpreendedores</Link>
      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-purple-700">Home</Link>
        <Link to="/sobre" className="text-gray-700 hover:text-purple-700">Sobre Nós</Link>
        <Link to="/empreendedores" className="text-gray-700 hover:text-purple-700">Empreendedores</Link>
        <Link to="/conteudo" className="text-gray-700 hover:text-purple-700">Conteúdo</Link>
        <Link to="/agenda" className="text-gray-700 hover:text-purple-700">Agenda</Link>
        <Link to="/contato" className="text-gray-700 hover:text-purple-700">Contato</Link>
      </nav>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 pt-8">
              <Link to="/" className="text-gray-700 hover:text-purple-700">Home</Link>
              <Link to="/sobre" className="text-gray-700 hover:text-purple-700">Sobre Nós</Link>
              <Link to="/empreendedores" className="text-gray-700 hover:text-purple-700">Empreendedores</Link>
              <Link to="/conteudo" className="text-gray-700 hover:text-purple-700">Conteúdo</Link>
              <Link to="/agenda" className="text-gray-700 hover:text-purple-700">Agenda</Link>
              <Link to="/contato" className="text-gray-700 hover:text-purple-700">Contato</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

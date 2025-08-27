import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const professionals = [
  {
    id: 1,
    name: 'Dr. Ana Silva',
    specialty: 'Economista',
    bio: 'Especialista em economia comportamental com 15 anos de experiência, ajudando empresas a otimizar seus recursos e estratégias financeiras.',
    rating: 4.9,
    price: 'R$ 250/h',
    image: 'https://via.placeholder.com/150',
    category: 'Economia'
  },
  {
    id: 2,
    name: 'Carlos Santos',
    specialty: 'Terapeuta',
    bio: 'Psicólogo clínico especializado em terapia cognitivo-comportamental, com foco em ansiedade e estresse. Atendimento online e presencial.',
    rating: 4.8,
    price: 'R$ 180/h',
    image: 'https://via.placeholder.com/150',
    category: 'Terapia'
  },
  {
    id: 3,
    name: 'Dra. Maria Costa',
    specialty: 'Nutricionista',
    bio: 'Nutricionista funcional com foco em alimentação saudável e planos personalizados para atletas e pessoas com necessidades específicas.',
    rating: 5.0,
    price: 'R$ 200/consulta',
    image: 'https://via.placeholder.com/150',
    category: 'Nutrição'
  },
  {
    id: 4,
    name: 'Dr. João Oliveira',
    specialty: 'Advogado',
    bio: 'Advogado empresarial com expertise em direito digital e startups, oferecendo consultoria jurídica para novos negócios e contratos.',
    rating: 4.7,
    price: 'R$ 300/h',
    image: 'https://via.placeholder.com/150',
    category: 'Direito'
  },
  {
    id: 5,
    name: 'Fernanda Lima',
    specialty: 'Blogueira & Marketing Digital',
    bio: 'Criadora de conteúdo e especialista em marketing digital, ajudando marcas a construir sua presença online e engajar com seu público.',
    rating: 4.9,
    price: 'R$ 150/h (consultoria )',
    image: 'https://via.placeholder.com/150',
    category: 'Marketing'
  },
  {
    id: 6,
    name: 'Ricardo Mendes',
    specialty: 'Podcaster & Youtuber',
    bio: 'Host de podcast e criador de conteúdo em vídeo, focado em empreendedorismo e inovação. Oferece workshops sobre criação de conteúdo.',
    rating: 4.6,
    price: 'R$ 100/h (mentoria )',
    image: 'https://via.placeholder.com/150',
    category: 'Mídia'
  },
  {
    id: 7,
    name: 'Prof. Helena Souza',
    specialty: 'Professora de Idiomas',
    bio: 'Professora de inglês e espanhol com metodologia focada em conversação e fluência. Aulas particulares e em grupo, online e presenciais.',
    rating: 4.9,
    price: 'R$ 120/h',
    image: 'https://via.placeholder.com/150',
    category: 'Idiomas'
  },
];

const Entrepreneurs = ( ) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredProfessionals = professionals.filter(professional => {
    const matchesSearch = professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          professional.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          professional.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || professional.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Nossos Empreendedores</h1>

      {/* Filter and Search Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
        <Input
          type="text"
          placeholder="Buscar por nome, especialidade ou palavras-chave..."
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select onValueChange={setFilterCategory} defaultValue="all">
          <SelectTrigger className="w-full md:w-1/4 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
            <SelectValue placeholder="Filtrar por Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as Categorias</SelectItem>
            <SelectItem value="Economia">Economia</SelectItem>
            <SelectItem value="Terapia">Terapia</SelectItem>
            <SelectItem value="Nutrição">Nutrição</SelectItem>
            <SelectItem value="Direito">Direito</SelectItem>
            <SelectItem value="Marketing">Marketing Digital</SelectItem>
            <SelectItem value="Mídia">Mídia (Podcast/YouTube)</SelectItem>
            <SelectItem value="Idiomas">Idiomas</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={() => { setSearchTerm(''); setFilterCategory('all'); }} className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-6 py-3 rounded-lg shadow-md">
          Limpar Filtros
        </Button>
      </div>

      {/* Professionals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProfessionals.length > 0 ? (
          filteredProfessionals.map(professional => (
            <div key={professional.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img src={professional.image} alt={professional.name} className="rounded-full w-32 h-32 object-cover mb-4" />
              <h3 className="text-2xl font-semibold text-gray-700">{professional.name}</h3>
              <p className="text-purple-600 font-medium mb-2">{professional.specialty}</p>
              <p className="text-yellow-500 text-lg mb-2">★ {professional.rating.toFixed(1)}</p>
              <p className="text-gray-600 mb-4 flex-grow">{professional.bio}</p>
              <p className="text-gray-800 font-bold text-xl mb-4">{professional.price}</p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md">
                Ver Perfil / Contratar
              </Button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-xl">Nenhum profissional encontrado com os critérios de busca.</p>
        )}
      </div>
    </div>
  );
};

export default Entrepreneurs;

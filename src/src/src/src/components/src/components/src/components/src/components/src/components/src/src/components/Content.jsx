import React, { useState } from 'react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const Content = () => {
  const [activeTab, setActiveTab] = useState('free');

  const freeContent = [
    {
      id: 1,
      type: 'article',
      category: 'Empreendedorismo',
      readTime: '5 min',
      title: '10 Dicas para Empreendedores Iniciantes',
      description: 'Descubra as principais estratégias para começar seu negócio com o pé direito.',
      author: 'Dr. Ana Silva',
      link: '#'
    },
    {
      id: 2,
      type: 'article',
      category: 'Bem-estar',
      readTime: '7 min',
      title: 'Como Gerenciar Ansiedade no Trabalho',
      description: 'Técnicas práticas para manter o equilíbrio emocional no ambiente profissional.',
      author: 'Carlos Santos',
      link: '#'
    },
    {
      id: 3,
      type: 'article',
      category: 'Nutrição',
      readTime: '6 min',
      title: 'Alimentação Saudável para Profissionais Ocupados',
      description: 'Dicas práticas para manter uma dieta equilibrada mesmo com a rotina corrida.',
      author: 'Dra. Maria Costa',
      link: '#'
    },
    {
      id: 4,
      type: 'ebook',
      title: 'Guia Completo do Empreendedor Digital',
      author: 'Fernanda Lima',
      pages: '45 páginas',
      rating: 4.8,
      downloadLink: '#'
    },
    {
      id: 5,
      type: 'ebook',
      title: 'Mindfulness para Iniciantes',
      author: 'Carlos Santos',
      pages: '32 páginas',
      rating: 4.9,
      downloadLink: '#'
    },
    {
      id: 6,
      type: 'video',
      title: 'Entrevista: O Futuro do Empreendedorismo',
      author: 'Ricardo Mendes',
      duration: '25:30',
      views: '15,420 visualizações',
      videoLink: '#'
    },
    {
      id: 7,
      type: 'video',
      title: 'Workshop: Planejamento Financeiro Pessoal',
      author: 'Dr. Ana Silva',
      duration: '45:15',
      views: '8,930 visualizações',
      videoLink: '#'
    },
  ];

  const paidContent = [
    {
      id: 1,
      type: 'ebook',
      title: 'Estratégias Avançadas de Marketing Digital',
      author: 'Fernanda Lima',
      pages: '120 páginas',
      rating: 4.9,
      price: 'R$ 49,90',
      buyLink: '#'
    },
    {
      id: 2,
      type: 'ebook',
      title: 'Manual Completo de Terapia Cognitiva',
      author: 'Carlos Santos',
      pages: '200 páginas',
      rating: 5.0,
      price: 'R$ 79,90',
      buyLink: '#'
    },
    {
      id: 3,
      type: 'course',
      title: 'Curso Online: Finanças para Não Economistas',
      author: 'Dr. Ana Silva',
      modules: '8 módulos',
      duration: '10 horas',
      price: 'R$ 299,00',
      buyLink: '#'
    },
    {
      id: 4,
      type: 'consulting',
      title: 'Consultoria Jurídica para Startups',
      author: 'Dr. João Oliveira',
      description: 'Sessão de 1 hora para tirar dúvidas sobre aspectos legais do seu negócio.',
      price: 'R$ 350,00',
      buyLink: '#'
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Conteúdos Exclusivos</h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Acesse artigos, ebooks, vídeos, cursos e consultorias criados por nossos especialistas.
      </p>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="free">Conteúdo Gratuito</TabsTrigger>
          <TabsTrigger value="paid">Conteúdo Pago</TabsTrigger>
        </TabsList>

        <TabsContent value="free">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Artigos Recentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {freeContent.filter(item => item.type === 'article').map(article => (
              <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-sm text-purple-600 font-medium mb-1">{article.category} • {article.readTime}</p>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <p className="text-sm text-gray-500 mb-4">Por {article.author}</p>
                <Button asChild variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  <a href={article.link}>Ler Artigo</a>
                </Button>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Ebooks Gratuitos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {freeContent.filter(item => item.type === 'ebook').map(ebook => (
              <div key={ebook.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <img src="https://via.placeholder.com/100" alt="Ebook" className="mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{ebook.title}</h3>
                <p className="text-gray-600 mb-1">Por {ebook.author}</p>
                <p className="text-gray-500 mb-2">{ebook.pages}</p>
                <p className="text-yellow-500 text-lg mb-4">★ {ebook.rating.toFixed(1 )}</p>
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md">
                  <a href={ebook.downloadLink}>Download Grátis</a>
                </Button>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeContent.filter(item => item.type === 'video').map(video => (
              <div key={video.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <img src="https://via.placeholder.com/200x120" alt="Video Thumbnail" className="mb-4 rounded-md" />
                <p className="text-sm text-gray-500 mb-1">{video.duration}</p>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-1">Por {video.author}</p>
                <p className="text-gray-500 mb-4">{video.views}</p>
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md">
                  <a href={video.videoLink}>Assistir</a>
                </Button>
              </div>
             ))}
          </div>
        </TabsContent>

        <TabsContent value="paid">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Ebooks Premium</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {paidContent.filter(item => item.type === 'ebook').map(ebook => (
              <div key={ebook.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <img src="https://via.placeholder.com/100" alt="Ebook Premium" className="mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{ebook.title}</h3>
                <p className="text-gray-600 mb-1">Por {ebook.author}</p>
                <p className="text-gray-500 mb-2">{ebook.pages}</p>
                <p className="text-yellow-500 text-lg mb-2">★ {ebook.rating.toFixed(1 )}</p>
                <p className="text-gray-800 font-bold text-xl mb-4">{ebook.price}</p>
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md">
                  <a href={ebook.buyLink}>Comprar Agora</a>
                </Button>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Cursos Online</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {paidContent.filter(item => item.type === 'course').map(course => (
              <div key={course.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <img src="https://via.placeholder.com/200x120" alt="Course Thumbnail" className="mb-4 rounded-md" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-1">Por {course.author}</p>
                <p className="text-gray-500 mb-2">{course.modules} • {course.duration}</p>
                <p className="text-gray-800 font-bold text-xl mb-4">{course.price}</p>
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md">
                  <a href={course.buyLink}>Comprar Agora</a>
                </Button>
              </div>
             ))}
          </div>

          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Consultorias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paidContent.filter(item => item.type === 'consulting').map(consulting => (
              <div key={consulting.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <img src="https://via.placeholder.com/100" alt="Consulting Icon" className="mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{consulting.title}</h3>
                <p className="text-gray-600 mb-1">Por {consulting.author}</p>
                <p className="text-gray-500 mb-2">{consulting.description}</p>
                <p className="text-gray-800 font-bold text-xl mb-4">{consulting.price}</p>
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md">
                  <a href={consulting.buyLink}>Comprar Agora</a>
                </Button>
              </div>
             ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Content;

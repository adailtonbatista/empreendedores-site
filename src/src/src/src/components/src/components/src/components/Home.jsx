import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Home = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-lg mb-12">
        <h1 className="text-5xl font-extrabold mb-4">Conecte-se com Empreendedores</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Encontre especialistas em economia, terapia, nutrição, advocacia, blogging, podcasts, YouTube e ensino de idiomas. Acesse conteúdos exclusivos e conecte-se com profissionais qualificados.
        </p>
        <div className="space-x-4">
          <Button asChild className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-full shadow-lg">
            <Link to="/empreendedores">Encontre seu Especialista</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3 rounded-full shadow-lg">
            <Link to="/conteudo">Explore Conteúdos</Link>
          </Button>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Como Podemos Ajudar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
            <img src="https://via.placeholder.com/80" alt="Connect with Experts" className="mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Conecte-se com Especialistas</h3>
            <p className="text-gray-600">Encontre profissionais qualificados em diversas áreas</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
            <img src="https://via.placeholder.com/80" alt="Exclusive Content" className="mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Conteúdo Exclusivo</h3>
            <p className="text-gray-600">Acesse ebooks, cursos e materiais educativos</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
            <img src="https://via.placeholder.com/80" alt="Videos and Podcasts" className="mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Vídeos e Podcasts</h3>
            <p className="text-gray-600">Assista entrevistas e conteúdos em vídeo</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
            <img src="https://via.placeholder.com/80" alt="Online Scheduling" className="mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Agendamento Online</h3>
            <p className="text-gray-600">Agende consultorias e consultas facilmente</p>
          </div>
        </div>
      </section>

      {/* Featured Professionals Section */}
      <section className="py-12 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Profissionais em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/150" alt="Dr. Ana Silva" className="rounded-full w-32 h-32 object-cover mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Dr. Ana Silva</h3>
            <p className="text-yellow-500 text-lg mb-2">★ 4.9</p>
            <p className="text-purple-600 font-medium mb-2">Economista</p>
            <p className="text-gray-600 mb-4">Especialista em economia comportamental com 15 anos de experiência.</p>
            <Button asChild variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
              <Link to="/empreendedores">Ver Perfil</Link>
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/150" alt="Carlos Santos" className="rounded-full w-32 h-32 object-cover mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Carlos Santos</h3>
            <p className="text-yellow-500 text-lg mb-2">★ 4.8</p>
            <p className="text-purple-600 font-medium mb-2">Terapeuta</p>
            <p className="text-gray-600 mb-4">Psicólogo clínico especializado em terapia cognitivo-comportamental.</p>
            <Button asChild variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
              <Link to="/empreendedores">Ver Perfil</Link>
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/150" alt="Dra. Maria Costa" className="rounded-full w-32 h-32 object-cover mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Dra. Maria Costa</h3>
            <p className="text-yellow-500 text-lg mb-2">★ 5</p>
            <p className="text-purple-600 font-medium mb-2">Nutricionista</p>
            <p className="text-gray-600 mb-4">Nutricionista funcional com foco em alimentação saudável.</p>
            <Button asChild variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
              <Link to="/empreendedores">Ver Perfil</Link>
            </Button>
          </div>
        </div>
        <div className="text-center mt-10">
          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full shadow-lg">
            <Link to="/empreendedores">Ver Todos os Profissionais</Link>
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-indigo-700 text-white text-center rounded-lg shadow-lg mt-12">
        <h2 className="text-4xl font-bold mb-4">Receba Novidades e Conteúdos Exclusivos</h2>
        <p className="text-xl mb-8">Cadastre-se em nossa newsletter e seja o primeiro a saber sobre novos profissionais, conteúdos e oportunidades.</p>
        <div className="flex justify-center items-center space-x-4">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="p-3 rounded-full text-gray-800 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <Button className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-6 py-3 rounded-full shadow-lg">
            Cadastrar
          </Button>
        </div>
        <p className="text-sm text-gray-300 mt-4">100% gratuito • Cancele quando quiser</p>
      </section>
    </div>
   );
};

export default Home;

import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Sobre Nós</h1>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Nossa Missão</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          No ConectaEmpreendedores, nossa missão é criar uma ponte entre profissionais talentosos e pessoas que buscam seus serviços e conhecimentos. Acreditamos no poder da conexão e na importância de facilitar o acesso a conteúdos de qualidade e consultorias especializadas em diversas áreas.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Quem Somos</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Somos uma plataforma dedicada a impulsionar o empreendedorismo e o desenvolvimento pessoal e profissional. Reunimos uma comunidade diversificada de especialistas, incluindo economistas, terapeutas, nutricionistas, advogados, blogueiros, podcasters, YouTubers e professores de idiomas.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Nosso objetivo é ser o ponto de encontro onde o conhecimento e a expertise se encontram com a demanda, promovendo o crescimento mútuo e a criação de novas oportunidades.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Nossos Valores</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed space-y-2">
          <li>**Conexão:** Acreditamos que as melhores soluções surgem da colaboração e do networking.</li>
          <li>**Qualidade:** Comprometimento em oferecer acesso a profissionais e conteúdos de excelência.</li>
          <li>**Inovação:** Busca contínua por novas formas de conectar e capacitar.</li>
          <li>**Transparência:** Atuação ética e clara em todas as nossas interações.</li>
          <li>**Crescimento:** Foco no desenvolvimento contínuo de nossa comunidade e usuários.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Nossa Visão</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Ser a principal plataforma de referência para empreendedores e para quem busca conhecimento e serviços especializados, reconhecida pela qualidade de sua rede de profissionais e pela relevância de seus conteúdos.
        </p>
      </section>
    </div>
  );
};

export default About;

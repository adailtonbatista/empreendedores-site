import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Entrepreneurs from './components/Entrepreneurs';
import Content from './components/Content';
import Schedule from './components/Schedule';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/empreendedores" element={<Entrepreneurs />} />
          <Route path="/conteudo" element={<Content />} />
          <Route path="/agenda" element={<Schedule />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

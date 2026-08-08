import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Diferenciais from './components/Diferenciais';
import Processo from './components/Processo';
import Projetos from './components/Projetos';
import CtaBanner from './components/CtaBanner';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Diferenciais />
        <Processo />
        <Projetos />
        <CtaBanner />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

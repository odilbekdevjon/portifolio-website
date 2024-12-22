import './App.css';

// components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        <Skill/>
        <Work/>
        <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App;

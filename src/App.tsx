import { useState, useCallback } from 'react';
import './index.css';
import './App.css';
import useScrollReveal from './hooks/useScrollReveal';

import SplashScreen from './components/SplashScreen/SplashScreen';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Committees from './components/Committees/Committees';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useScrollReveal();

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <div className="app">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Committees />
        <Events />
        <Footer />
      </main>
    </div>
  );
}

export default App;

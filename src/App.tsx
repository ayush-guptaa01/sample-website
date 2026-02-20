import { useState, useCallback } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import './App.css';
import useScrollReveal from './hooks/useScrollReveal';

import SplashScreen from './components/SplashScreen/SplashScreen';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PageTransition from './components/PageTransition';

// Pages
import HomePage from './pages/HomePage';
import CommitteesPage from './pages/CommitteesPage';
import CommitteeDetailPage from './pages/CommitteeDetailPage';
import EventsPage from './pages/EventsPage';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/committees" element={<PageTransition><CommitteesPage /></PageTransition>} />
        <Route path="/committees/:id" element={<PageTransition><CommitteeDetailPage /></PageTransition>} />
        <Route path="/events" element={<PageTransition><EventsPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useScrollReveal();

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <HashRouter>
      <div className="app">
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        <ParticleBackground />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

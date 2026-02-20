import { useState, useCallback } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import useScrollReveal from './hooks/useScrollReveal';

import SplashScreen from './components/SplashScreen/SplashScreen';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import HomePage from './pages/HomePage';
import CommitteesPage from './pages/CommitteesPage';
import CommitteeDetailPage from './pages/CommitteeDetailPage';
import EventsPage from './pages/EventsPage';

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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/committees" element={<CommitteesPage />} />
            <Route path="/committees/:id" element={<CommitteeDetailPage />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

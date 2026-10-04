import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Curriculum from './components/Curriculum';
import Instructors from './components/Instructors';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Confetti from './components/Confetti';

function App() {
  // Read initial completion state from localStorage
  const [completedDays, setCompletedDays] = useState(() => {
    try {
      const saved = localStorage.getItem('yogaCompletedDays');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Failed to parse yogaCompletedDays from localStorage:", e);
    }
    return [];
  });

  const [trailerOpen, setTrailerOpen] = useState(false);

  // Sync state to localStorage on changes
  useEffect(() => {
    localStorage.setItem('yogaCompletedDays', JSON.stringify(completedDays));
  }, [completedDays]);

  const handleToggleDay = (day) => {
    setCompletedDays((prev) => {
      if (prev.includes(day)) {
        return prev.filter(d => d !== day);
      } else {
        const next = [...prev, day];
        return next.sort((a, b) => a - b);
      }
    });
  };

  const handleResetProgress = () => {
    setCompletedDays([]);
  };

  return (
    <>
      {/* Sticky Header */}
      <Header completedDays={completedDays} onReset={handleResetProgress} />

      {/* Main Sections */}
      <main>
        <Hero completedDays={completedDays} onOpenTrailer={() => setTrailerOpen(true)} />
        <Overview />
        <Curriculum completedDays={completedDays} onToggleDay={handleToggleDay} />
        <Instructors />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Overlay Canvas Confetti */}
      <Confetti />

      {/* Video Preview Modal */}
      {trailerOpen && (
        <div className="modal-overlay open" onClick={() => setTrailerOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setTrailerOpen(false)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="video-placeholder">
              <svg className="play-huge" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 3 20 12 6 21 6 3"/>
              </svg>
              <p>Course Preview Trailer (Ambient Music & Alignment Intro)</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

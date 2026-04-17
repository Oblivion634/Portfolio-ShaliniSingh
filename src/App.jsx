import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from "./components/ScrollToTop"
import { LoadingScreen } from './components/LoadingScreen';
import { CursorGlow } from './components/CursorGlow';
import "../src/styles/portfolio.css"
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
        <CursorGlow />
        <Navigation />
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        <ScrollToTop />
      </div>
    </>
  );
}
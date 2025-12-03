import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VideoGallery from './components/VideoGallery';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary/30">
      <Header />
      <main>
        <Hero />
        <About />
        <VideoGallery />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;

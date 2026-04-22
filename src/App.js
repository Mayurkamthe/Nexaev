import { useState } from 'react';
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import Models        from './components/Models';
import Compare       from './components/Compare';
import Features      from './components/Features';
import Finance       from './components/Finance';
import WhyUs         from './components/WhyUs';
import Dealers       from './components/Dealers';
import Testimonials  from './components/Testimonials';
import Contact       from './components/Contact';
import Footer        from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import FloatingCTA   from './components/FloatingCTA';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-ev-dark">
        <ScrollProgress />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <Models />
          <Compare />
          <Features />
          <Finance />
          <WhyUs />
          <Dealers />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
}

export default App;

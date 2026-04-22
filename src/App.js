import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Models from './components/Models';
import Features from './components/Features';
import Finance from './components/Finance';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-ev-dark">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <Models />
          <Features />
          <Finance />
          <WhyUs />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

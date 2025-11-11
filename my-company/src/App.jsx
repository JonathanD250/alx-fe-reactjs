import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  // Style for the main content area to add padding
  const contentStyle = {
    padding: '20px'
  };

  return (
    <div>
      {/* 1. The Navbar appears on every page */}
      <Navbar />
      
      {/* 2. Define the routes. The contentStyle will apply to the page content */}
      <div style={contentStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
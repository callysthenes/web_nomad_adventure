import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import TourDetail from './pages/TourDetail';
import Contact from './components/Contact';
import './styles/sections.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Portfolio />} />
          <Route path="/tours/:id" element={<TourDetail />} />
          <Route path="/contact" element={<div className="page-offset"><Contact /></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

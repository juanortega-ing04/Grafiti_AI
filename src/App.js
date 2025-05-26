import './App.css';
import Navbar from './components/Navbar';
import './Styles/colors.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './pages/gallery';
import Generator from './pages/generator';
import Contact from './pages/contact';
import Home from './pages/home';

function App() {
  return (
    <Router>
    <Navbar />
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;

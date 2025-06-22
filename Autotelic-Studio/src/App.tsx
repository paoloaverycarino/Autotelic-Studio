import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Photo from './pages/Photo';
import Shortform from './pages/ShortformPage';
import Longform from './pages/LongformPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/shortform" element={<Shortform />} />
          <Route path="/longform" element={<Longform />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


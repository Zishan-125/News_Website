import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Newsapp from './Components/Newsapp';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Newsapp />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

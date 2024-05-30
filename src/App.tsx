import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Tictactoe } from './pages/Tictactoe.tsx';

function App() {
  return (
    <div className="App m-0 p-0">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/tictactoe" element={<Tictactoe />} />
            <Route path="/Contact" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

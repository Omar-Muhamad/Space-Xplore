import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/missions" element={<About />} />
        <Route path="/profile" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

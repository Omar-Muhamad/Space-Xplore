import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Rockets from './Components/Rockets';
import Missions from './Components/Missions';
import Profile from './Components/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

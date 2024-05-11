import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Chat from './components/Chat';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>


    </div>
  );
}

export default App;

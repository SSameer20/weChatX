import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Chat from './components/Chat';
import Home from './components/Home';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<Error code={404} />} />
          </Routes>


    </div>
  );
}

export default App;

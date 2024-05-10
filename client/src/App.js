import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <header>Project Title</header>
      <div id="content">
        <aside id="contacts">
          <Routes>
            <Route path="/" element={<Chat />} />
          </Routes>

        </aside>

        <aside id="chat">
          {/* <Routes> */}

          {/* <Route path="/" element={<Chat />}/>
            <Route path="/sameer" element={<Chat name="Sameer" />}/>
            <Route path="/khadeer" element={<Chat name="Khadeer" />}/>
            <Route path="/Pranay" element={<Chat name="Pranay" />}/> */}
          {/* </Routes> */}
        </aside>
      </div>

    </div>
  );
}

export default App;

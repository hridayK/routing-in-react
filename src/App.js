import './App.css';
import Home from './Components/Home/Home';
import Tasks from './Components/Tasks/Tasks';
import About from './Components/About/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/tasks' element={<Tasks />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

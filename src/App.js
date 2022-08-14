import * as React from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import Home from "./pages/home";
import './App.css'
import List from './pages/list';
import Pokemon from './pages/pokemon';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/list/:filter' element={<List/>}/>
        <Route path='/pokemon/:id' element={<Pokemon/>}/>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Read from './components/Read';
import Forms from './components/Forms';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar title={"bachar iccha nai"}/>
    <Routes>
    <Route path = "/" element =<Forms/>></Route>
    <Route path ="/read" element =<Read/>></Route>
    </Routes>
    
   
    
    </>
  );
}

export default App;

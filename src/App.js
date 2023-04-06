import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import injectContext from './app/ContextStore/appContext';
import { Home } from './Pages/Home/Home.jsx';
import  Navbar  from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App) ;

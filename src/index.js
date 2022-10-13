import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Projetos from './components/pages/MeusProjetos/Projetos';
import Sobre from './components/pages/Sobre/Sobre';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path = '/' element={ <App />} />
      <Route exact path = '/projetos' element={ <Projetos />} />
      <Route exact path = '/sobre' element={ <Sobre />} />
    </Routes>
   
  </BrowserRouter>
);


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Registrar } from './Registro/Registrar';
import { Consultar } from './ConsultaRegistro/Consultar';

function App() {
  return (
    <div className="App">
      <div className='contenido'>
        <Router>
          <Routes>
            <Route path='/Registro' element={<Registrar />} />
            <Route path='/ConsultaRegistro' element={<Consultar />} />
            <Route path="*" element={<div className='cont-not-found'><h2>Error:404</h2><h2>página no encontrada</h2></div>} />
          </Routes>
        </Router>        
      </div>
    </div>
  );
}

export default App;

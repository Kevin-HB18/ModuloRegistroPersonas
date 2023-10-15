import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import { Registrar } from './Registro/Registrar';
import { Consultar } from './ConsultaRegistro/Consultar';
import { Header } from './Header/Header';
function App() {
  return (
    <div className="App">      
      <Router>
        <Header/>
        <div className='contenido'>
          <Routes>
            <Route path="/" element={<Navigate to="/Registro" />} /> {/* Ruta raíz */}
            <Route path='/Registro' element={<Registrar />} />
            <Route path='/ConsultaRegistro' element={<Consultar />} />
            <Route path="*" element={<div className='cont-not-found'><h2>Error:404</h2><h2>página no encontrada</h2></div>} />
          </Routes>
        </div>
      </Router>     
    </div>
  );
}

export default App;

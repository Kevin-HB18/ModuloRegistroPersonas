import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Importa el archivo CSS

export function Header(){

  return (
    <header className="header"> {/* Aplica la clase 'header' */}
      <nav>
        <ul className="nav"> {/* Aplica la clase 'nav' */}
          <li className="list-item"> {/* Aplica la clase 'list-item' */}
            <Link to="/Registro" className="link"> {/* Aplica la clase 'link' */}
              Registrar
            </Link>
          </li>
          <li className="list-item"> {/* Aplica la clase 'list-item' */}
            <Link to="/ConsultaRegistro" className="link"> {/* Aplica la clase 'link' */}
              Consultar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};




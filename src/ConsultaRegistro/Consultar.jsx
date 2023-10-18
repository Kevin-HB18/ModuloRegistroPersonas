import React, { useState, useEffect, useCallback} from "react";
import './consultar.css';
import axios from "axios";
export function Consultar() {

  const [data, setData] = useState([
    {
      DESCTIPODOC: "",
      NDOCUMENTO: "",
      NOMBRE: "",
      APELLIDO: "",
      DIRECCION: "",
      CORREO: "",
      CELULAR: ""
  }
  ]);

  
    /*const data = [
    {
        tipoDocumento: 'DNI',
        numeroDocumento: '123456789012',
        nombre: 'DoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoe',
        apellidos: 'DoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoe',
        direccion: 'DoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoe',
        correo: 'john.doe@example.com',
        celular: '555-123-4567',
        },
        {
        tipoDocumento: 'Pasaporte',
        numeroDocumento: '987654321012',
        nombre: 'Jane',
        apellidos: 'Smith',
        direccion: '456 Elm St',
        correo: 'jane.smith@example.com',
        celular: '555-987-6543',
        },
        {
        tipoDocumento: 'Cédula',
        numeroDocumento: '111222333444',
        nombre: 'María',
        apellidos: 'López',
        direccion: '789 Oak St',
        correo: 'maria.lopez@example.com',
        celular: '555-333-1111',
        },
        // Agrega más datos si es necesario
      ];*/

      useEffect(() => {
        const table = document.getElementById('excel-table');
        table.addEventListener('scroll', (e) => {
          const scrollLeft = e.target.scrollLeft;
          const thElements = document.querySelectorAll('#excel-table th');
          for (let th of thElements) {
            th.style.transform = `translateX(-${scrollLeft}px)`;
          }
        });
      }, []);
    
      const handleConsultClick = async () => {
        try {
          const response = await axios.get("http://localhost:3001/api/obtenerDatos"); // Reemplaza '/api/obtenerDatos' con la URL de tu AP          
              // Actualiza el estado 'datos' con los datos obtenidos
          setData(response.data);
          console.log(data)
        } catch (error) {
          console.error("Error al obtener los datos", error);
        }
      };

      return (
        <div className="contenedor-consultar"> 
          <h1>Información de las Personas</h1>
          <button className="consult-button" onClick={handleConsultClick}>
            Consultar
          </button>
          <div className="table-container">
            <table id="excel-table">
              <thead>
                <tr>
                  <th>Tipo de Documento</th>
                  <th>Número de Documento</th>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Dirección</th>
                  <th>Correo</th>
                  <th>Celular</th>
                </tr>
              </thead>
              <tbody>
                {data.map((person, index) => (
                  <tr key={index}>
                    <td>{person.DESCTIPODOC}</td>
                    <td>{person.NDOCUMENTO}</td>
                    <td>{person.NOMBRE}</td>
                    <td>{person.APELLIDO}</td>
                    <td>{person.DIRECCION}</td>
                    <td>{person.CORREO}</td>
                    <td>{person.CELULAR}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

}

import React, { useState, useEffect, useCallback} from "react";
import './consultar.css';

export function Consultar() {

    const data = [
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
      ];

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
    
      const handleConsultClick = () => {
        // Aquí puedes agregar la lógica para manejar la consulta
        alert('Consulta realizada');
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
                    <td>{person.tipoDocumento}</td>
                    <td>{person.numeroDocumento}</td>
                    <td>{person.nombre}</td>
                    <td>{person.apellidos}</td>
                    <td>{person.direccion}</td>
                    <td>{person.correo}</td>
                    <td>{person.celular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

}

import React, { useState, useEffect, useCallback} from "react";
import './registrar.css';
import axios from "axios";

export function Registrar() {
    const [formData, setFormData] = useState({
        IDTIPODOC: '',
        NDOCUMENTO: '',
        NOMBRE: '',
        APELLIDO: '',
        DIRECCION: '',
        CORREO: '',
        CELULAR: '',
      });
    const [tiposDocumento, setTiposDocumento] = useState([]);

    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value,
    });
    };

    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await axios.get("http://localhost:3001/api/obtenerTipo");
        setTiposDocumento(response.data);
        } catch (error) {
        console.error("Error al obtener los tipos de documentos", error);
        }
    };

    fetchData(); // Llama a la función asincrónica para obtener los datos

    }, []);

    const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    await axios.post('http://localhost:3001/api/insertarPersona', formData)
        .then(response => {
        console.log('Registro enviado con éxito:', response.data);
        })
        .catch(error => {
        console.error('Error al enviar el registro:', error);
        });
    };

    return (
    <div class="contenedor-registrar">       
        <h1>Registro de Persona</h1>
        <br />
        <form class="formulario-registrar" onSubmit={handleSubmit}>
        <div>
            <label>Tipo de Documento:</label>
            <select name="IDTIPODOC" value={formData.IDTIPODOC} onChange={handleChange} required>
                <option value="">Seleccione</option>
                {tiposDocumento.map((tipo) => (
                <option key={tipo.IDTIPODOC} value={tipo.IDTIPODOC}>
                    {tipo.DESCTIPODOC}
                </option>
                ))}
            </select>
        </div>
        <div>
            <label>Número de Documento:</label>
            <input type="text" name="NDOCUMENTO" value={formData.NDOCUMENTO} onChange={handleChange} />
        </div>
        <div>
            <label>Nombre:</label>
            <input type="text" name="NOMBRE" value={formData.NOMBRE} onChange={handleChange} />
        </div>
        <div>
            <label>Apellido:</label>
            <input type="text" name="APELLIDO" value={formData.APELLIDO} onChange={handleChange} />
        </div>
        <div>
            <label>Dirección:</label>
            <input type="text" name="DIRECCION" value={formData.DIRECCION} onChange={handleChange} />
        </div>
        <div>
            <label>Correo:</label>
            <input type="text" name="CORREO" value={formData.CORREO} onChange={handleChange} />
        </div>
        <div>
            <label>Celular:</label>
            <input type="text" name="CELULAR" value={formData.CELULAR} onChange={handleChange} />
        </div>
        <button type="submit">Registrar</button>
        </form>
    </div>
    );
}
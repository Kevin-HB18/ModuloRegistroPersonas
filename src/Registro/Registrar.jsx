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
    const [errors, setErrors] = useState({});
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
    
    const newErrors = {};

    if (!/^\d{1,12}$/.test(formData.NDOCUMENTO)) {
        newErrors.NDOCUMENTO = 'El número de documento debe tener 12 caracteres numéricos.';
    }
    
    if (!/^[a-zA-Z0-9 ]{1,30}$/.test(formData.NOMBRE)) {
        newErrors.NOMBRE = 'El nombre no debe tener más de 30 caracteres y solo debe contener letras y números.';
    }
    
    if (!/^[a-zA-Z0-9 ]{1,30}$/.test(formData.APELLIDO)) {
        newErrors.APELLIDO = 'Los apellidos no deben tener más de 30 caracteres y solo deben contener letras y números.';
    }
    
    if (formData.DIRECCION.length > 30) {
        newErrors.DIRECCION = 'La dirección no debe tener más de 30 caracteres.';
    }
    
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.CORREO)) {
        newErrors.CORREO = 'El correo no tiene un formato válido (ejemplo@ejemplo.com).';
    }
    
    if (!/^[+]*\d{1,15}$/.test(formData.CELULAR)) {
        newErrors.CELULAR = 'El celular solo debe contener números y no debe tener más de 15 dígitos.';
    }
    
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
        await axios.post('http://localhost:3001/api/insertarPersona', formData)
        .then(response => {
        console.log('Registro enviado con éxito:', response.data);
        })
        .catch(error => {
        console.error('Error al enviar el registro:', error);
        });
    }    
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
            {errors.NDOCUMENTO && <span>{errors.NDOCUMENTO}</span>}
        </div>
        <div>
            <label>Nombre:</label>
            <input type="text" name="NOMBRE" value={formData.NOMBRE} onChange={handleChange} />
            {errors.NOMBRE && <span>{errors.NOMBRE}</span>}
        </div>
        <div>
            <label>Apellido:</label>
            <input type="text" name="APELLIDO" value={formData.APELLIDO} onChange={handleChange} />
            {errors.APELLIDO && <span>{errors.APELLIDO}</span>}
        </div>
        <div>
            <label>Dirección:</label>
            <input type="text" name="DIRECCION" value={formData.DIRECCION} onChange={handleChange} />
            {errors.DIRECCION && <span>{errors.DIRECCION}</span>}
        </div>
        <div>
            <label>Correo:</label>
            <input type="text" name="CORREO" value={formData.CORREO} onChange={handleChange} />
            {errors.CORREO && <span>{errors.CORREO}</span>}
        </div>
        <div>
            <label>Celular:</label>
            <input type="text" name="CELULAR" value={formData.CELULAR} onChange={handleChange} />
            {errors.CELULAR && <span>{errors.CELULAR}</span>}
        </div>
        <button type="submit">Registrar</button>
        </form>
    </div>
    );
}
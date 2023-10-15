import React, { useState, useEffect, useCallback} from "react";
import './registrar.css';

export function Registrar() {
const [formData, setFormData] = useState({
    tipoDocumento: '',
    numeroDocumento: '',
    nombre: '',
    apellidos: '',
    direccion: '',
    correo: '',
    celular: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.numeroDocumento.length > 12) {
        newErrors.numeroDocumento = 'El número de documento debe tener 12 caracteres.';
    }

    if (formData.nombre.length > 30) {
        newErrors.nombre = 'El nombre no debe tener más de 30 caracteres.';
    }

    if (formData.apellidos.length > 30) {
        newErrors.apellidos = 'Los apellidos no deben tener más de 30 caracteres.';
    }

    if (formData.direccion.length > 30) {
        newErrors.direccion = 'La dirección no debe tener más de 30 caracteres.';
    }

    if (formData.correo.length > 50) {
        newErrors.correo = 'El correo no debe tener más de 50 caracteres.';
    }

    if (formData.celular.length > 15) {
        newErrors.celular = 'El celular no debe tener más de 15 caracteres.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
        console.log('Datos enviados:', formData);
    }
    };

    return (
    <div class="contenedor-registrar">
        <h1>Registro de Persona</h1>
        <br />
        <form class="formulario-registrar" onSubmit={handleSubmit}>
        <div>
            <label>Tipo de Documento:</label>
            <select name="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange} required>
            <option value="">Seleccione</option>
            <option value="DNI">DNI</option>
            <option value="Pasaporte">Pasaporte</option>
            <option value="Cédula">Cédula</option>
            </select>
        </div>
        <div>
            <label>Número de Documento:</label>
            <input type="text" name="numeroDocumento" value={formData.numeroDocumento} onChange={handleChange} />
            {errors.numeroDocumento && <span>{errors.numeroDocumento}</span>}
        </div>
        <div>
            <label>Nombre:</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
            {errors.nombre && <span>{errors.nombre}</span>}
        </div>
        <div>
            <label>Apellidos:</label>
            <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} />
            {errors.apellidos && <span>{errors.apellidos}</span>}
        </div>
        <div>
            <label>Dirección:</label>
            <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} />
            {errors.direccion && <span>{errors.direccion}</span>}
        </div>
        <div>
            <label>Correo:</label>
            <input type="text" name="correo" value={formData.correo} onChange={handleChange} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"/>
            {errors.correo && <span>{errors.correo}</span>}
        </div>
        <div>
            <label>Celular:</label>
            <input type="text" name="celular" value={formData.celular} onChange={handleChange} />
            {errors.celular && <span>{errors.celular}</span>}
        </div>
        <button type="submit">Registrar</button>
        </form>
    </div>
    );
}

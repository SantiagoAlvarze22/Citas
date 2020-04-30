import React, { Fragment, useState } from 'react';
import { uuid } from 'uuidv4';
import Proptypes from 'prop-types';

const Formulario = ({ crearCita }) => {

    //Crear state de citas 
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, setError] = useState(false)

    //Funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    //Extraer valores 
    const { mascota, propietario, fecha, hora, sintomas } = cita

    //Cuando el usuario presiona agregar cita o enviar formulario 
    const submitCita = e => {
        e.preventDefault();

        //cuando sse envian formularios lo primero que se debe realizar es validar 
        //Validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setError(true)
            return;
        }
        //Eliminar el mensaje previo
        setError(false);

        //asignar un ID
        cita.id = uuid();

        //crear la cita 
        crearCita(cita)

        //Reiniciar el form
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }


    return (
        <Fragment>
            <h2>Crer cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    )
}

Formulario.propTypes = {
    crearCita: Proptypes.func.isRequired
}

export default Formulario;
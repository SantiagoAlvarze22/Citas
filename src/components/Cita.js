import React from 'react';
import Proptypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => {

    const { id, mascota, propietarios, fecha, hora, sintomas } = cita;

    return (
        <div className="cita">
            <p>Mascota:<span>{mascota}</span></p>
            <p>Dueño:<span>{propietarios}</span></p>
            <p>Fecha:<span>{fecha}</span></p>
            <p>Hora:<span>{hora}</span></p>
            <p>sintomas:<span>{sintomas}</span></p>

            <button
                className="button eliminar u-full-width"
                onClick={() => eliminarCita(id)}
            >Eliminar &times;</button>
        </div>
    )
}

Cita.propTypes = {
    cita: Proptypes.object.isRequired,
    eliminarCita: Proptypes.func.isRequired
}

export default Cita;
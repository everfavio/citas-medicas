import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';

const Formulario = ({ crearCita }) => {
  // crear State de citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  })

  const [ error, actualizarError ] = useState(false)

  // funcion que se ejecuta cada que el usuario escribe
  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  const {
    mascota, propietario, fecha, hora, sintomas
  } = cita

  const submitCita = (e) => {
    e.preventDefault();

    // validar
    if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      actualizarError(true);
      return;
    }

    actualizarError(false);

    // asignar un ID
    cita.id= uuid();
    // crear la cita
    crearCita(cita);
    // reiniciar el form
    actualizarCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: '',
    })
  }

  return (
    <Fragment>
      <div>
        <h2>Crear cita</h2>
        { error ? <p className="alerta-error"> Todos los campos son obligatorios</p> : null}
        <form onSubmit={submitCita} >
          <label htmlFor="">Nombre Mascota</label>
          <input
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Nombre Mascota"
            onChange={actualizarState}
            value={mascota}
          />
          <label htmlFor="">Nombre Dueño</label>
          <input
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre dueño"
            onChange={actualizarState}
            value={propietario}
          />
          <label htmlFor="">Fecha</label>
          <input
            type="date"
            name="fecha"
            className="u-full-width"
            placeholder="Nombre Mascota"
            onChange={actualizarState}
            value={fecha}
          />
          <label htmlFor="">Hora</label>
          <input
            type="time"
            name="hora"
            className="u-full-width"
            placeholder="Nombre Mascota"
            onChange={actualizarState}
            value={hora}
          />
          <label htmlFor="">Síntomas</label>
          <textarea
          name="sintomas"
          id=""
          cols="30"
          rows="10"
          onChange={actualizarState}
          value={sintomas}
          className="u-full-width">
          </textarea>
          <button
            type="submit"
            className="u-full-width button-primary"
          >Agregar cita</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Formulario;
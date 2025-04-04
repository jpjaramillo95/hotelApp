import React from 'react'

export default function Menu() {
  return (
  //  <!-- Navigation Bar -->
    <div className="w3-bar w3-white w3-large">
        <a href="#" className="w3-bar-item w3-button w3-red w3-mobile"><i className="fa fa-bed w3-margin-right"></i>Inicio</a>
        <a href="#rooms" className="w3-bar-item w3-button w3-mobile">Habitaciones</a>
        <a href="#about" className="w3-bar-item w3-button w3-mobile">Sobre Nosotros</a>
        <a href="#contact" className="w3-bar-item w3-button w3-mobile">Contacto</a>
        <a href="#contact" className="w3-bar-item w3-button w3-right w3-light-grey w3-mobile">Reserva Ahora</a>
    </div>
  )
}

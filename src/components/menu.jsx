import { Link } from "react-router-dom"

export default function Menu() {
  return (
  //  <!-- Navigation Bar -->
    <div className="w3-bar w3-white w3-large">
        <Link to="/" className="w3-bar-item w3-button w3-red w3-mobile"><i className="fa fa-bed w3-margin-right"></i>Inicio</Link>
        <Link to="/Rooms" className="w3-bar-item w3-button w3-mobile">Habitaciones</Link>
        <Link to="/About" className="w3-bar-item w3-button w3-mobile">Sobre Nosotros</Link>
        <Link to="/Contact" className="w3-bar-item w3-button w3-mobile">Contacto</Link>
        <Link to="/Contact" className="w3-bar-item w3-button w3-right w3-light-grey w3-mobile">Reserva Ahora</Link>
    </div>
  )
}

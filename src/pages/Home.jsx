import Menu from "../components/menu"
import Banner from "../components/banner"
import Habitaciones from "../components/habitaciones"
import About from "../components/about"
import OursHotels from "../components/oursHotels"
import Contacto from "../components/contacto"
import Footer from "../components/footer"

export default function Home() {
  return (
    <>
    <Menu />
    <Banner />
    <div class="w3-content" style={{"max-width":"1532px"}}>
      <Habitaciones />
      <About />
      <OursHotels />
      <Contacto />   
    </div>
    <Footer />
    </>
  )
}

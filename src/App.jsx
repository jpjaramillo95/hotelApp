import Menu from "./components/menu"
import About from "./components/about"
import Banner from "./components/banner"
import Contacto from "./components/contacto"
import Footer from "./components/footer"
import Habitaciones from "./components/habitaciones"
import OursHotels from "./components/oursHotels"

function App() {
  return (
    <>
    <Menu />
    <Banner />
    <div class="w3-content" style="max-width:1532px;">
      <Habitaciones />
      <About />
      <OursHotels />
      <Contacto />   
    </div>
    <Footer />
    </>
  )
}

export default App

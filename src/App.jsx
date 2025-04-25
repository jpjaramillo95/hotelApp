import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/about"
import Rooms from "./pages/Rooms"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Rooms" element={<Rooms/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App

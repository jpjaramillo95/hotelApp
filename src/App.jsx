import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import NotFoundPage from "./pages/NotFoundPage"
import RoomsPage from "./pages/RoomsPage"
import RoomDetailsPage from "./pages/RoomDetailsPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Rooms" element={<RoomsPage />} />
        <Route path="/Rooms/:id" element={<RoomDetailsPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App

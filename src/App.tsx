import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import ContactModal from "./components/ContactModal"
import StarField from "./components/StarField"
import { ModalProvider } from "./context/ModalContext"
import Hero from "./components/Hero"
import AIExcellence from "./components/AIExcellence"
import GroundedSection from "./components/GroundedSection"
import HalifaxSkyline from "./components/HalifaxSkyline"
import ResumePage from "./pages/ResumePage"

function Layout() {
  return (
    <>
      <StarField fixed />
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
      <ContactModal />
    </>
  )
}

function Home() {
  return (
    <div className="font-display">
      <main>
        <Hero />
        <AIExcellence />
        <GroundedSection />
        <HalifaxSkyline />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <ModalProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ModalProvider>
  )
}

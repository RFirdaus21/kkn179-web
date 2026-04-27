import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Members from './pages/members'
import Navbar from './components/Navbar'
import Gallery from './pages/gallery'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-16 md:pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App

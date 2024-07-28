import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx'
import AboutUs from './pages/About/AboutUs.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index path='/' element={<Home />}></Route>
        <Route index path='/contact' element={<Contact />}></Route>
        <Route index path='/about' element={<AboutUs />}></Route>
        <Route index path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App

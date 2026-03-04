import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Programs from '../components/Programs'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Careers from '../components/Careers'
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Programs" element={<Programs/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path='/careers' element={<Careers/>}/>
    </Routes>
  )
}

export default Router
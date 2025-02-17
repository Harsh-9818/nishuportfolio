import './App.css'
import  {Routes, Route } from "react-router-dom";
import About from './pages/About'
import TechStack from './pages/Tech stack'
import Contact from './pages/Contact'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Header';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/techstack' element={<TechStack/>}/>
         <Route path='/projects' element={<Projects/>}/>
         <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default App

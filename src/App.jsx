import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Members from './pages/Members';
import Recruitment from './pages/Recruitment';
import Signin from './pages/Signin';
import Credits from './pages/Credits';
import About from './pages/About';
import Achievementss from './pages/Achievements';
import Admin from './pages/Admin';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/members' element={<Members/>} />
        <Route path='/recruitment' element={<Recruitment/>} />
        <Route path='/Credits' element={<Credits />} />
        <Route path='/achievements' element={<Achievementss />} />
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/signin' element={<Signin/>} />
          
      </Routes>
      <Contact />
      </Router>
    </div>
  )
}

export default App

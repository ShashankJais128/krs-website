import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import Members from './components/Members';
import Recruitment from './components/Recruitment';
import Signin from './components/Signin';
import Credits from './components/Credits';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/members' element={<Members/>} />
        <Route path='/recruitment' element={<Recruitment/>} />
        <Route path='/Credits' element={<Credits />} />
        <Route path='/achievements' element={<Recruitment/>} />
        <Route path='/signin' element={<Signin/>} />
          
      </Routes>
      <Contact />
      </Router>
    </div>
  )
}

export default App

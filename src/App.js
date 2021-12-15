import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/services' exact element={<Services />} />
        <Route path='/signin' exact element={<SignIn />} />
        <Route path='/signup' exact element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

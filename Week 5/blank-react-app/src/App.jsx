import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Users from './pages/Users';

function App() {
  return (
    <div>
      <Router>
          <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/users/:id' element={<Users />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

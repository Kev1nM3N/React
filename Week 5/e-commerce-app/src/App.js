import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from './data';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home books={books}/>}/>
          <Route path='/books' element={<Books />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

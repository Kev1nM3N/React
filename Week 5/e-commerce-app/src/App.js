import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import { books } from './data';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/books' element={<Books books={books}/>}/>
          <Route path='/books/:id' element={<BookInfo books={books}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

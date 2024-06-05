import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import { books } from './data';
import Cart from './pages/Cart';
import { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity (book, quantity) {
    setCart(cart.map(item => {
        if (item.id === book.id){
          return {
            ...item, 
            quantity: +quantity,
          }
        }
        else {
          return item
        }
    }))
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
      console.log(`remove item`, item);
  }

  function numberOfItems(params) {
      let counter = 0
      cart.forEach(item => {
        counter += item.quantity
      })
      return counter
  }

  useEffect(() => {
    console.log(cart);
  }, [cart])

  return (
    <Router>
      <div>
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/books' element={<Books books={books}/>}/>
          <Route path='/books/:id' element={<BookInfo addToCart={addToCart} cart={cart} books={books}/>} />
          <Route path='/cart' element={<Cart removeItem={removeItem} cart={cart} books={books} changeQuantity={changeQuantity}/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

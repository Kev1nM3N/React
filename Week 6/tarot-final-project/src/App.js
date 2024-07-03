import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Card from "./components/Card";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <section>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path=":id" element={<Card />}/>
          <Route path="/main" element={<Main />}/>
        </Routes>
      </section>
    </Router>
  );
}

export default App;

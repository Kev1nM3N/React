import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Card from "./components/Card";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path=":id" element={<Card />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

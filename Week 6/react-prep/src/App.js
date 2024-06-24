import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; //didn't need brackets
import Posts from "./pages/Posts";
//12:20

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path=":id" element={<Posts />}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;

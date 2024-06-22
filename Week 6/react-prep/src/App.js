import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//7:47

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/"></Route>
            <Route path=":id"></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;

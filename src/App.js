import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/articles" element={<Articles />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;

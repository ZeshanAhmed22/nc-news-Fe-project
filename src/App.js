import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<SingleArticle />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/:slug" element={<Articles />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;

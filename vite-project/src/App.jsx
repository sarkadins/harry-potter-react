import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import SpellsPage from "./pages/SpellsPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/spells" element={<SpellsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import SpellsPage from "./pages/SpellsPage";
import CharacterDetails from "./components/CharacterDetails"
import "./index.css"

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:house" element={<CharactersPage />} />
          <Route path="/spells" element={<SpellsPage />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


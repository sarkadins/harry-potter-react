import { useEffect, useState } from "react"
import SpellList from "../components/SpellList"
import "./SpellsPage.css"

function SpellsPage() {
  const [spells, setSpells] = useState(null)
  const [filteredSpells, setFilteredSpells] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSpellsData = async () => {
      try {
        const response = await fetch('https://hp-api.onrender.com/api/spells');
        const spellsData = await response.json();
        setSpells(spellsData);
        setFilteredSpells(spellsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }
    fetchSpellsData();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = spells.filter((spell) =>
      spell.name.toLowerCase().includes(term)
    );
    setFilteredSpells(filtered);
  };

  return (
    <div className="spells-page">
      {loading ? (
        <main>
          <h4>...Loading</h4>
        </main>
      ) : (
        <main>
          <h1>Spells</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for a spell..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-bar"
            />
          </div>
          <SpellList spells={filteredSpells} />
        </main>
      )}
    </div>
  );
}

export default SpellsPage
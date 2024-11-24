import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterList from "../components/CharacterList";
import HouseSelector from "../components/HouseSelector";
import "./CharactersPage.css";

function CharactersPage() {
  const { house: routeHouse } = useParams();
  const [allCharacters, setAllCharacters] = useState([]);
  const [characters, setCharacters] = useState([]); 
  const [filteredCharacters, setFilteredCharacters] = useState([]); 
  const [house, setHouse] = useState(routeHouse || "");
  const [searchTerm, setSearchTerm] = useState("");
  const [backgroundClass, setBackgroundClass] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const backgroundMapping = {
      default: "background-default",
      gryffindor: "background-gryffindor",
      slytherin: "background-slytherin",
      hufflepuff: "background-hufflepuff",
      ravenclaw: "background-ravenclaw",
    };
    setBackgroundClass(backgroundMapping[house] || "background-default");
  }, [house]);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://hp-api.onrender.com/api/characters");
        const data = await response.json();
        setAllCharacters(data); 
        setCharacters(data); 
        setFilteredCharacters(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllCharacters();
  }, []);

  useEffect(() => {
    if (house) {
      const houseFiltered = allCharacters.filter(
        (character) => character.house && character.house.toLowerCase() === house.toLowerCase()
      );
      setCharacters(houseFiltered); 
      setFilteredCharacters(
        houseFiltered.filter((char) =>
          char.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      ); 
    } else {
      setCharacters(allCharacters); 
      setFilteredCharacters(
        allCharacters.filter((char) =>
          char.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [house, allCharacters, searchTerm]);

  const handleHouseChange = (selectedHouse) => {
    setHouse(selectedHouse);
    setSearchTerm(""); 
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredCharacters(
      characters.filter((character) =>
        character.name.toLowerCase().includes(term)
      )
    );
  };

  return (
    <div className={`characters-page ${backgroundClass}`}>
      {loading ? (
        <main>
          <h4>Loading...</h4>
        </main>
      ) : (
        <main>
          <h1>Characters</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for a character..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-bar"
            />
          </div>
          <HouseSelector onHouseChange={handleHouseChange} />
          <CharacterList characters={filteredCharacters} />
        </main>
      )}
    </div>
  );
}

export default CharactersPage;

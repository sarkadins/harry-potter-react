import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterList from "../components/CharacterList";
import HouseSelector from "../components/HouseSelector";

function CharactersPage() {
  const { house: routeHouse } = useParams(); 
  const [characters, setCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [house, setHouse] = useState(routeHouse || ""); 


  useEffect(() => {
    const fetchAllCharacters = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://hp-api.onrender.com/api/characters");
        const data = await response.json();
        setAllCharacters(data); 
        setCharacters(data);
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
      const filteredCharacters = allCharacters.filter(
        (character) => character.house && character.house.toLowerCase() === house.toLowerCase()
      );
      setCharacters(filteredCharacters);
    } else {
      setCharacters(allCharacters); 
    }
  }, [house, allCharacters]);

  
  const handleHouseChange = (selectedHouse) => {
    setHouse(selectedHouse);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <main>
          <h1>Characters</h1>
          <HouseSelector onHouseChange={handleHouseChange} />
          <CharacterList characters={characters} />
        </main>
      )}
    </div>
  );
}

export default CharactersPage;








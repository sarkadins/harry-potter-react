import { useState, useEffect } from 'react';
import CharacterList from '../components/CharacterList';
import HouseSelector from '../components/HouseSelector';

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [house, setHouse] = useState("");

  useEffect(() => {
    if (!house) {
      setLoading(false)
      return;
    }
    const fetchCharactersData = async () => {
      try {
        const response = await fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
        const charactersData = await response.json()
        setCharacters(charactersData)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchCharactersData()
  }, [house])

  return (
    <div>
      {loading ? (<p>Loading...</p>) : (
        <main>
          <h1>Characters</h1>
          <HouseSelector onHouseChange={setHouse} />
          <CharacterList characters={characters} />
        </main>
      )}
    </div>
  )
}

export default CharactersPage
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import CharacterList from '../components/CharacterList';

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [house, setHouse] = useState("");

  useEffect(() => {
    const fetchCharactersData = async () => {
      try {
        const response = await fetch(`https://hp-api.onrender.com/api/characters/`)
        const charactersData = await response.json()
        setCharacters(charactersData)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchCharactersData()
  }, [])

  return (
    <div>
      {loading ? (<p>Loading...</p>) : (
        <main>
          <h1>Characters</h1>
          <CharacterList characters={characters} />
        </main>
      )}
    </div>
  )
}

export default CharactersPage
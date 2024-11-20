import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterList from '../components/CharacterList';
import HouseSelector from '../components/HouseSelector';

function CharactersPage() {
  const {house} = useParams();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  
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
          <HouseSelector onHouseChange={(house) => {}} />
          <CharacterList characters={characters} />
        </main>
      )}
    </div>
  )
}

export default CharactersPage
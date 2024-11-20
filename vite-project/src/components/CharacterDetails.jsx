import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    console.log("useEffect called with ID:", id);
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
        const characterData = await response.json();
        setCharacter(characterData[0]);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchCharacter();
  }, [id]);

  return (
    <div className="character-details">
      {character ? (
      <>
          <h1>
          {character.name}</h1>
          <p>{character.actor}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CharacterDetails;

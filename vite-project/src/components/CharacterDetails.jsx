import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CharacterDetails.css";

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [backgroundClass, setBackgroundClass] = useState("");

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
        const characterData = await response.json();
        const fetchedCharacter = characterData[0];
        setCharacter(fetchedCharacter);

        const houseBackgroundMapping = {
          gryffindor: "background-gryffindor",
          slytherin: "background-slytherin",
          hufflepuff: "background-hufflepuff",
          ravenclaw: "background-ravenclaw",
        };
        setBackgroundClass(houseBackgroundMapping[fetchedCharacter.house?.toLowerCase()] || "background-default");
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchCharacter();
  }, [id]);

  return (
    <div className={`character-details-container ${backgroundClass}`}>
      <div className="character-details-card">
        {character ? (
          <>
            <img
              src={character.image ? character.image : "/wizard.png"}
              alt={character.name}
              className="character-image"
            />
            <h1>{character.name}</h1>
            {character.alternate_names.length > 0 && (
              <p>
                <strong>Alternate Names:</strong> {character.alternate_names.join(", ")}
              </p>
            )}
            <p><strong>Species:</strong> {character.species}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>House:</strong> {character.house || "No house"}</p>
            <p><strong>Date of Birth:</strong> {character.dateOfBirth || "Unknown"}</p>
            <p><strong>Year of Birth:</strong> {character.yearOfBirth || "Unknown"}</p>
            <p><strong>Wizard:</strong> {character.wizard ? "Yes" : "No"}</p>
            <p><strong>Ancestry:</strong> {character.ancestry || "Unknown"}</p>
            <p><strong>Eye Colour:</strong> {character.eyeColour}</p>
            <p><strong>Hair Colour:</strong> {character.hairColour}</p>
            {character.wand && (
              <p>
                <strong>Wand:</strong> {character.wand.wood}, {character.wand.core}, Length: {character.wand.length || "Unknown"} inches
              </p>
            )}
            <p><strong>Patronus:</strong> {character.patronus || "None"}</p>
            <p><strong>Hogwarts Student:</strong> {character.hogwartsStudent ? "Yes" : "No"}</p>
            <p><strong>Hogwarts Staff:</strong> {character.hogwartsStaff ? "Yes" : "No"}</p>
            <p><strong>Actor:</strong> {character.actor}</p>
            {character.alternate_actors.length > 0 && (
              <p>
                <strong>Alternate Actors:</strong> {character.alternate_actors.join(", ")}
              </p>
            )}
            <p><strong>Alive:</strong> {character.alive ? "Yes" : "No"}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default CharacterDetails;

import { Link } from "react-router-dom";
import "./CharacterList.css"

function CharacterList({ characters }) {
  return (

    <div className="characters">
      <div className="character-grid">
        {characters.map((character, index) => (
          <div key={index} className="character-card">
            <Link to={`/character/${character.id}`}>
              <h2>{character.name}</h2>
              {character && (
                <img
                  src={character.image || "/wizard.png"}
                  alt={character.name}
                  className="character-image"
                />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;

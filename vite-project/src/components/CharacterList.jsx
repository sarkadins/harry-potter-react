import { Link } from "react-router-dom";
import "./CharacterList.css";

function CharacterList({ characters }) {
  return (
    <div className="characters">
      <div className="character-grid">
        {characters.map((character, index) => {
          const houseClass = character.house
            ? `character-card-${character.house.toLowerCase()}`
            : "character-card-default";

          return (
            <div key={index} className={`character-card ${houseClass}`}>
              <Link to={`/character/${character.id}`}>
                <h2>{character.name}</h2>
                <img
                  src={character.image || "/wizard.png"}
                  alt={character.name}
                  className="character-image"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterList;

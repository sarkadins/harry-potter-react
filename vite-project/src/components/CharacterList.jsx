import { Link } from "react-router-dom"

function CharacterList({ characters }) {
  return (
    <div className="characters">
    <ul>
      {characters.map((character, index) => (
        <li key={index}>
          <Link to={`/characters/${character.id}`}>
            {character.name}
          </Link>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default CharacterList
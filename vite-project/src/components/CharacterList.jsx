import { Link } from "react-router-dom"

function CharacterList({ characters }) {
  return (
    <ul>
      {characters.map((character, index) => (
        <li key={index}>
          <Link to={`/characters/${character.id}`}>
            {character.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default CharacterList
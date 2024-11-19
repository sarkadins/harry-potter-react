function CharacterList( {characters }) {
  return (
    <ul>
      {characters.map((character, index) => (
        <>
        <li key={index}>{character.name}</li>
        <img src={character.image} sizes="9*9"/>
        <p key={index}>{character.species}</p>
        <p key={index}>{character.gender}</p>
        </>
      ))}
    </ul>
  )
}

export default CharacterList
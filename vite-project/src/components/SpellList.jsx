function SpellList({ spells }) {
  return (
    <div className="spells">
      {spells && spells.map((spell, index) => (
        <nav key={index}>
          <li >
            {spell.name}
          </li>
          <ul>
            {spell.description}
          </ul>
        </nav>
      ))}
    </div>
  )
}

export default SpellList
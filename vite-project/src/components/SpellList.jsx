import "./SpellList.css"

function SpellList({ spells }) {
  return (
    <div className="spell-grid">
      {spells && spells.map((spell, index) => (
        <nav key={index} className="spell-card">
          <h1 className="spell-name">
            {spell.name}
          </h1>
          <p className="spell-description">
            {spell.description}
          </p>
        </nav>
      ))}
    </div>
  )
}

export default SpellList
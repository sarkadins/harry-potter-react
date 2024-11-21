import { useEffect, useState } from "react"
import SpellList from "../components/SpellList"

function SpellsPage() {
  const [spells, setSpells] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSpellsData = async () => {
      try {
        const response = await fetch('https://hp-api.onrender.com/api/spells');
        const spellsData = await response.json();
        setSpells(spellsData);
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchSpellsData();
    setLoading(false)
  }, [])
  return (
    <div>
      {loading ? (<p>...Loading</p>) : (
        <nav>
          <SpellList spells={spells} />
        </nav>
      )}
    </div>
  )
}

export default SpellsPage
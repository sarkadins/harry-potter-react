function HouseSelector({ onHouseChange }) {
  return (
    <select onChange={(e) => onHouseChange(e.target.value)}>
      <option value="">Select a House</option>
      <option value="gryffindor">Gryffindor</option>
      <option value="slytherin">Slytherin</option>
      <option value="hufflepuff">Hufflepuff</option>
      <option value="ravenclaw">Ravenclaw</option>
    </select>
  );
}

export default HouseSelector
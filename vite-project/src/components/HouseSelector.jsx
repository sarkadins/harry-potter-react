import { useNavigate } from "react-router-dom";
import "./HouseSelector.css"

function HouseSelector({ onHouseChange }) {

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const selectedHouse = e.target.value;
    onHouseChange(selectedHouse);
    if (selectedHouse) {
      navigate(`/characters/${selectedHouse}`); 
    }
  };

  return (
    <select onChange={handleChange}>
      <option value="">Select a House</option>
      <option value="gryffindor">Gryffindor</option>
      <option value="slytherin">Slytherin</option>
      <option value="hufflepuff">Hufflepuff</option>
      <option value="ravenclaw">Ravenclaw</option>
    </select>
  );
}

export default HouseSelector
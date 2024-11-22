import { useNavigate, useLocation } from "react-router-dom";

function HouseSelector({ onHouseChange }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const selectedHouse = e.target.value;

    onHouseChange(selectedHouse);

    if (selectedHouse) {
      navigate(`/characters/${selectedHouse.toLowerCase()}`);
    } else {
      navigate("/characters");
    }
  };

  return (
    <select onChange={handleChange} value={location.pathname.split("/")[2] || ""}>
      <option value="">All Characters</option>
      <option value="gryffindor">Gryffindor</option>
      <option value="slytherin">Slytherin</option>
      <option value="hufflepuff">Hufflepuff</option>
      <option value="ravenclaw">Ravenclaw</option>
    </select>
  );
}

export default HouseSelector;
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="sidebar">
    <h1>Harry Potter App</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/spells">Spells</Link>
    </nav>
  </div>
);

export default Sidebar;

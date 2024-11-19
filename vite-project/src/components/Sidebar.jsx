import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="sidebar">
    <h1>Harry Potter App</h1>
    <nav>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/characters">Characters</Link>
      </p>
      <p>
        <Link to="/spells">Spells</Link>
      </p>
    </nav>
  </div>
);

export default Sidebar;

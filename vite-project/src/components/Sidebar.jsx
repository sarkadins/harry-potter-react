import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css"

const Sidebar = () => {

  const location = useLocation();

  return (
    <div className="sidebar">
      <h1>Harry Potter App</h1>
      <nav>
        <ul>

          {location.pathname !== "/" && (
            <li>
              <Link to="/">Home</Link>
            </li>
          )}
          {!location.pathname.startsWith("/characters/") && location.pathname !== "/characters" && (
            <li>
              <Link to="/characters">Characters</Link>
            </li>
          )}
          {location.pathname !== "/spells" && (
            <li>
              <Link to="/spells">Spells</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
};

export default Sidebar;
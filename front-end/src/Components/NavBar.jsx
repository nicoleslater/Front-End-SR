import { Link } from "react-router-dom";

export default function NavBar() {
    return (
      <nav>
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <button>
          <Link to="/Movie/new">New Movies</Link>
        </button>
        <button>
          <Link to="/Movie/favorites">Favorites</Link>
        </button>
      </nav>
    );
  }
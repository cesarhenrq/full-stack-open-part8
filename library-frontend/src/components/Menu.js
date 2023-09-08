import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <button>
        <Link to='/'>authors</Link>
      </button>
      <button>
        <Link to='/books'>books</Link>
      </button>
      <button>
        <Link to='/add'>add book</Link>
      </button>
    </div>
  );
};

export default Menu;

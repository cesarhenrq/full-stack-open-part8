import { Link } from "react-router-dom";

const Menu = ({ token, logout }) => {
  return (
    <div>
      <button>
        <Link to='/'>authors</Link>
      </button>
      <button>
        <Link to='/books'>books</Link>
      </button>

      {!token && (
        <button>
          <Link to='/login'>login</Link>
        </button>
      )}
      {token && (
        <>
          <button>
            <Link to='/add'>add book</Link>
          </button>
          <button onClick={logout}>logout</button>
        </>
      )}
    </div>
  );
};

export default Menu;

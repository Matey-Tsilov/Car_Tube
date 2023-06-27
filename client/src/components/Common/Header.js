import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../Contexts/UserContext";
import * as authApi from "../../services/authSrvice";
import { getUserData } from "../../api/util";

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const logoutUser = () => {
    const confirmation = window.confirm("Do you really want to log out?");

    if (confirmation) {
      authApi.logout();
      setUser({})
      navigate('/')
    }

  };

  return (
    <header>
      <nav>
        <Link className="active" to="/">
          {" "}
          Home{" "}
        </Link>
        <Link to="/cars">All Listings</Link>
        <Link to="/search">By Year</Link>
        {Object.keys(user) == 0 ? (
          <div id="guest">
            <Link to="/user/login">Login</Link>
            <Link to="/user/register">Register</Link>
          </div>
        ) : (
          <div id="profile">
            <Link>
              {" "}
              Welcome,{" "}
              <strong>
                <em>{user.username}</em>
              </strong>
            </Link>
            <Link to="/my-listings">My Listings</Link>
            <Link to="/cars/create">Create Listing</Link>
            <Link onClick={logoutUser}>
              Logout
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom"
import { useContext } from "react";

import { UserContext } from "../../Contexts/UserContext";
import * as authApi from '../../services/authSrvice'


const Header = () => {
  const {user, setUser} = useContext(UserContext)

  const logoutUser = () => {
      authApi.logout()
      setUser({})
  }

    return (<header>
        <nav>
          <Link className="active" to="/"> Home </Link>
          <Link to="/cars">All Listings</Link>
          <Link to="/search">By Year</Link>
          {
          Object.keys(user) == 0

          ? <div id="guest">
            <Link to="/user/login">Login</Link>
            <Link to="/user/register">Register</Link>
          </div>

          : <div id="profile">
            <Link>Welcome username</Link>
            <Link to="/my-listings">My Listings</Link>
            <Link to="/cars/create">Create Listing</Link>
            <Link to="/" onClick={logoutUser}>Logout</Link>
          </div>
          }
        </nav>
      </header>)
}

export default Header
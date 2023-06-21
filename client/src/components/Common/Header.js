import { Link } from "react-router-dom"

const Header = () => {
    return (<header>
        <nav>
          <Link className="active" to="/"> Home </Link>
          <Link to="/cars">All Listings</Link>
          <Link to="/search">By Year</Link>
          {/* Guest users */}
          <div id="guest">
            <Link to="/user/login">Login</Link>
            <Link to="/user/register">Register</Link>
          </div>
          {/* Logged users */}
          <div id="profile">
            <Link>Welcome username</Link>
            <Link to="/my-listings">My Listings</Link>
            <Link to="/cars/create">Create Listing</Link>
            <Link to="/">Logout</Link>
          </div>
        </nav>
      </header>)
}

export default Header
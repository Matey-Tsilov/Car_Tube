const Header = () => {
    return (<header>
        <nav>
          <a className="active" href="/"> Home </a>
          <a href="/">All Listings</a>
          <a href="/">By Year</a>
          {/* Guest users */}
          <div id="guest">
            <a href="/">Login</a>
            <a href="/">Register</a>
          </div>
          {/* Logged users */}
          <div id="profile">
            <a>Welcome username</a>
            <a href="/">My Listings</a>
            <a href="/">Create Listing</a>
            <a href="/">Logout</a>
          </div>
        </nav>
      </header>)
}

export default Header
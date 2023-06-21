function App() {
  return (<>
    {/* Navigation */}
  <header>
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
</header>
<main id="site-content">{/* Main Content */}</main>
{/* Home Page */}
<section id="main">
  <div id="welcome-container">
    <h1>Welcome To Car Tube</h1>
    <img className="hero" src="/images/car-png.webp" alt="carIntro" />
    <h2>To see all the listings click the link below:</h2>
    <div>
      <a href="/" className="button"> Listings </a>
    </div>
  </div>
</section>
{/* Login Page */}
<section id="login">
  <div className="container">
    <form id="login-form" action="/" method="post">
      <h1>Login</h1>
      <p>Please enter your credentials.</p>
      <hr />
      <p>Username</p>
      <input placeholder="Enter Username" name="username" type="text" />
      <p>Password</p>
      <input type="password" placeholder="Enter Password" name="password" />
      <input type="submit" className="registerbtn" defaultValue="Login" />
    </form>
    <div className="signin">
      <p>
        Dont have an account?
        <a href="/">Sign up</a>.
      </p>
    </div>
  </div>
</section>
{/* Register Page */}
<section id="register">
  <div className="container">
    <form id="register-form">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <p>Username</p>
      <input
        type="text"
        placeholder="Enter Username"
        name="username"
        required=""
      />
      <p>Password</p>
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        required=""
      />
      <p>Repeat Password</p>
      <input
        type="password"
        placeholder="Repeat Password"
        name="repeatPass"
        required=""
      />
      <hr />
      <input type="submit" className="registerbtn" defaultValue="Register" />
    </form>
    <div className="signin">
      <p>
        Already have an account?
        <a href="/">Sign in</a>.
      </p>
    </div>
  </div>
</section>
{/* All Listings Page */}
<section id="car-listings">
  <h1>Car Listings</h1>
  <div className="listings">
    {/* Display all records */}
    <div className="listing">
      <div className="preview">
        <img src="/images/audia3.jpg" />
      </div>
      <h2>Audi A3</h2>
      <div className="info">
        <div className="data-info">
          <h3>Year: 2018</h3>
          <h3>Price: 25000 $</h3>
        </div>
        <div className="data-buttons">
          <a href="/" className="button-carDetails"> Details </a>
        </div>
      </div>
    </div>
    <div className="listing">
      <div className="preview">
        <img src="/images/benz.jpg" />
      </div>
      <h2>Mercedes A-class</h2>
      <div className="info">
        <div className="data-info">
          <h3>Year: 2016</h3>
          <h3>Price: 27000 $</h3>
        </div>
        <div className="data-buttons">
          <a href="/" className="button-carDetails"> Details </a>
        </div>
      </div>
    </div>
    <div className="listing">
      <div className="preview">
        <img src="/images/bmw.jpg" />
      </div>
      <h2>BMW 3 series</h2>
      <div className="info">
        <div className="data-info">
          <h3>Year: 2016</h3>
          <h3>Price: 22000 $</h3>
        </div>
        <div className="data-buttons">
          <a href="/" className="button-carDetails"> Details </a>
        </div>
      </div>
    </div>
    {/* Display if there are no records */}
    <p className="no-cars">No cars in database.</p>
  </div>
</section>
{/* Create Listing Page */}
<section id="create-listing">
  <div className="container">
    <form id="create-form">
      <h1>Create Car Listing</h1>
      <p>Please fill in this form to create an listing.</p>
      <hr />
      <p>Car Brand</p>
      <input type="text" placeholder="Enter Car Brand" name="brand" />
      <p>Car Model</p>
      <input type="text" placeholder="Enter Car Model" name="model" />
      <p>Description</p>
      <input type="text" placeholder="Enter Description" name="description" />
      <p>Car Year</p>
      <input type="number" placeholder="Enter Car Year" name="year" />
      <p>Car Image</p>
      <input type="text" placeholder="Enter Car Image" name="imageUrl" />
      <p>Car Price</p>
      <input type="number" placeholder="Enter Car Price" name="price" />
      <hr />
      <input
        type="submit"
        className="registerbtn"
        defaultValue="Create Listing"
      />
    </form>
  </div>
</section>
{/* Edit Listing Page */}
<section id="edit-listing">
  <div className="container">
    <form id="edit-form">
      <h1>Edit Car Listing</h1>
      <p>Please fill in this form to edit an listing.</p>
      <hr />
      <p>Car Brand</p>
      <input
        type="text"
        placeholder="Enter Car Brand"
        name="brand"
        defaultValue=""
      />
      <p>Car Model</p>
      <input
        type="text"
        placeholder="Enter Car Model"
        name="model"
        defaultValue=""
      />
      <p>Description</p>
      <input
        type="text"
        placeholder="Enter Description"
        name="description"
        defaultValue=""
      />
      <p>Car Year</p>
      <input
        type="number"
        placeholder="Enter Car Year"
        name="year"
        defaultValue=""
      />
      <p>Car Image</p>
      <input
        type="text"
        placeholder="Enter Car Image"
        name="imageUrl"
        defaultValue=""
      />
      <p>Car Price</p>
      <input
        type="number"
        placeholder="Enter Car Price"
        name="price"
        defaultValue=""
      />
      <hr />
      <input
        type="submit"
        className="registerbtn"
        defaultValue="Edit Listing"
      />
    </form>
  </div>
</section>
{/* Listing Details Page */}
<section id="listing-details">
  <h1>Details</h1>
  <div className="details-info">
    <img src="/images/audia3.jpg" />
    <hr />
    <ul className="listing-props">
      <li><span>Brand:</span>Audi</li>
      <li><span>Model:</span>A3</li>
      <li><span>Year:</span>2018</li>
      <li><span>Price:</span>25000$</li>
    </ul>
    <p className="description-para">
      Some description of this car. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Sunt voluptate quam nesciunt ipsa veritatis voluptas
      optio debitis repellat porro sapiente.
    </p>
    <div className="listings-buttons">
      <a href="/" className="button-list"> Edit </a>
      <a href="/" className="button-list"> Delete </a>
    </div>
  </div>
</section>
{/* My Listings Page */}
<section id="my-listings">
  <h1>My car listings</h1>
  <div className="listings">
    {/* Display all records */}
    <div className="listing">
      <div className="preview">
        <img src="/images/audia3.jpg" />
      </div>
      <h2>Audi A3</h2>
      <div className="info">
        <div className="data-info">
          <h3>Year: 2018</h3>
          <h3>Price: 25000 $</h3>
        </div>
        <div className="data-buttons">
          <a href="/" className="button-carDetails"> Details </a>
        </div>
      </div>
    </div>
    {/* Display if there are no records */}
    <p className="no-cars">You haven't listed any cars yet.</p>
  </div>
</section>
{/* Search Page */}
<section id="search-cars">
  <h1>Filter by year</h1>
  <div className="container">
    <input
      id="search-input"
      type="text"
      name="search"
      placeholder="Enter desired production year"
    />
    <button className="button-list">Search</button>
  </div>
  <h2>Results:</h2>
  <div className="listings">
    {/* Display all records */}
    <div className="listing">
      <div className="preview">
        <img src="/images/audia3.jpg" />
      </div>
      <h2>Audi A3</h2>
      <div className="info">
        <div className="data-info">
          <h3>Year: 2018</h3>
          <h3>Price: 25000 $</h3>
        </div>
        <div className="data-buttons">
          <a href="/" className="button-carDetails"> Details </a>
        </div>
      </div>
    </div>
    {/* Display if there are no matches */}
    <p className="no-cars">No results.</p>
  </div>
</section>
<footer>
  <p>© All rights reserved</p>
</footer>
</>);
}

export default App;

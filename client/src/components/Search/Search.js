const Search = () => {
    return (<section id="search-cars">
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
  </section>)
}

export default Search
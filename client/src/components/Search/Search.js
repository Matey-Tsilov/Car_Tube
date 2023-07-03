import { useEffect, useRef, useState } from "react";

import * as carService from "../../services/carService";
import Car from "../Catalog/Car/Car";

const Search = () => {
  const myRef = useRef();
  const [results, setResults] = useState([]);

useEffect(() => {
  carService.getAll().then((res) => setResults(res));
}, [])

  const submitSearch = (e) => {
    e.preventDefault();

    const year = myRef.current.value;

    if (year == ``) {
      carService.getAll().then((res) => setResults(res));
    } else {
      carService.search(year).then((res) => setResults(res));
    }
  };

  return (
    <section id="search-cars">
      <h1>Filter by year</h1>
      <div className="container">
        <input
          id="search-input"
          type="text"
          name="search"
          placeholder="Enter desired production year"
          ref={myRef}
        />
        <button className="button-list" onClick={submitSearch}>
          Search
        </button>
      </div>
      <h2>Results:</h2>
      <div className="listings">
        {results.length == 0 ? (
          <p className="no-cars">No results.</p>
        ) : (
          results.map((c) => <Car key={c._id} car={{ ...c }} />)
        )}
      </div>
    </section>
  );
};

export default Search;

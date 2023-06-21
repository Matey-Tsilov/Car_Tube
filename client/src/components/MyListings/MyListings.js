const MyListings = () => {
return (<section id="my-listings">
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
</section>)
}

export default MyListings
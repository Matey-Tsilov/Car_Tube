const Details = () => {
    return (<section id="listing-details">
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
  </section>)
}

export default Details
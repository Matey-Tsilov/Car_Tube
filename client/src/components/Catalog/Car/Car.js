import { Link } from "react-router-dom"

const Car = ({car}) => {
    return (<div className="listing" id="car">
    <div className="preview">
      <img src={car.imageUrl} alt="car" />
    </div>
    <h2>{car.brand} {car.model}</h2>
    <div className="info">
      <div className="data-info">
        <h3>Year: {car.year}</h3>
        <h3>Price: {car.price}   $</h3>
      </div>
      <div className="data-buttons">
        <Link to={`/cars/${car._id}`} className="button-carDetails"> Details </Link>
      </div>
    </div>
  </div>)
}

export default Car
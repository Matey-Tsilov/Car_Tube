import { useState, useEffect, useContext } from "react"
import { Link, useParams } from "react-router-dom"

import { getById } from "../../services/carService"
import { UserContext } from "../../Contexts/UserContext"

const Details = () => {
  const {id} = useParams()
  const [car, setCar] = useState({})
  const {user} = useContext(UserContext)

  const curUserIsOwner = car._ownerId == user._id

  useEffect(() => {
     getById(id).then(c => setCar(c))
  }, [id])

    return (
    <section id="listing-details">
    <h1>Details</h1>
    <div className="details-info">
      <img src={car.imageUrl} alt="car"/>
      <hr />
      <ul className="listing-props">
        <li><span>Brand:</span>{car.brand}</li>
        <li><span>Model:</span>{car.model}</li>
        <li><span>Year:</span>{car.year}</li>
        <li><span>Price:</span>{car.price}$</li>
      </ul>
      <p className="description-para">{car.description}</p>
      {curUserIsOwner 
      ? (<div className="listings-buttons">
        <Link to={`/cars/edit/${car._id}`} className="button-list"> Edit </Link>
        <Link to={`/delete/${car._id}`} className="button-list"> Delete </Link>
      </div>)
      : ''
      }
    </div>
  </section>
  )
}

export default Details
import { useState, useEffect, useContext } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

import { getById } from "../../services/carService"
import { UserContext } from "../../Contexts/UserContext"
import * as carService from '../../services/carService'

const Details = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [car, setCar] = useState({})
  const {user} = useContext(UserContext)

  const curUserIsOwner = car._ownerId == user._id

  useEffect(() => {
     getById(id).then(c => setCar(c))
  }, [id])

  //deleting a car
  const delRecord = async () => {
    const choice = window.confirm('Are you sure you want to delete the current car?')
    if (choice) {
     await carService.del(car._id)
     navigate('/cars')
    }
  }

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
        <button onClick={delRecord} className="button-list"> Delete </button>
      </div>)
      : ''
      }
    </div>
  </section>
  )
}

export default Details
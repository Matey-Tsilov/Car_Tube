import { useState, useEffect } from "react"
import { getAll } from "../../services/carService"

import Car from "./Car/Car"

const Catalog = () => {

  const [cars, setCars] = useState([])

  useEffect(() => {
   getAll()
   .then(all => setCars(all))
  }, [])

    return (
    
    <section id="car-listings">
    <h1>Car Listings</h1>
    <div className="listings">
      {
      cars.length == 0 
      ? <p className="no-cars">No cars in database.</p>
      : cars.map(c => <Car key={c._id} car={c}/>)
      }      
    </div>
  </section>)
}

export default Catalog
import { useState, useEffect, useContext } from "react";

import * as carService from '../../services/carService'
import { UserContext } from '../../Contexts/UserContext';
import Car from "../Catalog/Car/Car";

const MyListings = () => {
  const {user} = useContext(UserContext)
  const [myCars, setMyCars] = useState([])

  useEffect(() => {
      carService.getMine(user._id).then(res => setMyCars(res))
  }, [])

  return (
    <section id="my-listings">
      <h1>My car listings</h1>
      <div className="listings">
        {myCars.length != 0 
        ? myCars.map(c => <Car key={c._id} car={{...c}}/>)
        : <p className="no-cars">You haven't listed any cars yet.</p>}
      </div>
    </section>
  );
};

export default MyListings;

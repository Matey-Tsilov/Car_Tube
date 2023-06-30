import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as carService from "../../services/carService";
import { onInputChange } from "../../api/controlledForm";

const Edit = () => {
  const { id } = useParams();
const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    brand: "",
    model: "",
    description: "",
    year: "",
    imageUrl: "",
    price: "",
  });

  useEffect(() => {
    carService.getById(id).then((res) => setInputs({ ...res }));
  }, [id]);

  const editRecord = (e) => {
    e.preventDefault();

    const form = new FormData(e.target)
    let inputs = Object.fromEntries(form)

    carService.edit(id, inputs).then(navigate(`/cars/${id}`))
  };

  return (
    <section id="edit-listing">
      <div className="container">
        <form id="edit-form" onSubmit={editRecord}>
          <h1>Edit Car Listing</h1>
          <p>Please fill in this form to edit an listing.</p>
          <hr />
          <p>Car Brand</p>
          <input
            type="text"
            placeholder="Enter Car Brand"
            name="brand"
            value={inputs.brand}
            onChange={(e) => onInputChange(e, setInputs)}
          />
          <p>Car Model</p>
          <input
            type="text"
            placeholder="Enter Car Model"
            name="model"
            value={inputs.model}
            onChange={(e) => onInputChange(e, setInputs)}
          />
          <p>Description</p>
          <input
            type="text"
            placeholder="Enter Description"
            name="description"
            value={inputs.description}
            onChange={(e) => onInputChange(e, setInputs)}
          />
          <p>Car Year</p>
          <input
            type="number"
            placeholder="Enter Car Year"
            name="year"
            value={inputs.year}
            onChange={(e) => onInputChange(e, setInputs)}
          />
          <p>Car Image</p>
          <input
            type="text"
            placeholder="Enter Car Image"
            name="imageUrl"
            value={inputs.imageUrl}
            onChange={(e) => onInputChange(e, setInputs)}
          />
          <p>Car Price</p>
          <input
            type="number"
            placeholder="Enter Car Price"
            name="price"
            value={inputs.price}
            onChange={(e) => onInputChange(e, setInputs)}
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
  );
};

export default Edit;

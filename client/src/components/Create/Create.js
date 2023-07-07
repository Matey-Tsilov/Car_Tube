import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { onInputChange } from "../../api/controlledForm";
import * as carService from "../../services/carService";
import { ValidatedInput } from "../Common/ValidatedInput/ValidatedInput";

const Create = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    brand: "",
    model: "",
    description: "",
    year: "",
    imageUrl: "", 
    price: "",
  });

  const createCar = (e) => {
    e.preventDefault();
    //validation

    const payload = {
    brand: inputs.brand.trim(),
    model: inputs.model.trim(),
    description: inputs.description.trim(),
    year: inputs.year.trim(),
    imageUrl: inputs.imageUrl.trim(),
    price: inputs.price.trim()
    }

    carService.create(payload)
    .then(navigate('/cars')) ;
  };

  return (
    <section id="create-listing">
      <div className="container">
        <form id="create-form" onSubmit={createCar}>
          <h1>Create Car Listing</h1>
          <p>Please fill in this form to create an listing.</p>
          <hr />
          <p>Car Brand</p>
          <ValidatedInput
            onChange={(e) => onInputChange(e, setInputs)}
            value={inputs.brand}
            type="text"
            placeholder="Enter Car Brand"
            name="brand"
          />
          <p>Car Model</p>
          <ValidatedInput
            onChange={(e) => onInputChange(e, setInputs)}
            value={inputs.model}
            type={"text"}
            placeholder={"Enter Car Model"}
            name={"model"}
          />
          <p>Description</p>
          <ValidatedInput
            onChange={(e) => onInputChange(e, setInputs)}
            value={inputs.description}
            type="text"
            placeholder="Enter Description"
            name="description"
          />
          <p>Car Year</p>
          <ValidatedInput
            onChange={(e) => onInputChange(e, setInputs)}
            value={inputs.year}
            type="number"
            placeholder="Enter Car Year"
            name="year"
          />
          <p>Car Image</p>
          <ValidatedInput
            onChange={(e) => onInputChange(e, setInputs)}
            value={inputs.imageUrl}
            type="text"
            placeholder="Enter Car Image"
            name="imageUrl"
          />
          <p>Car Price</p>
          <ValidatedInput
            onChange={(e) => onInputChange(e, setInputs)}
            value={inputs.price}
            type="number"
            placeholder="Enter Car Price"
            name="price"
          />
          <hr />
          <input
            type="submit"
            className="registerbtn"
            defaultValue="Create Listing"
          />
        </form>
      </div>
    </section>
  );
};

export default Create;

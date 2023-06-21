const Edit = () => {
    return (<section id="edit-listing">
    <div className="container">
      <form id="edit-form">
        <h1>Edit Car Listing</h1>
        <p>Please fill in this form to edit an listing.</p>
        <hr />
        <p>Car Brand</p>
        <input
          type="text"
          placeholder="Enter Car Brand"
          name="brand"
          defaultValue=""
        />
        <p>Car Model</p>
        <input
          type="text"
          placeholder="Enter Car Model"
          name="model"
          defaultValue=""
        />
        <p>Description</p>
        <input
          type="text"
          placeholder="Enter Description"
          name="description"
          defaultValue=""
        />
        <p>Car Year</p>
        <input
          type="number"
          placeholder="Enter Car Year"
          name="year"
          defaultValue=""
        />
        <p>Car Image</p>
        <input
          type="text"
          placeholder="Enter Car Image"
          name="imageUrl"
          defaultValue=""
        />
        <p>Car Price</p>
        <input
          type="number"
          placeholder="Enter Car Price"
          name="price"
          defaultValue=""
        />
        <hr />
        <input
          type="submit"
          className="registerbtn"
          defaultValue="Edit Listing"
        />
      </form>
    </div>
  </section>)
}

export default Edit
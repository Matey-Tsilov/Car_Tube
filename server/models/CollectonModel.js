const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  //example properties with mongooseValidations
  //Change when doing a project!
  brand: {
    type: String,
    required: [true, 'This property is required!']
  },
  model: {
    type: String,
    required: [true, 'This property is required!']
  },
  description: {
    type: String,
    required: [true, 'This property is required!'],
    minLength: [20, "The description should be more than 20 symbols"]
  },
  year: {
    type: Number,
    min: [1950, 'Car year must be between 1950 and 2050'],
    max: [2050, 'Car year must be between 1950 and 2050']
  },
  price: {
    type: Number,
    min: [10, 'Car price must be between 10 and 9 999 999 $'],
    max: [9999999, 'Car price must be between 10 and 9 999 999 $']
  },
  imageUrl: {
    type: String,
    required: [true, 'This property is required!']
  },
  _ownerId: {
   type: mongoose.Types.ObjectId,
   ref: 'User'
  }
});

const Collection = mongoose.model("Car", carSchema);

module.exports = Collection;

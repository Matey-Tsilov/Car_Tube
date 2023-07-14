module.exports = (err) => {
  //if it doesn't meet mongoose valiadtion + is not filled
  if (err.name == "ValidationError") {
    const mongooseError = Object.values(err.errors)
    .map(err => err.properties.message)
    .join('\n')
    return mongooseError
  //if name already has a duplicate value// the so called duplicateerror
  }else if(err.name == "MongoServerError") {
   return 'Username is already taken!'
  }
  //if it is a normal error
  else {
    return err.message
  }
};

const bcrypt = require("bcrypt");
const User = require('../models/UserModel')
const jwt = require("../utils/jwt");
const { SECRET } = require("../constants");

const blackList = []

exports.register = async (userData) => {
  const registeredUser = await User.create(userData)
  //use registeredUser not userData to extract the _id proerty!
  return await generateSession(registeredUser)
}
exports.login = async (username, password) => {
const existing = await User.findOne({username})
const isSame = await bcrypt.compare(password, existing?.password)
if (!existing) {
  throw new Error('An account like that already exists!')
}
if (!isSame) {
  throw new Error('Incorrect email or password!')
}
return await generateSession(existing)
}
exports.validateToken = async (token) => {
  if (blackList.includes(token)) {
    console.log('Token is blacklisted!');
    throw new Error()
  }
  //With the secret we chec if the token has been changed!
   const valid = await jwt.verify(token, SECRET)
   return valid
}
exports.logout = (token) => blackList.push(token)

async function generateSession(user) {
    const payload = { _id: user._id, username: user.username };
    const options = {expiresIn: '2d'}
  
    //use promisified version
    const token = await jwt.sign(payload, SECRET, options)
  
  return {
    username: user.username, 
    _id: user._id,
    accessToken: token
  }
} 
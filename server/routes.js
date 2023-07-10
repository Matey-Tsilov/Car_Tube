const router = require('express').Router()
const userController = require('./controllers/userController')
const collectionController = require('./controllers/collectionController')

router.use('/data', collectionController)
router.use('/user', userController)

module.exports = router
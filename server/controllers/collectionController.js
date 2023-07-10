const router = require('express').Router()
const { isUser, isOwner } = require('../middlewares/guards')
const collectionService = require('../services/collectionService')
const mongooseErrorMapper = require('../utils/mongooseErrorMapper')

router.get('/cars', async (req, res) => {
    const queryString = req.query
    console.log(queryString);
    try {
        const items = await collectionService.getAll()
        res.json(items)
    } catch (error) {
        const errorMsg = mongooseErrorMapper(error)
        res.status(404).json({message: errorMsg})
    }
})
router.get('/cars/:id', async (req, res) => {
    const id = req.params.id
    try {
        const item = await collectionService.getById(id)
        res.json(item)
    } catch (error) {
        const errorMsg = mongooseErrorMapper(error)
        res.status(404).json({message: errorMsg})
    }
})
router.post('/cars', isUser(), async (req, res) => {
    const body = req.body
    body._ownerId = req.user._id
    try {
        const createdItem = await collectionService.create(body)
        res.status(201).json(createdItem)
    } catch (error) {
        const errorMsg = mongooseErrorMapper(error)
        res.status(404).json({message: errorMsg})
    }
})
router.put('/cars/:id', isUser(), isOwner(collectionService), async (req, res) => {
    const id = req.params.id
    const updatedItem = req.body
    try {
        const result = await collectionService.updateById(id, updatedItem)
        res.json(result)
    } catch (error) {
        const errorMsg = mongooseErrorMapper(error)
        res.status(404).json({message: errorMsg})
    }
})
router.delete('/cars/:id', isUser(), isOwner(collectionService), async (req, res) => {
    const id = req.params.id
    try {
        const result = await collectionService.deleteById(id)
        res.json(result)
    } catch (error) {
        const errorMsg = mongooseErrorMapper(error)
        res.status(404).json({message: errorMsg})
    }
})

module.exports = router

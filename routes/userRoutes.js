const express = require('express')
const { addUser, getUser, deleteUser, updateUser } = require('../controllers/userControllers')

const router = express.Router()


// Post method

router.post('/', addUser)

// Get method

router.get('/', getUser)

// Delete method

router.delete('/:id', deleteUser)

// Update method

router.put('/:id', updateUser)

module.exports = router
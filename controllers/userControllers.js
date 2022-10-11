const User = require('../models/userModel')
const mongoose = require('mongoose')

const addUser = (req, res) => {
    User.create(req.body)
        .then(data => res.json(data))
        .catch(err => {
            console.log(err)
            res.status(500).json({ msg: 'something went wrong' })
        })
}

const getUser = (req, res) => {
    User.find()
        .then(data => res.json(data))
        .catch(err => {
            console.log(err)
            res.status(500).json({ msg: ' data not found' })
        })

}

const deleteUser = (req, res) => {
    User.findByIdAndDelete({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err)
            res.status(500).json({ msg: ' data not found to delete' })
        })
}

const updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err)
            res.status(500).json({ msg: 'data not found' })
        })

}

module.exports = { addUser, getUser, deleteUser, updateUser }
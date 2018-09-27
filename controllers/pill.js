const jwt = require('jwt-simple')
const User = require('../models/user')
const Pill = require('../models/pill')

function userIdFromToken(token) {
    return jwt.decode(token, process.env.SECRET).sub
}

exports.getPills = function(req, res, next) {
    User.findById(req.user.id)
        .then(user => res.json(user.pills))
        .catch(err => next(err))
}

exports.createPill = function(req, res, next) {

    var pill = new Pill({
        name: req.body.name,
        count: req.body.count
    })
    User.findByIdAndUpdate(req.user.id, {$push: { pills: pill }}, {new: true})
    .then(user => res.json(user))
    .catch(err=>next(err))
}
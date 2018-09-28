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
    .then(user => res.json(user.pills))
    .catch(err=>next(err))
}

exports.editPill = function(req, res, next) {
    console.log(req)
    User.findOneAndUpdate({_id: req.user.id, "pills._id": req.body.id},
    { $set: {"pills.$.name": req.body.name, "pills.$.count": req.body.count}},
    { new: true })
    .then(user => {
        res.json(user.pills)
    })
    .catch(err=>next(err))
}

exports.deletePill = function(req, res, next) {

    User.findById(req.user.id)
    .then(user => {
        user.pills.id(req.params.pill_id).remove()
        user.save()
        .then(res.send(user.pills))
        .catch(err=>next(err))
    })
    .catch(err=>next(err))
}
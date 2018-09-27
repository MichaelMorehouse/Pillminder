const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pillSchema = new Schema({
    name: { type: String, required: true, lowercase: true },
    count: Number
})

module.exports = mongoose.model('Pill', pillSchema)
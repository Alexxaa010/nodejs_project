const mongoose = require('mongoose');

const BitlySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    url: String,
    bitly_url: String
})

module.exports = mongoose.model("Bitly", BitlySchema, "bitly");
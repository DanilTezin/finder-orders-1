const mongoose = require("mongoose")

const schema = mongoose.Schema({
	text: String,
	link: String,
})

module.exports = mongoose.model("PostFromVK", schema)
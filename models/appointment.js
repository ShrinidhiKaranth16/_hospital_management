var mongoose = require("mongoose");

var appointmentSchema = new mongoose.Schema({
	name         :String,
	contactNumber:Number,
	email        :String,
	date         :Date,
	tokenNumber  :Number,
	doctor       :String
});
module.exports = mongoose.model("appointments",appointmentSchema);
var mongoose = require("mongoose");

var  PatientsSchema=new mongoose.Schema({
	name:String,
	image:String,
	age:Number,
	gender:String,
	phone_no:Number,
	room_no:Number,
	patient_id:Number,
	author:{
		id:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"User"
	},
	username: String
	},
	});
module.exports = mongoose.model("patient",PatientsSchema);
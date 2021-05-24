var mongoose = require("mongoose");

//Doctor Schema
var doctorSchema = new mongoose.Schema({
	name:String,
	image:String,
	sex: String,
	DID:Number,
	qualification: String,
	contactNumber:Number,
	salary:Number,
	createdAt:{type:Date,default:Date.now},
	author:{
		id:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"User"
	},
	username: String
	},
	  reviews: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Review"
      }
   ]
});

module.exports = mongoose.model("doctor",doctorSchema);
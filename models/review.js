var mongoose = require("mongoose");
//reviewSchema

var reviewSchema = mongoose.Schema({
	text:String,
	createdAt:{type:Date,default:Date.now},
	author:
	{
		id:{
			type:mongoose.Schema.Types.ObjectId,
			ref:"User"
		},
		username: String
	}	
});
module.exports = mongoose.model("Review",reviewSchema);
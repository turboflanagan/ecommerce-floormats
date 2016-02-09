var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Order = new Schema({
	fullName: String,
	address1: String,
	address2: String,
	city: String,
	state: String,
	zip: Number,
	username: String,
	password: String,
	accessLevel: Number
});


module.exports = mongoose.model('Order', Order);

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
	accessLevel: Number,
	matOption: String,
	carpetColor: String,
	styleOption: String,
	galantEmbroideryColor: String,
	vr4TextColor: String,
	carNumber: String,
	carNumberColor: String,
	shipping: Number,
	totalCost: String,
	email: String,
	phone: String,
	orderNumber: Number
});


module.exports = mongoose.model('Order', Order);

// grab the mongoose module
var mongoose = require('mongoose');

// define our movie model
module.exports = mongoose.model('movie', {
	name : {type : String, default: ''}
});

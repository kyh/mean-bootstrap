var path = require('path');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.post('/outbound', function(req, res) {
	    res.type('text/xml');
	    res.render('outbound', {
	        message: req.query.message
	    });
	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '../public', 'index.html'));
	});

};
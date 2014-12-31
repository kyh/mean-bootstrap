var app 	= require('../app');
var config 	= require('../config/base');

app.set('port', process.env.PORT || config.port);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
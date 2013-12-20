/**
 * Module dependencies.
 */

var express = require('express')
    , api = require('./src/routes.js')
    , http = require('http')
    , path = require('path');

var app = express();
var port = (process.env.VMC_APP_PORT || 3002);
var host = (process.env.VCAP_APP_HOST || 'localhost');


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}


api.setup(app);



app.listen(port, host);
console.log("Express server listening on port %d in %s mode", port, app.settings.env);

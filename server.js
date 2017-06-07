/*** REQUIRES ***/
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');

// Config pool
var config = {
	database: 'omega',
	host: 'localhost',
	port: '5432',
	max: 12
};

var pool = new pg.Pool(config);

// Globals
var app = express();

// Listen
app.listen(7500, function() {
	console.log('server listening on :7500');
});

/*** USES ***/
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));


/*** ROUTES ***/
// Base URL
app.get('/', function(req, res) {
	console.log('Base URL hit');
	res.sendFile(path.resolve('views/index.html'));
});


app.get('/customers', function(req, res) {
	var custArray = [];
	pool.connect(function(err, connection, done) {
		if (err) {
			console.log('Error connect to DB');
			done();
			res.sendStatus(400);
		} else {
			var resultSet = connection.query('SELECT * FROM customers');
			resultSet.on('row', function(row) {
				custArray.push(row);
				console.log(custArray);
			});
			resultSet.on('end', function() {
				done();
				res.send(custArray);
			});
		}
	});
});

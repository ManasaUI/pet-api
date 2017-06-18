var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config/config.js');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json




router = require('./router/pet.js')(app);

//connect to mongoose
mongoose.connect(config.db);


//db object for connection
var db = mongoose.connection;


app.get('/', function(req, res){
    res.send('Please use /api/pets');
});

//where to listen 
app.listen(config.port);
console.log('Server is running on 3000 port');


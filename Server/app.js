var express=require('express');
var bodyParser = require('body-parser');
var path = require('path');

app=express();

var lbgRoute=require('./Routes/lbgRoute.js');
var getDataFromExcel=require('./index.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/',function(req,res)
// {
//   getDataFromExcel.getData();
//   res.sendFile(__dirname+'/views/index.html');
// })

// app.use('/', function (req, res, next){
//
//   next();
// });

app.use('/', express.static(path.join(__dirname, '../Client')));

app.use('/lbgRoute',lbgRoute);

// ---- Server port -------
app.listen(8080,function()
{
  getDataFromExcel.getData();
  console.log("working....");
});


//npm config set https-proxy http://"sr326322:pwd"@proxy2.wipro.com:8080


// ---------------------------------------------------------------------
// var express = require('express');
// var mongoose = require('mongoose');
// var movie = require('./api/routes/movies/movie');
// var config=require('./config/config.json');
// var movie = require('./models/movies/movie');

//Get the instance of express app
//var app = express();

//Assign body-parser to the app for getting the post data from req body
// configure app to use bodyParser()
// this will let us get the data from a POST

// Assign /Api as the root of the application

//Connect to Mongo Database, If custom connections are not made then this connection will be shared across all models
//mongoose.connect(config.DatabaseURL);

// assign the mongoose connection to a variable
// var db = mongoose.connection;
//
// //Verify the connection status with the database
// db.on('error', console.error.bind(console,'Connection error !!'));
// db.once('open',function(){
//   console.log("Connected to MongoDB successfully");
// })

//var port = config.port;

//instantiate the server at the specified port
// app.listen(port, function(){
//   console.log("Server started at port :"+port);
// });

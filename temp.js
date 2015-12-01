
var express = require('express');
var app = express();
var fs = require("fs");
var mongodb = require('mongodb');

// We need to work with "MongoClient" interface in order to connect to a mongodb
// server.



app.use(express.static('public'));

app.get('/listUsers', function (req, res) {
   fs.readFile( "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})


// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

app.get('/getStaticFile', function(req, res) {   
   console.log("Got a GET request for static files");
   res.send('Page Pattern Match');
})

app.get('/getJsonResponse', function(req, res) {   
   console.log("Got a GET request for JsonResponse");
   res.json({ message: 'hooray! welcome to our api!' });   
})

app.get('/getDataFromDB', function(req, res) {   
   console.log("Got a GET request for MongoDB database");
// Use connect method to connect to the Server
   MongoClient.connect(url, function (err, db) {
     if (err) {
       console.log('Unable to connect to the mongoDB server. Error:', err);
     } else {
       // HURRAY!! We are connected. :)
       console.log('Connection established to', url);

       // do some work here with the database.
       // Get the documents collection
       var collection = db.collection('users');

       collection.find().toArray(function (err, result) {
    	      if (err) {
    	        console.log(err);
    	      } else if (result.length) {
    	        console.log('Found:', result);
    	        res.json(result);   
    	      } else {
    	        console.log('No document(s) found with defined "find" criteria!');
    	      }
    	      // Close connection
    	      db.close();
    	    });
     }
   });  
})

app.post('/postJsonResponse', function(req, res) {   
   console.log("Got a GET request for JsonResponse");
   var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/myDB';

// Use connect method to connect to the Server
	MongoClient.connect(url, function (err, db) {
		if (err) {
				console.log('Unable to connect to the mongoDB server. Error:', err);
		} else {
    // HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // do some work here with the database.
    // Get the documents collection
    var collection = db.collection('users');

    // Create some users
    var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};
   
    
    // Insert some users
    collection.insert([user1, user2, user3], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
      }
    
    // Close connection
    db.close();
  });
  }
});
   res.json({ message: 'hooray! welcome to our api!' });   
})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})


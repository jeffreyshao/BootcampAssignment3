/* Fill out these functions using Mongoose queries*/
'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');


/* Connect to your database */
mongoose.connect(config.db.uri, {useMongoClient: true});


var findLibraryWest = function() {

  Listing.find({code: 'LBW', name: 'Library West'}, function(err, data) {
    if (err) throw err;

    // object of the user
    console.log(data);
  });
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
};

var removeCable = function() {
  Listing.find({code: 'CABL'}, function(err, user){
    if (err) throw err;

    var temp = user[0].code;

    user[0].remove(function(err){
      if (err) throw err;
    })

    console.log(temp + ' was removed')

  });

  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
};

var updatePhelpsLab = function() {
  Listing.find({name: 'Phelps Laboratory'}, function(err, user) {
    if (err) throw err;

    console.log(user);
    user[0].address = 'Phelps Lab, Gainesville, FL 32603';
    console.log(user);

    user[0].save(function(err){
      if (err) throw err;
    });

  });

  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
};
var retrieveAllListings = function() {
  Listing.find(function(err, user){
    if (err) throw err;

    console.log(user);


  })

  /*
    Retrieve all listings in the database, and log them to the console.
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();

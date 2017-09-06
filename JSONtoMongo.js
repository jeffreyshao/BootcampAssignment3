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

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */

require('fs').readFile('./listings.json', 'utf8', function (err, data) {
    if (err)
       // error handling
    data;
    var obj = JSON.parse(data);
    for (var index in obj.entries){
      var kode = obj.entries[index].code;
      //console.log(kode);
      var mingzi = obj.entries[index].name;
      //console.log(mingzi);

      var attitude = 90;
      try{
        attitude = obj.entries[index].coordinates.latitude;
        //console.log(attitude);
      } catch(err) {
        //console.log(attitude + " Ho Ho Ho Bitches");
      }

      var lawngitude = 0;
      try{
        lawngitude = obj.entries[index].coordinates.longitude;
        //console.log(lawngitude);
      } catch(err) {
        //console.log(lawngitude + " Ho Ho Hold Ma Dick");
      }

      var subress;
      if (!obj.entries[index].address){
        subress = 'DNE';
        //console.log(subress)
      } else {
        subress = obj.entries[index].address;
        //console.log(subress);
      }

      var listing = new Listing({
        code: kode,
        name: mingzi,
        coordinates: {
          latitude: attitude,
          longitude: lawngitude
        },
        address: subress
      });

      listing.save(function(err){
        if (err) throw err;

        console.log('Listing saved successfully!')
      })
    }
});

mongo.connection.close();

/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */

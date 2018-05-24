<<<<<<< HEAD
//mode/todo.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.
var CandinateSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  city: String,
  skills: String
});

//export our module to use in server.js
=======
//mode/todo.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.
var CandinateSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  city: String,
  skills: String
});

//export our module to use in server.js
>>>>>>> 816af9a91306e1702b527aaf7ae7488f5d282900
module.exports = mongoose.model('candinateInformationTables', CandinateSchema);
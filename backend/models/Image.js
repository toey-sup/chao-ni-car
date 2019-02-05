var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var multer = require('multer');

var Item = new ItemSchema(
    { img: 
        { data: Buffer, contentType: String }
    }
  );
  var Item = mongoose.model('Clothes',ItemSchema);
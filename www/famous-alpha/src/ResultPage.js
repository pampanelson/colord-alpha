'use strict';

var FamousEngine = require('famous/core/FamousEngine');
var DOMElement = require('famous/dom-renderables/DOMElement');

var MyTools = require('./MyTools.js');
var MyData = require('./MyData.json');

var myTools = new MyTools();

function ResultPage (parent,data) {
    myTools.log("in ResultPage.js");
}


module.exports = ResultPage;
'use strict';

var FamousEngine = require('famous/core/FamousEngine');
var DOMElement = require('famous/dom-renderables/DOMElement');

var MyTools = require('./MyTools.js');
var MyData = require('./MyData.json');

var myTools = new MyTools();
function ReadyPage (parent,data)  {

	myTools.log("in ReadyPage.js");
	
	var startN = parent.addChild();
	var startEl = new DOMElement(startN);
}


module.exports = ReadyPage;


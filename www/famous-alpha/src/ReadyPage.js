'use strict';

var FamousEngine = require('famous/core/FamousEngine');
var DOMElement = require('famous/dom-renderables/DOMElement');
var myTools = require('./MyTools.js');

function ReadyPage (parent,data)  {

	// myTools.log("ReadyPage.js");
	
	var startN = parent.addChild();
	var startEl = new DOMElement(startN);
}


module.exports = ReadyPage;


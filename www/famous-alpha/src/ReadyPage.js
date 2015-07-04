'use strict';

var FamousEngine = require('famous/core/FamousEngine');
var DOMElement = require('famous/dom-renderables/DOMElement');
var Size = require('famous/components/Size');

var MyTools = require('./MyTools.js');
var MyData = require('./MyData.json');

var myTools = new MyTools();

function ReadyPage (parent,data)  {

	myTools.log("in ReadyPage.js");
	
	this.parent = parent;
	this.node = this.parent.addChild();

	// use Size class
	this.size = new Size(this.node);
	this.size.setMode('relative','relative','relative')
		.setProportional(0.5,1,0);
	
	// manual set size
	// this.node.setSizeMode('relative','relative','relative')
	// 	.setProportionalSize(0.5,1,0.4)
	// 	.setDifferentialSize(0,0,0);

	// position
	// achive layer by set different z on position, big is above
	this.node.setPosition(0,0,5);


	this.el = new DOMElement(this.node);
	this.el.setProperty('background-color','yellow');
}


module.exports = ReadyPage;


'use strict';

var FamousEngine = require('famous/core/FamousEngine');
var DOMElement = require('famous/dom-renderables/DOMElement');

// var Size = require('famous/components/Size');
var MyTools = require('./MyTools.js');
var MyData = require('./MyData.json');

var myTools = new MyTools();

function GamePage (parent,data) {
		myTools.log("in GamePage.js");

		this.parent = parent;
		this.node = this.parent.addChild();

		// use Size class
		// this.size = new Size(this.node);
		// this.size.setMode('relative','relative','relative')
		// 	.setValue(0.5,1,5),
			// .setProportionalSize(0.5,1)
			// .setDifferentialSize(0,0)
			// .setPosition(0,0);
		
		// manual set size
		this.node.setSizeMode('relative','relative','relative')
			.setProportionalSize(0.5,1,0.5)
			.setDifferentialSize(0,0,0);
		// position
		this.node.setPosition(0,0);


		this.el = new DOMElement(this.node);
		this.el.setProperty('background-color','black');

}

module.exports = GamePage;
'use strict';

// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');

// MY dependencies
var MyTools = require('./MyTools.js');
var MyData = require('./MyData.json');
var ReadyPage = require('./ReadyPage.js');
var GamePage = require('./GamePage.js');
var ResultPage = require('./ResultPage.js');

// Boilerplate code to make your life easier
FamousEngine.init();


var myTools = new MyTools();
myTools.setScreenSize(MyData);
myTools.log("hello");
myTools.log(MyData._screenWidth);

var scene = FamousEngine.createScene('body');
var rootNode = scene.addChild();

// var readyPage = new ReadyPage(rootNode);
var gamePage = new GamePage(rootNode);
// var resultPage = new ResultPage(rootNode);

// var startN = readyPage.addChild();
// var startEl = new DOMElement(startN);


// var guideN = readyPage.addChild();
// var guideEl = new DOMElement(guideN);

// var myMarkN = readyPage.addChild();
// var myMarkEl = new DOMElement(myMarkN);

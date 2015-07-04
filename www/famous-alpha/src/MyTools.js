'use strict';

function MyTools () {
	console.log("MyTools.js");
	this.__testMark = true;
};

MyTools.prototype.log =  function (logContents) {
	if (this.__testMark) {
		console.log(logContents);
	};
};

MyTools.prototype.setScreenSize = function (myData) {
	myData._screenWidth = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;
	myData._screenHeight = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;
};

module.exports = MyTools;
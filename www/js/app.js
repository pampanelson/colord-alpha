'use strict';

console.log("in app.js");

__testMark = true;

var MyData = {

	kPreloadImgArray:["famous_logo.png","icon_play.png"],
	kPreloadAudioArray:[],

	kColorValueArray:[],
	kWordCnArray:[
	"红",
	"橙",
	"黄",
	"绿",
	"蓝",
	"紫",
	"黑",
	"白",
	"棕",
	"粉"],

	kWordEnArray:[
	"RED",
	"ORANGE",
	"YELLOW",
	"GREEN",
	"BLUE",
	"PURPLE",
	"BLACK",
	"WHITE",
	"BROWN",
	"PINK"],

	kTxtWXShare:"分享到微信默认文本",
	kTxtFBShare:"default text for sharing to facebook",

	_screenWidth:null,
	_screenHeight:null,

	_imgPath:null,

	_currentWordIndex:null,
	_currentColorIndex:null,

	_correct:null,
	_answer:null,

	_lever:null,
	_currentTicking:2000,// mil seconds
};

// my tools function
 var MyFun = {
	log:function  (logContents) {
		if (__testMark) {
			console.log(logContents);
		};
	},
	getScreenSize:function  () {
		MyData._screenWidth = window.innerWidth
	        				|| document.documentElement.clientWidth
	        				|| document.body.clientWidth;
        	   	 MyData._screenHeight = window.innerHeight
    					|| document.documentElement.clientHeight
    					|| document.body.clientHeight;
	}
}


function init () {

	MyFun.log("starting init");

	// get screen size for later using
	MyFun.getScreenSize();

        	MyFun.log("screen width : " + MyData._screenWidth);
        	MyFun.log("screen height : " + MyData._screenHeight);

        	// according screen width set the images path 

        	init_img_path(MyData._screenWidth);

	// implement image preloader by preloadjs
	var imgPreload = new createjs.LoadQueue();
	imgPreload.addEventListener("fileload",handleImgPreloadComplete);
	for (var i = 0; i < MyData.kPreloadImgArray.length; i++) {
		imgPreload.loadFile(MyData._imgPath + MyData.kPreloadImgArray[i]);

	};

	function handleImgPreloadComplete (event) {
		console.log("preloaded image : " + event.item.id);
		// document.getElementById("preloadHtml").src = event.item.id;

	}

	// audio preloader
	

}

function init_img_path (width) {
	//  just for test temporary ==================================== TODO
	MyData._imgPath = "../images/testpic/";
}
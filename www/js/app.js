console.log("in app.js");

__testMark = true;

MyData = {

	kPreloadImgArray:["../images/testpic/famous_logo.png","../images/testpic/icon_play.png"],
	kColorArray:[],
	kWordArray:[],

	kTxtWXShare:"分享到微信默认文本",
	kTxtFBShare:"default text for sharing to facebook",

	_currentWordIndex:null,
	_currentColorIndex:null,

	_correct:null,
	_answer:null,

	_lever:0,
	_currentTicking:2000,// mil seconds
};

function init () {

	if (__testMark) {
		console.log("starting init");
	};

	// implement image preloader
	var imgPreload = new createjs.LoadQueue();
	imgPreload.addEventListener("fileload",handleImgPreloadComplete);
	for (var i = 0; i < MyData.kPreloadImgArray.length; i++) {
		imgPreload.loadFile(MyData.kPreloadImgArray[i]);

	};

	function handleImgPreloadComplete (event) {
		console.log("preloaded image : " + event.item.id);
		// document.getElementById("preloadHtml").src = event.item.id;

	}

}


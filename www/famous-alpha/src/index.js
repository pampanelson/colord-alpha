'use strict';
// MyData just for test famous by coping it from app.js of colord-alpha www path
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
};
// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');

// Boilerplate code to make your life easier
FamousEngine.init();
MyFun.getScreenSize();
console.log(MyData._screenWidth);

// // Initialize with a scene; then, add a 'node' to the scene root
// var logo = FamousEngine.createScene().addChild();

// // Create an [image] DOM element providing the logo 'node' with the 'src' path
// new DOMElement(logo, { tagName: 'img' })
//     .setAttribute('src', './images/famous_logo.png');

// // Chainable API
// logo
//     // Set size mode to 'absolute' to use absolute pixel values: (width 250px, height 250px)
//     .setSizeMode('absolute', 'absolute', 'absolute')
//     .setAbsoluteSize(250, 250)
//     // Center the 'node' to the parent (the screen, in this instance)
//     .setAlign(0.5, 0.5)
//     // Set the translational origin to the center of the 'node'
//     .setMountPoint(0.5, 0.5)
//     // Set the rotational origin to the center of the 'node'
//     .setOrigin(0.5, 0.5);

// // Add a spinner component to the logo 'node' that is called, every frame
// var spinner = logo.addComponent({
//     onUpdate: function(time) {
//         logo.setRotation(0, time / 1000, 0);
//         logo.requestUpdateOnNextTick(spinner);
//     }
// });

// // Let the magic begin...
// logo.requestUpdate(spinner);

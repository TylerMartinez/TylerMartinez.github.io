webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center-container row\">\r\n  <button class=\"tyler-button\" (click)=\"onSectionClick(1)\">\r\n    &nbsp;ABOUT\r\n  </button>\r\n  <button class=\"tyler-button\" (click)=\"onSectionClick(3)\">\r\n    &nbsp;EXPERIENCE\r\n  </button>\r\n  <button class=\"tyler-button\" (click)=\"onSectionClick(4)\">\r\n    &nbsp;PROJECTS\r\n  </button>\r\n  <button class=\"tyler-button\" (click)=\"onSectionClick(2)\">\r\n    &nbsp;CONTACT\r\n  </button>\r\n</div>\r\n\r\n<div class=\"caption\">\r\n  <app-slide-panel [show]=\"showSplash\">\r\n    <div class=\"row center-container-nopad\">\r\n      <span class=\"spanborder\">TYLER MARTINEZ</span>\r\n    </div>\r\n    <div class=\"row center-container-nopad\">\r\n      <app-typerwriter [speed]=\"100\" [pause]=\"20\"\r\n        [words]=\"['SOFTWARE ENGINEER', 'FULL-STACK DEVELOPER', 'PROBLEM SOLVER']\"></app-typerwriter>\r\n    </div>\r\n  </app-slide-panel>\r\n</div>\r\n<app-slide-panel [show]=\"showAboutMe\">\r\n  <div class=\"content-container\">\r\n    <div class=\"caption2 row center-container\">\r\n      ABOUT ME\r\n    </div>\r\n    <div class=\"row center-container\">\r\n      <img src=\"..\\assets\\me.jpg\" style=\"width: 200px;\" alt=\"Me\">\r\n    </div>\r\n    <div class=\"row center-container\">\r\n      <p class=\"content-text\">\r\n        My name is Tyler Martinez and I'm a Software Engineer/Full-Stack Developer/Problem Solver. I've been working in\r\n        the industry\r\n        for the past 6+ years developing software in Agile environments. I pride myself on being an avid learner,\r\n        researching\r\n        technologies new to me and working on my skills at work and at home with personal projects. Currently located in\r\n        Charlotte, North Carolina but looking to relocate to the Seattle area. Any inquiries can be sent to\r\n        Tyler.Martinez.Prof@Gmail.com.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</app-slide-panel>\r\n<div class=\"caption\">\r\n  <app-slide-panel [show]=\"showContact\">\r\n    <div class=\"row center-container-nopad\">\r\n      <span class=\"spanborder\">\r\n        <a href=\"mailto:tyler.martinez.prof@gmail.com\">TYLER . MARTINEZ . PROF @ GMAIL.COM</a>\r\n      </span>\r\n    </div>\r\n  </app-slide-panel>\r\n</div>\r\n<app-slide-panel [show]=\"showExperience\">\r\n  <div class=\"content-container\">\r\n    <div class=\"caption2 row center-container\">\r\n      EXPERIENCE\r\n    </div>\r\n    <div class=\"row center-container\">\r\n      <p class=\"content-text job-header\">SUNBELT RENTALS</p>\r\n      <p class=\"content-text job-header\">2018 - Present</p>\r\n      <p class=\"content-text job-italic\">Charlotte, NC</p>\r\n\r\n      <p class=\"content-text\">&bull; Created a custom Ecommerce checkout process to help improve user’s experience from\r\n        the front and back end</p>\r\n      <p class=\"content-text\">&bull; Responsible for updating and maintaining ecommerce website and web applications\r\n        used by customers to facilitate equipment tracking and account invoicing</p>\r\n      <p class=\"content-text\">&bull; Part of lead development team tasked to research and create proof of concepts to\r\n        integrate new web technologies and facilitate movement to the cloud </p>\r\n      <p class=\"content-text\">&bull; Created internal web applications to empower branch offices and storefronts to\r\n        serve customer’s needs efficiently</p>\r\n    </div>\r\n    <div class=\"row center-container\">\r\n      <p class=\"content-text job-header\">SOFTPRO</p>\r\n      <p class=\"content-text job-header\">2016 - 2018</p>\r\n      <p class=\"content-text job-italic\">Raleigh, NC (2 years)</p>\r\n      <p class=\"content-text\">&bull; Responsible for maintaining existing .NET Title Software Application as well as\r\n        extending it for SaaS future\r\n        offering </p>\r\n      <p class=\"content-text\">&bull; Part of Agile team bringing permission based feature to the product </p>\r\n      <p class=\"content-text\">&bull; Joined development team and learned in-house tools and languages to bring net new\r\n        Title feature to completion\r\n        and to meet hard deadlines </p>\r\n    </div>\r\n    <div class=\"row center-container\">\r\n      <p class=\"content-text job-header\">LABTECH SOFTWARE (CONNECTWISE)</p>\r\n      <p class=\"content-text job-header\">2014 - 2016</p>\r\n      <p class=\"content-text job-italic\">Tampa, FL (2 years)</p>\r\n      <p class=\"content-text\">&bull; Responsible for the quality control and maintenance of a large Remote Monitoring\r\n        and Management application\r\n      </p>\r\n      <p class=\"content-text\">&bull; Served as Project Owner of a net new Windows and Third-Party Patching application\r\n      </p>\r\n      <p class=\"content-text\">&bull; Worked with the User Experience team to develop a WPF control library used for all\r\n        future projects </p>\r\n      <p class=\"content-text\">&bull; Member of the Steering Committee for the use of new technologies and establish\r\n        coding standards </p>\r\n      <p class=\"content-text\">&bull; Member of the Internal Education team to promote the documentation of code and\r\n        provide training sessions </p>\r\n    </div>\r\n    <div class=\"row center-container\">\r\n      <p class=\"content-text job-header\">FLORIDA STATE UNIVERSITY - GRADUATE TA</p>\r\n      <p class=\"content-text job-header\">2013 - 2014</p>\r\n      <p class=\"content-text job-italic\">Tallahassee, Florida </p>\r\n      <p class=\"content-text\">&bull; I taught the fundamentals of Software Engineering, C++, and Design patterns to\r\n        underclassmen </p>\r\n    </div>\r\n  </div>\r\n</app-slide-panel>\r\n<app-slide-panel [show]=\"showProjects\">\r\n\r\n  <div class=\"content-container\">\r\n    <div class=\"caption2 row center-container\">\r\n      PROJECTS\r\n    </div>\r\n    <div class=\"caption3 row center-container\">\r\n      <a href=\"https://github.com/TylerMartinez/Honyaku-Translation-Tools\">Honyaku Translation Tools</a>\r\n    </div>\r\n    <div class=\"row center-container\">\r\n      <div id=\"btCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"4000\">\r\n        <div class=\"carousel-inner\">\r\n          <div class=\"carousel-item active\">\r\n            <img class=\"d-block w-100\" style=\"height: 380px;width: 500px;\" src=\"..\\assets\\honyaku3.png\"\r\n              alt=\"First slide\">\r\n          </div>\r\n          <div class=\"carousel-item\">\r\n            <img class=\"d-block w-100\" style=\"height: 380px;width: 500px;\" src=\"..\\assets\\honyaku1.png\"\r\n              alt=\"Second slide\">\r\n          </div>\r\n          <div class=\"carousel-item\">\r\n            <img class=\"d-block w-100\" style=\"height: 380px;width: 500px;\" src=\"..\\assets\\honyaku2.png\"\r\n              alt=\"Second slide\">\r\n          </div>\r\n        </div>\r\n        <a class=\"carousel-control-prev\" href=\"#btCarousel\" role=\"button\" data-slide=\"prev\">\r\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n        <a class=\"carousel-control-next\" href=\"#btCarousel\" role=\"button\" data-slide=\"next\">\r\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Next</span>\r\n        </a>\r\n      </div>\r\n      <p class=\"content-text\">\r\n        A personal project of mine designed to help the facilitation of media translation by hand with a focus on\r\n        Japanese language\r\n        translation. Made using Electron, NodeJS, React, Redux, Sagas, and Styled components I intend for it to be used\r\n        by streamers\r\n        for live translation of video games and other media. My hope is that it wil help viewers and streamers\r\n        participate in language\r\n        learning in a live format and enable collaboration in the translation. Hopefully it will encourage more accurate\r\n        and non biased\r\n        translations of all forms of foreign media.\r\n      </p>\r\n    </div>\r\n    <div class=\"caption3 row center-container\">\r\n      <a href=\"https://github.com/TylerMartinez/AreTheyGoodAtLeagueBot\">AreTheyGoodAtLeagueBot</a>\r\n    </div>\r\n    <div class=\"row center-container\">\r\n      <div id=\"discordCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"4000\">\r\n        <div class=\"carousel-inner\">\r\n          <div class=\"carousel-item active\">\r\n            <img class=\"d-block w-100\" src=\"..\\assets\\AreThey.png\" alt=\"First slide\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <p class=\"content-text\">\r\n        A discord bot I made during the pandemic that gathers stats for a player in the game League of Legends. It is\r\n        made entirely in Rust and is hosted on an Amazon EC2 instance.\r\n      </p>\r\n    </div>\r\n    <div class=\"caption3 row center-container\">\r\n      <a href=\"https://www.npmjs.com/package/autokanji\">AutoKanji</a>\r\n    </div>\r\n    <div class=\"row center-container\">\r\n      <p class=\"content-text\">\r\n        An javascript library that takes in a non-kanji japanese input and provides a list suggested kanji the input\r\n        matches. Made it so I could\r\n        make a full featured Japanese Input Method Editor in javascript. Uses NodeJS and is apart of the npm package\r\n        registry.\r\n      </p>\r\n    </div>\r\n    <div class=\"caption3 row center-container\">\r\n      <a href=\"https://www.npmjs.com/package/jsontrie-cli\">JSONTrie</a>\r\n    </div>\r\n    <div class=\"row center-container\">\r\n      <p class=\"content-text\">\r\n        A CLI tool I made to transform an array of JSON objects into a Trie data structure. Made it to help transform\r\n        the JMDict Japanese dictionary\r\n        project into a more searchable format. Uses NodeJS and is apart of the npm package registry.\r\n      </p>\r\n    </div>\r\n    <div class=\"caption3 row center-container\">\r\n      BUDGETTOGETHER.NET\r\n    </div>\r\n    <div class=\"row center-container\">\r\n      <div id=\"btCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"4000\">\r\n        <div class=\"carousel-inner\">\r\n          <div class=\"carousel-item active\">\r\n            <img class=\"d-block w-100\" src=\"..\\assets\\BT0.png\" alt=\"First slide\">\r\n          </div>\r\n          <div class=\"carousel-item\">\r\n            <img class=\"d-block w-100\" src=\"..\\assets\\BT1.png\" alt=\"Second slide\">\r\n          </div>\r\n          <div class=\"carousel-item\">\r\n            <img class=\"d-block w-100\" src=\"..\\assets\\BT2.png\" alt=\"Third slide\">\r\n          </div>\r\n        </div>\r\n        <a class=\"carousel-control-prev\" href=\"#btCarousel\" role=\"button\" data-slide=\"prev\">\r\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n        <a class=\"carousel-control-next\" href=\"#btCarousel\" role=\"button\" data-slide=\"next\">\r\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Next</span>\r\n        </a>\r\n      </div>\r\n      <div class=\"row center-container\">\r\n        <p class=\"content-text\">&bull; Create shared budgets with other users to keep track of spending</p>\r\n        <p class=\"content-text\">&bull; Set spending goals and keep track of them easily on your dash board</p>\r\n        <p class=\"content-text\">&bull; Use entry classifications to further understand your spending habits</p>\r\n        <p class=\"content-text\">\r\n          BudgetTogether was a proof of concept project that was a cooperative budgeting application. I decided to\r\n          create this after many conversations between me and my wife over our own personal budget. Also wanting to get\r\n          a chance to use my web development skills outside of work I took the chance to design this. It is an Angular\r\n          Single\r\n          Page Application that uses Express and and Node.JS on the backend with MongoDb for it's database. I had it\r\n          hosted\r\n          on a DigitalOcean VM runing Ubuntu.\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"caption3 row center-container\">\r\n        <a href=\"https://github.com/TylerMartinez/YoutubeOnTop\">YOUTUBE ON TOP</a>\r\n      </div>\r\n      <div class=\"row center-container\">\r\n        <div id=\"ytotCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"4000\">\r\n          <div class=\"carousel-inner\">\r\n            <div class=\"carousel-item active\">\r\n              <img class=\"d-block w-100\" src=\"..\\assets\\YTOT.png\" alt=\"First slide\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <p class=\"content-text\">&bull; Play Youtube videos on top of all your other windows</p>\r\n        <p class=\"content-text\">&bull; Resizable to any dimension</p>\r\n        <p class=\"content-text\">&bull; Work while watching tutorials at the same time</p>\r\n        <p class=\"content-text\">\r\n          I created this application after a plugin that was similar in chrome had potentially became compromised.\r\n          Youtube On Top is\r\n          in a public repository so any user's can edit it and use it themselves and verify there's nothing shady going\r\n          on\r\n          like the plugin I was using before. I use it mostly to have tutorials open when I'm learning new technologies\r\n          or\r\n          for background noise when I'm working on my own projects. Technologies used were Angular and Electron.\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"caption3 row center-container\">\r\n        UNNAMED UNITY PROJECT\r\n      </div>\r\n      <div class=\"row center-container\">\r\n        <div id=\"unityCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"4000\">\r\n          <div class=\"carousel-inner\">\r\n            <div class=\"carousel-item active\">\r\n              <img class=\"d-block w-100\" src=\"..\\assets\\unity.png\" alt=\"First slide\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <p class=\"content-text\">&bull; Co-operative 2D action platformer</p>\r\n        <p class=\"content-text\">&bull; Custom networking algorithm</p>\r\n        <p class=\"content-text\">\r\n          A video game I have been working on and a passion project. I recently wrote my own networking algorithms to\r\n          make the co-operative\r\n          aspect of the game a lot smoother. A lot of work to be done here but a great chance to teach myself a new\r\n          platform.\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"caption3 row center-container\">\r\n        GOOGLE CODE JAM\r\n      </div>\r\n      <div class=\"row center-container\">\r\n        <p class=\"content-text\">\r\n          Every year I make an effort to compete in the Google Code Jam qualifiers. This gives me a chance to increase\r\n          my algorithmic\r\n          efficiency and flex my Python Skills.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-slide-panel>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.showSplash = true;
        this.showAboutMe = false;
        this.showExperience = false;
        this.showContact = false;
        this.showProjects = false;
    }
    // Event Handlers
    AppComponent.prototype.onSectionClick = function (index) {
        switch (index) {
            case 1:
                this.showAboutMe = !this.showAboutMe;
                this.showExperience = false;
                this.showContact = false;
                this.showProjects = false;
                break;
            case 2:
                this.showAboutMe = false;
                this.showExperience = false;
                this.showContact = !this.showContact;
                this.showProjects = false;
                break;
            case 3:
                this.showAboutMe = false;
                this.showExperience = !this.showExperience;
                this.showContact = false;
                this.showProjects = false;
                break;
            case 4:
                this.showAboutMe = false;
                this.showExperience = false;
                this.showContact = false;
                this.showProjects = !this.showProjects;
                break;
        }
        if (!this.showAboutMe && !this.showExperience && !this.showContact && !this.showProjects) {
            this.showSplash = true;
        }
        else {
            this.showSplash = false;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__typerwriter_typerwriter_component__ = __webpack_require__("./src/app/typerwriter/typerwriter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slide_panel_slide_panel_component__ = __webpack_require__("./src/app/slide-panel/slide-panel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__typerwriter_typerwriter_component__["a" /* TyperwriterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__slide_panel_slide_panel_component__["a" /* SlidePanelComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/slide-panel/slide-panel.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/slide-panel/slide-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div name=\"slidePanel\" [@showState]=\"show\">\r\n  <ng-content></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/slide-panel/slide-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlidePanelComponent = /** @class */ (function () {
    function SlidePanelComponent() {
        // Input Members
        this.show = false;
    }
    SlidePanelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], SlidePanelComponent.prototype, "show", void 0);
    SlidePanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-slide-panel',
            template: __webpack_require__("./src/app/slide-panel/slide-panel.component.html"),
            styles: [__webpack_require__("./src/app/slide-panel/slide-panel.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('showState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ visibility: 'hidden' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('false => true', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.5s ease-in')
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('true => false', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.5s ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(100%)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], SlidePanelComponent);
    return SlidePanelComponent;
}());



/***/ }),

/***/ "./src/app/typerwriter/typerwriter.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/typerwriter/typerwriter.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <span class=\"spanborder\">\r\n    {{display}}\r\n  </span>\r\n"

/***/ }),

/***/ "./src/app/typerwriter/typerwriter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TyperwriterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TyperwriterComponent = /** @class */ (function () {
    function TyperwriterComponent() {
        this.display = '';
        this.pauseCount = 0;
        this.wordIndex = 0;
        this.speed = 200;
        this.pause = 5;
        this.words = ['DID YOU FORGET TO ADD YOUR WORDS TO TYPERWRITER'];
    }
    TyperwriterComponent.prototype.ngOnInit = function () {
        setInterval(this.typer, this.speed, this);
    };
    // Methods
    TyperwriterComponent.prototype.typer = function (context) {
        // Variables
        var length = context.words[context.wordIndex].length;
        var currentLength = context.display.length;
        // Emulate typing
        if (context.pauseCount === context.pause && currentLength !== 0) {
            // Emulate backspacing
            context.display = context.display.slice(0, -1);
        }
        else if (currentLength < length) {
            // Reset pause count if we deleted word
            if (context.pauseCount === context.pause) {
                context.pauseCount = 0;
                // Move to next word
                if (context.wordIndex === context.words.length - 1) {
                    context.wordIndex = 0;
                }
                else {
                    context.wordIndex++;
                }
            }
            // Type
            context.display += context.words[context.wordIndex][currentLength];
        }
        else if (context.pauseCount < context.pause) {
            // We are pausing after finishing typing
            context.pauseCount++;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], TyperwriterComponent.prototype, "speed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], TyperwriterComponent.prototype, "pause", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], TyperwriterComponent.prototype, "words", void 0);
    TyperwriterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-typerwriter',
            template: __webpack_require__("./src/app/typerwriter/typerwriter.component.html"),
            styles: [__webpack_require__("./src/app/typerwriter/typerwriter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TyperwriterComponent);
    return TyperwriterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
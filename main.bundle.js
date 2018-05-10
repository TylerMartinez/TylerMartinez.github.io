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

module.exports = "<div class=\"center-container row\">\n  <button class=\"tyler-button\" (click)=\"onSectionClick(1)\">\n    &nbsp;ABOUT\n  </button>\n  <button class=\"tyler-button\" (click)=\"onSectionClick(3)\">\n    &nbsp;EXPERIENCE\n  </button>\n  <button class=\"tyler-button\" (click)=\"onSectionClick(4)\">\n    &nbsp;PROJECTS\n  </button>\n  <button class=\"tyler-button\" (click)=\"onSectionClick(2)\">\n    &nbsp;CONTACT\n  </button>\n</div>\n\n<div class=\"caption\">\n  <app-slide-panel [show]=\"showSplash\">\n    <div class=\"row center-container-nopad\">\n      <span class=\"spanborder\">TYLER MARTINEZ</span>\n    </div>\n    <div class=\"row center-container-nopad\">\n      <app-typerwriter [speed]=\"100\" [pause]=\"20\" [words]=\"['SOFTWARE ENGINEER', 'FULL-STACK DEVELOPER', 'PROBLEM SOLVER']\"></app-typerwriter>\n    </div>\n  </app-slide-panel>\n</div>\n<app-slide-panel [show]=\"showAboutMe\">\n  <div class=\"content-container\">\n    <div class=\"caption2 row center-container\">\n      ABOUT ME\n    </div>\n    <div class=\"row center-container\">\n            <img  src=\"..\\assets\\me.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"row center-container\">\n      <p class=\"content-text\">\n        My name is Tyler Martinez and I'm a Software Engineer/Full-Stack Developer/Problem Solver. I've been working in the industry\n        for the past 4+ years developing software in Agile environments. I pride myself in being a avid learner, researching\n        technologies new to me and working on my skills at work and at home with personal projects. Currently located in\n        Raleigh, North Carolina but will be relocating to Charlotte in July, 2018. Any inquiries can be sent to Tyler.Martinez.Prof@Gmail.com.\n      </p>\n    </div>\n  </div>\n</app-slide-panel>\n<div class=\"caption\">\n  <app-slide-panel [show]=\"showContact\">\n    <div class=\"row center-container-nopad\">\n      <span class=\"spanborder\">\n        <a href=\"mailto:tyler.martinez.prof@gmail.com\">TYLER . MARTINEZ . PROF @ GMAIL.COM</a>\n      </span>\n    </div>\n  </app-slide-panel>\n</div>\n<app-slide-panel [show]=\"showExperience\">\n  <div class=\"content-container\">\n    <div class=\"caption2 row center-container\">\n      EXPERIENCE\n    </div>\n    <div class=\"row center-container\">\n      <p class=\"content-text job-header\">SOFTPRO</p>\n      <p class=\"content-text job-header\">2016 - PRESENT</p>\n      <p class=\"content-text job-italic\">Raleigh, NC (2 years)</p>\n      <p class=\"content-text\">&bull; Responsible for maintaining and extending existing .NET Title Software Application </p>\n      <p class=\"content-text\">&bull; Part of Agile team bringing permission based feature to the product </p>\n      <p class=\"content-text\">&bull; Joined development team and learned in-house tools and languages to bring net new Title feature to completion\n        and to meet hard deadlines </p>\n    </div>\n    <div class=\"row center-container\">\n        <p class=\"content-text job-header\">LABTECH SOFTWARE (CONNECTWISE)</p>\n        <p class=\"content-text job-header\">2014 - 2016</p>\n        <p class=\"content-text job-italic\">Tampa, FL (2 years)</p>\n        <p class=\"content-text\">&bull; Responsible for the quality control and maintenance of a large Remote Monitoring and Management application  </p>\n        <p class=\"content-text\">&bull; Served as Project Owner of a net new Windows and Third-Party Patching application </p>\n        <p class=\"content-text\">&bull; Worked with the User Experience team to develop a WPF control library used for all future projects </p>\n        <p class=\"content-text\">&bull; Member of the Steering Committee for the use of new technologies and establish coding standards  </p>\n        <p class=\"content-text\">&bull; Member of the Internal Education team to promote the documentation of code and provide training sessions  </p>\n      </div>\n      <div class=\"row center-container\">\n          <p class=\"content-text job-header\">FLORIDA STATE UNIVERSITY - GRADUATE TA</p>\n          <p class=\"content-text job-header\">2013 - 2014</p>\n          <p class=\"content-text job-italic\">Tallahassee, Florida </p>\n          <p class=\"content-text\">&bull; I taught the fundamentals of Software Engineering, C++, and Design patterns to underclassmen </p>\n        </div>\n  </div>\n</app-slide-panel>\n<app-slide-panel [show]=\"showProjects\">\n  <div class=\"content-container\">\n    <div class=\"caption2 row center-container\">\n      PROJECTS\n    </div>\n    <div class=\"caption3 row center-container\">\n      <a href=\"https://www.budgettogether.net\">BUDGETTOGETHER.NET</a>\n    </div>\n    <div class=\"row center-container\">\n      <div id=\"btCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"4000\">\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img class=\"d-block w-100\" src=\"..\\assets\\BT0.png\" alt=\"First slide\">\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"..\\assets\\BT1.png\" alt=\"Second slide\">\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"..\\assets\\BT2.png\" alt=\"Third slide\">\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#btCarousel\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#btCarousel\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n      <div class=\"row center-container\">\n        <p class=\"content-text\">&bull; Create shared budgets with other users to keep track of spending</p>\n        <p class=\"content-text\">&bull; Set spending goals and keep track of them easily on your dash board</p>\n        <p class=\"content-text\">&bull; Use entry classifications to further understand your spending habits</p>\n        <p class=\"content-text\">\n          My most recently completed personal project is BudgetTogether which is a cooperative budgeting application. I decided to create\n          this after many conversations between me and my fiancee over our own personal budget. Also wanting to get a chance\n          to use my web development skills outside of work I took the chance to design this. It is an Angular Single Page\n          Application that uses Express and and Node.JS on the backend with MongoDb for it's database. I have it hosted on\n          a DigitalOcean VM runing Ubuntu. It requires a signup code to make an account so if you are interested\n          email me at Tyler.Martinez.Prof@gmail.com.\n        </p>\n      </div>\n\n      <div class=\"caption3 row center-container\">\n        <a href=\"https://github.com/TylerMartinez/YoutubeOnTop\">YOUTUBE ON TOP</a>\n      </div>\n      <div class=\"row center-container\">\n        <div id=\"ytotCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"4000\">\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n              <img class=\"d-block w-100\" src=\"..\\assets\\YTOT.png\" alt=\"First slide\">\n            </div>\n          </div>\n        </div>\n\n        <p class=\"content-text\">&bull; Play Youtube videos on top of all your other windows</p>\n        <p class=\"content-text\">&bull; Resizable to any dimension</p>\n        <p class=\"content-text\">&bull; Work while watching tutorials at the same time</p>\n        <p class=\"content-text\">\n          I created this application after a plugin that was similar in chrome had potentially became compromised. Youtube On Top\n          is in a public repository so any user's can edit it and use it themselves and verify there's nothing shady going\n          on like the plugin I was using before. I use it mostly to have tutorials open when I'm learning new technologies\n          or for background noise when I'm working on my own projects. Technologies used were Angular and Electron.\n        </p>\n      </div>\n\n      <div class=\"caption3 row center-container\">\n        UNNAMED UNITY PROJECT\n      </div>\n      <div class=\"row center-container\">\n        <div id=\"unityCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"4000\">\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n              <img class=\"d-block w-100\" src=\"..\\assets\\unity.png\" alt=\"First slide\">\n            </div>\n          </div>\n        </div>\n\n        <p class=\"content-text\">&bull; Co-operative 2D action platformer</p>\n        <p class=\"content-text\">&bull; Custom networking algorithm</p>\n        <p class=\"content-text\">\n          A video game I have been working on and a passion project. I recently wrote my own networking algorithms to make the co-operative\n          aspect of the game a lot smoother. A lot of work to be done here but a great chance to teach myself a new platform.\n        </p>\n      </div>\n\n      <div class=\"caption3 row center-container\">\n        GOOGLE CODE JAM\n      </div>\n      <div class=\"row center-container\">\n        <p class=\"content-text\">\n          Every year I make an effort to compete in the Google Code Jam qualifiers. This gives me a chance to increase my algorithmic\n          efficiency and flex my Python Skills. I plan on creating a repository with my submitted solutions.\n        </p>\n      </div>\n    </div>\n  </div>\n</app-slide-panel>"

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

module.exports = "<div name=\"slidePanel\" [@showState]=\"show\">\n  <ng-content></ng-content>\n</div>\n"

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

module.exports = "\n  <span class=\"spanborder\">\n    {{display}}\n  </span>\n"

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
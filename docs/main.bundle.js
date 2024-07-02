webpackJsonp([1,4],{

/***/ 348:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 348;


/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(458);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/user/check-pass/src/main.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__check_pass_strategy__ = __webpack_require__(459);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Password Checking';
        this.password = '';
        this.strength = { lessThenEight: false, easy: false, medium: false, strong: false };
        this.strategies = [
            new __WEBPACK_IMPORTED_MODULE_1__check_pass_strategy__["a" /* EasyPasswordStrategy */](),
            new __WEBPACK_IMPORTED_MODULE_1__check_pass_strategy__["b" /* MediumPasswordStrategy */](),
            new __WEBPACK_IMPORTED_MODULE_1__check_pass_strategy__["c" /* StrongPasswordStrategy */]()
        ];
    }
    AppComponent.prototype.onInputChange = function () {
        if (this.password.length === 0) {
            this.strength = { lessThenEight: false, easy: false, medium: false, strong: false };
            return;
        }
        else if (this.password.length < 8) {
            this.strength.lessThenEight = true;
            return;
        }
        else {
            this.strength = {
                lessThenEight: false,
                easy: this.strategies[0].checkStrength(this.password),
                medium: this.strategies[1].checkStrength(this.password),
                strong: this.strategies[2].checkStrength(this.password),
            };
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(617),
            styles: [__webpack_require__(616)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/user/check-pass/src/app.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/user/check-pass/src/app.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasyPasswordStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MediumPasswordStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StrongPasswordStrategy; });
var EasyPasswordStrategy = (function () {
    function EasyPasswordStrategy() {
    }
    EasyPasswordStrategy.prototype.checkStrength = function (password) {
        var onlyLettersRegex = /^[A-Za-z]*$/;
        var onlyDigitsRegex = /^\d*$/;
        var onlySymbolsRegex = /^[^A-Za-z\d]*$/;
        var isEasy = onlyLettersRegex.test(password) ||
            onlyDigitsRegex.test(password) ||
            onlySymbolsRegex.test(password);
        return isEasy;
    };
    return EasyPasswordStrategy;
}());
var MediumPasswordStrategy = (function () {
    function MediumPasswordStrategy() {
    }
    MediumPasswordStrategy.prototype.checkStrength = function (password) {
        var hasLetter = /[A-Za-z]/.test(password);
        var hasDigit = /\d/.test(password);
        var hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
        var isMedium = (hasLetter && hasDigit) ||
            (hasLetter && hasSymbol) ||
            (hasDigit && hasSymbol);
        return isMedium;
    };
    return MediumPasswordStrategy;
}());
var StrongPasswordStrategy = (function () {
    function StrongPasswordStrategy() {
    }
    StrongPasswordStrategy.prototype.checkStrength = function (password) {
        var hasLetter = /[A-Za-z]/.test(password);
        var hasDigit = /\d/.test(password);
        var hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
        var isStrong = hasLetter && hasDigit && hasSymbol;
        return isStrong;
    };
    return StrongPasswordStrategy;
}());
//# sourceMappingURL=/Users/user/check-pass/src/check-pass.strategy.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/user/check-pass/src/environment.js.map

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = ".content, .head {\n  padding: 0 40px;\n}\n\n.content__strength-item {\n  color: grey;\n}\n\n.--easy, #lessThenEight {\n  color: red;\n}\n\n.--medium,\n.--easy.--medium {\n  color: yellow;\n}\n\n.--strong,\n.--medium.--strong,\n.--easy.--medium.--strong {\n  color: green;\n}\n\n.footer {\n  background-color: rgb(207, 230, 230);\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n  bottom: 0;\n  position: absolute;\n}\n"

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"head\">\n  {{title}}\n</h1>\n<div class=\"content\">\n  <input type=\"password\" [(ngModel)]=\"password\" (input)=\"onInputChange()\" class=\"content__input\">\n\n  <ol class=\"content__strength\">\n    <li\n      class=\"content__strength-item\"\n      [class.--easy]=\"strength.easy\"\n      [class.--medium]=\"strength.medium\"\n      [class.--strong]=\"strength.strong\"\n      [id]=\"strength.lessThenEight ? 'lessThenEight' : ''\"\n    >\n      easy\n    </li>\n    <li\n      class=\"content__strength-item\"\n      [class.--medium]=\"strength.medium\"\n      [class.--strong]=\"strength.strong\"\n      [id]=\"strength.lessThenEight ? 'lessThenEight' : ''\"\n    >\n      medium\n    </li>\n    <li\n      class=\"content__strength-item\"\n      [class.--strong]=\"strength.strong\"\n      [id]=\"strength.lessThenEight ? 'lessThenEight' : ''\"\n    >\n      strong\n    </li>\n  </ol>\n</div>\n<footer class=\"footer\">Andriukhina Marharyta 2024</footer>"

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(349);


/***/ })

},[632]);
//# sourceMappingURL=main.bundle.map
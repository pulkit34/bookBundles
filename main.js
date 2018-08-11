(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _single_book_single_book_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./single-book/single-book.component */ "./src/app/single-book/single-book.component.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
                _books_books_component__WEBPACK_IMPORTED_MODULE_11__["BooksComponent"],
                _single_book_single_book_component__WEBPACK_IMPORTED_MODULE_13__["SingleBookComponent"],
                _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_14__["FavoritesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: 'books', component: _books_books_component__WEBPACK_IMPORTED_MODULE_11__["BooksComponent"] },
                    { path: 'single-book/:id', component: _single_book_single_book_component__WEBPACK_IMPORTED_MODULE_13__["SingleBookComponent"] },
                    { path: 'favorites', component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_14__["FavoritesComponent"] }
                ]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"]
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books/books.component.css":
/*!*******************************************!*\
  !*** ./src/app/books/books.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search{\r\n    width:300px;\r\n}\r\n.para{\r\n    background:black;\r\n    color:orange;\r\n    font-size:25px;\r\n    padding:3%;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n.head{\r\n    color:orange;\r\n}\r\n.menu{\r\n    margin-bottom:2%;\r\n    font-size:20px;\r\n    text-align:center;\r\n}\r\n.menu:hover{\r\n    cursor: pointer;\r\n    background: gainsboro;\r\n}\r\n"

/***/ }),

/***/ "./src/app/books/books.component.html":
/*!********************************************!*\
  !*** ./src/app/books/books.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <p class=\"para\">FinvestFX Book App</p>\n    </div>\n   <div class=\"col-4 menu\">Welcome {{name}}</div>\n   <div class=\"col-4 menu\" [routerLink]=\"['/favorites']\">Favourites</div>\n   <div (click)=logout() class=\"col-4 menu\">Logout</div>\n    <div class=\"col-12 mt-2\">\n      <form>\n        <h5 class=\"md-1 head\">Search For Books:</h5>\n        <input type=\"text\" class=\"form-control search\" name=\"book\" [(ngModel)]=\"book\">\n        <br>\n        <button (click)=search() class=\"btn\">Search</button>\n      </form>\n    </div>\n  </div>\n  <h5 class=\"mt-3 mb-2  head\">SEARCH RESULT:</h5>\n  <div class=\"row\" *ngIf=\"searchResult\">\n    <div class=\"col-12 mt-2 mb-2 text-left\" *ngFor=\"let search of searchResult\">\n      <ul>\n        <li>\n          <div class=\"book-image\">\n            <img class=\"img-thumbnail\" src=\"{{search.volumeInfo.imageLinks.thumbnail}}\">\n          </div>\n          <div class=\"book-details mt-2\">\n            Title : {{search.volumeInfo.title}}\n            <br> Authors : {{search.volumeInfo.authors}}\n            <br> Publisher : {{search.volumeInfo.publisher}}\n            <br>\n            <button class=\"btn mt-2\" [routerLink]=\"['/single-book',search.id]\">View</button>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<ngx-spinner>\n  <p style=\"font-size: 16px; color:white\">Searching...</p>\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BooksComponent = /** @class */ (function () {
    function BooksComponent(http, toastr, userService, router) {
        var _this = this;
        this.http = http;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.search = function () {
            _this.userService.searchAllBooks(_this.book).subscribe(function (result) {
                _this.searchResult = result.items;
                console.log(_this.searchResult);
            });
        };
        this.logout = function () {
            ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('userId');
            ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('userName');
            _this.userID = '';
            _this.name = '';
            setTimeout(function () {
                _this.router.navigate(['/login']);
                _this.toastr.success("Logout Successfull");
            }, 1000);
        };
    }
    BooksComponent.prototype.ngOnInit = function () {
        this.name = ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userName');
        this.userID = ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userId');
    };
    BooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/favorites/favorites.component.css":
/*!***************************************************!*\
  !*** ./src/app/favorites/favorites.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".para{\r\n    background:black;\r\n    color:orange;\r\n    font-size:23px;\r\n    padding:3%;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/favorites/favorites.component.html":
/*!****************************************************!*\
  !*** ./src/app/favorites/favorites.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <p class=\"para\">All Favorites!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row text-left mt-3\" *ngIf=allBooks>\r\n        <div *ngFor=\"let book of allBooks\" class=col-md-12>\r\n            <ul>\r\n                <li>\r\n                    <div class=\"book-image\">\r\n                        <img class=\"img-thumbnail\" src=\"{{book.volumeInfo.imageLinks.thumbnail}}\">\r\n                    </div>\r\n                    <div class=\"book-details mt-2\">\r\n                        Title : {{book.volumeInfo.title}}\r\n                        <br> Authors : {{book.volumeInfo.authors}}\r\n                        <br> Publisher : {{book.volumeInfo.publisher}}\r\n                        <br>\r\n                        <button class=\"btn mt-2\" [routerLink]=\"['/single-book',book.id]\">View</button>\r\n                        <br>\r\n                        <button class=\"btn btn-danger mt-2\" (click)=remove(book.id)>Remove</button>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/favorites/favorites.component.ts":
/*!**************************************************!*\
  !*** ./src/app/favorites/favorites.component.ts ***!
  \**************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(toastr, userService) {
        var _this = this;
        this.toastr = toastr;
        this.userService = userService;
        this.allBooks = [];
        this.getAllfavs = function () {
            _this.userService.allfavs(_this.userID).subscribe(function (result) {
                if (result.status == 200) {
                    _this.toastr.info(result.message);
                    for (var _i = 0, _a = result.data; _i < _a.length; _i++) {
                        var x = _a[_i];
                        _this.userService.getSingleBook(x.bookId).subscribe(function (result) {
                            _this.allBooks.push(result);
                        });
                    }
                }
                else {
                    _this.toastr.warning(result.message);
                }
            }, function (error) {
                _this.toastr.error("Error Occured");
            });
        };
        this.remove = function (id) {
            _this.userService.removefavs(id).subscribe(function (apiResponse) {
                _this.toastr.warning(apiResponse.message);
                _this.allBooks = [];
                _this.getAllfavs();
            });
        };
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        this.name = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get("userName");
        this.userID = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get("userId");
        this.getAllfavs();
    };
    FavoritesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.css */ "./src/app/favorites/favorites.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".para{\r\n    background:black;\r\n    color:orange;\r\n    font-size:23px;\r\n    padding:3%;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n.para2{\r\n    font-size:20px;\r\n}\r\n.para3{\r\n    font-size: 20px;\r\n    background-color: gainsboro;\r\n    color:black;\r\n}\r\n.para3:hover{\r\n    background-color:lightslategray;\r\n    cursor: pointer;\r\n    font-size:25px;\r\n    color:black;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <p class=\"para\">FinvestFX Book App</p>\n            </div>\n            <div class=\"col-12\">\n            <p class=\"para2\">Don't Have An Account?</p>\n            <span class=\"para3\" [routerLink]=\"['/signup']\">Click To Sign-Up</span>\n            <br>\n            <br>\n            <h4 class=\"text-center\">Login Here!</h4>\n            <form>\n                <label for=\"email\">Enter Your Email:</label>\n                <br>\n                <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" required>\n                <br>\n                <label for=\"password\">Enter Your Password:</label>\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" required>\n                <br>\n                <button (click)=login() class=\"btn btn-primary text-white\">Login</button>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(toastr, userService, router) {
        var _this = this;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.login = function () {
            if (!_this.email) {
                _this.toastr.warning("Email Parameter is Missing");
            }
            else if (!_this.password) {
                _this.toastr.warning("Password Parameter is Missing");
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.userService.loginFunction(data).subscribe(function (result) {
                    console.log(result);
                    if (result.status == 200) {
                        _this.toastr.success(result.message);
                        setTimeout(function () {
                            ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('userName', result.data.firstName + " " + result.data.lastName);
                            ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('userId', result.data.userId);
                            _this.router.navigate(['/books']);
                        }, 1000);
                    }
                    else {
                        _this.toastr.error(result.message);
                    }
                }, function (err) {
                    _this.toastr.error("ERROR Occured");
                });
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-part1{\r\n    font-size:25px;\r\n}\r\n.nav-part2{\r\n    font-size:20px;\r\n    margin-left:10px;\r\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"nav navbar-light bg-light\">\n    <a class=\"navbar-brand nav-part1\">\n      FinvestFX\n    </a>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link nav-part2\" [routerLink]=\"['/login']\">\n          Login\n        </a>\n      </li>\n    </ul>\n  </nav>\n  <br>\n  <br>\n  <h4 class=\"text-center\">Sign Up Here!</h4>\n  <br>\n  <form>\n    <label for=\"firstName\">Enter First Name:\n    </label>\n    <br>\n    <input type=\"text\" name=\"firstName\" [(ngModel)]=\"firstName\" class=\"form-control\" required>\n    <br>\n\n    <label for=\"lastName\">Enter Last Name:\n    </label>\n    <br>\n    <input type=\"text\" name=\"lastName\" [(ngModel)]=\"lastName\" class=\"form-control\" required>\n    <br>\n\n    <label for=\"email\">Enter Email:\n    </label>\n    <br>\n    <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" required>\n    <br>\n\n    <label for=\"password\">Enter Password:\n    </label>\n    <br>\n    <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" required>\n    <br>\n\n    <label for=\"phone\">Enter Phone:\n    </label>\n    <br>\n    <input type=\"text\" name=\"phone\" [(ngModel)]=\"phone\" class=\"form-control\" required>\n    <br>\n    <button (click)=signUp() class=\"btn btn-primary text-white mb-4\">Sign Up</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(toastr, userService, route) {
        var _this = this;
        this.toastr = toastr;
        this.userService = userService;
        this.route = route;
        this.gotoSignIn = function () {
            _this.route.navigate(['/login']);
        };
        this.signUp = function () {
            if (!_this.email) {
                _this.toastr.warning("Email Is Required");
            }
            else if (!_this.password) {
                _this.toastr.warning("Password Is Required");
            }
            else if (!_this.firstName) {
                _this.toastr.warning("Enter Your First Name");
            }
            else if (!_this.lastName) {
                _this.toastr.warning("Enter Your Last Name");
            }
            else if (!_this.phone) {
                _this.toastr.warning("Phone Number Is Missing");
            }
            else {
                var data = {
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    email: _this.email,
                    password: _this.password,
                    phone: _this.phone
                };
                _this.userService.signupFunction(data).subscribe(function (result) {
                    console.log(result);
                    _this.toastr.success("Sign Up Successfull");
                    setTimeout(function () {
                        _this.gotoSignIn();
                    }, 1000);
                });
            }
        };
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/single-book/single-book.component.css":
/*!*******************************************************!*\
  !*** ./src/app/single-book/single-book.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-md-6{\r\n    font-size:1.3em;\r\n}\r\n\r\n.heading{\r\n    color:orange;\r\n    background:black;\r\n    font-weight: bold;\r\n    padding:3%\r\n}"

/***/ }),

/***/ "./src/app/single-book/single-book.component.html":
/*!********************************************************!*\
  !*** ./src/app/single-book/single-book.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngIf=bookData>\n\n    <div class=\"col-md-12\">\n    \n<h3 class=\"heading text-center mb-3\">{{bookData.volumeInfo.title}}</h3>\n  <button (click)=add(bookData.id,bookData.volumeInfo.title) \n  class=\"btn btn-info mt-3 mb-3\">\n  Add To Favorites.\n</button>  \n</div>\n    <div class=\"col-md-6\">\n      Authors:\n    </div>\n    <div class=\"col-md-6\">\n      {{bookData.volumeInfo.authors}}\n    </div>\n\n    <div class=\"col-md-6\">\n      Published Date:\n    </div>\n    <div class=\"col-md-6\">\n      {{bookData.volumeInfo.publishedDate}}\n    </div>\n\n    <div class=\"col-md-6\">\n      Publisher:\n    </div>\n    <div class=\"col-md-6\">\n      {{bookData.volumeInfo.publisher}}\n    </div>\n\n    <div class=\"col-md-6\">\n      Page Count:\n    </div>\n    <div class=\"col-md-6\">\n      {{bookData.volumeInfo.pageCount}}\n    </div>\n\n    <div class=\"col-md-6\">\n      Height:\n    </div>\n    <div class=\"col-md-6\">\n      {{bookData.volumeInfo.dimensions.height}}\n    </div>\n\n    <div class=\"col-md-6\">\n      Average Rating :\n    </div>\n    <div class=\"col-md-6\">\n      {{bookData.volumeInfo.averageRating}}\n    </div>\n\n    <div class=\"col-md-6\">\n      Categories :\n    </div>\n    <div class=\"col-md-6\">\n      {{bookData.volumeInfo.categories}}\n    </div>\n\n    <div class=\"col-md-6\">\n      Description :\n    </div>\n    <div class=\"col-md-6\" [innerHTML]=bookData.volumeInfo.description>\n    </div>\n\n    <div class=\"col-md-6\">\n      Language :\n    </div>\n    <div class=\"col-md-6\">\n      {{bookData.volumeInfo.language}}\n    </div>\n\n    <div class=\"col-md-6\">\n      Country :\n    </div>\n    <div class=\"col-md-6\">\n      {{bookData.saleInfo.country}}\n    </div>\n\n    <div class=\"col-md-6\">\n      List Price :\n    </div>\n    <div class=\"col-md-6\">\n      {{bookData.saleInfo.listPrice.amount}}\n    </div>\n\n    <div class=\"col-md-6\">\n      Currency Code :\n    </div>\n    <div class=\"col-md-6\">\n      {{bookData.saleInfo.retailPrice.currencyCode}}\n    </div>\n\n    <div class=\"col-md-6\">\n      Buy-Link :\n    </div>\n    <div class=\"col-md-6\">\n      {{bookData.saleInfo.buyLink}}\n    </div>\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/single-book/single-book.component.ts":
/*!******************************************************!*\
  !*** ./src/app/single-book/single-book.component.ts ***!
  \******************************************************/
/*! exports provided: SingleBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleBookComponent", function() { return SingleBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SingleBookComponent = /** @class */ (function () {
    function SingleBookComponent(userService, route, toastr) {
        var _this = this;
        this.userService = userService;
        this.route = route;
        this.toastr = toastr;
        this.add = function (id, name) {
            _this.userService.addtoFav(id, name, _this.userId).subscribe(function (result) {
                if (result.status == 302) {
                    _this.toastr.warning(result.message);
                }
                else if (result.status == 200) {
                    _this.toastr.success(result.message);
                }
                else {
                    _this.toastr.error(result.message);
                }
                console.log(result);
            }, function (error) {
                _this.toastr.error("Error Occured");
            });
        };
    }
    SingleBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userId');
        this.bookID = this.route.snapshot.paramMap.get('id');
        this.userService.getSingleBook(this.bookID).subscribe(function (result) {
            _this.bookData = result;
            console.log(_this.bookData);
        });
    };
    SingleBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-book',
            template: __webpack_require__(/*! ./single-book.component.html */ "./src/app/single-book/single-book.component.html"),
            styles: [__webpack_require__(/*! ./single-book.component.css */ "./src/app/single-book/single-book.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], SingleBookComponent);
    return SingleBookComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        var _this = this;
        this.http = http;
        this.baseurl = "http://bookback.solitarydev.online/api/v1.0";
        this.api = "https://www.googleapis.com/books/v1/volumes?q=";
        this.loginFunction = function (loginData) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('email', loginData.email)
                .set('password', loginData.password);
            return _this.http.post(_this.baseurl + "/login", params);
        };
        this.signupFunction = function (signupData) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('email', signupData.email)
                .set('password', signupData.password)
                .set('phone', signupData.phone)
                .set('firstName', signupData.firstName)
                .set('lastName', signupData.lastName);
            return _this.http.post(_this.baseurl + "/signup", params);
        };
        this.getSingleBook = function (id) {
            console.log(id);
            return _this.http.get("https://www.googleapis.com/books/v1/volumes/" + id);
        };
        this.searchAllBooks = function (bookName) {
            return _this.http.get("" + _this.api + bookName);
        };
        this.addtoFav = function (id, name, userId) {
            var data = {
                bookId: id,
                bookName: name,
                userId: userId
            };
            console.log("Request Made");
            return _this.http.post(_this.baseurl + "/adding", data);
        };
        this.allfavs = function (id) {
            console.log("Id", id);
            return _this.http.get(_this.baseurl + "/all/" + id);
        };
        this.removefavs = function (id) {
            console.log("Service");
            return _this.http.delete(_this.baseurl + "/remove/" + id);
        };
    }
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Pulkit\Frontend\books\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
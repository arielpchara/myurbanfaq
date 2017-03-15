webpackJsonp([1,4],{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__faq_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__is_slug_directive__ = __webpack_require__(503);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var S = __webpack_require__(380);


var FaqCreateComponent = (function () {
    function FaqCreateComponent(faqService, cookie, fb) {
        this.faqService = faqService;
        this.cookie = cookie;
        this.fb = fb;
        this.slug = '';
        this.autoSlug = true;
        this.createForm();
    }
    FaqCreateComponent.prototype.ngOnInit = function () {
    };
    FaqCreateComponent.prototype.createForm = function () {
        var _this = this;
        this.faqForm = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            content: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            slug: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__is_slug_directive__["a" /* isSlugValidation */])()]]
        });
        var title = this.faqForm.controls.title;
        title.valueChanges.subscribe(function (data) {
            _this.mountSlug(data);
        });
        this.faqForm.valueChanges.subscribe(function (data) {
            console.log(_this.faqForm.controls);
        });
    };
    FaqCreateComponent.prototype.mountSlug = function (title) {
        this.slug = S(title).slugify().s;
        if (this.autoSlug) {
            this.faqForm.controls['slug'].setValue(this.slug);
        }
    };
    FaqCreateComponent.prototype.autoSlugToggle = function () {
        this.autoSlug = !this.autoSlug;
        if (this.autoSlug) {
            this.mountSlug(this.faqForm.controls['title'].value);
        }
    };
    FaqCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq-create',
            template: __webpack_require__(569),
            styles: [__webpack_require__(562)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__faq_service__["a" /* FaqService */],
                __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__faq_service__["a" /* FaqService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__faq_service__["a" /* FaqService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _c) || Object])
    ], FaqCreateComponent);
    return FaqCreateComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/faq-create.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FaqService = (function () {
    function FaqService(http) {
        this.http = http;
    }
    FaqService.prototype.getFaqs = function (value) {
        return this.http.get("/api/v1/faq?q=" + value)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    FaqService.prototype.createFaq = function (data, authorization) {
        return this.http.post('/api/v1/faq', data, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'x-access-token': authorization }) })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    FaqService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], FaqService);
    return FaqService;
    var _a;
}());
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/faq.service.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(571),
            styles: [__webpack_require__(564)]
        }), 
        __metadata('design:paramtypes', [])
    ], FaqComponent);
    return FaqComponent;
}());
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/faq.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_token_service__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(505);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(userService, authToken) {
        this.userService = userService;
        this.authToken = authToken;
        this.login = {
            email: '',
            passowrd: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function (form) {
        var _this = this;
        if (form.valid) {
            this.userService.login(this.login.email, this.login.passowrd).subscribe(function (done) { return _this.authToken.setToken(done.token); }, function (err) { return console.error(err); });
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(572),
            styles: [__webpack_require__(565)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_1__auth_token_service__["a" /* AuthTokenService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_token_service__["a" /* AuthTokenService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_token_service__["a" /* AuthTokenService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/login.component.js.map

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 381;


/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(506);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/main.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_token_service__ = __webpack_require__(845);
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
    function AppComponent(authToken) {
        var _this = this;
        this.authToken = authToken;
        this.isAuthenticated = false;
        this.login();
        this._onAutenticated = this.authToken.tokenChanged$.subscribe(function (value) {
            _this.isAuthenticated = !!value;
        });
    }
    ;
    AppComponent.prototype.logout = function (e) {
        this.isAuthenticated = false;
        this.authToken.removeToken();
        return false;
    };
    AppComponent.prototype.login = function () {
        this.isAuthenticated = !!this.authToken.getToken();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._onAutenticated.unsubscribe();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(568),
            styles: [__webpack_require__(561)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__auth_token_service__["a" /* AuthTokenService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_token_service__["a" /* AuthTokenService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_token_service__["a" /* AuthTokenService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/app.component.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__faq_list_faq_list_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__faq_create_faq_create_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__faq_faq_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_search_component__ = __webpack_require__(504);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__faq_list_faq_list_component__["a" /* FaqListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__faq_create_faq_create_component__["a" /* FaqCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_10__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_11__search_search_component__["a" /* SearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__["CookieService"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/app.module.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faq_faq_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_create_faq_create_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var routes = [{
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__faq_faq_component__["a" /* FaqComponent */],
    }, {
        path: 'new', component: __WEBPACK_IMPORTED_MODULE_2__faq_create_faq_create_component__["a" /* FaqCreateComponent */]
    }, {
        path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
    }];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/app.routes.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_service__ = __webpack_require__(337);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaqListComponent = (function () {
    function FaqListComponent(faqService) {
        this.faqService = faqService;
        this.faqs = [];
        this.entrada = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]();
    }
    FaqListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.update('');
        this.entrada.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(function (data) { return _this.update(data); });
    };
    FaqListComponent.prototype.update = function (value) {
        var _this = this;
        if (value === void 0) { value = ''; }
        this.faqService.getFaqs(value).subscribe(function (faqs) { return _this.faqs = faqs; }, function (err) { return console.error(err); });
    };
    FaqListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq-list',
            template: __webpack_require__(570),
            styles: [__webpack_require__(563)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__faq_service__["a" /* FaqService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__faq_service__["a" /* FaqService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__faq_service__["a" /* FaqService */]) === 'function' && _a) || Object])
    ], FaqListComponent);
    return FaqListComponent;
    var _a;
}());
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/faq-list.component.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSlugValidation;
var S = __webpack_require__(380);
function isSlugValidation() {
    return function (control) {
        var slug = control.value;
        var sluglized = S(slug).slugify().s;
        var isDifferent = sluglized !== slug;
        return isDifferent ? { 'isNotSlug': isDifferent } : null;
    };
}
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/is-slug.directive.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
        this.placeholder = "Buscar por ...";
        this.searching = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent.prototype.inputKeyUp = function (value) {
        this.searching.emit(value);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "placeholder", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "searching", void 0);
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(573),
            styles: [__webpack_require__(566)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/search.component.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (email, password) {
        return this.http.post('http://localhost:3000/api/v1/user/authenticate', { email: email, password: password })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/user.service.js.map

/***/ }),

/***/ 506:
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
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/environment.js.map

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n        <ul class=\"nav navbar-nav\">\n            <li><a routerLink=\"/\" routerLinkActive=\"active\">FAQ</a></li>\n            <li [style.display]=\"!isAuthenticated ? 'none' : 'block'\"><a routerLink=\"/new\" routerLinkActive=\"active\">Novo documento</a></li>\n            <li [style.display]=\"isAuthenticated ? 'none' : 'block'\"><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\n            <li [style.display]=\"!isAuthenticated ? 'none' : 'block'\"><a href=\"#\" (click)=\"logout($event)\">Logout</a></li>\n        </ul>\n    </div>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-6 col-sm-offset-3\">\n            <form [formGroup]=\"faqForm\">\n                <div class=\"form-group\">\n                    <label for=\"title\">Titulo</label>\n                    <input type=\"text\" name=\"title\" id=\"title\" class=\"form-control\" formControlName=\"title\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"slug\">Slug</label> <button type=\"button\" (click)=\"autoSlugToggle()\"> mudar slug </button>\n                    <div [hidden]=\"!autoSlug\">\n                        <input type=\"text\" class=\"form-control\" [value]=\"slug\" disabled>\n                    </div>\n                    <div [hidden]=\"autoSlug\">\n                        <input type=\"text\" name=\"slug\" id=\"slug\" class=\"form-control\" formControlName=\"slug\">\n                    </div>\n                    <div [hidden]=\"!slugForm\">\n                        Erro\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"content\">Conteudo</label>\n                    <textarea name=\"content\" id=\"content\" class=\"form-control\" formControlName=\"content\"></textarea>\n                </div>\n            </form>\n            <p>Form value: {{faqForm.value|json}}</p>\n            <p>Form value: {{faqForm.status}}</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <input type=\"text\" [formControl]=\"entrada\" class=\"form-control\" placeholder=\"Gostaria de saber como ...\">\n</div>\n\n<div *ngFor=\"let faq of faqs.data\" class=\"row\">\n    <div class=\"col-sm-12\">\n        {{faq.title}} <small>publicado {{faq.publish}}</small>\n        <div><code>{{faq.content}}</code></div>\n    </div>\n</div>"

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-faq-list></app-faq-list>\n</div>"

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-sm-4 col-sm-offset-4\">\n\n            <form #loginForm=\"ngForm\" (ngSubmit)=\"submit(loginForm)\">\n                <div class=\"form-group\">\n                    <label>Email: </label>\n                    <input id=\"email\" class=\"form-control\" type=\"email\" name=\"email\" id=\"login_email\" #email=\"ngModel\" [(ngModel)]=\"login.email\" required>\n                </div>\n                <div class=\"form-group\">\n                    <label>Senha: </label>\n                    <input id=\"password\" class=\"form-control\" type=\"password\" name=\"password\" id=\"login_password\" #password=\"ngModel\" [(ngModel)]=\"login.passowrd\" required>\n                </div>\n                <button class=\"btn btn-primary btn-block\">ENTRAR</button>\n            </form>\n\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <input type=\"text\" name=\"q\" value=\"\" [placeholder]=\"placeholder\" (keyup)=\"inputKeyUp($event.target.value)\" class=\"form-control \"></div>"

/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(382);


/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthTokenService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthTokenService = (function () {
    function AuthTokenService(cookie) {
        this.cookie = cookie;
        this.tokenChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.tokenChanged$ = this.tokenChanged.asObservable();
    }
    AuthTokenService.prototype.setToken = function (token) {
        this.tokenChanged.next(token);
        this.cookie.put('authorization_token', token);
    };
    AuthTokenService.prototype.getToken = function () {
        return this.cookie.get('authorization_token');
    };
    AuthTokenService.prototype.removeToken = function () {
        this.tokenChanged.next(null);
        this.cookie.remove('authorization_token');
    };
    AuthTokenService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]) === 'function' && _a) || Object])
    ], AuthTokenService);
    return AuthTokenService;
    var _a;
}());
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/auth-token.service.js.map

/***/ })

},[841]);
//# sourceMappingURL=main.bundle.js.map
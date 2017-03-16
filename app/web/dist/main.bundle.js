webpackJsonp([1,4],{

/***/ 338:
<<<<<<< HEAD
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(9);
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

/***/ }),

/***/ 339:
=======
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(136);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__faq_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__is_slug_directive__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__words_directive__ = __webpack_require__(850);
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



var S = __webpack_require__(384);



var FaqCreateComponent = (function () {
    function FaqCreateComponent(faqService, cookie, fb) {
        this.faqService = faqService;
        this.cookie = cookie;
        this.fb = fb;
        this.slug = '';
        this.autoSlug = true;
        this.cheditorconfig = {
            uiColor: '#FFFFFF',
            language: 'pt-br',
            skin: 'minimalist,/skins/minimalist/'
        };
        this.tags = [];
        this.createForm();
        this.getTags();
    }
    FaqCreateComponent.prototype.ngOnInit = function () { };
    FaqCreateComponent.prototype.createForm = function () {
        var _this = this;
        this.faqForm = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            content: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            tags: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__words_directive__["a" /* wordsValidation */])(2)]],
            slug: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__is_slug_directive__["a" /* isSlugValidation */])()]]
        });
        var title = this.faqForm.controls.title;
        title.valueChanges.subscribe(function (data) {
            _this.mountSlug(data);
        });
    };
    FaqCreateComponent.prototype.getFormErrors = function (controlName, type) {
        var control = this.faqForm.get(controlName);
        if (!control.touched) {
            return false;
        }
        var avaiableErrors = control.errors;
        return avaiableErrors && !!avaiableErrors[type];
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
    FaqCreateComponent.prototype.submit = function (event) {
        if (this.faqForm.valid) {
            this.faqService.createFaq(this.faqForm.value, this.cookie.get('authorization_token'))
                .subscribe(function (resp) { return console.log(resp); }, function (err) { return console.error(err); });
        }
    };
    FaqCreateComponent.prototype.getTags = function () {
        var _this = this;
        this.faqService.getTags().subscribe(function (tags) { return _this.tags = tags.data; });
    };
    FaqCreateComponent.prototype.addTag = function (tag, input) {
        input.value += " " + tag._id;
        return false;
    };
    FaqCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq-create',
            template: __webpack_require__(575),
            styles: [__webpack_require__(566)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__faq_service__["a" /* FaqService */],
                __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__faq_service__["a" /* FaqService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__faq_service__["a" /* FaqService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _c) || Object])
    ], FaqCreateComponent);
    return FaqCreateComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/faq-create.component.js.map

/***/ }),

/***/ 340:
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__faq_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__is_slug_directive__ = __webpack_require__(506);
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



var S = __webpack_require__(383);


var FaqCreateComponent = (function () {
    function FaqCreateComponent(faqService, cookie, fb) {
        this.faqService = faqService;
        this.cookie = cookie;
        this.fb = fb;
        this.slug = '';
        this.autoSlug = true;
        this.cheditorconfig = {
            uiColor: '#FFFFFF',
            language: 'pt-br',
            skin: 'minimalist,/skins/minimalist/'
        };
        this.createForm();
    }
    FaqCreateComponent.prototype.ngOnInit = function () { };
    FaqCreateComponent.prototype.createForm = function () {
        var _this = this;
        this.faqForm = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            content: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            slug: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__is_slug_directive__["a" /* isSlugValidation */])()]]
        });
        var title = this.faqForm.controls.title;
        title.valueChanges.subscribe(function (data) {
            _this.mountSlug(data);
        });
    };
    FaqCreateComponent.prototype.getFormErrors = function (controlName, type) {
        var control = this.faqForm.get(controlName);
        if (!control.touched) {
            return false;
        }
        var avaiableErrors = control.errors;
        return avaiableErrors && !!avaiableErrors[type];
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
    FaqCreateComponent.prototype.submit = function (event) {
        console.log(this.faqForm.valid);
        if (this.faqForm.valid) {
            this.faqService.createFaq(this.faqForm.value, this.cookie.get('authorization_token'))
                .subscribe(function (resp) { return console.log(resp); }, function (err) { return console.error(err); });
        }
    };
    FaqCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq-create',
            template: __webpack_require__(574),
            styles: [__webpack_require__(565)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__faq_service__["a" /* FaqService */],
                __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__faq_service__["a" /* FaqService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__faq_service__["a" /* FaqService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _c) || Object])
    ], FaqCreateComponent);
    return FaqCreateComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/faq/app/web/src/faq-create.component.js.map

/***/ }),

/***/ 339:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(207);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(356);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(355);
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqService; });
<<<<<<< HEAD
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
    FaqService.prototype.getTags = function () {
        return this.http.get('/api/v1/faq/tags')
            .map(function (res) { return res.json(); });
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

/***/ 341:
=======
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
        return this.http.post('/api/v1/faq', data, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'x-access-token': authorization }) })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    FaqService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], FaqService);
    return FaqService;
    var _a;
}());
//# sourceMappingURL=E:/faq/app/web/src/faq.service.js.map

/***/ }),

/***/ 340:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
<<<<<<< HEAD
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
            template: __webpack_require__(577),
            styles: [__webpack_require__(568)]
        }), 
        __metadata('design:paramtypes', [])
    ], FaqComponent);
    return FaqComponent;
}());
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/faq.component.js.map

/***/ }),

/***/ 342:
=======
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
            template: __webpack_require__(576),
            styles: [__webpack_require__(567)]
        }), 
        __metadata('design:paramtypes', [])
    ], FaqComponent);
    return FaqComponent;
}());
//# sourceMappingURL=E:/faq/app/web/src/faq.component.js.map

/***/ }),

/***/ 341:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_token_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(509);
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
            template: __webpack_require__(578),
            styles: [__webpack_require__(569)],
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

/***/ 385:
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(508);
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
    function LoginComponent(userService, cookie) {
        this.userService = userService;
        this.cookie = cookie;
        this.login = {
            email: '',
            passowrd: ''
        };
        this.subs = this.userService.isLogged$.subscribe(function (l) { return console.log('login', l); });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    LoginComponent.prototype.submit = function (form) {
        var _this = this;
        if (form.valid) {
            this.userService.login(this.login.email, this.login.passowrd).subscribe(function (done) {
                _this.cookie.put('authorization_token', done.token);
                _this.userService.checkIsLogged(done);
            }, function (err) { return console.error(err); });
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(577),
            styles: [__webpack_require__(568)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/faq/app/web/src/login.component.js.map

/***/ }),

/***/ 384:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
<<<<<<< HEAD
webpackEmptyContext.id = 385;
=======
webpackEmptyContext.id = 384;
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72


/***/ }),

<<<<<<< HEAD
/***/ 386:
=======
/***/ 385:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(510);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/main.js.map

/***/ }),

/***/ 503:
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(509);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/faq/app/web/src/main.js.map

/***/ }),

/***/ 502:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_token_service__ = __webpack_require__(338);
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
            template: __webpack_require__(574),
            styles: [__webpack_require__(565)],
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

/***/ 504:
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(508);
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
    function AppComponent(userService) {
        this.userService = userService;
        this.userService.isLogged$.subscribe(function (confirm) {
            console.log('app', confirm);
        });
    }
    AppComponent.prototype.teste = function () {
        this.userService.checkIsLogged({ success: true, token: '123' });
        return false;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(573),
            styles: [__webpack_require__(564)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=E:/faq/app/web/src/app.component.js.map

/***/ }),

/***/ 503:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_ckeditor__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__faq_list_faq_list_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__faq_create_faq_create_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__faq_faq_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_search_component__ = __webpack_require__(508);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__faq_list_faq_list_component__["a" /* FaqListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__faq_create_faq_create_component__["a" /* FaqCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_11__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_12__search_search_component__["a" /* SearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_ckeditor__["CKEditorModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__["CookieService"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/app.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faq_faq_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_create_faq_create_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(342);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_ckeditor__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__faq_list_faq_list_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__faq_create_faq_create_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__faq_faq_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_search_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_header_component__ = __webpack_require__(849);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__faq_list_faq_list_component__["a" /* FaqListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__faq_create_faq_create_component__["a" /* FaqCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_11__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_12__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_13__header_header_component__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_ckeditor__["CKEditorModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__["CookieService"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/faq/app/web/src/app.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faq_faq_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_create_faq_create_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(341);
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
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

<<<<<<< HEAD
/***/ 506:
=======
/***/ 505:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(136);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_service__ = __webpack_require__(340);
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
        this.entrada = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
    }
    FaqListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entrada.valueChanges
            .filter(function (value) { return value.length > 2; })
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
            template: __webpack_require__(576),
            styles: [__webpack_require__(567)],
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

/***/ 507:
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_service__ = __webpack_require__(339);
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
        this.entrada = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
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
            template: __webpack_require__(575),
            styles: [__webpack_require__(566)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__faq_service__["a" /* FaqService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__faq_service__["a" /* FaqService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__faq_service__["a" /* FaqService */]) === 'function' && _a) || Object])
    ], FaqListComponent);
    return FaqListComponent;
    var _a;
}());
//# sourceMappingURL=E:/faq/app/web/src/faq-list.component.js.map

/***/ }),

/***/ 506:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSlugValidation;
<<<<<<< HEAD
var S = __webpack_require__(384);
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

/***/ 508:
=======
var S = __webpack_require__(383);
function isSlugValidation() {
    return function (control) {
        var slug = control.value;
        var sluglized = S(slug).slugify().s;
        var isDifferent = sluglized !== slug;
        return isDifferent ? { 'isNotSlug': isDifferent } : null;
    };
}
//# sourceMappingURL=E:/faq/app/web/src/is-slug.directive.js.map

/***/ }),

/***/ 507:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
<<<<<<< HEAD
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
            template: __webpack_require__(579),
            styles: [__webpack_require__(570)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/search.component.js.map

/***/ }),

/***/ 509:
=======
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
            template: __webpack_require__(578),
            styles: [__webpack_require__(569)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
//# sourceMappingURL=E:/faq/app/web/src/search.component.js.map

/***/ }),

/***/ 508:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(207);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(240);
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

/***/ 510:
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
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
        // source
        this.isLogged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        // stream
        this.isLogged$ = this.isLogged.asObservable();
        this.isLogged$.subscribe(function (service) { return console.log('service', service); });
    }
    UserService.prototype.login = function (email, password) {
        return this.http.post('http://localhost:3000/api/v1/user/authenticate', { email: email, password: password })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error || 'Server error'); });
    };
    UserService.prototype.checkIsLogged = function (data) {
        if (data.success && data.token) {
            this.isLogged.next(true);
        }
        this.isLogged.complete();
        return data;
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=E:/faq/app/web/src/user.service.js.map

/***/ }),

/***/ 509:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
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

<<<<<<< HEAD
/***/ 565:
=======
/***/ 564:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

<<<<<<< HEAD
/***/ 566:
=======
/***/ 565:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

<<<<<<< HEAD
/***/ 567:
=======
/***/ 566:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

<<<<<<< HEAD
/***/ 568:
=======
/***/ 567:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

<<<<<<< HEAD
/***/ 569:
=======
/***/ 568:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

<<<<<<< HEAD
/***/ 570:
=======
/***/ 569:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

<<<<<<< HEAD
/***/ 574:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n        <ul class=\"nav navbar-nav\">\n            <li><a routerLink=\"/\" routerLinkActive=\"active\">FAQ</a></li>\n            <li [style.display]=\"!isAuthenticated ? 'none' : 'block'\"><a routerLink=\"/new\" routerLinkActive=\"active\">Novo documento</a></li>\n            <li [style.display]=\"isAuthenticated ? 'none' : 'block'\"><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\n            <li [style.display]=\"!isAuthenticated ? 'none' : 'block'\"><a href=\"#\" (click)=\"logout($event)\">Logout</a></li>\n        </ul>\n    </div>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 575:
=======
/***/ 573:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<a href=\"#\" (click)=\"teste()\">ariel</a>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 574:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <form [formGroup]=\"faqForm\" (submit)=\"submit($event)\">\n                <div class=\"form-group\">\n                    <label for=\"title\">Titulo</label>\n                    <input type=\"text\" name=\"title\" id=\"title\" class=\"form-control\" formControlName=\"title\">\n                    <div [hidden]=\"!getFormErrors('title','required')\">\n                        Obrigatório\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <input [style.display]=\"autoSlug ? 'block':'none'\" type=\"text\" class=\"form-control\" [value]=\"slug\" disabled>\n                        <input [style.display]=\"!autoSlug ? 'block':'none'\" type=\"text\" name=\"slug\" id=\"slug\" class=\"form-control\" formControlName=\"slug\">\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-default\" type=\"button\" (click)=\"autoSlugToggle()\"> {{!autoSlug?'auto':'manual'}} </button>\n                        </span>\n                    </div>\n                    <div [hidden]=\"!getFormErrors('slug','isNotSlug')\">\n                        Error no slug\n                    </div>\n                    <div [hidden]=\"!getFormErrors('slug','required')\">\n                        Obrigatório\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"content\">Conteudo</label>\n                    <ckeditor formControlName=\"content\" [config]=\"cheditorconfig\"></ckeditor>\n                    <div [hidden]=\"!getFormErrors('content','required')\">\n                        Obrigatório\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"tags\">Grupos</label>\n                    <input type=\"text\" name=\"tags\" id=\"tags\" class=\"form-control\" formControlName=\"tags\" #inputTags>\n                    <div [hidden]=\"!getFormErrors('tags','required')\">\n                        Obrigatório\n                    </div>\n                    <a href=\"#\" (click)=\"addTag(tag, inputTags)\" *ngFor=\"let tag of tags\">\n                        {{tag._id}} <span class=\"badge\">{{tag.count}}</span>\n                    </a>\n                    <div [hidden]=\"!getFormErrors('tags','minWords')\">\n                        Mínimo 2 grupos\n                    </div>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\"> <i class=\"fa fa-save\"></i> salvar </button>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

<<<<<<< HEAD
/***/ 576:
=======
/***/ 575:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <input type=\"text\" [formControl]=\"entrada\" class=\"form-control\" placeholder=\"Gostaria de saber como ...\">\n</div>\n\n<div *ngFor=\"let faq of faqs.data\" class=\"row\">\n    <div class=\"col-sm-12\">\n        <h4>\n            {{faq.title}} <small>publicado {{faq.publish}}</small>\n        </h4>\n        <div [innerHTML]=\"faq.content\"></div>\n    </div>\n</div>"

/***/ }),

<<<<<<< HEAD
/***/ 577:
=======
/***/ 576:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-faq-list></app-faq-list>\n</div>"

/***/ }),

<<<<<<< HEAD
/***/ 578:
=======
/***/ 577:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-sm-4 col-sm-offset-4\">\n\n            <form #loginForm=\"ngForm\" (ngSubmit)=\"submit(loginForm)\">\n                <div class=\"form-group\">\n                    <label>Email: </label>\n                    <input id=\"email\" class=\"form-control\" type=\"email\" name=\"email\" id=\"login_email\" #email=\"ngModel\" [(ngModel)]=\"login.email\" required>\n                </div>\n                <div class=\"form-group\">\n                    <label>Senha: </label>\n                    <input id=\"password\" class=\"form-control\" type=\"password\" name=\"password\" id=\"login_password\" #password=\"ngModel\" [(ngModel)]=\"login.passowrd\" required>\n                </div>\n                <button class=\"btn btn-primary btn-block\">ENTRAR</button>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

<<<<<<< HEAD
/***/ 579:
=======
/***/ 578:
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <input type=\"text\" name=\"q\" value=\"\" [placeholder]=\"placeholder\" (keyup)=\"inputKeyUp($event.target.value)\" class=\"form-control \"></div>"

/***/ }),

<<<<<<< HEAD
/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(386);
=======
/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(385);


/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(508);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.isLogged = false;
        this.userService.isLogged$.subscribe(function (confirm) {
            console.log('header', confirm);
            _this.isLogged = confirm;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.teste = function () {
        this.userService.checkIsLogged({ success: true, token: '123' });
        return false;
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(851),
            styles: [__webpack_require__(850)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a;
}());
//# sourceMappingURL=E:/faq/app/web/src/header.component.js.map

/***/ }),

/***/ 850:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 851:
/***/ (function(module, exports) {
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n        <ul class=\"nav navbar-nav\">\n            <li><a routerLink=\"/\" routerLinkActive=\"active\">FAQ</a></li>\n            <li><a routerLink=\"/new\" routerLinkActive=\"active\">Novo</a></li>\n            <li><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\n            <li>\n                <a href=\"#\" (click)=\"teste()\">{{isLogged}}</a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wordsValidation;
function wordsValidation(min) {
    return function (control) {
        var words = control.value.trim().split(' ').length;
        return words < min ? { 'minWords': true } : null;
    };
}
//# sourceMappingURL=/Users/arielpchara/TheCode/myurbanfaq/app/web/src/words.directive.js.map

/***/ })

<<<<<<< HEAD
},[847]);
=======
},[846]);
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
//# sourceMappingURL=main.bundle.js.map
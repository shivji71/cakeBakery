(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Chhail Bihari\Documents\WEB DEVELOPMENT\angular\my-app\src\main.ts */"zUnb");


/***/ }),

/***/ "5AQt":
/*!**************************************!*\
  !*** ./src/app/eggless.directive.ts ***!
  \**************************************/
/*! exports provided: EgglessDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgglessDirective", function() { return EgglessDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class EgglessDirective {
    constructor(dr) {
        this.dr = dr;
        this.element = this.dr.nativeElement;
    }
}
EgglessDirective.ɵfac = function EgglessDirective_Factory(t) { return new (t || EgglessDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
EgglessDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EgglessDirective, selectors: [["", "appEggless", ""]] });


/***/ }),

/***/ "8BFl":
/*!************************************************!*\
  !*** ./src/app/userlist/userlist.component.ts ***!
  \************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../commonservice.service */ "l8by");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function UserlistComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserlistComponent_tr_13_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.removeItem(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", value_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class UserlistComponent {
    constructor(data) {
        this.data = data;
        this.userData = this.data.arr;
    }
    ngOnInit() {
    }
    removeItem(index) {
        this.data.arr.splice(index, 1);
    }
}
UserlistComponent.ɵfac = function UserlistComponent_Factory(t) { return new (t || UserlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"])); };
UserlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserlistComponent, selectors: [["app-userlist"]], decls: 14, vars: 1, consts: [["ng-app", ""], ["appHtmldirective", "", 4, "ngFor", "ngForOf"], ["appHtmldirective", ""], ["alt", "", 3, "src"], [1, "btn", 3, "click"]], template: function UserlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserlistComponent_tr_13_Template, 11, 3, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["fieldset[_ngcontent-%COMP%] {\r\n    background-color: #a7d82093;\r\n    width: 82vw;\r\n    height: 100%;\r\n    margin: 5%;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n}\r\nfieldset[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    background-color: rgba(146, 184, 77, 0.644);\r\n    color: black;\r\n    margin: 10px;\r\n\r\n    background-color: white;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\r\n}\r\nlegend[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\r\ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n\r\n\r\n\r\n}\r\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n    border-right: 2px solid white;\r\n    font-size: 18px;\r\n}\r\ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  \r\n    margin: 40px auto;\r\n    padding: 10px;\r\n    border-width: 0;\r\n    border-radius: 2px;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\r\n    background-color: #fc0000b7;\r\n    color: #000000;\r\n    transition: background-color .3s;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztBQUVoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLFlBQVk7SUFDWixZQUFZOztJQUVaLHVCQUF1QjtJQUN2Qix1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksWUFBWTs7OztBQUloQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CO0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUVBOztHQUVHO0FBRUg7O0lBRUksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QywyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGdDQUFnQztFQUNsQyIsImZpbGUiOiJ1c2VybGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E3ZDgyMDkzO1xyXG4gICAgd2lkdGg6IDgydnc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDUlO1xyXG59XHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxufVxyXG5maWVsZHNldCB0YWJsZSB0ciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDYsIDE4NCwgNzcsIDAuNjQ0KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogMTBweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIC42KTtcclxufVxyXG5sZWdlbmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnRyIHRkIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuXHJcblxyXG5cclxufVxyXG5cclxudHIgdGgge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbnRyIHRkIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vKiB0ciB0ZCBidXR0b24ge1xyXG4gICAgXHJcbn0gKi9cclxuXHJcbi5idG4ge1xyXG4gIFxyXG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgLjYpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjMDAwMGI3O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcclxuICB9Il19 */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slider/slider.component */ "oB+8");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items/items.component */ "RNaf");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-items");
    } }, directives: [_slider_slider_component__WEBPACK_IMPORTED_MODULE_1__["SliderComponent"], _items_items_component__WEBPACK_IMPORTED_MODULE_2__["ItemsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Dtz2":
/*!****************************************!*\
  !*** ./src/app/itemstyle.directive.ts ***!
  \****************************************/
/*! exports provided: ItemstyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemstyleDirective", function() { return ItemstyleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ItemstyleDirective {
    constructor(el) {
        this.el = el;
        this.element = this.el.nativeElement;
    }
    enterHover() {
        this.element.style.transform = 'scale(1.1)';
        this.element.style.transition = "all 1s";
    }
    leaveHover() {
        this.element.style.transform = 'scale(1)';
    }
}
ItemstyleDirective.ɵfac = function ItemstyleDirective_Factory(t) { return new (t || ItemstyleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ItemstyleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ItemstyleDirective, selectors: [["", "appItemstyle", ""]], hostBindings: function ItemstyleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ItemstyleDirective_mouseenter_HostBindingHandler() { return ctx.enterHover(); })("mouseleave", function ItemstyleDirective_mouseleave_HostBindingHandler() { return ctx.leaveHover(); });
    } } });


/***/ }),

/***/ "FEl1":
/*!*************************************!*\
  !*** ./src/app/search.directive.ts ***!
  \*************************************/
/*! exports provided: SearchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDirective", function() { return SearchDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commonservice.service */ "l8by");


class SearchDirective {
    // @Input () searchQuery:any
    constructor(cs) {
        this.cs = cs;
    }
}
SearchDirective.ɵfac = function SearchDirective_Factory(t) { return new (t || SearchDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"])); };
SearchDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SearchDirective, selectors: [["", "appSearch", ""]] });


/***/ }),

/***/ "IiZn":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _loadingintercepter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../loadingintercepter.service */ "ix5z");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CheckoutComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CheckoutComponent {
    // ingrediants:any = [];
    constructor(route, http, router, intercept) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.intercept = intercept;
        this.checkoutDetails = {};
        this.checkoutCart = [];
        this.showOverlay = true;
        this.cartItems();
        // this.cakeid = this.route.snapshot.params['cakeid'];
        // console.log(this.cakeid);
    }
    ngOnInit() {
        // this.intercept.navigationInterceptor();
    }
    orderNow() {
        console.log(this.checkoutDetails);
    }
    cartItems() {
        let apiUrl = `https://apifromashu.herokuapp.com/api/cakecart`;
        this.http.post(apiUrl, {}).subscribe((response) => {
            this.checkoutCart = response.data;
            // console.log("rr",response.data);
            this.checkoutDetails['data'] = response.data;
            // this.checkoutDetails['ingradiants'] = response.data
            this.checkoutDetails.totalPrice = response.data.reduce((acc, value) => acc + value.price, 0);
            this.showOverlay = false;
        }, (error) => {
            console.log('this is response' + error);
        });
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loadingintercepter_service__WEBPACK_IMPORTED_MODULE_3__["LoadingintercepterService"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 33, vars: 7, consts: [[1, "checkout"], [1, "checkoutHeader"], [1, "mb-3"], ["for", "formGroupExampleInput", 1, "form-label"], ["type", "text", "name", "name", "id", "formGroupExampleInput", "placeholder", "Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "formGroupExampleInput2", 1, "form-label"], ["type", "text", "name", "address", "id", "formGroupExampleInput2", "placeholder", "Address", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "pincode", "id", "formGroupExampleInput", "placeholder", "Pincode", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "phone", "id", "formGroupExampleInput2", "placeholder", "Phone", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "city", "id", "formGroupExampleInput", "placeholder", "City", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "totalPrice", "id", "formGroupExampleInput", "placeholder", "Total Price", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"], [1, "loading", "hidden"], ["src", "..//../assets/loading2.gif", "alt", ""], ["class", "my-overlay", 4, "ngIf"], [1, "my-overlay"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CHECKOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_7_listener($event) { return ctx.checkoutDetails.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_11_listener($event) { return ctx.checkoutDetails.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_15_listener($event) { return ctx.checkoutDetails.pincode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_19_listener($event) { return ctx.checkoutDetails.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_23_listener($event) { return ctx.checkoutDetails.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_27_listener($event) { return ctx.checkoutDetails.totalPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_Template_button_click_28_listener() { return ctx.orderNow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Order Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CheckoutComponent_div_32_Template, 2, 0, "div", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkoutDetails.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkoutDetails.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkoutDetails.pincode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkoutDetails.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkoutDetails.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkoutDetails.totalPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOverlay);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".checkout[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    background-color: #e9ecefaf;\r\n    \r\n    padding: 10px;\r\n    margin: 30px;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    border-radius: 4px;\r\n}\r\n\r\n.checkoutHeader[_ngcontent-%COMP%] {\r\n    background-color: #6c757d;\r\n    height: 20%;\r\n    padding: 10px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.checkoutHeader[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    text-align: end;\r\n    color: white;\r\n\r\n}\r\n\r\n.checkout[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 10%;\r\n}\r\n\r\n.loading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 100px;\r\n    overflow: hidden;\r\n}\r\n\r\n.my-overlay[_ngcontent-%COMP%] {\r\n    left: 0 !important;\r\n    top: 0 !important;\r\n    z-index: 10000 !important;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    position: fixed !important;\r\n    background-color: rgba(0,0,0,0.9) !important;\r\n    cursor: pointer !important;\r\n    visibility: visible !important;\r\n    transition: visibility 0s, opacity 0.4s linear !important;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: wait !important;\r\n}\r\n\r\n.my-overlay[_ngcontent-%COMP%]   i.fa.fa-spinner.fa-spin[_ngcontent-%COMP%], .spinner-big[_ngcontent-%COMP%] {\r\n    font-size: 100px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osdUdBQXVHO0lBQ3ZHLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFJQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsNENBQTRDO0lBQzVDLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIseURBQXlEO0lBQ3pELGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJjaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrb3V0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmYWY7XHJcbiAgICAvKiB3aWR0aDogMTAwdnc7ICovXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiKDAgMCAwIC8gMjAlKSwgMCAycHggMnB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggNXB4IDAgcmdiKDAgMCAwIC8gMTIlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmNoZWNrb3V0SGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmNoZWNrb3V0SGVhZGVyIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5jaGVja291dCBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuXHJcblxyXG4ubG9hZGluZyBpbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5teS1vdmVybGF5IHtcclxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTAwMDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjkpICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC40cyBsaW5lYXIgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHdhaXQgIWltcG9ydGFudDtcclxufVxyXG4ubXktb3ZlcmxheSBpLmZhLmZhLXNwaW5uZXIuZmEtc3BpbiwgLnNwaW5uZXItYmlnIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "KVaT":
/*!**************************************************!*\
  !*** ./src/app/navsearch/navsearch.component.ts ***!
  \**************************************************/
/*! exports provided: NavsearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavsearchComponent", function() { return NavsearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../commonservice.service */ "l8by");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _itemstyle_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../itemstyle.directive */ "Dtz2");







function NavsearchComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavsearchComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.send(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", value_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r1.weight);
} }
class NavsearchComponent {
    constructor(cs, route, http, router) {
        this.cs = cs;
        this.route = route;
        this.http = http;
        this.router = router;
        this.route.queryParams.subscribe((queryparams) => {
            let apiUrl = `https://apifromashu.herokuapp.com/api/searchcakes?q=`;
            this.http.get(apiUrl + queryparams.q).subscribe((response) => {
                console.log("this is response" + response);
                this.searchkey = response.data;
                console.log(this.searchkey);
                // this.route.navigate(['/navsearch'], {queryParams:{q:this.searchkey}})
            }, (error) => {
                console.log("this is response" + error);
            });
            console.log('results', this.searchkey);
        });
    }
    ngOnInit() { }
    filter() {
        if (!this.min && !this.max)
            return;
        this.searchkey = this.searchkey.filter((e) => (this.min
            ? e.price >= this.min
            : true) && (this.max
            ? e.price <= this.max
            : true));
        console.log(this.min);
    }
    send(i) {
        this.router.navigate(['/cakedetails', this.searchkey[i].cakeid]);
    }
}
NavsearchComponent.ɵfac = function NavsearchComponent_Factory(t) { return new (t || NavsearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavsearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavsearchComponent, selectors: [["app-navsearch"]], decls: 6, vars: 3, consts: [[1, "filter"], ["type", "number", "name", "min", "placeholder", "Min Price", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "max", "placeholder", "Max Price", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "SORT", 1, "btn", "btn-info", 3, "click"], [1, "myCard"], ["appItemstyle", "", "class", "card", "style", "width: 14rem;", 3, "click", 4, "ngFor", "ngForOf"], ["appItemstyle", "", 1, "card", 2, "width", "14rem", 3, "click"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-text"]], template: function NavsearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavsearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.min = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavsearchComponent_Template_input_ngModelChange_2_listener($event) { return ctx.max = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavsearchComponent_Template_input_click_3_listener() { return ctx.filter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavsearchComponent_div_5_Template, 9, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchkey);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _itemstyle_directive__WEBPACK_IMPORTED_MODULE_6__["ItemstyleDirective"]], styles: [".myCard[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    margin: 30px;\r\n    margin-top: 100px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 130px;\r\n   \r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  background-color: #eeeeee;\r\n\r\n}\r\n\r\n.search[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n\r\n.search[_ngcontent-%COMP%]   input[type = \"text\"][_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    padding: 4px;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    border: none;\r\n\r\n}\r\n\r\n.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    padding: 4px;\r\n    border: none;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    border-radius: 4px;\r\n    outline: 0;\r\n}\r\n\r\n.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    transform: rotate(360deg);\r\n   transition: all 1s\r\n    \r\n}\r\n\r\n.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\r\n    transform: rotate(360deg);\r\n    background: #e4e6e4cc;\r\n    opacity: 0;\r\n    transition: all 0.5s\r\n    \r\n}\r\n\r\n.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\r\n\r\n\r\n\r\n.filter[_ngcontent-%COMP%]{\r\n\r\n   \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n \r\n    margin: 10px;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    top: 10%;\r\n    left: 30%;\r\n    position: fixed;\r\n    z-index: 10;\r\n    background-color: rgba(233, 233, 233, 0.801);\r\n    border-radius: 4px;\r\n    width: 40vw;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    border: none;\r\n    padding: 10px;\r\n    border-radius: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdnNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUM7RUFDQyx5QkFBeUI7O0FBRTNCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUdBQXVHO0lBQ3ZHLFlBQVk7O0FBRWhCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osdUdBQXVHO0lBQ3ZHLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSx5QkFBeUI7R0FDMUI7O0FBRUg7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVjs7QUFFSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsV0FBVzs7QUFFWDs7O0lBR0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLFlBQVk7SUFDWix1R0FBdUc7SUFDdkcsUUFBUTtJQUNSLFNBQVM7SUFDVCxlQUFlO0lBQ2YsV0FBVztJQUNYLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUNBO0lBQ0ksWUFBWTtJQUNaLHVHQUF1RztJQUN2RyxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJuYXZzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teUNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5jYXJkIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICBcclxufVxyXG4gXHJcbiAuY2FyZC1ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG5cclxufSBcclxuLnNlYXJjaCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLnNlYXJjaCBpbnB1dFt0eXBlID0gXCJ0ZXh0XCJdIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiKDAgMCAwIC8gMjAlKSwgMCAycHggMnB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggNXB4IDAgcmdiKDAgMCAwIC8gMTIlKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbn1cclxuLnNlYXJjaCBidXR0b24ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDJweCAycHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCA1cHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4uc2VhcmNoIGJ1dHRvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICB0cmFuc2l0aW9uOiBhbGwgMXNcclxuICAgIFxyXG59XHJcbi5zZWFyY2ggYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgYmFja2dyb3VuZDogI2U0ZTZlNGNjO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzXHJcbiAgICBcclxufVxyXG5cclxuLmFjdGl2ZSBpbWcge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLyogZmlsdGVyICovXHJcblxyXG4uZmlsdGVye1xyXG5cclxuICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gXHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDJweCAycHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCA1cHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCAyMzMsIDIzMywgMC44MDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbn1cclxuLmZpbHRlciBpbnB1dCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDJweCAycHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCA1cHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "RNaf":
/*!******************************************!*\
  !*** ./src/app/items/items.component.ts ***!
  \******************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../commonservice.service */ "l8by");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _loadingintercepter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../loadingintercepter.service */ "ix5z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _itemstyle_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../itemstyle.directive */ "Dtz2");







function ItemsComponent_div_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
} }
function ItemsComponent_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
} }
function ItemsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.sendID(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItemsComponent_div_1_i_2_Template, 1, 0, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ItemsComponent_div_1_i_3_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r2.eggless);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !value_r2.eggless);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", value_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r2.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r2.weight);
} }
function ItemsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ItemsComponent {
    constructor(cs, router, http, loading) {
        this.cs = cs;
        this.router = router;
        this.http = http;
        this.loading = loading;
        this.showOverlay = true;
    }
    ngOnInit() {
        let apiUrl = "https://apifromashu.herokuapp.com/api/allcakes";
        this.http.get(apiUrl).subscribe((response) => {
            console.log(response.data[0], "this is response");
            this.card = response.data;
            this.showOverlay = false;
        }, (error) => {
            console.log("this is response" + error);
        });
    }
    sendID(i) {
        console.log(this.card);
        this.router.navigate(['/cakedetails', this.card[i].cakeid]);
    }
}
ItemsComponent.ɵfac = function ItemsComponent_Factory(t) { return new (t || ItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loadingintercepter_service__WEBPACK_IMPORTED_MODULE_4__["LoadingintercepterService"])); };
ItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemsComponent, selectors: [["app-items"]], decls: 3, vars: 2, consts: [[1, "myCard"], ["appItemstyle", "", "class", "card", "style", "width: 12rem; height: 18rem;", 3, "click", 4, "ngFor", "ngForOf"], ["class", "my-overlay", 4, "ngIf"], ["appItemstyle", "", 1, "card", 2, "width", "12rem", "height", "18rem", 3, "click"], [1, "cardImg"], ["class", "fas fa-egg vag", 4, "ngIf"], ["class", "fas fa-egg nonvag", 4, "ngIf"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-text"], [1, "fas", "fa-egg", "vag"], [1, "fas", "fa-egg", "nonvag"], [1, "my-overlay"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin"]], template: function ItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemsComponent_div_1_Template, 12, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItemsComponent_div_2_Template, 2, 0, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.card);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOverlay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _itemstyle_directive__WEBPACK_IMPORTED_MODULE_6__["ItemstyleDirective"]], styles: [".myCard[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    margin: 30px;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n}\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 150px;\r\n}\r\n.card-body[_ngcontent-%COMP%] {\r\n  background-color: #eeeeee;\r\n\r\n}\r\n.cardImg[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.vag[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n    color: rgba(255, 0, 0, 0.822);\r\n    padding: 5px;\r\n    width: 30px;\r\n    position: absolute;\r\n\r\n  \r\n}\r\n.nonvag[_ngcontent-%COMP%] {\r\n    color: rgba(248, 1, 1, 0.829);\r\n    padding: 5px;\r\n    width: 30px;\r\n    position: absolute;\r\n\r\n}\r\n.search[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n.search[_ngcontent-%COMP%]   input[type = \"text\"][_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    padding: 4px;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    border: none;\r\n\r\n}\r\n.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    padding: 4px;\r\n    border: none;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    border-radius: 4px;\r\n    outline: 0;\r\n}\r\n.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    transform: rotate(360deg);\r\n   transition: all 1s\r\n    \r\n}\r\n.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\r\n    transform: rotate(360deg);\r\n    background: #e4e6e4cc;\r\n    opacity: 0;\r\n    transition: all 0.5s\r\n    \r\n}\r\n.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\r\n.my-overlay[_ngcontent-%COMP%] {\r\n    left: 0 !important;\r\n    top: 0 !important;\r\n    z-index: 10000 !important;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    position: fixed !important;\r\n    background-color: rgba(0,0,0,0.9) !important;\r\n    cursor: pointer !important;\r\n    visibility: visible !important;\r\n    transition: visibility 0s, opacity 0.4s linear !important;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: wait !important;\r\n}\r\n.my-overlay[_ngcontent-%COMP%]   i.fa.fa-spinner.fa-spin[_ngcontent-%COMP%], .spinner-big[_ngcontent-%COMP%] {\r\n    font-size: 100px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVDO0VBQ0MseUJBQXlCOztBQUUzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjs7O0FBR3RCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVHQUF1RztJQUN2RyxZQUFZOztBQUVoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osdUdBQXVHO0lBQ3ZHLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHlCQUF5QjtHQUMxQjs7QUFFSDtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Y7O0FBRUo7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLDRDQUE0QztJQUM1QywwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLHlEQUF5RDtJQUN6RCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJpdGVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Q2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbjogMzBweDtcclxufVxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLmNhcmQgaW1nIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuIFxyXG4gLmNhcmQtYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuXHJcbn0gXHJcbi5jYXJkSW1nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udmFnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjgyMik7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgXHJcbn1cclxuLm5vbnZhZyB7XHJcbiAgICBjb2xvcjogcmdiYSgyNDgsIDEsIDEsIDAuODI5KTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxufVxyXG4uc2VhcmNoIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4uc2VhcmNoIGlucHV0W3R5cGUgPSBcInRleHRcIl0ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDJweCAycHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCA1cHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxufVxyXG4uc2VhcmNoIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYigwIDAgMCAvIDIwJSksIDAgMnB4IDJweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDVweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcbi5zZWFyY2ggYnV0dG9uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgIHRyYW5zaXRpb246IGFsbCAxc1xyXG4gICAgXHJcbn1cclxuLnNlYXJjaCBidXR0b246YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTRlNmU0Y2M7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXNcclxuICAgIFxyXG59XHJcblxyXG4uYWN0aXZlIGltZyB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4ubXktb3ZlcmxheSB7XHJcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDEwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC45KSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNHMgbGluZWFyICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiB3YWl0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm15LW92ZXJsYXkgaS5mYS5mYS1zcGlubmVyLmZhLXNwaW4sIC5zcGlubmVyLWJpZyB7XHJcbiAgICBmb250LXNpemU6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "SLNR":
/*!****************************************!*\
  !*** ./src/app/navsearch.directive.ts ***!
  \****************************************/
/*! exports provided: NavsearchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavsearchDirective", function() { return NavsearchDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NavsearchDirective {
    constructor() { }
}
NavsearchDirective.ɵfac = function NavsearchDirective_Factory(t) { return new (t || NavsearchDirective)(); };
NavsearchDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NavsearchDirective, selectors: [["", "appNavsearch", ""]] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'my-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../commonservice.service */ "l8by");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _loadingintercepter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../loadingintercepter.service */ "ix5z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _itemstyle_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../itemstyle.directive */ "Dtz2");







function AdminComponent_div_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
function AdminComponent_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function AdminComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminComponent_div_1_i_2_Template, 1, 0, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminComponent_div_1_i_3_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.adminID(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r2.eggLess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !value_r2.eggLess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", value_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r2.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r2.weight);
} }
function AdminComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdminComponent {
    constructor(cs, router, http, loading) {
        this.cs = cs;
        this.router = router;
        this.http = http;
        this.loading = loading;
        this.admin = {};
        this.showOverlay = true;
    }
    ngOnInit() {
        let apiUrl = "https://apifromashu.herokuapp.com/api/allcakes";
        this.http.get(apiUrl).subscribe((response) => {
            console.log(response.data[0], "this is responsed");
            this.card = response.data;
            this.showOverlay = false;
        }, (error) => {
            console.log("this is response" + error);
        });
    }
    adminID(i) {
        this.router.navigate(['/editForm', this.card[i].cakeid]);
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loadingintercepter_service__WEBPACK_IMPORTED_MODULE_4__["LoadingintercepterService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 3, vars: 2, consts: [[1, "myCard"], ["appItemstyle", "", "class", "card", "style", "width: 12rem; height: 18rem;", 4, "ngFor", "ngForOf"], ["class", "my-overlay", 4, "ngIf"], ["appItemstyle", "", 1, "card", 2, "width", "12rem", "height", "18rem"], [1, "cardImg"], ["class", "fas fa-egg vag", 4, "ngIf"], ["class", "fas fa-egg nonvag", 4, "ngIf"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-text"], ["type", "button", 1, "btn", "btn-outline-dark", "editBtn", 3, "click"], [1, "fas", "fa-edit"], [1, "fas", "fa-egg", "vag"], [1, "fas", "fa-egg", "nonvag"], [1, "my-overlay"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_div_1_Template, 14, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminComponent_div_2_Template, 2, 0, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.card);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOverlay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _itemstyle_directive__WEBPACK_IMPORTED_MODULE_6__["ItemstyleDirective"]], styles: [".myCard[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    margin: 30px;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n}\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 150px;\r\n}\r\n.card-body[_ngcontent-%COMP%] {\r\n  background-color: #eeeeee;\r\n\r\n}\r\n.cardImg[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.vag[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n    color: rgba(255, 0, 0, 0.822);\r\n    padding: 5px;\r\n    width: 30px;\r\n    position: absolute;\r\n\r\n  \r\n}\r\n.nonvag[_ngcontent-%COMP%] {\r\n    color: rgba(248, 1, 1, 0.829);\r\n    padding: 5px;\r\n    width: 30px;\r\n    position: absolute;\r\n\r\n}\r\n.search[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n.search[_ngcontent-%COMP%]   input[type = \"text\"][_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    padding: 4px;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    border: none;\r\n\r\n}\r\n.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    padding: 4px;\r\n    border: none;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    border-radius: 4px;\r\n    outline: 0;\r\n}\r\n.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    transform: rotate(360deg);\r\n   transition: all 1s\r\n    \r\n}\r\n.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\r\n    transform: rotate(360deg);\r\n    background: #e4e6e4cc;\r\n    opacity: 0;\r\n    transition: all 0.5s\r\n    \r\n}\r\n.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\r\n.my-overlay[_ngcontent-%COMP%] {\r\n    left: 0 !important;\r\n    top: 0 !important;\r\n    z-index: 10000 !important;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    position: fixed !important;\r\n    background-color: rgba(0,0,0,0.9) !important;\r\n    cursor: pointer !important;\r\n    visibility: visible !important;\r\n    transition: visibility 0s, opacity 0.4s linear !important;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: wait !important;\r\n}\r\n.my-overlay[_ngcontent-%COMP%]   i.fa.fa-spinner.fa-spin[_ngcontent-%COMP%], .spinner-big[_ngcontent-%COMP%] {\r\n    font-size: 100px !important;\r\n}\r\n.editBtn[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVDO0VBQ0MseUJBQXlCOztBQUUzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjs7O0FBR3RCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVHQUF1RztJQUN2RyxZQUFZOztBQUVoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osdUdBQXVHO0lBQ3ZHLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHlCQUF5QjtHQUMxQjs7QUFFSDtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Y7O0FBRUo7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLDRDQUE0QztJQUM1QywwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLHlEQUF5RDtJQUN6RCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Q2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbjogMzBweDtcclxufVxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLmNhcmQgaW1nIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuIFxyXG4gLmNhcmQtYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuXHJcbn0gXHJcbi5jYXJkSW1nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udmFnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjgyMik7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgXHJcbn1cclxuLm5vbnZhZyB7XHJcbiAgICBjb2xvcjogcmdiYSgyNDgsIDEsIDEsIDAuODI5KTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxufVxyXG4uc2VhcmNoIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4uc2VhcmNoIGlucHV0W3R5cGUgPSBcInRleHRcIl0ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDJweCAycHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCA1cHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxufVxyXG4uc2VhcmNoIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYigwIDAgMCAvIDIwJSksIDAgMnB4IDJweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDVweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcbi5zZWFyY2ggYnV0dG9uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgIHRyYW5zaXRpb246IGFsbCAxc1xyXG4gICAgXHJcbn1cclxuLnNlYXJjaCBidXR0b246YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTRlNmU0Y2M7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXNcclxuICAgIFxyXG59XHJcblxyXG4uYWN0aXZlIGltZyB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4ubXktb3ZlcmxheSB7XHJcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDEwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC45KSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNHMgbGluZWFyICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiB3YWl0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm15LW92ZXJsYXkgaS5mYS5mYS1zcGlubmVyLmZhLXNwaW4sIC5zcGlubmVyLWJpZyB7XHJcbiAgICBmb250LXNpemU6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lZGl0QnRuIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgLyogaGVpZ2h0OiAzMHB4OyAqL1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _authintercept_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authintercept.service */ "jFRW");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "tq2C");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./items/items.component */ "RNaf");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userlist/userlist.component */ "8BFl");
/* harmony import */ var _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./adduser/adduser.component */ "ifMB");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slider/slider.component */ "oB+8");
/* harmony import */ var _itemstyle_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./itemstyle.directive */ "Dtz2");
/* harmony import */ var _eggless_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./eggless.directive */ "5AQt");
/* harmony import */ var _search_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search.directive */ "FEl1");
/* harmony import */ var _forget_forget_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forget/forget.component */ "h9Mj");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _navsearch_navsearch_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navsearch/navsearch.component */ "KVaT");
/* harmony import */ var _navsearch_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./navsearch.directive */ "SLNR");
/* harmony import */ var _cakedetails_cakedetails_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cakedetails/cakedetails.component */ "b2UO");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./loading/loading.component */ "f/hT");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _editform_editform_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./editform/editform.component */ "aQ1H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ "fXoL");
































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"], useClass: _authintercept_service__WEBPACK_IMPORTED_MODULE_0__["AuthinterceptService"], multi: true }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_22__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
        _items_items_component__WEBPACK_IMPORTED_MODULE_6__["ItemsComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
        _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_9__["UserlistComponent"],
        _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_10__["AdduserComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
        _slider_slider_component__WEBPACK_IMPORTED_MODULE_12__["SliderComponent"],
        _itemstyle_directive__WEBPACK_IMPORTED_MODULE_13__["ItemstyleDirective"],
        _eggless_directive__WEBPACK_IMPORTED_MODULE_14__["EgglessDirective"],
        _search_directive__WEBPACK_IMPORTED_MODULE_15__["SearchDirective"],
        _forget_forget_component__WEBPACK_IMPORTED_MODULE_16__["ForgetComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        _navsearch_navsearch_component__WEBPACK_IMPORTED_MODULE_18__["NavsearchComponent"],
        _navsearch_directive__WEBPACK_IMPORTED_MODULE_19__["NavsearchDirective"],
        _cakedetails_cakedetails_component__WEBPACK_IMPORTED_MODULE_20__["CakedetailsComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_25__["CartComponent"],
        _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_26__["CheckoutComponent"],
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_27__["LoadingComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_28__["AdminComponent"],
        _editform_editform_component__WEBPACK_IMPORTED_MODULE_29__["EditformComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_22__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrModule"]] }); })();


/***/ }),

/***/ "aQ1H":
/*!************************************************!*\
  !*** ./src/app/editform/editform.component.ts ***!
  \************************************************/
/*! exports provided: EditformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditformComponent", function() { return EditformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class EditformComponent {
    constructor(route, http) {
        this.route = route;
        this.http = http;
        this.editDetails = {};
        this.cakeid = this.route.snapshot.params['cakeid'];
        let apiUrl = `https://apifromashu.herokuapp.com/api/cake/`;
        this.http.get(apiUrl + this.cakeid).subscribe((response) => {
            console.log('this is responsess', response.data.ingredients);
            this.editDetails = response.data;
            console.log('this is responsess', this.editDetails);
        }, (error) => {
            console.log('this is response' + error);
        });
    }
    ngOnInit() {
    }
    importFile(event) {
        if (event.target.files.length == 0) {
            console.log('No file selected!');
            return;
        }
        // get image file and append it to form data
        let file = event.target.files[0];
        var fd = new FormData();
        fd.append('file', file);
        let apiUrl = `https://apifromashu.herokuapp.com/api/upload`;
        this.http.post(apiUrl, fd).subscribe((response) => {
            console.log('upload image response', response);
        }, (error) => {
            console.log('this is error response' + error);
        });
    }
}
EditformComponent.ɵfac = function EditformComponent_Factory(t) { return new (t || EditformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EditformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditformComponent, selectors: [["app-editform"]], decls: 40, vars: 9, consts: [[1, "editForm"], [1, "form-floating", "nameDiv"], ["name", "name", "type", "text", "id", "floatingPassword", "placeholder", "Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "floatingPassword"], [1, "form-floating", "priceDiv"], ["name", "price", "type", "number", "id", "floatingPassword", "placeholder", "Name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-floating", "weightDiv"], ["name", "weight", "type", "text", "id", "floatingPassword", "placeholder", "Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "eggless", "type", "text", "id", "floatingPassword", "placeholder", "Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "flavour", "type", "text", "id", "floatingPassword", "placeholder", "Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "type", "type", "text", "id", "floatingPassword", "placeholder", "Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ingredients", "type", "text", "id", "floatingPassword", "placeholder", "Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "description", "type", "text", "id", "floatingPassword", "placeholder", "Name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group"], ["type", "file", "type", "file", "name", "file", "id", "inputGroupFile04", "aria-describedby", "inputGroupFileAddon04", "aria-label", "Upload", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["type", "button", "id", "inputGroupFileAddon04", 1, "btn", "btn-outline-secondary"], [1, "successDiv"], ["type", "button", 1, "btn", "btn-outline-success"]], template: function EditformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditformComponent_Template_input_ngModelChange_2_listener($event) { return ctx.editDetails.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditformComponent_Template_input_ngModelChange_6_listener($event) { return ctx.editDetails.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PRICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditformComponent_Template_input_ngModelChange_10_listener($event) { return ctx.editDetails.weight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "WEIGHT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditformComponent_Template_input_ngModelChange_14_listener($event) { return ctx.editDetails.eggless = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "EGGLESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditformComponent_Template_input_ngModelChange_18_listener($event) { return ctx.editDetails.flavour = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "FLAVOUR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditformComponent_Template_input_ngModelChange_22_listener($event) { return ctx.editDetails.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "TYPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditformComponent_Template_input_ngModelChange_26_listener($event) { return ctx.editDetails.ingredients = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "TYPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditformComponent_Template_input_ngModelChange_30_listener($event) { return ctx.editDetails.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "DESCRIPTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditformComponent_Template_input_ngModelChange_34_listener($event) { return ctx.file = $event; })("change", function EditformComponent_Template_input_change_34_listener($event) { return ctx.importFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "UPLOAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editDetails.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editDetails.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editDetails.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editDetails.eggless);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editDetails.flavour);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editDetails.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editDetails.ingredients);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editDetails.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.file);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: [".editForm[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 55vw;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    top: 10%;\r\n    left: 20%;\r\n   \r\n    z-index: 10;\r\n    background-color: rgba(233, 233, 233, 0.342);\r\n    border-radius: 4px;\r\n    margin: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n.editForm[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRmb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCx1R0FBdUc7SUFDdkcsUUFBUTtJQUNSLFNBQVM7O0lBRVQsV0FBVztJQUNYLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7Ozs7Ozs7Ozs7OztHQVlHIiwiZmlsZSI6ImVkaXRmb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdEZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogNTV2dztcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYigwIDAgMCAvIDIwJSksIDAgMnB4IDJweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDVweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgXHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCAyMzMsIDIzMywgMC4zNDIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmVkaXRGb3JtIGRpdiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLyogZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG59XHJcbmZvcm0gLmVtYWlsRGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIFxyXG59ICovIl19 */"] });


/***/ }),

/***/ "b2UO":
/*!******************************************************!*\
  !*** ./src/app/cakedetails/cakedetails.component.ts ***!
  \******************************************************/
/*! exports provided: CakedetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakedetailsComponent", function() { return CakedetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../commonservice.service */ "l8by");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");





class CakedetailsComponent {
    constructor(cs, route, http, router, toast) {
        this.cs = cs;
        this.route = route;
        this.http = http;
        this.router = router;
        this.toast = toast;
        this.cakedetails = this.cs.cakedetails;
        this.user = {};
        this.cakeid = this.route.snapshot.params['cakeid'];
        let apiUrl = `https://apifromashu.herokuapp.com/api/cake/`;
        this.http.get(apiUrl + this.cakeid).subscribe((response) => {
            console.log('this is response', response);
            this.cakedetails = response.data;
        }, (error) => {
            console.log('this is response' + error);
        });
    }
    ngOnInit() { }
    cartItem() {
        if (!localStorage.getItem('user')) {
            this.toast.error('Please login');
            this.router.navigate(['/login']);
        }
        else {
            // cart cake object
            const cartCake = {
                cakeid: this.cakedetails.cakeid,
                name: this.cakedetails.name,
                image: this.cakedetails.image,
                weight: this.cakedetails.weight,
                price: this.cakedetails.price,
            };
            // api url
            let apiUrl = `https://apifromashu.herokuapp.com/api/addcaketocart`;
            this.http.post(apiUrl, cartCake).subscribe((response) => {
                this.toast.success(`${this.cakedetails.name} is Succesfully Cart`);
                console.log('add cake to cart', response);
            }, (error) => {
                console.log('this is response' + error);
            });
        }
    }
}
CakedetailsComponent.ɵfac = function CakedetailsComponent_Factory(t) { return new (t || CakedetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
CakedetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CakedetailsComponent, selectors: [["app-cakedetails"]], decls: 41, vars: 9, consts: [[1, "myCard"], [1, "card"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-text"], [1, "far", "fa-arrow-alt-circle-right"], [1, "cartImg"], [1, "cartBtn"], ["type", "button", 1, "btn", "btn-outline-warning", 3, "click"], [1, "fas", "fa-cart-plus"], ["type", "button", 1, "btn", "btn-outline-success"], [1, "fas", "fa-money-check-alt"]], template: function CakedetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u2B50\u2B50\uD83C\uDF1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CURRENT PRICE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "WEIGHT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "FLAVOUR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "TYPE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CakedetailsComponent_Template_button_click_35_listener() { return ctx.cartItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " ADD TO CART");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " BUY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.cakedetails.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cakedetails.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cakedetails.ratings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.cakedetails.reviews, " reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cakedetails.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cakedetails.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cakedetails.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cakedetails.flavour);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cakedetails.type);
    } }, styles: [".myCard[_ngcontent-%COMP%] {\r\n     box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    background-color: rgba(233, 233, 233, 0.801);\r\n    border-radius: 4px;\r\n    width: 95vw;\r\n    height: 80vh; \r\n    margin: 30px;\r\n\r\n}\r\n\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n}\r\n\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 10PX;\r\n\r\n}\r\n\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    padding: 2px;\r\n\r\n}\r\n\r\n\r\n.cartImg[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    font-family: 'Ubuntu', sans-serif;\r\n    font-size: 18px;\r\n\r\n}\r\n\r\n\r\ni[_ngcontent-%COMP%] {\r\n    margin: 5px ;\r\n}\r\n\r\n\r\n.cartBtn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n\r\n\r\n.imgBtn[_ngcontent-%COMP%] {\r\n    border: none;\r\n    margin: 10px;\r\n    text-align: right;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNha2VkZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7S0FDSyx1R0FBdUc7SUFDeEcsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7O0FBRWhCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1o7bUJBQ2U7QUFDbkI7OztBQUVBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhOztBQUVqQjs7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsdUdBQXVHO0lBQ3ZHLFlBQVk7O0FBRWhCOzs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlOztBQUVuQjs7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7O0FBRXJCIiwiZmlsZSI6ImNha2VkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlDYXJkIHtcclxuICAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDJweCAycHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCA1cHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzMsIDIzMywgMjMzLCAwLjgwMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogOTV2dztcclxuICAgIGhlaWdodDogODB2aDsgXHJcbiAgICBtYXJnaW46IDMwcHg7XHJcblxyXG59XHJcblxyXG5cclxuLmNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyogcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMzBweDsgKi9cclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMFBYO1xyXG5cclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDJweCAycHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCA1cHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG5cclxufVxyXG4uY2FydEltZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG59XHJcbmkge1xyXG4gICAgbWFyZ2luOiA1cHggO1xyXG59XHJcblxyXG4uY2FydEJ0biBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uaW1nQnRuIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIFxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../commonservice.service */ "l8by");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CartComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_14_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.removeCake(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", value_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r2.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r2.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", value_r2.quantity);
} }
function CartComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor(cs, route, http, router) {
        this.cs = cs;
        this.route = route;
        this.http = http;
        this.router = router;
        this.cartItem = [];
        this.showOverlay = true;
        this.cartItems();
    }
    ngOnInit() {
    }
    // cart items from cakecart api
    cartItems() {
        let apiUrl = `https://apifromashu.herokuapp.com/api/cakecart`;
        this.http.post(apiUrl, {}).subscribe((response) => {
            this.cartItem = response.data;
            this.showOverlay = false;
        }, (error) => {
            console.log('this is response' + error);
        });
    }
    //  remove cake from cart 
    removeCake(i) {
        this.showOverlay = true;
        let apiUrl = `https://apifromashu.herokuapp.com/api/removecakefromcart`;
        this.http.post(apiUrl, { cakeid: this.cartItem[i].cakeid }).subscribe((response) => {
            this.cartItems();
            this.showOverlay = false;
        }, (error) => {
            console.log('this is response' + error);
        });
    }
    //  navigate cart component
    detail() {
        setTimeout(() => {
            this.router.navigate(['/checkout']);
        }, 1000);
        this.router.navigate(['/loading']);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 16, vars: 2, consts: [[1, "cart"], [1, "cardHeader"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "card", 4, "ngFor", "ngForOf"], ["class", "my-overlay", 4, "ngIf"], [1, "card"], ["alt", "Card image cap", 1, "", 3, "src"], [1, "card-text"], ["type", "number", 3, "value"], [1, "btn", "btn-danger", 3, "click"], [1, "my-overlay"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_12_listener() { return ctx.detail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CHECKOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CartComponent_div_14_Template, 11, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CartComponent_div_15_Template, 2, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOverlay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".cart[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 20%;\r\n    left: 10%;\r\n}\r\n.cardHeader[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    \r\n    width: 80vw;\r\n    padding: 20px;\r\n     box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    background-color: rgba(255, 254, 254, 0.5);\r\n    border-radius: 4px;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    \r\n    width: 80vw;\r\n    padding: 20px;\r\n     box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    background-color: rgba(233, 233, 233, 0.801);\r\n    border-radius: 4px;\r\n}\r\n.card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 30px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n\r\n}\r\n.my-overlay[_ngcontent-%COMP%] {\r\n    left: 0 !important;\r\n    top: 0 !important;\r\n    z-index: 10000 !important;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    position: fixed !important;\r\n    background-color: rgba(0,0,0,0.9) !important;\r\n    cursor: pointer !important;\r\n    visibility: visible !important;\r\n    transition: visibility 0s, opacity 0.4s linear !important;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: wait !important;\r\n}\r\n.my-overlay[_ngcontent-%COMP%]   i.fa.fa-spinner.fa-spin[_ngcontent-%COMP%], .spinner-big[_ngcontent-%COMP%] {\r\n    font-size: 100px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOENBQThDO0lBQzlDOzs4QkFFMEI7SUFDMUIsV0FBVztJQUNYLGFBQWE7S0FDWix1R0FBdUc7SUFDeEcsMENBQTBDO0lBQzFDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhDQUE4QztJQUM5Qzs7OEJBRTBCO0lBQzFCLFdBQVc7SUFDWCxhQUFhO0tBQ1osdUdBQXVHO0lBQ3hHLDRDQUE0QztJQUM1QyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7Ozs7Ozs7R0FPRztBQUVIO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1R0FBdUc7O0FBRTNHO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQiw0Q0FBNEM7SUFDNUMsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5Qix5REFBeUQ7SUFDekQsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoiY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbn1cclxuLmNhcmRIZWFkZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgKi9cclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDJweCAycHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCA1cHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5jYXJkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ICovXHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiKDAgMCAwIC8gMjAlKSwgMCAycHggMnB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggNXB4IDAgcmdiKDAgMCAwIC8gMTIlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCAyMzMsIDIzMywgMC44MDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5jYXJkIGlucHV0IHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4vKiAuY2FyZC1ib2R5IHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmc6IDEwUFg7XHJcblxyXG59ICovXHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDJweCAycHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCA1cHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG5cclxufVxyXG5cclxuLm15LW92ZXJsYXkge1xyXG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSkgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjRzIGxpbmVhciAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogd2FpdCAhaW1wb3J0YW50O1xyXG59XHJcbi5teS1vdmVybGF5IGkuZmEuZmEtc3Bpbm5lci5mYS1zcGluLCAuc3Bpbm5lci1iaWcge1xyXG4gICAgZm9udC1zaXplOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "f/hT":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 0, vars: 0, template: function LoadingComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "h9Mj":
/*!********************************************!*\
  !*** ./src/app/forget/forget.component.ts ***!
  \********************************************/
/*! exports provided: ForgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetComponent", function() { return ForgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class ForgetComponent {
    constructor(http, router, toast) {
        this.http = http;
        this.router = router;
        this.toast = toast;
    }
    ngOnInit() {
    }
    forgot() {
        if (this.email) {
            let apiUrl = "https://apifromashu.herokuapp.com/api/recoverpassword";
            this.http.post(apiUrl, { email: this.email }).subscribe((response) => {
                console.log("this is response", response);
                this.toast.success("", "Password sent to your email address", { timeOut: 2000 });
                this.router.navigate(['/']);
            }, (error) => {
                console.log("this is response" + error);
                this.toast.error(error, "User not found", { timeOut: 2000 });
            });
        }
        else {
            this.toast.error("", "Please enter the email", { timeOut: 2000 });
        }
    }
}
ForgetComponent.ɵfac = function ForgetComponent_Factory(t) { return new (t || ForgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
ForgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetComponent, selectors: [["app-forget"]], decls: 5, vars: 1, consts: [[1, "form-floating", "mb-3", "forget"], ["name", "email", "type", "email", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "floatingInput"], ["type", "submit", "value", "Reset Password", 1, "btn", "btn-dark", 3, "click"]], template: function ForgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgetComponent_Template_input_ngModelChange_1_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetComponent_Template_input_click_4_listener() { return ctx.forgot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".forget[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    width: 30vw;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    top: 20%;\r\n    left: 35%;\r\n    position: fixed;\r\n    z-index: 10;\r\n    background-color: rgba(233, 233, 233, 0.342);\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    \r\n}\r\n\r\n\r\n.forget[_ngcontent-%COMP%]   input[type = \"email\"][_ngcontent-%COMP%] {\r\n    padding: 3px;\r\n    border-radius: 4px;\r\n    margin: 2px;\r\n}\r\n\r\n\r\n.forget[_ngcontent-%COMP%]   input[type = \"submit\"][_ngcontent-%COMP%] {\r\n    padding: 3px;\r\n    border-radius: 4px;\r\n    margin: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLHVHQUF1RztJQUN2RyxRQUFRO0lBQ1IsU0FBUztJQUNULGVBQWU7SUFDZixXQUFXO0lBQ1gsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixhQUFhOztBQUVqQjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZiIsImZpbGUiOiJmb3JnZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JnZXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiKDAgMCAwIC8gMjAlKSwgMCAycHggMnB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggNXB4IDAgcmdiKDAgMCAwIC8gMTIlKTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgbGVmdDogMzUlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgMjMzLCAyMzMsIDAuMzQyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5mb3JnZXQgaW5wdXRbdHlwZSA9IFwiZW1haWxcIl0ge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbi5mb3JnZXQgaW5wdXRbdHlwZSA9IFwic3VibWl0XCJdIHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "ifMB":
/*!**********************************************!*\
  !*** ./src/app/adduser/adduser.component.ts ***!
  \**********************************************/
/*! exports provided: AdduserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdduserComponent", function() { return AdduserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../commonservice.service */ "l8by");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class AdduserComponent {
    constructor(data) {
        this.data = data;
        this.user = {};
    }
    ngOnInit() {
    }
    saveData() {
        if (this.data.validate(this.user.email, this.user.name, this.user.imageUrl)) {
            this.data.arr.push(this.user);
            this.user = {};
        }
    }
}
AdduserComponent.ɵfac = function AdduserComponent_Factory(t) { return new (t || AdduserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"])); };
AdduserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdduserComponent, selectors: [["app-adduser"]], decls: 14, vars: 3, consts: [["ng-app", ""], ["for", "name"], ["type", "text", "name", "name", "autocomplete", "on", "required", "", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "autocomplete", "on", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "image", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Add User", "name", "addButton", 3, "click"]], template: function AdduserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdduserComponent_Template_input_ngModelChange_6_listener($event) { return ctx.user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdduserComponent_Template_input_ngModelChange_9_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ImageUrl : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdduserComponent_Template_input_ngModelChange_12_listener($event) { return ctx.user.imageUrl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdduserComponent_Template_input_click_13_listener() { return ctx.saveData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.imageUrl);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["form[_ngcontent-%COMP%] {\r\n    background-color: #fcfcfc;\r\n    box-shadow:2px 2px 2px rgb(255, 255, 255) ;\r\n    margin: 5%;\r\n    width: 80vw;\r\n    height: 100%;\r\n}\r\nform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\nform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   input[type = \"submit\"][_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    border-width: 0;\r\n    border-radius: 2px;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\r\n    background-color: #13e269d7;\r\n    color: #000000;\r\n    transition: background-color .3s;\r\n}\r\nlegend[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QiwwQ0FBMEM7SUFDMUMsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJhZGR1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcbiAgICBib3gtc2hhZG93OjJweCAycHggMnB4IHJnYigyNTUsIDI1NSwgMjU1KSA7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuZm9ybSBmaWVsZHNldCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbmZvcm0gZmllbGRzZXQgaW5wdXRbdHlwZSA9IFwic3VibWl0XCJdIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAuNik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTNlMjY5ZDc7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xyXG59XHJcblxyXG5sZWdlbmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ix5z":
/*!***********************************************!*\
  !*** ./src/app/loadingintercepter.service.ts ***!
  \***********************************************/
/*! exports provided: LoadingintercepterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingintercepterService", function() { return LoadingintercepterService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class LoadingintercepterService {
    constructor(router) {
        this.router = router;
        // router.events.subscribe((event: RouterEvent) => {
        //   this.navigationInterceptor(event)
        // })
    }
    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
            this.showOverlay = true;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
            this.showOverlay = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationCancel"]) {
            this.showOverlay = false;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationError"]) {
            this.showOverlay = false;
        }
    }
}
LoadingintercepterService.ɵfac = function LoadingintercepterService_Factory(t) { return new (t || LoadingintercepterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
LoadingintercepterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoadingintercepterService, factory: LoadingintercepterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jFRW":
/*!******************************************!*\
  !*** ./src/app/authintercept.service.ts ***!
  \******************************************/
/*! exports provided: AuthinterceptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthinterceptService", function() { return AuthinterceptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthinterceptService {
    constructor() { }
    intercept(req, next) {
        if (localStorage.user) {
            req = req.clone({ setHeaders: {
                    authtoken: JSON.parse(localStorage.user).token
                } });
        }
        return next.handle(req);
    }
}
AuthinterceptService.ɵfac = function AuthinterceptService_Factory(t) { return new (t || AuthinterceptService)(); };
AuthinterceptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthinterceptService, factory: AuthinterceptService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../commonservice.service */ "l8by");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NavbarComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(cs, router, http) {
        this.cs = cs;
        this.router = router;
        this.http = http;
        this.searchkey = undefined;
        this.num = true;
    }
    search() {
        if (this.searchkey)
            this.router.navigate(['/navsearch'], { queryParams: { q: this.searchkey } });
    }
    ngOnInit() {
    }
    logout() {
        localStorage.removeItem("user");
    }
    ngDoCheck() {
        if (localStorage.user)
            this.num = false;
        if (!localStorage.user)
            this.num = true;
    }
    admin() {
        this.router.navigate(['/admin']);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 15, vars: 4, consts: [[1, "navBg"], [1, "navbar", "navbar-light", "bg-light", "justify-content-between"], [1, "navForm"], ["src", "https://www.designfreelogoonline.com/wp-content/uploads/2015/07/000563-Design-Free-cake-Logo-Template-01.png", "alt", ""], ["routerLink", "/", 1, "navbar-brand"], ["name", "searchkey", "type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-outline-dark", 3, "click"], [1, "fas", "fa-search"], [1, "fas", "fa-user-shield"], [1, "form-inline", "navBtn"], ["class", "btn btn-outline-info", "type", "button", 4, "ngIf"], ["class", "btn btn-outline-danger", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-success my-2 my-sm-0", "type", "submit", "routerLink", "/login", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-info"], ["routerLink", "/cart", 1, "fas", "fa-cart-plus"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], ["type", "submit", "routerLink", "/login", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SWEET CAKES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavbarComponent_Template_input_ngModelChange_6_listener($event) { return ctx.searchkey = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_7_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_9_listener() { return ctx.admin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_button_12_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavbarComponent_button_13_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_button_14_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchkey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.num);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.num);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.num);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\r\n\r\n.navForm[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.navForm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 35px;\r\n \r\n\r\n}\r\n\r\n.navForm[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-family: 'Ubuntu', sans-serif;\r\n    height: 35px;\r\n   \r\n\r\n}\r\n\r\n.navForm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    height: 35px;\r\n}\r\n\r\n.navForm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    height: 35px;\r\n\r\n}\r\n\r\n.navBtn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7OztBQUdoQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZOzs7QUFHaEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm5hdkZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubmF2Rm9ybSBpbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiBcclxuXHJcbn1cclxuXHJcbi5uYXZGb3JtIGEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICBcclxuXHJcbn1cclxuLm5hdkZvcm0gaW5wdXQge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuLm5hdkZvcm0gYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG5cclxufVxyXG4ubmF2QnRuIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "l8by":
/*!******************************************!*\
  !*** ./src/app/commonservice.service.ts ***!
  \******************************************/
/*! exports provided: CommonserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonserviceService", function() { return CommonserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");



class CommonserviceService {
    constructor(http, toast) {
        this.http = http;
        this.toast = toast;
        this.cards = [{ id: 101, name: "Butter Cake", price: 500, weight: "1kg", imageUrl: "https://i.pinimg.com/originals/6a/4b/25/6a4b25bb6ead0f4e2caad8bd2e933ae4.jpg", eggLess: true }, { id: 102, name: "Pound Cake", price: 800, weight: "1kg", imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid80", eggLess: true }, { id: 103, name: "Chiffon Cake", price: 1100, weight: "1kg", imageUrl: "https://www.birthdayphotoframes.com//upload/post/Happy-Birthday-Cake-with-Name-Edit-Images-Download-2299.png", eggLess: false }, { id: 104, name: "Genoise", price: 1000, weight: "1kg", imageUrl: "https://www.mynameart.com/pics/name-cake.jpg", eggLess: true }];
        // sliderArr:any = ["https://wallpapercave.com/wp/wp2126439.jpg","https://c1.wallpaperflare.com/preview/528/445/287/pie-chocolate-brigadier-cake.jpg","https://images2.alphacoders.com/984/984184.jpg"];
        this.sliderArr = ["https://wallpapercave.com/wp/wp2126439.jpg", "https://c1.wallpaperflare.com/preview/528/445/287/pie-chocolate-brigadier-cake.jpg", "https://images2.alphacoders.com/984/984184.jpg"];
        this.arr = [];
        this.cakedetails = [];
    }
    ngOnInit() { }
    showCakes() {
        let apiUrl = "https://apibyashu.herokuapp.com/api/allcakes";
        this.http.get(apiUrl).subscribe((response) => {
        }, (error) => {
            console.log("this is response" + error);
            this.toast.error(error, "", { timeOut: 2000 });
        });
    }
    validate(email, name, imageUrl) {
        if (!name || !email || !imageUrl) {
            this.toast.error("", "please fill all field", { timeOut: 2000 });
            return (false);
        }
        else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            return (true);
        }
        else {
            this.toast.error("", "You have entered an invalid email address!", { timeOut: 2000 });
            return (false);
        }
    }
    validateLoginPage(email, password) {
        if (!email || !password) {
            this.toast.error("", "please fill all field", { timeOut: 2000 });
            return (false);
        }
        else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            return (true);
        }
        else {
            this.toast.error("", "You have entered an invalid email address!", { timeOut: 2000 });
            return (false);
        }
    }
    validateSignup(name, email, password) {
        if (!name || !email || !password) {
            this.toast.error("", "please fill all field", { timeOut: 2000 });
            return (false);
        }
        else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            return (true);
        }
        else {
            this.toast.error("", "You have entered an invalid email address!", { timeOut: 2000 });
            return (false);
        }
    }
    filter(min, max) {
        console.log(min, max);
    }
}
CommonserviceService.ɵfac = function CommonserviceService_Factory(t) { return new (t || CommonserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
CommonserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonserviceService, factory: CommonserviceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "oB+8":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../commonservice.service */ "l8by");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SliderComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgSrc_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", imgSrc_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class SliderComponent {
    constructor(cs) {
        this.cs = cs;
        this.sliderArr = this.cs.sliderArr;
    }
    ngOnInit() {
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"])); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], decls: 17, vars: 2, consts: [["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "2", "aria-label", "Slide 3"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["alt", "...", 1, "d-block", "w-100", 3, "src"], ["class", "carousel-item", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "carousel-item"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SliderComponent_div_8_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.sliderArr[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sliderArr.slice(1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["img[_ngcontent-%COMP%]{\r\n    height: 500px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzbGlkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../commonservice.service */ "l8by");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class SignupComponent {
    constructor(http, cs, toast) {
        this.http = http;
        this.cs = cs;
        this.toast = toast;
        this.user = {};
    }
    ngOnInit() {
    }
    register() {
        if (this.cs.validateSignup(this.user.name, this.user.email, this.user.password)) {
            let apiUrl = "https://apifromashu.herokuapp.com/api/register";
            this.http.post(apiUrl, this.user).subscribe((response) => {
                this.toast.success(response.message, "User Succesfully Registered", { timeOut: 2000 });
            }, (error) => {
                this.toast.error(error, "", { timeOut: 2000 });
            });
        }
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_2__["CommonserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 16, vars: 3, consts: [[1, "loginForm"], ["action", "#"], [1, "form-floating", "mb-3", "emailDiv"], ["name", "name", "type", "name", "placeholder", "name@example.com", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "floatingInput"], ["name", "email", "type", "email", "id", "floatingInput", "placeholder", "name@example.com", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-floating", "passDiv"], ["name", "password", "type", "password", "id", "floatingPassword", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "floatingPassword"], [1, "submit"], ["type", "submit", "value", "Signup", 1, "btn", "btn-dark", 3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_3_listener($event) { return ctx.user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_7_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_11_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_input_click_15_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".loginForm[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 25vw;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    top: 10%;\r\n    left: 40%;\r\n    position: fixed;\r\n    z-index: 10;\r\n    background-color: rgba(233, 233, 233, 0.342);\r\n    border-radius: 4px;\r\n    margin: 20px;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    \r\n}\r\n\r\nform[_ngcontent-%COMP%]   .nameDiv[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   .nameDiv[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    margin: 5px;\r\n   \r\n}\r\n\r\nform[_ngcontent-%COMP%]   .emailDiv[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    margin: 5px;\r\n   \r\n}\r\n\r\nform[_ngcontent-%COMP%]   .passDiv[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    margin: 5px;\r\n  \r\n}\r\n\r\n.nameDiv[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\r\n    padding: 5px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.emailDiv[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n \r\n    padding: 5px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.passDiv[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\r\n    padding: 5px;\r\n    border-radius: 4px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    background-color: teal;\r\n  }\r\n\r\n.submit[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-direction: row;\r\n    align-items: center;\r\n\r\n    padding: 20px;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%]   input[type = \"submit\"][_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    border: none;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    font-size: 18px;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    margin: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsdUdBQXVHO0lBQ3ZHLFFBQVE7SUFDUixTQUFTO0lBQ1QsZUFBZTtJQUNmLFdBQVc7SUFDWCw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixXQUFXOztBQUVmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFdBQVc7O0FBRWY7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFDQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUNBOztJQUVJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBS0E7SUFDSSxzQkFBc0I7RUFDeEI7O0FBRUY7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixtQkFBbUI7O0lBRW5CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osdUdBQXVHO0lBQ3ZHLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luRm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiKDAgMCAwIC8gMjAlKSwgMCAycHggMnB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggNXB4IDAgcmdiKDAgMCAwIC8gMTIlKTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgMjMzLCAyMzMsIDAuMzQyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG59XHJcblxyXG5mb3JtIC5uYW1lRGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuXHJcbmZvcm0gLm5hbWVEaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgIFxyXG59XHJcblxyXG5mb3JtIC5lbWFpbERpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgXHJcbn1cclxuXHJcbmZvcm0gLnBhc3NEaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgXHJcbn1cclxuXHJcbi5uYW1lRGl2IGlucHV0IHtcclxuXHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmVtYWlsRGl2IGlucHV0IHtcclxuIFxyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5wYXNzRGl2IGlucHV0IHtcclxuXHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZvcm0gZGl2IGl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG4gIH1cclxuXHJcbi5zdWJtaXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnN1Ym1pdCBpbnB1dFt0eXBlID0gXCJzdWJtaXRcIl0ge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDJweCAycHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCA1cHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uc3VibWl0IGEge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "tq2C":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../commonservice.service */ "l8by");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class SearchComponent {
    constructor(cs) {
        this.cs = cs;
        this.card = this.cs.cards;
    }
    ngOnInit() {
    }
    searchData() {
        let v = this.searchitem;
        let cake = this.card.filter(function (e) {
            console.log(v);
            return e.name === v;
        });
        this.card = cake;
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 4, vars: 1, consts: [["ng-app", "", 1, "search"], ["type", "text", "name", "searchitem", "placeholder", "Search", 3, "ngModel", "ngModelChange"], [1, "searchBtn", 3, "click"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.searchitem = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_2_listener() { return ctx.searchData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchitem);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".search[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n.search[_ngcontent-%COMP%]   input[type = \"text\"][_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    padding: 4px;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    border: none;\r\n\r\n}\r\n.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    padding: 4px;\r\n    border: none;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    border-radius: 4px;\r\n    outline: 0;\r\n}\r\n.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    transform: rotate(360deg);\r\n   transition: all 1s\r\n    \r\n}\r\n.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\r\n    transform: rotate(360deg);\r\n    background: #e4e6e4cc;\r\n    opacity: 0;\r\n    transition: all 0.5s\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUdBQXVHO0lBQ3ZHLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix1R0FBdUc7SUFDdkcsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUJBQXlCO0dBQzFCOztBQUVIO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVjs7QUFFSiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2VhcmNoIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4uc2VhcmNoIGlucHV0W3R5cGUgPSBcInRleHRcIl0ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDJweCAycHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCA1cHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxufVxyXG4uc2VhcmNoIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYigwIDAgMCAvIDIwJSksIDAgMnB4IDJweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDVweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcbi5zZWFyY2ggYnV0dG9uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgIHRyYW5zaXRpb246IGFsbCAxc1xyXG4gICAgXHJcbn1cclxuLnNlYXJjaCBidXR0b246YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTRlNmU0Y2M7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXNcclxuICAgIFxyXG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _editform_editform_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editform/editform.component */ "aQ1H");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading/loading.component */ "f/hT");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _cakedetails_cakedetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cakedetails/cakedetails.component */ "b2UO");
/* harmony import */ var _navsearch_navsearch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navsearch/navsearch.component */ "KVaT");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _forget_forget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forget/forget.component */ "h9Mj");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"] },
    { path: 'forget', component: _forget_forget_component__WEBPACK_IMPORTED_MODULE_8__["ForgetComponent"] },
    { path: 'navsearch', component: _navsearch_navsearch_component__WEBPACK_IMPORTED_MODULE_6__["NavsearchComponent"] },
    { path: 'cakedetails/:cakeid', component: _cakedetails_cakedetails_component__WEBPACK_IMPORTED_MODULE_5__["CakedetailsComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__["CheckoutComponent"] },
    { path: 'loading', component: _loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"] },
    { path: 'editForm/:cakeid', component: _editform_editform_component__WEBPACK_IMPORTED_MODULE_0__["EditformComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../commonservice.service */ "l8by");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class LoginComponent {
    constructor(router, cs, http, toast) {
        this.router = router;
        this.cs = cs;
        this.http = http;
        this.toast = toast;
        this.login = {};
    }
    ngOnInit() {
    }
    validateLogin() {
        if (this.cs.validateLoginPage(this.login.email, this.login.password)) {
            let apiUrl = "https://apifromashu.herokuapp.com/api/login";
            this.http.post(apiUrl, this.login).subscribe((response) => {
                if (response.token) {
                    this.toast.success(response.message, "Login Succesful", { timeOut: 2000 });
                    localStorage.setItem("user", JSON.stringify(response));
                    localStorage.setItem("token", JSON.stringify(response.token));
                    this.router.navigate(['/']);
                }
                else {
                    localStorage.removeItem("user");
                }
            }, (error) => {
                this.toast.error("Error : " + error.message);
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_2__["CommonserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 2, consts: [[1, "loginForm"], ["action", "#"], [1, "form-floating", "mb-3", "emailDiv"], ["name", "email", "type", "email", "id", "floatingInput", "placeholder", "name@example.com", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "floatingInput"], [1, "form-floating", "passDiv"], ["name", "password", "type", "password", "id", "floatingPassword", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "floatingPassword"], [1, "submit"], ["type", "submit", "value", "Login", 1, "btn", "btn-dark", 3, "click"], [1, "newUser"], ["href", "", "routerLink", "/forget"], ["href", "", "routerLink", "/signup"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_3_listener($event) { return ctx.login.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) { return ctx.login.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_input_click_11_listener() { return ctx.validateLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Forget password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Signup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".loginForm[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 25vw;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    top: 10%;\r\n    left: 40%;\r\n    position: fixed;\r\n    z-index: 10;\r\n    background-color: rgba(233, 233, 233, 0.342);\r\n    border-radius: 4px;\r\n    margin: 20px;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    \r\n}\r\n\r\nform[_ngcontent-%COMP%]   .emailDiv[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    margin: 5px;\r\n  \r\n}\r\n\r\nform[_ngcontent-%COMP%]   .passDiv[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    margin: 5px;\r\n \r\n}\r\n\r\n.emailDiv[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n   \r\n    padding: 5px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.passDiv[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\r\n    padding: 5px;\r\n    border-radius: 4px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    background-color: teal;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding: 10px;\r\n \r\n}\r\n\r\n.submit[_ngcontent-%COMP%]   input[type = \"submit\"][_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    border: none;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    font-size: 18px;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%]   input[type = \"submit\"][_ngcontent-%COMP%]:active {\r\n    background: #ffffff;\r\n    transition: all 0.5s\r\n    \r\n}\r\n\r\n.submit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    font-size: 18px;\r\n}\r\n\r\n.newUser[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.newUser[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    font-size: 18px;\r\n   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCx1R0FBdUc7SUFDdkcsUUFBUTtJQUNSLFNBQVM7SUFDVCxlQUFlO0lBQ2YsV0FBVztJQUNYLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsc0JBQXNCOztBQUUxQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixXQUFXOztBQUVmOztBQUNBOztJQUVJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBQ0E7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFLQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix1R0FBdUc7SUFDdkcsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQjs7QUFFSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUdBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTs7QUFFbkIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbkZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMjV2dztcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYigwIDAgMCAvIDIwJSksIDAgMnB4IDJweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDVweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzMsIDIzMywgMjMzLCAwLjM0Mik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBcclxufVxyXG5mb3JtIC5lbWFpbERpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICBcclxufVxyXG5cclxuZm9ybSAucGFzc0RpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuIFxyXG59XHJcbi5lbWFpbERpdiBpbnB1dCB7XHJcbiAgIFxyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5wYXNzRGl2IGlucHV0IHtcclxuXHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZvcm0gZGl2IGl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuIFxyXG59XHJcblxyXG4uc3VibWl0IGlucHV0W3R5cGUgPSBcInN1Ym1pdFwiXSB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYigwIDAgMCAvIDIwJSksIDAgMnB4IDJweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDVweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5zdWJtaXQgaW5wdXRbdHlwZSA9IFwic3VibWl0XCJdOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXNcclxuICAgIFxyXG59XHJcblxyXG4uc3VibWl0IGEge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5uZXdVc2VyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcblxyXG4ubmV3VXNlciBhIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICBcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
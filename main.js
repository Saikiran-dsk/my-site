"use strict";
(self["webpackChunksiteDsk"] = self["webpackChunksiteDsk"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [
  // {pa}
];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/banner/banner.component */ 3994);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/services/services.component */ 7761);
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ 4445);
/* harmony import */ var _components_portfilio_portfilio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/portfilio/portfilio.component */ 1057);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);








class AppComponent {
  constructor() {
    this.title = 'siteDsk';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 7,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-navbar")(1, "banner")(2, "about")(3, "services")(4, "portfilio")(5, "contact-us")(6, "app-footer");
    }
  },
  dependencies: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__.BannerComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _components_services_services_component__WEBPACK_IMPORTED_MODULE_3__.ServicesComponent, _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__.ContactUsComponent, _components_portfilio_portfilio_component__WEBPACK_IMPORTED_MODULE_5__.PortfilioComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/banner/banner.component */ 3994);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/services/services.component */ 7761);
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ 4445);
/* harmony import */ var _components_portfilio_portfilio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/portfilio/portfilio.component */ 1057);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);












class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__.BannerComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__.ServicesComponent, _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__.ContactUsComponent, _components_portfilio_portfilio_component__WEBPACK_IMPORTED_MODULE_7__.PortfilioComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 2468:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AboutComponent {
  constructor() {}
  ngOnInit() {}
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};
AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["about"]],
  decls: 11,
  vars: 0,
  consts: [["id", "about", 1, "page-section", "bg-primary"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8", "text-center"], [1, "text-white", "mt-0"], [1, "divider", "light", "my-4"], [1, "text-white-50", "mb-4"], ["href", "#services", 1, "btn", "btn-light", "btn-xl", "js-scroll-trigger"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About me...! It's Interesting to say");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u201CI'm an experienced software engineer who constantly seeks out innovative solutions to everyday problems. In my Three years in this industry, I've honed my analytical thinking and collaboration skills, and I love working with a team. I've also had the opportunity to serve as the software engineer lead for two projects with Angular Technology. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Find My Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: [".bg-primary[_ngcontent-%COMP%] {\n  background: #7cceed !important;\n}\n\na[_ngcontent-%COMP%] {\n  color: black;\n}\na[_ngcontent-%COMP%]   .btn-xl[_ngcontent-%COMP%] {\n  background: #44b3dd;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7QUFBSTtFQUNJLG1CQUFBO0FBRVIiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctcHJpbWFyeXtcclxuICAgIC8vIGJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2NjZWVkICFpbXBvcnRhbnQ7XHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC5idG4teGx7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzQ0YjNkZDtcclxuICAgICAgICBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3994:
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BannerComponent {
  constructor() {}
  ngOnInit() {}
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) {
  return new (t || BannerComponent)();
};
BannerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BannerComponent,
  selectors: [["banner"]],
  decls: 12,
  vars: 0,
  consts: [["id", "page-top", 1, "masthead"], [1, "container", "h-100"], [1, "row", "h-100", "align-items-center", "justify-content-center", "text-center"], [1, "col-lg-10", "align-self-end"], [1, "text-uppercase", "text-white", "font-weight-bold"], [1, "divider", "my-4"], [1, "col-lg-8", "align-self-baseline"], ["href", "#about", 1, "btn", "btn-primary", "btn-xl", "js-scroll-trigger", 2, "background-color", "#44b3dd"]],
  template: function BannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u201CGreat things never come from comfort zones.\u201D ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "h3", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DsK");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Find Out More");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["header.masthead[_ngcontent-%COMP%] {\n  padding-top: 10rem;\n  padding-bottom: 5.5rem;\n  background: linear-gradient(to bottom, rgba(4, 90, 142, 0.8) 0%, rgba(45, 48, 50, 0.8) 100%), url('banner2.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-size: cover;\n}\n\nheader.masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-color: #44b3dd;\n}\n\n@media (min-width: 992px) {\n  header.masthead[_ngcontent-%COMP%] {\n    height: 100vh;\n    min-height: 40rem;\n    padding-top: 4.5rem;\n    padding-bottom: 0;\n  }\n  header.masthead[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n  header.masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n@media (min-width: 1200px) {\n  header.masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdIQUFBO0VBRUEsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDTSxxQkFBQTtBQUVSOztBQUNFO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VBRUo7RUFBRTtJQUNFLGtCQUFBO0VBRUo7RUFBRTtJQUNFLGVBQUE7RUFFSjtBQUNGO0FBQUU7RUFDRTtJQUNFLGlCQUFBO0VBRUo7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlci5tYXN0aGVhZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygxMHJlbSAtIDQuNXJlbSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYig0IDkwIDE0MiAvIDgwJSkgMCUsIHJnYig0NSA0OCA1MCAvIDgwJSkgMTAwJSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYW5uZXIyLmpwZ1wiKTtcclxuICAgIC8vIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYig0IDkwIDE0MiAvIDgwJSkgMCUsIHJnYig0NSA0OCA1MCAvIDgwJSkgMTAwJSksIHVybChiYW5uZXIyLmpwZylcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIGhlYWRlci5tYXN0aGVhZCBoMSB7XHJcbiAgICBmb250LXNpemU6IDIuMjVyZW07XHJcbiAgfVxyXG4gIC5kaXZpZGVye1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzQ0YjNkZDtcclxuICAgIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICBoZWFkZXIubWFzdGhlYWQge1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBtaW4taGVpZ2h0OiA0MHJlbTtcclxuICAgICAgcGFkZGluZy10b3A6IDQuNXJlbTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIubWFzdGhlYWQgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICAgIH1cclxuICAgIGhlYWRlci5tYXN0aGVhZCBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgaGVhZGVyLm1hc3RoZWFkIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4445:
/*!***************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsComponent": () => (/* binding */ ContactUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ContactUsComponent {
  constructor() {}
  ngOnInit() {}
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) {
  return new (t || ContactUsComponent)();
};
ContactUsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ContactUsComponent,
  selectors: [["contact-us"]],
  decls: 24,
  vars: 0,
  consts: [[1, "page-section", "bg-dark", "text-white"], [1, "container", "text-center"], [1, "mb-4"], ["href", "assets/downloads/saikiran-duddukuri-ANGULARX-DEV.pdf", "download", "saikiran-duddukuri-ANGULARX-DEV.pdf", 1, "btn", "btn-light", "btn-xl", 2, "background-color", "#44b3dd"], ["id", "contact", 1, "page-section"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8", "text-center"], [1, "mt-0"], [1, "divider", "my-4"], [1, "text-muted", "mb-5"], [1, "row", "contact-info"], [1, "col-lg-4", "ml-auto", "text-center", "mb-5", "mb-lg-0"], [1, "fa", "fa-phone", "fa-3x", "mb-3", "text-muted"], [1, "d-block", "clrPhone"], [1, "col-lg-4", "mr-auto", "text-center"], [1, "fa", "fa-envelope", "fa-3x", "mb-3", "text-muted"], ["href", "mailto:kiran.angular.dev@gmail.com", 1, "d-block"]],
  template: function ContactUsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You can Download My resume here...!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Download Now! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "h2", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Let's Get In Touch!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Ready to start your next project with me? I'm waiting for your response.... ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11)(16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+91 8185059907");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "kiran.angular.dev@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: [".bg-dark[_ngcontent-%COMP%] {\n  background-color: white !important;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: black;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n}\n\n#contact[_ngcontent-%COMP%] {\n  background: #7cceed;\n}\n#contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.clrPhone[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-color: white;\n}\n\n.contact-info[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%]:hover {\n  color: #363131 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxrQ0FBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQUlBO0VBQ0ksWUFBQTtBQURKOztBQUdBO0VBQ0ksbUJBQUE7QUFBSjtBQUNHO0VBQ0MsdUJBQUE7QUFDSjs7QUFFQTtFQUNDLFlBQUE7QUFDRDs7QUFDQTtFQUNJLG1CQUFBO0FBRUo7O0FBQ0k7RUFDSSx5QkFBQTtBQUVSIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi14bHtcclxuICAgIC8vIGJhY2tncm91bmQ6ICM0NGIzZGQ7XHJcbn1cclxuLmJnLWRhcmt7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gXHJcbn1cclxuaDJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jY29udGFjdHtcclxuICAgIGJhY2tncm91bmQ6ICM3Y2NlZWQ7XHJcbiAgIGgyLHB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgfVxyXG59XHJcbi5jbHJQaG9uZXtcclxuIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZGl2aWRlcntcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmNvbnRhY3QtaW5mb3tcclxuICAgIC50ZXh0LW11dGVkOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiAjMzYzMTMxICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
  constructor() {}
  ngOnInit() {}
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 10,
  vars: 0,
  consts: [[1, "bg-light", "py-5"], [1, "container"], [1, "small", "text-center", "text-muted"], ["href", "https://www.instagram.com/saikiran_11421/?next=%2F", "target", "_blank"], [1, "fa", "fa-instagram"], ["href", "https://www.facebook.com/people/Saikiran-Duddukuri/100086939623790/", "target", "_blank"], [1, "fa", "fa-facebook"], ["href", "https://www.linkedin.com/in/saikiran-duddukuri-378ba81b7/", "target", "_blank"], [1, "fa", "fa-linkedin"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Copyright \u00A9 DSK ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["a[_ngcontent-%COMP%] {\n  margin: 0% 3%;\n}\n\na[_ngcontent-%COMP%]:nth-child(1) {\n  color: rgb(228, 9, 111);\n}\n\na[_ngcontent-%COMP%]:nth-child(2) {\n  color: rgb(55, 133, 235);\n}\n\na[_ngcontent-%COMP%]:nth-child(3) {\n  color: rgb(9, 166, 228);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0UsdUJBQUE7QUFFRjs7QUFBQTtFQUNJLHdCQUFBO0FBR0o7O0FBREE7RUFDSSx1QkFBQTtBQUlKIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIG1hcmdpbjogMCUgMyU7XHJcbn1cclxuYTpudGgtY2hpbGQoMSl7XHJcbiAgY29sb3I6IHJnYigyMjgsIDksIDExMSk7XHJcbn1cclxuYTpudGgtY2hpbGQoMil7XHJcbiAgICBjb2xvcjogcmdiKDU1LCAxMzMsIDIzNSk7XHJcbn1cclxuYTpudGgtY2hpbGQoMyl7XHJcbiAgICBjb2xvcjogcmdiKDksIDE2NiwgMjI4KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0) {
  return {
    changeCOlor: a0
  };
};
class NavbarComponent {
  constructor() {
    this.changeHeaderColor = false;
    this.collapseTheHeader = false;
  }
  ngOnInit() {}
  collapseHeader(val) {
    if (!this.collapseTheHeader && val == 'true') {
      this.collapseTheHeader = true;
    } else {
      this.collapseTheHeader = false;
    }
  }
  getScrollHeight(event) {
    this.collapseHeader('');
    if (window.pageYOffset > 5) {
      this.changeHeaderColor = true;
    } else {
      this.changeHeaderColor = false;
    }
  }
  onResize(event) {
    this.collapseHeader('');
    event.target.innerWidth;
  }
  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)();
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler($event) {
        return ctx.getScrollHeight($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("resize", function NavbarComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  decls: 20,
  vars: 3,
  consts: [["id", "mainNav", 1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top", "py-3", 3, "ngClass"], [1, "container"], [1, "navbar-brand", "js-scroll-trigger", 3, "click"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "navbar-collapse", "collapse"], [1, "navbar-nav", "ml-auto", "my-2", "my-lg-0"], [1, "nav-item"], ["href", "#about", 1, "nav-link", "js-scroll-trigger"], ["href", "#services", 1, "nav-link", "js-scroll-trigger"], ["href", "#portfolio", 1, "nav-link", "js-scroll-trigger"], ["href", "#contact", 1, "nav-link", "js-scroll-trigger"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_2_listener() {
        return ctx.scrollTop();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Saikiran Duddukuri");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7)(12, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7)(15, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7)(18, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.changeHeaderColor || ctx.collapseTheHeader));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
  styles: ["button[_ngcontent-%COMP%] {\n  outline: none;\n}\n\na[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.changeCOlor[_ngcontent-%COMP%] {\n  background: #0491c6;\n  transition: height 0.7s;\n}\n\n.collapsedBgColor[_ngcontent-%COMP%] {\n  transition: height 0.7s;\n  background: white;\n  color: black;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  transition: all 0.5s;\n  text-align: center;\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n  background: #70b2e1;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEQTtFQUNFLGFBQUE7QUE1REY7O0FBOERBO0VBQ0UsdUJBQUE7QUEzREY7O0FBNkRBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQTFERjs7QUE0REE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQXpERjs7QUE0REU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FBekRKO0FBMkRFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQXpESiIsInNvdXJjZXNDb250ZW50IjpbIi8vICNtYWluTmF2IHtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi8vICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcclxuLy8gICB9XHJcbi8vICAgI21haW5OYXYgLm5hdmJhci1icmFuZCB7XHJcbi8vICAgICBmb250LWZhbWlseTogXCJNZXJyaXdlYXRoZXIgU2Fuc1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbi8vICAgICBmb250LXdlaWdodDogNzAwO1xyXG4vLyAgICAgY29sb3I6ICMyMTI1Mjk7XHJcbi8vICAgfVxyXG4vLyAgICNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4vLyAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbi8vICAgICBmb250LWZhbWlseTogXCJNZXJyaXdlYXRoZXIgU2Fuc1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbi8vICAgICBmb250LXdlaWdodDogNzAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbi8vICAgICBwYWRkaW5nOiAwLjc1cmVtIDA7XHJcbi8vICAgfVxyXG4vLyAgICNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXIsICNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6YWN0aXZlIHtcclxuLy8gICAgIGNvbG9yOiAjZjQ2MjNhO1xyXG4vLyAgIH1cclxuLy8gICAjbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XHJcbi8vICAgICBjb2xvcjogI2Y0NjIzYSAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuLy8gICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuLy8gICAgICNtYWluTmF2IHtcclxuLy8gICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbi8vICAgICB9XHJcbi8vICAgICAjbWFpbk5hdiAubmF2YmFyLWJyYW5kIHtcclxuLy8gICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuLy8gICAgIH1cclxuLy8gICAgICNtYWluTmF2IC5uYXZiYXItYnJhbmQ6aG92ZXIge1xyXG4vLyAgICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgIH1cclxuLy8gICAgICNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4vLyAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4vLyAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbi8vICAgICB9XHJcbi8vICAgICAjbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcclxuLy8gICAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICB9XHJcbi8vICAgICAjbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW06bGFzdC1jaGlsZCAubmF2LWxpbmsge1xyXG4vLyAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgI21haW5OYXYubmF2YmFyLXNjcm9sbGVkIHtcclxuLy8gICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgI21haW5OYXYubmF2YmFyLXNjcm9sbGVkIC5uYXZiYXItYnJhbmQge1xyXG4vLyAgICAgICBjb2xvcjogIzIxMjUyOTtcclxuLy8gICAgIH1cclxuLy8gICAgICNtYWluTmF2Lm5hdmJhci1zY3JvbGxlZCAubmF2YmFyLWJyYW5kOmhvdmVyIHtcclxuLy8gICAgICAgY29sb3I6ICNmNDYyM2E7XHJcbi8vICAgICB9XHJcbi8vICAgICAjbWFpbk5hdi5uYXZiYXItc2Nyb2xsZWQgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbi8vICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgI21haW5OYXYubmF2YmFyLXNjcm9sbGVkIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXIge1xyXG4vLyAgICAgICBjb2xvcjogI2Y0NjIzYTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbmJ1dHRvbntcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbmF7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNoYW5nZUNPbG9ye1xyXG4gIGJhY2tncm91bmQ6ICMwNDkxYzY7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuN3M7XHJcbn1cclxuLmNvbGxhcHNlZEJnQ29sb3J7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuN3M7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5uYXZiYXItbmF2e1xyXG4gIC5uYXYtaXRlbXtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAubmF2LWl0ZW06aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzBiMmUxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1057:
/*!*************************************************************!*\
  !*** ./src/app/components/portfilio/portfilio.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfilioComponent": () => (/* binding */ PortfilioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PortfilioComponent {
  constructor() {}
  ngOnInit() {}
}
PortfilioComponent.ɵfac = function PortfilioComponent_Factory(t) {
  return new (t || PortfilioComponent)();
};
PortfilioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PortfilioComponent,
  selectors: [["portfilio"]],
  decls: 407,
  vars: 0,
  consts: [["id", "portfolio"], [1, "container-fluid", "p-0"], [1, "pro"], [1, "text-center", "mt-0"], [1, "divider", "my-4"], [1, "row", "no-gutters"], [1, "card", "text-white", "bg-primary", "col-mb-4"], [1, "card-header"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["type", "button", "data-toggle", "modal", "data-target", "#foodbudModal", 1, "btn", "viewMore"], ["type", "button", "data-toggle", "modal", "data-target", "#foodandsafetyModal", 1, "btn", "viewMore"], ["type", "button", "data-toggle", "modal", "data-target", "#matrimonyModal", 1, "btn", "viewMore"], ["type", "button", "data-toggle", "modal", "data-target", "#qurstoreModal", 1, "btn", "viewMore"], ["type", "button", "data-toggle", "modal", "data-target", "#actionplannerModal", 1, "btn", "viewMore"], ["type", "button", "data-toggle", "modal", "data-target", "#hawesandcurtis", 1, "btn", "viewMore"], ["id", "foodbudModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "foodbudModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "foodbudModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "boxShadow"], [1, "duration"], [1, "durationBody", "col-sm-12"], [1, "col-12", "col-sm-3", "col-lg-4", "durationInlineLeft"], [1, "col-12", "col-sm-3", "col-lg-4", "durationInline"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["id", "foodandsafetyModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "foodandsafetyModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "foodandsafetyModalLabel", 1, "modal-title"], ["id", "matrimonyModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "matrimonyModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "matrimonyModalLabel", 1, "modal-title"], ["id", "hawesandcurtis", "tabindex", "-1", "role", "dialog", "aria-labelledby", "hawesandcurtisLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "hawesandcurtisLabel", 1, "modal-title"], ["id", "actionplannerModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "actionplannerModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "actionplannerModalLabel", 1, "modal-title"], ["id", "qurstoreModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "qurstoreModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "qurstoreModalLabel", 1, "modal-title"]],
  template: function PortfilioComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Food Bud");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "h5", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Food Ordering");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Food bud is a food categorized website and here we can see based on our ......");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "View more");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6)(18, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Food And Safety");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8)(21, "h5", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Food Audit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Food & safety is creating for Landon ,This is a project for auditoring the restarents... ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "View more");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6)(28, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Matrimony");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8)(31, "h5", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Matrimonial");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Matrimonial website is a website which help you find a partner of your choice...");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "View more");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6)(38, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Qur Store");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8)(41, "h5", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Healthcare");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "QurHealth is a healthcare data management organization with a focus...");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "View more");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6)(48, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Action Planner");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8)(51, "h5", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Bussiness Management Systems");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Action Planner is a business management tool that involves...");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "View more");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6)(58, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Hawes & Curtis");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8)(61, "h5", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "E - Commerse");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Hawes & Curtis is famous for its quintessentially British menswear and womenswear...");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "View more");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 17)(68, "div", 18)(69, "div", 19)(70, "div", 20)(71, "h5", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Project Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 22)(74, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24)(77, "div", 25)(78, "div")(79, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Food Bud");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 26)(82, "div", 27)(83, "div", 28)(84, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Duration");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 28)(87, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Start : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Oct-2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 29)(92, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "End : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Feb-2021");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 25)(97, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Foodbud is a food recommendation platform that provides its users personalized food recommendations based on their food allergies, dietary and taste preferences. It helps them navigate safe and nutritious food options by simplifying ingredient analysis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 25)(102, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Environment");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Worked on Angular 9, HTML, SCSS, Bootstrap, Angular material etc.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 25)(107, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Roles & Responsibilities");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "ul")(110, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Working On second phase of implementation and Every phase we are adding new functionality ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Code review and refactoring.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Responsible for doing unit testing & integration testing of the code.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Working on performance tuning to speed up the system");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Involved in solving the issues which we got from QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 30)(121, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 32)(124, "div", 18)(125, "div", 19)(126, "div", 20)(127, "h5", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Project Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 22)(130, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 24)(133, "div", 25)(134, "div")(135, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Food & Safety");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 26)(138, "div", 27)(139, "div", 28)(140, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Duration");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 28)(143, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Start : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Oct-2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 29)(148, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "End : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Feb-2021");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 25)(153, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Food safety refers to routines in the preparation, handling and storage of food meant to prevent foodborne illness and injury. In this sense, food safety is a systemic approach to hygiene and accountability that concerns every aspect of the global food industry. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 25)(158, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Environment");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Worked on Python, Django Jquery,& MySql DB, CSS and bootstrap 3 etc");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 25)(163, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Roles & Responsibilities");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "ul")(166, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Working On second phase of implementation and Every phase we are adding new functionality ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Code review and refactoring.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Responsible for doing unit testing & integration testing of the code.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Working on performance tuning to speed up the system");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Involved in solving the issues which we got from QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 30)(177, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 34)(180, "div", 18)(181, "div", 19)(182, "div", 20)(183, "h5", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Project Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "button", 22)(186, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 24)(189, "div", 25)(190, "div")(191, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Matrimony");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 26)(194, "div", 27)(195, "div", 28)(196, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Duration");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 28)(199, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Start : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Sep-2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 29)(204, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "End : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Oct-2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 25)(209, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "We believe choosing a life partner is a big and important decision, and hence work towards giving a simple and secure matchmaking experience for you and your family. Each profile registered with us goes through a manual screening process before going live on site; we provide superior privacy controls for Free; and also verify contact information of members. You can register for Free and search according to your specific criteria on age, height, community, profession, income, location and much more- on your computer, tablet or mobile. Regular custom mails and notifications make the process easier and take you closer to your Jeevansathi! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 25)(214, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Environment");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Worked on Angular 10, HTML5, SCSS, Bootstrap, Angular material etc.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 25)(219, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Roles & Responsibilities");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "ul")(222, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "I was including in E2E development of the project which includes requirement gathering, Designing, Coding activities and Maintenance");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Experimenting with latest front-end technologies as a part of implementation of the high-volume external web app that helped to improve speed of web development.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Code review and refactoring. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " Involved in solving the issues which we got from QA.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Working on performance tuning to speed up the system. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 30)(233, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 36)(236, "div", 18)(237, "div", 19)(238, "div", 20)(239, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Project Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "button", 22)(242, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 24)(245, "div", 25)(246, "div")(247, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Hawes and Curtis");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 26)(250, "div", 27)(251, "div", 28)(252, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Duration");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 28)(255, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Start : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Mar-2021");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 29)(260, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "End : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Aug-2021");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 25)(265, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Hawes & Curtis is famous for its quintessentially British menswear and womenswear ranges. With over 100 years of heritage, Hawes & Curtis has a distinguished British past and a promising international future. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 25)(270, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Environment");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " Worked on Angular 10, HTML, SCSS, Bootstrap etc.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 25)(275, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Roles & Responsibilities");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "ul")(278, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " I was including in E2E development of the project which includes requirement gathering, Designing, Coding activities and Maintenance");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Experimenting with latest front-end technologies as a part of implementation of the high-volume external web app that helped to improve speed of web development. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, " Responsible for doing unit testing of the code. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " Code review and refactoring. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Working on performance tuning to speed up the system. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " Involved in solving the issues which we got from QA.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 30)(291, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 38)(294, "div", 18)(295, "div", 19)(296, "div", 20)(297, "h5", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Project Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "button", 22)(300, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 24)(303, "div", 25)(304, "div")(305, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Action Planner");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 26)(308, "div", 27)(309, "div", 28)(310, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Duration");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 28)(313, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Start : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Aug 2018");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 29)(318, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "End : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Sep-2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 25)(323, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Action Planner is a business management tool that involves Planning Objectives, Tracking Initiatives, Reporting Actions of individuals collaborate and share report for the accomplishment of collective goals. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 25)(328, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Environment");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Worked on Core PHP, AngularJS,MYSQL, HTML, SCSS, Bootstrap, Java Script etc. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 25)(333, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Roles & Responsibilities");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "ul")(336, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, " Role is a Junior Developer ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Worked on New future\u2019s and Bug fixes and Optimization ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, " Responsible for doing unit testing of the code. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, " Code review and refactoring. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, " Involved in solving the issues which we got from QA.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 30)(347, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 40)(350, "div", 18)(351, "div", 19)(352, "div", 20)(353, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Project Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "button", 22)(356, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 24)(359, "div", 25)(360, "div")(361, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Qur Store");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div", 26)(364, "div", 27)(365, "div", 28)(366, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Duration");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 28)(369, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Start : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Sep-2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 29)(374, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "End : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Oct-2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 25)(379, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "QurHealth is a healthcare data management organization with a focus on delivering innovative Healthcare IT solutions across the broader healthcare ecosystem. Built and owned by Ventech solutions, QurHealth provides holistic IT-healthcare offerings touching several healthcare players, including care providers, payers, patients, and researchers. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div", 25)(384, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Environment");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, " Worked on MongoDb, NodeJs, Angular, HTML, SCSS, Bootstrap, Angular material etc.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "div", 25)(389, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Roles & Responsibilities");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "ul")(392, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, " I was including in E2E development of the project which includes requirement gathering, Designing, Coding activities and Maintenance");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Experimenting with latest front-end technologies as a part of implementation of the high-volume external web app that helped to improve speed of web development. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, " Responsible for doing unit testing of the code. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, " Code review and refactoring. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Working on performance tuning to speed up the system. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, " Involved in solving the issues which we got from QA.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 30)(405, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: [".bg-primary[_ngcontent-%COMP%] {\n  background: #0c7ca1 !important;\n}\n\n.bg-primary[_ngcontent-%COMP%]:hover {\n  transition: all 0.7s;\n  background: #44b3dd !important;\n  box-shadow: 5px 15px 25px #797676;\n}\n\n.viewMore[_ngcontent-%COMP%] {\n  background: white;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin: 3%;\n  max-width: 21rem;\n}\n\n.no-gutters[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n#portfolio[_ngcontent-%COMP%] {\n  background: #7cceed;\n}\n\n.boxShadow[_ngcontent-%COMP%] {\n  box-shadow: 1px 0px 14px #999595;\n  padding: 3% 7%;\n  border-radius: 25px;\n  margin: 5% 3%;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.duration[_ngcontent-%COMP%] {\n  background: #e7dfdf;\n  padding: 1% 0%;\n  border-radius: 11px;\n}\n.duration[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding-left: 9%;\n}\n\n.durationBody[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.pro[_ngcontent-%COMP%] {\n  padding-top: 3%;\n  color: white;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-color: white;\n}\n\n.modal[_ngcontent-%COMP%]   .boxShadow[_ngcontent-%COMP%]:hover {\n  background: #b7b7b7;\n  color: white;\n}\n\n.durationInline[_ngcontent-%COMP%] {\n  text-align: right;\n  display: inline-flex;\n  min-width: 175px;\n}\n\n.durationInlineLeft[_ngcontent-%COMP%] {\n  text-align: left;\n  display: inline-flex;\n  min-width: 175px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wb3J0ZmlsaW8vcG9ydGZpbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSjs7QUFDQTtFQUNJLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7QUFHSjs7QUFEQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksdUJBQUE7QUFLSjs7QUFIQTtFQUNJLG1CQUFBO0FBTUo7O0FBSEE7RUFDSSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFNSjs7QUFKQTtFQUNJLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtBQVFKOztBQU5BO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFTSjtBQVJJO0VBQ0ksZ0JBQUE7QUFVUjs7QUFQQTtFQUNJLDhCQUFBO0FBVUo7O0FBUkE7RUFDRyxlQUFBO0VBQ0EsWUFBQTtBQVdIOztBQVRBO0VBQ0ksbUJBQUE7QUFZSjs7QUFUSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQVlSOztBQVJBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBV0o7O0FBVEE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFZSiIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZDojMGM3Y2ExICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJnLXByaW1hcnk6aG92ZXJ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC43cztcclxuICAgIGJhY2tncm91bmQ6ICM0NGIzZGQgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDVweCAxNXB4IDI1cHggIzc5NzY3NjtcclxufVxyXG4udmlld01vcmV7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uY2FyZHtcclxuICAgIG1hcmdpbjogMyU7XHJcbiAgICBtYXgtd2lkdGg6IDIxcmVtO1xyXG59XHJcbi5uby1ndXR0ZXJze1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuI3BvcnRmb2xpb3tcclxuICAgIGJhY2tncm91bmQ6ICM3Y2NlZWQ7XHJcbiAgICAvLyBib3JkZXItdG9wOjFweCBzb2xpZCByZ2IoMTczLCAxNjgsIDE2OCkgO1xyXG59XHJcbi5ib3hTaGFkb3d7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDE0cHggIzk5OTU5NTtcclxuICAgIHBhZGRpbmc6IDMlIDclO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG1hcmdpbjogNSUgMyU7XHJcbn1cclxuLm1vZGFsLWRpYWxvZ3tcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbn1cclxuaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmR1cmF0aW9ue1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZGZkZjtcclxuICAgIHBhZGRpbmc6IDElIDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAgIGg1e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOSU7XHJcbiAgICB9XHJcbn1cclxuLmR1cmF0aW9uQm9keXtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4ucHJve1xyXG4gICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZGl2aWRlcntcclxuICAgIGJvcmRlci1jb2xvcjp3aGl0ZTtcclxufVxyXG4ubW9kYWx7XHJcbiAgICAuYm94U2hhZG93OmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNiN2I3Yjc7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZHVyYXRpb25JbmxpbmV7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbiAgICBtaW4td2lkdGg6MTc1cHg7XHJcbn1cclxuLmR1cmF0aW9uSW5saW5lTGVmdHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIG1pbi13aWR0aDogMTc1cHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7761:
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ServicesComponent {
  constructor() {}
  ngOnInit() {}
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) {
  return new (t || ServicesComponent)();
};
ServicesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ServicesComponent,
  selectors: [["services"]],
  decls: 34,
  vars: 0,
  consts: [["id", "services", 1, "page-section"], [1, "container"], [1, "text-center", "mt-0"], [1, "divider", "my-4"], [1, "row", "setCards"], [1, "card", 2, "width", "18rem"], ["src", "assets/angular.jpg", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["src", "assets/react.jpg", "alt", "...", 1, "card-img-top"], ["src", "assets/frontEnd.jfif", "alt", "...", 1, "card-img-top"], ["src", "assets/MEAN.jpg", "alt", "...", 1, "card-img-top"]],
  template: function ServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Stack");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "h5", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Angular JS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I worked more than 4 years on Angular..!. Worked on Angular7,8,9,10 and 11 and also Version 1.o");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "h5", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "React JS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "I worked more than 1 year on React!. Good Hands on Experience on It.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7)(23, "h5", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Frontend Base Stack");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "I worked more than 4 years on These tech stack..!. Having a deep Knowledge on each technology");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7)(30, "h5", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "MEAN Stack");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "I worked 1 year on it!. Worked on a project using MEAN stack from scrath and completed three phases of it.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: [".setCards[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.setCards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin: 2% 3% 2% 3%;\n  box-shadow: 1px 0px 14px #999595;\n  padding: 1% 1%;\n  border-radius: 6px;\n}\n.setCards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transition: all 0.7s;\n  box-shadow: 5px 15px 25px #797676;\n}\n\n.boxShadow[_ngcontent-%COMP%] {\n  box-shadow: 1px 0px 14px #999595;\n  padding: 3% 7%;\n  border-radius: 25px;\n  margin: 5% 3%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7QUFBSTtFQUNJLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUFJO0VBQ1Esb0JBQUE7RUFDQSxpQ0FBQTtBQUVaOztBQUNBO0VBQ0ksZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0Q2FyZHN7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5jYXJke1xyXG4gICAgICAgIG1hcmdpbjogMiUgMyUgMiUgMyU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAxNHB4ICM5OTk1OTU7XHJcbiAgICAgICAgcGFkZGluZzogMSUgMSU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQ6aG92ZXJ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiA1cHggMTVweCAyNXB4ICM3OTc2NzY7XHJcbiAgICB9XHJcbn1cclxuLmJveFNoYWRvd3tcclxuICAgIGJveC1zaGFkb3c6IDFweCAwcHggMTRweCAjOTk5NTk1O1xyXG4gICAgcGFkZGluZzogMyUgNyU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgbWFyZ2luOiA1JSAzJTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n<!-- Brand -->\n<a class=\"navbar-brand\" href=\"#\">CRUD</a>\n\n<!-- Toggler/collapsibe Button -->\n<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n  <span class=\"navbar-toggler-icon\"></span>\n</button>\n\n<!-- Navbar links -->\n<div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"employee\">Employee</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"fileupload\">File Upload</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"slider\">Slider</a>\n    </li>\n    \n  </ul>\n</div>\n</nav>\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employee/employee.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employee/employee.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEmployeeEmployeeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-4\">\n    <div class=\"row\">\n        <div class=\"col-md-10 offset-md-1\">\n            \n            <button class=\"btn btn-primary\" (click)=\"askAdd()\" data-target=\"#addModal\" data-toggle=\"modal\">Add</button>\n            <br />\n            \n            <br />\n            <table class=\"table table-dark table-bordered\">\n                <tr>\n                    <td>S.No.</td>\n                    <td>Full Name <i (click)=\"sort('name')\" class=\"fa fa-sort\" aria-hidden=\"true\"></i></td>\n                    <td>Age <i (click)=\"sort('age')\" class=\"fa fa-sort\" aria-hidden=\"true\"></i></td>\n                    <td>City <i (click)=\"sort('city')\" class=\"fa fa-sort\" aria-hidden=\"true\"></i></td>\n                    <td>Salary <i (click)=\"sort('salary')\" class=\"fa fa-sort\" aria-hidden=\"true\"></i></td>\n                    <td>Bonus </td>\n                    <td>Gender</td>\n                    <td>Edit</td>\n                    <td>Delete</td>\n                </tr>\n                <tr *ngFor=\"let employee of employees | demo : columnName : defaultOrder; let n = index\">\n                    <td>{{ n+1 }}</td>\n                    <td>{{ employee.name }}</td>\n                    <td>{{ employee.age }}</td>\n                    <td>{{ employee.city }}</td>\n                    <td>{{ employee.salary }}</td>\n                    <td>{{ employee.salary | bonus : employee.gender : employee.age }}</td>\n                    <td>{{ employee.gender }}</td>\n                    <td><button class=\"btn btn-sm btn-info\" (click)=\"askEdit(employee)\" data-target=\"#addModal\" data-toggle=\"modal\">Edit</button></td>\n                    <td><button class=\"btn btn-sm btn-danger\"  (click)=\"askDelete(employee)\" data-toggle=\"modal\" data-target=\"#delModal\">Delete</button></td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>\n<app-add-edit (addEditEvent)=\"addEdit($event)\" [employee]=\"employee\"></app-add-edit>\n\n\n\n\n\n\n\n<app-delete [employee]=\"employee\" (deleteEvent)=\"delete()\"></app-delete>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fileupload/fileupload.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fileupload/fileupload.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFileuploadFileuploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br />\n<br />\n<input type=\"file\" #my/>\n<!-- <input type=\"text\" #my /> -->\n<button class=\"btn btn-success\" (click)=\"upload(my)\">Upload</button>\n<hr />\n<img *ngFor=\"let img of imgArr\" src=\"{{ img }}\" class=\"img-thumbnail\" style=\"height: 200px; width : 200px\" />\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>home works!</p>\n<br />\n<h2>{{ test.name }}</h2>\n\n<h3 appHello>Indore</h3>\n<p appHello>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, animi nostrum aliquam corporis vel necessitatibus qui nihil, autem rem dicta eligendi ut minus omnis quos modi soluta, voluptate ab vero.</p>\n\n<button loader class=\"btn btn-primary\">Go</button>\n\n<Br />\n<input type=\"text\" [(ngModel)]=\"x\"/>\n<button (click)=\"hello()\">Hello World</button>\n<hr />\n<app-box [demo]=\"test\" (goToParent)=\"recChild($event)\"></app-box>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/slider/slider.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/slider/slider.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSliderSliderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4 offset-md-4\">\n            <ng-image-slider [imageSize]=\"size\" [infinite]=\"true\" [autoSlide]=\"2\" [animationSpeed]=\"speed\" [images]=\"imageObject\" #nav></ng-image-slider>\n        </div>\n    </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/add-edit/add-edit.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/add-edit/add-edit.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedAddEditAddEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"addModal\" class=\"modal fade\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h3>{{ employee._id ? \"Update\" : \"Add New\" }} Employee</h3>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                    <label>Full Name</label>\n                    <input type=\"text\" [(ngModel)]=\"employee.name\" class=\"form-control\" />\n                </div>\n                <div class=\"form-group\">\n                    <label>Age</label>\n                    <input type=\"text\" [(ngModel)]=\"employee.age\" class=\"form-control\" />\n                </div>\n                <div class=\"form-group\">\n                    <label>City</label>\n                    <select class=\"form-control\" [(ngModel)]=\"employee.city\">\n                        <option value=\"\">Select</option>\n                        <option value=\"indore\">Indore</option>\n                        <option value=\"bhopal\">Bhopal</option>\n                        <option value=\"mumbai\">Mumbai</option>\n                    </select>\n                </div>\n                <div class=\"form-group\">\n                    <label>Salary</label>\n                    <input type=\"text\" [(ngModel)]=\"employee.salary\" class=\"form-control\"/>\n                </div>\n                <div class=\"form-group\">\n                    <label>Gender</label>\n                    Male <input type=\"radio\" [(ngModel)]=\"employee.gender\" value=\"male\" />\n                    Female <input type=\"radio\" [(ngModel)]=\"employee.gender\" value=\"female\" />\n                </div>\n\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"add()\">{{ employee._id ? \"Update\" : \"Add New\" }}</button>\n                <button class=\"btn btn-danger\" data-dismiss=\"modal\">Cancle</button>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/box/box.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/box/box.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedBoxBoxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br />\n<br />\n<div>\n    <h2>This is Box</h2>\n    <pre>{{ demo | json }}</pre>\n    <input type=\"text\" [(ngModel)]=\"demo.name\"/>\n    <button (click)=\"go()\">OK</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/delete/delete.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/delete/delete.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedDeleteDeleteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"delModal\" class=\"modal fade\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h2>Delete !</h2>\n            </div>\n            <div class=\"modal-body\">\n                <p>Are You sure want to Delete <b *ngIf=\"employee\">{{ employee.name }}</b> !</p>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"btn btn-dark\" data-dismiss=\"modal\">Close</div>\n                <div class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"delete()\">Delete</div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_employee_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/employee/employee.component */
    "./src/app/pages/employee/employee.component.ts");
    /* harmony import */


    var _pages_fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/fileupload/fileupload.component */
    "./src/app/pages/fileupload/fileupload.component.ts");
    /* harmony import */


    var _pages_slider_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/slider/slider.component */
    "./src/app/pages/slider/slider.component.ts");

    var routes = [{
      path: "fileupload",
      component: _pages_fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_5__["FileuploadComponent"]
    }, {
      path: "slider",
      component: _pages_slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"]
    }, {
      path: "",
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: "employee",
      component: _pages_employee_employee_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'crud';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_employee_employee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/employee/employee.component */
    "./src/app/pages/employee/employee.component.ts");
    /* harmony import */


    var _shared_delete_delete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/delete/delete.component */
    "./src/app/shared/delete/delete.component.ts");
    /* harmony import */


    var _shared_add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/add-edit/add-edit.component */
    "./src/app/shared/add-edit/add-edit.component.ts");
    /* harmony import */


    var _shared_box_box_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/box/box.component */
    "./src/app/shared/box/box.component.ts");
    /* harmony import */


    var _pipes_bonus_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pipes/bonus.pipe */
    "./src/app/pipes/bonus.pipe.ts");
    /* harmony import */


    var _pipes_demo_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pipes/demo.pipe */
    "./src/app/pipes/demo.pipe.ts");
    /* harmony import */


    var _pages_fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/fileupload/fileupload.component */
    "./src/app/pages/fileupload/fileupload.component.ts");
    /* harmony import */


    var _pages_slider_slider_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/slider/slider.component */
    "./src/app/pages/slider/slider.component.ts");
    /* harmony import */


    var ng_image_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ng-image-slider */
    "./node_modules/ng-image-slider/fesm2015/ng-image-slider.js");
    /* harmony import */


    var _directives_hello_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./directives/hello.directive */
    "./src/app/directives/hello.directive.ts");
    /* harmony import */


    var _directives_loader_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./directives/loader.directive */
    "./src/app/directives/loader.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _pages_employee_employee_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeComponent"], _shared_delete_delete_component__WEBPACK_IMPORTED_MODULE_9__["DeleteComponent"], _shared_add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_10__["AddEditComponent"], _shared_box_box_component__WEBPACK_IMPORTED_MODULE_11__["BoxComponent"], _pipes_bonus_pipe__WEBPACK_IMPORTED_MODULE_12__["BonusPipe"], _pipes_demo_pipe__WEBPACK_IMPORTED_MODULE_13__["DemoPipe"], _pages_fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_14__["FileuploadComponent"], _pages_slider_slider_component__WEBPACK_IMPORTED_MODULE_15__["SliderComponent"], _directives_hello_directive__WEBPACK_IMPORTED_MODULE_17__["HelloDirective"], _directives_loader_directive__WEBPACK_IMPORTED_MODULE_18__["LoaderDirective"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_16__["NgImageSliderModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/directives/hello.directive.ts":
  /*!***********************************************!*\
    !*** ./src/app/directives/hello.directive.ts ***!
    \***********************************************/

  /*! exports provided: HelloDirective */

  /***/
  function srcAppDirectivesHelloDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelloDirective", function () {
      return HelloDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HelloDirective =
    /*#__PURE__*/
    function () {
      function HelloDirective(_ele) {
        _classCallCheck(this, HelloDirective);

        this._ele = _ele; //  <h2></h2>

        _ele.nativeElement.style.backgroundColor = "red";
        _ele.nativeElement.style.fontSize = "15px";
      }

      _createClass(HelloDirective, [{
        key: "demo1",
        value: function demo1() {
          // console.log("hello");
          this._ele.nativeElement.style.backgroundColor = 'green';
        }
      }, {
        key: "demo2",
        value: function demo2() {
          // this._ele.nativeElement.style.backgroundColor = 'green';
          // console.log(this._ele.nativeElement.innerHTML);
          this._ele.nativeElement.innerHTML = "ujjian";
        }
      }]);

      return HelloDirective;
    }();

    HelloDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseover')], HelloDirective.prototype, "demo1", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')], HelloDirective.prototype, "demo2", null);
    HelloDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appHello]'
    })], HelloDirective);
    /***/
  },

  /***/
  "./src/app/directives/loader.directive.ts":
  /*!************************************************!*\
    !*** ./src/app/directives/loader.directive.ts ***!
    \************************************************/

  /*! exports provided: LoaderDirective */

  /***/
  function srcAppDirectivesLoaderDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderDirective", function () {
      return LoaderDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoaderDirective =
    /*#__PURE__*/
    function () {
      function LoaderDirective(_ele) {
        _classCallCheck(this, LoaderDirective);

        this._ele = _ele;
      }

      _createClass(LoaderDirective, [{
        key: "demo",
        value: function demo() {
          this._ele.nativeElement.innerHTML += " <span class='spinner-border spinner-border-sm text-light'></span>";
        }
      }]);

      return LoaderDirective;
    }();

    LoaderDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')], LoaderDirective.prototype, "demo", null);
    LoaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[loader]'
    })], LoaderDirective);
    /***/
  },

  /***/
  "./src/app/pages/employee/employee.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/employee/employee.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEmployeeEmployeeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/employee/employee.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/employee/employee.component.ts ***!
    \******************************************************/

  /*! exports provided: EmployeeComponent */

  /***/
  function srcAppPagesEmployeeEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function () {
      return EmployeeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/employee.service */
    "./src/app/services/employee.service.ts");

    var EmployeeComponent =
    /*#__PURE__*/
    function () {
      function EmployeeComponent(_emp) {
        _classCallCheck(this, EmployeeComponent);

        this._emp = _emp;
        this.x = false;
        this.employee = {
          name: "",
          age: null,
          city: "",
          salary: null,
          gender: ""
        };
        this.columnName = 'name';
        this.defaultOrder = true;
      }

      _createClass(EmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._emp.getEmployee().subscribe(function (result) {
            _this.employees = result;
          });
        }
      }, {
        key: "addEdit",
        value: function addEdit(obj) {
          var _this2 = this;

          if (obj._id) {
            this._emp.editEmployee(obj, obj._id).subscribe(function (result) {
              _this2.employees[_this2.index] = _this2.employee;
            });
          } else {
            this._emp.addEmployee(obj).subscribe(function (result) {
              _this2.employees.push(result);
            });
          }
        }
      }, {
        key: "askDelete",
        value: function askDelete(obj) {
          this.employee = obj;
        }
      }, {
        key: "delete",
        value: function _delete() {
          var _this3 = this;

          this._emp.deleteEmployee(this.employee._id).subscribe(function (result) {
            var n = _this3.employees.indexOf(_this3.employee);

            _this3.employees.splice(n, 1);
          });
        }
      }, {
        key: "askEdit",
        value: function askEdit(obj) {
          // this.employee = obj;
          this.index = this.employees.indexOf(obj);
          this.employee = Object.assign({}, obj);
        }
      }, {
        key: "askAdd",
        value: function askAdd() {
          this.employee = {
            name: "",
            age: null,
            city: "",
            salary: null,
            gender: ""
          };
        }
      }, {
        key: "sort",
        value: function sort(col, check) {
          this.columnName = col;
          this.defaultOrder = !this.defaultOrder;
        }
      }]);

      return EmployeeComponent;
    }();

    EmployeeComponent.ctorParameters = function () {
      return [{
        type: _services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
      }];
    };

    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employee',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employee.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employee/employee.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employee.component.scss */
      "./src/app/pages/employee/employee.component.scss")).default]
    })], EmployeeComponent);
    /***/
  },

  /***/
  "./src/app/pages/fileupload/fileupload.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/fileupload/fileupload.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFileuploadFileuploadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpbGV1cGxvYWQvZmlsZXVwbG9hZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/fileupload/fileupload.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/fileupload/fileupload.component.ts ***!
    \**********************************************************/

  /*! exports provided: FileuploadComponent */

  /***/
  function srcAppPagesFileuploadFileuploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileuploadComponent", function () {
      return FileuploadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/upload.service */
    "./src/app/services/upload.service.ts");

    var FileuploadComponent =
    /*#__PURE__*/
    function () {
      function FileuploadComponent(_upload) {
        _classCallCheck(this, FileuploadComponent);

        this._upload = _upload;
        this.imgArr = [];
      }

      _createClass(FileuploadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "upload",
        value: function upload(a) {
          var _this4 = this;

          var file = a.files[0];
          var form = new FormData();
          form.append("image", file);

          this._upload.doUpload(form).subscribe(function (result) {
            _this4.imgArr.push(result.path);
          });
        }
      }]);

      return FileuploadComponent;
    }();

    FileuploadComponent.ctorParameters = function () {
      return [{
        type: _services_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"]
      }];
    };

    FileuploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fileupload',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fileupload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fileupload/fileupload.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fileupload.component.scss */
      "./src/app/pages/fileupload/fileupload.component.scss")).default]
    })], FileuploadComponent);
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/home/home.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.test = {
          name: ""
        };
        this.x = "indore";
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "recChild",
        value: function recChild(a) {
          // console.log(a);
          this.test = a;
        }
      }, {
        key: "hello",
        value: function hello() {
          this.test.name = this.x; // this.test.name=x;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/pages/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/pages/slider/slider.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/slider/slider.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSliderSliderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/slider/slider.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/slider/slider.component.ts ***!
    \**************************************************/

  /*! exports provided: SliderComponent */

  /***/
  function srcAppPagesSliderSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
      return SliderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SliderComponent =
    /*#__PURE__*/
    function () {
      function SliderComponent() {
        _classCallCheck(this, SliderComponent);

        this.speed = .5;
        this.size = {
          height: 300,
          width: 400
        };
        this.imageObject = [{
          image: './assets/1.jpg',
          thumbImage: './assets/1.jpg',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: './assets/2.jpg',
          thumbImage: './assets/2.jpg',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: './assets/4.jpg',
          thumbImage: './assets/4.jpg',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: './assets/5.jpg',
          thumbImage: './assets/5.jpg',
          alt: 'alt of image',
          title: 'title of image'
        }];
      }

      _createClass(SliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SliderComponent;
    }();

    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-slider',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./slider.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/slider/slider.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./slider.component.scss */
      "./src/app/pages/slider/slider.component.scss")).default]
    })], SliderComponent);
    /***/
  },

  /***/
  "./src/app/pipes/bonus.pipe.ts":
  /*!*************************************!*\
    !*** ./src/app/pipes/bonus.pipe.ts ***!
    \*************************************/

  /*! exports provided: BonusPipe */

  /***/
  function srcAppPipesBonusPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonusPipe", function () {
      return BonusPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BonusPipe =
    /*#__PURE__*/
    function () {
      function BonusPipe() {
        _classCallCheck(this, BonusPipe);
      }

      _createClass(BonusPipe, [{
        key: "transform",
        value: function transform(a, b, c) {
          var y;

          if (b == "male") {
            var x = a * 10 / 100;
            a = parseInt(a);
            y = x + a;
          } else {
            var _x = a * 15 / 100;

            a = parseInt(a);
            y = _x + a;
          }

          if (c <= 25) {
            y += y * 5 / 100;
          }

          return y;
        }
      }]);

      return BonusPipe;
    }();

    BonusPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'bonus'
    })], BonusPipe);
    /***/
  },

  /***/
  "./src/app/pipes/demo.pipe.ts":
  /*!************************************!*\
    !*** ./src/app/pipes/demo.pipe.ts ***!
    \************************************/

  /*! exports provided: DemoPipe */

  /***/
  function srcAppPipesDemoPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoPipe", function () {
      return DemoPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DemoPipe =
    /*#__PURE__*/
    function () {
      function DemoPipe() {
        _classCallCheck(this, DemoPipe);
      }

      _createClass(DemoPipe, [{
        key: "transform",
        // transform(arr, check){
        //   if(check==true){
        //     arr.forEach(function(x){
        //       x.newname="hello";
        //     });
        //     return arr;
        //   }else{
        //     if(arr){
        //       arr.forEach(function (x) {
        //         x.newname = x.name;
        //       });
        //       return arr;
        //     }
        //   }
        // }
        value: function transform(arr, col, type) {
          if (type == true) {
            type = 'asc';
          } else {
            type = 'desc';
          }

          if (arr) {
            arr.sort(this.compareValues(col, type));
            return arr;
          }

          return [];
        }
      }, {
        key: "compareValues",
        value: function compareValues(key) {
          var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
          return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
              // property doesn't exist on either object
              return 0;
            }

            var varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
            var varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
            var comparison = 0;

            if (varA > varB) {
              comparison = 1;
            } else if (varA < varB) {
              comparison = -1;
            }

            return order === 'desc' ? comparison * -1 : comparison;
          };
        }
      }]);

      return DemoPipe;
    }();

    DemoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'demo'
    })], DemoPipe);
    /***/
  },

  /***/
  "./src/app/services/employee.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/employee.service.ts ***!
    \**********************************************/

  /*! exports provided: EmployeeService */

  /***/
  function srcAppServicesEmployeeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
      return EmployeeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var EmployeeService =
    /*#__PURE__*/
    function () {
      function EmployeeService(_http) {
        _classCallCheck(this, EmployeeService);

        this._http = _http;
        this.url = "http://localhost:3000/api/employee";
      }

      _createClass(EmployeeService, [{
        key: "getEmployee",
        value: function getEmployee() {
          return this._http.get(this.url);
        }
      }, {
        key: "addEmployee",
        value: function addEmployee(obj) {
          return this._http.post(this.url, obj);
        }
      }, {
        key: "editEmployee",
        value: function editEmployee(obj, id) {
          return this._http.put(this.url + "/" + id, obj);
        }
      }, {
        key: "deleteEmployee",
        value: function deleteEmployee(id) {
          return this._http.delete(this.url + "/" + id);
        }
      }]);

      return EmployeeService;
    }();

    EmployeeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EmployeeService);
    /***/
  },

  /***/
  "./src/app/services/upload.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/upload.service.ts ***!
    \********************************************/

  /*! exports provided: UploadService */

  /***/
  function srcAppServicesUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadService", function () {
      return UploadService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UploadService =
    /*#__PURE__*/
    function () {
      function UploadService(_http) {
        _classCallCheck(this, UploadService);

        this._http = _http;
      }

      _createClass(UploadService, [{
        key: "doUpload",
        value: function doUpload(obj) {
          return this._http.post("http://localhost:3000/api/fileupload", obj);
        }
      }]);

      return UploadService;
    }();

    UploadService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UploadService);
    /***/
  },

  /***/
  "./src/app/shared/add-edit/add-edit.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/shared/add-edit/add-edit.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedAddEditAddEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hZGQtZWRpdC9hZGQtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/add-edit/add-edit.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/add-edit/add-edit.component.ts ***!
    \*******************************************************/

  /*! exports provided: AddEditComponent */

  /***/
  function srcAppSharedAddEditAddEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddEditComponent", function () {
      return AddEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddEditComponent =
    /*#__PURE__*/
    function () {
      function AddEditComponent() {
        _classCallCheck(this, AddEditComponent);

        this.addEditEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AddEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "add",
        value: function add() {
          this.addEditEvent.emit(this.employee);
        }
      }]);

      return AddEditComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AddEditComponent.prototype, "employee", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AddEditComponent.prototype, "addEditEvent", void 0);
    AddEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/add-edit/add-edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-edit.component.scss */
      "./src/app/shared/add-edit/add-edit.component.scss")).default]
    })], AddEditComponent);
    /***/
  },

  /***/
  "./src/app/shared/box/box.component.scss":
  /*!***********************************************!*\
    !*** ./src/app/shared/box/box.component.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedBoxBoxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\n  height: 300px;\n  width: 300px;\n  background-color: #CCC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phbWVzL3RzczNfMzAvYW5nX2NydWQvY3J1ZC9zcmMvYXBwL3NoYXJlZC9ib3gvYm94LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvYm94L2JveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ib3gvYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0M7XG59IiwiZGl2IHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/box/box.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/box/box.component.ts ***!
    \*********************************************/

  /*! exports provided: BoxComponent */

  /***/
  function srcAppSharedBoxBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoxComponent", function () {
      return BoxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BoxComponent =
    /*#__PURE__*/
    function () {
      function BoxComponent() {
        _classCallCheck(this, BoxComponent);

        this.goToParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.demo = {
          name: ""
        };
      }

      _createClass(BoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "go",
        value: function go() {
          this.goToParent.emit(this.demo);
        }
      }]);

      return BoxComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], BoxComponent.prototype, "goToParent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BoxComponent.prototype, "demo", void 0);
    BoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-box',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./box.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/box/box.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./box.component.scss */
      "./src/app/shared/box/box.component.scss")).default]
    })], BoxComponent);
    /***/
  },

  /***/
  "./src/app/shared/delete/delete.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/delete/delete.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedDeleteDeleteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/delete/delete.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/delete/delete.component.ts ***!
    \***************************************************/

  /*! exports provided: DeleteComponent */

  /***/
  function srcAppSharedDeleteDeleteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteComponent", function () {
      return DeleteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DeleteComponent =
    /*#__PURE__*/
    function () {
      function DeleteComponent() {
        _classCallCheck(this, DeleteComponent);

        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(DeleteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "delete",
        value: function _delete() {
          this.deleteEvent.emit();
        }
      }]);

      return DeleteComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DeleteComponent.prototype, "employee", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DeleteComponent.prototype, "deleteEvent", void 0);
    DeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delete',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./delete.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/delete/delete.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./delete.component.scss */
      "./src/app/shared/delete/delete.component.scss")).default]
    })], DeleteComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/james/tss3_30/ang_crud/crud/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
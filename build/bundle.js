/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ADD_TO_CART_COUNT = exports.ADD_TO_CART_COUNT = 'add_to_cart';
var DISPLAY_TO_CART = exports.DISPLAY_TO_CART = 'display_to_cart';
var REMOVE_CART = exports.REMOVE_CART = 'remove_cart';

var addCartCount = exports.addCartCount = function addCartCount(count) {
    return function (dispatch) {

        dispatch({
            type: ADD_TO_CART_COUNT,
            payload: count
        });
    };
};

var displayToCart = exports.displayToCart = function displayToCart() {
    return function (dispatch) {

        dispatch({
            type: DISPLAY_TO_CART
        });
    };
};

var removeFromCart = exports.removeFromCart = function removeFromCart() {
    return function (dispatch) {

        dispatch({
            type: REMOVE_CART
        });
    };
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchProducts = exports.FETCH_PRODUCTS = undefined;

var _axios = __webpack_require__(9);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_PRODUCTS = exports.FETCH_PRODUCTS = 'FETCH_PRODUCTS';

var fetchProducts = exports.fetchProducts = function fetchProducts() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _axios2.default.get('http://localhost:8000/public/data.json');

                        case 2:
                            res = _context.sent;


                            dispatch({
                                type: FETCH_PRODUCTS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(19);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default () =>{
//     return (
//         <div>
//             <Route exact path ="/" component ={Home} />
//             <Route path ="/users" component ={UsersList} />
//         </div>
//     )
// }

exports.default = [{
    loadData: _App.loadData,
    path: '/',
    component: _App2.default,
    exact: true
}, {

    path: '/cart',
    component: function component() {
        return _react2.default.createElement(
            'div',
            null,
            'Cart Details'
        );
    },
    exact: true
}];
//import {Route} from 'react-router-dom';

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchFilters = exports.FETCH_FILTERS = undefined;

var _axios = __webpack_require__(9);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_FILTERS = exports.FETCH_FILTERS = 'FETCH_FILTERS';
var fetchFilters = exports.fetchFilters = function fetchFilters() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _axios2.default.get('http://localhost:8000/public/filter.json');

                        case 2:
                            res = _context.sent;


                            dispatch({
                                type: FETCH_FILTERS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hapi = __webpack_require__(15);

var _hapi2 = _interopRequireDefault(_hapi);

__webpack_require__(16);

var _renderer = __webpack_require__(17);

var _renderer2 = _interopRequireDefault(_renderer);

var _inert = __webpack_require__(31);

var _inert2 = _interopRequireDefault(_inert);

var _createStore = __webpack_require__(32);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(12);

var _Routes = __webpack_require__(8);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var bootupServer = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var server;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        server = new _hapi2.default.Server({
                            port: 8000,
                            host: 'localhost'
                        });
                        _context.next = 3;
                        return server.register(_inert2.default);

                    case 3:

                        // Home Route

                        server.route({
                            method: 'GET',
                            path: '/{any*}',
                            handler: function handler(request, reply) {
                                var store = (0, _createStore2.default)();
                                var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, request.url.pathname).map(function (_ref2) {
                                    var route = _ref2.route;

                                    return route.loadData ? route.loadData(store) : null;
                                });
                                return Promise.all(promises).then(function () {
                                    return (0, _renderer2.default)(request.url.pathname, store);
                                });
                            }
                        });

                        server.route({
                            method: 'GET',
                            path: '/public/{param*}',
                            options: {
                                handler: {
                                    directory: {
                                        path: 'public'
                                    }
                                }
                            }
                        });

                        //start server

                        _context.next = 7;
                        return server.start(function (err) {
                            if (err) {
                                throw err;
                            }
                            console.log('server running in ' + server.info.uri);
                        });

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function bootupServer() {
        return _ref.apply(this, arguments);
    };
}();

process.on('unhandledRejection', function (err) {
    console.log(err);
    process.exit(1);
});

bootupServer();

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("hapi");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(18);

var _Routes = __webpack_require__(8);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRouterDom = __webpack_require__(11);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req, context: {} },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));
    return '\n        <html>\n        <head></head>\n        <body>\n            <div id="root">' + content + '</div>\n            <script src="/public/bundle.js"></script>\n        </body>\n        </html>\n    ';
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

__webpack_require__(20);

var _ProductsList = __webpack_require__(21);

var _ProductsList2 = _interopRequireDefault(_ProductsList);

var _index = __webpack_require__(7);

var _filters = __webpack_require__(10);

var _Header = __webpack_require__(27);

var _Header2 = _interopRequireDefault(_Header);

var _Accordian = __webpack_require__(29);

var _Accordian2 = _interopRequireDefault(_Accordian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchProducts();
            this.props.fetchFilters();
        }
    }, {
        key: 'renderUsers',
        value: function renderUsers() {
            return this.props.products.map(function (product) {
                return _react2.default.createElement(
                    'li',
                    { key: product.id },
                    product.productName
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'content-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'filter' },
                        _react2.default.createElement(_Accordian2.default, { filtersList: this.props.filters })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'content' },
                        _react2.default.createElement(_ProductsList2.default, { productList: this.props.products })
                    )
                )
            );
        }
    }]);

    return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        products: state.products,
        filters: state.filters
    };
};

function loadData(store) {
    return store.dispatch((0, _index.fetchProducts)());
}

exports.loadData = loadData;
exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchProducts: _index.fetchProducts, fetchFilters: _filters.fetchFilters })(App);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".container{\r\n    background-color: white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n.content-container{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n}\r\n.content-container .filter{\r\n    flex: 0 1 16%;\r\n\r\n}\r\n.content-container .content{\r\n    flex: 0 1 84%;\r\n    flex-flow: row wrap;\r\n    display: flex;\r\n}\r\n.content-container .content > div{\r\n    margin: 5px;\r\n}", ""]);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _agGridReact = __webpack_require__(22);

var _ProductDetail = __webpack_require__(23);

var _ProductDetail2 = _interopRequireDefault(_ProductDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductsList = function ProductsList(props) {

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        props.productList.map(function (product) {
            return _react2.default.createElement(_ProductDetail2.default, { product: product, key: product.id });
        })
    );
};

exports.default = ProductsList;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("ag-grid-react");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    border : 1px solid black;\n    height:350px;\n    width:260px;\n    position:relative;\n    '], ['\n    border : 1px solid black;\n    height:350px;\n    width:260px;\n    position:relative;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: 160px;\n    margin-left: auto;\n    margin-right: auto;\n    height: 200px;\n    '], ['\n    width: 160px;\n    margin-left: auto;\n    margin-right: auto;\n    height: 200px;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-color: grey;\n    font-size: 17px;\n    padding-left: 3px;\n    font-weight : bold;\n    '], ['\n    font-color: grey;\n    font-size: 17px;\n    padding-left: 3px;\n    font-weight : bold;\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    font-size: 10px;\n    padding-left: 5px;\n    '], ['\n    font-size: 10px;\n    padding-left: 5px;\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    font-size: 15px;\n    padding-left: 3px;\n    '], ['\n    font-size: 15px;\n    padding-left: 3px;\n    ']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProductRating = __webpack_require__(24);

var _ProductRating2 = _interopRequireDefault(_ProductRating);

var _Button = __webpack_require__(25);

var _Button2 = _interopRequireDefault(_Button);

var _AddQuantity = __webpack_require__(26);

var _AddQuantity2 = _interopRequireDefault(_AddQuantity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function (props) {

    var Container = _styledComponents2.default.div(_templateObject);

    var Image = _styledComponents2.default.img(_templateObject2);

    var Title = _styledComponents2.default.div(_templateObject3);

    var Descprition = _styledComponents2.default.div(_templateObject4);

    var Price = _styledComponents2.default.div(_templateObject5);

    var removeQuantity = function removeQuantity() {
        if (count > 0) setCount(count - 1);else alert("oops !! you cannot beyond this");
    };

    return _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(Image, { src: props.product.thumbNail }),
        _react2.default.createElement(
            Title,
            null,
            props.product.productName
        ),
        _react2.default.createElement(
            Descprition,
            null,
            props.product.productDesc
        ),
        _react2.default.createElement(_ProductRating2.default, { numberOfStar: props.product.noOfRating, productRating: props.product.productRating }),
        _react2.default.createElement(
            Price,
            null,
            props.product.productPrice
        ),
        _react2.default.createElement(_Button2.default, null),
        _react2.default.createElement(_AddQuantity2.default, { totalQuantity: props.product.productQty })
    );
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    height: 10px;\n    width: 250px;\n    margin : 5px;\n    margin-bottom : 10px;\n    '], ['\n    height: 10px;\n    width: 250px;\n    margin : 5px;\n    margin-bottom : 10px;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width : 20px;\n    height: 10px;\n    '], ['\n    width : 20px;\n    height: 10px;\n    ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFontawesome = __webpack_require__(4);

var _freeSolidSvgIcons = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function (_ref) {
    var numberOfStar = _ref.numberOfStar,
        productRating = _ref.productRating;

    var Ratingstar = _styledComponents2.default.div(_templateObject);

    var NumberofRating = _styledComponents2.default.span(_templateObject2);

    var Stars = function Stars(numberOfStar) {
        var star = [];
        for (var i = 0; i < numberOfStar; i++) {
            star.push(_react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faStar, size: "1x", style: { color: "orange" } }));
        }
        return star;
    };

    return _react2.default.createElement(
        Ratingstar,
        null,
        Stars(numberOfStar),
        '(',
        _react2.default.createElement(
            NumberofRating,
            null,
            productRating
        ),
        ')'
    );
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\n        width : 110px;\n        height : 35px;\n        border: 1px solid #357ebd;\n        font-size : 12px;\n        margin : 2px;\n        color: #fff;\n        background-color: #337ab7;\n        border-color: #2e6da4;\n    \n\n        ', ';\n    \n    '], ['\n        width : 110px;\n        height : 35px;\n        border: 1px solid #357ebd;\n        font-size : 12px;\n        margin : 2px;\n        color: #fff;\n        background-color: #337ab7;\n        border-color: #2e6da4;\n    \n\n        ', ';\n    \n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        background-color: #d9534f;\n        border-color: #d43f3a;\n        '], ['\n        background-color: #d9534f;\n        border-color: #d43f3a;\n        ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = __webpack_require__(1);

var _cartCount = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function (props) {

    var dispatch = (0, _reactRedux.useDispatch)();
    var ADD_TO_CART = "Add to cart";
    var REMOVE_FROM_CART = "Remove from cart";

    var _useState = (0, _react.useState)(ADD_TO_CART),
        _useState2 = _slicedToArray(_useState, 2),
        buttonContext = _useState2[0],
        setbuttonContext = _useState2[1];

    var Button = _styledComponents2.default.button(_templateObject, buttonContext == "Remove from cart" && (0, _styledComponents.css)(_templateObject2));

    var changeButtonContext = function changeButtonContext() {
        if (buttonContext === ADD_TO_CART) {
            setbuttonContext(REMOVE_FROM_CART);
            dispatch({ type: _cartCount.DISPLAY_TO_CART });
        } else {
            setbuttonContext(ADD_TO_CART);
            dispatch({ type: _cartCount.REMOVE_CART });
        }
    };

    return _react2.default.createElement(
        Button,
        { onClick: function onClick() {
                return changeButtonContext();
            } },
        buttonContext
    );
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\n        width : 30px;\n        height : 25px;\n        background: none;\n        border: none;\n    '], ['\n        width : 30px;\n        height : 25px;\n        background: none;\n        border: none;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width : 25px;\n    height : 25px;\n    value : 5;\n    text-align : center;\n    '], ['\n    width : 25px;\n    height : 25px;\n    value : 5;\n    text-align : center;\n    ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFontawesome = __webpack_require__(4);

var _freeSolidSvgIcons = __webpack_require__(5);

var _actions = __webpack_require__(7);

var _reactRedux = __webpack_require__(1);

var _cartCount = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function (props) {
    var _useState = (0, _react.useState)(0),
        _useState2 = _slicedToArray(_useState, 2),
        count = _useState2[0],
        setCount = _useState2[1];

    var dispatch = (0, _reactRedux.useDispatch)();
    var QuantityButton = _styledComponents2.default.button(_templateObject);
    var Quantity = _styledComponents2.default.input(_templateObject2);

    var addQuantity = function addQuantity(totalQuantity) {
        if (count <= totalQuantity) {
            setCount(count + 1);
            dispatch({ type: _cartCount.ADD_TO_CART_COUNT, value: count });
        } else alert("you are exceeding the quantity!!!!");
    };

    var removeQuantity = function removeQuantity() {
        if (count > 0) setCount(count - 1);else alert("oops !! you cannot beyond this");
    };

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            QuantityButton,
            { onClick: function onClick() {
                    return removeQuantity();
                } },
            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faMinus, size: "1x" })
        ),
        _react2.default.createElement(Quantity, { value: count, type: 'text', defaultValue: '0' }),
        _react2.default.createElement(
            QuantityButton,
            { onClick: function onClick() {
                    return addQuantity(props.totalQuantity);
                } },
            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faPlus, size: "1x" })
        )
    );
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(28);

var _reactFontawesome = __webpack_require__(4);

var _freeSolidSvgIcons = __webpack_require__(5);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
    var data = (0, _reactRedux.useSelector)(function (state) {
        return state.count;
    });

    return _react2.default.createElement(
        'header',
        { className: 'header ' },
        _react2.default.createElement(
            'div',
            { className: 'logo' },
            ' POC Shop'
        ),
        _react2.default.createElement('input', { className: 'searchBar', type: 'search' }),
        _react2.default.createElement(
            'div',
            { className: 'icon' },
            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faShoppingCart, size: "2x" }),
            _react2.default.createElement(
                'span',
                null,
                data.displayCount > 0 ? _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/new-route' },
                    '(',
                    data.displayCount,
                    ')'
                ) : "(0)"
            )
        )
    );
};

exports.default = Header;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".header {\r\n    height: 70px !important; \r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    /* grid-template-columns: repeat(7,1fr); */\r\n    border:1px solid black;\r\n    border-width: 1px 1px 0px 1px;\r\n    box-shadow: 0px 2px grey;\r\n    padding: 13px;\r\n    margin-top: 5px;\r\n    \r\n}\r\n.icon{\r\n    padding: 10px;\r\n    flex: 0 1 10%;\r\n}\r\n.logo {\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    align-self: center;\r\n    justify-self: center;\r\n    color: gray;\r\n    float: right;\r\n    flex: 0 1 30%;\r\n}\r\n\r\n.searchBar {\r\n    float:right;\r\n    height: 50px;\r\n    align-self: center;\r\n    border: 1px solid lightgray;\r\n    flex: 0 1 60%;\r\n}\r\n\r\n.cart {\r\n    align-self: center;\r\n    justify-self: center;\r\n    display: flex;\r\n    \r\n}\r\n\r\n.cart > span {\r\n    font-size: 25px;\r\n    margin-left: 8px;\r\n    align-self: center;\r\n}", ""]);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(["\n    padding: 5px;\n    border-radius: 4px;\n    width: 80%;\n    margin: auto;\n    min-width: 170px;\n    "], ["\n    padding: 5px;\n    border-radius: 4px;\n    width: 80%;\n    margin: auto;\n    min-width: 170px;\n    "]),
    _templateObject2 = _taggedTemplateLiteral(["\n    text-decoration: none;\n    list-style-type: none;\n    "], ["\n    text-decoration: none;\n    list-style-type: none;\n    "]),
    _templateObject3 = _taggedTemplateLiteral(["\n        background-color : blue;\n        color:white;\n        padding: 5px;\n        margin: 4px;\n\n    "], ["\n        background-color : blue;\n        color:white;\n        padding: 5px;\n        margin: 4px;\n\n    "]),
    _templateObject4 = _taggedTemplateLiteral(["\n    padding: 0;\n    display: none;\n    background-color: white;\n    overflow: hidden;\n    display: ", ";\n    margin:0px;\n    \n  "], ["\n    padding: 0;\n    display: none;\n    background-color: white;\n    overflow: hidden;\n    display: ", ";\n    margin:0px;\n    \n  "]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

__webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Accordion = function Accordion(props) {
    var _useState = (0, _react.useState)(""),
        _useState2 = _slicedToArray(_useState, 2),
        Active = _useState2[0],
        setActiveState = _useState2[1];

    function toggleAccordion(id) {
        Active === id ? setActiveState(null) : setActiveState(id);
    }

    var Container = _styledComponents2.default.div(_templateObject);

    var Button = _styledComponents2.default.ul(_templateObject2);
    var Filters = _styledComponents2.default.div(_templateObject3);

    var FilterExpand = _styledComponents2.default.ul(_templateObject4, function (props) {
        return props.show ? "block" : "none";
    });
    return _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
            Filters,
            null,
            "FIlters"
        ),
        props.filtersList.map(function (filter) {
            return _react2.default.createElement(
                _react2.default.Fragment,
                { key: filter.id },
                _react2.default.createElement(
                    Button,
                    { className: "accordion ", onClick: function onClick() {
                            return toggleAccordion(filter.id);
                        } },
                    _react2.default.createElement(
                        "li",
                        { className: "accordion__title", onClick: toggleAccordion },
                        filter.name,
                        filter.types && (Active === filter.id ? "-" : "+")
                    )
                ),
                filter.types && _react2.default.createElement(
                    FilterExpand,
                    { className: "onhover", show: Active === filter.id },
                    filter.types.map(function (type) {
                        return _react2.default.createElement(
                            Button,
                            { key: type },
                            type
                        );
                    })
                )
            );
        })
    );
};

exports.default = Accordion;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap);", ""]);
// Module
exports.push([module.i, "/* Style the buttons that are used to open and close the accordion panel */\r\n.accordion {\r\n  background-color: white;\r\n  color: gray;\r\n  cursor: pointer;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  border: 1px solid lightgray;\r\n  outline: none;\r\n  transition: background-color 0.6s ease;\r\n  margin:0px;\r\n}\r\n\r\n/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */\r\n.accordion:hover,\r\n.active {\r\n  background-color: #ccc;\r\n}\r\n  \r\n/* Style the accordion content title */\r\n.accordion__title {\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  margin: 12px 0px;\r\n\r\n}\r\n\r\n", ""]);


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("inert");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(13);

var _reducers = __webpack_require__(33);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxThunk = __webpack_require__(37);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

    var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

    return store;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(13);

var _productsDetailsReducer = __webpack_require__(34);

var _productsDetailsReducer2 = _interopRequireDefault(_productsDetailsReducer);

var _cartCountDetails = __webpack_require__(35);

var _cartCountDetails2 = _interopRequireDefault(_cartCountDetails);

var _filtersDetailsReducer = __webpack_require__(36);

var _filtersDetailsReducer2 = _interopRequireDefault(_filtersDetailsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    products: _productsDetailsReducer2.default,
    count: _cartCountDetails2.default,
    filters: _filtersDetailsReducer2.default

});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(7);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];


    switch (action.type) {

        case _actions.FETCH_PRODUCTS:
            return action.payload.data;
        case _actions.FETCH_FILTERS:
            return action.payload.data;
        default:
            return state;

    }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _cartCount = __webpack_require__(6);

var initialState = {
    count: 0,
    displayCount: 0
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var newState = _extends({}, state);
    switch (action.type) {
        case _cartCount.ADD_TO_CART_COUNT:

            newState.count = action.value + 1;
            break;
        case _cartCount.DISPLAY_TO_CART:
            newState.displayCount = newState.count;
            break;

        case _cartCount.REMOVE_CART:
            newState.count = 0;
            newState.displayCount = 0;
            break;
    }
    return newState;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _filters = __webpack_require__(10);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];


    switch (action.type) {

        case _filters.FETCH_FILTERS:
            console.log(action.payload.data);
            return action.payload.data;
        default:
            return state;

    }
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })
/******/ ]);
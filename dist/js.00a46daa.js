// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/normalize.css/normalize.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../images/bg.png":[["bg.e79a717b.png","images/bg.png"],"images/bg.png"],"./../images/antenna.png":[["antenna.ac2a5d2d.png","images/antenna.png"],"images/antenna.png"],"./../images/navigation-bg.jpg":[["navigation-bg.79180d87.jpg","images/navigation-bg.jpg"],"images/navigation-bg.jpg"],"./../images/main-bg.jpg":[["main-bg.80b176ff.jpg","images/main-bg.jpg"],"images/main-bg.jpg"],"./../images/wheel.png":[["wheel.8066a4ca.png","images/wheel.png"],"images/wheel.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"sass/_media.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/framework/Component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Component =
/*#__PURE__*/
function () {
  function Component(host) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Component);

    this.host = host;
    this.props = props;
    this.bindBeforeRender();

    this._render();
  }

  _createClass(Component, [{
    key: "bindBeforeRender",
    value: function bindBeforeRender() {// this.updateState = this.updateState.bind(this);
    }
  }, {
    key: "_render",
    value: function _render(st) {
      var _this = this;

      this.host.innerHTML = "";
      var content = this.render(st);

      if (!Array.isArray(content)) {
        content = [content];
      }

      content.map(function (item) {
        return _this._vDomPrototypeElementToHtmlElement(item);
      }) // [string|HTMLElement] => [HTMLElement]
      .forEach(function (htmlElement) {
        _this.host.appendChild(htmlElement);
      });
    }
  }, {
    key: "updateState",
    value: function updateState(state) {
      var nextState = Object.assign({}, this.state, state);
      this.state = nextState;

      this._render(this.state);

      return nextState;
    }
  }, {
    key: "render",
    value: function render() {
      return 'OMG! They wanna see me!';
    }
  }, {
    key: "_vDomPrototypeElementToHtmlElement",
    value: function _vDomPrototypeElementToHtmlElement(element) {
      var _this2 = this;

      if (typeof element === 'string') {
        var container;
        var containsHtmlTags = /[<>&]/.test(element);

        if (containsHtmlTags) {
          container = document.createElement('div');
          container.innerHTML = element;
        } else {
          container = document.createTextNode(element);
        }

        return container;
      } else {
        if (element.tag) {
          if (typeof element.tag === 'function') {
            var _container = document.createElement('ul');

            new element.tag(_container, element.props);
            return _container;
          } else {
            // string
            var _container2 = document.createElement(element.tag);

            if (element.content !== undefined) {
              _container2.innerHTML = element.content;
            } // ensure following element properties are Array


            ['classList', 'attributes', 'children'].forEach(function (item) {
              if (element[item] && !Array.isArray(element[item])) {
                element[item] = [element[item]];
              }
            });

            if (element.classList) {
              var _container2$classList;

              (_container2$classList = _container2.classList).add.apply(_container2$classList, _toConsumableArray(element.classList));
            }

            if (element.attributes) {
              element.attributes.forEach(function (attributeSpec) {
                _container2.setAttribute(attributeSpec.name, attributeSpec.value);
              });
            } // process eventHandlers


            if (element.eventHandlers) {
              element.eventHandlers.forEach(function (attributeSpec) {
                _container2.addEventListener(attributeSpec.eventType, attributeSpec.eventMethod);
              });
            } // process children


            if (element.children) {
              element.children.forEach(function (el) {
                var htmlElement = _this2._vDomPrototypeElementToHtmlElement(el);

                _container2.appendChild(htmlElement);
              });
            }

            return _container2;
          }
        }

        return element;
      }
    }
  }]);

  return Component;
}();

exports.default = Component;
},{}],"js/services/RickandmortyAPI.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RickandmortyAPI =
/*#__PURE__*/
function () {
  function RickandmortyAPI() {
    _classCallCheck(this, RickandmortyAPI);
  }

  _createClass(RickandmortyAPI, [{
    key: "getCharacterList",
    value: function getCharacterList(query) {
      return fetch('https://rickandmortyapi.com/api/' + query, {
        method: 'get'
      }).then(function (response) {
        if (response.ok) return response.json();
        return Promise.reject('API responded ' + response.status);
      });
    }
  }]);

  return RickandmortyAPI;
}();

var _default = new RickandmortyAPI();

exports.default = _default;
},{}],"js/services/AppState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AppState =
/*#__PURE__*/
function () {
  function AppState() {
    _classCallCheck(this, AppState);

    this.watchers = {// 'ENTITY': [ watcher1, watcher2 ],
    };
  }

  _createClass(AppState, [{
    key: "watch",
    value: function watch(entity, watcher) {
      if (this.watchers[entity]) {
        this.watchers[entity].push(watcher);
      } else {
        this.watchers[entity] = [watcher];
      }
    }
  }, {
    key: "update",
    value: function update(entity, newValue) {
      // console.log(newValue);
      this.watchers[entity] && this.watchers[entity].forEach(function (watcher) {
        return watcher(newValue);
      });
    }
  }]);

  return AppState;
}();

var _default = new AppState();

exports.default = _default;
},{}],"js/components/CharacterItem/CharacterItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Component2 = _interopRequireDefault(require("../../framework/Component"));

var _RickandmortyAPI = _interopRequireDefault(require("../../services/RickandmortyAPI"));

var _AppState = _interopRequireDefault(require("../../services/AppState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CharacterItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CharacterItem, _Component);

  function CharacterItem(host, props) {
    var _this;

    _classCallCheck(this, CharacterItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CharacterItem).call(this, host, props)); // this.host = document.querySelector('.modal');

    _this.id = _this.props.id;

    _this.getItems();

    return _this;
  }

  _createClass(CharacterItem, [{
    key: "bindBeforeRender",
    value: function bindBeforeRender() {
      this.state = {
        item: {}
      };
    }
  }, {
    key: "getItems",
    value: function getItems() {
      var _this2 = this;

      _RickandmortyAPI.default.getCharacterList("character/".concat(this.id)).then(function (res) {
        _this2.updateState({
          item: res
        });
      }).catch(function (err) {
        _this2.error = err;

        _this2.render();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var item = this.state.item;
      document.querySelector('body').addEventListener('click', function () {
        document.querySelector('.modal').innerHTML = '';
      });
      return [{
        tag: 'div',
        classList: 'item-character-wrap',
        children: [{
          tag: 'img',
          attributes: [{
            name: 'src',
            value: item.image
          }]
        }, {
          tag: 'span',
          classList: 'item-character',
          content: item.name
        }, {
          tag: 'span',
          classList: 'item-character',
          content: item.gender
        }, {
          tag: 'span',
          classList: 'item-character',
          content: item.location ? item.location.name : '-'
        }, {
          tag: 'span',
          classList: 'item-character',
          content: item.species
        }, {
          tag: 'span',
          classList: 'item-character',
          content: item.status
        }]
      }]; // return 'test'
    }
  }]);

  return CharacterItem;
}(_Component2.default);

exports.default = CharacterItem;
},{"../../framework/Component":"js/framework/Component.js","../../services/RickandmortyAPI":"js/services/RickandmortyAPI.js","../../services/AppState":"js/services/AppState.js"}],"js/components/CharacterItem/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CharacterItem", {
  enumerable: true,
  get: function () {
    return _CharacterItem.default;
  }
});

var _CharacterItem = _interopRequireDefault(require("./CharacterItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./CharacterItem":"js/components/CharacterItem/CharacterItem.js"}],"js/components/CharacterList/CharacterList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Component2 = _interopRequireDefault(require("../../framework/Component"));

var _RickandmortyAPI = _interopRequireDefault(require("../../services/RickandmortyAPI"));

var _AppState = _interopRequireDefault(require("../../services/AppState"));

var _CharacterItem = require("../CharacterItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CharacterList =
/*#__PURE__*/
function (_Component) {
  _inherits(CharacterList, _Component);

  function CharacterList(host, props) {
    var _this;

    _classCallCheck(this, CharacterList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CharacterList).call(this, host, props));

    _AppState.default.watch('props', _this.updateMyself);

    _AppState.default.watch('clicks', _this.updateMyself);

    return _this;
  }

  _createClass(CharacterList, [{
    key: "bindBeforeRender",
    value: function bindBeforeRender() {
      // this.requestWeather = this.requestWeather.bind(this);
      this.updateMyself = this.updateMyself.bind(this); // this.onClick = this.onClick.bind(this);

      this.state = {
        result: [],
        firstRun: true
      };
    }
  }, {
    key: "updateMyself",
    value: function updateMyself(subState, i) {
      //
      console.log(subState, i);
      var newState = {
        result: subState.results
      }; // do update

      this.updateState(newState);
    } // onClick(e){
    //     e.stopPropagation();
    //     console.log('!!!!!!!!!!*****',this.state.result);
    //
    //     let hst = document.getElementById('app');
    //     let id = e.target.closest('.forecast-item').getAttribute('data-id');
    //     new CharacterItem(hst,this.state.result[id])
    //     // AppState.update('props',{data, i});
    //     // console.log(i);
    //     // AppState.update('clicks',data);
    // }

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      _RickandmortyAPI.default.getCharacterList('character').then(function (data) {
        if (!data) {
          return;
        }

        if (_this2.state.firstRun) {
          // this.state.firstRun = false;
          // AppState.update('props',data);
          _this2.updateState({
            result: data.results,
            firstRun: false
          });

          console.log(_this2.state);
        }
      });

      return this.state.result.map(function (item, ind, arr) {
        return {
          tag: 'li',
          classList: 'forecast-item',
          children: [{
            tag: 'a',
            attributes: [{
              name: 'href',
              value: "#/item/".concat(item.id)
            }],
            children: [{
              tag: 'span',
              content: item.name
            }, {
              tag: 'img',
              attributes: [{
                name: 'src',
                value: item.image
              }]
            }]
          }],
          attributes: [{
            name: 'data-id',
            value: item.id - 1
          }] // eventHandlers: [
          //     {
          //         eventType: 'click',
          //         eventMethod: this.onClick, // bind(this): constructor(){this.method = this.method.bind(this);}
          //     },
          // ],

        };
      });
    }
  }]);

  return CharacterList;
}(_Component2.default);

exports.default = CharacterList;
},{"../../framework/Component":"js/framework/Component.js","../../services/RickandmortyAPI":"js/services/RickandmortyAPI.js","../../services/AppState":"js/services/AppState.js","../CharacterItem":"js/components/CharacterItem/index.js"}],"js/components/CharacterList/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CharacterList", {
  enumerable: true,
  get: function () {
    return _CharacterList.default;
  }
});

var _CharacterList = _interopRequireDefault(require("./CharacterList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./CharacterList":"js/components/CharacterList/CharacterList.js"}],"js/components/NotFound/NotFound.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Component2 = _interopRequireDefault(require("../../framework/Component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NotFound =
/*#__PURE__*/
function (_Component) {
  _inherits(NotFound, _Component);

  function NotFound(host, props) {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotFound).call(this, host, props)); // this.host = document.querySelector('.modal');
  }

  _createClass(NotFound, [{
    key: "render",
    value: function render() {
      this.host = document.querySelector('.modal');
      document.querySelector('body').addEventListener('click', function () {
        document.querySelector('.modal').innerHTML = '';
      });
      return [{
        tag: 'div',
        classList: 'not-found',
        content: 'Person is not found'
      }];
    }
  }]);

  return NotFound;
}(_Component2.default);

exports.default = NotFound;
},{"../../framework/Component":"js/framework/Component.js"}],"js/components/NotFound/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NotFound", {
  enumerable: true,
  get: function () {
    return _NotFound.default;
  }
});

var _NotFound = _interopRequireDefault(require("./NotFound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./NotFound":"js/components/NotFound/NotFound.js"}],"js/routes/routes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _CharacterList = require("../components/CharacterList");

var _CharacterItem = require("../components/CharacterItem");

var _NotFound = require("../components/NotFound");

var routes = [{
  path: '' // :TODO component

}, {
  path: 'item/:id',
  component: _CharacterItem.CharacterItem
}, {
  path: '**',
  component: _NotFound.NotFound
}];
exports.routes = routes;
},{"../components/CharacterList":"js/components/CharacterList/index.js","../components/CharacterItem":"js/components/CharacterItem/index.js","../components/NotFound":"js/components/NotFound/index.js"}],"js/framework/Router.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Router =
/*#__PURE__*/
function () {
  function Router(host, routes, App) {
    _classCallCheck(this, Router);

    this.host = host;
    this.routes = routes;
    this.routerOutlet = document.querySelector('.modal');
    this.app = new App(host, {
      routerOutlet: this.routerOutlet
    });
    this.notFound = this.routes.find(function (route) {
      return route.path === '**';
    });
    window.addEventListener('hashchange', this.handleUrlChange.bind(this));
  }

  _createClass(Router, [{
    key: "init",
    value: function init() {
      this.handleUrlChange();
    }
  }, {
    key: "handleUrlChange",
    value: function handleUrlChange() {
      if (!location.hash) {
        location.assign("/#".concat(location.pathname));
      } else {
        var browserUrlArr = location.hash.split('/').slice(1);
        this.findRoute(browserUrlArr);
      }
    }
  }, {
    key: "findRoute",
    value: function findRoute(browserUrlArr) {
      var _this = this;

      var foundedRoute = this.routes.find(function (route) {
        return _this.isUrlEqualRoute(browserUrlArr, route);
      });

      if (!foundedRoute) {
        this.renderNewComponent(this.notFound);
      } else {
        if (foundedRoute.path) {
          var params = this.getParamsFromUrl(foundedRoute.path, browserUrlArr);
          this.renderNewComponent(foundedRoute, params);
        }
      }
    }
  }, {
    key: "getParamsFromUrl",
    value: function getParamsFromUrl(routePath, browserUrlArr) {
      var routePathArr = routePath.split('/');
      var isEmptyPath = browserUrlArr.length === 1;

      if (isEmptyPath) {
        return;
      }

      return routePathArr.reduce(function (acc, pathPart, i) {
        if (pathPart !== browserUrlArr[i]) {
          acc[pathPart.slice(1)] = browserUrlArr[i];
        }

        return acc;
      }, {});
    }
  }, {
    key: "isUrlEqualRoute",
    value: function isUrlEqualRoute(browserUrlArr, route) {
      var routePathArr = route.path.split('/');
      return browserUrlArr.every(function (urlPart, i) {
        var isRoutePathEqualBrowserUrl = routePathArr[i] === urlPart;
        var isRouteArrPartContainsParam = routePathArr[i].startsWith(':');
        return isRoutePathEqualBrowserUrl || isRouteArrPartContainsParam;
      });
    }
  }, {
    key: "renderNewComponent",
    value: function renderNewComponent(route, params) {
      var newComponent = new route.component(this.routerOutlet, params);
    }
  }]);

  return Router;
}();

exports.default = Router;
},{}],"js/components/App/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Component2 = _interopRequireDefault(require("../../framework/Component"));

var _CharacterList = require("../CharacterList");

var _AppState = _interopRequireDefault(require("../../services/AppState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(host) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, host, props)); // AppState.watch('clicks',this.updateMyself);
  }

  _createClass(App, [{
    key: "bindBeforeRender",
    value: function bindBeforeRender() {
      this.state = {};
    }
  }, {
    key: "render",
    value: function render() {
      // document.querySelector('.list').addEventListener('click',function (e) {
      //     console.log(e.target);
      // });
      return [{
        tag: _CharacterList.CharacterList
      }];
    }
  }]);

  return App;
}(_Component2.default);

exports.default = App;
},{"../../framework/Component":"js/framework/Component.js","../CharacterList":"js/components/CharacterList/index.js","../../services/AppState":"js/services/AppState.js"}],"js/components/App/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "App", {
  enumerable: true,
  get: function () {
    return _App.default;
  }
});

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./App":"js/components/App/App.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

require("../../node_modules/normalize.css/normalize.css");

require("./../sass/main.scss");

require("./../sass/_media.scss");

var _routes = require("./routes/routes");

var _Router = _interopRequireDefault(require("./framework/Router"));

var _App = require("./components/App/");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _Router.default(document.getElementById('app'), _routes.routes, _App.App);
router.init();
},{"../../node_modules/normalize.css/normalize.css":"../node_modules/normalize.css/normalize.css","./../sass/main.scss":"sass/main.scss","./../sass/_media.scss":"sass/_media.scss","./routes/routes":"js/routes/routes.js","./framework/Router":"js/framework/Router.js","./components/App/":"js/components/App/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35395" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.map
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 86);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(82);

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(243);

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.setConfig = setConfig;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _settings = __webpack_require__(4);

var _coreDecorators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function setConfig(name, value, settings) {
  return (0, _settings.setChromeLocalStore)({ settings: _extends({}, settings, _defineProperty({}, name, value)) });
}

var ConfigItem = (0, _coreDecorators.autobind)(_class = (_temp = _class2 = function (_Component) {
  _inherits(ConfigItem, _Component);

  function ConfigItem() {
    _classCallCheck(this, ConfigItem);

    return _possibleConstructorReturn(this, (ConfigItem.__proto__ || Object.getPrototypeOf(ConfigItem)).apply(this, arguments));
  }

  _createClass(ConfigItem, [{
    key: 'getValue',
    value: function getValue() {
      return this.props.parent.settings[this.props.configKey];
    }
  }, {
    key: 'setValue',
    value: function setValue(val) {
      setConfig(this.props.configKey, val, this.props.parent.settings);
      this.props.parent.updateConfig();
    }
  }, {
    key: 'renderConfig',
    value: function renderConfig() {
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'item-wrapper' },
        this.renderConfig()
      );
    }
  }]);

  return ConfigItem;
}(_react.Component), _class2.propTypes = {
  configKey: _react.PropTypes.string,
  parent: _react.PropTypes.object,
  helpText: _react.PropTypes.string,
  helpUrl: _react.PropTypes.string
}, _temp)) || _class;

exports.default = ConfigItem;

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /* eslint-disable react/no-multi-comp,react/prefer-stateless-function */


exports.getConfig = getConfig;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _settings = __webpack_require__(4);

var _coreDecorators = __webpack_require__(2);

var _NumberConfigItem = __webpack_require__(22);

var _NumberConfigItem2 = _interopRequireDefault(_NumberConfigItem);

var _OnOffConfigItem = __webpack_require__(23);

var _OnOffConfigItem2 = _interopRequireDefault(_OnOffConfigItem);

var _TextConfigItem = __webpack_require__(24);

var _TextConfigItem2 = _interopRequireDefault(_TextConfigItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultSettings = _settings.defaultStoreStructure.settings;

function getConfig() {
  return (0, _settings.getChromeLocalStore)(['settings']).then(function (result) {
    return Object.assign({}, defaultSettings, result.settings);
  });
}

var OptionPage = (0, _coreDecorators.autobind)(_class = function (_Component) {
  _inherits(OptionPage, _Component);

  function OptionPage(props) {
    _classCallCheck(this, OptionPage);

    var _this = _possibleConstructorReturn(this, (OptionPage.__proto__ || Object.getPrototypeOf(OptionPage)).call(this, props));

    _this.state = {
      settings: {}
    };
    _this.updateConfig();
    return _this;
  }

  _createClass(OptionPage, [{
    key: 'updateConfig',
    value: function updateConfig() {
      var _this2 = this;

      getConfig().then(function (settings) {
        return _this2.setState({ settings: settings });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var settings = this.state.settings;

      var updateConfig = this.updateConfig;
      var parent = { settings: settings, updateConfig: updateConfig };
      console.log(settings);
      /* eslint-disable max-len */
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Chung (General)'
        ),
        _react2.default.createElement(
          _OnOffConfigItem2.default,
          { configKey: 'wideScreen', parent: parent },
          'D\xE0n trang ra 2 b\xEAn'
        ),
        _react2.default.createElement(
          _OnOffConfigItem2.default,
          { configKey: 'wideScreenSpecial', parent: parent },
          'D\xE0n trang ra 2 b\xEAn (Special - ch\u1ECDn n\u1EBFu tr\xEAn c\xF3 l\u1ED7i)'
        ),
        _react2.default.createElement(
          _OnOffConfigItem2.default,
          { configKey: 'adsRemove', parent: parent },
          'Xo\xE1 qu\u1EA3ng c\xE1o'
        ),
        _react2.default.createElement(
          _OnOffConfigItem2.default,
          { configKey: 'notifyQuote', parent: parent },
          'Th\xF4ng b\xE1o tr\xEDch d\u1EABn'
        ),
        _react2.default.createElement(
          _NumberConfigItem2.default,
          { configKey: 'delay', parent: parent },
          'C\u01B0\u1EDDng \u0111\u1ED9 qu\xE9t tr\xEDch d\u1EABn (ph\xFAt)'
        ),
        _react2.default.createElement(
          _NumberConfigItem2.default,
          { configKey: 'delayFollowThread', parent: parent, max: 60 * 24, min: 1 },
          'C\u01B0\u1EDDng \u0111\u1ED9 qu\xE9t th\u1EDBt theo d\xF5i (ph\xFAt)'
        ),
        _react2.default.createElement(
          _OnOffConfigItem2.default,
          { configKey: 'autoHideSidebar', parent: parent },
          'T\u1EF1 \u0111\u1ED9ng \u1EA9n thanh c\xF4ng c\u1EE5'
        ),
        _react2.default.createElement(
          _OnOffConfigItem2.default,
          { configKey: 'LinhXinhBtn', parent: parent },
          'Hi\u1EC7n LinhXinh \u1EDF thanh c\xF4ng c\u1EE5'
        ),
        _react2.default.createElement(
          _TextConfigItem2.default,
          { configKey: 'userStyle', parent: parent },
          'userStyle Url \xA0',
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/voz-living/chrome-extension-react/wiki/Feature:-Tu%E1%BB%B3-ch%E1%BB%8Dn-style-v%E1%BB%9Bi-userStyle' },
            '(?)'
          ),
          '\xA0'
        ),
        _react2.default.createElement(
          'h3',
          null,
          'Trang danh s\xE1ch th\u1EDBt (Thread List)'
        ),
        _react2.default.createElement(
          _OnOffConfigItem2.default,
          { configKey: 'threadPreview', parent: parent },
          'Xem tr\u01B0\u1EDBc th\u1EDBt'
        ),
        _react2.default.createElement(
          _OnOffConfigItem2.default,
          { configKey: 'reloadButton', parent: parent },
          'L\xE0m m\u1EDBi nhanh danh s\xE1ch th\u1EDBt'
        ),
        _react2.default.createElement(
          _OnOffConfigItem2.default,
          { configKey: 'autoGotoNewthread', parent: parent },
          'T\u1EF1 \u0111i t\u1EDBi b\xE0i m\u1EDBi nh\u1EA5t'
        ),
        _react2.default.createElement(
          'h3',
          null,
          'Trong th\u1EDBt/B\xE0i vi\u1EBFt (Thread/Posts)'
        ),
        _react2.default.createElement(
          _OnOffConfigItem2.default,
          { configKey: 'newThreadUI', parent: parent },
          'Giao di\u1EC7n m\u1EDBi (T\u1EA3i trang nhanh) (t\u1EA1m kh\xF4ng s\u1EED d\u1EE5ng \u0111\u01B0\u1EE3c)'
        ),
        _react2.default.createElement(
          _OnOffConfigItem2.default,
          { configKey: 'smartSelection', parent: parent },
          'Hi\u1EC7n c\xF4ng c\u1EE5 khi qu\xE9t ch\u1EEF'
        ),
        _react2.default.createElement(
          _OnOffConfigItem2.default,
          { configKey: 'emotionHelper', parent: parent },
          'Th\xEAm emoticon'
        ),
        _react2.default.createElement(
          _OnOffConfigItem2.default,
          { configKey: 'linkHelper', parent: parent },
          'T\u1EF1 \u0111\u1ED9ng x\u1EED l\xFD link'
        ),
        _react2.default.createElement(
          _OnOffConfigItem2.default,
          { configKey: 'minimizeQuote', parent: parent },
          'T\u1EF1 \u0111\u1ED9ng thu nh\u1ECF tr\xEDch d\u1EABn'
        ),
        _react2.default.createElement(
          _OnOffConfigItem2.default,
          { configKey: 'quickPostQuotation', parent: parent },
          'Tr\xEDch d\u1EABn nhanh'
        ),
        _react2.default.createElement(
          _OnOffConfigItem2.default,
          { configKey: 'capturePostEnable', parent: parent },
          'Ch\u1EE5p b\xE0i vi\u1EBFt / Capture Post \xA0',
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/voz-living/chrome-extension-react/wiki/Feature:-Ch%E1%BB%A5p-h%C3%ACnh-b%C3%A0i-vi%E1%BA%BFt' },
            '(?)'
          )
        ),
        _react2.default.createElement(
          _OnOffConfigItem2.default,
          { configKey: 'savePostEnable', parent: parent },
          'L\u01B0u b\xE0i vi\u1EBFt (post) \xA0',
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/voz-living/chrome-extension-react/wiki/Feature:-L%C6%B0u-b%C3%A0i-vi%E1%BA%BFt' },
            '(?)'
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'div',
          { className: 'warning' },
          'Tu\u1EF3 ch\u1ECDn m\u1EDBi s\u1EBD \u0111\u01B0\u1EE3c \xE1p d\u1EE5ng khi b\u1EA1n t\u1EA3i trang m\u1EDBi ho\u1EB7c t\u1EA3i l\u1EA1i trang'
        )
      );
      /* eslint-enable max-len */
    }
  }]);

  return OptionPage;
}(_react.Component)) || _class;

exports.default = OptionPage;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(238);

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _coreDecorators = __webpack_require__(2);

var _ConfigItem2 = __webpack_require__(11);

var _ConfigItem3 = _interopRequireDefault(_ConfigItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberConfigItem = (0, _coreDecorators.autobind)(_class = function (_ConfigItem) {
  _inherits(NumberConfigItem, _ConfigItem);

  function NumberConfigItem() {
    _classCallCheck(this, NumberConfigItem);

    return _possibleConstructorReturn(this, (NumberConfigItem.__proto__ || Object.getPrototypeOf(NumberConfigItem)).apply(this, arguments));
  }

  _createClass(NumberConfigItem, [{
    key: 'changeHandler',
    value: function changeHandler(e) {
      this.setValue(e.target.value);
    }
  }, {
    key: 'renderConfig',
    value: function renderConfig() {
      var _props = this.props,
          _props$min = _props.min,
          min = _props$min === undefined ? 0 : _props$min,
          _props$step = _props.step,
          step = _props$step === undefined ? 1 : _props$step,
          _props$max = _props.max,
          max = _props$max === undefined ? 1000 : _props$max;

      return _react2.default.createElement(
        'label',
        { className: 'on-off-item' },
        this.props.children,
        _react2.default.createElement('input', {
          type: 'number',
          value: this.getValue(),
          onChange: this.changeHandler,
          min: min,
          max: max,
          step: step
        })
      );
    }
  }]);

  return NumberConfigItem;
}(_ConfigItem3.default)) || _class;

exports.default = NumberConfigItem;

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _coreDecorators = __webpack_require__(2);

var _ConfigItem2 = __webpack_require__(11);

var _ConfigItem3 = _interopRequireDefault(_ConfigItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OnOffConfigItem = (0, _coreDecorators.autobind)(_class = function (_ConfigItem) {
  _inherits(OnOffConfigItem, _ConfigItem);

  function OnOffConfigItem() {
    _classCallCheck(this, OnOffConfigItem);

    return _possibleConstructorReturn(this, (OnOffConfigItem.__proto__ || Object.getPrototypeOf(OnOffConfigItem)).apply(this, arguments));
  }

  _createClass(OnOffConfigItem, [{
    key: 'toggleCheckBoxHandler',
    value: function toggleCheckBoxHandler() {
      this.setValue(!this.getValue());
    }
  }, {
    key: 'renderConfig',
    value: function renderConfig() {
      return _react2.default.createElement(
        'label',
        { className: 'on-off-item' },
        _react2.default.createElement('input', { type: 'checkbox', checked: this.getValue(), onChange: this.toggleCheckBoxHandler }),
        this.props.children
      );
    }
  }]);

  return OnOffConfigItem;
}(_ConfigItem3.default)) || _class;

exports.default = OnOffConfigItem;

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _coreDecorators = __webpack_require__(2);

var _ConfigItem2 = __webpack_require__(11);

var _ConfigItem3 = _interopRequireDefault(_ConfigItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextConfigItem = (0, _coreDecorators.autobind)(_class = function (_ConfigItem) {
  _inherits(TextConfigItem, _ConfigItem);

  function TextConfigItem() {
    _classCallCheck(this, TextConfigItem);

    return _possibleConstructorReturn(this, (TextConfigItem.__proto__ || Object.getPrototypeOf(TextConfigItem)).apply(this, arguments));
  }

  _createClass(TextConfigItem, [{
    key: 'changeHandler',
    value: function changeHandler(e) {
      this.setValue(e.target.value);
    }
  }, {
    key: 'renderConfig',
    value: function renderConfig() {
      var _props$size = this.props.size,
          size = _props$size === undefined ? 30 : _props$size;

      return _react2.default.createElement(
        'label',
        { className: 'text-item' },
        this.props.children,
        _react2.default.createElement('input', {
          type: 'text',
          value: this.getValue(),
          onChange: this.changeHandler,
          size: size
        })
      );
    }
  }]);

  return TextConfigItem;
}(_ConfigItem3.default)) || _class;

exports.default = TextConfigItem;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(241);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setChromeSyncStore = exports.getChromeSyncStore = exports.setChromeLocalStore = exports.getChromeLocalStore = exports.defaultStoreStructure = undefined;

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStoreStructure = exports.defaultStoreStructure = {
  settings: {
    wideScreen: true,
    wideScreenSpecial: false,
    threadPreview: true,
    adsRemove: true,
    linkHelper: true,
    notifyQuote: true,
    emotionHelper: true,
    minimizeQuote: true,
    quickPostQuotation: true,
    reloadButton: true,
    autoGotoNewthread: false,
    savePostEnable: true,
    autoHideSidebar: false,
    peerChatEnable: false,
    capturePostEnable: true,
    LinhXinhBtn: true,
    userStyle: '',
    delay: 1, // minute
    delayFollowThread: 5, // minute
    newThreadUI: false,
    stickerPanelExpand: false,
    smartSelection: false
  },
  authInfo: {},
  quotes: [],
  quickLinks: [{
    id: 'voz_living_f17',
    label: 'F17',
    link: 'https://vozforums.com/forumdisplay.php?f=17'
  }, {
    id: 'voz_living_f33',
    label: 'F33',
    link: 'https://vozforums.com/forumdisplay.php?f=33'
  }],
  followThreads: {},
  threadTracker: {},
  currentPost: {}
};

var defaultSyncStoreStructure = {
  savedPosts: {}
};

exports.default = defaultStoreStructure;


var defaultSettingKeys = _lodash2.default.keys(defaultStoreStructure);

/* eslint-disable no-undef */
var getChromeLocalStore = exports.getChromeLocalStore = function getChromeLocalStore() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSettingKeys;
  var store = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'local';
  var defaultStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultStoreStructure;
  return new Promise(function (resolve) {
    chrome.storage[store].get(keys, function (items) {
      if (_lodash2.default.isEmpty(items)) {
        var result = {};
        var outKeys = keys;
        if (_lodash2.default.isString(outKeys)) {
          outKeys = [outKeys];
        }
        outKeys.forEach(function (key) {
          result[key] = defaultStore[key];
        });
        resolve(result);
      } else {
        var _result = items;
        keys.forEach(function (key) {
          if (_lodash2.default.isUndefined(_result[key])) {
            _result[key] = defaultStore[key];
          }
        });
        resolve(_result);
      }
    });
  });
};

var setChromeLocalStore = exports.setChromeLocalStore = function setChromeLocalStore(items) {
  var store = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'local';
  return new Promise(function (resolve) {
    chrome.storage[store].set(items, function () {
      return resolve(true);
    });
  });
};

var getChromeSyncStore = exports.getChromeSyncStore = function getChromeSyncStore(keys) {
  return getChromeLocalStore(keys, 'sync', defaultSyncStoreStructure);
};
var setChromeSyncStore = exports.setChromeSyncStore = function setChromeSyncStore(items) {
  return setChromeLocalStore(items, 'sync');
};
/* eslint-enable no-undef */

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = content_lib;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = common_lib;

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _OptionPage = __webpack_require__(18);

var _OptionPage2 = _interopRequireDefault(_OptionPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_OptionPage2.default, null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=options.js.map
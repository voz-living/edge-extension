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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(82);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(240);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(238);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(241);

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable import/no-unresolved */
// import 'whatwg-fetch';
/* eslint-enable import/no-unresolved */

function patchProtocal(url) {
  if (/^\/\//.test(url)) {
    return url.replace(/^/, window.location.protocol);
  }
  return url;
}

function requestFactory() {
  var requestOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (url) {
    var additionOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new Promise(function (resolve, reject) {
      var options = _extends({}, requestOption, additionOption);
      fetch(patchProtocal(url), options).then(function (response) {
        if (options.jsonOutput === true) {
          response.json().then(resolve).catch(reject);
        } else {
          response.text().then(resolve).catch(reject);
        }
      }).catch(function (err) {
        reject(err);
      });
    });
  };
}

var GET = requestFactory({
  method: 'get',
  credentials: 'include'
});

var POST = requestFactory({
  method: 'post',
  credentials: 'include'
});

var POST_FORM = function POST_FORM(url, formDataObj) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var formData = new FormData();
  Object.keys(formDataObj).forEach(function (key) {
    return formData.append(key, formDataObj[key]);
  });
  /* eslint-disable new-cap */
  return POST(url, _extends({}, options, { body: formData }));
};

var PUT = requestFactory({
  method: 'put',
  credentials: 'same-origin',
  headers: new Headers({
    'Content-Type': 'application/json'
  })
});

var PROXY_GET = function PROXY_GET(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    chrome.runtime.sendMessage({ service: 'proxy', url: url, options: options }, function (response) {
      if (response.resolve) return resolve(response.resolve);
      reject(response.reject);
    });
  });
};

var headerNoCache = new Headers();
headerNoCache.append('pragma', 'no-cache');
headerNoCache.append('cache-control', 'no-cache');

exports.PROXY_GET = PROXY_GET;
exports.GET = GET;
exports.POST = POST;
exports.PUT = PUT;
exports.headerNoCache = headerNoCache;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = content_lib;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(244);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = common_lib;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increasePageStatusId = exports.unsavePost = exports.savePost = exports.getThreadList = exports.unsubscribeThread = exports.subscribeThread = exports.updatePostTracker = exports.removeQuickLink = exports.saveQuickLink = exports.updateQuickLink = exports.addQuickLink = exports.markAllQuoteSeen = exports.updateQuotes = exports.init = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _actionType = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = exports.init = function init(initState) {
  return _extends({}, initState, {
    type: _actionType.VOZ_LIVING_INIT
  });
};

var updateQuotes = exports.updateQuotes = function updateQuotes(quotes) {
  return {
    type: _actionType.VOZ_LIVING_UDATE_QUOTE_LIST,
    quotes: quotes
  };
};

var markAllQuoteSeen = exports.markAllQuoteSeen = function markAllQuoteSeen() {
  return {
    type: _actionType.VOZ_LIVING_SEEN_ALL_QUOTE
  };
};

var addQuickLink = exports.addQuickLink = function addQuickLink() {
  return {
    type: _actionType.VOZ_LIVING_ADD_QUICK_LINK
  };
};

var updateQuickLink = exports.updateQuickLink = function updateQuickLink(id, key, value) {
  return {
    type: _actionType.VOZ_LIVING_UPDATE_QUICK_LINK,
    id: id, key: key, value: value
  };
};

var saveQuickLink = exports.saveQuickLink = function saveQuickLink() {
  return {
    type: _actionType.VOZ_LIVING_SAVE_QUICK_LINK
  };
};

var removeQuickLink = exports.removeQuickLink = function removeQuickLink(id) {
  return {
    type: _actionType.VOZ_LIVING_REMOVE_QUICK_LINK,
    id: id
  };
};

var updatePostTracker = exports.updatePostTracker = function updatePostTracker(post) {
  return {
    type: _actionType.VOZ_LIVING_UPDATE_POST_TRACKER,
    post: post
  };
};

var subscribeThread = exports.subscribeThread = function subscribeThread(threadId, post) {
  return {
    type: _actionType.VOZ_LIVING_THREAD_SUBSCRIBE,
    threadId: threadId,
    post: post
  };
};

var unsubscribeThread = exports.unsubscribeThread = function unsubscribeThread(threadId) {
  return {
    type: _actionType.VOZ_LIVING_THREAD_UNSUBSCRIBE,
    threadId: threadId
  };
};

var getThreadList = exports.getThreadList = function getThreadList() {
  var titleList = (0, _jquery2.default)('#threadslist tbody[id^="threadbits_forum"] tr td[id^="td_threadtitle_"]');
  var threadList = _lodash2.default.map(titleList, function (titleTD) {
    var $title = (0, _jquery2.default)(titleTD);
    var id = $title.attr('id').match(/\d+/)[0];
    var pages = $title.find('>div span > a');
    var lastPageHref = pages.eq(pages.length - 1).attr('href');
    var lastPage = 1;

    if (lastPageHref) {
      var match = lastPageHref.match(/&page=(\d+)/);
      if (match) lastPage = match[1];
    }

    return { id: id, pageNum: parseInt(lastPage, 10), element: $title };
  });

  return {
    type: _actionType.VOZ_LIVING_GET_THREAD_LIST,
    threadList: threadList
  };
};

var savePost = exports.savePost = function savePost(postId) {
  return {
    type: _actionType.VOZ_LIVING_SAVE_POST,
    postId: postId
  };
};

var unsavePost = exports.unsavePost = function unsavePost(postId) {
  return {
    type: _actionType.VOZ_LIVING_UNSAVE_POST,
    postId: postId
  };
};

var increasePageStatusId = exports.increasePageStatusId = function increasePageStatusId() {
  return {
    type: _actionType.VOZ_LIVING_UPDATE_PAGE_STATUS_ID
  };
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(243);

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toClassName = undefined;
exports.getCurrentView = getCurrentView;
exports.getAuthenticationInformation = getAuthenticationInformation;

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCurrentView() {
  var currentView = null;
  if (/forumdisplay/.test(window.location.pathname)) {
    currentView = 'thread-list';
  } else if (/showthread/.test(window.location.pathname)) {
    currentView = 'thread';
  } else if (/showpost/.test(window.location.pathname)) {
    currentView = 'post';
  } else if (/newreply/.test(window.location.pathname)) {
    currentView = 'new-reply';
  } else if (/editpost/.test(window.location.pathname)) {
    currentView = 'edit-reply';
  } else if (/showpm/.test(window.location.href)) {
    currentView = 'pm';
  } else if (/insertpm/.test(window.location.href)) {
    currentView = 'insert-pm';
  }
  return currentView;
}

function getAuthenticationInformation() {
  var queryString = "*:contains('You last') > *:contains('Welcome') > a[href*='member.php?u']";
  var $user = (0, _jquery2.default)(queryString).eq(0);
  var username = (0, _jquery2.default)(queryString).eq(0).text();
  var userId = -1;
  try {
    userId = $user.attr('href').match(/u=(\d+)/)[1];
  } catch (e) {
    // ignore
  }
  if (username === '') {
    if ((0, _jquery2.default)('#nologin-message').length === 0) {
      (0, _jquery2.default)('.tborder:has(input[name="vb_login_username"])').before('<div id=\'nologin-message\'>B\u1EA1n c\u1EA7n ph\u1EA3i \u0111\u0103ng nh\u1EADp \u0111\u1EC3 s\u1EED d\u1EE5ng \u0111\u1EA7y \u0111\u1EE7 c\xE1c ch\u1EE9c n\u0103ng c\u1EE7a plugin</div>');
    }
    return {
      isLogin: false
    };
  }
  new Function((0, _jquery2.default)("script:not([src]):contains('SECURITYTOKEN')").text().replace('SECURITYTOKEN', 'SECURITYTOKEN=window.SECURITYTOKEN')).call(window);
  var token = window.SECURITYTOKEN;
  return {
    isLogin: true,
    token: token,
    username: username,
    userId: userId
  };
}

var toClassName = exports.toClassName = function toClassName(obj) {
  return Object.keys(obj).reduce(function (list, name) {
    return obj[name] ? list.concat([name]) : list;
  }, []).join(' ');
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadImageToPikVn = uploadImageToPikVn;
exports.uploadImage = uploadImage;

var _http = __webpack_require__(5);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function uploadImageToPikVn(imageData) {
  var url = 'http://2.pik.vn/';
  // const formData = new FormData();
  // formData.append('image', imageData);

  /* eslint-disable new-cap */
  return new Promise(function (resolve, reject) {
    _jquery2.default.ajax(url, {
      method: 'POST',
      data: { image: imageData },
      xhrFields: {
        withCredentials: true
      },
      dataType: 'json'
    }).done(function (data, status) {
      var image = data.saved;
      if (image) {
        resolve({ url: url + image });
      } else {
        resolve({});
      }
    }).fail(function (xhr, status, error) {
      return reject(error);
    });
  });
  // return POST(url, {
  //   body: formData,
  //   mode: 'no-cors',
  //   jsonOutput: true,
  // }).then(res => {
  //   console.log(res);
  //   return res.saved;
  // }).catch(e => console.log(e));
}

function uploadImage(imageData) {
  return new Promise(function (resolve) {
    chrome.runtime.sendMessage({ service: 'image-upload', imageData: imageData }, function (response) {
      resolve(response);
    });
  });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _coreDecorators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { insertTextIntoEditor } from '../common/editor';

var Command = (0, _coreDecorators.autobind)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Command, _Component);

  function Command(props) {
    _classCallCheck(this, Command);

    return _possibleConstructorReturn(this, (Command.__proto__ || Object.getPrototypeOf(Command)).call(this, props));
  }

  _createClass(Command, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return false;
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      var _props = this.props,
          command = _props.command,
          value = _props.value,
          showDefaultUI = _props.showDefaultUI;

      document.execCommand(command, showDefaultUI, value);
      e.preventDefault();
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          faClass = _props2.faClass,
          extraProps = _props2.extraProps;

      return _react2.default.createElement(
        'a',
        _extends({ href: '#', 'data-command': 'bold', onClick: this.onClick }, extraProps),
        _react2.default.createElement('i', { className: 'fa fa-' + faClass })
      );
    }
  }]);

  return Command;
}(_react.Component), _class2.propTypes = {
  command: _react.PropTypes.string.isRequired,
  value: _react.PropTypes.any,
  showDefaultUI: _react.PropTypes.bool,
  faClass: _react.PropTypes.string,
  extraProps: _react.PropTypes.object
}, _class2.defaultProps = {
  showDefaultUI: false,
  value: null,
  extraProps: {}
}, _temp)) || _class;

exports.default = Command;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = postHelper;
function postHelper($html) {
  return {
    getThreadTitle: function getThreadTitle() {
      try {
        return document.querySelectorAll('td.navbar')[0].textContent.trim();
      } catch (e) {
        console.warn(e);
        return '';
      }
    },
    getThreadId: function getThreadId() {
      var threadLink = $html.find("#threadtools_menu a[href*='t=']");

      if (threadLink && threadLink.eq(0) && threadLink.eq(0).attr('href')) {
        var threadId = threadLink.eq(0).attr('href').match(/t=(\d+)/);
        if (threadId !== null && threadId.length > 0) {
          return threadId[1];
        }
      }
      return -1;
    },
    getPage: function getPage() {
      var page = 0;
      if ($html.find('#meta_page_current').length > 0) {
        return $html.find('#meta_page_current').attr('value');
      }
      var $pageNav = $html.find('.pagenav');
      if ($pageNav.length === 0) {
        page = 1;
      } else {
        page = $pageNav.eq(0).find('tbody td.alt2 strong').text();
      }
      return page;
    },
    getLatestPost: function getLatestPost() {
      var lastpost = $html.find("table[id^='post']").last();
      var id = lastpost.attr('id').match(/(\d+)/)[1];

      var postNum = $html.find("table[id^='post']").length;
      return {
        postNum: postNum,
        id: id
      };
    },
    getPostId: function getPostId(num) {
      var lastpost = $html.find("table[id^='post']").eq(num);
      var id = lastpost.attr('id').match(/(\d+)/)[1];
      return id;
    }
  };
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(237);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(242);

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertTextIntoEditor = insertTextIntoEditor;
function insertTextIntoEditor(text, $editor) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var value = $editor.val();
  var _position$start = position.start,
      start = _position$start === undefined ? $editor.prop('selectionStart') : _position$start,
      _position$end = position.end,
      end = _position$end === undefined ? $editor.prop('selectionEnd') : _position$end;


  var textBefore = value.substring(0, start);
  var textAfter = value.substring(end, value.length);

  $editor.val(textBefore + text + textAfter);
  $editor[0].setSelectionRange(start + text.length, start + text.length);
  $editor.focus();
  return { start: start, end: end + text.length };
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepare = prepare;
exports.subscribeThread = subscribeThread;
exports.unsubscribeThread = unsubscribeThread;

var _http = __webpack_require__(5);

var _settings = __webpack_require__(4);

function prepare() {
  return (0, _settings.getChromeLocalStore)(['authInfo']).then(function (_ref) {
    var authInfo = _ref.authInfo;
    var isLogin = authInfo.isLogin,
        token = authInfo.token;

    if (!isLogin) {
      alert('You need to login to perform this action');
    }
    return token;
  }).catch(function (e) {
    return console.error(e);
  });
}

function subscribeThread(threadId) {
  return prepare().then(function (token) {
    var url = '//vozforums.com/subscription.php?do=doaddsubscription&threadid=' + threadId;
    var formData = new FormData();

    formData.append('do', 'doaddsubscription');
    formData.append('securitytoken', token);
    formData.append('s', '');
    formData.append('threadid', threadId);
    formData.append('url', 'http://vozforums.com/showthread.php?t=' + threadId);
    formData.append('emailupdate', 0);
    formData.append('folderid', 0);

    /* eslint-disable new-cap */
    return (0, _http.POST)(url, {
      body: formData
    });
  });
}

function unsubscribeThread(threadId) {
  return prepare().then(function () {
    var url = '//vozforums.com/subscription.php?do=removesubscription&t=' + threadId;
    return (0, _http.GET)(url);
  });
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyText = copyText;
function copyText(text) {
  var input = document.createElement('input');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
}

/***/ }),
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _coreDecorators = __webpack_require__(2);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _settings = __webpack_require__(4);

var _ConfigItem = __webpack_require__(11);

var _OptionPage = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var candy = '11f712f3240e20c';
var STICKER_CONFIG_KEY = 'stickerConfig';
var stickerSizeRef = {};
var getImageSize = function getImageSize(src) {
  return stickerSizeRef[src] ? Promise.resolve(stickerSizeRef[src]) : new Promise(function (resolve) {
    var newImg = new Image();
    newImg.onload = function () {
      var height = newImg.height;
      var width = newImg.width;
      stickerSizeRef[src] = { width: width, height: height };
      resolve(stickerSizeRef[src]);
    };
    newImg.src = src;
  });
};

function loadStickers(id) {
  return new Promise(function (resolve) {
    _jquery2.default.ajax({
      async: true,
      crossDomain: true,
      url: 'https://api.imgur.com/3/album/' + id + '/images',
      method: 'GET',
      headers: {
        Authorization: 'Client-ID ' + candy
      }
    }).done(function (res) {
      var images = res.data;
      resolve(images.map(function (img) {
        return {
          url: img.link.replace(/http/, 'https')
        };
      }));
    }).fail(function () {
      resolve([]);
    });
  });
}

function getStickerSets() {
  return (0, _settings.getChromeSyncStore)([STICKER_CONFIG_KEY]).then(function (store) {
    return store[STICKER_CONFIG_KEY] ? store[STICKER_CONFIG_KEY] : [];
  });
}

var StickerPicker = (0, _coreDecorators.autobind)(_class = (_temp = _class2 = function (_Component) {
  _inherits(StickerPicker, _Component);

  function StickerPicker(props) {
    _classCallCheck(this, StickerPicker);

    var _this = _possibleConstructorReturn(this, (StickerPicker.__proto__ || Object.getPrototypeOf(StickerPicker)).call(this, props));

    _this.state = {
      stickers: [],
      isAdding: false,
      selectedSticker: window.localStorage.getItem('vozLivingStickerSelected'),
      information: null,
      stickerPanelExpand: props.stickerPanelExpand
    };
    _this.getStickerConfig().then(_this.updateStateStickers);
    return _this;
  }

  _createClass(StickerPicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      __webpack_require__(92);
      window.__addStickerSet = this.addStickerSet.bind(this);
    }
  }, {
    key: 'getStickerConfig',
    value: function getStickerConfig() {
      return getStickerSets().then(function (items) {
        return Promise.all(items.map(function (_ref) {
          var key = _ref.key,
              title = _ref.title;

          var k = 'sticker_' + key;
          return (0, _settings.getChromeLocalStore)([k]).then(function (lstore) {
            if (lstore[k]) {
              return lstore[k];
            }
            return loadStickers(key);
          }).then(function (list) {
            (0, _settings.setChromeLocalStore)(_defineProperty({}, k, list));
            return {
              key: key,
              title: title,
              list: list
            };
          });
        }));
      });
    }
  }, {
    key: 'updateStateStickers',
    value: function updateStateStickers(stickers) {
      var selectedSticker = this.state.selectedSticker;

      if (!stickers.find(function (s) {
        return s.key === selectedSticker;
      }) && stickers.length > 0) selectedSticker = stickers[0].key;
      // stickers = stickers.map(st => Object.assign({}, st, { url: st.url.replace(/http/, 'https') }));
      this.setState({ stickers: stickers, selectedSticker: selectedSticker });
    }
  }, {
    key: 'choseSticker',
    value: function choseSticker(sticker) {
      this.props.onStickerClick(sticker);
    }
  }, {
    key: 'selectStickerSet',
    value: function selectStickerSet(key) {
      this.setState({ selectedSticker: key });
      window.localStorage.setItem('vozLivingStickerSelected', key);
    }
  }, {
    key: 'stickerOver',
    value: function stickerOver(sticker, e) {
      var information = _react2.default.createElement(
        'div',
        { className: 'sticker-preview' },
        _react2.default.createElement('img', { src: sticker.url }),
        _react2.default.createElement(
          'div',
          { className: 'sticker-preview-label' },
          'K\xEDch th\u01B0\u1EDBc th\u1EADt'
        )
      );
      this.setState({ information: information });
      // getImageSize(sticker.url)
      //   .then(({ width, height }) => {
      //     const information = <span>Size: {width} x {height} | {width} px: <div className="sticker-ruler" style={{ width }}></div></span>;
      //     this.setState({ information });
      //   });
    }
  }, {
    key: 'containerOut',
    value: function containerOut() {
      this.setState({ information: null });
    }
  }, {
    key: 'toggleExpand',
    value: function toggleExpand(expand) {
      var stickerPanelExpand = !expand;
      (0, _OptionPage.getConfig)().then(function (config) {
        return (0, _ConfigItem.setConfig)('stickerPanelExpand', stickerPanelExpand, config);
      });
      this.setState({ stickerPanelExpand: stickerPanelExpand });
    }
  }, {
    key: 'removeStickerSet',
    value: function removeStickerSet(key) {
      try {
        var stickers = this.state.stickers.slice();
        var idx = stickers.findIndex(function (s) {
          return s.key === key;
        });
        stickers.splice(idx, 1);
        this.updateStateStickers(stickers);
        (0, _settings.setChromeSyncStore)(_defineProperty({}, STICKER_CONFIG_KEY, stickers.map(function (sticker) {
          return {
            key: sticker.key,
            title: sticker.title
          };
        })));
        chrome.storage.local.remove('sticker_' + key);
      } catch (e) {
        alert('Không thể xoá, xin thử lại sau');
        console.log(e.stack);
      }
    }
  }, {
    key: 'addStickerSet',
    value: function addStickerSet() {
      var _this2 = this;

      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var suggestName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (url === null) {
        url = prompt('imgur album url:', 'http://imgur.com/a/');
      }
      if (url === null) return;
      if (/imgur\.com\/a\/.+/.test(url) === false) {
        return alert('Invalid album url');
      }
      var match = url.match(/a\/([^ ]*)/);
      if (match === null) return;
      var aId = match[1];

      var name = void 0;
      var validName = true;
      do {
        validName = true;
        name = prompt('tên của sticker set (<= 20 kí tự)', suggestName !== null ? suggestName : aId);
        if (name === null) return;
        if (name.trim() === '') {
          alert('Tên bị trống');
          validName = false;
        }
        if (name.length > 20) {
          alert('Tên quá dài');
          validName = false;
        }
      } while (!validName);

      this.setState({ isAdding: true });
      Promise.all([getStickerSets().then(function (set) {
        set.push({ key: aId, title: name });
        return (0, _settings.setChromeSyncStore)(_defineProperty({}, STICKER_CONFIG_KEY, set));
      }), loadStickers(aId)]).then(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            list = _ref3[1];

        var k = 'sticker_' + aId;
        return (0, _settings.setChromeLocalStore)(_defineProperty({}, k, list));
      }).then(function () {
        alert('\u0110\xE3 th\xEAm \'' + name + '\'');
        _this2.getStickerConfig().then(function (stickers) {
          _this2.updateStateStickers(stickers);
        });
        _this2.setState({ isAdding: false });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          stickers = _state.stickers,
          selectedSticker = _state.selectedSticker,
          isAdding = _state.isAdding,
          information = _state.information,
          stickerPanelExpand = _state.stickerPanelExpand;

      var selected = stickers.find(function (s) {
        return s.key === selectedSticker;
      });
      if (!selected) selected = stickers[0];
      var infoStyle = {
        opacity: 0,
        visibility: 'hidden'
      };
      if (information) Object.assign(infoStyle, { opacity: 0.8, visibility: 'visible' });
      return _react2.default.createElement(
        'div',
        { className: 'sticker-box-wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'sticker-information', style: infoStyle },
          information
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'sticker-box' + (stickers.length === 0 ? ' empty-sticker' : '') + (stickerPanelExpand ? ' compact' : ' full'),
            onMouseOut: this.containerOut
          },
          stickers.length > 0 ? _react2.default.createElement(
            'div',
            null,
            selected.list.map(function (sticker) {
              return _react2.default.createElement('img', {
                className: 'sticker',
                alt: sticker.url,
                onClick: function onClick() {
                  return _this3.choseSticker(sticker);
                }, src: sticker.url,
                onMouseOver: _this3.stickerOver.bind(_this3, sticker)
                // onMouseOver={this.stickerOver.bind(sticker)}
              });
            })
          ) : _react2.default.createElement(
            'span',
            null,
            '\xA0B\u1EA1n ch\u01B0a c\xF3 b\u1ED9 sticker n\xE0o,\xA0',
            isAdding ? _react2.default.createElement(
              'span',
              null,
              ' ch\u1EDD t\xED ',
              _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin' })
            ) : _react2.default.createElement(
              'a',
              { href: '#', onClick: function onClick(e) {
                  e.preventDefault();
                  _this3.addStickerSet();
                  return false;
                } },
              'T\u1EF1 th\xEAm v\xE0o'
            ),
            '\xA0ho\u1EB7c ',
            _react2.default.createElement(
              'a',
              { href: 'https://vozforums.com/showpost.php?p=123774893&postcount=1555', target: '_blank' },
              'v\xE0o \u0111\xE2y \u0111\u1EC3 xem 1 s\u1ED1 b\u1ED9 stickers '
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'sticker-set-list' },
          stickers.length > 0 && _react2.default.createElement(
            'li',
            {
              onClick: function onClick() {
                return _this3.toggleExpand(stickerPanelExpand);
              },
              'data-tooltip': !stickerPanelExpand ? 'Thu nhỏ' : 'Mở rộng'
            },
            _react2.default.createElement('i', { className: 'fa ' + (stickerPanelExpand ? 'fa-expand' : 'fa-minus') })
          ),
          stickers.length > 0 ? isAdding ? _react2.default.createElement(
            'li',
            { 'data-tooltip': '\u0110ang th\xEAm' },
            _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin' })
          ) : _react2.default.createElement(
            'li',
            { onClick: function onClick() {
                return _this3.addStickerSet();
              }, 'data-tooltip': 'Th\xEAm sticker' },
            '+'
          ) : null,
          stickers.map(function (sticker) {
            return _react2.default.createElement(
              'li',
              {
                className: sticker.key === selectedSticker ? 'sticker-set-selected' : '',
                onClick: function onClick() {
                  return _this3.selectStickerSet(sticker.key);
                }
              },
              sticker.key === selectedSticker ? '▶' : _react2.default.createElement(
                'span',
                null,
                '\xA0'
              ),
              sticker.title,
              '\xA0',
              _react2.default.createElement(
                'button',
                { onClick: function onClick(e) {
                    e.preventDefault();
                    _this3.removeStickerSet(sticker.key);
                    return false;
                  },
                  'data-tooltip': 'Xo\xE1 sticker'
                },
                'x'
              )
            );
          }),
          stickers.length > 0 && _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://vozforums.com/showpost.php?p=123774893&postcount=1555', target: '_blank', 'data-tooltip': 'Sticker List' },
              '\u2139'
            )
          )
        )
      );
    }
  }]);

  return StickerPicker;
}(_react.Component), _class2.propTypes = {
  onStickerClick: _react.PropTypes.func,
  stickerPanelExpand: _react.PropTypes.bool
}, _temp)) || _class;

exports.default = StickerPicker;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var VOZ_LIVING_INIT = exports.VOZ_LIVING_INIT = 'VOZ_LIVING_INIT';
var VOZ_LIVING_GET_THREAD_LIST = exports.VOZ_LIVING_GET_THREAD_LIST = 'VOZ_LIVING_GET_THREAD_LIST';
var VOZ_LIVING_UDATE_QUOTE_LIST = exports.VOZ_LIVING_UDATE_QUOTE_LIST = 'VOZ_LIVING_UDATE_QUOTE_LIST';
var VOZ_LIVING_SEEN_ALL_QUOTE = exports.VOZ_LIVING_SEEN_ALL_QUOTE = 'VOZ_LIVING_SEEN_ALL_QUOTE';
var VOZ_LIVING_ADD_QUICK_LINK = exports.VOZ_LIVING_ADD_QUICK_LINK = 'VOZ_LIVING_ADD_QUICK_LINK';
var VOZ_LIVING_UPDATE_QUICK_LINK = exports.VOZ_LIVING_UPDATE_QUICK_LINK = 'VOZ_LIVING_UPDATE_QUICK_LINK';
var VOZ_LIVING_SAVE_QUICK_LINK = exports.VOZ_LIVING_SAVE_QUICK_LINK = 'VOZ_LIVING_SAVE_QUICK_LINK';
var VOZ_LIVING_REMOVE_QUICK_LINK = exports.VOZ_LIVING_REMOVE_QUICK_LINK = 'VOZ_LIVING_REMOVE_QUICK_LINK';
var VOZ_LIVING_UPDATE_POST_TRACKER = exports.VOZ_LIVING_UPDATE_POST_TRACKER = 'VOZ_LIVING_UPDATE_POST_TRACKER';
var VOZ_LIVING_THREAD_SUBSCRIBE = exports.VOZ_LIVING_THREAD_SUBSCRIBE = 'VOZ_LIVING_THREAD_SUBSCRIBE';
var VOZ_LIVING_THREAD_UNSUBSCRIBE = exports.VOZ_LIVING_THREAD_UNSUBSCRIBE = 'VOZ_LIVING_THREAD_UNSUBSCRIBE';
var VOZ_LIVING_SAVE_POST = exports.VOZ_LIVING_SAVE_POST = 'VOZ_LIVING_SAVE_POST';
var VOZ_LIVING_UNSAVE_POST = exports.VOZ_LIVING_UNSAVE_POST = 'VOZ_LIVING_UNSAVE_POST';

var VOZ_LIVING_UPDATE_PAGE_STATUS_ID = exports.VOZ_LIVING_UPDATE_PAGE_STATUS_ID = 'VOZ_LIVING_UPDATE_PAGE_STATUS_ID';

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var emotions = [{
  text: ':sexy:',
  src: '/images/smilies/Off/sexy_girl.gif'
}, {
  text: ':byebye:',
  src: '/images/smilies/Off/byebye.gif'
}, {
  text: ':look_down:',
  src: '/images/smilies/Off/look_down.gif'
}, {
  text: ':stick:',
  src: '/images/smilies/Off/burn_joss_stick.gif'
}, {
  text: ':adore:',
  src: '/images/smilies/Off/adore.gif'
}, {
  text: ':nosebleed:',
  src: '/images/smilies/Off/nosebleed.gif'
}, {
  text: ':beauty:',
  src: '/images/smilies/Off/beauty.gif'
}, {
  text: ':gach:',
  src: 'images/smilies/brick.png'
}, {
  text: ':">',
  src: '/images/smilies/Off/embarrassed.gif'
}, {
  text: ':surrender:',
  src: '/images/smilies/Off/surrender.gif'
}, {
  text: ':pudency:',
  src: '/images/smilies/Off/pudency.gif'
}, {
  text: ':sosad:',
  src: '/images/smilies/Off/too_sad.gif'
}, {
  text: ':chaymau:',
  src: '/images/smilies/Off/nosebleed.gif'
}, {
  text: ':go:',
  src: '/images/smilies/Off/go.gif'
}, {
  text: ':sweat:',
  src: '/images/smilies/Off/sweat.gif'
}, {
  text: ':canny:',
  src: '/images/smilies/Off/canny.gif'
}, {
  text: ':sogood:',
  src: '/images/smilies/Off/feel_good.gif'
}, {
  text: ':shame:',
  src: '/images/smilies/Off/shame.gif'
}, {
  text: ':hungry:',
  src: '/images/smilies/Off/hungry.gif'
}, {
  text: ':shot:',
  src: '/images/smilies/Off/beat_shot.gif'
}, {
  text: ':rap:',
  src: '/images/smilies/Off/rap.gif'
}, {
  text: ':hang:',
  src: '/images/smilies/Off/hang.gif'
}, {
  text: ':*',
  src: '/images/smilies/Off/sweet_kiss.gif'
}, {
  text: ':ops:',
  src: '/images/smilies/Off/ops.gif'
}, {
  text: ':)',
  src: '/images/smilies/Off/smile.gif'
}, {
  text: ':plaster:',
  src: '/images/smilies/Off/beat_plaster.gif'
}, {
  text: ':tire:',
  src: '/images/smilies/Off/tire.gif'
}, {
  text: ':brick:',
  src: '/images/smilies/Off/beat_brick.gif'
}, {
  text: ':badsmell:',
  src: '/images/smilies/Off/bad_smelly.gif'
}, {
  text: ':hell_boy:',
  src: '/images/smilies/Off/hell_boy.gif'
}, {
  text: ':kool:',
  src: '/images/smilies/Off/cool.gif'
}, {
  text: ':dribble:',
  src: '/images/smilies/Off/dribble.gif'
}, {
  text: ':waaaht:',
  src: '/images/smilies/Off/waaaht.gif'
}, {
  text: ':oh:',
  src: '/images/smilies/Off/oh.gif'
}, {
  text: ':((',
  src: '/images/smilies/Off/cry.gif'
}, {
  text: '^:)^',
  src: '/images/smilies/Off/lay.gif'
}, {
  text: ':aboom:',
  src: '/images/smilies/Off/after_boom.gif'
}, {
  text: ':sad:',
  src: '/images/smilies/Off/sad.gif'
}, {
  text: ':hug:',
  src: '/images/smilies/Off/hug.gif'
}, {
  text: ':fix:',
  src: '/images/smilies/Off/fix.gif'
}, {
  text: ':amazed:',
  src: '/images/smilies/Off/amazed.gif'
}, {
  text: ':shitty:',
  src: '/images/smilies/Off/shit.gif'
}, {
  text: ':what:',
  src: '/images/smilies/Off/what.gif'
}, {
  text: ':cheers:',
  src: '/images/smilies/Off/cheers.gif'
}, {
  text: '-_-',
  src: '/images/smilies/Off/sleep.gif'
}, {
  text: ':spam:',
  src: '/images/smilies/Off/spam.gif'
}, {
  text: ':ah:',
  src: '/images/smilies/Off/ah.gif'
}, {
  text: ':rofl:',
  src: '/images/smilies/Off/rofl.gif'
}, {
  text: ':baffle:',
  src: '/images/smilies/Off/baffle.gif'
}, {
  text: ':choler:',
  src: '/images/smilies/Off/choler.gif'
}, {
  text: ':doubt:',
  src: '/images/smilies/Off/doubt.gif'
}, {
  text: ':capture:',
  src: '/images/smilies/Off/capture.gif'
}, {
  text: ':confident:',
  src: '/images/smilies/Off/confident.gif'
}, {
  text: ':theft:',
  src: '/images/smilies/Off/theft.gif'
}, {
  text: ':matrix:',
  src: '/images/smilies/Off/matrix.gif'
}, {
  text: ':haha:',
  src: '/images/smilies/Off/haha.gif'
}, {
  text: ':hehe:',
  src: '/images/smilies/Off/hehe.gif'
}, {
  text: ':smoke:',
  src: '/images/smilies/Off/smoke.gif'
}, {
  text: ':D',
  src: '/images/smilies/Off/big_smile.gif'
}, {
  text: ':angry:',
  src: '/images/smilies/Off/angry.gif'
}, {
  text: ':sos:',
  src: '/images/smilies/Off/sos.gif'
}, {
  text: ':spiderman:',
  src: '/images/smilies/Off/spiderman.gif'
}, {
  text: ':boss:',
  src: '/images/smilies/Off/boss.gif'
}, {
  text: ':dreaming:',
  src: '/images/smilies/Off/still_dreaming.gif'
}, {
  text: ':-s',
  src: '/images/smilies/Off/confuse.gif'
}, {
  text: ':bike:',
  src: '/images/smilies/Off/bike.gif'
}, {
  text: ':misdoubt:',
  src: '/images/smilies/Off/misdoubt.gif'
}, {
  text: ':mage:',
  src: '/images/smilies/Off/mage.gif'
}, {
  text: ':bye:',
  src: '/images/smilies/Off/bye.gif'
}, {
  text: ':phone:',
  src: '/images/smilies/Off/phone.gif'
}, {
  text: ':lmao:',
  src: '/images/smilies/Off/lmao.gif'
}, {
  text: ':ot:',
  src: '/images/smilies/Off/ot.gif'
}, {
  text: ':flame:',
  src: '/images/smilies/Off/flame.gif'
}, {
  text: ':bang:',
  src: '/images/smilies/Off/bang.gif'
}, {
  text: ':sure:',
  src: '/images/smilies/Off/sure.gif'
}, {
  text: ':stupid:',
  src: '/images/smilies/emos/stupid.gif'
}, {
  text: ':ban:',
  src: '/images/smilies/Off/bann.gif'
}, {
  text: ':doublegun:',
  src: '/images/smilies/emos/doublegun.gif'
}, {
  text: ':boom:',
  src: '/images/smilies/emos/boom.gif'
}, {
  text: ':lol:',
  src: '/images/smilies/emos/lol.gif'
}, {
  text: ':welcome:',
  src: '/images/smilies/Off/welcome.gif'
}, {
  text: ':please:',
  src: '/images/smilies/Off/please.gif'
}, {
  text: ':puke:',
  src: '/images/smilies/emos/puke.gif'
}, {
  text: ':shit:',
  src: '/images/smilies/emos/shit.gif'
}, {
  text: ':lovemachine:',
  src: '/images/smilies/emos/lovemachine.gif'
}, {
  text: ':runrun:',
  src: '/images/smilies/Off/runrun.gif'
}, {
  text: ':loveyou:',
  src: '/images/smilies/emos/loveyou.gif'
}, {
  text: ':Birthday:',
  src: '/images/smilies/emos/Birthday.gif'
}, {
  text: ':no:',
  src: '/images/smilies/emos/no.gif'
}, {
  text: ':yes:',
  src: '/images/smilies/emos/yes.gif'
}, {
  text: ':shoot1:',
  src: '/images/smilies/emos/shoot1.gif'
}, {
  text: ':winner:',
  src: '/images/smilies/emos/winner.gif'
}, {
  text: ':band:',
  src: '/images/smilies/emos/band.gif'
}, {
  text: ':grin:',
  src: '/images/smilies/biggrin.gif'
}, {
  text: ':frown:',
  src: '/images/smilies/frown.gif'
}, {
  text: ':mad:',
  src: '/images/smilies/mad.gif'
}, {
  text: ':p',
  src: '/images/smilies/tongue.gif'
}, {
  text: ':embrass:',
  src: '/images/smilies/redface.gif'
}, {
  text: ':confused:',
  src: '/images/smilies/confused.gif'
}, {
  text: ';)',
  src: '/images/smilies/wink.gif'
}, {
  text: ':rolleyes:',
  src: '/images/smilies/rolleyes.gif'
}, {
  text: ':cool:',
  src: '/images/smilies/cool.gif'
}, {
  text: ':eek:',
  src: '/images/smilies/eek.gif'
}];

exports.default = emotions;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(34);

var _reactRedux = __webpack_require__(7);

var _reduxThunk = __webpack_require__(96);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromise = __webpack_require__(95);

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reduxLogger = __webpack_require__(94);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _App = __webpack_require__(73);

var _App2 = _interopRequireDefault(_App);

var _reducers = __webpack_require__(75);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _reduxLogger2.default)({
  level: 'log'
});

var store = exports.store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxPromise2.default, logger));

exports.default = function () {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_App2.default, null)
  );
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceTextWithLink = replaceTextWithLink;
exports.replaceLinks = replaceLinks;
exports.removeRedirect = removeRedirect;
exports.resolveImage = resolveImage;
exports.resolveYoutube = resolveYoutube;
exports.proccessLink = proccessLink;

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
function replaceTextWithLink(node) {
  if (/(?=[^ ])(h *t *t *p *: *\/ *\/ *)?(([a-zA-Z0-9-\.]+\.)?[a-zA-Z0-9-]{3,}\.(com|net|org|us|info|vn|com\.vn|net\.vn|gov\.vn|edu|edu\.vn)(\/)?([^\s\[]+)?)(?=\s|$|\[)/.test((0, _jquery2.default)(node).text())) {
    var replacement = (0, _jquery2.default)(node).text().replace(/(?=[^ ])(h *t *t *p *: *\/ *\/ *)?(([a-zA-Z0-9-\.]+\.)?[a-zA-Z0-9-]{3,}\.(com|net|org|us|info|vn|com\.vn|net\.vn|gov\.vn|edu|edu\.vn)(\/)?([^\s\[]+)?)(?=\s|$|\[)/gi, "<a data-type='linkdetected' href='http://$2' target='_blank'>$2</a>");
    (0, _jquery2.default)(node).before(replacement);
    node.nodeValue = '';
  }
}

function replaceLinks($html, isThreadContentOnly) {
  if (!isThreadContentOnly) {
    $html = $html.find("[id^='post_message_']");
  } else {
    var isReplace = $html.find('a[data-type="linkdetected"]');
    if (isReplace && isReplace.length > 0) return;
  }

  $html.each(function f() {
    var _this = this;

    var $this = (0, _jquery2.default)(this);
    var nodes = $this.contents();
    var subnodes = $this.find('*:not(a)').contents().filter(function () {
      return _this.nodeType === 3;
    });

    _lodash2.default.each(nodes, function (node) {
      if (node.nodeType === 3) replaceTextWithLink(node);
    });

    _lodash2.default.each(subnodes, function (snode) {
      if (snode.parentNode.nodeName.toLowerCase() !== 'a') replaceTextWithLink(snode);
    });
  });
}

function removeRedirect($html) {
  $html.find("a[href*='redirect/index.php']").each(function f() {
    var $this = (0, _jquery2.default)(this);
    var url = $this.attr('href').match(/\?link=(.*)/)[1];
    var decoded = decodeURIComponent(url);
    $this.attr('href', decoded);
  });
}

function resolveImage($html, isThreadContentOnly) {
  var $context = null;

  if (isThreadContentOnly) {
    $context = $html.find('a');
    var isReplace = $html.find('a[data-smartlink="image"]');
    if (isReplace && isReplace.length > 0) return;
  } else {
    $context = $html.find("[id^='post_message_'] a");
  }

  $context.each(function f() {
    var $this = (0, _jquery2.default)(this);
    var href = $this.attr('href');
    if ($this.find('img').length > 0) return;
    if (/\.(jpg|png|gif|bmp|jpeg)$/.test(href)) {
      $this.attr('data-smartlink', 'image');
      var $img = (0, _jquery2.default)('<div>\n            \t<img src=\'' + href + '\'\n            \t\ttitle=\'T\u1EF1 \u0111\u1ED9ng nh\u1EADn di\u1EC7n link h\xECnh v\u1EDBi voz living\'/>\n        \t\t</div>');
      $this.after($img);
    }
  });
  (0, _jquery2.default)('.voz-post-message img[src^="http"]').each(function () {
    var $this = (0, _jquery2.default)(this);
    if ($this.width() <= 80 && $this.height() <= 80) {
      $this.attr('class', 'inlineimg');
    }
  });
}

function resolveYoutube($html, isThreadContentOnly) {
  var $context = void 0;

  if (isThreadContentOnly) {
    $context = $html.find('a');
    var isReplace = $html.find('a[data-smartlink="youtube"]');
    if (isReplace && isReplace.length > 0) return;
  } else {
    $context = $html.find("[id^='post_message_'] a");
  }

  $context.each(function f() {
    var $this = (0, _jquery2.default)(this);
    var href = $this.attr('href');
    if (/imgur\.com\/a\//.test(href)) {
      var node = $this[0];
      if (!(node.previousSibling && node.previousSibling.nodeName === '#text')) return;
      var match = node.previousSibling.textContent.trim().match(/Sticker (.*)/);
      if (match === null) return;
      var name = match[1];
      var btn = document.createElement('button');
      btn.textContent = 'Add Sticker';
      btn.addEventListener('click', function (e) {
        if (window.__addStickerSet) {
          window.__addStickerSet(href, name);
          btn.setAttribute('disabled', 'true');
        }
        e.preventDefault();
        return false;
      });
      $this.after(btn);
      $this.after('<span>&nbsp;</span>');
      return;
    }
    var $img = null;
    var ytb = href.match(/youtube\.com[^\s]+v=([a-zA-Z0-9_-]+)/i);
    var fb = href.match(/facebook.com.*\/videos\/.*/i);
    var mp4 = href.match(/.*\.mp4$/i);
    // console.log(href, mp4);
    if (ytb === null || ytb.length === 0) {
      // 2nd try
      ytb = href.match(/youtu\.be\/([a-zA-Z0-9_-]+)/i);
    }
    if (ytb !== null && ytb.length > 0) {
      $this.attr('data-smartlink', 'youtube');
      var src = 'https://www.youtube.com/embed/' + ytb[1] + '?rel=0';
      var timeMatch = href.match(/t=([^&]*)[&$]?/i);
      // console.log('timeMatch', href, timeMatch)
      if (timeMatch !== null && timeMatch.length > 1) {
        var time = ~~timeMatch[1];
        if (time === 0) time = timeMatch[1] // eslint-disable-line curly
        .replace(/([hms])(?=\d)/g, '$1 ').split(' ').reduce(function (a, s) {
          return a + { h: 3600, m: 60, s: 1 }[s.slice(-1)] * ~~s.slice(0, -1);
        }, 0);
        src += '&start=' + time;
      }
      $img = (0, _jquery2.default)('<div><iframe width=\'560\' height=\'315\'  src=\'' + src + '\'\n            \t\t\t\t\tframeborder=\'0\' allowfullscreen\n            \t\t\t\t\ttitle=\'C\xF3 th\u1EC3 x\u1EA3y ra sai s\xF3t trong vi\u1EC7c t\u1EF1 \u0111\u1ED9ng nh\u1EADn bi\u1EBFt youtube, n\u1EBFu c\xF3 xin vui l\xF2ng b\xE1o l\u1ED7i qua pm greans(@vozforum)\'>\n        \t\t\t\t\t</iframe>\n\t\t\t\t\t</div>');
    } else if (/video\.vnexpress\.net\/parser/.test(href) === true) {
      $this.attr('data-smartlink', 'vnexpress-video');
      var uHref = 'https://' + href.replace(/http:\/\//, '');
      $img = (0, _jquery2.default)('<div><iframe width=\'480\' height=\'270\' src=\'' + uHref + '\'\n            \t\t\t\t\tframeborder=\'0\' allowfullscreen\n            \t\t\t\t\ttitle=\'C\xF3 th\u1EC3 x\u1EA3y ra sai s\xF3t trong vi\u1EC7c t\u1EF1 \u0111\u1ED9ng nh\u1EADn bi\u1EBFt video Vnexpress, n\u1EBFu c\xF3 xin vui l\xF2ng b\xE1o l\u1ED7i qua pm greans(@vozforum)\'>\n        \t\t\t\t\t</iframe>\n          </div>');
      // } else if (/video\.vnexpress\.net/.test(href) === true) {
      //   $this.attr('data-smartlink', 'vnexpress-video');
      //   const uHref = 'https://' + href.replace(/http:\/\//, '') + '#wrapper_container';
      //   $img = $(`<div><iframe width='600' height='340' src='${uHref}'
      //         					frameborder='0' allowfullscreen
      //         					title='Có thể xảy ra sai sót trong việc tự động nhận biết video Vnexpress, nếu có xin vui lòng báo lỗi qua pm greans(@vozforum)'>
      //     					</iframe>
      //       </div>`);
    } else if (fb !== null && fb.length > 0) {
      $img = (0, _jquery2.default)('<div><iframe src="https://www.facebook.com/plugins/video.php?href=' + fb + '&show_text=0&height=280"\n\t\t\t\t\t\t\twidth="560" height="315" style="border:none;overflow:hidden" scrolling="no"\n\t\t\t\t\t\t\tframeborder="0" allowTransparency="true" allowFullScreen="true">\n\t\t\t\t\t\t </iframe>\n\t\t\t\t\t</div>');
    } else if (mp4 !== null && mp4.length > 0) {
      $this.attr('data-smartlink', 'mp4-video');
      $img = (0, _jquery2.default)('<div><video src=\'' + href + '\' width=\'560\' height=\'315\' preload=\'metadata\' controls></video></div>');
    }
    if ($img !== null) $this.after($img);
  });
}

/* eslint-enable no-param-reassign */
/* eslint-enable max-len */

function proccessLink($html) {
  var isThreadContentOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  replaceLinks($html, isThreadContentOnly);
  removeRedirect($html);
  resolveImage($html, isThreadContentOnly);
  resolveYoutube($html, isThreadContentOnly);
  return $html;
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = openNewTab;
function openNewTab(href) {
  var a = document.createElement('a');
  a.href = href;
  var evt = new MouseEvent('click', {
    canBubble: true,
    cancelable: true,
    view: window,
    ctrlKey: true,
    metaKey: true
  });
  a.dispatchEvent(evt);
  return false;
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * author Christopher Blum
 *    - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 *    - forked from http://github.com/zuk/jquery.inview/
 */
(function (factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node, CommonJS
    module.exports = factory(require('jquery'));
  } else {
      // Browser globals
    factory(jQuery);
  }
}(function ($) {

  var inviewObjects = [], viewportSize, viewportOffset,
      d = document, w = window, documentElement = d.documentElement, timer;

  $.event.special.inview = {
    add: function(data) {
      inviewObjects.push({ data: data, $element: $(this), element: this });
      // Use setInterval in order to also make sure this captures elements within
      // "overflow:scroll" elements or elements that appeared in the dom tree due to
      // dom manipulation and reflow
      // old: $(window).scroll(checkInView);
      //
      // By the way, iOS (iPad, iPhone, ...) seems to not execute, or at least delays
      // intervals while the user scrolls. Therefore the inview event might fire a bit late there
      //
      // Don't waste cycles with an interval until we get at least one element that
      // has bound to the inview event.
      if (!timer && inviewObjects.length) {
         timer = setInterval(checkInView, 250);
      }
    },

    remove: function(data) {
      for (var i=0; i<inviewObjects.length; i++) {
        var inviewObject = inviewObjects[i];
        if (inviewObject.element === this && inviewObject.data.guid === data.guid) {
          inviewObjects.splice(i, 1);
          break;
        }
      }

      // Clear interval when we no longer have any elements listening
      if (!inviewObjects.length) {
         clearInterval(timer);
         timer = null;
      }
    }
  };

  function getViewportSize() {
    var mode, domObject, size = { height: w.innerHeight, width: w.innerWidth };

    // if this is correct then return it. iPad has compat Mode, so will
    // go into check clientHeight/clientWidth (which has the wrong value).
    if (!size.height) {
      mode = d.compatMode;
      if (mode || !$.support.boxModel) { // IE, Gecko
        domObject = mode === 'CSS1Compat' ?
          documentElement : // Standards
          d.body; // Quirks
        size = {
          height: domObject.clientHeight,
          width:  domObject.clientWidth
        };
      }
    }

    return size;
  }

  function getViewportOffset() {
    return {
      top:  w.pageYOffset || documentElement.scrollTop   || d.body.scrollTop,
      left: w.pageXOffset || documentElement.scrollLeft  || d.body.scrollLeft
    };
  }

  function checkInView() {
    if (!inviewObjects.length) {
      return;
    }

    var i = 0, $elements = $.map(inviewObjects, function(inviewObject) {
      var selector  = inviewObject.data.selector,
          $element  = inviewObject.$element;
      return selector ? $element.find(selector) : $element;
    });

    viewportSize   = viewportSize   || getViewportSize();
    viewportOffset = viewportOffset || getViewportOffset();

    for (; i<inviewObjects.length; i++) {
      // Ignore elements that are not in the DOM tree
      if (!$.contains(documentElement, $elements[i][0])) {
        continue;
      }

      var $element      = $($elements[i]),
          elementSize   = { height: $element[0].offsetHeight, width: $element[0].offsetWidth },
          elementOffset = $element.offset(),
          inView        = $element.data('inview');

      // Don't ask me why because I haven't figured out yet:
      // viewportOffset and viewportSize are sometimes suddenly null in Firefox 5.
      // Even though it sounds weird:
      // It seems that the execution of this function is interferred by the onresize/onscroll event
      // where viewportOffset and viewportSize are unset
      if (!viewportOffset || !viewportSize) {
        return;
      }

      if (elementOffset.top + elementSize.height > viewportOffset.top &&
          elementOffset.top < viewportOffset.top + viewportSize.height &&
          elementOffset.left + elementSize.width > viewportOffset.left &&
          elementOffset.left < viewportOffset.left + viewportSize.width) {
        if (!inView) {
          $element.data('inview', true).trigger('inview', [true]);
        }
      } else if (inView) {
        $element.data('inview', false).trigger('inview', [false]);
      }
    }
  }

  $(w).bind("scroll resize scrollstop", function() {
    viewportSize = viewportOffset = null;
  });

  // IE < 9 scrolls to focused elements without firing the "scroll" event
  if (!documentElement.addEventListener && documentElement.attachEvent) {
    documentElement.attachEvent("onfocusin", function() {
      viewportOffset = null;
    });
  }
}));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(135);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _Root = __webpack_require__(30);

var _Root2 = _interopRequireDefault(_Root);

var _PageLoader = __webpack_require__(48);

var _PageLoader2 = _interopRequireDefault(_PageLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.trackEvent = function (category, action, label) {
  chrome.runtime.sendMessage({ __ga: true, category: category, action: action, label: label });
};
trackEvent('view-content', location.href);

document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    window.vozLivingLoader = _PageLoader2.default.init().start();

    var injector = document.createElement('div');
    injector.id = 'voz-living-app';
    document.body.appendChild(injector);
    (0, _reactDom.render)(_react2.default.createElement(_Root2.default, null), injector);
  }
};

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// require('babel-polyfill');
// require('babel-runtime/core-js/promise').default = require('bluebird');
__webpack_require__(35);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdsControl = (_temp = _class = function (_Component) {
  _inherits(AdsControl, _Component);

  function AdsControl() {
    _classCallCheck(this, AdsControl);

    return _possibleConstructorReturn(this, (AdsControl.__proto__ || Object.getPrototypeOf(AdsControl)).apply(this, arguments));
  }

  _createClass(AdsControl, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _jquery2.default)('#neo_logobar').append('\n      <div style="display: block; float: right">\n        <h3><a href="https://goo.gl/forms/jgSa6ZXtIsRvLJMj1" target="_blank" style="color: white;">\n          <i class="fa fa-wechat"></i> Chat v\u1EDBi c\u1ED9ng \u0111\u1ED3ng VozLiving (m\u1EDF ra tab m\u1EDBi)\n        </a></h3>\n        <h4><a href="https://vozliving.slack.com" target="_blank" style="color: white;">\n          \u0110\xE3 tham gia ? gh\xE9 v\xF4 ch\xE9m gi\xF3 (tab m\u1EDBi)\n        </a></h4>\n      </div>\n    ');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.removeAds(nextProps);
    }
  }, {
    key: 'removeAds',
    value: function removeAds() {
      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var isRemoveAds = nextProps.isRemoveAds;


      if (isRemoveAds) {
        if ((0, _jquery2.default)('.middleads+table > tbody > tr > td:eq(1) [id^=div-gpt-ad]').length > 0) {
          (0, _jquery2.default)('.middleads+table > tbody > tr > td:eq(1)').remove();
        }
        (0, _jquery2.default)('.middleads+div > table > tbody > tr > td:eq(1)').remove();
        (0, _jquery2.default)('[id^=div-gpt-ad]').hide();
        (0, _jquery2.default)('[id^=google_ads_div],.middleads').hide();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return AdsControl;
}(_react.Component), _class.propTypes = {
  isRemoveAds: _react.PropTypes.bool
}, _temp);
exports.default = AdsControl;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _html2canvas = __webpack_require__(93);

var _html2canvas2 = _interopRequireDefault(_html2canvas);

var _uploadImage = __webpack_require__(13);

var _clipboard = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CapturePost = function (_Component) {
  _inherits(CapturePost, _Component);

  function CapturePost(props) {
    _classCallCheck(this, CapturePost);

    var _this = _possibleConstructorReturn(this, (CapturePost.__proto__ || Object.getPrototypeOf(CapturePost)).call(this, props));

    _this.hookToPost();
    return _this;
  }

  _createClass(CapturePost, [{
    key: 'hookToPost',
    value: function hookToPost() {
      var _this2 = this;

      (0, _jquery2.default)('.voz-postbit td[id^=td_post_]').each(function (i, e) {
        var $this = (0, _jquery2.default)(e);
        // const uid = $this.find("a[href*='member.php']").attr('href').match(/\?u=(\d+)/)[1];
        var $captureButton = (0, _jquery2.default)('<div class="voz-living-capture-post">\n      <a \n        href="javascript:void(0)"\n        class="tooltip-left voz-living-capture"\n        data-tooltip="Ch\u1EE5p b\xE0i vi\u1EBFt"\n      >\n        <i class="fa fa-camera" />\n      </a></div>');
        $captureButton.find(' > a').on('click', _this2.capturePost.bind(_this2, $this, $captureButton));
        $this.find('> div:last').append($captureButton);
      });
    }
  }, {
    key: 'capturePost',
    value: function capturePost($post, $btn) {
      $btn.find('.voz-living-capture-post-link').remove();
      $btn.find('.voz-living-capture-post-image').remove();
      try {
        var $txt = (0, _jquery2.default)('<input class="voz-living-capture-post-link" type="text" size=30 value="Capturing by Voz Living" />');
        $btn.append($txt);
        setTimeout(function () {
          (0, _html2canvas2.default)($post.parents('table.voz-postbit')[0]).then(function (canvas) {
            return canvas.toDataURL('image/png');
          }).then(function (imageData) {
            $txt.val('Uploading to pik.vn');
            var $image = (0, _jquery2.default)('<a href="' + imageData + '" target="_blank" class="voz-living-capture-post-image"><i class="fa fa-file-photo-o" /></a>');
            $btn.append($image);
            $image.on('click', function () {
              setTimeout(function () {
                return $image.remove();
              }, 500);
            });
            return (0, _uploadImage.uploadImage)(imageData);
          }).then(function (res) {
            var url = res.url;
            if (_lodash2.default.isUndefined(url)) {
              $txt.val('Faild to upload');
            } else {
              $txt.val(url);
            }
            $txt.on('click', function () {
              var to = 100;
              if (!_lodash2.default.isUndefined(url)) {
                (0, _clipboard.copyText)(url);
                $txt.val('Coppied');
                to = 1000;
              }
              setTimeout(function () {
                return $txt.remove();
              }, to);
            });
          }).catch(function (e) {
            throw e;
          });
        }, 100);
      } catch (e) {
        alert('Có lỗi xảy ra, không thể chụp được bài viết này');
        console.error(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return CapturePost;
}(_react.Component);

exports.default = CapturePost;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _coreDecorators = __webpack_require__(2);

var _reactDom = __webpack_require__(10);

var _editor = __webpack_require__(19);

var _EmotionPicker = __webpack_require__(41);

var _EmotionPicker2 = _interopRequireDefault(_EmotionPicker);

var _StickerPicker = __webpack_require__(27);

var _StickerPicker2 = _interopRequireDefault(_StickerPicker);

var _settings = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmotionControl = (0, _coreDecorators.autobind)(_class = (_temp = _class2 = function (_Component) {
  _inherits(EmotionControl, _Component);

  function EmotionControl(comProps) {
    _classCallCheck(this, EmotionControl);

    var _this = _possibleConstructorReturn(this, (EmotionControl.__proto__ || Object.getPrototypeOf(EmotionControl)).call(this, comProps));

    _this.editor = null;
    return _this;
  }

  _createClass(EmotionControl, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updateEmotionHelper(nextProps);
    }
  }, {
    key: 'onIconClick',
    value: function onIconClick(emotion) {
      if (this.editor) {
        (0, _editor.insertTextIntoEditor)(emotion.text, this.editor);
      }
    }
  }, {
    key: 'onStickerClick',
    value: function onStickerClick(sticker) {
      if (this.editor && sticker.url) {
        var bbcode = '[IMG]' + sticker.url + '[/IMG]';
        (0, _editor.insertTextIntoEditor)(bbcode, this.editor);
      }
    }
  }, {
    key: 'updateEmotionHelper',
    value: function updateEmotionHelper() {
      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var emotionHelper = nextProps.emotionHelper,
          currentView = nextProps.currentView,
          stickerPanelExpand = nextProps.stickerPanelExpand;

      var hasSmileBox = (0, _jquery2.default)('.smilebox').length !== 0;
      if (emotionHelper && !hasSmileBox) {
        if (currentView === 'thread' || currentView === 'new-reply' || currentView === 'edit-reply' || currentView === 'pm' || currentView === 'insert-pm') {
          var smileCont = null;
          var stickerBox = document.createElement('div');
          var classView = '';

          if (currentView === 'thread' || currentView === 'pm') {
            this.editor = (0, _jquery2.default)('#vB_Editor_QR_textarea');
            smileCont = this.editor.parents('#vB_Editor_QR').eq(0);
            if (smileCont.length === 0) return;
            (0, _settings.getChromeLocalStore)(['emoticonPanelExpand']).then(function (_ref) {
              var _ref$emoticonPanelExp = _ref.emoticonPanelExpand,
                  emoticonPanelExpand = _ref$emoticonPanelExp === undefined ? 'compact' : _ref$emoticonPanelExp;

              smileCont.find('.smilebox').addClass(emoticonPanelExpand);
            });
            smileCont.append(stickerBox);
          } else if (currentView === 'new-reply' || currentView === 'edit-reply' || currentView === 'insert-pm') {
            this.editor = (0, _jquery2.default)('#vB_Editor_001_textarea');
            smileCont = (0, _jquery2.default)('#vB_Editor_001_smiliebox');
            smileCont.find('table').remove();
            classView = 'full';
            this.editor.parent().append(stickerBox);
          }

          var smileBox = document.createElement('div');
          smileBox.className = 'smilebox ' + classView;
          stickerBox.className = classView;
          smileCont.append(smileBox);

          (0, _reactDom.render)(_react2.default.createElement(_EmotionPicker2.default, { onIconClick: this.onIconClick }), smileBox);
          (0, _reactDom.render)(_react2.default.createElement(_StickerPicker2.default, { onStickerClick: this.onStickerClick, stickerPanelExpand: stickerPanelExpand }), stickerBox);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return EmotionControl;
}(_react.Component), _class2.propTypes = {
  emotionHelper: _react.PropTypes.bool,
  currentView: _react.PropTypes.string,
  stickerPanelExpand: _react.PropTypes.bool
}, _temp)) || _class;

exports.default = EmotionControl;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _emotions = __webpack_require__(29);

var _emotions2 = _interopRequireDefault(_emotions);

var _coreDecorators = __webpack_require__(2);

var _settings = __webpack_require__(4);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmotionPicker = (0, _coreDecorators.autobind)(_class = (_temp = _class2 = function (_Component) {
  _inherits(EmotionPicker, _Component);

  function EmotionPicker(props) {
    _classCallCheck(this, EmotionPicker);

    var _this = _possibleConstructorReturn(this, (EmotionPicker.__proto__ || Object.getPrototypeOf(EmotionPicker)).call(this, props));

    _this.usageData = {};
    return _this;
  }

  _createClass(EmotionPicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      __webpack_require__(91);
      setTimeout(function () {
        (0, _settings.getChromeSyncStore)(['stickerUsageData']).then(function (store) {
          if (typeof store.stickerUsageData !== 'undefined') _this2.usageData = store.stickerUsageData;
        });
      }, 500);
    }
  }, {
    key: 'prepareEmotionUrl',
    value: function prepareEmotionUrl(url) {
      var out = url;
      if (out.indexOf('http') > -1) return '';
      if (out.charAt(0) !== '/') out = '/' + out;
      return 'https://vozforums.com' + out;
    }
  }, {
    key: 'choseEmotion',
    value: function choseEmotion(emotion) {
      this.props.onIconClick(emotion);
    }
  }, {
    key: 'expandEmo',
    value: function expandEmo() {
      var emoHeader = (0, _jquery2.default)('.emo-header i');
      emoHeader.toggleClass('fa-expand fa-minus');
      if (emoHeader.hasClass('fa-expand')) {
        emoHeader.parents('.smilebox').addClass('compact').removeClass('full');
        (0, _settings.setChromeLocalStore)({ emoticonPanelExpand: 'compact' });
      } else if (emoHeader.hasClass('fa-minus')) {
        emoHeader.parents('.smilebox').addClass('full').removeClass('compact');
        (0, _settings.setChromeLocalStore)({ emoticonPanelExpand: 'full' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        (0, _jquery2.default)('#vB_Editor_QR_textarea').length > 0 && _react2.default.createElement(
          'div',
          { className: 'emo-header' },
          'Smiles',
          _react2.default.createElement(
            'div',
            { className: 'emo-expand' },
            _react2.default.createElement('i', {
              className: 'fa fa-expand fa-lg', 'aria-hidden': true,
              onClick: function onClick() {
                return _this3.expandEmo();
              }
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'emotion-box' },
          _emotions2.default.map(function (emotion) {
            return _react2.default.createElement(
              'div',
              { className: 'emo', key: emotion.text },
              _react2.default.createElement('img', {
                alt: emotion.text,
                src: _this3.prepareEmotionUrl(emotion.src),
                onClick: function onClick() {
                  return _this3.choseEmotion(emotion);
                }
              })
            );
          })
        )
      );
    }
  }]);

  return EmotionPicker;
}(_react.Component), _class2.propTypes = {
  onIconClick: _react.PropTypes.func
}, _temp)) || _class;

exports.default = EmotionPicker;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeedbackBtn = function FeedbackBtn() {
  return _react2.default.createElement(
    "div",
    { className: "btn-group" },
    _react2.default.createElement(
      "a",
      {
        className: "btn tooltip-right",
        href: "https://voz-living.github.io/voz-living-feedback/",
        style: { fontSize: '20px' },
        target: "_blank",
        "data-tooltip": "G\xF3p \xFD/B\xE1o l\u1ED7i/T\xE2m s\u1EF1"
      },
      _react2.default.createElement("i", { className: "fa fa-envelope-o" })
    )
  );
};

exports.default = FeedbackBtn;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactRedux = __webpack_require__(7);

var _threadSubscription = __webpack_require__(20);

var _voz = __webpack_require__(9);

var actions = _interopRequireWildcard(_voz);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FollowThread = (_temp = _class = function (_Component) {
  _inherits(FollowThread, _Component);

  function FollowThread(comProps) {
    _classCallCheck(this, FollowThread);

    var _this = _possibleConstructorReturn(this, (FollowThread.__proto__ || Object.getPrototypeOf(FollowThread)).call(this, comProps));

    _this.state = {
      showThreadList: false
    };
    _this.dispatch = comProps.dispatch;
    return _this;
  }

  _createClass(FollowThread, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !_lodash2.default.isEqual(nextProps.threadList, this.props.threadList) || !_lodash2.default.isEqual(nextState.showThreadList, this.state.showThreadList);
    }
  }, {
    key: 'getTime',
    value: function getTime(timeStamp) {
      var date = new Date(timeStamp);
      /* eslint-disable max-len */
      return date.getHours() + ':' + date.getMinutes() + ' ' + date.getDay() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
      /* eslint-enable max-len */
    }
  }, {
    key: 'toggleThreadList',
    value: function toggleThreadList() {
      var showThreadList = this.state.showThreadList;

      this.setState({ showThreadList: !showThreadList });
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(id) {
      var _this2 = this;

      this.setState({ isLoading: true });
      (0, _threadSubscription.unsubscribeThread)(id).then(function () {
        _this2.dispatch(actions.unsubscribeThread(id));
      });
    }
  }, {
    key: 'renderThread',
    value: function renderThread(thread) {
      var _this3 = this;

      var id = thread.id,
          postId = thread.postId,
          numPostDiff = thread.numPostDiff,
          title = thread.title;

      var link = postId === null ? 'showthread.php?t=' + id : 'showthread.php?p=' + postId + '#post' + postId;
      return _react2.default.createElement(
        'div',
        { className: 'quote-row', key: id },
        _react2.default.createElement(
          'div',
          { className: 'quote-title' },
          _react2.default.createElement(
            'a',
            { href: link },
            title
          ),
          _react2.default.createElement(
            'span',
            {
              className: 'pull-right',
              onClick: function onClick() {
                return _this3.unsubscribe(id);
              },
              style: { marginRight: '10px', cursor: 'pointer' }
            },
            _react2.default.createElement('span', { className: 'fa fa-trash' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'quote-bottom' },
          _react2.default.createElement('i', { className: 'fa fa-arrow-right' }),
          ' C\xF3 ',
          numPostDiff,
          ' m\u1EDBi'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var threadList = this.props.threadList;

      var btnClass = 'btn tooltip-right ' + (this.state.showThreadList ? 'active' : '');
      return _react2.default.createElement(
        'div',
        { className: 'btn-group' },
        _react2.default.createElement(
          'div',
          {
            className: btnClass,
            onClick: function onClick() {
              return _this4.toggleThreadList();
            },
            'data-tooltip': 'Follow Threads'
          },
          _react2.default.createElement('i', { className: 'fa fa-th-list' })
        ),
        function () {
          if (_this4.state.showThreadList) {
            return [_react2.default.createElement('div', {
              key: 'voz-mask-quote-list',
              className: 'voz-mask quote-list-mask',
              onClick: function onClick() {
                return _this4.setState({ showThreadList: !_this4.state.showThreadList });
              }
            }), _react2.default.createElement(
              'div',
              { className: 'btn-options', key: 'quote-list' },
              _react2.default.createElement(
                'h3',
                null,
                'Subscribed Threads'
              ),
              _react2.default.createElement(
                'div',
                { className: 'quote-list' },
                threadList.map(function (m) {
                  return _this4.renderThread(m);
                })
              )
            )];
          }
          return null;
        }()
      );
    }
  }]);

  return FollowThread;
}(_react.Component), _class.propTypes = {
  settings: _react.PropTypes.object,
  dispatch: _react.PropTypes.func,
  threadList: _react.PropTypes.array // { id, postId, numPostDiff, numPostFromTracker, numPost, title }
}, _class.defaultProps = {
  threadList: [],
  settings: {}
}, _temp);


function estimateSubscribedThreads(followThreads, threadTracker) {
  if (_lodash2.default.isEmpty(followThreads)) return [];
  return Object.keys(followThreads).map(function (id) {
    var _followThreads$id = followThreads[id],
        page = _followThreads$id.page,
        postNum = _followThreads$id.postNum,
        title = _followThreads$id.title;

    var tracked = threadTracker[id];
    var postId = tracked ? tracked.postId : null;
    var numPostFromTracker = tracked ? tracked.page * 10 + tracked.postNum : 0;
    var numPostTotal = page * 10 + postNum;
    var numPostDiff = Math.max(numPostTotal - numPostFromTracker, 0);
    return { id: id, postId: postId, numPostDiff: numPostDiff, numPostFromTracker: numPostFromTracker, numPostTotal: numPostTotal, title: title };
  });
}

var mapStateToProps = function mapStateToProps(state) {
  var _state$vozLiving = state.vozLiving,
      followThreads = _state$vozLiving.followThreads,
      settings = _state$vozLiving.settings,
      threadTracker = _state$vozLiving.threadTracker;

  var estimated = estimateSubscribedThreads(followThreads, threadTracker);
  return { threadList: estimated, settings: settings };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(FollowThread);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _http = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var apiUrl = 'https://voz-living.appspot.com/query?id=agxzfnZvei1saXZpbmdyFQsSCEFwaVF1ZXJ5GICAgICA5JEKDA&format=json';

var HotThreads = function (_Component) {
  _inherits(HotThreads, _Component);

  function HotThreads(prop) {
    _classCallCheck(this, HotThreads);

    var _this = _possibleConstructorReturn(this, (HotThreads.__proto__ || Object.getPrototypeOf(HotThreads)).call(this, prop));

    _this.state = {
      isOpen: false,
      threads: []
    };
    return _this;
  }

  _createClass(HotThreads, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.request();
    }
  }, {
    key: 'request',
    value: function request() {
      var _this2 = this;

      chrome.runtime.sendMessage({ service: 'request-hotthreads' }, function (data) {
        _this2.updateFromAPI(data);
        setTimeout(_this2.request.bind(_this2), 1000 * 60 * 30);
      });
    }
  }, {
    key: 'updateFromAPI',
    value: function updateFromAPI(rows) {
      if (rows && rows.length && rows.length > 0) {
        var threads = rows.map(function (r) {
          var info = r[1];
          var count = parseInt(r[2], 10);

          var _info$split = info.split(':|:'),
              _info$split2 = _slicedToArray(_info$split, 2),
              threadId = _info$split2[0],
              threadTitle = _info$split2[1];

          return {
            threadId: threadId,
            threadTitle: threadTitle,
            count: count
          };
        });
        this.setState({ threads: threads });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          isOpen = _state.isOpen,
          threads = _state.threads;

      return _react2.default.createElement(
        'div',
        { className: 'btn-group hot-threads' },
        _react2.default.createElement(
          'a',
          {
            className: 'btn tooltip-right' + (isOpen ? ' active' : ''),
            href: 'javascript:void(0)',
            style: { fontSize: '20px' },
            target: '_blank',
            'data-tooltip': 'Th\u1EDBt hot',
            onClick: function onClick() {
              return _this3.setState({ isOpen: !_this3.state.isOpen });
            }
          },
          _react2.default.createElement('i', { className: 'fa fa-fire' })
        ),
        _react2.default.createElement('div', {
          key: 'voz-mask-quote-list',
          style: { display: isOpen ? 'block' : 'none' },
          className: 'voz-mask quote-list-mask',
          onClick: function onClick() {
            return _this3.setState({ isOpen: !_this3.state.isOpen });
          }
        }),
        _react2.default.createElement(
          'div',
          { className: 'btn-options', style: { display: isOpen ? 'flex' : 'none' } },
          _react2.default.createElement(
            'h3',
            null,
            'Hot Threads (Th\u1EDDi gian th\u1EF1c)'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'i',
              null,
              '(\u0110ang \u0111\u01B0\u1EE3c xem trong 30 ph\xFAt tr\u01B0\u1EDBc cho t\u1EDBi hi\u1EC7n t\u1EA1i)'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'quote-list' },
            threads.map(function (_ref) {
              var threadId = _ref.threadId,
                  threadTitle = _ref.threadTitle,
                  count = _ref.count;
              return _react2.default.createElement(
                'div',
                { className: 'quote-row', key: threadId },
                _react2.default.createElement(
                  'div',
                  { className: 'quote-title' },
                  _react2.default.createElement(
                    'a',
                    { href: 'showthread.php?t=' + threadId, target: '_blank' },
                    threadTitle
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'quote-bottom' },
                  _react2.default.createElement('i', { className: 'fa fa-arrow-right' }),
                  ' C\xF3 ',
                  count,
                  ' ng\u01B0\u1EDDi \u0111ang xem'
                )
              );
            })
          )
        )
      );
    }
  }]);

  return HotThreads;
}(_react.Component);

exports.default = HotThreads;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LXBtn = function (_Component) {
  _inherits(LXBtn, _Component);

  function LXBtn(prop) {
    _classCallCheck(this, LXBtn);

    var _this = _possibleConstructorReturn(this, (LXBtn.__proto__ || Object.getPrototypeOf(LXBtn)).call(this, prop));

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(LXBtn, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isOpen = this.state.isOpen;

      return _react2.default.createElement(
        'div',
        { className: 'btn-group' },
        _react2.default.createElement(
          'a',
          {
            className: 'btn tooltip-right' + (isOpen ? ' active' : ''),
            href: 'javascript:void(0)',
            style: { fontSize: '20px' },
            target: '_blank',
            'data-tooltip': 'Linh Xinh',
            onClick: function onClick() {
              return _this2.setState({ isOpen: !_this2.state.isOpen });
            }
          },
          'LX'
        ),
        _react2.default.createElement('div', {
          key: 'voz-mask-quote-list',
          style: { display: isOpen ? 'block' : 'none' },
          className: 'voz-mask quote-list-mask',
          onClick: function onClick() {
            return _this2.setState({ isOpen: !_this2.state.isOpen });
          }
        }),
        _react2.default.createElement(
          'div',
          { className: 'btn-options', style: { display: isOpen ? 'block' : 'none', padding: 0 } },
          _react2.default.createElement('iframe', { src: 'https://voz-living.github.io/linhxinh/?extension=true', style: { width: '100%', height: '100%' } })
        )
      );
    }
  }]);

  return LXBtn;
}(_react.Component);

exports.default = LXBtn;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _link = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkHelperControl = (_temp = _class = function (_Component) {
  _inherits(LinkHelperControl, _Component);

  function LinkHelperControl() {
    _classCallCheck(this, LinkHelperControl);

    return _possibleConstructorReturn(this, (LinkHelperControl.__proto__ || Object.getPrototypeOf(LinkHelperControl)).apply(this, arguments));
  }

  _createClass(LinkHelperControl, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.linkHelper(nextProps);
    }
  }, {
    key: 'linkHelper',
    value: function linkHelper() {
      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var linkHelper = nextProps.linkHelper,
          pageStatusId = nextProps.pageStatusId;


      if (linkHelper && pageStatusId !== this.props.pageStatusId) {
        var body = (0, _jquery2.default)('body');
        (0, _link.proccessLink)(body);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return LinkHelperControl;
}(_react.Component), _class.propTypes = {
  linkHelper: _react.PropTypes.bool,
  pageStatusId: _react.PropTypes.number
}, _temp);
exports.default = LinkHelperControl;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _reactDom = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MinimizeQuote = (_temp = _class = function (_Component) {
  _inherits(MinimizeQuote, _Component);

  function MinimizeQuote(props) {
    _classCallCheck(this, MinimizeQuote);

    var _this = _possibleConstructorReturn(this, (MinimizeQuote.__proto__ || Object.getPrototypeOf(MinimizeQuote)).call(this, props));

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(MinimizeQuote, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isOpen = this.state.isOpen;
      var element = this.props.element;


      return _react2.default.createElement(
        'div',
        { className: 'mini-quote-wrapper' },
        _react2.default.createElement('div', {
          className: isOpen ? 'quote open' : 'quote',
          dangerouslySetInnerHTML: { __html: element }
        }),
        _react2.default.createElement(
          'div',
          { style: { textAlign: 'center', position: 'relative' } },
          _react2.default.createElement(
            'div',
            {
              className: 'btn btn-minimize-quote',
              onClick: function onClick() {
                _this2.setState({ isOpen: !_this2.state.isOpen });
              }
            },
            isOpen ? 'Click to collapse quote' : 'Click to see full quote'
          )
        )
      );
    }
  }]);

  return MinimizeQuote;
}(_react.Component), _class.propTypes = {
  element: _react.PropTypes.any
}, _temp);
var MinimizeQuoteControl = (_temp2 = _class2 = function (_Component2) {
  _inherits(MinimizeQuoteControl, _Component2);

  function MinimizeQuoteControl() {
    _classCallCheck(this, MinimizeQuoteControl);

    return _possibleConstructorReturn(this, (MinimizeQuoteControl.__proto__ || Object.getPrototypeOf(MinimizeQuoteControl)).apply(this, arguments));
  }

  _createClass(MinimizeQuoteControl, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.minimizeQuotes(nextProps);
    }
  }, {
    key: 'minimizeQuotes',
    value: function minimizeQuotes() {
      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var isMinimizeQuote = nextProps.isMinimizeQuote,
          maxHeight = nextProps.maxHeight;


      if (isMinimizeQuote) {
        var quotes = (0, _jquery2.default)('table.voz-bbcode-quote');

        if (quotes) {
          quotes.each(function f() {
            var parent = (0, _jquery2.default)(this).parent();

            if (parent.height() > maxHeight) {
              var html = parent.html();
              var wrapper = document.createElement('div');
              wrapper.className = 'quote-minimize-wrapper';
              parent.empty().append(wrapper);
              (0, _reactDom.render)(_react2.default.createElement(MinimizeQuote, { element: html }), wrapper);
            }
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return MinimizeQuoteControl;
}(_react.Component), _class2.propTypes = {
  isMinimizeQuote: _react.PropTypes.bool,
  maxHeight: _react.PropTypes.number
}, _class2.defaultProps = {
  isMinimizeQuote: true,
  maxHeight: 200
}, _temp2);
exports.default = MinimizeQuoteControl;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VOZLivingLoader = function () {
  function VOZLivingLoader() {
    _classCallCheck(this, VOZLivingLoader);

    this.isLoading = false;
    this.element = null;
  }

  _createClass(VOZLivingLoader, [{
    key: 'init',
    value: function init() {
      if (!this.element) {
        this.element = document.createElement('div');
        this.element.id = 'voz-living-loader-wrapper';

        var loader = document.createElement('div');
        loader.id = 'voz-living-loader';

        this.element.appendChild(loader);
        document.body.appendChild(this.element);
      }
      return this;
    }
  }, {
    key: 'start',
    value: function start() {
      if (this.element) {
        this.element.className = 'loading';
      }
      return this;
    }
  }, {
    key: 'stop',
    value: function stop() {
      if (this.element) {
        this.element.className = '';
      }
    }
  }]);

  return VOZLivingLoader;
}();

module.exports = new VOZLivingLoader();

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _uploadImage = __webpack_require__(13);

var _clipboard = __webpack_require__(21);

var _utils = __webpack_require__(12);

var _editor = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Adapt from https://github.com/JoelBesada/pasteboard-extension/blob/master/scripts/main.js
var CREDITS_TEXT = '[INDENT][SIZE="1"][COLOR="Navy"]Hình này được tự động upload và chèn link bởi [URL="https://chrome.google.com/webstore/detail/voz-living/bpfbcbgognjimbmabiiphhofpgdcgbgc"]Voz Living[/URL][/COLOR][/SIZE][/INDENT]';

var PasteToUpload = function (_Component) {
  _inherits(PasteToUpload, _Component);

  function PasteToUpload(props) {
    _classCallCheck(this, PasteToUpload);

    var _this = _possibleConstructorReturn(this, (PasteToUpload.__proto__ || Object.getPrototypeOf(PasteToUpload)).call(this, props));

    _this.bindPasteHandler();

    _this.state = {
      status: null, /* processing, text, copied, cancel */
      text: ''
    };
    return _this;
  }

  _createClass(PasteToUpload, [{
    key: 'bindPasteHandler',
    value: function bindPasteHandler() {
      document.addEventListener('paste', this.pasteHandler.bind(this));
    }
  }, {
    key: 'pasteHandler',
    value: function pasteHandler(e) {
      // restrict handler to text area only
      var target = e.target;
      if (target.tagName.toUpperCase() !== 'TEXTAREA') return true;
      var items = e.clipboardData.items;

      if (items) {
        for (var i = 0; i < items.length; i++) {
          var item = items[i];

          // We're only interested in images
          if (/image/.test(item.type)) {
            console.info('Image in clipboard detected');
            return this.insertImage(item.getAsFile(), (0, _jquery2.default)(target));
          }
        }
      }
      return true;
    }
  }, {
    key: 'insertImage',
    value: function insertImage(image, target) {
      var _this2 = this;

      this.setState({ status: 'processing' });
      if (typeof image === 'string') {
        return setTimeout(this.handleImageData.bind(this, image, target), 1);
      }

      var fileReader = new FileReader();
      fileReader.readAsDataURL(image);
      fileReader.onload = function () {
        _this2.handleImageData(fileReader.result, target);
      };
      return null;
    }
  }, {
    key: 'handleImageData',
    value: function handleImageData(imageData, target) {
      var _this3 = this;

      var position = (0, _editor.insertTextIntoEditor)('__Uploading ..__', target);
      target.prop('disabled', true);
      (0, _uploadImage.uploadImage)(imageData).then(function (res) {
        if (res.url) {
          var text = '[img]' + res.url + '[/img]\n' + CREDITS_TEXT;
          target.prop('disabled', false);
          (0, _editor.insertTextIntoEditor)(text, target, position);
          _this3.setState({ status: 'text', text: text });
        } else {
          target.prop('disabled', false);
          (0, _editor.insertTextIntoEditor)('', target, position);
          _this3.setState({ status: null });
          console.info('fail to upload image');
        }
      });
    }
  }, {
    key: 'copy',
    value: function copy(text) {
      var _this4 = this;

      (0, _clipboard.copyText)(text);
      this.setState({ status: 'copied' });
      setTimeout(function () {
        _this4.setState({ status: null });
      }, 1100);
    }
  }, {
    key: 'render',
    value: function render() {
      if (true) {
        return null;
      } else {
        // const cls = {
        //   'voz-living-image-to-clipboard': true,
        //   'voz-living-image-to-clipboard-processing': this.state.status === 'processing',
        //   'voz-living-image-to-clipboard-text': this.state.status === 'text',
        //   'voz-living-image-to-clipboard-copied': this.state.status === 'copied',
        // };
        // return (
        //   <div className={toClassName(cls)}>
        //     {this.state.status === 'processing' ? (
        //       <span>Uploading ...</span>
        //     ) : null}
        //     {this.state.status === 'text' ? (
        //       <input
        //         id="voz-living-image-to-clipboard-textinput"
        //         type="text"
        //         data-tooltip="Click để copy"
        //         value={this.state.text}
        //         onFocus={this.copy.bind(this, this.state.text)}
        //       />
        //     ) : null}
        //     {this.state.status === 'copied' ? (
        //       <span>Copied</span>
        //     ) : null}
        //   </div>
        // );
      }
    }
  }]);

  return PasteToUpload;
}(_react.Component);

exports.default = PasteToUpload;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(31);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostContent = (_temp = _class = function (_Component) {
  _inherits(PostContent, _Component);

  function PostContent() {
    _classCallCheck(this, PostContent);

    return _possibleConstructorReturn(this, (PostContent.__proto__ || Object.getPrototypeOf(PostContent)).apply(this, arguments));
  }

  _createClass(PostContent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          html = _props.html,
          isLoading = _props.isLoading;

      if (html === null) return null;
      if (isLoading) {
        return _react2.default.createElement(
          'div',
          { style: { textAlign: 'center' } },
          _react2.default.createElement('i', { className: 'fa fa-circle-o-notch fa-spin fa-3x fa-fw', 'aria-hidden': 'true' })
        );
      }
      (0, _link.proccessLink)((0, _jquery2.default)('[id^="post_message"]', html), true);
      return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: html.html() } });
    }
  }]);

  return PostContent;
}(_react.Component), _class.propTypes = {
  html: _react.PropTypes.any,
  isLoading: _react.PropTypes.bool
}, _class.defaultProps = {
  html: null
}, _temp);
exports.default = PostContent;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; // eslint-disable-line no-unused-vars


var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _jqueryInview = __webpack_require__(33);

var _jqueryInview2 = _interopRequireDefault(_jqueryInview);

var _react = __webpack_require__(0);

var _reactRedux = __webpack_require__(7);

var _voz = __webpack_require__(9);

var _postHelper = __webpack_require__(15);

var _postHelper2 = _interopRequireDefault(_postHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostTracker = (_temp = _class = function (_Component) {
  _inherits(PostTracker, _Component);

  function PostTracker(comProps) {
    _classCallCheck(this, PostTracker);

    var _this = _possibleConstructorReturn(this, (PostTracker.__proto__ || Object.getPrototypeOf(PostTracker)).call(this, comProps));

    _this.dispatch = comProps.dispatch;
    _this.startTrack.call(_this);
    window.__postTrackerSetup = _this.startTrack.bind(_this); // FIXME
    return _this;
  }

  _createClass(PostTracker, [{
    key: 'startTrack',
    value: function startTrack() {
      if (/\/showthread\.php/.test(location.href)) {
        try {
          var postInfo = (0, _postHelper2.default)((0, _jquery2.default)(document.body));
          var threadId = parseInt(postInfo.getThreadId(), 10);
          var threadTitle = postInfo.getThreadTitle();
          if (threadId === -1) return;
          var page = parseInt(postInfo.getPage(), 10);
          var posts = (0, _jquery2.default)("table[id^='post']");
          var that = this;
          posts.bind('inview', _lodash2.default.debounce(function (e, isInView) {
            if (!isInView) return;
            var $this = (0, _jquery2.default)(this);
            var postId = parseInt($this.attr('id').match(/(\d+)/)[1], 10);
            var postNum = ~~$this.find('a[id^="postcount"]').attr('name') % 10;;
            var post = {
              threadId: threadId,
              postId: postId,
              postNum: postNum,
              page: page,
              title: threadTitle
            };
            that.props.dispatch((0, _voz.updatePostTracker)(post));
          }, 300));
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return PostTracker;
}(_react.Component), _class.propTypes = {
  dispatch: _react.PropTypes.func
}, _temp);


var mapStateToProps = function mapStateToProps() {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostTracker);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuickBanUser = function (_Component) {
  _inherits(QuickBanUser, _Component);

  function QuickBanUser(props) {
    _classCallCheck(this, QuickBanUser);

    var _this = _possibleConstructorReturn(this, (QuickBanUser.__proto__ || Object.getPrototypeOf(QuickBanUser)).call(this, props));

    _this.hookBanToUser();
    return _this;
  }

  _createClass(QuickBanUser, [{
    key: 'hookBanToUser',
    value: function hookBanToUser() {
      (0, _jquery2.default)(".vbmenu_popup[id^='postmenu_']").each(function () {
        var $this = (0, _jquery2.default)(this);
        var uid = $this.find("a[href*='member.php']").attr('href').match(/\?u=(\d+)/)[1];
        var ignoreRow = (0, _jquery2.default)('<tr> \n        <td class=\'vbmenu_option vbmenu_option_alink\'>\n        <a target=\'_blank\' href=\'https://vozforums.com/profile.php?do=addlist&userlist=ignore&u=' + uid + '\' \n        title=\'M\u1EDF trong tab m\u1EDBi\'><i class="fa fa-ban"/>&nbsp;Add to ban list</a>\n        </td>\n        </tr>');
        $this.find('table tbody').append(ignoreRow);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return QuickBanUser;
}(_react.Component);

exports.default = QuickBanUser;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _coreDecorators = __webpack_require__(2);

var _voz = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuickLink = (0, _coreDecorators.autobind)(_class = (_temp = _class2 = function (_Component) {
  _inherits(QuickLink, _Component);

  function QuickLink(comProps) {
    _classCallCheck(this, QuickLink);

    var _this = _possibleConstructorReturn(this, (QuickLink.__proto__ || Object.getPrototypeOf(QuickLink)).call(this, comProps));

    _this.state = {
      showQuickLink: false
    };
    return _this;
  }

  _createClass(QuickLink, [{
    key: 'addQuickLink',
    value: function addQuickLink() {
      this.props.dispatch((0, _voz.addQuickLink)());
    }
  }, {
    key: 'updateQuickLink',
    value: function updateQuickLink(event, id, key) {
      this.props.dispatch((0, _voz.updateQuickLink)(id, key, event.target.value));
    }
  }, {
    key: 'saveQuickLink',
    value: function saveQuickLink() {
      this.props.dispatch((0, _voz.saveQuickLink)());
    }
  }, {
    key: 'removeQuickLink',
    value: function removeQuickLink(qlink) {
      this.props.dispatch((0, _voz.removeQuickLink)(qlink.id));
    }
  }, {
    key: 'renderAddButton',
    value: function renderAddButton() {
      var _this2 = this;

      var _props$quickLinks = this.props.quickLinks,
          quickLinks = _props$quickLinks === undefined ? [] : _props$quickLinks;


      return _react2.default.createElement(
        'div',
        { className: 'btn-group' },
        _react2.default.createElement(
          'div',
          {
            className: 'btn tooltip-right',
            onClick: function onClick() {
              return _this2.setState({ showQuickLink: !_this2.state.showQuickLink });
            },
            'data-tooltip': 'Add Quick Link'
          },
          _react2.default.createElement('i', { className: 'fa fa-plus' })
        ),
        quickLinks.map(function (qlink) {
          return _react2.default.createElement(
            'a',
            {
              key: qlink.id,
              href: qlink.link,
              className: 'btn'
            },
            qlink.label
          );
        }),
        function () {
          if (_this2.state.showQuickLink) {
            return [_react2.default.createElement('div', {
              key: 'voz-mask-quick-link',
              className: 'voz-mask quick-link-mask',
              onClick: function onClick() {
                return _this2.setState({ showQuickLink: !_this2.state.showQuickLink });
              }
            }), _react2.default.createElement(
              'div',
              { className: 'btn-options', key: 'quick-link' },
              _react2.default.createElement(
                'h3',
                null,
                'Quick Links'
              ),
              _react2.default.createElement(
                'table',
                { className: 'quick-link-table' },
                _react2.default.createElement(
                  'thead',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      'Label'
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Link'
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Action'
                    )
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  null,
                  quickLinks.map(function (qlink) {
                    return _react2.default.createElement(
                      'tr',
                      { key: qlink.id },
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement('input', {
                          value: qlink.label,
                          onChange: function onChange(event) {
                            return _this2.updateQuickLink(event, qlink.id, 'label');
                          }
                        })
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement('input', {
                          value: qlink.link,
                          onChange: function onChange(event) {
                            return _this2.updateQuickLink(event, qlink.id, 'link');
                          }
                        })
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'button',
                          { onClick: function onClick() {
                              return _this2.removeQuickLink(qlink);
                            } },
                          'Remove'
                        )
                      )
                    );
                  })
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'button',
                  { onClick: _this2.addQuickLink },
                  'Add'
                ),
                _react2.default.createElement(
                  'button',
                  { onClick: _this2.saveQuickLink },
                  'Save'
                )
              )
            )];
          }
          return null;
        }()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderAddButton()
      );
    }
  }]);

  return QuickLink;
}(_react.Component), _class2.propTypes = {
  quickLinks: _react.PropTypes.array,
  dispatch: _react.PropTypes.func
}, _temp)) || _class;

var mapStateToProps = function mapStateToProps(state) {
  var quickLinks = state.vozLiving.quickLinks;

  return { quickLinks: quickLinks };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(QuickLink);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp, _class3, _temp2;

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _http = __webpack_require__(5);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _reactDom = __webpack_require__(10);

var _tinyCookie = __webpack_require__(97);

var _tinyCookie2 = _interopRequireDefault(_tinyCookie);

var _coreDecorators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuickPostQuotation = (0, _coreDecorators.autobind)(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(QuickPostQuotation, _PureComponent);

  function QuickPostQuotation() {
    _classCallCheck(this, QuickPostQuotation);

    return _possibleConstructorReturn(this, (QuickPostQuotation.__proto__ || Object.getPrototypeOf(QuickPostQuotation)).apply(this, arguments));
  }

  _createClass(QuickPostQuotation, [{
    key: 'getQuotes',
    value: function getQuotes() {
      var _this2 = this;

      var _props = this.props,
          editor = _props.editor,
          href = _props.href;


      if (editor && href) {
        editor.attr('disabled', 'disabled');

        (0, _http.GET)(href).then(function (response) {
          // eslint-disable-line
          editor.removeAttr('disabled');
          var text = _lodash2.default.trim((0, _jquery2.default)(response).find('#vB_Editor_001_textarea').val());
          var selStart = editor.prop('selectionStart');
          var selEnd = editor.prop('selectionEnd');
          var value = editor.val();
          var textBefore = value.substring(0, selStart);
          var textAfter = value.substring(selEnd, value.length);

          editor.val(textBefore + text + textAfter);
          editor[0].setSelectionRange(selStart + text.length, selStart + text.length);
          editor.focus();

          _this2.clearQuotes();
        });
      }
    }
  }, {
    key: 'clearQuotes',
    value: function clearQuotes() {
      _tinyCookie2.default.set('vbulletin_multiquote', '');
      var httpsOn = '[src="https://vozforums.com/images/buttons/multiquote_on.gif"]';
      var httpsOff = 'https://vozforums.com/images/buttons/multiquote_off.gif';
      var httpOn = '[src="http://vozforums.com/images/buttons/multiquote_on.gif"]';
      var httpOff = 'http://vozforums.com/images/buttons/multiquote_off.gif';

      // this look stupid
      if ((0, _jquery2.default)(httpsOn)) (0, _jquery2.default)(httpsOn).attr('src', httpsOff);
      if ((0, _jquery2.default)(httpOn)) (0, _jquery2.default)(httpOn).attr('src', httpOff);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'voz-living-quick-post-quotation' },
        _react2.default.createElement(
          'div',
          { className: 'text' },
          'Click v\xE0o n\xFAt ',
          _react2.default.createElement('img', { src: 'https://vozforums.com/images/buttons/multiquote_off.gif', alt: '' }),
          ' \u1EDF b\xEAn d\u01B0\u1EDBi-ph\u1EA3i c\u1EE7a m\u1ED7i b\xE0i vi\u1EBFt \u0111\u1EC3 Load Quotes ',
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'control' },
          _react2.default.createElement(
            'a',
            { onClick: this.clearQuotes },
            'Reset Quotes'
          ),
          _react2.default.createElement(
            'a',
            { onClick: this.getQuotes },
            'Load Quotes'
          )
        )
      );
    }
  }]);

  return QuickPostQuotation;
}(_react.PureComponent), _class2.propTypes = {
  editor: _react.PropTypes.any,
  href: _react.PropTypes.string
}, _temp)) || _class;

var QuickPostQuotationControl = (_temp2 = _class3 = function (_PureComponent2) {
  _inherits(QuickPostQuotationControl, _PureComponent2);

  function QuickPostQuotationControl() {
    _classCallCheck(this, QuickPostQuotationControl);

    return _possibleConstructorReturn(this, (QuickPostQuotationControl.__proto__ || Object.getPrototypeOf(QuickPostQuotationControl)).apply(this, arguments));
  }

  _createClass(QuickPostQuotationControl, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.addQuickPostQuotation(nextProps);
    }
  }, {
    key: 'addQuickPostQuotation',
    value: function addQuickPostQuotation() {
      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var isQuickPostQuotation = nextProps.isQuickPostQuotation;


      if (isQuickPostQuotation) {
        var editor = (0, _jquery2.default)('#vB_Editor_QR_textarea');
        if (editor.length === 0 || (0, _jquery2.default)('.voz-living-quick-quote-quotation').length > 0) return;

        var editorCont = editor.parents('#vB_Editor_QR').eq(0);
        var toolbar = (0, _jquery2.default)('<div class="voz-living-quick-quote-quotation"></div>');
        var href = (0, _jquery2.default)("a:has(>img[src*='images/buttons/reply.gif'])")[0].href;

        if (editorCont.length === 0) return;
        editorCont.append(toolbar);

        (0, _reactDom.render)(_react2.default.createElement(QuickPostQuotation, { href: href, editor: editor }), toolbar[0]);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return QuickPostQuotationControl;
}(_react.PureComponent), _class3.propTypes = {
  isQuickPostQuotation: _react.PropTypes.bool
}, _temp2);
exports.default = QuickPostQuotationControl;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _voz = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuoteList = (_temp = _class = function (_Component) {
  _inherits(QuoteList, _Component);

  function QuoteList(comProps) {
    _classCallCheck(this, QuoteList);

    var _this = _possibleConstructorReturn(this, (QuoteList.__proto__ || Object.getPrototypeOf(QuoteList)).call(this, comProps));

    _this.state = {
      showQuoteList: false
    };
    _this.dispatch = comProps.dispatch;
    return _this;
  }

  _createClass(QuoteList, [{
    key: 'getTime',
    value: function getTime(timeStamp) {
      var date = new Date(timeStamp);
      /* eslint-disable max-len */
      return date.getHours() + ':' + date.getMinutes() + ' ' + date.getDay() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
      /* eslint-enable max-len */
    }
  }, {
    key: 'toggleQuoteList',
    value: function toggleQuoteList() {
      var showQuoteList = this.state.showQuoteList;
      var countUnseen = this.props.countUnseen;


      if (showQuoteList === false && countUnseen !== 0) {
        this.dispatch((0, _voz.markAllQuoteSeen)());
        chrome.runtime.sendMessage({ continueNotify: true });
      }
      this.setState({ showQuoteList: !showQuoteList });
    }
  }, {
    key: 'renderQuote',
    value: function renderQuote(quote) {
      return _react2.default.createElement(
        'div',
        { className: 'quote-row', key: quote.post.id },
        _react2.default.createElement(
          'div',
          { className: 'quote-title' },
          _react2.default.createElement(
            'a',
            { href: 'showthread.php?p=' + quote.post.id + '#post' + quote.post.id, target: '_blank' },
            quote.thread.title
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'quote-content' },
          quote.post.content
        ),
        _react2.default.createElement(
          'div',
          { className: 'quote-bottom' },
          'By ',
          _react2.default.createElement(
            'a',
            {
              className: 'quote-item-author',
              href: '/member.php?u=' + quote.author.userid, target: '_blank'
            },
            '(',
            quote.author.username,
            ')'
          ),
          ' @ ',
          this.getTime(quote.post.datetime)
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var notifyQuote = this.props.settings.notifyQuote;


      if (!notifyQuote) return null;

      var _props = this.props,
          quoteList = _props.quoteList,
          countUnseen = _props.countUnseen;


      return _react2.default.createElement(
        'div',
        { className: 'btn-group' },
        _react2.default.createElement(
          'div',
          {
            className: 'btn tooltip-right ' + (this.state.showQuoteList ? 'active' : ''),
            onClick: function onClick() {
              return _this2.toggleQuoteList();
            },
            'data-tooltip': 'Quote list'
          },
          _react2.default.createElement('i', { className: 'fa fa-quote-right' }),
          _react2.default.createElement(
            'div',
            { className: 'badge' },
            countUnseen
          )
        ),
        function () {
          if (_this2.state.showQuoteList) {
            return [_react2.default.createElement('div', {
              key: 'voz-mask-quote-list',
              className: 'voz-mask quote-list-mask',
              onClick: function onClick() {
                return _this2.setState({ showQuoteList: !_this2.state.showQuoteList });
              }
            }), _react2.default.createElement(
              'div',
              { className: 'btn-options', key: 'quote-list' },
              _react2.default.createElement(
                'h3',
                null,
                'Quotes'
              ),
              _react2.default.createElement(
                'div',
                { className: 'quote-list' },
                quoteList.map(function (quote) {
                  return _this2.renderQuote(quote);
                })
              )
            )];
          }
          return null;
        }()
      );
    }
  }]);

  return QuoteList;
}(_react.Component), _class.propTypes = {
  settings: _react.PropTypes.object,
  dispatch: _react.PropTypes.func,
  quoteList: _react.PropTypes.array,
  countUnseen: _react.PropTypes.number
}, _class.defaultProps = {
  quoteList: [],
  settings: {},
  countUnseen: 0
}, _temp);


var mapStateToProps = function mapStateToProps(state) {
  var _state$vozLiving = state.vozLiving,
      quoteList = _state$vozLiving.quoteList,
      settings = _state$vozLiving.settings;

  var countUnseen = quoteList.reduce(function (r, q) {
    var outResult = r;
    if (q.hasSeen === false) outResult += 1;
    return outResult;
  }, 0);

  return { quoteList: quoteList, settings: settings, countUnseen: countUnseen };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(QuoteList);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _coreDecorators = __webpack_require__(2);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _mousetrap = __webpack_require__(17);

var _mousetrap2 = _interopRequireDefault(_mousetrap);

var _http = __webpack_require__(5);

var _utils = __webpack_require__(12);

var _voz = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReloadButton = (0, _coreDecorators.autobind)(_class = (_temp = _class2 = function (_Component) {
  _inherits(ReloadButton, _Component);

  function ReloadButton() {
    _classCallCheck(this, ReloadButton);

    return _possibleConstructorReturn(this, (ReloadButton.__proto__ || Object.getPrototypeOf(ReloadButton)).apply(this, arguments));
  }

  _createClass(ReloadButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.bindReloadButton();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.bindReloadButton(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _mousetrap2.default.unbind(['command+r', 'ctrl+r']);
    }
  }, {
    key: 'bindReloadButton',
    value: function bindReloadButton() {
      var _this2 = this;

      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      var view = (0, _utils.getCurrentView)();

      if (view === 'thread-list' && nextProps.isReloadButton) {
        _mousetrap2.default.bind(['command+r', 'ctrl+r'], function (event) {
          event.preventDefault();
          _this2.reloadPage();
        });
      } else {
        _mousetrap2.default.unbind(['command+r', 'ctrl+r']);
      }
    }
  }, {
    key: 'reloadPage',
    value: function reloadPage() {
      var dispatch = this.props.dispatch;


      window.vozLivingLoader.start();

      (0, _http.GET)(location.href).then(function (response) {
        // eslint-disable-line
        var responseThreadList = (0, _jquery2.default)('#threadslist', response);
        var currentThreadList = (0, _jquery2.default)('#threadslist');
        currentThreadList.replaceWith(responseThreadList);

        dispatch((0, _voz.getThreadList)());

        window.vozLivingLoader.stop();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var isReloadButton = this.props.isReloadButton;

      var view = (0, _utils.getCurrentView)();

      if (view === 'thread-list' && isReloadButton) {
        return _react2.default.createElement(
          'div',
          { className: 'btn-group' },
          _react2.default.createElement(
            'div',
            {
              className: 'btn tooltip-right',
              onClick: this.reloadPage,
              style: { fontSize: '20px' },
              'data-tooltip': 'Fast Refresh'
            },
            _react2.default.createElement('i', { className: 'fa fa-refresh' })
          )
        );
      }
      return null;
    }
  }]);

  return ReloadButton;
}(_react.Component), _class2.propTypes = {
  dispatch: _react.PropTypes.func,
  isReloadButton: _react.PropTypes.bool
}, _temp)) || _class;

exports.default = ReloadButton;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _coreDecorators = __webpack_require__(2);

var _Command2 = __webpack_require__(14);

var _Command3 = _interopRequireDefault(_Command2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommandFormatBlock = (0, _coreDecorators.autobind)(_class = (_temp = _class2 = function (_Command) {
  _inherits(CommandFormatBlock, _Command);

  function CommandFormatBlock(props) {
    _classCallCheck(this, CommandFormatBlock);

    var superProps = {
      command: 'formatBlock',
      value: props.block
    };
    return _possibleConstructorReturn(this, (CommandFormatBlock.__proto__ || Object.getPrototypeOf(CommandFormatBlock)).call(this, superProps));
  }

  _createClass(CommandFormatBlock, [{
    key: 'onClick',
    value: function onClick(e) {
      e.preventDefault();
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'fore-wrapper' },
        _react2.default.createElement('i', { className: 'fa fa-font', style: { color: '#C96' } }),
        _react2.default.createElement(
          'div',
          { className: 'fore-palette' },
          this.props.palette.map(function (color) {
            return _react2.default.createElement(_Command3.default, {
              command: _this2.props.command,
              value: color,
              extraProps: {
                className: 'palette-item',
                style: { backgroundColor: color }
              }
            });
          })
        )
      );
    }
  }]);

  return CommandFormatBlock;
}(_Command3.default), _class2.propTypes = {
  command: _react.PropTypes.string.isRequired,
  palette: _react.PropTypes.arrayOf(_react.PropTypes.sring)
}, _temp)) || _class;

exports.default = CommandFormatBlock;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _coreDecorators = __webpack_require__(2);

var _Command2 = __webpack_require__(14);

var _Command3 = _interopRequireDefault(_Command2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommandFormatBlock = (0, _coreDecorators.autobind)(_class = (_temp = _class2 = function (_Command) {
  _inherits(CommandFormatBlock, _Command);

  function CommandFormatBlock() {
    _classCallCheck(this, CommandFormatBlock);

    return _possibleConstructorReturn(this, (CommandFormatBlock.__proto__ || Object.getPrototypeOf(CommandFormatBlock)).apply(this, arguments));
  }

  _createClass(CommandFormatBlock, [{
    key: 'onClick',
    value: function onClick(e) {
      var _props = this.props,
          block = _props.block,
          showDefaultUI = _props.showDefaultUI;

      document.execCommand('formatBlock', showDefaultUI, block);
      e.preventDefault();
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'a',
        { href: '#', 'data-command': '#', onClick: this.onClick },
        this.props.block.toUpperCase()
      );
    }
  }]);

  return CommandFormatBlock;
}(_Command3.default), _class2.propTypes = {
  block: _react.PropTypes.string.isRequired
}, _class2.defaultProps = {
  block: 'p'
}, _temp)) || _class;

exports.default = CommandFormatBlock;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _coreDecorators = __webpack_require__(2);

var _Command2 = __webpack_require__(14);

var _Command3 = _interopRequireDefault(_Command2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommandFormatBlock = (0, _coreDecorators.autobind)(_class = (_temp = _class2 = function (_Command) {
  _inherits(CommandFormatBlock, _Command);

  function CommandFormatBlock() {
    _classCallCheck(this, CommandFormatBlock);

    return _possibleConstructorReturn(this, (CommandFormatBlock.__proto__ || Object.getPrototypeOf(CommandFormatBlock)).apply(this, arguments));
  }

  _createClass(CommandFormatBlock, [{
    key: 'onClick',
    value: function onClick(e) {
      var _props = this.props,
          command = _props.command,
          showDefaultUI = _props.showDefaultUI,
          ask = _props.ask,
          def = _props.def;

      var value = window.prompt(ask, def);
      if (value !== null) {
        document.execCommand(command, showDefaultUI, value);
      }
      e.preventDefault();
      return false;
    }
  }]);

  return CommandFormatBlock;
}(_Command3.default), _class2.propTypes = {
  command: _react.PropTypes.string.isRequired,
  ask: _react.PropTypes.string.isRequired,
  def: _react.PropTypes.string.isRequired
}, _temp)) || _class;

exports.default = CommandFormatBlock;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _coreDecorators = __webpack_require__(2);

var _reactDom = __webpack_require__(10);

var _Command = __webpack_require__(14);

var _Command2 = _interopRequireDefault(_Command);

var _CommandFormatBlock = __webpack_require__(58);

var _CommandFormatBlock2 = _interopRequireDefault(_CommandFormatBlock);

var _CommandColor = __webpack_require__(57);

var _CommandColor2 = _interopRequireDefault(_CommandColor);

var _CommandPrompt = __webpack_require__(59);

var _CommandPrompt2 = _interopRequireDefault(_CommandPrompt);

var _emotions = __webpack_require__(29);

var _emotions2 = _interopRequireDefault(_emotions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// import { insertTextIntoEditor } from '../common/editor';


var emoMap = _emotions2.default.reduce(function (acc, _ref) {
  var text = _ref.text,
      src = _ref.src;
  return Object.assign(acc, _defineProperty({}, src, text));
}, {});
/** TODOs:
 * Handle image paste & update
 * Insert emo panels and handle insertion
 * Insert quotes
 * Handle Advanced editor page
 */
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return rgb && rgb.length === 4 ? '#' + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}

function ensureProperColor(color) {
  if (/rgba?/.test(color)) return rgb2hex(color);
  return color;
}

function wrappingArround(_ref2, pr, po) {
  var pre = _ref2.pre,
      post = _ref2.post;

  if (typeof pre !== 'undefined' && pre !== null) pre.unshift(pr);
  if (typeof post !== 'undefined' && post !== null) post.push(po);
}

function parseToBB(node, nextNode) {
  var bbcodes = [];
  var pre = [];
  var post = [];
  var pp = wrappingArround.bind(null, { pre: pre, post: post });
  var processBasedOnStyle = true;
  if (typeof node.getAttribute === 'undefined' || !(node.getAttribute('contenteditable') === 'true' || node.getAttribute('contenteditable') === true)) {
    switch (node.nodeType) {
      case 1:
        {
          // tag
          switch (node.tagName.toUpperCase()) {
            case 'UL':
              {
                pp('[LIST]', '[/LIST]');processBasedOnStyle = true;break;
              }
            case 'OL':
              {
                pp('[LIST=1]', '[/LIST]');break;
              }
            case 'LI':
              {
                pp('[*]');break;
              }
            case 'B':
              {
                pp('[B]', '[/B]');break;
              }
            case 'U':
              {
                pp('[U]', '[/U]');break;
              }
            case 'I':
              {
                pp('[I]', '[/I]');break;
              }
            case 'STRIKE':
              {
                pp('[STRIKE]', '[/STRIKE]');break;
              }
            case 'DIV':
              {
                pp(null, '\n');break;
              }
            case 'P':
              {
                pp('\n', '\n');break;
              }
            case 'BR':
              {
                pp('\n');break;
              }
            case 'BLOCKQUOTE':
              {
                pp('[INDENT]', '[/INDENT]');break;
              }
            case 'IMG':
              {
                var src = node.src;

                if (/:\/\/vozforums\.com\/images\//.test(src)) {
                  var path = src.split(/:\/\/vozforums\.com/)[1];
                  if (emoMap[path]) return emoMap[path];
                }
                return '[IMG]' + src + '[/IMG]';
              }
            case 'FONT':
              {
                var color = node.color;

                if (color) {
                  pp('[COLOR="' + ensureProperColor(color) + '"]', '[/COLOR]');
                }
                break;
              }
            case 'A':
              {
                var href = node.href;

                if (href && href.length > 0) {
                  pp('[URL=' + href + ']', '[/URL]');
                }
                break;
              }

            case 'H1':
              {
                pp('[B][SIZE="7"]', '[/SIZE][/B]\n');break;
              }
            case 'H2':
              {
                pp('[B][SIZE="6"]', '[/SIZE][/B]\n');break;
              }
            case 'H3':
              {
                pp('[B][SIZE="5"]', '[/SIZE][/B]\n');break;
              }
            case 'H4':
              {
                pp('[B][SIZE="4"]', '[/SIZE][/B]\n');break;
              }
            case 'TABLE':
            case 'TR':
              {
                pp(null, '\n');
                break;
              }
            case 'IFRAME':
              {
                var _src = node.src;

                if (/video/.test(_src)) return '\n' + _src + '\n';
                return '';
              }
          }
          if (processBasedOnStyle === true) {
            var _node$style = node.style,
                textAlign = _node$style.textAlign,
                fontWeight = _node$style.fontWeight,
                fontStyle = _node$style.fontStyle,
                textDecoration = _node$style.textDecoration,
                _color = _node$style.color;

            switch (textAlign.toUpperCase()) {
              case 'LEFT':
                {
                  pp('[LEFT]', '[/LEFT]');break;
                }
              case 'RIGHT':
                {
                  pp('[RIGHT]', '[/RIGHT]');break;
                }
              case 'CENTER':
                {
                  pp('[CENTER]', '[/CENTER]');break;
                }
            }
            if (fontWeight === 'bold' || ~~fontWeight >= 600) {
              pp('[B]', '[/B]');
            }
            if (fontStyle === 'italic') pp('[I]', ['/I']);
            if (textDecoration === 'underline') pp('[U]', ['/U']);
            if (_color && _color.trim() !== '') pp('[COLOR="' + ensureProperColor(_color) + '"]', '[/COLOR]');
          }
          break;
        }
      case 3:
        {
          if (nextNode && nextNode.tagName && ['DIV', 'P'].indexOf(nextNode.tagName.toUpperCase()) > -1) {
            return node.textContent + '\n';
          }
          return node.textContent;
        } // textNode
      case 8:
        return null; // comment
      default:
        return null;
    }
  } else {
    // node.childNodes.forEach(cnode => {
    //   if (cnode.nodeType === 3) {
    //     const text = cnode.textContent;
    //     const rnode = document.createElement('div');
    //     rnode.textContent = text;
    //     node.replaceChild(rnode, cnode);
    //   }
    // });
  }
  node.childNodes.forEach(function (cnode, i) {
    var out = parseToBB(cnode, node.childNodes[i + 1]);
    if (out !== null) {
      bbcodes.push(out);
    }
  });
  return pre.concat(bbcodes).concat(post).join('');
}

var Editor = (0, _coreDecorators.autobind)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Editor, _Component);

  function Editor(comProps) {
    _classCallCheck(this, Editor);

    var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, comProps));

    _this.editableNode = null;
    _this.onChangeThrottled = _lodash2.default.throttle(_this.onChange, 500);
    return _this;
  }

  _createClass(Editor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return false;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      __webpack_require__(90);
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      console.log('Change');
      var target = this.props.target;

      var bbcode = parseToBB(this.editableNode);
      document.getElementById(target).value = bbcode;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log('Editor');
      return _react2.default.createElement(
        'div',
        { className: 'editor-wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'toolbar' },
          _react2.default.createElement(_Command2.default, { command: 'undo', faClass: 'undo' }),
          _react2.default.createElement(_Command2.default, { command: 'redo', faClass: 'repeat' }),
          _react2.default.createElement(_CommandColor2.default, {
            command: 'forecolor',
            palette: ['black', 'sienna', 'darkolivegreen', 'darkgreen', 'darkslateblue', 'navy', 'indigo', 'darkslategray', 'darkred', 'darkorange', 'olive', 'green', 'teal', 'blue', 'slategray', 'dimgray', 'red', 'sandybrown', 'yellowgreen', 'seagreen', 'mediumturquoise', 'royalblue', 'purple', 'gray', 'magenta', 'orange', 'yellow', 'lime', 'cyan', 'deepskyblue', 'darkorchid', 'silver', 'pink', 'wheat', 'lemonchiffon', 'palegreen', 'paleturquoise', 'lightblue', 'plum', 'white']
          }),
          _react2.default.createElement(_Command2.default, { command: 'bold', faClass: 'bold' }),
          _react2.default.createElement(_Command2.default, { command: 'italic', faClass: 'italic' }),
          _react2.default.createElement(_Command2.default, { command: 'underline', faClass: 'underline' }),
          _react2.default.createElement(_Command2.default, { command: 'strikeThrough', faClass: 'strikethrough' }),
          _react2.default.createElement(_Command2.default, { command: 'justifyLeft', faClass: 'align-left' }),
          _react2.default.createElement(_Command2.default, { command: 'justifyCenter', faClass: 'align-center' }),
          _react2.default.createElement(_Command2.default, { command: 'justifyRight', faClass: 'align-right' }),
          _react2.default.createElement(_Command2.default, { command: 'indent', faClass: 'indent' }),
          _react2.default.createElement(_Command2.default, { command: 'outdent', faClass: 'outdent' }),
          _react2.default.createElement(_Command2.default, { command: 'insertUnorderedList', faClass: 'list-ul' }),
          _react2.default.createElement(_Command2.default, { command: 'insertOrderedList', faClass: 'list-ol' }),
          _react2.default.createElement(_CommandFormatBlock2.default, { block: 'h1' }),
          _react2.default.createElement(_CommandFormatBlock2.default, { block: 'h2' }),
          _react2.default.createElement(_CommandFormatBlock2.default, { block: 'h3' }),
          _react2.default.createElement(_CommandFormatBlock2.default, { block: 'h4' }),
          _react2.default.createElement(_CommandPrompt2.default, { command: 'createlink', faClass: 'link', ask: 'Link:', def: 'http://' }),
          _react2.default.createElement(_Command2.default, { command: 'unlink', faClass: 'unlink' }),
          _react2.default.createElement(_CommandPrompt2.default, { command: 'insertimage', faClass: 'image', ask: 'Link:', def: 'http://' }),
          _react2.default.createElement(_CommandFormatBlock2.default, { block: 'p' })
        ),
        _react2.default.createElement('div', {
          className: 'editor',
          contentEditable: 'true',
          onInput: this.onChangeThrottled,
          ref: function ref(editableNode) {
            _this2.editableNode = editableNode;
          },
          dangerouslySetInnerHTML: { __html: '<div>left<br><div style="text-align: right;">right<br><div style="text-align: center;">right</div></div>center<br><br></div><div><br></div><div>Test normal test</div><!-- react-text: 123 -->Test text with emo<!-- /react-text --><img class="sticker" alt="https://i.imgur.com/gzNgdi2.gif" src="https://i.imgur.com/gzNgdi2.gif"><div><!-- react-text: 126 -->Test <!-- /react-text --><b>bold </b><!-- react-text: 128 -->text<!-- /react-text --></div><div><!-- react-text: 130 -->Test <!-- /react-text --><i>italic</i><!-- react-text: 132 --> text<!-- /react-text --><br><!-- react-text: 134 -->shift enter<!-- /react-text --></div><div><!-- react-text: 136 -->Test <!-- /react-text --><u>underline</u><!-- react-text: 138 --> text<!-- /react-text --></div><div><!-- react-text: 140 -->Test <!-- /react-text --><u><strike>strikethrough and underline</strike></u><!-- react-text: 143 -->&nbsp;text<!-- /react-text --></div><div><!-- react-text: 145 -->test <!-- /react-text --><a href="https://vozforums.com/showthread.php?p=124291205#">hyperlink</a><!-- react-text: 147 -->&nbsp;&nbsp;<!-- /react-text --></div><p>Test P</p><p><!-- react-text: 150 -->Test voz emo&nbsp;<!-- /react-text --><img alt=":sexy:" src="https://vozforums.com/images/smilies/Off/sexy_girl.gif"><br></p><p style="text-align: left;">left</p><p style="text-align: center;">center<br>center</p><p style="text-align: right;">right<br><div style="text-align: left;">dsad</div></p>' }
        })
      );
    }
  }]);

  return Editor;
}(_react.Component), _class2.propTypes = {
  target: _react.PropTypes.string
}, _temp)) || _class;

exports.default = Editor;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;
// import { insertTextIntoEditor } from '../common/editor';


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _coreDecorators = __webpack_require__(2);

var _reactDom = __webpack_require__(10);

var _Editor = __webpack_require__(60);

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RichEditor = (0, _coreDecorators.autobind)(_class = (_temp = _class2 = function (_Component) {
  _inherits(RichEditor, _Component);

  function RichEditor(comProps) {
    _classCallCheck(this, RichEditor);

    return _possibleConstructorReturn(this, (RichEditor.__proto__ || Object.getPrototypeOf(RichEditor)).call(this, comProps));
  }

  _createClass(RichEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return false;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var target = (0, _jquery2.default)('form#qrform');
      var $editor = (0, _jquery2.default)('<div class="vozliving-editor"></div>');
      $editor.insertBefore(target);
      (0, _reactDom.render)(_react2.default.createElement(_Editor2.default, { target: 'vB_Editor_QR_textarea' }), $editor[0]);
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('RichEditor');
      return null;
    }
  }]);

  return RichEditor;
}(_react.Component), _class2.propTypes = {}, _temp)) || _class;

exports.default = RichEditor;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _http = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cheerio = __webpack_require__(16);

/* eslint-disable new-cap */

var LazyPost = (_temp = _class = function (_Component) {
  _inherits(LazyPost, _Component);

  function LazyPost(props) {
    _classCallCheck(this, LazyPost);

    var _this = _possibleConstructorReturn(this, (LazyPost.__proto__ || Object.getPrototypeOf(LazyPost)).call(this, props));

    _this.state = {
      loaded: false,
      loading: false,
      html: ''
    };
    return _this;
  }

  _createClass(LazyPost, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getPost();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.postId !== this.props.postId || !_lodash2.default.isEqual(nextState, this.state);
    }
  }, {
    key: 'getPost',
    value: function getPost() {
      var _this2 = this;

      var storeKey = 'voz_living_post_' + this.props.postId;
      var storeHtml = window.localStorage.getItem(storeKey);
      if (storeHtml !== null) {
        this.loadHtml(storeHtml);
      } else {
        this.loadPost().then(function (html) {
          _this2.loadHtml(html);
          window.localStorage.setItem(storeKey, html);
        });
      }
    }
  }, {
    key: 'loadHtml',
    value: function loadHtml(html) {
      this.setState({
        html: { __html: html.replace(/Sent from my.*/, '') },
        loaded: true,
        loading: false
      });
    }
  }, {
    key: 'loadPost',
    value: function loadPost() {
      this.setState({ loading: true });
      return (0, _http.GET)('//vozforums.com/showpost.php?p=' + this.props.postId).then(function (html) {
        var $ = cheerio.load(html);
        return $.html('.voz-postbit');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.loaded && !this.state.loading) {
        return _react2.default.createElement('div', { dangerouslySetInnerHTML: this.state.html });
      } else if (this.loading) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading post ',
          this.props.postId
        );
      }
      return _react2.default.createElement('div', null);
    }
  }]);

  return LazyPost;
}(_react.Component), _class.propTypes = {
  postId: _react.PropTypes.number
}, _temp);
exports.default = LazyPost;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _voz = __webpack_require__(9);

var _LazyPost = __webpack_require__(62);

var _LazyPost2 = _interopRequireDefault(_LazyPost);

var _openNewTab = __webpack_require__(32);

var _openNewTab2 = _interopRequireDefault(_openNewTab);

var _utils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SavedPostSideBarIcon = (_temp = _class = function (_Component) {
  _inherits(SavedPostSideBarIcon, _Component);

  function SavedPostSideBarIcon(comProps) {
    _classCallCheck(this, SavedPostSideBarIcon);

    var _this = _possibleConstructorReturn(this, (SavedPostSideBarIcon.__proto__ || Object.getPrototypeOf(SavedPostSideBarIcon)).call(this, comProps));

    _this.dispatch = comProps.dispatch;
    _this.state = {
      showList: false,
      showFullInfo: false
    };
    return _this;
  }

  _createClass(SavedPostSideBarIcon, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !_lodash2.default.isEqual(nextProps, this.props) || !_lodash2.default.isEqual(nextState, this.state);
    }
  }, {
    key: 'openPostInNewTab',
    value: function openPostInNewTab(postId) {
      (0, _openNewTab2.default)('/showthread.php?p=' + postId);
      return false;
    }
  }, {
    key: 'unsavePost',
    value: function unsavePost(postId) {
      this.dispatch((0, _voz.unsavePost)(postId));
      return false;
    }
  }, {
    key: 'renderPost',
    value: function renderPost(postId) {
      var openInNewTab = this.openPostInNewTab.bind(this, postId);
      var unsavePostClick = this.unsavePost.bind(this, postId);
      return _react2.default.createElement(
        'div',
        { className: 'bookmark-item-wrapper', key: postId },
        _react2.default.createElement(
          'div',
          { className: 'bookmark-tools' },
          _react2.default.createElement(
            'a',
            { href: 'javscript:void(0)', className: 'bookmark-remove', onClick: unsavePostClick },
            _react2.default.createElement('i', { className: 'fa fa-trash' })
          ),
          _react2.default.createElement(
            'a',
            { href: 'javscript:void(0)', className: 'open-post-new-tab', onClick: openInNewTab },
            _react2.default.createElement('i', { className: 'fa fa-external-link' })
          )
        ),
        _react2.default.createElement(_LazyPost2.default, { postId: postId })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var savedPosts = this.props.savedPosts;


      return _react2.default.createElement(
        'div',
        { className: 'btn-group' },
        _react2.default.createElement(
          'div',
          {
            className: 'btn tooltip-right ' + (this.state.showList ? 'active' : ''),
            onClick: function onClick() {
              return _this2.setState({ showList: !_this2.state.showList });
            },
            'data-tooltip': 'B\xE0i \u0111\xE1nh d\u1EA5u'
          },
          _react2.default.createElement('i', { className: 'fa fa-bookmark' })
        ),
        function () {
          if (_this2.state.showList) {
            return [_react2.default.createElement('div', {
              key: 'voz-mask-quote-list',
              className: 'voz-mask quote-list-mask',
              onClick: function onClick() {
                return _this2.setState({ showList: !_this2.state.showList });
              }
            }), _react2.default.createElement(
              'div',
              {
                className: (0, _utils.toClassName)({
                  'btn-options': true,
                  'bookmark-list': true,
                  'hide-full-post-info': !_this2.state.showFullInfo
                }),
                key: 'quote-list'
              },
              _react2.default.createElement(
                'h3',
                null,
                'B\xE0i vi\u1EBFt \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u'
              ),
              _react2.default.createElement(
                'div',
                { className: 'show-full-post-option' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Hi\u1EC7n to\xE0n b\u1ED9 th\xF4ng tin',
                  _react2.default.createElement('input', {
                    type: 'checkbox',
                    checked: _this2.state.showFullInfo,
                    onChange: function onChange() {
                      return _this2.setState({ showFullInfo: !_this2.state.showFullInfo });
                    }
                  })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'quote-list' },
                Object.keys(savedPosts).map(function (postId) {
                  return _this2.renderPost(parseInt(postId, 10), savedPosts[postId]);
                })
              )
            )];
          }
          return null;
        }()
      );
    }
  }]);

  return SavedPostSideBarIcon;
}(_react.Component), _class.propTypes = {
  dispatch: _react.PropTypes.func,
  savedPosts: _react.PropTypes.object
}, _temp);


var mapStateToProps = function mapStateToProps(state) {
  var savedPosts = state.vozLiving.savedPosts;
  return { savedPosts: savedPosts };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SavedPostSideBarIcon);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; // eslint-disable-line no-unused-vars


var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _jqueryInview = __webpack_require__(33);

var _jqueryInview2 = _interopRequireDefault(_jqueryInview);

var _react = __webpack_require__(0);

var _reactRedux = __webpack_require__(7);

var _voz = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SavedPostThreadBinder = (_temp = _class = function (_Component) {
  _inherits(SavedPostThreadBinder, _Component);

  function SavedPostThreadBinder(comProps) {
    _classCallCheck(this, SavedPostThreadBinder);

    var _this = _possibleConstructorReturn(this, (SavedPostThreadBinder.__proto__ || Object.getPrototypeOf(SavedPostThreadBinder)).call(this, comProps));

    _this.dispatch = comProps.dispatch;
    _this.bookmarks = [];
    return _this;
  }

  _createClass(SavedPostThreadBinder, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.bindToPosts();
      this.componentWillUpdate(this.props);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (nextProps.pageStatusId !== this.props.pageStatusId) {
        this.bookmarks = [];
        this.bindToPosts();
      }
      var savedPosts = nextProps.savedPosts;

      this.bookmarks.forEach(function (_ref) {
        var $bookmark = _ref.$bookmark,
            postId = _ref.postId;

        if (savedPosts[postId]) {
          if (!$bookmark.hasClass('bookmarked')) {
            $bookmark.addClass('bookmarked');
            $bookmark.attr('data-tooltip', 'Bỏ đánh dấu');
          }
        } else {
          if ($bookmark.hasClass('bookmarked')) {
            $bookmark.removeClass('bookmarked');
            $bookmark.attr('data-tooltip', 'Đánh dấu');
          }
        }
      });
    }
  }, {
    key: 'bindToPosts',
    value: function bindToPosts() {
      var _this2 = this;

      (0, _jquery2.default)('.voz-postbit').each(function (i, e) {
        var $post = (0, _jquery2.default)(e);
        try {
          var postId = parseInt($post.attr('id').match(/(\d+)/)[1], 10);
          var $bookmark = (0, _jquery2.default)('<a \n          href="#"\n          data-tooltip="\u0110\xE1nh d\u1EA5u"\n          class="voz-living-post-bookmark tooltip-left">\n            <i class="fa fa-bookmark" />\n          </a>');
          $bookmark.on('click', _this2.handleClick.bind(_this2, postId));
          $post.find('.thead').prepend($bookmark);
          _this2.bookmarks.push({ $bookmark: $bookmark, postId: postId });
        } catch (er) {
          console.error(er);
          return;
        }
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(postId) {
      if (this.props.savedPosts[postId]) {
        this.dispatch((0, _voz.unsavePost)(postId));
      } else {
        this.dispatch((0, _voz.savePost)(postId));
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return SavedPostThreadBinder;
}(_react.Component), _class.propTypes = {
  dispatch: _react.PropTypes.func,
  savedPosts: _react.PropTypes.object,
  pageStatusId: _react.PropTypes.number
}, _temp);


var mapStateToProps = function mapStateToProps(state) {
  var savedPosts = state.vozLiving.savedPosts;
  return { savedPosts: savedPosts };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SavedPostThreadBinder);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import _ from 'lodash';


var SettingOptions = function (_Component) {
  _inherits(SettingOptions, _Component);

  function SettingOptions() {
    _classCallCheck(this, SettingOptions);

    return _possibleConstructorReturn(this, (SettingOptions.__proto__ || Object.getPrototypeOf(SettingOptions)).apply(this, arguments));
  }

  _createClass(SettingOptions, [{
    key: 'openOptions',
    value: function openOptions() {
      chrome.runtime.sendMessage({ service: 'open-options' });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'btn-group' },
        _react2.default.createElement(
          'div',
          {
            className: 'btn tooltip-right',
            onClick: this.openOptions,
            'data-tooltip': 'Options'
          },
          _react2.default.createElement('i', { className: 'fa fa-cogs' })
        )
      );
    }
  }]);

  return SettingOptions;
}(_react.Component);

exports.default = SettingOptions;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _utils = __webpack_require__(12);

var _clipboard = __webpack_require__(21);

var _editor = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function isInPost(target) {
  do {
    if (target.classList.contains('voz-post-message') === true) {
      return target;
    }
    target = target.parentElement;
  } while (target !== null);
  return false;
}

var SmartSelection = function (_Component) {
  _inherits(SmartSelection, _Component);

  function SmartSelection(props) {
    _classCallCheck(this, SmartSelection);

    var _this = _possibleConstructorReturn(this, (SmartSelection.__proto__ || Object.getPrototypeOf(SmartSelection)).call(this, props));

    _this.bindHandlers = function () {
      document.addEventListener('mouseup', _this.mouseUpHandler);
    };

    _this.mouseUpHandler = function (e) {
      var features = [];
      var textSel = window.getSelection().toString();
      var meta = {};
      if (textSel.trim() === '') {
        if (_this.state.features.length > 0) {
          setTimeout(function () {
            return _this.setState({ features: [] });
          }, 200);
        }
        return; // nothing here
      }
      features.push(_this.fCopy());
      features.push(_this.fGG());
      var post = isInPost(e.target);
      if (post !== false) {
        var pid = post.getAttribute('id').match(/post_message_(\d+)/)[1];
        meta = { pid: pid };
        features.unshift(_this.fQuote());
        var x = e.pageX + 5;
        var y = e.pageY + 10;
        _this.setState({ features: features, x: x, y: y, textSel: textSel, meta: meta });
      }
    };

    _this.fQuote = function () {
      return _react2.default.createElement(
        'a',
        { onClick: _this.quote },
        _react2.default.createElement('i', { className: 'fa fa-quote-right' })
      );
    };

    _this.quote = function () {
      var pid = _this.state.meta.pid;
      var username = document.querySelector('#postmenu_' + pid).innerText.trim();
      var text = '[QUOTE=' + username + ';' + pid + ']... ' + _this.state.textSel + ' ...[/QUOTE]\n';
      (0, _editor.insertTextIntoEditor)(text, (0, _jquery2.default)('#vB_Editor_QR_textarea'));
    };

    _this.fCopy = function () {
      return _react2.default.createElement(
        'a',
        {
          onClick: function onClick() {
            (0, _clipboard.copyText)(_this.state.textSel);
          }, key: 'copy' },
        _react2.default.createElement('i', { className: 'fa fa-copy' })
      );
    };

    _this.fGG = function () {
      return _react2.default.createElement(
        'a',
        {
          onClick: function onClick() {
            window.open('https://www.google.com/?gws_rd=ssl#q=' + _this.state.textSel);
          }, key: 'gg' },
        _react2.default.createElement('i', { className: 'fa fa-google' })
      );
    };

    _this.fYT = function () {
      return _react2.default.createElement(
        'a',
        {
          onClick: function onClick() {
            window.open('https://www.youtube.com/results?search_query=' + _this.state.textSel);
          }, key: 'YT' },
        _react2.default.createElement('i', { className: 'fa fa-youtube-play' })
      );
    };

    _this.bindHandlers();
    _this.state = {
      features: [],
      x: 0, y: 0,
      textSel: '',
      meta: {}
    };
    return _this;
  }

  _createClass(SmartSelection, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          x = _state.x,
          y = _state.y,
          features = _state.features;

      if (features.length === 0) return null;
      return _react2.default.createElement(
        'div',
        { className: 'voz-living-smart-selection', style: { left: x, top: y } },
        features
      );
    }
  }]);

  return SmartSelection;
}(_react.Component);

exports.default = SmartSelection;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _coreDecorators = __webpack_require__(2);

var _reactRedux = __webpack_require__(7);

var _utils = __webpack_require__(12);

var _threadSubscription = __webpack_require__(20);

var _voz = __webpack_require__(9);

var actions = _interopRequireWildcard(_voz);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Subscription = (0, _coreDecorators.autobind)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Subscription, _Component);

  function Subscription(comProps) {
    _classCallCheck(this, Subscription);

    var _this = _possibleConstructorReturn(this, (Subscription.__proto__ || Object.getPrototypeOf(Subscription)).call(this, comProps));

    _this.view = (0, _utils.getCurrentView)();
    _this.state = {
      isLoading: false
    };
    return _this;
  }

  _createClass(Subscription, [{
    key: 'subscribe',
    value: function subscribe() {
      var _this2 = this;

      this.setState({ isLoading: true });
      (0, _threadSubscription.subscribeThread)(this.props.threadId).then(function () {
        _this2.props.dispatch(actions.subscribeThread(_this2.props.threadId, _this2.props.currentPost));
        _this2.setState({ isLoading: false });
      });
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe() {
      var _this3 = this;

      this.setState({ isLoading: true });
      (0, _threadSubscription.unsubscribeThread)(this.props.threadId).then(function () {
        _this3.props.dispatch(actions.unsubscribeThread(_this3.props.threadId));
        _this3.setState({ isLoading: false });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isThreadView) {
        return _react2.default.createElement(
          'div',
          { className: 'btn-group' },
          this.state.isLoading ? _react2.default.createElement(
            'div',
            {
              className: 'btn tooltip-right',
              style: { fontSize: '20px' },
              'data-tooltip': 'Processing'
            },
            _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin' })
          ) : this.props.isSubscribed ? _react2.default.createElement(
            'div',
            {
              className: 'btn tooltip-right',
              onClick: this.unsubscribe,
              style: { fontSize: '20px' },
              'data-tooltip': 'Unsubscribe'
            },
            _react2.default.createElement('i', { className: 'fa fa-chain-broken' })
          ) : _react2.default.createElement(
            'div',
            {
              className: 'btn tooltip-right',
              onClick: this.subscribe,
              style: { fontSize: '20px' },
              'data-tooltip': 'Subscribe'
            },
            _react2.default.createElement('i', { className: 'fa fa-check-square-o' })
          )
        );
      }
      return null;
    }
  }]);

  return Subscription;
}(_react.Component), _class2.propTypes = {
  dispatch: _react.PropTypes.func,
  isSubscribed: _react.PropTypes.bool,
  isThreadView: _react.PropTypes.bool,
  threadId: _react.PropTypes.any,
  currentPost: _react.PropTypes.object
}, _temp)) || _class;

var mapStateToProps = function mapStateToProps(_state) {
  var state = _state.vozLiving;
  var isThreadView = state.misc.currentView === 'thread';
  return {
    currentPost: state.currentPost,
    isThreadView: isThreadView,
    isSubscribed: isThreadView ? !_lodash2.default.isUndefined(state.followThreads[state.misc.threadId]) : false,
    threadId: isThreadView ? state.misc.threadId : null
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Subscription);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _mousetrap = __webpack_require__(17);

var _mousetrap2 = _interopRequireDefault(_mousetrap);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThreadControl = (_temp = _class = function (_Component) {
  _inherits(ThreadControl, _Component);

  function ThreadControl() {
    _classCallCheck(this, ThreadControl);

    return _possibleConstructorReturn(this, (ThreadControl.__proto__ || Object.getPrototypeOf(ThreadControl)).apply(this, arguments));
  }

  _createClass(ThreadControl, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var currentView = this.props.currentView;


      if (currentView === 'thread') {
        (0, _jquery2.default)('.pagenav > table > tbody > tr').prepend('<td class="voz-living-arrow-nav-help">\n        D\xF9ng ph\xEDm m\u0169i t\xEAn <- v\xE0 -> \u0111\u1EC3 chuy\u1EC3n trang\n        </td>');
        _mousetrap2.default.bind('right', function (e) {
          if (window.__goNextPage) return window.__goNextPage(e);
          var next = (0, _jquery2.default)('a[rel="next"]');
          if (next) {
            var href = next.eq(0).attr('href');
            if (!_lodash2.default.isUndefined(href)) window.location.href = href;
          }
        });

        _mousetrap2.default.bind('left', function (e) {
          if (window.__goPreviousPage) return window.__goPreviousPage(e);
          var prev = (0, _jquery2.default)('a[rel="prev"]');
          if (prev) {
            var href = prev.eq(0).attr('href');
            if (!_lodash2.default.isUndefined(href)) window.location.href = href;
          }
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _mousetrap2.default.unbind(['left', 'right']);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return ThreadControl;
}(_react.Component), _class.propTypes = {
  currentView: _react.PropTypes.string
}, _temp);
exports.default = ThreadControl;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _reactDom = __webpack_require__(10);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _ThreadPreview = __webpack_require__(70);

var _ThreadPreview2 = _interopRequireDefault(_ThreadPreview);

var _mousetrap = __webpack_require__(17);

var _mousetrap2 = _interopRequireDefault(_mousetrap);

var _openNewTab = __webpack_require__(32);

var _openNewTab2 = _interopRequireDefault(_openNewTab);

var _Root = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThreadListControl = (_temp = _class = function (_Component) {
  _inherits(ThreadListControl, _Component);

  function ThreadListControl() {
    _classCallCheck(this, ThreadListControl);

    return _possibleConstructorReturn(this, (ThreadListControl.__proto__ || Object.getPrototypeOf(ThreadListControl)).apply(this, arguments));
  }

  _createClass(ThreadListControl, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _jquery2.default)('.pagenav > table > tbody > tr').prepend('<td class="voz-living-arrow-nav-help">\n      D\xF9ng ph\xEDm m\u0169i t\xEAn <- v\xE0 -> \u0111\u1EC3 chuy\u1EC3n trang khi xem tr\u01B0\u1EDBc th\u1EDBt \u0111\xF3ng\n      </td>');

      _mousetrap2.default.bind('left', function () {
        if (!window.vozLivingCurrentThreadPreview) {
          var prev = (0, _jquery2.default)('a[rel="prev"]');
          if (prev) {
            var href = prev.eq(0).attr('href');
            if (!_lodash2.default.isUndefined(href)) window.location.href = href;
          }
        } else {
          // control thread preview prev
          window.vozLivingCurrentThreadPreview.prevPost();
        }
      });

      _mousetrap2.default.bind('right', function () {
        if (!window.vozLivingCurrentThreadPreview) {
          var next = (0, _jquery2.default)('a[rel="next"]');
          if (next) {
            var href = next.eq(0).attr('href');
            if (!_lodash2.default.isUndefined(href)) window.location.href = href;
          }
        } else {
          // control thread preview next
          window.vozLivingCurrentThreadPreview.nextPost();
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var threadList = nextProps.threadList,
          isThreadPreview = nextProps.isThreadPreview;


      if (threadList.length > 0 && isThreadPreview) {
        threadList.forEach(function (thread) {
          _this2.mountThreadPreviewControl(thread);
          _this2.mountOpenNewTabControl(thread);
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _mousetrap2.default.unbind(['left', 'right']);
    }
  }, {
    key: 'mountThreadPreviewControl',
    value: function mountThreadPreviewControl(_ref) {
      var id = _ref.id,
          pageNum = _ref.pageNum,
          element = _ref.element;

      var threadPreviewDiv = document.createElement('div');
      threadPreviewDiv.id = 'thread-preview-' + id;
      threadPreviewDiv.className = 'thread-preview-wrapper';
      element.append(threadPreviewDiv);
      (0, _reactDom.render)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: _Root.store },
        _react2.default.createElement(_ThreadPreview2.default, { id: id, pageNum: pageNum, element: element })
      ), threadPreviewDiv);
    }
  }, {
    key: 'mountOpenNewTabControl',
    value: function mountOpenNewTabControl(_ref2) {
      var id = _ref2.id,
          element = _ref2.element;

      var $link = element.find('a[id=thread_title_' + id + ']');
      if (this.props.autoGotoNewthread === true) {
        $link[0].href = $link[0].href.replace(/php\?/, 'php?goto=newpost&');
      }
      var href = $link[0].href;
      var $a = (0, _jquery2.default)('<a \n      class="voz-living-newtab tooltip-bottom" \n      href="' + href + '"\n      data-tooltip="M\u1EDF tab m\u1EDBi"\n      target="_blank">\n        &nbsp;&nbsp;&nbsp;<i class="fa fa-external-link"/>&nbsp;&nbsp;&nbsp;\n      </a>');
      $link.after($a);
      $a.on('click', function () {
        return (0, _openNewTab2.default)(href);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return ThreadListControl;
}(_react.Component), _class.propTypes = {
  threadList: _react.PropTypes.array,
  dispatch: _react.PropTypes.func,
  isThreadPreview: _react.PropTypes.bool,
  autoGotoNewthread: _react.PropTypes.bool
}, _temp);


var mapStateToProps = function mapStateToProps(state) {
  var threadList = state.vozLiving.threadList;

  return { threadList: threadList };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ThreadListControl);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _http = __webpack_require__(5);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _coreDecorators = __webpack_require__(2);

var _mousetrap = __webpack_require__(17);

var _mousetrap2 = _interopRequireDefault(_mousetrap);

var _PostContent = __webpack_require__(50);

var _PostContent2 = _interopRequireDefault(_PostContent);

var _threadSubscription = __webpack_require__(20);

var _reactRedux = __webpack_require__(7);

var _voz = __webpack_require__(9);

var actions = _interopRequireWildcard(_voz);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThreadPreview = (0, _coreDecorators.autobind)(_class = (_temp = _class2 = function (_Component) {
  _inherits(ThreadPreview, _Component);

  function ThreadPreview(comProps) {
    _classCallCheck(this, ThreadPreview);

    var _this = _possibleConstructorReturn(this, (ThreadPreview.__proto__ || Object.getPrototypeOf(ThreadPreview)).call(this, comProps));

    _this.state = {
      content: '',
      show: false,
      currentPostIndex: null,
      currentPageIndex: null,
      currentHTMLViewPosts: [],
      isLoading: false
    };
    return _this;
  }

  _createClass(ThreadPreview, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.url = this.getPageUrl();
    }
  }, {
    key: 'getPageUrl',
    value: function getPageUrl() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      return 'https://vozforums.com/showthread.php?t=' + this.props.id + '&page=' + page;
    }
  }, {
    key: 'getPageByIndex',
    value: function getPageByIndex() {
      var _this2 = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.currentPageIndex;

      return new Promise(function (resolve) {
        var pageNum = _this2.props.pageNum;

        if (index < pageNum) {
          var url = _this2.getPageUrl(index + 1);
          (0, _http.GET)(url).then(function (response) {
            // eslint-disable-line
            resolve(response);
          });
        } else {
          resolve(null);
        }
      });
    }
  }, {
    key: 'showPost',
    value: function showPost() {
      var _this3 = this;

      var postIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var pageIndex = arguments[1];
      var _state = this.state,
          currentPageIndex = _state.currentPageIndex,
          currentHTMLViewPosts = _state.currentHTMLViewPosts,
          show = _state.show;


      if (!show) {
        this.setState({ show: true, isLoading: true });
      } else {
        this.setState({ isLoading: true });
      }

      if (!_lodash2.default.isUndefined(pageIndex) && !_lodash2.default.isNull(pageIndex) && pageIndex !== currentPageIndex) {
        this.loadPosts(pageIndex).then(function (posts) {
          var pIndex = postIndex === 'last' ? posts.length - 1 : postIndex;
          _this3.setState({
            currentHTMLViewPosts: posts,
            currentPostIndex: pIndex,
            content: posts.eq(pIndex),
            isLoading: false,
            currentPageIndex: pageIndex
          });
        });
      } else {
        this.setState({
          currentPostIndex: postIndex,
          content: currentHTMLViewPosts.eq(postIndex),
          isLoading: false
        });
      }
    }
  }, {
    key: 'viewLastPost',
    value: function viewLastPost() {
      var pageNum = this.props.pageNum;
      var _state2 = this.state,
          currentPageIndex = _state2.currentPageIndex,
          currentHTMLViewPosts = _state2.currentHTMLViewPosts;


      if (currentPageIndex !== pageNum - 1) {
        this.showPost('last', pageNum - 1);
      } else {
        this.showPost(currentHTMLViewPosts.length - 1, currentPageIndex);
      }
    }
  }, {
    key: 'viewFirstPost',
    value: function viewFirstPost() {
      var _state3 = this.state,
          currentPageIndex = _state3.currentPageIndex,
          currentHTMLViewPosts = _state3.currentHTMLViewPosts;


      if (currentPageIndex !== 0 || currentHTMLViewPosts.length === 0) {
        this.showPost(0, 0);
      } else {
        this.showPost(0, currentPageIndex);
      }
    }
  }, {
    key: 'loadPosts',
    value: function loadPosts(pageIndex) {
      var _this4 = this;

      return new Promise(function (resolve) {
        _this4.getPageByIndex(pageIndex).then(function (response) {
          if (response === null) resolve([]);
          // const posts = $(response).find('[id^="post_message"]');
          var posts = (0, _jquery2.default)(response).find('table.voz-postbit');
          resolve(posts);
        });
      });
    }
  }, {
    key: 'openNewTab',
    value: function openNewTab() {
      window.open(this.url, '_blank');
    }
  }, {
    key: 'closeThreadPreview',
    value: function closeThreadPreview() {
      _mousetrap2.default.unbind('esc');
      this.setState({ show: false });
      window.vozLivingCurrentThreadPreview = null;
    }
  }, {
    key: 'openThreadPreview',
    value: function openThreadPreview() {
      var _this5 = this;

      var currentHTMLViewPosts = this.state.currentHTMLViewPosts;

      // close other thread preview

      (0, _jquery2.default)('.btn-view.active').click();

      _mousetrap2.default.bind('esc', function () {
        _this5.closeThreadPreview();
      });

      if (currentHTMLViewPosts.length === 0) {
        this.viewFirstPost();
      } else {
        this.setState({ show: true });
      }

      window.vozLivingCurrentThreadPreview = this;
    }
  }, {
    key: 'toggleThreadPreview',
    value: function toggleThreadPreview() {
      var _state4 = this.state,
          show = _state4.show,
          isLoading = _state4.isLoading;


      if (!isLoading) {
        if (show) {
          this.closeThreadPreview();
        } else {
          this.openThreadPreview();
        }
      }
    }
  }, {
    key: 'prevPost',
    value: function prevPost() {
      var _state5 = this.state,
          currentPostIndex = _state5.currentPostIndex,
          currentPageIndex = _state5.currentPageIndex;


      if (currentPostIndex === 0) {
        if (currentPageIndex !== 0) {
          this.showPost('last', currentPageIndex - 1);
        }
      } else {
        if (currentPostIndex > 0) {
          this.showPost(currentPostIndex - 1, currentPageIndex);
        }
      }
    }
  }, {
    key: 'nextPost',
    value: function nextPost() {
      var _state6 = this.state,
          currentPostIndex = _state6.currentPostIndex,
          currentPageIndex = _state6.currentPageIndex,
          currentHTMLViewPosts = _state6.currentHTMLViewPosts;
      var pageNum = this.props.pageNum;


      if (currentPostIndex === currentHTMLViewPosts.length - 1) {
        if (currentPageIndex < pageNum - 1) {
          this.showPost(0, currentPageIndex + 1);
        }
      } else {
        if (currentPostIndex < currentHTMLViewPosts.length - 1) {
          this.showPost(currentPostIndex + 1, currentPageIndex);
        }
      }
    }
  }, {
    key: 'toggleSubscribeThread',
    value: function toggleSubscribeThread() {
      var _state7 = this.state,
          currentPostIndex = _state7.currentPostIndex,
          currentPageIndex = _state7.currentPageIndex,
          content = _state7.content;
      var _props = this.props,
          followThreads = _props.followThreads,
          id = _props.id,
          dispatch = _props.dispatch,
          element = _props.element;

      if (followThreads[id]) {
        (0, _threadSubscription.unsubscribeThread)(id).then(function () {
          dispatch(actions.unsubscribeThread(id));
        });
      } else {
        var title = (0, _jquery2.default)('a[id^="thread_title"]', element).text();
        var postId = content ? (0, _jquery2.default)(content).attr('id').replace('post', '') : '';
        var post = {
          threadId: id,
          postId: postId,
          postNum: currentPageIndex * 10 + currentPostIndex + 1,
          page: currentPageIndex + 1,
          title: title
        };
        (0, _threadSubscription.subscribeThread)(id).then(function () {
          dispatch(actions.subscribeThread(id, post));
        });
      }
    }
  }, {
    key: 'renderThreadContent',
    value: function renderThreadContent() {
      var _state8 = this.state,
          show = _state8.show,
          isLoading = _state8.isLoading,
          content = _state8.content,
          currentPostIndex = _state8.currentPostIndex,
          currentPageIndex = _state8.currentPageIndex;
      var _props2 = this.props,
          followThreads = _props2.followThreads,
          id = _props2.id;

      var isFollowed = !!followThreads[id];

      if (!show) return null;

      var remind = 'Sử dụng phím mũi tên <- -> để chuyển post. Phím Esc để đóng khung preview.';

      return _react2.default.createElement(
        'div',
        { className: 'preview-wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'left-preview pull-left', style: { width: 'calc(100% - 45px)' } },
          _react2.default.createElement(
            'div',
            { className: 'preview-control' },
            remind,
            _react2.default.createElement(
              'div',
              {
                className: 'btn pull-right btn-next-post tooltip-top',
                onClick: this.nextPost,
                'data-tooltip': 'Xem post sau'
              },
              _react2.default.createElement('i', { className: 'fa fa-arrow-right' })
            ),
            _react2.default.createElement(
              'div',
              {
                className: 'btn pull-right btn-prev-post tooltip-top',
                onClick: this.prevPost,
                'data-tooltip': 'Xem post tr\u01B0\u1EDBc'
              },
              _react2.default.createElement('i', { className: 'fa fa-arrow-left' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'pull-right' },
              'Post hi\u1EC7n t\u1EA1i: ',
              currentPageIndex * 10 + currentPostIndex + 1
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'preview-content' },
            _react2.default.createElement(_PostContent2.default, { html: content, isLoading: isLoading })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'right-preview pull-right' },
          _react2.default.createElement(
            'div',
            {
              className: 'btn',
              onClick: this.openNewTab,
              'data-tooltip': 'M\u1EDF tab m\u1EDBi'
            },
            _react2.default.createElement('i', { className: 'fa fa-share' })
          ),
          _react2.default.createElement(
            'div',
            {
              className: 'btn',
              onClick: this.viewFirstPost,
              'data-tooltip': 'Xem post \u0111\u1EA7u ti\xEAn'
            },
            _react2.default.createElement('i', { className: 'fa fa-fast-backward' })
          ),
          _react2.default.createElement(
            'div',
            {
              className: 'btn',
              onClick: this.viewLastPost,
              'data-tooltip': 'Xem post cu\u1ED1i c\xF9ng'
            },
            _react2.default.createElement('i', { className: 'fa fa-fast-forward' })
          ),
          _react2.default.createElement(
            'div',
            {
              className: 'btn',
              onClick: this.toggleSubscribeThread,
              'data-tooltip': 'Theo d\xF5i th\u1EDBt'
            },
            !isFollowed ? _react2.default.createElement('i', { className: 'fa fa-check-square-o' }) : _react2.default.createElement('i', { className: 'fa fa-chain-broken' })
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var show = this.state.show;

      var buttonIcon = _react2.default.createElement('i', { className: 'fa fa-angle-double-down' });
      var className = 'btn btn-view';

      if (show) {
        buttonIcon = _react2.default.createElement('i', { className: 'fa fa-angle-double-up' });
        className += ' active';
      }

      return _react2.default.createElement(
        'div',
        { className: 'thread-preview-inner' },
        _react2.default.createElement(
          'div',
          {
            className: className,
            onClick: function onClick() {
              return _this6.toggleThreadPreview();
            },
            'data-tooltip': 'Thread preview'
          },
          buttonIcon
        ),
        this.renderThreadContent()
      );
    }
  }]);

  return ThreadPreview;
}(_react.Component), _class2.propTypes = {
  id: _react.PropTypes.string,
  pageNum: _react.PropTypes.number,
  element: _react.PropTypes.any,
  followThreads: _react.PropTypes.object,
  dispatch: _react.PropTypes.func
}, _temp)) || _class;

var mapStateToProps = function mapStateToProps(state) {
  var followThreads = state.vozLiving.followThreads;

  return { followThreads: followThreads };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ThreadPreview);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _http = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import $ from 'jquery';
/* eslint-disable new-cap */
var UserStyle = (_temp = _class = function (_Component) {
  _inherits(UserStyle, _Component);

  function UserStyle() {
    _classCallCheck(this, UserStyle);

    return _possibleConstructorReturn(this, (UserStyle.__proto__ || Object.getPrototypeOf(UserStyle)).apply(this, arguments));
  }

  _createClass(UserStyle, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.userStyle !== this.props.userStyle;
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      var userStyle = nextProps.userStyle;
      this.checkAddStyle(userStyle);
    }
  }, {
    key: 'checkAddStyle',
    value: function checkAddStyle(userStyleUrl) {
      var _this2 = this;

      try {
        if (userStyleUrl === '') return;
        var userStyleId = userStyleUrl.match(/\/styles\/(\d+)\//)[1];
        var storeId = 'voz_living_userstyle_' + userStyleId;
        var oldCss = window.localStorage.getItem(storeId);
        if (oldCss !== null) {
          this.addStyle(oldCss);
        }
        (0, _http.GET)('https://userstyles.org/styles/' + userStyleId + '.css', {
          credentials: 'same-origin'
        }).then(function (css) {
          if (oldCss === null) {
            _this2.addStyle(css);
            window.localStorage.setItem(storeId, css);
          } else {
            if (css !== oldCss) {
              window.localStorage.setItem(storeId, css);
              console.log('style updated');
            }
          }
        });
      } catch (e) {
        console.error(e);
      }
    }
  }, {
    key: 'addStyle',
    value: function addStyle(css) {
      try {
        var styleTag = document.createElement('style');
        styleTag.type = 'text/css';
        styleTag.appendChild(document.createTextNode(css.replace(/@-moz-document.*{/g, '@media all {')));
        document.getElementsByTagName('head')[0].appendChild(styleTag);
      } catch (e) {
        console.error(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return UserStyle;
}(_react.Component), _class.propTypes = {
  userStyle: _react.PropTypes.string
}, _temp);
exports.default = UserStyle;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WideScreenControl = (_temp = _class = function (_Component) {
  _inherits(WideScreenControl, _Component);

  function WideScreenControl() {
    _classCallCheck(this, WideScreenControl);

    return _possibleConstructorReturn(this, (WideScreenControl.__proto__ || Object.getPrototypeOf(WideScreenControl)).apply(this, arguments));
  }

  _createClass(WideScreenControl, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.triggerWideScreen(nextProps);
    }
  }, {
    key: 'triggerWideScreen',
    value: function triggerWideScreen() {
      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var isWideScreen = nextProps.isWideScreen;


      if (isWideScreen) {
        (0, _jquery2.default)('.page').css({
          width: '100%',
          maxWidth: '5000px'
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return WideScreenControl;
}(_react.Component), _class.propTypes = {
  isWideScreen: _react.PropTypes.bool
}, _temp);
exports.default = WideScreenControl;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;
// import UIRevampThread from '../components/UIRevampThread';


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _AdsControl = __webpack_require__(38);

var _AdsControl2 = _interopRequireDefault(_AdsControl);

var _WideScreenControl = __webpack_require__(72);

var _WideScreenControl2 = _interopRequireDefault(_WideScreenControl);

var _ThreadListControl = __webpack_require__(69);

var _ThreadListControl2 = _interopRequireDefault(_ThreadListControl);

var _LinkHelperControl = __webpack_require__(46);

var _LinkHelperControl2 = _interopRequireDefault(_LinkHelperControl);

var _ThreadControl = __webpack_require__(68);

var _ThreadControl2 = _interopRequireDefault(_ThreadControl);

var _EmotionControl = __webpack_require__(40);

var _EmotionControl2 = _interopRequireDefault(_EmotionControl);

var _MinimizeQuoteControl = __webpack_require__(47);

var _MinimizeQuoteControl2 = _interopRequireDefault(_MinimizeQuoteControl);

var _QuickPostQuotationControl = __webpack_require__(54);

var _QuickPostQuotationControl2 = _interopRequireDefault(_QuickPostQuotationControl);

var _PostTracker = __webpack_require__(51);

var _PostTracker2 = _interopRequireDefault(_PostTracker);

var _QuickBanUser = __webpack_require__(52);

var _QuickBanUser2 = _interopRequireDefault(_QuickBanUser);

var _PasteToUpload = __webpack_require__(49);

var _PasteToUpload2 = _interopRequireDefault(_PasteToUpload);

var _SmartSelection = __webpack_require__(66);

var _SmartSelection2 = _interopRequireDefault(_SmartSelection);

var _UserStyle = __webpack_require__(71);

var _UserStyle2 = _interopRequireDefault(_UserStyle);

var _ThreadBinder = __webpack_require__(64);

var _ThreadBinder2 = _interopRequireDefault(_ThreadBinder);

var _CapturePost = __webpack_require__(39);

var _CapturePost2 = _interopRequireDefault(_CapturePost);

var _StickerPicker = __webpack_require__(27);

var _StickerPicker2 = _interopRequireDefault(_StickerPicker);

var _RichEditor = __webpack_require__(61);

var _RichEditor2 = _interopRequireDefault(_RichEditor);

var _SideMenu = __webpack_require__(74);

var _SideMenu2 = _interopRequireDefault(_SideMenu);

var _voz = __webpack_require__(9);

var _settings2 = __webpack_require__(4);

var _utils = __webpack_require__(12);

var _postHelper = __webpack_require__(15);

var _postHelper2 = _interopRequireDefault(_postHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (_temp = _class = function (_Component) {
  _inherits(App, _Component);

  function App(comProps) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, comProps));

    _this.dispatch = comProps.dispatch;
    _this.currentView = (0, _utils.getCurrentView)();
    _this.authInfo = (0, _utils.getAuthenticationInformation)();

    switch (_this.currentView) {
      case 'thread':
        {
          var postInfo = (0, _postHelper2.default)((0, _jquery2.default)(document.body));
          trackEvent('view-thread-id', postInfo.getThreadId());
          trackEvent('view-thread-title', postInfo.getThreadTitle());
          trackEvent('view-thread-combine', postInfo.getThreadId() + ':|:' + postInfo.getThreadTitle());
          break;
        }
      case 'thread-list':
        {
          try {
            var f = window.location.href.match(/f=(\d+)/)[1];
            trackEvent('view-forum', f);
          } catch (e) {
            console.error(e);
          }
          break;
        }
    }
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var postInfo = (0, _postHelper2.default)((0, _jquery2.default)(document.body));
      setTimeout(function () {
        document.querySelector('.voz-living-side-menu').classList.remove('trans-start');
      }, 1000);

      Promise.all([(0, _settings2.getChromeLocalStore)(['settings', 'quotes', 'authInfo', 'quickLinks', 'followThreads', 'threadTracker']), (0, _settings2.getChromeSyncStore)(['savedPosts'])]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            storage = _ref2[0],
            syncStore = _ref2[1];

        var _settings = storage.settings,
            authInfo = storage.authInfo;

        var settings = _extends({}, _settings2.defaultStoreStructure.settings, _settings);
        var misc = {};
        misc.currentView = _this2.currentView;
        if (misc.currentView === 'thread') {
          misc.threadId = postInfo.getThreadId();
        }
        storage.settings = settings; // eslint-disable-line
        _this2.props.dispatch((0, _voz.init)(_extends({}, storage, syncStore, { misc: misc })));

        if (settings.threadPreview === true && _this2.currentView === 'thread-list') {
          _this2.props.dispatch((0, _voz.getThreadList)());
        }

        if (_lodash2.default.isEmpty(authInfo) || !_lodash2.default.isEqual(authInfo, _this2.authInfo)) {
          (0, _settings2.setChromeLocalStore)({ authInfo: _this2.authInfo });
        }
      });

      /* eslint-disable no-undef */
      chrome.runtime.onMessage.addListener(function (request) {
        if (request.quotes) _this2.dispatch((0, _voz.updateQuotes)(request.quotes));
      });
      /* eslint-enable no-undef */
      window.vozLivingLoader.stop();
    }
  }, {
    key: 'renderBaseOnCurrentView',
    value: function renderBaseOnCurrentView(currentView) {
      var settings = _lodash2.default.isEmpty(this.props.settings) ? {} : _extends({}, _settings2.defaultStoreStructure.settings, this.props.settings);
      var linkHelper = settings.linkHelper,
          minimizeQuote = settings.minimizeQuote,
          quickPostQuotation = settings.quickPostQuotation,
          threadPreview = settings.threadPreview,
          savePostEnable = settings.savePostEnable,
          capturePostEnable = settings.capturePostEnable,
          newThreadUI = settings.newThreadUI,
          smartSelection = settings.smartSelection,
          stickerPanelExpand = settings.stickerPanelExpand;
      var pageStatusId = this.props.pageStatusId;

      if (typeof linkHelper === 'undefined') pageStatusId = -1;
      if (currentView === 'thread-list') {
        return [_react2.default.createElement(_ThreadListControl2.default, {
          key: 'voz-living-thread-list-control',
          dispatch: this.dispatch, currentView: this.currentView, isThreadPreview: threadPreview,
          autoGotoNewthread: this.props.settings.autoGotoNewthread
        })];
      } else if (currentView === 'thread') {
        return [_react2.default.createElement(_LinkHelperControl2.default, { linkHelper: linkHelper, pageStatusId: pageStatusId, key: 'voz-living-link-helper' }), _react2.default.createElement(_ThreadControl2.default, { currentView: this.currentView, key: 'voz-living-thread-control' }), _react2.default.createElement(_MinimizeQuoteControl2.default, {
          isMinimizeQuote: minimizeQuote, key: 'voz-living-minimize-quote-control'
        }), _react2.default.createElement(_QuickPostQuotationControl2.default, {
          isQuickPostQuotation: quickPostQuotation, key: 'voz-living-quick-post-control'
        }), smartSelection && _react2.default.createElement(_SmartSelection2.default, { key: 'smart-selection' }),
        // (typeof newThreadUI !== 'undefined')
        //   && <UIRevampThread key="ui-revamp-thread" enable={newThreadUI} />,
        _react2.default.createElement(_RichEditor2.default, null), _react2.default.createElement(_QuickBanUser2.default, { key: 'voz-living-quick-ban-user' }), savePostEnable ? _react2.default.createElement(_ThreadBinder2.default, { dispatch: this.dispatch, pageStatusId: pageStatusId, key: 'saved-post-thread-binder' }) : null, capturePostEnable ? _react2.default.createElement(_CapturePost2.default, { key: 'capture-post' }) : null];
      } else if (currentView === 'post') {
        return [_react2.default.createElement(_LinkHelperControl2.default, { linkHelper: linkHelper, pageStatusId: pageStatusId, key: 'voz-living-link-helper' }), _react2.default.createElement(_QuickBanUser2.default, { key: 'voz-living-quick-ban-user' }), savePostEnable ? _react2.default.createElement(_ThreadBinder2.default, { dispatch: this.dispatch, pageStatusId: pageStatusId, key: 'saved-post-thread-binder' }) : null, capturePostEnable ? _react2.default.createElement(_CapturePost2.default, { key: 'capture-post' }) : null, _react2.default.createElement(
          'div',
          { style: { display: 'none' } },
          _react2.default.createElement(_StickerPicker2.default, null)
        )];
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$settings = this.props.settings,
          wideScreenSpecial = _props$settings.wideScreenSpecial,
          adsRemove = _props$settings.adsRemove,
          emotionHelper = _props$settings.emotionHelper,
          autoHideSidebar = _props$settings.autoHideSidebar,
          userStyle = _props$settings.userStyle,
          stickerPanelExpand = _props$settings.stickerPanelExpand;


      return _react2.default.createElement(
        'div',
        { id: 'voz-living' },
        _react2.default.createElement(_AdsControl2.default, { isRemoveAds: adsRemove }),
        _react2.default.createElement(_WideScreenControl2.default, { isWideScreen: wideScreenSpecial }),
        _react2.default.createElement(_PostTracker2.default, { dispatch: this.dispatch }),
        _react2.default.createElement(_EmotionControl2.default, { currentView: this.currentView, emotionHelper: emotionHelper, stickerPanelExpand: stickerPanelExpand }),
        _react2.default.createElement(_SideMenu2.default, {
          dispatch: this.dispatch,
          settings: this.props.settings,
          autoHide: autoHideSidebar
        }),
        this.renderBaseOnCurrentView(this.currentView),
        _react2.default.createElement(_PasteToUpload2.default, null),
        _react2.default.createElement(_UserStyle2.default, { userStyle: userStyle })
      );
    }
  }]);

  return App;
}(_react.Component), _class.propTypes = {
  settings: _react.PropTypes.object,
  dispatch: _react.PropTypes.func
}, _class.defaultProps = {
  settings: {}
}, _temp);


var mapStateToProps = function mapStateToProps(state) {
  var _state$vozLiving = state.vozLiving,
      settings = _state$vozLiving.settings,
      pageStatusId = _state$vozLiving.pageStatusId;

  return { settings: settings, pageStatusId: pageStatusId };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _SettingOptions = __webpack_require__(65);

var _SettingOptions2 = _interopRequireDefault(_SettingOptions);

var _ReloadButton = __webpack_require__(56);

var _ReloadButton2 = _interopRequireDefault(_ReloadButton);

var _QuoteList = __webpack_require__(55);

var _QuoteList2 = _interopRequireDefault(_QuoteList);

var _QuickLink = __webpack_require__(53);

var _QuickLink2 = _interopRequireDefault(_QuickLink);

var _FollowThread = __webpack_require__(43);

var _FollowThread2 = _interopRequireDefault(_FollowThread);

var _Subscription = __webpack_require__(67);

var _Subscription2 = _interopRequireDefault(_Subscription);

var _SideBarIcon = __webpack_require__(63);

var _SideBarIcon2 = _interopRequireDefault(_SideBarIcon);

var _LXBtn = __webpack_require__(45);

var _LXBtn2 = _interopRequireDefault(_LXBtn);

var _FeedbackBtn = __webpack_require__(42);

var _FeedbackBtn2 = _interopRequireDefault(_FeedbackBtn);

var _HotThreads = __webpack_require__(44);

var _HotThreads2 = _interopRequireDefault(_HotThreads);

var _utils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideMenu = (_temp = _class = function (_Component) {
  _inherits(SideMenu, _Component);

  function SideMenu(comProps) {
    _classCallCheck(this, SideMenu);

    var _this = _possibleConstructorReturn(this, (SideMenu.__proto__ || Object.getPrototypeOf(SideMenu)).call(this, comProps));

    _this.dispatch = comProps.dispatch;
    return _this;
  }

  _createClass(SideMenu, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      var contentHtml = [document.querySelectorAll('body>div:not(#voz-living-app):not(#voz-living-loader-wrapper)'), document.querySelectorAll('body else>div:not(#voz-living-app)'), document.querySelectorAll('body>form')];

      contentHtml.forEach(function (nodes) {
        if (nodes && nodes.length > 0) {
          nodes.forEach(function (node) {
            if (node && nextProps.autoHide === true) node.style.marginLeft = '0px';
            if (node && nextProps.autoHide === false) node.style.marginLeft = '50px';
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          settings = _props.settings,
          autoHide = _props.autoHide;


      return _react2.default.createElement(
        'div',
        { className: (0, _utils.toClassName)({ 'voz-living-side-menu': true, 'trans-start': true, 'auto-hide': autoHide }) },
        _react2.default.createElement(_SettingOptions2.default, { settings: settings, dispatch: this.dispatch }),
        _react2.default.createElement(_QuoteList2.default, { dispatch: this.dispatch }),
        _react2.default.createElement(_FollowThread2.default, { dispatch: this.dispatch }),
        _react2.default.createElement(_ReloadButton2.default, { dispatch: this.dispatch, isReloadButton: settings.reloadButton }),
        _react2.default.createElement(_HotThreads2.default, null),
        settings.savePostEnable === true ? _react2.default.createElement(_SideBarIcon2.default, { dispatch: this.dispatch }) : null,
        settings.LinhXinhBtn === true ? _react2.default.createElement(_LXBtn2.default, null) : null,
        _react2.default.createElement(_QuickLink2.default, { dispatch: this.dispatch }),
        _react2.default.createElement(
          'div',
          { className: 'voz-living-size-menu__bottom' },
          _react2.default.createElement(_FeedbackBtn2.default, null),
          _react2.default.createElement(_Subscription2.default, { dispatch: this.dispatch })
        )
      );
    }
  }]);

  return SideMenu;
}(_react.Component), _class.propTypes = {
  settings: _react.PropTypes.object,
  dispatch: _react.PropTypes.func,
  autoHide: _react.PropTypes.bool
}, _class.defaultProps = {
  settings: {}
}, _temp);


var mapStateToProps = function mapStateToProps(state) {
  var settings = state.vozLiving.settings;

  return { settings: settings };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SideMenu);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(34);

var _voz = __webpack_require__(76);

var _voz2 = _interopRequireDefault(_voz);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  vozLiving: _voz2.default
});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionsMap;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = vozReducer;

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _settings = __webpack_require__(4);

var _actionType = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initState = {
  settings: {},
  threadList: [],
  quoteList: [],
  misc: {},
  pageStatusId: 0
};

var LIMIT_SAVE_POST = 200;

var actionsMap = (_actionsMap = {}, _defineProperty(_actionsMap, _actionType.VOZ_LIVING_INIT, function (state, action) {
  var cloned = _lodash2.default.cloneDeep(action);

  delete cloned.type;
  cloned.quoteList = action.quotes;
  delete cloned.quotes;

  return _extends({}, state, cloned);
}), _defineProperty(_actionsMap, _actionType.VOZ_LIVING_GET_THREAD_LIST, function (state, action) {
  var threadList = action.threadList;

  return _extends({}, state, { threadList: threadList });
}), _defineProperty(_actionsMap, _actionType.VOZ_LIVING_UDATE_QUOTE_LIST, function (state, action) {
  var quotes = action.quotes;

  return _extends({}, state, { quoteList: quotes });
}), _defineProperty(_actionsMap, _actionType.VOZ_LIVING_CHANGE_OPTION, function (state, action) {
  var settings = state.settings;
  var option = action.option,
      value = action.value;

  var newValue = value || !settings[option];

  var newSettings = _extends({}, settings, _defineProperty({}, option, newValue));

  (0, _settings.setChromeLocalStore)({ settings: newSettings });

  return _extends({}, state, {
    settings: newSettings
  });
}), _defineProperty(_actionsMap, _actionType.VOZ_LIVING_SEEN_ALL_QUOTE, function (state) {
  var quoteList = state.quoteList;

  var clone = _lodash2.default.cloneDeep(quoteList);

  clone.forEach(function (quote) {
    var outQuote = quote;
    outQuote.hasSeen = true;
  });

  (0, _settings.setChromeLocalStore)({ quotes: clone });

  return _extends({}, state, { quoteList: clone });
}), _defineProperty(_actionsMap, _actionType.VOZ_LIVING_ADD_QUICK_LINK, function (state) {
  var quickLinks = state.quickLinks;

  var clone = _lodash2.default.cloneDeep(quickLinks);

  clone.push({
    id: new Date().getTime(),
    label: '',
    link: ''
  });

  return _extends({}, state, { quickLinks: clone });
}), _defineProperty(_actionsMap, _actionType.VOZ_LIVING_UPDATE_QUICK_LINK, function (state, action) {
  var id = action.id,
      key = action.key,
      value = action.value;
  var quickLinks = state.quickLinks;

  var clone = _lodash2.default.cloneDeep(quickLinks);
  var found = _lodash2.default.find(clone, { id: id });

  if (found) found[key] = value;

  return _extends({}, state, { quickLinks: clone });
}), _defineProperty(_actionsMap, _actionType.VOZ_LIVING_SAVE_QUICK_LINK, function (state) {
  var quickLinks = state.quickLinks;

  (0, _settings.setChromeLocalStore)({ quickLinks: quickLinks });
  return _extends({}, state);
}), _defineProperty(_actionsMap, _actionType.VOZ_LIVING_REMOVE_QUICK_LINK, function (state, action) {
  var id = action.id;
  var quickLinks = state.quickLinks;

  var clone = _lodash2.default.cloneDeep(quickLinks);
  _lodash2.default.remove(clone, { id: id });
  (0, _settings.setChromeLocalStore)({ quickLinks: clone });
  return _extends({}, state, { quickLinks: clone });
}), _defineProperty(_actionsMap, _actionType.VOZ_LIVING_THREAD_SUBSCRIBE, function (state, action) {
  var threadId = action.threadId,
      post = action.post;

  var clone = _lodash2.default.cloneDeep(state.followThreads);
  clone[threadId] = post;
  (0, _settings.setChromeLocalStore)({ followThreads: clone });
  return _extends({}, state, { followThreads: clone });
}), _defineProperty(_actionsMap, _actionType.VOZ_LIVING_THREAD_UNSUBSCRIBE, function (state, action) {
  var threadId = action.threadId;

  var clone = _lodash2.default.cloneDeep(state.followThreads);
  delete clone[threadId];
  (0, _settings.setChromeLocalStore)({ followThreads: clone });
  return _extends({}, state, { followThreads: clone });
}), _defineProperty(_actionsMap, _actionType.VOZ_LIVING_SAVE_POST, function (state, action) {
  var postId = action.postId;

  var existedSavedPosts = state.savedPosts;
  if (Object.keys(existedSavedPosts).length >= LIMIT_SAVE_POST) {
    alert('\u0110\xE3 qu\xE1 gi\u1EDBi h\u1EA1n (' + LIMIT_SAVE_POST + ' b\xE0i) s\u1ED1 l\u01B0\u1EE3ng b\xE0i c\xF3 th\u1EC3 l\u01B0u, xin h\xE3y xo\xE1 b\u1EDBt ');
    var error = new Error("Saved post reach limitation");
    error.limit = LIMIT_SAVE_POST;
    throw error;
  }
  var updatedSavedPosts = _extends({}, existedSavedPosts, _defineProperty({}, postId, new Date().getTime()));
  (0, _settings.setChromeSyncStore)({ savedPosts: updatedSavedPosts });
  return _extends({}, state, { savedPosts: updatedSavedPosts });
}), _defineProperty(_actionsMap, _actionType.VOZ_LIVING_UNSAVE_POST, function (state, action) {
  var postId = action.postId;

  var existedSavedPosts = state.savedPosts;
  var updatedSavedPosts = _extends({}, existedSavedPosts);
  delete updatedSavedPosts[postId];
  var localStoreId = 'voz_living_post_' + postId;
  window.localStorage.removeItem(localStoreId);
  (0, _settings.setChromeSyncStore)({ savedPosts: updatedSavedPosts });
  return _extends({}, state, { savedPosts: updatedSavedPosts });
}), _defineProperty(_actionsMap, _actionType.VOZ_LIVING_UPDATE_PAGE_STATUS_ID, function (state) {
  return _extends({}, state, { pageStatusId: state.pageStatusId + 1 });
}), _defineProperty(_actionsMap, _actionType.VOZ_LIVING_UPDATE_POST_TRACKER, function (state, action) {
  var _action$post = action.post,
      threadId = _action$post.threadId,
      postId = _action$post.postId,
      postNum = _action$post.postNum,
      page = _action$post.page;


  var existingThreadTrack = state.threadTracker[threadId];
  var lastView = new Date().getTime();
  var updatingThread = _lodash2.default.isUndefined(existingThreadTrack) || postId > existingThreadTrack.postId ? {
    postId: postId,
    postNum: postNum,
    page: page
  } : _extends({}, existingThreadTrack);
  var threadTracker = _extends({}, state.threadTracker, _defineProperty({}, threadId, _extends({}, updatingThread, {
    lastView: lastView
  })));
  (0, _settings.setChromeLocalStore)({ threadTracker: threadTracker });
  return _extends({}, state, {
    currentPost: action.post,
    threadTracker: threadTracker
  });
}), _actionsMap);

function vozReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  var reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
// TODO: Clean tracker

/***/ }),
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, ".vozliving-editor {\n  background: #fff;\n  padding: 5px;\n}\n.editor-wrapper .editor {\n  box-shadow: 0 0 2px #CCC;\n  min-height: 150px;\n  overflow: auto;\n  padding: 1em;\n  margin-top: 20px;\n  resize: vertical;\n  outline: none;\n  background: #F5F5FF;\n}\n.editor-wrapper a {\n  cursor: pointer;\n}\n.editor-wrapper .toolbar {\n  text-align: center;\n  font-family: 'Dosis';\n}\n.editor-wrapper .toolbar a,\n.editor-wrapper .fore-wrapper,\n.editor-wrapper .back-wrapper {\n  border: 1px solid #AAA;\n  background: #FFF;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 20px;\n  font-size: 15px;\n  border-radius: 1px;\n  color: black;\n  padding: 5px;\n  width: 1.5em;\n  margin: -2px;\n  margin-top: 10px;\n  display: inline-block;\n  text-decoration: none;\n  box-shadow: 0px 1px 0px #CCC;\n}\n.editor-wrapper .toolbar a > i.fa,\n.editor-wrapper .fore-wrapper > i.fa,\n.editor-wrapper .back-wrapper > i.fa {\n  font-size: 18px;\n  line-height: 22px;\n  margin-top: -2px;\n}\n.editor-wrapper .toolbar a:hover,\n.editor-wrapper .fore-wrapper:hover,\n.editor-wrapper .back-wrapper:hover {\n  background: #f2f2f2;\n  border-color: #8c8c8c;\n}\n.editor-wrapper a[data-command='redo'],\n.editor-wrapper a[data-command='strikeThrough'],\n.editor-wrapper a[data-command='justifyFull'],\n.editor-wrapper a[data-command='insertOrderedList'],\n.editor-wrapper a[data-command='outdent'],\n.editor-wrapper a[data-command='p'],\n.editor-wrapper a[data-command='superscript'] {\n  margin-right: 5px;\n  border-radius: 0 3px 3px 0;\n}\n.editor-wrapper a[data-command='undo'],\n.editor-wrapper .fore-wrapper,\n.editor-wrapper a[data-command='justifyLeft'],\n.editor-wrapper a[data-command='insertUnorderedList'],\n.editor-wrapper a[data-command='indent'],\n.editor-wrapper a[data-command='h1'],\n.editor-wrapper a[data-command='subscript'] {\n  border-radius: 3px 0 0 3px;\n}\n.editor-wrapper a.palette-item {\n  height: 4px;\n  border-radius: 2px;\n  margin: 2px;\n  width: 4px;\n  border: 1px solid #CCC;\n}\n.editor-wrapper a.palette-item:hover {\n  border: 1px solid #CCC;\n  box-shadow: 0 0 3px #333;\n}\n.editor-wrapper .fore-palette,\n.editor-wrapper .back-palette {\n  display: none;\n}\n.editor-wrapper .fore-wrapper,\n.editor-wrapper .back-wrapper {\n  display: inline-block;\n  cursor: pointer;\n}\n.editor-wrapper .fore-wrapper:hover .fore-palette,\n.editor-wrapper .back-wrapper:hover .back-palette {\n  display: block;\n  float: left;\n  position: absolute;\n  padding: 3px;\n  width: 160px;\n  background: #FFF;\n  border: 1px solid #DDD;\n  box-shadow: 0 0 5px #CCC;\n  height: 100px;\n}\n.editor-wrapper .fore-palette a,\n.editor-wrapper .back-palette a {\n  background: #FFF;\n  margin-bottom: 2px;\n}\n", ""]);

// exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, ".emotion-box {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  padding: 5px 0;\n  min-width: 165px;\n  white-space: nowrap;\n  border: gray 1px solid;\n  border-top: 0;\n  margin: 0px;\n  transition: all 0.3s;\n  max-height: 60px;\n  min-height: 40px;\n}\n.emotion-box div.emo {\n  width: 40px;\n  height: 40px;\n  display: inline-block;\n  padding: 2px;\n  position: relative;\n  border-radius: 2px;\n  transition: all 0.5s;\n  margin-right: 5px;\n}\n.emotion-box div.emo img {\n  max-height: 100%;\n  max-width: 100%;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.emotion-box div.emo:hover {\n  background: #fff;\n}\n.emotion-box div.emo:hover img {\n  transform: scale(1.1);\n}\n.smilebox.full .emotion-box {\n  overflow: auto;\n  white-space: normal;\n  max-height: 220px;\n  min-height: 200px;\n}\n.emo-header {\n  margin-top: 5px;\n  background-color: #d6d4d4;\n  border: gray 1px solid;\n  font-size: 15px;\n  padding: 2px 3px;\n}\n.emo-expand {\n  float: right;\n  color: #353535;\n  cursor: pointer;\n  padding: 3px;\n}\n#vB_Editor_001_textarea[name='message'] {\n  width: 540px!important;\n}\n", ""]);

// exports


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, ".sticker-box-wrapper {\n  position: relative;\n}\n.sticker-box-wrapper .sticker-information {\n  position: absolute;\n}\n.sticker-box-wrapper .sticker-information .sticker-preview {\n  position: absolute;\n  left: 3px;\n  bottom: 2px;\n}\n.sticker-box-wrapper .sticker-information .sticker-preview img {\n  opacity: 0.8;\n}\n.sticker-box-wrapper .sticker-information .sticker-preview .sticker-preview-label {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  color: black;\n  white-space: nowrap;\n  text-shadow: 0px 0px 2px white;\n}\n.sticker-box-wrapper .sticker-box {\n  height: 82px;\n  background: white;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  position: relative;\n  transition: all 0.3s;\n}\n.sticker-box-wrapper .sticker-box > div {\n  margin-top: 2px;\n  white-space: nowrap;\n}\n.sticker-box-wrapper .sticker-box > div .sticker {\n  height: 60px;\n  margin: 2px;\n  transition: all 0.2s;\n  border: 1px solid white;\n  cursor: pointer;\n}\n.sticker-box-wrapper .sticker-box > div .sticker:hover {\n  margin: 0;\n  height: 64px;\n  border: 1px solid #666;\n}\n.sticker-box-wrapper .sticker-box span a {\n  text-decoration: underline;\n  font-weight: bold;\n}\n.sticker-box-wrapper .sticker-box.empty-sticker {\n  height: 40px;\n}\n.sticker-box-wrapper .sticker-box.empty-sticker > span {\n  white-space: nowrap;\n}\n.sticker-box-wrapper .sticker-box.full {\n  height: 200px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n.sticker-box-wrapper .sticker-box.full > div {\n  margin-top: 0 !important;\n  white-space: normal !important;\n}\n.sticker-box-wrapper .sticker-set-list {\n  display: flex;\n  flex-flow: row wrap;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.sticker-box-wrapper .sticker-set-list li[class]:not(data-tooltip) {\n  flex-grow: 1;\n  text-align: center;\n  max-width: 180px;\n}\n.sticker-box-wrapper .sticker-set-list li {\n  position: relative;\n  display: inline-block;\n  line-height: 16px;\n  font-size: 14px;\n  margin: 0;\n  padding: 2px 5px;\n  border: 1px solid #999;\n  background: #fff;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.sticker-box-wrapper .sticker-set-list li.sticker-set-selected {\n  background: #ddd;\n  text-shadow: 0 0 5px rgba(255, 255, 255, 0.9);\n}\n.sticker-box-wrapper .sticker-set-list li button {\n  float: right;\n  position: relative;\n  border-radius: 0;\n  padding: 0 5px;\n  margin: 0;\n  line-height: 18px;\n  font-size: 15px;\n}\n.full .sticker-box {\n  width: 544px;\n}\n", ""]);

// exports


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(26)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/index.js!./style.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/index.js!./style.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(26)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./emotion-box.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./emotion-box.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(26)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./sticker-box.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./sticker-box.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(239);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(245);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(246);

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(247);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(251);

/***/ })
/******/ ]);
//# sourceMappingURL=voz-living.js.map
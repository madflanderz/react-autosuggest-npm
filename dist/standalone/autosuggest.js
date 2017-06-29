(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["Autosuggest"] = factory(require("React"));
	else
		root["Autosuggest"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1).default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _redux = __webpack_require__(12);

	var _redux2 = __webpack_require__(33);

	var _redux3 = _interopRequireDefault(_redux2);

	var _Autosuggest = __webpack_require__(34);

	var _Autosuggest2 = _interopRequireDefault(_Autosuggest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var alwaysTrue = function alwaysTrue() {
	  return true;
	};
	var defaultShouldRenderSuggestions = function defaultShouldRenderSuggestions(value) {
	  return value.trim().length > 0;
	};
	var defaultTheme = {
	  container: 'react-autosuggest__container',
	  containerOpen: 'react-autosuggest__container--open',
	  input: 'react-autosuggest__input',
	  suggestionsContainer: 'react-autosuggest__suggestions-container',
	  suggestionsList: 'react-autosuggest__suggestions-list',
	  suggestion: 'react-autosuggest__suggestion',
	  suggestionFocused: 'react-autosuggest__suggestion--focused',
	  sectionContainer: 'react-autosuggest__section-container',
	  sectionTitle: 'react-autosuggest__section-title'
	};

	var mapToAutowhateverTheme = function mapToAutowhateverTheme(theme) {
	  var result = {};

	  for (var key in theme) {
	    switch (key) {
	      case 'suggestionsContainer':
	        result['itemsContainer'] = theme[key];
	        break;

	      case 'suggestion':
	        result['item'] = theme[key];
	        break;

	      case 'suggestionFocused':
	        result['itemFocused'] = theme[key];
	        break;

	      case 'suggestionsList':
	        result['itemsList'] = theme[key];
	        break;

	      default:
	        result[key] = theme[key];
	    }
	  }

	  return result;
	};

	var AutosuggestContainer = function (_Component) {
	  _inherits(AutosuggestContainer, _Component);

	  function AutosuggestContainer(_ref) {
	    var alwaysRenderSuggestions = _ref.alwaysRenderSuggestions;

	    _classCallCheck(this, AutosuggestContainer);

	    var _this = _possibleConstructorReturn(this, (AutosuggestContainer.__proto__ || Object.getPrototypeOf(AutosuggestContainer)).call(this));

	    _this.storeInputReference = function (input) {
	      _this.input = input;
	    };

	    var initialState = {
	      isFocused: false,
	      isCollapsed: !alwaysRenderSuggestions,
	      focusedSectionIndex: null,
	      focusedSuggestionIndex: null,
	      valueBeforeUpDown: null
	    };

	    _this.store = (0, _redux.createStore)(_redux3.default, initialState);
	    return _this;
	  }

	  _createClass(AutosuggestContainer, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          suggestions = _props.suggestions,
	          onSuggestionsFetchRequested = _props.onSuggestionsFetchRequested,
	          onSuggestionsClearRequested = _props.onSuggestionsClearRequested,
	          multiSection = _props.multiSection,
	          shouldRenderSuggestions = _props.shouldRenderSuggestions,
	          renderInputComponent = _props.renderInputComponent,
	          renderSuggestionsContainer = _props.renderSuggestionsContainer,
	          getSuggestionValue = _props.getSuggestionValue,
	          renderSuggestion = _props.renderSuggestion,
	          renderSectionTitle = _props.renderSectionTitle,
	          getSectionSuggestions = _props.getSectionSuggestions,
	          inputProps = _props.inputProps,
	          onSuggestionSelected = _props.onSuggestionSelected,
	          focusInputOnSuggestionClick = _props.focusInputOnSuggestionClick,
	          focusFirstSuggestion = _props.focusFirstSuggestion,
	          alwaysRenderSuggestions = _props.alwaysRenderSuggestions,
	          theme = _props.theme,
	          id = _props.id;


	      return _react2.default.createElement(_Autosuggest2.default, {
	        suggestions: suggestions,
	        onSuggestionsFetchRequested: onSuggestionsFetchRequested,
	        onSuggestionsClearRequested: onSuggestionsClearRequested,
	        multiSection: multiSection,
	        shouldRenderSuggestions: alwaysRenderSuggestions ? alwaysTrue : shouldRenderSuggestions,
	        alwaysRenderSuggestions: alwaysRenderSuggestions,
	        renderInputComponent: renderInputComponent,
	        renderSuggestionsContainer: renderSuggestionsContainer,
	        getSuggestionValue: getSuggestionValue,
	        renderSuggestion: renderSuggestion,
	        renderSectionTitle: renderSectionTitle,
	        getSectionSuggestions: getSectionSuggestions,
	        inputProps: inputProps,
	        onSuggestionSelected: onSuggestionSelected,
	        focusInputOnSuggestionClick: focusInputOnSuggestionClick,
	        focusFirstSuggestion: focusFirstSuggestion,
	        theme: mapToAutowhateverTheme(theme),
	        id: id,
	        inputRef: this.storeInputReference,
	        store: this.store
	      });
	    }
	  }]);

	  return AutosuggestContainer;
	}(_react.Component);

	exports.default = AutosuggestContainer;


	process.env.NODE_ENV !== "production" ? AutosuggestContainer.propTypes = {
	  suggestions: _propTypes2.default.array.isRequired,
	  onSuggestionsFetchRequested: function onSuggestionsFetchRequested(props, propName) {
	    var onSuggestionsFetchRequested = props[propName];

	    if (typeof onSuggestionsFetchRequested !== 'function') {
	      throw new Error('\'onSuggestionsFetchRequested\' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsFetchRequestedProp');
	    }
	  },
	  onSuggestionsClearRequested: function onSuggestionsClearRequested(props, propName) {
	    var onSuggestionsClearRequested = props[propName];

	    if (props.alwaysRenderSuggestions === false && typeof onSuggestionsClearRequested !== 'function') {
	      throw new Error('\'onSuggestionsClearRequested\' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsClearRequestedProp');
	    }
	  },
	  onSuggestionSelected: _propTypes2.default.func,
	  renderInputComponent: _propTypes2.default.func,
	  renderSuggestionsContainer: _propTypes2.default.func,
	  getSuggestionValue: _propTypes2.default.func.isRequired,
	  renderSuggestion: _propTypes2.default.func.isRequired,
	  inputProps: function inputProps(props, propName) {
	    var inputProps = props[propName];

	    if (!inputProps.hasOwnProperty('value')) {
	      throw new Error('\'inputProps\' must have \'value\'.');
	    }

	    if (!inputProps.hasOwnProperty('onChange')) {
	      throw new Error('\'inputProps\' must have \'onChange\'.');
	    }
	  },
	  shouldRenderSuggestions: _propTypes2.default.func,
	  alwaysRenderSuggestions: _propTypes2.default.bool,
	  multiSection: _propTypes2.default.bool,
	  renderSectionTitle: function renderSectionTitle(props, propName) {
	    var renderSectionTitle = props[propName];

	    if (props.multiSection === true && typeof renderSectionTitle !== 'function') {
	      throw new Error('\'renderSectionTitle\' must be implemented. See: https://github.com/moroshko/react-autosuggest#renderSectionTitleProp');
	    }
	  },
	  getSectionSuggestions: function getSectionSuggestions(props, propName) {
	    var getSectionSuggestions = props[propName];

	    if (props.multiSection === true && typeof getSectionSuggestions !== 'function') {
	      throw new Error('\'getSectionSuggestions\' must be implemented. See: https://github.com/moroshko/react-autosuggest#getSectionSuggestionsProp');
	    }
	  },
	  focusInputOnSuggestionClick: _propTypes2.default.bool,
	  focusFirstSuggestion: _propTypes2.default.bool,
	  theme: _propTypes2.default.object,
	  id: _propTypes2.default.string
	} : void 0;

	AutosuggestContainer.defaultProps = {
	  shouldRenderSuggestions: defaultShouldRenderSuggestions,
	  alwaysRenderSuggestions: false,
	  multiSection: false,
	  focusInputOnSuggestionClick: true,
	  focusFirstSuggestion: false,
	  theme: defaultTheme,
	  id: '1'
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(5)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(11)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(6);
	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(8);

	var ReactPropTypesSecret = __webpack_require__(9);
	var checkPropTypes = __webpack_require__(10);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(6);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(7);
	  var warning = __webpack_require__(8);
	  var ReactPropTypesSecret = __webpack_require__(9);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(6);
	var invariant = __webpack_require__(7);
	var ReactPropTypesSecret = __webpack_require__(9);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(13);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(28);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(30);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(31);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(32);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(29);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(14);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(24);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(15),
	    getPrototype = __webpack_require__(21),
	    isObjectLike = __webpack_require__(23);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(16),
	    getRawTag = __webpack_require__(19),
	    objectToString = __webpack_require__(20);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(17);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(18);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(16);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(22);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(25);


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(27);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(26)(module)))

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(13);

	var _isPlainObject = __webpack_require__(14);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(29);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  if (process.env.NODE_ENV !== 'production') {
	    var unexpectedKeyCache = {};
	  }

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(32);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var INPUT_FOCUSED = 'INPUT_FOCUSED';
	var INPUT_BLURRED = 'INPUT_BLURRED';
	var INPUT_CHANGED = 'INPUT_CHANGED';
	var UPDATE_FOCUSED_SUGGESTION = 'UPDATE_FOCUSED_SUGGESTION';
	var RESET_FOCUSED_SUGGESTION = 'RESET_FOCUSED_SUGGESTION';
	var REVEAL_SUGGESTIONS = 'REVEAL_SUGGESTIONS';
	var CLOSE_SUGGESTIONS = 'CLOSE_SUGGESTIONS';

	var inputFocused = function inputFocused(shouldRenderSuggestions) {
	  return {
	    type: INPUT_FOCUSED,
	    shouldRenderSuggestions: shouldRenderSuggestions
	  };
	};

	var inputBlurred = function inputBlurred(shouldRenderSuggestions) {
	  return {
	    type: INPUT_BLURRED,
	    shouldRenderSuggestions: shouldRenderSuggestions
	  };
	};

	var inputChanged = function inputChanged(shouldRenderSuggestions) {
	  return {
	    type: INPUT_CHANGED,
	    shouldRenderSuggestions: shouldRenderSuggestions
	  };
	};

	var updateFocusedSuggestion = function updateFocusedSuggestion(sectionIndex, suggestionIndex, prevValue) {
	  return {
	    type: UPDATE_FOCUSED_SUGGESTION,
	    sectionIndex: sectionIndex,
	    suggestionIndex: suggestionIndex,
	    prevValue: prevValue
	  };
	};

	var resetFocusedSuggestion = function resetFocusedSuggestion() {
	  var shouldResetValueBeforeUpDown = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	  return {
	    type: RESET_FOCUSED_SUGGESTION,
	    shouldResetValueBeforeUpDown: shouldResetValueBeforeUpDown
	  };
	};

	var revealSuggestions = function revealSuggestions() {
	  return {
	    type: REVEAL_SUGGESTIONS
	  };
	};

	var closeSuggestions = function closeSuggestions() {
	  return {
	    type: CLOSE_SUGGESTIONS
	  };
	};

	var actionCreators = exports.actionCreators = {
	  inputFocused: inputFocused,
	  inputBlurred: inputBlurred,
	  inputChanged: inputChanged,
	  updateFocusedSuggestion: updateFocusedSuggestion,
	  resetFocusedSuggestion: resetFocusedSuggestion,
	  revealSuggestions: revealSuggestions,
	  closeSuggestions: closeSuggestions
	};

	var reducer = function reducer(state, action) {
	  switch (action.type) {
	    case INPUT_FOCUSED:
	      return _extends({}, state, {
	        isFocused: true,
	        isCollapsed: !action.shouldRenderSuggestions
	      });

	    case INPUT_BLURRED:
	      return _extends({}, state, {
	        isFocused: false,
	        focusedSectionIndex: null,
	        focusedSuggestionIndex: null,
	        valueBeforeUpDown: null,
	        isCollapsed: !action.shouldRenderSuggestions
	      });

	    case INPUT_CHANGED:
	      return _extends({}, state, {
	        focusedSectionIndex: null,
	        focusedSuggestionIndex: null,
	        valueBeforeUpDown: null,
	        isCollapsed: !action.shouldRenderSuggestions
	      });

	    case UPDATE_FOCUSED_SUGGESTION:
	      {
	        var sectionIndex = action.sectionIndex,
	            suggestionIndex = action.suggestionIndex,
	            prevValue = action.prevValue;
	        var valueBeforeUpDown = state.valueBeforeUpDown;


	        if (suggestionIndex === null) {
	          valueBeforeUpDown = null;
	        } else if (valueBeforeUpDown === null && typeof prevValue !== 'undefined') {
	          valueBeforeUpDown = prevValue;
	        }

	        return _extends({}, state, {
	          focusedSectionIndex: sectionIndex,
	          focusedSuggestionIndex: suggestionIndex,
	          valueBeforeUpDown: valueBeforeUpDown
	        });
	      }

	    case RESET_FOCUSED_SUGGESTION:
	      {
	        return _extends({}, state, {
	          focusedSectionIndex: null,
	          focusedSuggestionIndex: null,
	          valueBeforeUpDown: action.shouldResetValueBeforeUpDown ? null : state.valueBeforeUpDown
	        });
	      }

	    case REVEAL_SUGGESTIONS:
	      return _extends({}, state, {
	        isCollapsed: false
	      });

	    case CLOSE_SUGGESTIONS:
	      return _extends({}, state, {
	        focusedSectionIndex: null,
	        focusedSuggestionIndex: null,
	        valueBeforeUpDown: null,
	        isCollapsed: true
	      });

	    default:
	      return state;
	  }
	};

	exports.default = reducer;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactRedux = __webpack_require__(35);

	var _arrays = __webpack_require__(44);

	var _arrays2 = _interopRequireDefault(_arrays);

	var _redux = __webpack_require__(33);

	var _reactAutowhatever = __webpack_require__(45);

	var _reactAutowhatever2 = _interopRequireDefault(_reactAutowhatever);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    isFocused: state.isFocused,
	    isCollapsed: state.isCollapsed,
	    focusedSectionIndex: state.focusedSectionIndex,
	    focusedSuggestionIndex: state.focusedSuggestionIndex,
	    valueBeforeUpDown: state.valueBeforeUpDown
	  };
	};

	var Autosuggest = function (_Component) {
	  _inherits(Autosuggest, _Component);

	  function Autosuggest() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Autosuggest);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Autosuggest.__proto__ || Object.getPrototypeOf(Autosuggest)).call.apply(_ref, [this].concat(args))), _this), _this.onDocumentMouseDown = function (event) {
	      _this.justClickedOnSuggestionsContainer = false;

	      var node = event.detail && event.detail.target || // This is for testing only. Please show me a better way to emulate this.
	      event.target;

	      do {
	        if (node.getAttribute('data-suggestion-index') !== null) {
	          // Suggestion was clicked
	          return;
	        }

	        if (node === _this.suggestionsContainer) {
	          // Something else inside suggestions container was clicked
	          _this.justClickedOnSuggestionsContainer = true;
	          return;
	        }

	        node = node.parentNode;
	      } while (node !== null && node !== document);
	    }, _this.storeReferences = function (autowhatever) {
	      if (autowhatever !== null) {
	        var input = autowhatever.input;


	        _this.input = input;
	        _this.props.inputRef(input);

	        _this.suggestionsContainer = autowhatever.itemsContainer;
	      }
	    }, _this.onSuggestionMouseEnter = function (event, _ref2) {
	      var sectionIndex = _ref2.sectionIndex,
	          itemIndex = _ref2.itemIndex;

	      _this.props.updateFocusedSuggestion(sectionIndex, itemIndex);
	    }, _this.focusFirstSuggestion = function () {
	      _this.props.updateFocusedSuggestion(_this.props.multiSection ? 0 : null, 0);
	    }, _this.onSuggestionMouseDown = function () {
	      _this.justSelectedSuggestion = true;
	    }, _this.onSuggestionsClearRequested = function () {
	      var onSuggestionsClearRequested = _this.props.onSuggestionsClearRequested;


	      onSuggestionsClearRequested && onSuggestionsClearRequested();
	    }, _this.onSuggestionSelected = function (event, data) {
	      var _this$props = _this.props,
	          alwaysRenderSuggestions = _this$props.alwaysRenderSuggestions,
	          onSuggestionSelected = _this$props.onSuggestionSelected,
	          onSuggestionsFetchRequested = _this$props.onSuggestionsFetchRequested,
	          resetFocusedSuggestion = _this$props.resetFocusedSuggestion;


	      onSuggestionSelected && onSuggestionSelected(event, data);

	      if (alwaysRenderSuggestions) {
	        onSuggestionsFetchRequested({ value: data.suggestionValue });
	      } else {
	        _this.onSuggestionsClearRequested();
	      }

	      resetFocusedSuggestion();
	    }, _this.onSuggestionClick = function (event) {
	      var _this$props2 = _this.props,
	          alwaysRenderSuggestions = _this$props2.alwaysRenderSuggestions,
	          focusInputOnSuggestionClick = _this$props2.focusInputOnSuggestionClick,
	          closeSuggestions = _this$props2.closeSuggestions;

	      var _this$getSuggestionIn = _this.getSuggestionIndices(_this.findSuggestionElement(event.target)),
	          sectionIndex = _this$getSuggestionIn.sectionIndex,
	          suggestionIndex = _this$getSuggestionIn.suggestionIndex;

	      var clickedSuggestion = _this.getSuggestion(sectionIndex, suggestionIndex);
	      var clickedSuggestionValue = _this.props.getSuggestionValue(clickedSuggestion);

	      _this.maybeCallOnChange(event, clickedSuggestionValue, 'click');
	      _this.onSuggestionSelected(event, {
	        suggestion: clickedSuggestion,
	        suggestionValue: clickedSuggestionValue,
	        sectionIndex: sectionIndex,
	        method: 'click'
	      });

	      if (!alwaysRenderSuggestions) {
	        closeSuggestions();
	      }

	      if (focusInputOnSuggestionClick === true) {
	        _this.input.focus();
	      } else {
	        _this.onBlur();
	      }

	      setTimeout(function () {
	        _this.justSelectedSuggestion = false;
	      });
	    }, _this.onBlur = function () {
	      var _this$props3 = _this.props,
	          inputProps = _this$props3.inputProps,
	          shouldRenderSuggestions = _this$props3.shouldRenderSuggestions,
	          inputBlurred = _this$props3.inputBlurred;
	      var value = inputProps.value,
	          onBlur = inputProps.onBlur;

	      var focusedSuggestion = _this.getFocusedSuggestion();

	      inputBlurred(shouldRenderSuggestions(value));
	      onBlur && onBlur(_this.blurEvent, { focusedSuggestion: focusedSuggestion });
	    }, _this.resetFocusedSuggestionOnMouseLeave = function () {
	      _this.props.resetFocusedSuggestion(false);
	    }, _this.itemProps = function (_ref3) {
	      var sectionIndex = _ref3.sectionIndex,
	          itemIndex = _ref3.itemIndex;

	      return {
	        'data-section-index': sectionIndex,
	        'data-suggestion-index': itemIndex,
	        onMouseEnter: _this.onSuggestionMouseEnter,
	        onMouseLeave: _this.resetFocusedSuggestionOnMouseLeave,
	        onMouseDown: _this.onSuggestionMouseDown,
	        onTouchStart: _this.onSuggestionMouseDown, // Because on iOS `onMouseDown` is not triggered
	        onClick: _this.onSuggestionClick
	      };
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Autosuggest, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      document.addEventListener('mousedown', this.onDocumentMouseDown);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ((0, _arrays2.default)(nextProps.suggestions, this.props.suggestions)) {
	        if (nextProps.focusFirstSuggestion && nextProps.suggestions.length > 0 && nextProps.focusedSuggestionIndex === null && nextProps.inputProps.value !== this.props.inputProps.value && nextProps.valueBeforeUpDown === this.props.valueBeforeUpDown) {
	          this.focusFirstSuggestion();
	        }
	      } else {
	        if (this.willRenderSuggestions(nextProps)) {
	          if (nextProps.focusFirstSuggestion) {
	            this.focusFirstSuggestion();
	          }

	          var isCollapsed = nextProps.isCollapsed,
	              revealSuggestions = nextProps.revealSuggestions;


	          if (isCollapsed && !this.justSelectedSuggestion) {
	            revealSuggestions();
	          }
	        } else {
	          nextProps.resetFocusedSuggestion();
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.removeEventListener('mousedown', this.onDocumentMouseDown);
	    }
	  }, {
	    key: 'getSuggestion',
	    value: function getSuggestion(sectionIndex, suggestionIndex) {
	      var _props = this.props,
	          suggestions = _props.suggestions,
	          multiSection = _props.multiSection,
	          getSectionSuggestions = _props.getSectionSuggestions;


	      if (multiSection) {
	        return getSectionSuggestions(suggestions[sectionIndex])[suggestionIndex];
	      }

	      return suggestions[suggestionIndex];
	    }
	  }, {
	    key: 'getFocusedSuggestion',
	    value: function getFocusedSuggestion() {
	      var _props2 = this.props,
	          focusedSectionIndex = _props2.focusedSectionIndex,
	          focusedSuggestionIndex = _props2.focusedSuggestionIndex;


	      if (focusedSuggestionIndex === null) {
	        return null;
	      }

	      return this.getSuggestion(focusedSectionIndex, focusedSuggestionIndex);
	    }
	  }, {
	    key: 'getSuggestionValueByIndex',
	    value: function getSuggestionValueByIndex(sectionIndex, suggestionIndex) {
	      var getSuggestionValue = this.props.getSuggestionValue;


	      return getSuggestionValue(this.getSuggestion(sectionIndex, suggestionIndex));
	    }
	  }, {
	    key: 'getSuggestionIndices',
	    value: function getSuggestionIndices(suggestionElement) {
	      var sectionIndex = suggestionElement.getAttribute('data-section-index');
	      var suggestionIndex = suggestionElement.getAttribute('data-suggestion-index');

	      return {
	        sectionIndex: typeof sectionIndex === 'string' ? parseInt(sectionIndex, 10) : null,
	        suggestionIndex: parseInt(suggestionIndex, 10)
	      };
	    }
	  }, {
	    key: 'findSuggestionElement',
	    value: function findSuggestionElement(startNode) {
	      var node = startNode;

	      do {
	        if (node.getAttribute('data-suggestion-index') !== null) {
	          return node;
	        }

	        node = node.parentNode;
	      } while (node !== null);

	      console.error('Clicked element:', startNode); // eslint-disable-line no-console
	      throw new Error('Couldn\'t find suggestion element');
	    }
	  }, {
	    key: 'maybeCallOnChange',
	    value: function maybeCallOnChange(event, newValue, method) {
	      var _props$inputProps = this.props.inputProps,
	          value = _props$inputProps.value,
	          onChange = _props$inputProps.onChange;


	      if (newValue !== value) {
	        onChange(event, { newValue: newValue, method: method });
	      }
	    }
	  }, {
	    key: 'willRenderSuggestions',
	    value: function willRenderSuggestions(props) {
	      var suggestions = props.suggestions,
	          inputProps = props.inputProps,
	          shouldRenderSuggestions = props.shouldRenderSuggestions;
	      var value = inputProps.value;


	      return suggestions.length > 0 && shouldRenderSuggestions(value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props3 = this.props,
	          suggestions = _props3.suggestions,
	          renderInputComponent = _props3.renderInputComponent,
	          renderSuggestionsContainer = _props3.renderSuggestionsContainer,
	          onSuggestionsFetchRequested = _props3.onSuggestionsFetchRequested,
	          renderSuggestion = _props3.renderSuggestion,
	          inputProps = _props3.inputProps,
	          shouldRenderSuggestions = _props3.shouldRenderSuggestions,
	          multiSection = _props3.multiSection,
	          renderSectionTitle = _props3.renderSectionTitle,
	          id = _props3.id,
	          getSectionSuggestions = _props3.getSectionSuggestions,
	          theme = _props3.theme,
	          isFocused = _props3.isFocused,
	          isCollapsed = _props3.isCollapsed,
	          focusedSectionIndex = _props3.focusedSectionIndex,
	          focusedSuggestionIndex = _props3.focusedSuggestionIndex,
	          valueBeforeUpDown = _props3.valueBeforeUpDown,
	          inputFocused = _props3.inputFocused,
	          inputChanged = _props3.inputChanged,
	          updateFocusedSuggestion = _props3.updateFocusedSuggestion,
	          resetFocusedSuggestion = _props3.resetFocusedSuggestion,
	          revealSuggestions = _props3.revealSuggestions,
	          closeSuggestions = _props3.closeSuggestions,
	          getSuggestionValue = _props3.getSuggestionValue,
	          alwaysRenderSuggestions = _props3.alwaysRenderSuggestions;
	      var value = inputProps.value,
	          _onFocus = inputProps.onFocus,
	          _onKeyDown = inputProps.onKeyDown;

	      var willRenderSuggestions = this.willRenderSuggestions(this.props);
	      var isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions;
	      var items = isOpen ? suggestions : [];
	      var autowhateverInputProps = _extends({}, inputProps, {
	        onFocus: function onFocus(event) {
	          if (!_this2.justSelectedSuggestion && !_this2.justClickedOnSuggestionsContainer) {
	            inputFocused(shouldRenderSuggestions(value));
	            _onFocus && _onFocus(event);

	            if (shouldRenderSuggestions(value)) {
	              onSuggestionsFetchRequested({ value: value });
	            }
	          }
	        },
	        onBlur: function onBlur(event) {
	          if (_this2.justClickedOnSuggestionsContainer) {
	            _this2.input.focus();
	            return;
	          }

	          _this2.blurEvent = event;

	          if (!_this2.justSelectedSuggestion) {
	            _this2.onBlur();
	            _this2.onSuggestionsClearRequested();
	          }
	        },
	        onChange: function onChange(event) {
	          var value = event.target.value;

	          var shouldRender = shouldRenderSuggestions(value);

	          _this2.maybeCallOnChange(event, value, 'type');
	          inputChanged(shouldRender);

	          if (shouldRender) {
	            onSuggestionsFetchRequested({ value: value });
	          } else {
	            _this2.onSuggestionsClearRequested();
	          }
	        },
	        onKeyDown: function onKeyDown(event, data) {
	          switch (event.key) {
	            case 'ArrowDown':
	            case 'ArrowUp':
	              if (isCollapsed) {
	                if (shouldRenderSuggestions(value)) {
	                  onSuggestionsFetchRequested({ value: value });
	                  revealSuggestions();
	                }
	              } else if (suggestions.length > 0) {
	                var newFocusedSectionIndex = data.newFocusedSectionIndex,
	                    newFocusedItemIndex = data.newFocusedItemIndex;


	                var newValue = void 0;

	                if (newFocusedItemIndex === null) {
	                  // valueBeforeUpDown can be null if, for example, user
	                  // hovers on the first suggestion and then pressed Up.
	                  // If that happens, use the original input value.
	                  newValue = valueBeforeUpDown === null ? value : valueBeforeUpDown;
	                } else {
	                  newValue = _this2.getSuggestionValueByIndex(newFocusedSectionIndex, newFocusedItemIndex);
	                }

	                updateFocusedSuggestion(newFocusedSectionIndex, newFocusedItemIndex, value);
	                _this2.maybeCallOnChange(event, newValue, event.key === 'ArrowDown' ? 'down' : 'up');
	              }

	              event.preventDefault(); // Prevents the cursor from moving

	              break;

	            case 'Enter':
	            case 'Tab':
	              {
	                var focusedSuggestion = _this2.getFocusedSuggestion();

	                if (isOpen && !alwaysRenderSuggestions) {
	                  closeSuggestions();
	                }

	                if (focusedSuggestion !== null) {
	                  var _newValue = getSuggestionValue(focusedSuggestion);

	                  _this2.onSuggestionSelected(event, {
	                    suggestion: focusedSuggestion,
	                    suggestionValue: _newValue,
	                    sectionIndex: focusedSectionIndex,
	                    method: 'enter'
	                  });

	                  _this2.maybeCallOnChange(event, _newValue, 'enter');

	                  _this2.justSelectedSuggestion = true;

	                  setTimeout(function () {
	                    _this2.justSelectedSuggestion = false;
	                  });
	                }

	                break;
	              }

	            case 'Escape':
	              {
	                if (isOpen) {
	                  // If input.type === 'search', the browser clears the input
	                  // when Escape is pressed. We want to disable this default
	                  // behaviour so that, when suggestions are shown, we just hide
	                  // them, without clearing the input.
	                  event.preventDefault();
	                }

	                var willCloseSuggestions = isOpen && !alwaysRenderSuggestions;

	                if (valueBeforeUpDown === null) {
	                  // Didn't interact with Up/Down
	                  if (!willCloseSuggestions) {
	                    var _newValue2 = '';

	                    _this2.maybeCallOnChange(event, _newValue2, 'escape');

	                    if (shouldRenderSuggestions(_newValue2)) {
	                      onSuggestionsFetchRequested({ value: _newValue2 });
	                    } else {
	                      _this2.onSuggestionsClearRequested();
	                    }
	                  }
	                } else {
	                  // Interacted with Up/Down
	                  _this2.maybeCallOnChange(event, valueBeforeUpDown, 'escape');
	                }

	                if (willCloseSuggestions) {
	                  _this2.onSuggestionsClearRequested();
	                  closeSuggestions();
	                } else {
	                  resetFocusedSuggestion();
	                }

	                break;
	              }
	          }

	          _onKeyDown && _onKeyDown(event);
	        }
	      });
	      var renderSuggestionData = {
	        query: (valueBeforeUpDown || value).trim()
	      };

	      return _react2.default.createElement(_reactAutowhatever2.default, {
	        multiSection: multiSection,
	        items: items,
	        renderInputComponent: renderInputComponent,
	        renderItemsContainer: renderSuggestionsContainer,
	        renderItem: renderSuggestion,
	        renderItemData: renderSuggestionData,
	        renderSectionTitle: renderSectionTitle,
	        getSectionItems: getSectionSuggestions,
	        focusedSectionIndex: focusedSectionIndex,
	        focusedItemIndex: focusedSuggestionIndex,
	        inputProps: autowhateverInputProps,
	        itemProps: this.itemProps,
	        theme: theme,
	        id: id,
	        ref: this.storeReferences
	      });
	    }
	  }]);

	  return Autosuggest;
	}(_react.Component);

	process.env.NODE_ENV !== "production" ? Autosuggest.propTypes = {
	  suggestions: _propTypes2.default.array.isRequired,
	  onSuggestionsFetchRequested: _propTypes2.default.func.isRequired,
	  onSuggestionsClearRequested: _propTypes2.default.func,
	  onSuggestionSelected: _propTypes2.default.func,
	  renderInputComponent: _propTypes2.default.func,
	  renderSuggestionsContainer: _propTypes2.default.func,
	  getSuggestionValue: _propTypes2.default.func.isRequired,
	  renderSuggestion: _propTypes2.default.func.isRequired,
	  inputProps: _propTypes2.default.object.isRequired,
	  shouldRenderSuggestions: _propTypes2.default.func.isRequired,
	  alwaysRenderSuggestions: _propTypes2.default.bool.isRequired,
	  multiSection: _propTypes2.default.bool.isRequired,
	  renderSectionTitle: _propTypes2.default.func,
	  getSectionSuggestions: _propTypes2.default.func,
	  focusInputOnSuggestionClick: _propTypes2.default.bool.isRequired,
	  focusFirstSuggestion: _propTypes2.default.bool.isRequired,
	  theme: _propTypes2.default.object.isRequired,
	  id: _propTypes2.default.string.isRequired,
	  inputRef: _propTypes2.default.func.isRequired,

	  isFocused: _propTypes2.default.bool.isRequired,
	  isCollapsed: _propTypes2.default.bool.isRequired,
	  focusedSectionIndex: _propTypes2.default.number,
	  focusedSuggestionIndex: _propTypes2.default.number,
	  valueBeforeUpDown: _propTypes2.default.string,

	  inputFocused: _propTypes2.default.func.isRequired,
	  inputBlurred: _propTypes2.default.func.isRequired,
	  inputChanged: _propTypes2.default.func.isRequired,
	  updateFocusedSuggestion: _propTypes2.default.func.isRequired,
	  resetFocusedSuggestion: _propTypes2.default.func.isRequired,
	  revealSuggestions: _propTypes2.default.func.isRequired,
	  closeSuggestions: _propTypes2.default.func.isRequired
	} : void 0;

	exports.default = (0, _reactRedux.connect)(mapStateToProps, _redux.actionCreators)(Autosuggest);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(36);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(39);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(3);

	var _storeShape = __webpack_require__(37);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(38);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    return _react.Children.only(this.props.children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;


	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;


	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(3);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = connect;

	var _react = __webpack_require__(3);

	var _storeShape = __webpack_require__(37);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(40);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(41);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(38);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(14);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(42);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(43);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = void 0;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure,
	      pure = _options$pure === undefined ? true : _options$pure,
	      _options$withRef = options.withRef,
	      withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (process.env.NODE_ENV !== 'production') {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged,
	            hasStoreStateChanged = this.hasStoreStateChanged,
	            haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated,
	            statePropsPrecalculationError = this.statePropsPrecalculationError,
	            renderedElement = this.renderedElement;


	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(12);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function shallowEqualArrays(arrA, arrB) {
	  if (arrA === arrB) {
	    return true;
	  }

	  var len = arrA.length;

	  if (arrB.length !== len) {
	    return false;
	  }

	  for (var i = 0; i < len; i++) {
	    if (arrA[i] !== arrB[i]) {
	      return false;
	    }
	  }

	  return true;
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(46).default;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _sectionIterator = __webpack_require__(47);

	var _sectionIterator2 = _interopRequireDefault(_sectionIterator);

	var _reactThemeable = __webpack_require__(48);

	var _reactThemeable2 = _interopRequireDefault(_reactThemeable);

	var _SectionTitle = __webpack_require__(50);

	var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

	var _ItemsList = __webpack_require__(52);

	var _ItemsList2 = _interopRequireDefault(_ItemsList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var alwaysTrue = function alwaysTrue() {
	  return true;
	};
	var emptyObject = {};
	var defaultRenderInputComponent = function defaultRenderInputComponent(props) {
	  return _react2.default.createElement('input', props);
	};
	var defaultRenderItemsContainer = function defaultRenderItemsContainer(props) {
	  return _react2.default.createElement('div', props);
	};
	var defaultTheme = {
	  container: 'react-autowhatever__container',
	  containerOpen: 'react-autowhatever__container--open',
	  input: 'react-autowhatever__input',
	  itemsContainer: 'react-autowhatever__items-container',
	  itemsList: 'react-autowhatever__items-list',
	  item: 'react-autowhatever__item',
	  itemFocused: 'react-autowhatever__item--focused',
	  sectionContainer: 'react-autowhatever__section-container',
	  sectionTitle: 'react-autowhatever__section-title'
	};

	var Autowhatever = function (_Component) {
	  _inherits(Autowhatever, _Component);

	  function Autowhatever(props) {
	    _classCallCheck(this, Autowhatever);

	    var _this = _possibleConstructorReturn(this, (Autowhatever.__proto__ || Object.getPrototypeOf(Autowhatever)).call(this, props));

	    _this.focusedItem = null;

	    _this.setSectionsItems(props);
	    _this.setSectionIterator(props);
	    _this.setTheme(props);

	    _this.onKeyDown = _this.onKeyDown.bind(_this);
	    _this.storeInputReference = _this.storeInputReference.bind(_this);
	    _this.storeItemsContainerReference = _this.storeItemsContainerReference.bind(_this);
	    _this.onFocusedItemChange = _this.onFocusedItemChange.bind(_this);
	    _this.getItemId = _this.getItemId.bind(_this);
	    return _this;
	  }

	  _createClass(Autowhatever, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.ensureFocusedItemIsVisible();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.items !== this.props.items) {
	        this.setSectionsItems(nextProps);
	      }

	      if (nextProps.items !== this.props.items || nextProps.multiSection !== this.props.multiSection) {
	        this.setSectionIterator(nextProps);
	      }

	      if (nextProps.theme !== this.props.theme) {
	        this.setTheme(nextProps);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.ensureFocusedItemIsVisible();
	    }
	  }, {
	    key: 'setSectionsItems',
	    value: function setSectionsItems(props) {
	      if (props.multiSection) {
	        this.sectionsItems = props.items.map(function (section) {
	          return props.getSectionItems(section);
	        });
	        this.sectionsLengths = this.sectionsItems.map(function (items) {
	          return items.length;
	        });
	        this.allSectionsAreEmpty = this.sectionsLengths.every(function (itemsCount) {
	          return itemsCount === 0;
	        });
	      }
	    }
	  }, {
	    key: 'setSectionIterator',
	    value: function setSectionIterator(props) {
	      this.sectionIterator = (0, _sectionIterator2.default)({
	        multiSection: props.multiSection,
	        data: props.multiSection ? this.sectionsLengths : props.items.length
	      });
	    }
	  }, {
	    key: 'setTheme',
	    value: function setTheme(props) {
	      this.theme = (0, _reactThemeable2.default)(props.theme);
	    }
	  }, {
	    key: 'storeInputReference',
	    value: function storeInputReference(input) {
	      if (input !== null) {
	        this.input = input;
	      }
	    }
	  }, {
	    key: 'storeItemsContainerReference',
	    value: function storeItemsContainerReference(itemsContainer) {
	      if (itemsContainer !== null) {
	        this.itemsContainer = itemsContainer;
	      }
	    }
	  }, {
	    key: 'onFocusedItemChange',
	    value: function onFocusedItemChange(focusedItem) {
	      this.focusedItem = focusedItem;
	    }
	  }, {
	    key: 'getItemId',
	    value: function getItemId(sectionIndex, itemIndex) {
	      if (itemIndex === null) {
	        return null;
	      }

	      var id = this.props.id;

	      var section = sectionIndex === null ? '' : 'section-' + sectionIndex;

	      return 'react-autowhatever-' + id + '-' + section + '-item-' + itemIndex;
	    }
	  }, {
	    key: 'renderSections',
	    value: function renderSections() {
	      var _this2 = this;

	      if (this.allSectionsAreEmpty) {
	        return null;
	      }

	      var theme = this.theme;
	      var _props = this.props;
	      var id = _props.id;
	      var items = _props.items;
	      var renderItem = _props.renderItem;
	      var renderItemData = _props.renderItemData;
	      var shouldRenderSection = _props.shouldRenderSection;
	      var renderSectionTitle = _props.renderSectionTitle;
	      var focusedSectionIndex = _props.focusedSectionIndex;
	      var focusedItemIndex = _props.focusedItemIndex;
	      var itemProps = _props.itemProps;


	      return items.map(function (section, sectionIndex) {
	        if (!shouldRenderSection(section)) {
	          return null;
	        }

	        var keyPrefix = 'react-autowhatever-' + id + '-';
	        var sectionKeyPrefix = keyPrefix + 'section-' + sectionIndex + '-';

	        // `key` is provided by theme()
	        /* eslint-disable react/jsx-key */
	        return _react2.default.createElement(
	          'div',
	          theme(sectionKeyPrefix + 'container', 'sectionContainer'),
	          _react2.default.createElement(_SectionTitle2.default, {
	            section: section,
	            renderSectionTitle: renderSectionTitle,
	            theme: theme,
	            sectionKeyPrefix: sectionKeyPrefix
	          }),
	          _react2.default.createElement(_ItemsList2.default, {
	            items: _this2.sectionsItems[sectionIndex],
	            itemProps: itemProps,
	            renderItem: renderItem,
	            renderItemData: renderItemData,
	            sectionIndex: sectionIndex,
	            focusedItemIndex: focusedSectionIndex === sectionIndex ? focusedItemIndex : null,
	            onFocusedItemChange: _this2.onFocusedItemChange,
	            getItemId: _this2.getItemId,
	            theme: theme,
	            keyPrefix: keyPrefix,
	            ref: _this2.storeItemsListReference
	          })
	        );
	        /* eslint-enable react/jsx-key */
	      });
	    }
	  }, {
	    key: 'renderItems',
	    value: function renderItems() {
	      var items = this.props.items;


	      if (items.length === 0) {
	        return null;
	      }

	      var theme = this.theme;
	      var _props2 = this.props;
	      var id = _props2.id;
	      var renderItem = _props2.renderItem;
	      var renderItemData = _props2.renderItemData;
	      var focusedSectionIndex = _props2.focusedSectionIndex;
	      var focusedItemIndex = _props2.focusedItemIndex;
	      var itemProps = _props2.itemProps;


	      return _react2.default.createElement(_ItemsList2.default, {
	        items: items,
	        itemProps: itemProps,
	        renderItem: renderItem,
	        renderItemData: renderItemData,
	        focusedItemIndex: focusedSectionIndex === null ? focusedItemIndex : null,
	        onFocusedItemChange: this.onFocusedItemChange,
	        getItemId: this.getItemId,
	        theme: theme,
	        keyPrefix: 'react-autowhatever-' + id + '-'
	      });
	    }
	  }, {
	    key: 'onKeyDown',
	    value: function onKeyDown(event) {
	      var _props3 = this.props;
	      var inputProps = _props3.inputProps;
	      var focusedSectionIndex = _props3.focusedSectionIndex;
	      var focusedItemIndex = _props3.focusedItemIndex;


	      switch (event.key) {
	        case 'ArrowDown':
	        case 'ArrowUp':
	          {
	            var nextPrev = event.key === 'ArrowDown' ? 'next' : 'prev';

	            var _sectionIterator$next = this.sectionIterator[nextPrev]([focusedSectionIndex, focusedItemIndex]);

	            var _sectionIterator$next2 = _slicedToArray(_sectionIterator$next, 2);

	            var newFocusedSectionIndex = _sectionIterator$next2[0];
	            var newFocusedItemIndex = _sectionIterator$next2[1];


	            inputProps.onKeyDown(event, { newFocusedSectionIndex: newFocusedSectionIndex, newFocusedItemIndex: newFocusedItemIndex });
	            break;
	          }

	        default:
	          inputProps.onKeyDown(event, { focusedSectionIndex: focusedSectionIndex, focusedItemIndex: focusedItemIndex });
	      }
	    }
	  }, {
	    key: 'ensureFocusedItemIsVisible',
	    value: function ensureFocusedItemIsVisible() {
	      var focusedItem = this.focusedItem;


	      if (!focusedItem) {
	        return;
	      }

	      var itemsContainer = this.itemsContainer;

	      var itemOffsetRelativeToContainer = focusedItem.offsetParent === itemsContainer ? focusedItem.offsetTop : focusedItem.offsetTop - itemsContainer.offsetTop;

	      var scrollTop = itemsContainer.scrollTop; // Top of the visible area

	      if (itemOffsetRelativeToContainer < scrollTop) {
	        // Item is off the top of the visible area
	        scrollTop = itemOffsetRelativeToContainer;
	      } else if (itemOffsetRelativeToContainer + focusedItem.offsetHeight > scrollTop + itemsContainer.offsetHeight) {
	        // Item is off the bottom of the visible area
	        scrollTop = itemOffsetRelativeToContainer + focusedItem.offsetHeight - itemsContainer.offsetHeight;
	      }

	      if (scrollTop !== itemsContainer.scrollTop) {
	        itemsContainer.scrollTop = scrollTop;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var theme = this.theme;
	      var _props4 = this.props;
	      var id = _props4.id;
	      var multiSection = _props4.multiSection;
	      var renderInputComponent = _props4.renderInputComponent;
	      var renderItemsContainer = _props4.renderItemsContainer;
	      var focusedSectionIndex = _props4.focusedSectionIndex;
	      var focusedItemIndex = _props4.focusedItemIndex;

	      var renderedItems = multiSection ? this.renderSections() : this.renderItems();
	      var isOpen = renderedItems !== null;
	      var ariaActivedescendant = this.getItemId(focusedSectionIndex, focusedItemIndex);
	      var containerProps = theme('react-autowhatever-' + id + '-container', 'container', isOpen && 'containerOpen');
	      var itemsContainerId = 'react-autowhatever-' + id;
	      var inputComponent = renderInputComponent(_extends({
	        type: 'text',
	        value: '',
	        autoComplete: 'off',
	        role: 'combobox',
	        'aria-autocomplete': 'list',
	        'aria-owns': itemsContainerId,
	        'aria-expanded': isOpen,
	        'aria-haspopup': isOpen,
	        'aria-activedescendant': ariaActivedescendant
	      }, theme('react-autowhatever-' + id + '-input', 'input'), this.props.inputProps, {
	        onKeyDown: this.props.inputProps.onKeyDown && this.onKeyDown,
	        ref: this.storeInputReference
	      }));
	      var itemsContainer = renderItemsContainer(_extends({
	        id: itemsContainerId
	      }, theme('react-autowhatever-' + id + '-items-container', 'itemsContainer'), {
	        ref: this.storeItemsContainerReference,
	        children: renderedItems
	      }));

	      return _react2.default.createElement(
	        'div',
	        containerProps,
	        inputComponent,
	        itemsContainer
	      );
	    }
	  }]);

	  return Autowhatever;
	}(_react.Component);

	Autowhatever.propTypes = {
	  id: _react.PropTypes.string, // Used in aria-* attributes. If multiple Autowhatever's are rendered on a page, they must have unique ids.
	  multiSection: _react.PropTypes.bool, // Indicates whether a multi section layout should be rendered.
	  renderInputComponent: _react.PropTypes.func, // Renders the input component.
	  items: _react.PropTypes.array.isRequired, // Array of items or sections to render.
	  renderItemsContainer: _react.PropTypes.func, // Renders the items container.
	  renderItem: _react.PropTypes.func, // This function renders a single item.
	  renderItemData: _react.PropTypes.object, // Arbitrary data that will be passed to renderItem()
	  shouldRenderSection: _react.PropTypes.func, // This function gets a section and returns whether it should be rendered, or not.
	  renderSectionTitle: _react.PropTypes.func, // This function gets a section and renders its title.
	  getSectionItems: _react.PropTypes.func, // This function gets a section and returns its items, which will be passed into `renderItem` for rendering.
	  inputComponent: _react.PropTypes.func, // When specified, it is used to render the input element
	  inputProps: _react.PropTypes.object, // Arbitrary input props
	  itemProps: _react.PropTypes.oneOfType([// Arbitrary item props
	  _react.PropTypes.object, _react.PropTypes.func]),
	  focusedSectionIndex: _react.PropTypes.number, // Section index of the focused item
	  focusedItemIndex: _react.PropTypes.number, // Focused item index (within a section)
	  theme: _react.PropTypes.oneOfType([// Styles. See: https://github.com/markdalgleish/react-themeable
	  _react.PropTypes.object, _react.PropTypes.array])
	};
	Autowhatever.defaultProps = {
	  id: '1',
	  multiSection: false,
	  renderInputComponent: defaultRenderInputComponent,
	  renderItemsContainer: defaultRenderItemsContainer,
	  shouldRenderSection: alwaysTrue,
	  renderItem: function renderItem() {
	    throw new Error('`renderItem` must be provided');
	  },
	  renderItemData: emptyObject,
	  renderSectionTitle: function renderSectionTitle() {
	    throw new Error('`renderSectionTitle` must be provided');
	  },
	  getSectionItems: function getSectionItems() {
	    throw new Error('`getSectionItems` must be provided');
	  },
	  inputProps: emptyObject,
	  itemProps: emptyObject,
	  focusedSectionIndex: null,
	  focusedItemIndex: null,
	  theme: defaultTheme
	};
	exports.default = Autowhatever;

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	module.exports = function (_ref) {
	  var data = _ref.data;
	  var multiSection = _ref.multiSection;

	  function nextNonEmptySectionIndex(sectionIndex) {
	    if (sectionIndex === null) {
	      sectionIndex = 0;
	    } else {
	      sectionIndex++;
	    }

	    while (sectionIndex < data.length && data[sectionIndex] === 0) {
	      sectionIndex++;
	    }

	    return sectionIndex === data.length ? null : sectionIndex;
	  }

	  function prevNonEmptySectionIndex(sectionIndex) {
	    if (sectionIndex === null) {
	      sectionIndex = data.length - 1;
	    } else {
	      sectionIndex--;
	    }

	    while (sectionIndex >= 0 && data[sectionIndex] === 0) {
	      sectionIndex--;
	    }

	    return sectionIndex === -1 ? null : sectionIndex;
	  }

	  function next(position) {
	    var _position = _slicedToArray(position, 2);

	    var sectionIndex = _position[0];
	    var itemIndex = _position[1];


	    if (multiSection) {
	      if (itemIndex === null || itemIndex === data[sectionIndex] - 1) {
	        sectionIndex = nextNonEmptySectionIndex(sectionIndex);

	        if (sectionIndex === null) {
	          return [null, null];
	        }

	        return [sectionIndex, 0];
	      }

	      return [sectionIndex, itemIndex + 1];
	    }

	    if (data === 0 || itemIndex === data - 1) {
	      return [null, null];
	    }

	    if (itemIndex === null) {
	      return [null, 0];
	    }

	    return [null, itemIndex + 1];
	  }

	  function prev(position) {
	    var _position2 = _slicedToArray(position, 2);

	    var sectionIndex = _position2[0];
	    var itemIndex = _position2[1];


	    if (multiSection) {
	      if (itemIndex === null || itemIndex === 0) {
	        sectionIndex = prevNonEmptySectionIndex(sectionIndex);

	        if (sectionIndex === null) {
	          return [null, null];
	        }

	        return [sectionIndex, data[sectionIndex] - 1];
	      }

	      return [sectionIndex, itemIndex - 1];
	    }

	    if (data === 0 || itemIndex === 0) {
	      return [null, null];
	    }

	    if (itemIndex === null) {
	      return [null, data - 1];
	    }

	    return [null, itemIndex - 1];
	  }

	  function isLast(position) {
	    return next(position)[1] === null;
	  }

	  return {
	    next: next,
	    prev: prev,
	    isLast: isLast
	  };
	};


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var _objectAssign = __webpack_require__(49);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var truthy = function truthy(x) {
	  return x;
	};

	exports['default'] = function (input) {
	  var _ref = Array.isArray(input) && input.length === 2 ? input : [input, null];

	  var _ref2 = _slicedToArray(_ref, 2);

	  var theme = _ref2[0];
	  var classNameDecorator = _ref2[1];

	  return function (key) {
	    for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      names[_key - 1] = arguments[_key];
	    }

	    var styles = names.map(function (name) {
	      return theme[name];
	    }).filter(truthy);

	    return typeof styles[0] === 'string' || typeof classNameDecorator === 'function' ? { key: key, className: classNameDecorator ? classNameDecorator.apply(undefined, _toConsumableArray(styles)) : styles.join(' ') } : { key: key, style: _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(styles))) };
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function ownEnumerableKeys(obj) {
		var keys = Object.getOwnPropertyNames(obj);

		if (Object.getOwnPropertySymbols) {
			keys = keys.concat(Object.getOwnPropertySymbols(obj));
		}

		return keys.filter(function (key) {
			return propIsEnumerable.call(obj, key);
		});
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = ownEnumerableKeys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _compareObjects = __webpack_require__(51);

	var _compareObjects2 = _interopRequireDefault(_compareObjects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SectionTitle = function (_Component) {
	  _inherits(SectionTitle, _Component);

	  function SectionTitle() {
	    _classCallCheck(this, SectionTitle);

	    return _possibleConstructorReturn(this, (SectionTitle.__proto__ || Object.getPrototypeOf(SectionTitle)).apply(this, arguments));
	  }

	  _createClass(SectionTitle, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return (0, _compareObjects2.default)(nextProps, this.props);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var section = _props.section;
	      var renderSectionTitle = _props.renderSectionTitle;
	      var theme = _props.theme;
	      var sectionKeyPrefix = _props.sectionKeyPrefix;

	      var sectionTitle = renderSectionTitle(section);

	      if (!sectionTitle) {
	        return null;
	      }

	      return _react2.default.createElement(
	        'div',
	        theme(sectionKeyPrefix + 'title', 'sectionTitle'),
	        sectionTitle
	      );
	    }
	  }]);

	  return SectionTitle;
	}(_react.Component);

	SectionTitle.propTypes = {
	  section: _react.PropTypes.any.isRequired,
	  renderSectionTitle: _react.PropTypes.func.isRequired,
	  theme: _react.PropTypes.func.isRequired,
	  sectionKeyPrefix: _react.PropTypes.string.isRequired
	};
	exports.default = SectionTitle;

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = compareObjects;
	function compareObjects(objA, objB) {
	  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

	  if (objA === objB) {
	    return false;
	  }

	  var aKeys = Object.keys(objA);
	  var bKeys = Object.keys(objB);

	  if (aKeys.length !== bKeys.length) {
	    return true;
	  }

	  var keysMap = {};
	  var i = void 0,
	      len = void 0;

	  for (i = 0, len = keys.length; i < len; i++) {
	    keysMap[keys[i]] = true;
	  }

	  for (i = 0, len = aKeys.length; i < len; i++) {
	    var key = aKeys[i];
	    var aValue = objA[key];
	    var bValue = objB[key];

	    if (aValue === bValue) {
	      continue;
	    }

	    if (!keysMap[key] || aValue === null || bValue === null || (typeof aValue === 'undefined' ? 'undefined' : _typeof(aValue)) !== 'object' || (typeof bValue === 'undefined' ? 'undefined' : _typeof(bValue)) !== 'object') {
	      return true;
	    }

	    var aValueKeys = Object.keys(aValue);
	    var bValueKeys = Object.keys(bValue);

	    if (aValueKeys.length !== bValueKeys.length) {
	      return true;
	    }

	    for (var n = 0, length = aValueKeys.length; n < length; n++) {
	      var aValueKey = aValueKeys[n];

	      if (aValue[aValueKey] !== bValue[aValueKey]) {
	        return true;
	      }
	    }
	  }

	  return false;
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Item = __webpack_require__(53);

	var _Item2 = _interopRequireDefault(_Item);

	var _compareObjects = __webpack_require__(51);

	var _compareObjects2 = _interopRequireDefault(_compareObjects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ItemsList = function (_Component) {
	  _inherits(ItemsList, _Component);

	  function ItemsList() {
	    _classCallCheck(this, ItemsList);

	    var _this = _possibleConstructorReturn(this, (ItemsList.__proto__ || Object.getPrototypeOf(ItemsList)).call(this));

	    _this.storeFocusedItemReference = _this.storeFocusedItemReference.bind(_this);
	    return _this;
	  }

	  _createClass(ItemsList, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return (0, _compareObjects2.default)(nextProps, this.props, ['itemProps']);
	    }
	  }, {
	    key: 'storeFocusedItemReference',
	    value: function storeFocusedItemReference(focusedItem) {
	      this.props.onFocusedItemChange(focusedItem === null ? null : focusedItem.item);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var items = _props.items;
	      var itemProps = _props.itemProps;
	      var renderItem = _props.renderItem;
	      var renderItemData = _props.renderItemData;
	      var sectionIndex = _props.sectionIndex;
	      var focusedItemIndex = _props.focusedItemIndex;
	      var getItemId = _props.getItemId;
	      var theme = _props.theme;
	      var keyPrefix = _props.keyPrefix;

	      var sectionPrefix = sectionIndex === null ? keyPrefix : keyPrefix + 'section-' + sectionIndex + '-';
	      var isItemPropsFunction = typeof itemProps === 'function';

	      return _react2.default.createElement(
	        'ul',
	        _extends({ role: 'listbox' }, theme(sectionPrefix + 'items-list', 'itemsList')),
	        items.map(function (item, itemIndex) {
	          var isFocused = itemIndex === focusedItemIndex;
	          var itemKey = sectionPrefix + 'item-' + itemIndex;
	          var itemPropsObj = isItemPropsFunction ? itemProps({ sectionIndex: sectionIndex, itemIndex: itemIndex }) : itemProps;
	          var allItemProps = _extends({
	            id: getItemId(sectionIndex, itemIndex)
	          }, theme(itemKey, 'item', isFocused && 'itemFocused'), itemPropsObj);

	          if (isFocused) {
	            allItemProps.ref = _this2.storeFocusedItemReference;
	          }

	          // `key` is provided by theme()
	          /* eslint-disable react/jsx-key */
	          return _react2.default.createElement(_Item2.default, _extends({}, allItemProps, {
	            sectionIndex: sectionIndex,
	            itemIndex: itemIndex,
	            item: item,
	            renderItem: renderItem,
	            renderItemData: renderItemData
	          }));
	          /* eslint-enable react/jsx-key */
	        })
	      );
	    }
	  }]);

	  return ItemsList;
	}(_react.Component);

	ItemsList.propTypes = {
	  items: _react.PropTypes.array.isRequired,
	  itemProps: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),
	  renderItem: _react.PropTypes.func.isRequired,
	  renderItemData: _react.PropTypes.object.isRequired,
	  sectionIndex: _react.PropTypes.number,
	  focusedItemIndex: _react.PropTypes.number,
	  onFocusedItemChange: _react.PropTypes.func.isRequired,
	  getItemId: _react.PropTypes.func.isRequired,
	  theme: _react.PropTypes.func.isRequired,
	  keyPrefix: _react.PropTypes.string.isRequired
	};
	ItemsList.defaultProps = {
	  sectionIndex: null
	};
	exports.default = ItemsList;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _compareObjects = __webpack_require__(51);

	var _compareObjects2 = _interopRequireDefault(_compareObjects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Item = function (_Component) {
	  _inherits(Item, _Component);

	  function Item() {
	    _classCallCheck(this, Item);

	    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

	    _this.storeItemReference = _this.storeItemReference.bind(_this);
	    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
	    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
	    _this.onMouseDown = _this.onMouseDown.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }

	  _createClass(Item, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return (0, _compareObjects2.default)(nextProps, this.props, ['renderItemData']);
	    }
	  }, {
	    key: 'storeItemReference',
	    value: function storeItemReference(item) {
	      if (item !== null) {
	        this.item = item;
	      }
	    }
	  }, {
	    key: 'onMouseEnter',
	    value: function onMouseEnter(event) {
	      var _props = this.props;
	      var sectionIndex = _props.sectionIndex;
	      var itemIndex = _props.itemIndex;


	      this.props.onMouseEnter(event, { sectionIndex: sectionIndex, itemIndex: itemIndex });
	    }
	  }, {
	    key: 'onMouseLeave',
	    value: function onMouseLeave(event) {
	      var _props2 = this.props;
	      var sectionIndex = _props2.sectionIndex;
	      var itemIndex = _props2.itemIndex;


	      this.props.onMouseLeave(event, { sectionIndex: sectionIndex, itemIndex: itemIndex });
	    }
	  }, {
	    key: 'onMouseDown',
	    value: function onMouseDown(event) {
	      var _props3 = this.props;
	      var sectionIndex = _props3.sectionIndex;
	      var itemIndex = _props3.itemIndex;


	      this.props.onMouseDown(event, { sectionIndex: sectionIndex, itemIndex: itemIndex });
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(event) {
	      var _props4 = this.props;
	      var sectionIndex = _props4.sectionIndex;
	      var itemIndex = _props4.itemIndex;


	      this.props.onClick(event, { sectionIndex: sectionIndex, itemIndex: itemIndex });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props5 = this.props;
	      var item = _props5.item;
	      var renderItem = _props5.renderItem;
	      var renderItemData = _props5.renderItemData;

	      var restProps = _objectWithoutProperties(_props5, ['item', 'renderItem', 'renderItemData']);

	      delete restProps.sectionIndex;
	      delete restProps.itemIndex;

	      if (typeof restProps.onMouseEnter === 'function') {
	        restProps.onMouseEnter = this.onMouseEnter;
	      }

	      if (typeof restProps.onMouseLeave === 'function') {
	        restProps.onMouseLeave = this.onMouseLeave;
	      }

	      if (typeof restProps.onMouseDown === 'function') {
	        restProps.onMouseDown = this.onMouseDown;
	      }

	      if (typeof restProps.onClick === 'function') {
	        restProps.onClick = this.onClick;
	      }

	      return _react2.default.createElement(
	        'li',
	        _extends({ role: 'option' }, restProps, { ref: this.storeItemReference }),
	        renderItem(item, renderItemData)
	      );
	    }
	  }]);

	  return Item;
	}(_react.Component);

	Item.propTypes = {
	  sectionIndex: _react.PropTypes.number,
	  itemIndex: _react.PropTypes.number.isRequired,
	  item: _react.PropTypes.any.isRequired,
	  renderItem: _react.PropTypes.func.isRequired,
	  renderItemData: _react.PropTypes.object.isRequired,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onMouseDown: _react.PropTypes.func,
	  onClick: _react.PropTypes.func
	};
	exports.default = Item;

/***/ }
/******/ ])
});
;
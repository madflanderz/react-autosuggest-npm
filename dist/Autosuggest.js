'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _arrays = require('shallow-equal/arrays');

var _arrays2 = _interopRequireDefault(_arrays);

var _redux = require('./redux');

var _reactAutowhatever = require('react-autowhatever');

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

Autosuggest.propTypes = {
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
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, _redux.actionCreators)(Autosuggest);
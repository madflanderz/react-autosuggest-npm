'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require('redux');

var _redux2 = require('./redux');

var _redux3 = _interopRequireDefault(_redux2);

var _Autosuggest = require('./Autosuggest');

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


AutosuggestContainer.propTypes = {
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
};

AutosuggestContainer.defaultProps = {
  shouldRenderSuggestions: defaultShouldRenderSuggestions,
  alwaysRenderSuggestions: false,
  multiSection: false,
  focusInputOnSuggestionClick: true,
  focusFirstSuggestion: false,
  theme: defaultTheme,
  id: '1'
};
/**
 * Created by n7best.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var SearchBar = (function (_React$Component) {
    _inherits(SearchBar, _React$Component);

    function SearchBar() {
        _classCallCheck(this, SearchBar);

        _get(Object.getPrototypeOf(SearchBar.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            focus: false,
            text: ''
        };
    }

    _createClass(SearchBar, [{
        key: 'changeHandle',
        value: function changeHandle(e) {
            var text = e.target.value;
            this.setState({ text: text });
            if (this.props.onChange) this.props.onChange(text, e);
        }
    }, {
        key: 'cancelHandle',
        value: function cancelHandle(e) {
            this.setState({ focus: false });
            if (this.props.onCancel) this.props.onCancel(e);
        }
    }, {
        key: 'clearHandle',
        value: function clearHandle(e) {
            this.setState({ text: '' });
            if (this.props.onClear) this.props.onClear(e);
            if (this.props.onChange) this.props.onChange('', e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var _props = this.props;
            var children = _props.children;
            var placeholder = _props.placeholder;
            var className = _props.className;

            var others = _objectWithoutProperties(_props, ['children', 'placeholder', 'className']);

            var clz = (0, _classnames2['default'])({
                'weui_search_bar': true,
                'weui_search_focusing': this.state.focus
            }, className);

            return _react2['default'].createElement(
                'div',
                { className: clz },
                _react2['default'].createElement(
                    'form',
                    { className: 'weui_search_outer' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'weui_search_inner' },
                        _react2['default'].createElement(_icon2['default'], { value: 'search' }),
                        _react2['default'].createElement('input', {
                            ref: 'searchInput',
                            type: 'search',
                            className: 'weui_search_input',
                            placeholder: placeholder,
                            onFocus: function (e) {
                                return _this.setState({ focus: true });
                            },
                            onBlur: function (e) {
                                return _this.setState({ focus: false });
                            },
                            onChange: this.changeHandle.bind(this),
                            value: this.state.text
                        }),
                        _react2['default'].createElement('a', {
                            className: 'weui_icon_clear',
                            onClick: function (e) {
                                return e;
                            } /*issues #59*/,
                            onMouseDown: this.clearHandle.bind(this)
                        })
                    ),
                    _react2['default'].createElement(
                        'label',
                        {
                            className: 'weui_search_text',
                            onClick: function (e) {
                                return _reactDom2['default'].findDOMNode(_this.refs.searchInput).focus();
                            },
                            style: { display: this.state.text ? 'none' : null }
                        },
                        _react2['default'].createElement(_icon2['default'], { value: 'search' }),
                        _react2['default'].createElement(
                            'span',
                            null,
                            placeholder
                        )
                    )
                ),
                _react2['default'].createElement(
                    'a',
                    { className: 'weui_search_cancel', onClick: this.cancelHandle.bind(this) },
                    this.props.lang.cancel
                )
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            placeholder: _react2['default'].PropTypes.string,
            onChange: _react2['default'].PropTypes.func,
            onClear: _react2['default'].PropTypes.func,
            onCancel: _react2['default'].PropTypes.func,
            lang: _react2['default'].PropTypes.object
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            placeholder: '搜索',
            onChange: undefined,
            onClear: undefined,
            onCancel: undefined,
            lang: {
                cancel: '取消'
            }
        },
        enumerable: true
    }]);

    return SearchBar;
})(_react2['default'].Component);

exports['default'] = SearchBar;
module.exports = exports['default'];
/*React will not trigger onMouseDown when not onClick presented*/
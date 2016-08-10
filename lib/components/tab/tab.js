/**
 * Created by n7best
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tab_body = require('./tab_body');

var _tab_body2 = _interopRequireDefault(_tab_body);

var _tab_body_item = require('./tab_body_item');

var _tab_body_item2 = _interopRequireDefault(_tab_body_item);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _navbar_item = require('./navbar_item');

var _navbar_item2 = _interopRequireDefault(_navbar_item);

var _tabbar = require('./tabbar');

var _tabbar2 = _interopRequireDefault(_tabbar);

var _tabbar_item = require('./tabbar_item');

var _tabbar_item2 = _interopRequireDefault(_tabbar_item);

var _tabbar_icon = require('./tabbar_icon');

var _tabbar_icon2 = _interopRequireDefault(_tabbar_icon);

var _tabbar_label = require('./tabbar_label');

var _tabbar_label2 = _interopRequireDefault(_tabbar_label);

var Tab = (function (_React$Component) {
    _inherits(Tab, _React$Component);

    function Tab() {
        _classCallCheck(this, Tab);

        _get(Object.getPrototypeOf(Tab.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            index: this.props.defaultIndex
        };
    }

    _createClass(Tab, [{
        key: 'handleHeaderClick',
        value: function handleHeaderClick(idx) {
            this.setState({ index: idx });
            if (this.props.onChange) this.props.onChange(idx);
        }
    }, {
        key: 'parseNavBar',
        value: function parseNavBar(children) {
            var navHeaders = [];
            var navContents = [];

            _react2['default'].Children.map(children, function (child) {
                var _child$props = child.props;
                var children = _child$props.children;
                var type = _child$props.type;

                var others = _objectWithoutProperties(_child$props, ['children', 'type']);

                if (child.type === _navbar_item2['default']) {
                    navHeaders.push(child);
                    if (children) navContents.push(_react2['default'].createElement(_tab_body_item2['default'], { children: children }));
                } else if (child.type === _tab_body_item2['default']) {
                    navContents.push(child);
                }
            });

            return { navHeaders: navHeaders, navContents: navContents };
        }
    }, {
        key: 'renderNavBar',
        value: function renderNavBar(headers, contents, cls) {
            var _this = this;

            var _headers = headers.map(function (item, idx) {
                return _react2['default'].cloneElement(item, {
                    key: idx,
                    active: _this.state.index === idx,
                    onClick: _this.handleHeaderClick.bind(_this, idx, item)
                });
            });

            var _contents = contents.map(function (item, idx) {
                return _react2['default'].cloneElement(item, {
                    key: idx,
                    active: _this.state.index === idx,
                    tabIndex: idx
                });
            });

            return _react2['default'].createElement(
                'div',
                { className: cls },
                _react2['default'].createElement(
                    _navbar2['default'],
                    null,
                    _headers
                ),
                _react2['default'].createElement(
                    _tab_body2['default'],
                    null,
                    _contents
                )
            );
        }
    }, {
        key: 'parseTabBar',
        value: function parseTabBar(children) {
            var tabHeaders = [];
            var tabContents = [];

            _react2['default'].Children.map(children, function (child) {
                var _child$props2 = child.props;
                var children = _child$props2.children;
                var type = _child$props2.type;

                var others = _objectWithoutProperties(_child$props2, ['children', 'type']);

                if (child.type === _tabbar_item2['default']) {
                    tabHeaders.push(child);
                    if (children) tabContents.push(_react2['default'].createElement(_tab_body_item2['default'], { children: children }));
                } else if (child.type === _tab_body_item2['default']) {
                    tabContents.push(child);
                }
            });

            return { tabHeaders: tabHeaders, tabContents: tabContents };
        }
    }, {
        key: 'renderTabBar',
        value: function renderTabBar(headers, contents, cls) {
            var _this2 = this;

            var _headers = headers.map(function (item, idx) {
                return _react2['default'].cloneElement(item, {
                    key: idx,
                    active: _this2.state.index === idx,
                    onClick: _this2.handleHeaderClick.bind(_this2, idx, item)
                });
            });

            var _contents = contents.map(function (item, idx) {
                return _react2['default'].cloneElement(item, {
                    key: idx,
                    active: _this2.state.index === idx,
                    tabIndex: idx
                });
            });

            return _react2['default'].createElement(
                'div',
                { className: cls },
                _react2['default'].createElement(
                    _tab_body2['default'],
                    null,
                    _contents
                ),
                _react2['default'].createElement(
                    _tabbar2['default'],
                    null,
                    _headers
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var className = _props.className;
            var type = _props.type;

            var others = _objectWithoutProperties(_props, ['children', 'className', 'type']);

            var divProps = Object.assign({}, others);
            delete divProps.defaultIndex;

            var cls = (0, _classnames2['default'])({
                weui_tab: true
            }, className);

            switch (type) {
                case 'tabbar':
                    var _parseTabBar = this.parseTabBar(children),
                        tabHeaders = _parseTabBar.tabHeaders,
                        tabContents = _parseTabBar.tabContents;

                    return this.renderTabBar(tabHeaders, tabContents, cls);
                    break;
                case 'navbar':
                    var _parseNavBar = this.parseNavBar(children),
                        navHeaders = _parseNavBar.navHeaders,
                        navContents = _parseNavBar.navContents;

                    return this.renderNavBar(navHeaders, navContents, cls);
                    break;
                default:
                    return _react2['default'].createElement(
                        'div',
                        _extends({ className: cls }, divProps),
                        children
                    );
                    break;
            }
        }
    }], [{
        key: 'propTypes',
        value: {
            type: _react2['default'].PropTypes.string,
            defaultIndex: _react2['default'].PropTypes.number,
            onChange: _react2['default'].PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            type: 'normal',
            defaultIndex: 0
        },
        enumerable: true
    }]);

    return Tab;
})(_react2['default'].Component);

exports['default'] = Tab;
module.exports = exports['default'];
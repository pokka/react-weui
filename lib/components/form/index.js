/**
 * Created by yjcxy12 on 16/1/22.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

var _form_cell = require('./form_cell');

var _form_cell2 = _interopRequireDefault(_form_cell);

var _textarea = require('./textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _switch = require('./switch');

var _switch2 = _interopRequireDefault(_switch);

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _select = require('./select');

var _select2 = _interopRequireDefault(_select);

var _uploader = require('./uploader');

var _uploader2 = _interopRequireDefault(_uploader);

exports['default'] = {
    Form: _form2['default'],
    FormCell: _form_cell2['default'],
    TextArea: _textarea2['default'],
    Input: _input2['default'],
    Switch: _switch2['default'],
    Radio: _radio2['default'],
    Checkbox: _checkbox2['default'],
    Select: _select2['default'],
    Uploader: _uploader2['default']
};
module.exports = exports['default'];
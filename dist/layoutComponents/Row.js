'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _row = require('igroot/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('igroot/lib/col');

var _col2 = _interopRequireDefault(_col);

exports.default = function (item, _ref, props) {
    var yakaApis = _ref.yakaApis,
        bindingProps = _ref.bindingProps,
        elementWalk = _ref.elementWalk;
    var subs = item.subs,
        children = item.children,
        name = item.name;

    var _children = subs || children;
    if ('style' in props) {
        Object.assign({ marginTop: 15 }, props.style);
    } else {
        props.style = { marginTop: 15 };
    }
    return _react2.default.createElement(
        _row2.default,
        props,
        _children.map(function (col, index) {
            return _react2.default.createElement(
                _col2.default,
                { span: col.col && col.col || 0, key: props.key + '.' + index },
                elementWalk([col], yakaApis, props.key + '.' + index)
            );
        })
    );
};

require('igroot/lib/row/style');

require('igroot/lib/col/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
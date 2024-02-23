"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
const ModalEmployeeCreated = _ref => {
  let {
    isOpen,
    onClose
  } = _ref;
  if (!isOpen) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-background",
    onClick: onClose
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Employee Created!"), /*#__PURE__*/_react.default.createElement("button", {
    className: "close-button",
    onClick: onClose
  }))));
};
var _default = exports.default = ModalEmployeeCreated;
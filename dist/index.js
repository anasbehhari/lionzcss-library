'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".Alert-lz{border-radius:5px;display:-webkit-box;display:-ms-flexbox;display:flex;max-width:100%;min-width:400px;padding:2px 0;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.Alert-lz.error{fill:#e74c3c;background-color:#e74c3c;border-color:#e74c3c;color:#e74c3c}.Alert-lz.success{fill:#2ecc71;background-color:#2ecc71;border-color:#2ecc71;color:#2ecc71}.Alert-lz.warning{fill:#f1c40f;background-color:#f1c40f;border-color:#f1c40f;color:#f1c40f}.Alert-lz.info{fill:#409efb;background-color:#409efb;border-color:#409efb;color:#409efb}.Alert-lz .icon{fill:#fff;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center;margin:15px 20.5px;width:1.5rem}.Alert-lz .Alert-content{background-color:hsla(0,0%,100%,.97)!important;border-radius:0 3px 3px 0;display:flex;flex-direction:column;gap:3px;padding:10px;position:relative;width:calc(100% - 87px)}.Alert-lz .Alert-content *{margin:0;padding:0}.Alert-lz .Alert-content p{color:#000}.Alert-lz .close{fill:inherit;cursor:pointer;display:flex;margin:8px;position:absolute;right:0;top:0}.Alert-lz .close svg{fill:inherit;width:20px}";
styleInject(css_248z$2);

const Alert = props => {
  const types = ["success", "error", "info", "warning"];
  const type = types.includes(props.type) ? props.type : "";
  const id = props.id ? props.id : "";
  const AllowClose = props.AllowClose;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: `Alert-lz ${type} ${id} ${AllowClose}`
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 294.995 294.995",
    xmlSpace: "preserve",
    width: 20,
    height: 20
  }, /*#__PURE__*/React__default["default"].createElement("g", null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M291.874,248.279L165.605,26.526c-4.007-7.037-10.776-11.26-18.107-11.26s-14.101,4.202-18.107,11.239L3.121,248.238 c-3.979,6.989-4.164,15.013-0.493,21.326c3.67,6.313,10.663,10.165,18.705,10.165h252.329c8.042,0,15.035-3.852,18.705-10.165 C296.038,263.251,295.854,255.268,291.874,248.279z M146.665,86.229c9.665,0,17.5,7.835,17.5,17.5v63c0,9.665-7.835,17.5-17.5,17.5 c-9.665,0-17.5-7.835-17.5-17.5v-63C129.165,94.064,137,86.229,146.665,86.229z M147.498,204.005c9.665,0,17.5,7.835,17.5,17.5 c0,9.665-7.835,17.5-17.5,17.5c-9.665,0-17.5-7.835-17.5-17.5C129.998,211.84,137.833,204.005,147.498,204.005z"
  })))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "Alert-content"
  }, /*#__PURE__*/React__default["default"].createElement("h3", null, props.title), props.children), AllowClose ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "close",
    onClick: AllowClose
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
  }))) : "");
};
Alert.propTypes = {
  title: PropTypes__default["default"].string.isRequired,
  type: PropTypes__default["default"].string.isRequired,
  AllowClose: PropTypes__default["default"].func
};

var css_248z$1 = ".Button-lz{border:none;border-radius:3px;color:#fff;cursor:pointer;font-size:1rem;gap:.3rem;outline:none;overflow:hidden;padding:.7rem 1.2rem;position:relative;text-align:center;-webkit-transition:transform .1s,box-shadow .2s,background-color .2s;transition:transform .1s,box-shadow .2s,background-color .2s}.Button-lz a{text-decoration:none}.Button-lz.danger{background-color:#e74c3c}.Button-lz.danger:hover{-webkit-box-shadow:0 5px 15px 0 rgba(231,76,60,.3);box-shadow:0 5px 15px 0 rgba(231,76,60,.3)}.Button-lz.danger.outlined{border:2px solid #e74c3c;color:#e74c3c}.Button-lz.danger.outlined:hover{background-color:#e74c3c}.Button-lz.success{background-color:#2ecc71}.Button-lz.success:hover{-webkit-box-shadow:0 5px 15px 0 rgba(46,204,113,.3);box-shadow:0 5px 15px 0 rgba(46,204,113,.3)}.Button-lz.success.outlined{border:2px solid #2ecc71;color:#2ecc71}.Button-lz.success.outlined:hover{background-color:#2ecc71}.Button-lz.warning{background-color:#f1c40f}.Button-lz.warning:hover{-webkit-box-shadow:0 5px 15px 0 rgba(241,196,15,.3);box-shadow:0 5px 15px 0 rgba(241,196,15,.3)}.Button-lz.warning.outlined{border:2px solid #f1c40f;color:#f1c40f}.Button-lz.warning.outlined:hover{background-color:#f1c40f}.Button-lz.primary{background-color:#30336b}.Button-lz.primary:hover{-webkit-box-shadow:0 5px 15px 0 rgba(48,51,107,.3);box-shadow:0 5px 15px 0 rgba(48,51,107,.3)}.Button-lz.primary.outlined{border:2px solid #30336b;color:#30336b}.Button-lz.primary.outlined:hover{background-color:#30336b}.Button-lz.secondry{background-color:#747d8c}.Button-lz.secondry:hover{-webkit-box-shadow:0 5px 15px 0 hsla(218,9%,50%,.3);box-shadow:0 5px 15px 0 hsla(218,9%,50%,.3)}.Button-lz.secondry.outlined{border:2px solid #747d8c;color:#747d8c}.Button-lz.secondry.outlined:hover{background-color:#747d8c}.Button-lz.info{background-color:#409efb}.Button-lz.info:hover{-webkit-box-shadow:0 5px 15px 0 rgba(64,158,251,.3);box-shadow:0 5px 15px 0 rgba(64,158,251,.3)}.Button-lz.info.outlined{border:2px solid #409efb;color:#409efb}.Button-lz.info.outlined:hover{background-color:#409efb}.Button-lz.dragon{background-color:#ff9f43}.Button-lz.dragon:hover{-webkit-box-shadow:0 5px 15px 0 rgba(255,159,67,.3);box-shadow:0 5px 15px 0 rgba(255,159,67,.3)}.Button-lz.dragon.outlined{border:2px solid #ff9f43;color:#ff9f43}.Button-lz.dragon.outlined:hover{background-color:#ff9f43}.Button-lz.marineblue{background-color:#0652dd}.Button-lz.marineblue:hover{-webkit-box-shadow:0 5px 15px 0 rgba(6,82,221,.3);box-shadow:0 5px 15px 0 rgba(6,82,221,.3)}.Button-lz.marineblue.outlined{border:2px solid #0652dd;color:#0652dd}.Button-lz.marineblue.outlined:hover{background-color:#0652dd}.Button-lz.hrpink{background-color:#ff4f6b}.Button-lz.hrpink:hover{-webkit-box-shadow:0 5px 15px 0 rgba(255,79,107,.3);box-shadow:0 5px 15px 0 rgba(255,79,107,.3)}.Button-lz.hrpink.outlined{border:2px solid #ff4f6b;color:#ff4f6b}.Button-lz.hrpink.outlined:hover{background-color:#ff4f6b}.Button-lz.white{background-color:#fff}.Button-lz.white:hover{-webkit-box-shadow:0 5px 15px 0 hsla(0,0%,100%,.3);box-shadow:0 5px 15px 0 hsla(0,0%,100%,.3)}.Button-lz.white.outlined{border:2px solid #fff;color:#fff}.Button-lz.white.outlined:hover{background-color:#fff}.Button-lz.darkGr{background-color:#333}.Button-lz.darkGr:hover{-webkit-box-shadow:0 5px 15px 0 rgba(51,51,51,.3);box-shadow:0 5px 15px 0 rgba(51,51,51,.3)}.Button-lz.darkGr.outlined{border:2px solid #333;color:#333}.Button-lz.darkGr.outlined:hover{background-color:#333}.Button-lz.grey-3{background-color:#f2f2f2}.Button-lz.grey-3:hover{-webkit-box-shadow:0 5px 15px 0 hsla(0,0%,95%,.3);box-shadow:0 5px 15px 0 hsla(0,0%,95%,.3)}.Button-lz.grey-3.outlined{border:2px solid #f2f2f2;color:#f2f2f2}.Button-lz.grey-3.outlined:hover{background-color:#f2f2f2}.Button-lz.grey-5{background-color:#6b7280}.Button-lz.grey-5:hover{-webkit-box-shadow:0 5px 15px 0 hsla(220,9%,46%,.3);box-shadow:0 5px 15px 0 hsla(220,9%,46%,.3)}.Button-lz.grey-5.outlined{border:2px solid #6b7280;color:#6b7280}.Button-lz.grey-5.outlined:hover{background-color:#6b7280}.Button-lz.grey-4{background-color:#e3e7ed}.Button-lz.grey-4:hover{-webkit-box-shadow:0 5px 15px 0 rgba(227,231,237,.3);box-shadow:0 5px 15px 0 rgba(227,231,237,.3)}.Button-lz.grey-4.outlined{border:2px solid #e3e7ed;color:#e3e7ed}.Button-lz.grey-4.outlined:hover{background-color:#e3e7ed}.Button-lz.facebook{background-color:#3b5998}.Button-lz.facebook:hover{-webkit-box-shadow:0 5px 15px 0 rgba(59,89,152,.3);box-shadow:0 5px 15px 0 rgba(59,89,152,.3)}.Button-lz.facebook.outlined{border:2px solid #3b5998;color:#3b5998}.Button-lz.facebook.outlined:hover{background-color:#3b5998}.Button-lz.twitter{background-color:#1da1f2}.Button-lz.twitter:hover{-webkit-box-shadow:0 5px 15px 0 rgba(29,161,242,.3);box-shadow:0 5px 15px 0 rgba(29,161,242,.3)}.Button-lz.twitter.outlined{border:2px solid #1da1f2;color:#1da1f2}.Button-lz.twitter.outlined:hover{background-color:#1da1f2}.Button-lz.youtube{background-color:red}.Button-lz.youtube:hover{-webkit-box-shadow:0 5px 15px 0 rgba(255,0,0,.3);box-shadow:0 5px 15px 0 rgba(255,0,0,.3)}.Button-lz.youtube.outlined{border:2px solid red;color:red}.Button-lz.youtube.outlined:hover{background-color:red}.Button-lz.github{background-color:#24292e}.Button-lz.github:hover{-webkit-box-shadow:0 5px 15px 0 rgba(36,41,46,.3);box-shadow:0 5px 15px 0 rgba(36,41,46,.3)}.Button-lz.github.outlined{border:2px solid #24292e;color:#24292e}.Button-lz.github.outlined:hover{background-color:#24292e}.Button-lz.whatsapp{background-color:#25d366}.Button-lz.whatsapp:hover{-webkit-box-shadow:0 5px 15px 0 rgba(37,211,102,.3);box-shadow:0 5px 15px 0 rgba(37,211,102,.3)}.Button-lz.whatsapp.outlined{border:2px solid #25d366;color:#25d366}.Button-lz.whatsapp.outlined:hover{background-color:#25d366}.Button-lz.outlined{background-color:transparent;padding:.7rem calc(1.2rem - 2px)}.Button-lz.outlined:hover{color:#fff}.Button-lz.rounded{border-radius:30px}.Button-lz:before{background-color:#fff;content:\"\";height:100%;left:0;opacity:0;position:absolute;top:0;-webkit-transition:opacity .4s;transition:opacity .4s;width:100%}.Button-lz:active{-webkit-transform:scale(.98);transform:scale(.98)}.Button-lz:active:before{opacity:.2}.Button-lz.btni{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;border-radius:50%;-webkit-box-shadow:none!important;box-shadow:none!important;display:-webkit-box;display:-ms-flexbox;display:flex;height:2.5rem;justify-content:center;width:2.5rem}@media (max-width:768px){button{cursor:default!important}}";
styleInject(css_248z$1);

const Button = props => {
  const types = ["primary", "error", "success", "info", "warning", "info", "secondry", "pinky", "marineblue", "facebook", "twitter", "youtube", "dark", "outlined", ""];
  const type = types.includes(props.type) ? props.type : "";
  const buttonType = ["button", "reset", "submit"].includes(props.Btype) ? props.Btype : "";
  const className = props.className != "Button-lz" ? props.className : "";
  return /*#__PURE__*/React__default["default"].createElement("button", {
    type: buttonType,
    className: `Button-lz ${type} ${className} `
  }, props.children);
};

var css_248z = ".Message-lz{-webkit-box-pack:end;-ms-flex-pack:end;border-radius:4px;box-shadow:2px 2px 3px 0 #3333331a;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:flex-end;max-width:100%;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.Message-lz.warning{background-color:#f1c40f;color:#946c00}.Message-lz.info{background-color:#3e8ed0;color:#296fa8}.Message-lz.error{background-color:#e74c3c;color:#cc0f35}.Message-lz.success{background-color:#2ecc71;color:#257953}.Message-lz .message-content{background-color:#ffffffe5;padding:.7rem .5rem;width:calc(100% - 1.17rem)}";
styleInject(css_248z);

const Message = props => {
  const types = ["success", "error", "info", "warning"];
  const type = types.includes(props.type) ? props.type : "";
  const className = props.className != "Message-lz" ? props.className : "";
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: `Message-lz ${type} ${className} `
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "message-content"
  }, props.children));
};

exports.Alert = Alert;
exports.Button = Button;
exports.Message = Message;

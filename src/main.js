"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
;
var App = function (props) { return React.createElement("div", null, props.message); };
ReactDOM.render(React.createElement(App, {message: "Hello world!"}), document.getElementById('root'));
//# sourceMappingURL=main.js.map
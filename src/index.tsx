import React, { ReactElement, DOMElement, DetailedReactHTMLElement } from 'react';
import ReactDOM from 'react-dom';

// <h1>hello</h1>会变成下面 tsconfig.js 中jsx: react
let element = React.createElement('h1', {className:'title'}, 'hello');

// <h1>hello</h1>
ReactDOM.render(element, document.getElementById('root'));
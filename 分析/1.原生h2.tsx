import React, { ReactElement, DOMElement, DetailedReactHTMLElement } from 'react';
import ReactDOM from 'react-dom';

interface Props {
    className: string
}

// <h1>hello</h1>会变成下面 tsconfig.js 中jsx: react
// let element = React.createElement<Props, HTMLHeadingElement>('h1', {className:'title'}, 'hello');

let props: Props = {className:'title'}

/*
HTMLHeadingElement一个真实的dom类型 h2的类型
*/
let element: DetailedReactHTMLElement<Props, HTMLHeadingElement> = (
    React.createElement<Props, HTMLHeadingElement>('h1', props, 'hello')
)

// <h1>hello</h1>
ReactDOM.render(element, document.getElementById('root'));
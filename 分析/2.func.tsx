import React, { ReactElement, DOMElement, DetailedReactHTMLElement, FunctionComponentElement } from 'react';
import ReactDOM from 'react-dom';

interface Props {
    className: string
}

let props: Props = {className:'title'}

function Hello(props: Props) {
    return React.createElement<Props, HTMLHeadingElement>('h1', props, 'hello')
}

let element: FunctionComponentElement<Props> = (
    React.createElement<Props>(Hello, props, 'hello')
)

ReactDOM.render(element, document.getElementById('root'));
import React, { ReactElement, DOMElement, DetailedReactHTMLElement, FunctionComponentElement } from 'react';
import ReactDOM from 'react-dom';

interface Props {
    className: string
}
interface State {
    id: string
}
let props: Props = {className:'title'}

class Hello extends React.Component<Props, State> {
    state = {id: 'aa'}
    render(){
        return React.createElement<Props, HTMLHeadingElement>('h1', props, 'hello1')
    }
}

let element: ReactElement<Props> = (
    React.createElement<Props>(Hello, props)
)

ReactDOM.render(element, document.getElementById('root'));
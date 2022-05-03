// import { ReactChild } from "react";
type ReactText = string | number;

/*
React元素就是虚拟DOM
*/
interface ReactElement<P = any, T extends string=string> {
    type: T,
    props: P,
    key: string | null
}

type ReactChild = ReactElement | ReactText;
/*
代表一个可以渲染的节点
*/
type ReactNode = ReactChild|boolean|null|undefined;

// 原生的
interface Element {

}

interface DOMElement<P, T> extends ReactElement {

}

interface DetailedReactHTMLElement<P, T> extends DOMElement<P, T> {

}

/*
interface DetailedReactHTMLElement<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMElement<P, T> {
    type: keyof ReactHTML;
}
*/


/*
Element是原生DOM对象元素, 不是react的，是原生的dom的类型
*/
declare function createElement<P, T extends Element>(
    type: string, // 元素的类型 字符串 h1 span div
    props?: P | null,
    ...children: ReactNode[]): DetailedReactHTMLElement<P, T>;


interface FunctionComponentElement extends ReactElement {
    
}
/*
函数组件就是一个函数
*/
interface FunctionComponent<P ={}> {
    (props: P):ReactElement | null
}
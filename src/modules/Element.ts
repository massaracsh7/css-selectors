import { DataElement, Elements } from './types';

export default class Element implements Elements {
  tagName: string;

  className: string;

  text: string;

  constructor(...[tagName, className, text]: DataElement) {
    this.tagName = tagName;
    this.className = className;
    this.text = text;
  }

  create = (): HTMLElement => {
    const element = document.createElement(this.tagName);
    element.classList.add(this.className);
    element.innerHTML = this.text || '';
    return element;
  };
}

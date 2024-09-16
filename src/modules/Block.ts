import { Elements } from './types';

export default class Block implements Elements {
  tagName: string;

  className: string;

  arg: (string | Node)[];

  constructor(tagName: string, className: string, ...arg: (string | Node)[]) {
    this.tagName = tagName;
    this.className = className;
    this.arg = arg;
  }

  create = (): HTMLElement => {
    const container = document.createElement(this.tagName);
    container.classList.add(this.className);
    container.append(...this.arg);
    return container;
  };
}

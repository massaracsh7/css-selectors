import { DataLink, Elements } from './types';

export default class Link implements Elements {
  className: string;

  text: string;

  href: string;

  constructor(...[className, text, href]: DataLink) {
    this.className = className;
    this.text = text;
    this.href = href;
  }

  create = (): HTMLElement => {
    const link = document.createElement('a');
    link.classList.add(this.className);
    link.innerHTML = this.text || '';
    link.href = this.href;
    return link;
  };
}

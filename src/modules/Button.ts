import { DataButton, Elements } from './types';

export default class Button implements Elements {
  className: string;

  text: string;

  type: 'button' | 'submit' | 'reset';

  callback: () => void;

  constructor(...[className, text, type, callback]: DataButton) {
    this.className = className;
    this.text = text;
    this.type = type;
    this.callback = callback;
  }

  create = (): HTMLButtonElement => {
    const button = document.createElement('button');
    button.classList.add(this.className);
    button.innerHTML = this.text || '';
    button.type = this.type;
    button.addEventListener('click', this.callback);
    return button;
  };
}

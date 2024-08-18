import Button from './Button';
import Block from './Block';
import Element from './Element';

export default class Modal {
  create = (): HTMLElement => {
    const mess = new Element('div', 'modal__text', 'Game over');
    const btn = new Button('modal__btn', 'New Game', 'button', this.show);
    const modalWrapper = new Block('div', 'modal__wrapper', mess.create(), btn.create());
    const modal = new Block('div', 'modal', modalWrapper.create());
    return modal.create();
  };

  show = (): void => {
    const modal2 = document.querySelector('.modal');
    modal2?.classList.remove('modal--active');
    localStorage.clear();
    window.location.reload();
  };
}

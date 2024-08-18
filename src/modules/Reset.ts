import Button from './Button';

export default class Reset {
  create = (): HTMLButtonElement => new Button('reset', 'reset', 'submit', this.clear).create();

  clear = (): void => {
    localStorage.clear();
    localStorage.setItem('level', '0');
    const levels = document.querySelectorAll('.level__item');
    levels.forEach((item) => {
      item.classList.remove('level__item--right');
      item.classList.remove('level__item--wrong');
    });
    window.location.reload();
  };
}

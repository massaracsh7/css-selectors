import { DataLevels, PartsPage } from './types';
import levels from '../assets/levels';
import Reset from './Reset';
import Game from './Game';
import Block from './Block';

export default class Levels extends Game implements PartsPage {
  levelsNew: DataLevels[] = levels;

  viewLevel = (): HTMLElement => {
    const listLevel = document.createElement('ul');
    listLevel.classList.add('level__list');
    for (let i = 0; i < this.levelsNew.length; i += 1) {
      const item = document.createElement('li');
      item.classList.add('level__item');
      item.id = (i).toString();
      if (i === this.levelActive) {
        item.classList.add('level__item--active');
      }
      if (localStorage.results) {
        const levelAnswer = JSON.parse(localStorage.getItem('results') || '');
        if (levelAnswer.right.includes(i)) item.classList.add('level__item--right');
        if (levelAnswer.wrong.includes(i)) item.classList.add('level__item--wrong');
      }
      item.innerHTML = `<span class="level__text">${i + 1}.${this.levelsNew[i].helpTitle}</span>`;
      listLevel.append(item);
      item.addEventListener('click', () => {
        this.levelActive = +item.id;
        this.loadLevel();
        item.classList.add('level__item--active');
      });
    }

    const btn = new Reset();

    const containerLevel = new Block('div', 'level', listLevel, btn.create());
    return containerLevel.create();
  };
}

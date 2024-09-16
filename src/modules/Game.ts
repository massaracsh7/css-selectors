import { DataLevels, PartsPage } from './types';
import levelsArr from '../assets/levels';
import Block from './Block';
import Button from './Button';
import Element from './Element';

export default class Game implements PartsPage {
  scene = document.createElement('div');

  exampleCode = document.createElement('div');

  formCss: HTMLFormElement = document.createElement('form');

  inputCss: HTMLInputElement = document.createElement('input');

  levels: DataLevels[] = levelsArr;

  levelActive = +(localStorage.getItem('level') || 0);

  isPassedLevel = true;

  createLineNumber = (): HTMLDivElement => {
    const lineNumber = document.createElement('div');
    lineNumber.classList.add('line-number');
    for (let i = 0; i < 10; i += 1) {
      lineNumber.innerHTML += `${i + 1}<br>`;
    }
    return lineNumber;
  };

  createScene = (): HTMLElement => {
    const div2 = document.createElement('div');
    div2.classList.add('scene__wrapper');
    this.levels[this.levelActive].question
      .forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('scene__box');
        const tool = document.createElement('div');
        tool.classList.add('scene__tooltip');
        const img = document.createElement('img');
        img.classList.add('scene__img');
        img.dataset.numI = index.toString();
        const search = this.levels[this.levelActive].rightAnswer;
        search.forEach((i) => {
          if (index === i) img.classList.add('image--search');
        });
        img.src = item;
        img.addEventListener('mouseenter', (e: Event) => this.shineImg(e));
        img.addEventListener('mouseleave', (e: Event) => this.shineImg(e));
        div.append(tool, img);
        div2.append(div);
      });
    return div2;
  };

  shineImg = (e: Event): void => {
    const index = +((e.target as HTMLElement).dataset.numI || '');
    const imagesBox = document.querySelectorAll('.scene__box');
    const wrapCode = document.querySelectorAll('.wrap');
    if (e.type === 'mouseenter') {
      e.stopPropagation();
      wrapCode[index].classList.add('code--shine');
      imagesBox[index].classList.add('scene__box--shine');
      (imagesBox[index].firstChild as HTMLElement).textContent = wrapCode[index].textContent;
    }
    if (e.type === 'mouseleave') {
      e.stopPropagation();
      wrapCode[index].classList.remove('code--shine');
      imagesBox[index].classList.remove('scene__box--shine');
    }
  };

  createExampleCode = (): HTMLElement => {
    const preCode = document.createElement('pre');
    preCode.append(new Element('span', 'code--begin', '&lt;beach>').create());
    const arr2 = this.levels[this.levelActive].arr;
    arr2.forEach((element: string, index: number) => {
      preCode.append(this.getHTMLView(element, index));
    });
    preCode.append(new Element('span', 'code--end', '&lt;/beach>').create());
    return preCode;
  };

  shineCode = (e: Event): void => {
    const index = +((e.target as HTMLElement).dataset.num || '');
    const imagesBox = document.querySelectorAll('.scene__box');
    if (e.type === 'mouseenter') {
      e.stopPropagation();
      (e.target as HTMLElement).classList.add('code--shine');
      imagesBox[index].classList.add('scene__box--shine');
      (imagesBox[index].firstChild as HTMLElement).textContent = (e.target as HTMLElement).textContent;
    }
    if (e.type === 'mouseleave') {
      e.stopPropagation();
      (e.target as HTMLElement).classList.remove('code--shine');
      imagesBox[index].classList.remove('scene__box--shine');
    }
  };

  getHTMLView = (element: string, index: number): HTMLElement => {
    const wrap = document.createElement('div');
    wrap.classList.add('wrap');
    wrap.dataset.num = index.toString();
    let openTag = `&lt${element}>`;
    let closedTag = `&lt;/${element}>`;
    if (element.includes('.')) {
      const arr = element.split('.');
      openTag = `&lt${arr[0]} <span style='color:blue'>class=</span><span style='color:red'>'${arr[1]}'</span>>`;
      closedTag = `&lt;/${arr[0]}>`;
    }

    if (element.includes('#')) {
      const arr = element.split('#');
      openTag = `&lt${arr[0]} <span style='color:red'>id=</span><span style='color:orange'>'${arr[1]}'</span>>`;
      closedTag = `&lt;/${arr[0]}>`;
    }

    wrap.addEventListener('mouseenter', (e: Event) => this.shineCode(e));
    wrap.addEventListener('mouseleave', (e: Event) => this.shineCode(e));

    wrap.append(new Element('span', 'code', `${openTag}${closedTag}`).create());
    return wrap;
  };

  createCssEditor = (): HTMLFormElement => {
    this.formCss.classList.add('form');
    this.inputCss.classList.add('form__input', 'input-flash');
    this.inputCss.placeholder = 'Type in a CSS selector';
    this.inputCss.setAttribute('autofocus', 'autofocus');
    this.formCss.append(
      this.inputCss,
      new Button('button--enter', 'Enter', 'button', this.checkResult).create(),
      new Button('button--help', 'help', 'button', this.showAnswer).create(),
    );

    this.formCss.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.stopPropagation();
        e.preventDefault();
        this.checkResult();
      }
    });

    return this.formCss;
  };

  showAnswer = (): void => {
    this.levelActive = +(localStorage.getItem('level') || 0);
    const arrLetters: string[] = this.levels[this.levelActive].selector.split('');
    let count = 0;
    this.inputCss.value = '';
    this.inputCss.classList.remove('input-flash');
    const printText = (): void => {
      if (count === arrLetters.length) {
        this.inputCss.classList.add('input-flash');
        return;
      }
      this.inputCss.value += arrLetters[count];
      count += 1;
      setTimeout(printText, 300);
    };
    printText();
    this.isPassedLevel = false;
  };

  checkResult = (): void => {
    this.levelActive = +(localStorage.getItem('level') || 0);
    if (this.inputCss.value === `${this.levels[this.levelActive].selector}`) {
      this.setLocalStorageResult();
      this.scene.querySelectorAll('.image--search').forEach((item) => {
        item.classList.add('image--win');
      });
      this.levelActive += 1;
      this.isPassedLevel = true;
      if (this.levelActive >= this.levels.length) this.levelActive = 0;
      localStorage.setItem('level', JSON.stringify(this.levelActive));
      setTimeout(() => this.loadLevel(), 1000);
      this.inputCss.value = '';
      if (localStorage.results) {
        const levelAnswer = JSON.parse(localStorage.getItem('results') || '');
        const setAnswer: number[] = [...new Set([...levelAnswer.right, ...levelAnswer.wrong])];
        if (this.levels.length === setAnswer.length) {
          const modal = document.querySelector('.modal');
          modal?.classList.add('modal--active');
        }
      }
    } else {
      this.exampleCode.classList.add('shaking');
      this.inputCss.classList.add('shaking');
      setTimeout(() => this.exampleCode.classList.remove('shaking'), 5000);
      setTimeout(() => this.inputCss.classList.remove('shaking'), 5000);
      this.inputCss.value = '';
    }
  };

  setLocalStorageResult = (): void => {
    const results = localStorage.results
      ? JSON.parse(localStorage.getItem('results') || '') : { right: [], wrong: [] };
    const levelArr = document.querySelectorAll('.level__item');
    if (this.isPassedLevel === true) {
      results.right.push(this.levelActive);
      levelArr[this.levelActive].classList.add('level__item--right');
    }
    if (this.isPassedLevel === false) {
      results.wrong.push(this.levelActive);
      levelArr[this.levelActive].classList.add('level__item--wrong');
    }
    localStorage.setItem('results', JSON.stringify(results));
  };

  loadLevel = (): void => {
    localStorage.setItem('level', `${this.levelActive}`);
    const levels = document.querySelectorAll('.level__item');
    levels.forEach((item, index) => {
      item.classList.remove('level__item--active');
      if (index === this.levelActive) {
        item.classList.add('level__item--active');
      }
    });
    (document.querySelector('.scene') as HTMLElement).innerHTML = '';
    (document.querySelector('.scene') as HTMLElement).insertAdjacentElement('afterbegin', this.createScene());
    (document.querySelector('.example__box') as HTMLElement).innerHTML = '';
    (document.querySelector('.example__box') as HTMLElement).insertAdjacentElement('afterbegin',
      this.createExampleCode());
    (document.querySelector('.instr__header') as HTMLElement).textContent = this.levels[this.levelActive].doThis;
  };

  view = (): HTMLElement => {
    this.scene.classList.add('scene');
    this.scene.append(this.createScene());
    this.exampleCode.classList.add('example__box');
    this.exampleCode.append(this.createExampleCode());
    const containerGame = new Block('section', 'game',
      new Block(
        'div',
        'instr',
        new Element('h2', 'instr__header', this.levels[this.levelActive].doThis).create(),
        this.scene,
      ).create(),
      new Block('div', 'game__wrapper',
        new Block(
          'div',
          'editor',
          new Block('div', 'editor__header',
            new Element('span', 'editor__title', 'CSS Editor').create(),
            new Element('span', 'editor__name', 'style.css').create()).create(),
          new Block('div', 'editor__main', this.createLineNumber(), this.createCssEditor()).create(),
        ).create(),
        new Block(
          'div',
          'example',
          new Block('div', 'example__header',
            new Element('span', 'example__title', 'HTML View').create(),
            new Element('span', 'example__name', 'index.html').create()).create(),
          new Block('div', 'example__main', this.createLineNumber(), this.exampleCode).create(),
        ).create()).create());
    return containerGame.create();
  };
}

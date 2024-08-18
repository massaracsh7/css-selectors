import { PartsPage } from './types';
import Levels from './Levels';
import Game from './Game';
import Block from './Block';

export default class MainPage implements PartsPage {
  view = (): HTMLElement => {
    const game = new Game();
    const levels = new Levels();
    const main = new Block('main', 'main', game.view(), levels.viewLevel());
    return main.create();
  };
}

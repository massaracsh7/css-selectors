import Footer from './Footer';
import Main from './Main';
import Modal from './Modal';

export default class App {
  start = (): void => {
    const container = document.createElement('div');
    container.classList.add('wrapper');
    const modal = new Modal();
    const footer = new Footer();
    const main = new Main();
    container.append(main.view(), footer.view(), modal.create());
    document.body.append(container);
  };
}

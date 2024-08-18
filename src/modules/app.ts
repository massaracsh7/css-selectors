
export default class App {
  start = (): void => {
    const container = document.createElement('div');
    container.classList.add('wrapper');
    container.append('Hello');
    document.body.append(container);
  };
}

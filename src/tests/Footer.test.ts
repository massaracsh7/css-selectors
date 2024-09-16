/** @type {import('<rootDir>/node_modules/ts-jest/dist/types').InitialOptionsTsJest} */

import Footer from '../modules/Footer';

describe('Footer class', () => {
  let footer: HTMLElement;

  beforeEach(() => {
    footer = new Footer().view();
  });

  it('should return a defined footer element', () => {
    expect(footer).toBeDefined();
    expect(footer).toBeInstanceOf(HTMLElement);
  });

  it('should match the snapshot', () => {
    expect(footer).toMatchSnapshot();
  });

  it('should have the correct tag name', () => {
    expect(footer.tagName).toBe('FOOTER');
  });

  it('should contain the expected classes', () => {
    expect(footer.classList.contains('footer')).toBe(true);
  });

});

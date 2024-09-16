/** @type {import('<rootDir>/node_modules/ts-jest/dist/types').InitialOptionsTsJest} */

import Element from '../modules/Element';

describe('Element class', () => {
  describe('create Element with string', () => {
    it('should create a span element with the correct text', () => {
      const span = new Element('span', 'span', 'Hello').create();

      expect(span).toBeDefined();
      expect(span).toBeInstanceOf(HTMLElement);
      expect(span.textContent).toBe('Hello');
      expect(span.textContent).not.toBe('Buy');
    });
  });

  describe('create h1 without text', () => {
    it('should create an h1 element without any text content', () => {
      const title = new Element('h1', 'title', '').create();

      expect(title).toBeDefined();
      expect(title).toBeInstanceOf(HTMLElement);
      expect(title.textContent).toBe('');
      expect(title.textContent).not.toBe('Buy');
    });
  });
});

/** @type {import('<rootDir>/node_modules/ts-jest/dist/types').InitialOptionsTsJest} */

import Block from '../modules/Block';

describe('Block class', () => {
  describe('create Block with string', () => {
    it('should create a div element with the specified text content', () => {
      const block = new Block('div', 'block', 'Hello').create();

      expect(block).toBeDefined();
      expect(block).toBeInstanceOf(HTMLElement);
      expect(block.textContent).toBe('Hello');
      expect(block.textContent).not.toBe('Buy');
    });
  });

  describe('create Block with Node', () => {
    it('should create a div element with a child node', () => {
      const block = new Block('div', 'block', 'rsschool').create();
      expect(block).toBeDefined();
      expect(block).toBeInstanceOf(HTMLElement);
      expect(block.textContent).toBe('rsschool');
    });
  });
});

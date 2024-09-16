/** @type {import('<rootDir>/node_modules/ts-jest/dist/types').InitialOptionsTsJest} */

import Button from '../modules/Button';

const example = document.createElement('div');
function trueF(): void {
  example.classList.add('active');
}

describe('Button class', () => {
  beforeEach(() => {
    example.className = '';
  });

  describe('create Button with callback', () => {
    it('should add class to the example element on button click', () => {
      const btn = new Button('button', 'Click here', 'button', trueF).create();

      // Append the button to the DOM to ensure it can be clicked
      document.body.appendChild(btn);
      btn.click();

      expect(example.classList.contains('active')).toBe(true);

      // Clean up
      document.body.removeChild(btn);
    });

    it('should return a button with type "button" and text "Click here"', () => {
      const btn = new Button('button', 'Click here', 'button', trueF).create();

      expect(btn).toBeDefined();
      expect(btn).toBeInstanceOf(HTMLButtonElement);
      expect(btn.type).toBe('button');
      expect(btn.textContent).toBe('Click here');
    });
  });
});

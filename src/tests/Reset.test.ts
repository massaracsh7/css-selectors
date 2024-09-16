/** @type {import('<rootDir>/node_modules/ts-jest/dist/types').InitialOptionsTsJest} */

import Reset from '../modules/Reset';

describe('Reset functionality', () => {
  let originalLocation: Location;

  beforeEach(() => {
    originalLocation = window.location;
    delete (window as any).location;
    (window as any).location = { reload: jest.fn() };

    localStorage.clear();
  });

  afterEach(() => {
    (window as any).location = originalLocation;
  });

  describe('create reset button', () => {
    it('should return reset button', () => {
      const reset = new Reset().create();
      expect(reset).toBeDefined();
    });
  });

  describe('load the start game', () => {
    it('should reload window', () => {
      const reset = new Reset();
      reset.clear();
      expect((window as any).location.reload).toHaveBeenCalled();
    });

    it('should change active level to the first one', () => {
      const KEY = 'level';
      const VALUE = '5';
      localStorage.setItem(KEY, VALUE);
      expect(localStorage.getItem(KEY)).toBe(VALUE);

      const reset = new Reset();
      reset.clear();

      expect(localStorage.getItem(KEY)).toBe('0');
    });
  });
});

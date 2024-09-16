/** @type {import('<rootDir>/node_modules/ts-jest/dist/types').InitialOptionsTsJest} */

import Modal from '../modules/Modal';

describe('Modal functionality', () => {
  let modal2: HTMLElement;
  let originalLocation: Location;

  beforeEach(() => {
    // Set up a new modal instance and append it to the body
    modal2 = document.createElement('div');
    modal2.classList.add('modal');
    modal2.classList.add('modal--active');
    document.body.append(modal2);

    // Preserve the original location object
    originalLocation = window.location;
    delete (window as any).location;
    (window as any).location = { reload: jest.fn() };
  });

  afterEach(() => {
    // Clean up the modal from the body
    modal2.remove();

    // Restore the original location object
    (window as any).location = originalLocation;
  });

  describe('create modal', () => {
    it('should return modal and match snapshot', () => {
      const modal = new Modal().create();
      expect(modal).toMatchSnapshot();
    });
  });

  describe('load new game', () => {
    it('should reload window', () => {
      const modal = new Modal();
      modal.show();
      expect((window as any).location.reload).toHaveBeenCalled();
    });

    it('should remove class modal--active', () => {
      const modal = new Modal();
      modal.show();
      expect(modal2.classList.contains('modal--active')).toBe(false);
    });
  });
});

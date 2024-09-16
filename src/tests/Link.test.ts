/** @type {import('<rootDir>/node_modules/ts-jest/dist/types').InitialOptionsTsJest} */

import Link from '../modules/Link';

describe('Link module', () => {
  let link: HTMLAnchorElement;

  beforeEach(() => {
    link = new Link('rs-link', 'RS School', 'https://rs.school/js/').create() as HTMLAnchorElement;
  });

  it('should return a link element', () => {
    expect(link).toBeDefined();
    expect(link.tagName).toBe('A');
  });

  it('should have the correct text content', () => {
    expect(link.textContent).toBe('RS School');
  });

  it('should have the correct href attribute', () => {
    expect(link.getAttribute('href')).toBe('https://rs.school/js/');
  });

  it('should have the correct class', () => {
    expect(link.classList.contains('rs-link')).toBe(true);
  });
});

import { PartsPage } from './types';
import Block from './Block';
import Link from './Link';
import Element from './Element';

export default class Footer implements PartsPage {
  view = (): HTMLElement => {
    const logoImg = document.createElement('img');
    logoImg.src = 'https://rs.school/images/rs_school_js.svg';
    const linkGit = new Link('footer__git', 'github', 'https://github.com/massaracsh7');
    const copy = new Element('div', 'footer__year', '2023');
    const linkRss = new Link('footer__rss', '', 'https://rs.school/js/').create();
    linkRss.append(logoImg);
    const footer = new Block('div', 'footer', linkGit.create(), copy.create(), linkRss);
    return footer.create();
  };
}

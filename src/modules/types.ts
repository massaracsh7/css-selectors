export interface Elements {
  className: string;
  tagName?: string;
  text?: string;
  create(): HTMLElement;
}

export type DataElement = [tagName: string, className: string, text: string];

export type DataLink = [className: string, text: string, href: string];

export type DataButton = [className: string, text: string, type: 'button' | 'submit' | 'reset', callback: () => void];
export interface DataLevels {
  helpTitle: string;
  doThis: string;
  selector: string;
  arr: string[];
  question: string[];
  rightAnswer: number[];
}

export interface PartsPage {
  view(): HTMLElement;
}

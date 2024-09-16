/** @type {import('<rootDir>/node_modules/ts-jest/dist/types').InitialOptionsTsJest} */

const mockHelpTitle: { [key: string]: string } = {
  'TST0': 'Select by type A',
  'TST1': 'Select by .classname',
  'TST2': 'Combine A.classname',
  'TST3': 'Select by #id'
};

const mockQuestions: { [key: string]: string[] } = {
  'TST0': ['duck', 'zebra', 'giraffe', 'flamingo'],
  'TST1': ['ballRound', 'circleDonnut', 'ballStar', 'flamingo'],
  'TST2': ['zebra', 'circleWatermelon', 'duck', 'circleDonnut'],
  'TST3': ['zebra', 'giraffe', 'flamingo', 'duck']
};

const mockGetTitlesFn = jest.fn().mockReturnValue(mockHelpTitle);
const mockGetQuestionsFn = jest.fn().mockReturnValue(mockQuestions);

jest.mock('../assets/levels', () => ({
  helpTitle: mockGetTitlesFn,
  question: mockGetQuestionsFn,
}));

import Levels from '../modules/Levels';

describe('Levels Module', () => {
  let levels: Levels;

  beforeEach(() => {
    levels = new Levels();
  });

  it('should return a defined levelsList', () => {
    const levelsList = levels.viewLevel();
    expect(levelsList).toBeDefined();
  });

  it('should match the snapshot of levelsList', () => {
    const levelsList = levels.viewLevel();
    expect(levelsList).toMatchSnapshot();
  });

  it('should include correct help titles', () => {
    const helpTitles = mockGetTitlesFn();
    Object.keys(helpTitles).forEach(key => {
      expect(helpTitles[key]).toBe(mockHelpTitle[key]);
    });
  });

  it('should include correct questions', () => {
    const questions = mockGetQuestionsFn();
    Object.keys(questions).forEach(key => {
      expect(questions[key]).toEqual(mockQuestions[key]);
    });
  });
});

import circleDonnut from './images/circleDonnut.png';
import circleGreen from './images/circleGreen.png';
import ballStar from './images/ballStar.png';
import circleWatermelon from './images/circleWatermelon.png';
import duck from './images/duck.png';
import ballRound from './images/ballRound.png';
import flamingo from './images/flamingo.png';
import zebra from './images/zebra.png';
import giraffe from './images/giraffe.png';

const levels = [
  {
    helpTitle: 'Select by type A',
    doThis: 'Select the zebra',
    selector: 'zebra',
    arr: ['duck', 'zebra', 'giraffe', 'flamingo'],
    question: [duck, zebra, giraffe, flamingo],
    rightAnswer: [1],
  },
  {
    helpTitle: 'Select by .classname',
    doThis: 'Select the brown circle',
    selector: '.brown',
    arr: ['duck', 'circle.brown', 'circle', 'flamingo'],
    question: [duck, circleDonnut, circleWatermelon, flamingo],
    rightAnswer: [1],
  },
  {
    doThis: 'Select the beach ball',
    selector: 'ball.beach',
    helpTitle: 'Combine  A.classname',
    arr: ['ball', 'circle.beach', 'ball.beach', 'flamingo'],
    question: [ballRound, circleDonnut, ballStar, flamingo],
    rightAnswer: [2],
  },
  {
    doThis: 'Select the Watermelon circle',
    selector: '#watermelon',
    helpTitle: 'Select by #id',
    arr: ['zebra', 'circle#watermelon', 'duck', 'circle.beach'],
    question: [zebra, circleWatermelon, duck, circleDonnut],
    rightAnswer: [1],
  },
  {
    doThis: 'Select all the elements',
    selector: '*',
    helpTitle: 'Select by *',
    arr: ['zebra', 'giraffe', 'flamingo', 'duck'],
    question: [zebra, giraffe, flamingo, duck],
    rightAnswer: [0, 1, 2, 3],
  },
  {
    helpTitle: 'Select by :first-child',
    doThis: 'Select the first circle',
    selector: 'circle:first-child',
    arr: ['circle', 'circle', 'circle', 'ball.beach'],
    question: [circleWatermelon, circleDonnut, circleGreen, ballRound],
    rightAnswer: [0],
  },
  {
    helpTitle: 'Select by :last-child',
    doThis: 'Select the last duck',
    selector: 'duck:last-child',
    arr: ['flamingo', 'duck', 'duck', 'duck'],
    question: [flamingo, duck, duck, duck],
    rightAnswer: [3],
  },
  {
    helpTitle: 'Select by :nth-child(n)',
    doThis: 'Select the 4th ball',
    selector: 'ball:nth-child(4)',
    arr: ['ball', 'ball', 'ball', 'ball', 'ball'],
    question: [ballRound, ballRound, ballRound, ballRound, ballRound],
    rightAnswer: [3],
  },
  {
    helpTitle: 'Select by :nth-child(even)',
    doThis: 'Select even balls',
    selector: 'ball:nth-child(even)',
    arr: ['ball', 'ball', 'ball', 'ball', 'ball'],
    question: [ballStar, ballStar, ballStar, ballStar, ballStar],
    rightAnswer: [1, 3],
  },
  {
    doThis: 'Select the circle next to the flamingo',
    selector: 'flamingo + circle',
    helpTitle: 'Select  A + B',
    arr: ['circle', 'flamingo', 'circle', 'circle'],
    question: [circleWatermelon, flamingo, circleGreen, circleGreen],
    rightAnswer: [2],
  },

  {
    doThis: 'Select all ducks next to the giraffe',
    selector: 'giraffe ~ duck',
    helpTitle: 'Select  A ~ B',
    arr: ['duck', 'giraffe', 'duck', 'duck'],
    question: [duck, giraffe, duck, duck],
    rightAnswer: [2, 3],
  },
  {
    doThis: 'Select all that are not round',
    selector: '*:not(.round)',
    helpTitle: 'Select  :not(X) ',
    arr: ['ball.round', 'duck', 'circle.round', 'flamingo'],
    question: [ballStar, duck, circleWatermelon, flamingo],
    rightAnswer: [1, 3],
  },
];

export default levels;

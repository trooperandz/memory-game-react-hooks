import imageTakeFive from '../img/brubeck-take-five.jpg';
import garnerSea from '../img/erroll-garner-sea.jpg';
import peterGunn from '../img/mancini-peter-gunn.jpg';
import myShip from '../img/shearing-ship.jpg';
import shearingWilson from '../img/shearing-wilson.jpg';
import kindOfBlue from '../img/davis-blue.jpg';
import portraitInJazz from '../img/evans-portrait.jpg';
import petersonPorter from'../img/peterson-porter.jpg';

const cardsArr = [
  {
    id: 'take-five',
    image: imageTakeFive,
  },
  {
    id: 'garner-sea',
    image: garnerSea,
  },
  {
    id: 'peter-gunn',
    image: peterGunn,
  },
  {
    id: 'my-ship',
    image: myShip,
  },
  {
    id: 'shearing-wilson',
    image: shearingWilson,
  },
  {
    id: 'kind-of-blue',
    image: kindOfBlue,
  },
  {
    id: 'evans-portrait',
    image: portraitInJazz,
  },
  {
    id: 'peterson-porter',
    image: petersonPorter,
  }
];

function shuffle(array) {
	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// Pick a remaining element and swap it with the current element.
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function createCards() {
  return shuffle(cardsArr.concat(cardsArr));
}

export {
  createCards,
};
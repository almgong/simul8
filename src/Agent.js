import Paper from 'paper';

import Colors from './data/colors.json';

const ColorHexValues = Object.keys(Colors);
const {
  Color
} = Paper;

export default class Agent {
  constructor(identifier, itemRef) {
    console.log(itemRef.project.view.bounds.width)
    this.identifier = identifier;
    this.itemRef = itemRef; // this way, an agent can set properties on the item it is linked to

    // position can be retrieved from itemRef.position object
    // E.g. Move the circle 100 points to the right
    // circle.position.x += 100;

    this.dx = 10;
    this.dy = 10;

    // set a cool random color
    this.itemRef.fillColor = ColorHexValues[Math.floor(Math.random() * ColorHexValues.length)];
    this.itemRef.strokeColor = new Color(0, 0, 0);
  }

  update() {
    const itemRef = this.itemRef;
    let nextX = itemRef.position.x + this.dx;
    let nextY = itemRef.position.y + this.dy;

    if (nextX > itemRef.project.view.bounds.width || nextX < itemRef.project.view.bounds.x) {
      nextX = itemRef.position.x;
      this.dx *= -1;
    }

    if (nextY > itemRef.project.view.bounds.height || nextY < itemRef.project.view.bounds.y) {
      nextY = itemRef.position.y;
      this.dy *= -1;
    }

    itemRef.position.x = nextX;
    itemRef.position.y = nextY;
  }

  setDx(newDx) {
    this.dx = newDx;
  }

  setDy(newDy) {
    this.dy = newDy;
  }
}

import Paper, { Path, Point } from 'paper';

import Agent from './Agent';

const defaultOptions = {
  numAgents: 5,
  canvasSelector: '#simulate_canvas'
};

const {
  Circle
} = Path;

export default class GameManager {
  constructor(options = {}) {
    this.options = { ...defaultOptions, ...options };
    this.canvasNode = document.querySelector(this.options.canvasSelector);

    Paper.setup(this.canvasNode);
    this.agents = [];

    this.initializeAgents();
  }

  start() {
    console.log(Paper.project)
    this.intervalId = setInterval(() => {
      this.agents.forEach((agent) => agent.update());
    }, 10);
  }

  initializeAgents() {
    for (let i = 0; i < this.options.numAgents; i++) {
      const startingLocation = { x: i*40 + 30, y: i*40 + 30 };
      const item = this.getAgentItem(startingLocation);

      this.agents.push(
        new Agent(`Agent-${i}`,
        item
      ));
    }
  }

  getAgentItem(startingLocation) {
    return new Circle(new Point(startingLocation.x, startingLocation.y), 35);
  }
}

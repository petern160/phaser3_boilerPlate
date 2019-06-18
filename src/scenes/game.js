/* eslint-disable quotes */
/* eslint-disable class-methods-use-this */
import Phaser from "phaser";

import sky from "../assets/sky.png";
import ground from "../assets/platform.png";
import dude from "../assets/dude.png";

class Game extends Phaser.Scene {
  constructor() {
    super({ key: "Game" });
  }

  preload() {}

  create() {
    this.add.text(20, 20, 'loading game....');
  }

  update() {}
}

export default Game;

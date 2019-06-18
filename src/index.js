/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable class-methods-use-this */
import Phaser from "phaser";

import constants from "./config/constants";
import Scene1 from "./scenes/game";

const config = {
  type: Phaser.AUTO,
  width: constants.WIDTH,
  height: constants.HEIGHT,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 200
      },
      debug: false
    }
  },
  scene: [Scene1]
};

// eslint-disable-next-line no-new
new Phaser.Game(config);

if (module.hot) {
  module.hot.accept(() => {});

  module.hot.dispose(() => {
    window.location.reload();
  });
}

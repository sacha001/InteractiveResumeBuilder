import { preload } from "./states/preload.js";
import { create } from "./states/create.js";
import { init } from "./states/init.js";
import { update } from "./states/update.js";

import { loadLevel } from "./helperFunctions/loadLevel.js";
import { handleInput } from "./helperFunctions/handleInput.js";
import { handleCollisions } from "./helperFunctions/handleCollisions.js";
import { onHeroVsCoin } from "./helperFunctions/onHeroVsCoin.js";
import { onHeroVsDoor } from "./helperFunctions/onHeroVsDoor.js";
import { onHeroVsBound } from "./helperFunctions/onHeroVsBound.js";

import { spawnCharacter } from "./helperFunctions/spawners/spawnCharacter.js";
import { spawnPlatform } from "./helperFunctions/spawners/spawnPlatform.js";
import { spawnCoin } from "./helperFunctions/spawners/spawnCoin.js";
import { spawnDoor } from "./helperFunctions/spawners/spawnDoor.js";

export default class PlayState {
    constructor() {
        this.init = init;
        this.preload = preload;
        this.create = create;
        this.update = update;

        this._loadLevel = loadLevel;
        this._spawnCharacter = spawnCharacter;
        this._spawnPlatform = spawnPlatform;
        this._spawnCoin = spawnCoin;
        this._spawnDoor = spawnDoor;
        this._handleInput = handleInput;
        this._handleCollisions = handleCollisions;
        this._onHeroVsCoin = onHeroVsCoin;
        this._onHeroVsDoor = onHeroVsDoor;
        this._onHeroVsBound = onHeroVsBound;
    }
}
import {useTick} from "../core/ticks/tick";
import config from "../../config/config.json";
import {BoxObject} from "../core/boxes/types";
import {GameStatus, useGameData} from "../core/game/useGameData";

export function useDeath(player: BoxObject) {

    const gameData = useGameData();

    useTick(config.tickMs, () => {
        if ((player.x + player.width) < 0 || player.y > window.innerHeight) {
            gameData.gameStatus = GameStatus.DEAD
        }
    })
}
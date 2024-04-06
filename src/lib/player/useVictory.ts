import {BoxObject} from "../core/boxes/types";
import {useRerender} from "../core/game/useRerender";
import {GameStatus, useGameData} from "../core/game/useGameData";
import {useAfterTicks} from "../core/ticks/tick";
import {hasCollision} from "../core/boxes/collision";

export function useVictory(player: BoxObject) {
    const gameData = useGameData();
    const rerender = useRerender();


    useAfterTicks(() => {
        const victoryBox = Object.values(gameData.boxes).find(box => box.type === 'victory')
        if (!victoryBox) {
            return;
        }
        if (hasCollision(player, victoryBox)) {
            gameData.gameStatus = GameStatus.VICTORY;
            rerender()
        }
    })
}
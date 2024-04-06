import {useAfterTicks} from "../../core/ticks/tick";
import {GameStatus, useGameData} from "../../core/game/useGameData";
import {hasCollision} from "../../core/boxes/collision";
import {useRerender} from "../../core/game/useRerender";

export function useRockets() {

    const gameData = useGameData();
    const rerender = useRerender();

    useAfterTicks(() => {
        const player = Object.values(gameData.boxes).find(box => box.type === "player");
        const rockets = Object.values(gameData.boxes).filter(box => box.type === "rocket");

        if (!player) {
            return;
        }

        for (const rocket of rockets) {
            if (hasCollision(player, rocket)) {
                gameData.gameStatus = GameStatus.DEAD
                rerender()
                return;
            }
        }
    })

}
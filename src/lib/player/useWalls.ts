import {useAfterTicks} from "../core/ticks/tick";
import {useGameData} from "../core/game/useGameData";
import {hasCollision} from "../core/boxes/collision";
import {BoxObject, CollisionSide} from "../core/boxes/types";

export function useWalls(player: BoxObject) {
    const gameData = useGameData();

    useAfterTicks(() => {
        const boxes = Object.values(gameData.boxes);
        for (const box of boxes) {
            if (hasCollision(player, box) === CollisionSide.LEFT) {
                player.x = box.x - player.width
            }
        }
    })
}
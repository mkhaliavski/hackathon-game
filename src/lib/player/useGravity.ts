import {BoxObject, BoxStatus, CollisionSide} from "../core/boxes/types";
import {useAfterTicks, useTick} from "../core/ticks/tick";
import {useGameData} from "../core/game/useGameData";
import {useRef, useState} from "react";
import config from "../../config/config.json"
import {hasCollision} from "../core/boxes/collision";

export function useGravity(box: BoxObject) {
    const gameData = useGameData();
    const currentGravity = useRef(config.gravity.power)
    const [, rerender] = useState({})

    useTick(config.tickMs, () => {
        if (box.status === BoxStatus.FALLING || box.status === BoxStatus.AFTER_JUMP) {
            box.y += currentGravity.current;
            currentGravity.current = Math.min(currentGravity.current * 1.1, config.gravity.max)
            currentGravity.current *= 1.5
                rerender({})
        }
    })

    useAfterTicks(() => {

        if (box.status === BoxStatus.JUMPING) {
            return;
        }

       const isStaying = Object.values(gameData.boxes).some((otherBox) => {
            if (box.id === otherBox.id) {
                return false
            }
            if (hasCollision(box, otherBox) === CollisionSide.TOP) {
                box.y = otherBox.y - box.height;
                box.status = BoxStatus.STAYING;
                return true
            }
        })

        if (!isStaying) {
            box.status = BoxStatus.FALLING
        }

        // @ts-ignore
        if (box.status === BoxStatus.STAYING) {
            currentGravity.current = config.gravity.power
        }

    })
}
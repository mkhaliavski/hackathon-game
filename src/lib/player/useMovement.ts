import {useKey} from "../core/game/useKey";
import config from "../../config/config.json"
import {BoxObject, BoxStatus} from "../core/boxes/types";
import {useRef} from "react";
import {useAfterTicks, useTick} from "../core/ticks/tick";
import {useRerender} from "../core/game/useRerender";

enum MovementDirection {
    LEFT = 'left',
    RIGHT = 'right',
    NONE = 'none'
}
export function useMovement(player: BoxObject) {

    const isMoving = useRef(MovementDirection.NONE);
    const rerender = useRerender();

    useKey("ArrowLeft", () => {
        isMoving.current = MovementDirection.LEFT
    })
    useKey("ArrowRight", () => {
        isMoving.current = MovementDirection.RIGHT
    })

    useKey("ArrowLeft", () => {
        isMoving.current = MovementDirection.NONE
    }, 'up')
    useKey("ArrowRight", () => {
        isMoving.current = MovementDirection.NONE
    }, 'up')

    useTick(config.tickMs, () => {
        switch (isMoving.current) {
            case MovementDirection.NONE:
                return
            case MovementDirection.LEFT:
                player.x -= config.movement.horizontalSpeed
                break;
            case MovementDirection.RIGHT:
                player.x += config.movement.horizontalSpeed
                break;
        }
    })

    useAfterTicks(() => {
        if (isMoving.current === MovementDirection.NONE) {
            return
        }

        rerender()
    })
}
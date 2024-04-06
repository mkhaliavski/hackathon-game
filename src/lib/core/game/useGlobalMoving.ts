import {useGameData} from "./useGameData";
import {useAfterTicks, useTick} from "../ticks/tick";
import config from "../../../config/config.json"
import {BoxStatus} from "../boxes/types";
import {useRef} from "react";
import {useRerender} from "./useRerender";

export function useGlobalMoving(speed: number) {
    const gameData = useGameData()
    const hasMoved = useRef(false)
    const rerender = useRerender()

    useTick(config.tickMs, () => {
        Object.values(gameData.boxes).forEach(box => {
            if (box.status === BoxStatus.MOVING) {
                box.x -= speed;
                hasMoved.current = true;
            }
        })
    })

    useAfterTicks(() => {
        if (hasMoved.current) {
            rerender()
        }
    })
}
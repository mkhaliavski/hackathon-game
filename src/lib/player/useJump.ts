import {BoxObject, BoxStatus} from "../core/boxes/types";
import {useKey} from "../core/game/useKey";
import {useAfterTicks, useTick} from "../core/ticks/tick";
import config from "../../config/config.json"
import {useRef} from "react";
import {useRerender} from "../core/game/useRerender";


export function useJump(player: BoxObject) {

    const currentJump = useRef(config.movement.jumpPower);
    const rerender = useRerender();

    useKey('ArrowUp', () => {
        if (player.status === BoxStatus.STAYING) {
            player.status = BoxStatus.JUMPING;
            currentJump.current = config.movement.jumpPower
        }
    })



    useTick(config.tickMs, () => {
        if (player.status === BoxStatus.JUMPING) {
            const nextJumpTick = Math.max(Math.floor(currentJump.current / 2), 10)
            player.y -= nextJumpTick;
            currentJump.current -= nextJumpTick;

            if (currentJump.current <= 0) {
                player.status = BoxStatus.AFTER_JUMP
            }
        }

        (window as any).player = player
    })

    useAfterTicks(() => {
        if (player.status === BoxStatus.JUMPING || player.status === BoxStatus.AFTER_JUMP) {
            rerender()
        }
    })
}
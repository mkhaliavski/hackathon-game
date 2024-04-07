import {BoxObject, BoxStatus} from "../core/boxes/types";
import {useAfterTicks} from "../core/ticks/tick";
import {useRerender} from "../core/game/useRerender";
import config from "../../config/config.json"
import {useRef} from "react";




export function usePlayerAnimations(player: BoxObject) {

    const rerender = useRerender();

    const currentAnimation = useRef("")

    useAfterTicks((currentTick) => {
        let newAnimation: string;
        switch (player.status) {
            case BoxStatus.MOVING:
                const animationFrameIndex = (Math.round(currentTick / 500) % config.player.runAnimationFrames.length);
                newAnimation = config.player.runAnimationFrames[animationFrameIndex]
                break;
            default:
                const animationJumpFrameIndex = (Math.round(currentTick / 500) % config.player.jumpAnimationFrames.length);
                newAnimation = config.player.jumpAnimationFrames[animationJumpFrameIndex]
                //const PlayerCruchRight1 = config.player.crouchRight;
                //newAnimation = PlayerCruchRight1;
        }

        if (currentAnimation.current !== newAnimation) {
            currentAnimation.current = newAnimation;
            player.cssStyles.backgroundImage = `url(${newAnimation})`
            rerender()
        }
    })
}
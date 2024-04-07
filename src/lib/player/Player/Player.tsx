import {useBox} from "../../core/boxes/useBox";
import {useGravity} from "../useGravity";
import {useJump} from "../useJump";
import {BoxStatus} from "../../core/boxes/types";
import {useMovement} from "../useMovement";
import {useWalls} from "../useWalls";
import {useDeath} from "../useDeath";
import {useVictory} from "../useVictory";
import config from "../../../config/config.json"

import styles from "./Player.module.css";
import {usePlayerAnimations} from "../usePlayerAnimations";
export const Player = () => {

    const box = useBox({width: config.player.width, height: config.player.height, type: 'player', initialX: 150, initialY: 550, initialStatus: BoxStatus.FALLING})
    useWalls(box)
    useGravity(box)
    useJump(box)
    useMovement(box)
    useDeath(box)
    useVictory(box)
    usePlayerAnimations(box)

    return (
        <div style={{backgroundImage: `url(${config.player.runAnimationFrames[0]})`, ...box.cssStyles}} className={styles.player}>

        </div>
    )
}
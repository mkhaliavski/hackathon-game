import {useBox} from "../core/boxes/useBox";
import {useGravity} from "./useGravity";
import {useJump} from "./useJump";
import {BoxStatus} from "../core/boxes/types";
import {useMovement} from "./useMovement";
import {useWalls} from "./useWalls";
import {useDeath} from "./useDeath";
import {useVictory} from "./useVictory";

export const Player = () => {

    const box = useBox({width: 50, height: 100, type: 'player', initialX: 150, initialY: 600, initialStatus: BoxStatus.FALLING})
    useWalls(box)
    useGravity(box)
    useJump(box)
    useMovement(box)
    useDeath(box)
    useVictory(box)

    return (
        <div style={{...box.cssStyles, background: "orange", borderRadius: "50px"}}>

        </div>
    )
}
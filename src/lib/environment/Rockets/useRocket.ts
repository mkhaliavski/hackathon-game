import {useBox} from "../../core/boxes/useBox";
import {BoxStatus} from "../../core/boxes/types";
import config from "../../../config/config.json";
import {useTick} from "../../core/ticks/tick";

type RocketMetadata = {
    initialX: number;
    initialY: number;
    extraSpeed?: number;

}
export function useRocket(props: RocketMetadata) {
    const box = useBox({
        type: "rocket",
        initialStatus: BoxStatus.MOVING,
        height: config.rockets.height,
        width: config.rockets.width,
        initialX: props.initialX,
        initialY: props.initialY
    })

    useTick(config.tickMs, () => {
        if (props.extraSpeed) {
            box.x -= props.extraSpeed;
        }
    })

    return box;

}
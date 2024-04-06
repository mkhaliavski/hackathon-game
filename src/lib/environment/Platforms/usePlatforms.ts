import {useGameData} from "../../core/game/useGameData";
import {useRerender} from "../../core/game/useRerender";
import {useEffect} from "react";
import {BoxStatus} from "../../core/boxes/types";
import {createBox} from "../../core/boxes/utils";
import {LevelType} from "../../core/game/level/types";
import config from "../../../config/config.json"
import {useTick} from "../../core/ticks/tick";

export function usePlatforms(props:LevelType) {

    const gameData = useGameData();

    const rerender = useRerender();

    useEffect(() => {
        props.platforms.forEach(platformData => {
            const box = createBox({
                type: "platform",
                initialStatus: BoxStatus.MOVING,
                initialX: platformData.x,
                initialY: platformData.y,
                width: platformData.width,
                height: config.platforms.height
            })

            // box.cssStyles = {
            //     ...box.cssStyles,
            //     animation: `platform-slide linear`,
            //     "animation-duration": `${platformData.x / props.data.speed}ms`
            // }

            gameData.boxes[box.id] = box;
        })
        rerender()
    }, [props.platforms, props.speed])


}


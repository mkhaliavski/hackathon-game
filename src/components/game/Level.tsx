import {Screen} from "../Screen";
import {Background} from "../MovingBackground/backgrounds/Background";
import {Player} from "../../lib/player/Player";
import {Platform} from "../../lib/ground/Platform/Platform";
import {useGlobalMoving} from "../../lib/core/game/useGlobalMoving";
import {Platforms} from "../../lib/ground/Platforms/Platforms";
import {LevelType} from "../../lib/core/game/level/types";
import {useStartTimer} from "../../lib/core/game/useStartTimer";
import config from "../../config/config.json"
import {StartTimer} from "./StartTimer";
import {DeadScreen} from "./DeadScreen/DeadScreen";

type LevelProps = {
    data: LevelType
}
export const Level = (props: LevelProps) => {

    useGlobalMoving(props.data.speed)

    return (
        <Screen>
            <StartTimer/>
            <Background url={props.data.textures.backgroundPath}/>
            <Player/>
            <Platforms data={props.data} />
            <DeadScreen/>
        </Screen>
    )
}
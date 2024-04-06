import {Screen} from "../Screen";
import {Background} from "../MovingBackground/backgrounds/Background";
import {Player} from "../../lib/player/Player/Player";
import {useGlobalMoving} from "../../lib/core/game/useGlobalMoving";
import {Platforms} from "../../lib/environment/Platforms/Platforms";
import {LevelType} from "../../lib/core/game/level/types";
import {StartTimer} from "./StartTimer";
import {DeadScreen} from "./DeadScreen/DeadScreen";
import {VictoryBox} from "./VictoryBox";
import {VictoryScreen} from "./VictoryScreen/VictoryScreen";
import {Rockets} from "../../lib/environment/Rockets/Rockets";
import {usePause} from "../../lib/core/game/usePause";

type LevelProps = {
    data: LevelType
}
export const Level = (props: LevelProps) => {

    useGlobalMoving(props.data.speed)
    usePause()

    return (
        <Screen>
            <StartTimer/>
            <Background url={props.data.textures.backgroundPath}/>
            <Player/>
            <Platforms data={props.data} />
            <Rockets data={props.data}/>
            <VictoryBox data={props.data}/>
            <DeadScreen/>
            <VictoryScreen/>
        </Screen>
    )
}
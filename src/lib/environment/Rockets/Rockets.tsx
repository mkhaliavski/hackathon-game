import {LevelType} from "../../core/game/level/types";
import {useRockets} from "./useRockets";
import {Rocket} from "./Rocket";

type RocketsProps = {
    data: LevelType;
}
export const Rockets = (props: RocketsProps) => {
    useRockets()

    return (
        <>
            {props.data.rockets.map(rocket => (
                <Rocket initialX={rocket.x} initialY={rocket.y} extraSpeed={rocket.speed} texture={props.data.textures.rocketPath}/>
            ))}
        </>
    )
}
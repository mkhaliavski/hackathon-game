import {Platform} from "../Platform/Platform";
import {LevelType} from "../../core/game/level/types";

type PlatformsProps = {
    data: LevelType
}
export const Platforms = (props: PlatformsProps) => {

    return (
        <>
            {
                props.data.platforms.map((platform, index) => (
                    <Platform key={index} width={platform.width} initialX={platform.x} initialY={platform.y} texture={props.data.textures.platformPath}/>
                ))
            }
        </>
    );
}
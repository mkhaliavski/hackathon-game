import {usePlatforms} from "../usePlatforms";
import {useGameData} from "../../core/game/useGameData";
import {Platform} from "../Platform/Platform";
import {LevelType} from "../../core/game/level/types";

type PlatformsProps = {
    data: LevelType
}
export const Platforms = (props: PlatformsProps) => {

    usePlatforms(props.data);

    return (
        <>
            {
                props.data.platforms.map((platform, index) => (
                    <Platform key={index} width={platform.width} initialX={platform.x} initialY={platform.y}/>
                ))
            }
        </>
    );
}
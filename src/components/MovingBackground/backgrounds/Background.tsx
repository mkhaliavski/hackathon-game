import {ParallaxTexture} from "../ParallaxTexture";
import {GameStatus} from "../../../lib/core/game/useGameData";
import {useGameStatus} from "../../../lib/core/game/useGameStatus";

export const Background = (props: {url: string}) => {

    const gameStatus = useGameStatus()


    return (
        <ParallaxTexture speed={500} image={props.url} isRunning={gameStatus === GameStatus.RUNNING}/>
    )
}
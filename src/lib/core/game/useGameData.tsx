import React, {useContext, useRef} from "react";
import {TickContextProvider} from "../ticks/tick";
import {BoxObject} from "../boxes/types";
import config from "../../../config/config.json"

const GameContext = React.createContext({} as any);

export enum GameStatus {
    RUNNING = 'running',
    PAUSED = 'paused',
    DEAD = 'dead',
    VICTORY = 'victory'
}

export type GameDataObject = {
    gameStatus: GameStatus;
    boxes: Record<string, BoxObject>;


}

export const GameContextProvider = (props: React.PropsWithChildren) => {

    const gameContext = useRef<GameDataObject>({
        gameStatus: config.startTimer === 0 ? GameStatus.RUNNING : GameStatus.PAUSED,
        boxes: {},
    })

    return (
        <GameContext.Provider value={gameContext.current}>
            <TickContextProvider>
                {props.children}
            </TickContextProvider>
        </GameContext.Provider>
    )
}

export function useGameData(): GameDataObject {
    return useContext(GameContext);
}
import {useGameData} from "./useGameData";
import {useRef} from "react";
import {useRerender} from "./useRerender";
import {useAfterTicks} from "../ticks/tick";

export function useGameStatus() {
    const gameData = useGameData();
    const prevValue = useRef(gameData.gameStatus);
    const rerender = useRerender();

    useAfterTicks(() => {
        if (gameData.gameStatus !== prevValue.current) {
            rerender()
        }
    })

    return gameData.gameStatus;
}
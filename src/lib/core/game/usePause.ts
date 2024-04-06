import {GameStatus, useGameData} from "./useGameData";
import {useKey} from "./useKey";
import {useRef} from "react";
import {useRerender} from "./useRerender";

export function usePause() {
    const gameData = useGameData();
    const originalStatus = useRef(gameData.gameStatus)
    const rerender = useRerender()

    useKey("p", () => {
        if (gameData.gameStatus === GameStatus.PAUSED) {
            gameData.gameStatus = originalStatus.current
        } else {
            gameData.gameStatus = GameStatus.PAUSED
        }
        rerender()
    })
}
import {GameStatus, useGameData} from "./useGameData";
import {useEffect, useRef} from "react";
import {useRerender} from "./useRerender";

export function useStartTimer(timerSeconds: number) {
    const gameData = useGameData();
    const rerender = useRerender();
    const remaining= useRef(timerSeconds)

    useEffect(() => {
        gameData.gameStatus = GameStatus.PAUSED;

        const intervalId = setInterval(() => {
            remaining.current -= 1;

            if (remaining.current === 0) {
                gameData.gameStatus = GameStatus.RUNNING;
                clearInterval(intervalId)
            }

            rerender()
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return remaining.current;
}
import React, {useContext, useEffect, useRef, useState} from "react";
import config from "../../../config/config.json";
import {v4 as uuid} from "uuid";
import {GameStatus, useGameData} from "../game/useGameData";

type TickCallback = {
    timeMs: number;
    callback: (currentTick: number) => void;
}

type AfterTickCallback = {
    callback: (currentTick: number) => void;
}

export const TickContext = React.createContext<React.MutableRefObject<Record<string, TickCallback>>>({} as any)
export const AfterTickContext = React.createContext<React.MutableRefObject<Record<string, AfterTickCallback>>>({} as any)


export const TickContextProvider = (props: React.PropsWithChildren) => {

    const gameData = useGameData()
    const currentTick = useRef(0)
    const tickCallbacks = useRef<Record<string, TickCallback>>({});
    const afterTickCallbacks = useRef<Record<string, TickCallback>>({});
    const [, rerender] = useState({})

    useEffect(() => {
        const intervalId = setInterval(() => {

            if (gameData.gameStatus !== GameStatus.RUNNING) {
                return;
            }

            Object.values(tickCallbacks.current).forEach(({timeMs, callback}) => {
                currentTick.current += config.tickMs;

                if (currentTick.current % timeMs === 0) {
                    callback(currentTick.current)
                }
            })

            Object.values(afterTickCallbacks.current).forEach(({callback}) => {
                callback(currentTick.current)
            })

            rerender({})
        }, config.tickMs)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <TickContext.Provider value={tickCallbacks}>
            <AfterTickContext.Provider value={afterTickCallbacks}>
                {props.children}
            </AfterTickContext.Provider>
        </TickContext.Provider>
    )
}

export function useTick(timeMs: number, callback: (currentTick: number) => void) {
    const context = useContext(TickContext);
    const id = useRef(uuid())

    useEffect(() => {
        context.current[id.current] = {timeMs, callback}

        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => {
            delete context.current[id.current]
        }
    }, [id.current]);
}


export function useAfterTicks(callback: (currentTick: number) => void) {
    const context = useContext(AfterTickContext);
    const id = useRef(uuid())

    useEffect(() => {
        context.current[id.current] = {callback}

        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => {
            delete context.current[id.current]
        }
    }, [id.current]);
}
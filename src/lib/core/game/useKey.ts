import {useCallback, useEffect} from "react";

export function useKey(key: string, callback: () => void, direction: 'down' | 'up' = 'down') {

    const eventCallback = useCallback((e: KeyboardEvent) => {
        if (e.key === key) {
            callback()
        }
    }, [callback, key])

    useEffect(() => {
        window.addEventListener(`key${direction}`, eventCallback)

        return () => window.removeEventListener(`key${direction}`, eventCallback)
    }, [eventCallback, direction])
}
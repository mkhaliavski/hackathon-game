import {useEffect, useRef} from "react";
import {v4 as uuid} from "uuid"
import {BoxMetadata, BoxObject} from "./types";
import {useGameData} from "../game/useGameData";
import {createBox, deleteBox} from "./utils";

export function useBox(props: BoxMetadata): BoxObject {
    const gameData = useGameData()
    const id = useRef(uuid()).current;

    const boxObject = gameData.boxes[id] || createBox(props)


    boxObject.cssStyles = {
        ...boxObject.cssStyles,
        width: boxObject.width,
        height: boxObject.height,
        position: "absolute",
        left: boxObject.x,
        top: boxObject.y
    }

    useEffect(() => {
        gameData.boxes[id] = boxObject;

        return () => deleteBox(gameData, id)
    }, [])

    return boxObject;
}
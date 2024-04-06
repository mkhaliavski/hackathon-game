import {BoxMetadata, BoxObject, BoxStatus} from "./types";
import {GameDataObject} from "../game/useGameData";
import {v4 as uuid} from "uuid";

export const createBox = (boxMetadata: BoxMetadata): BoxObject => {
    const id = uuid();
    const boxObject: BoxObject = {
        id,
        width: boxMetadata.width,
        status: boxMetadata.initialStatus,
        initialStatus: boxMetadata.initialStatus,
        height: boxMetadata.height,
        initialY: boxMetadata.initialY,
        x: boxMetadata.initialX,
        y: boxMetadata.initialY,
        initialX: boxMetadata.initialX,
        type: boxMetadata.type,
        cssStyles: {
            position: "absolute",
            left: boxMetadata.initialX,
            top: boxMetadata.initialY,
            width: boxMetadata.width,
            height: boxMetadata.height
        }
    }

    return boxObject;
}

export const deleteBox = (gameData: GameDataObject, id: string) => {
    delete gameData.boxes[id]
}
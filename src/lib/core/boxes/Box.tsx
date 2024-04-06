import React from "react";
import {CollisionSide} from "./types";

type BoxProps = {
    width: number;
    height: number;

    //onCollision?: (anotherBox: Box, side: CollisionSide) => void;


}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
    return (
        <div ref={ref} style={{height: props.height, width: props.width, background: "transparent"}} />
    )
})
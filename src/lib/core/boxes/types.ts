import React from "react";

export enum CollisionSide {
    NONE = -1,
    TOP = 1,
    RIGHT,
    BOTTOM,
    LEFT
}


export type BoxObject = {
    id: string;
    cssStyles: any;
    status: BoxStatus;

    x: number;
    y: number;

    htmlRef?: React.Ref<any>

} & BoxMetadata;

export type BoxMetadata = {
    width: number;
    height: number;

    type: 'player' | 'platform' | 'staticPlatform';

    initialX: number;
    initialY: number;

    initialStatus: BoxStatus;
}

export enum BoxStatus {
    FIXED = 1,
    STAYING,
    MOVING,
    JUMPING,
    AFTER_JUMP,
    FALLING,
}
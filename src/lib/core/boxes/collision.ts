import {BoxObject, CollisionSide} from "./types";


const isInBox = (dot: { x: number, y: number }, box: BoxObject): boolean => {
    const boxX1 = box.x;
    const boxX2 = box.x + box.width;
    const boxY1 = box.y;
    const boxY2 = box.y + box.height;

    return (boxX1 <= dot.x && dot.x <= boxX2) && (boxY1 <= dot.y && dot.y <= boxY2)
}


export const hasCollision = (box1: BoxObject, box2: BoxObject): CollisionSide | false => {

    //box that intercepts
    const box1Rectangle = {
        topLeft: {x: box1.x, y: box1.y},
        topRight: {x: box1.x + box1.width, y: box1.y},
        bottomLeft: {x: box1.x, y: box1.y + box1.height},
        bottomRight: {x: box1.x + box1.width, y: box1.y + box1.height},
    }

    //box that is being intercepting
    const box2Rectangle = {
        topLeft: {x: box2.x, y: box2.y},
        topRight: {x: box2.x + box2.width, y: box2.y},
        bottomLeft: {x: box2.x, y: box2.y + box2.height},
        bottomRight: {x: box2.x + box2.width, y: box2.y + box2.height},
    }

    if (box1Rectangle.bottomRight.x < box2Rectangle.topLeft.x || box1Rectangle.topLeft.x > box2Rectangle.bottomRight.x || box1Rectangle.bottomLeft.y < box2Rectangle.topLeft.y || box1Rectangle.topLeft.y > box2Rectangle.bottomLeft.y) {
        return false;
    }


    const interceptingRectangle = {
        topLeft: {x: Math.max(box1Rectangle.topLeft.x, box2Rectangle.topLeft.x), y: Math.max(box1Rectangle.topLeft.y, box2Rectangle.topLeft.y)},
        topRight: {x: Math.min(box1Rectangle.topRight.x, box2Rectangle.topRight.x), y: Math.max(box1Rectangle.topRight.y, box2Rectangle.topRight.y)},
        bottomLeft: {x: Math.max(box1Rectangle.bottomLeft.x, box2Rectangle.bottomLeft.x), y: Math.min(box1Rectangle.bottomLeft.y, box2Rectangle.bottomLeft.y)},
        bottomRight: {x: Math.min(box1Rectangle.bottomRight.x, box2Rectangle.bottomRight.x), y: Math.min(box1Rectangle.bottomRight.y, box2Rectangle.bottomRight.y)}
    }

    const interceptingRacios = {
        [CollisionSide.TOP]: interceptingRectangle.topLeft.y === box2Rectangle.topLeft.y ? (interceptingRectangle.topRight.x - interceptingRectangle.topLeft.x) : 0,
        [CollisionSide.RIGHT]: interceptingRectangle.topRight.x === box2Rectangle.topRight.x ? (interceptingRectangle.bottomRight.y - interceptingRectangle.topRight.y) : 0,
        [CollisionSide.BOTTOM]: interceptingRectangle.bottomLeft.y === box2Rectangle.bottomLeft.y ? (interceptingRectangle.bottomRight.x - interceptingRectangle.bottomLeft.x) : 0,
        [CollisionSide.LEFT]: interceptingRectangle.topLeft.x === box2Rectangle.topLeft.x ? (interceptingRectangle.bottomLeft.y - interceptingRectangle.topLeft.y) : 0,
    }



    const sideFound=  Object.entries(interceptingRacios).reduce((acc, next) => {
        if (next[1] > acc[1]) {
            return [+next[0], next[1]] as unknown as [CollisionSide, number]
        } else {
            return acc;
        }
    }, [CollisionSide.NONE, 0] as [CollisionSide, number])[0]

    if (!sideFound) {
        return false
    }

    return sideFound;
}
import config from "../../../config/config.json"
import {useTick} from "./tick";

export type Speeds = number;
export function useCallbackWithSpeed(speed: Speeds, callback: () => void) {
    const timeMs = config.tickMs * speed;

    useTick(timeMs, callback);
}
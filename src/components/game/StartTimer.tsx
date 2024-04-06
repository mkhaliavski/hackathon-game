import {useStartTimer} from "../../lib/core/game/useStartTimer";
import config from "../../config/config.json";

export const StartTimer = () => {
    const remaining = useStartTimer(config.startTimer);

    if (!remaining) {
        return null;
    }

    return (
        <div style={{position: "absolute", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "1"}}>
            <h1>{remaining}...</h1>
        </div>
    )
}
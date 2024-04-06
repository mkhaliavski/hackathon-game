import {useBox} from "../../lib/core/boxes/useBox";
import {BoxStatus} from "../../lib/core/boxes/types";
import {LevelType} from "../../lib/core/game/level/types";

type VictoryBoxProps = {
    data: LevelType
}
export const VictoryBox = (props: VictoryBoxProps) => {

    const victoryBox = useBox({
        width: props.data.victory.width,
        height: props.data.victory.height,
        type: "victory",
        initialStatus: BoxStatus.MOVING,
        initialX: props.data.victory.x,
        initialY: props.data.victory.y
    })

    return (
        <div style={{background: props.data.textures.victoryBoxPath ? `url(${props.data.textures.victoryBoxPath})` : "brown", backgroundSize: "100% 100%", ...victoryBox.cssStyles}}></div>
    )
}
import {Box} from "../../core/boxes/Box";
import {useBox} from "../../core/boxes/useBox";
import {BoxStatus} from "../../core/boxes/types";

type PlatformProps = {
    width: number;
    initialX: number;
    initialY: number;
}
export const Platform = (props: PlatformProps) => {


    const box = useBox({height: 50, type: 'platform', initialStatus: BoxStatus.MOVING, ...props })

    return (
        <div style={{background: "green", ...box.cssStyles}}>
            <Box width={box.width} height={50}/>
        </div>
    )
}
import {Box} from "../../core/boxes/Box";
import {useBox} from "../../core/boxes/useBox";
import {BoxStatus} from "../../core/boxes/types";

import styles from "./Platform.module.css";

type PlatformProps = {
    width: number;
    initialX: number;
    initialY: number;
    texture?: string;
}
export const Platform = (props: PlatformProps) => {


    const box = useBox({height: 50, type: 'platform', initialStatus: BoxStatus.MOVING, ...props })

    return (
        <div className={styles.platform} style={{background: props.texture ? `url(${props.texture})` : "green", ...box.cssStyles}}>
            <Box width={box.width} height={50}/>
        </div>
    )
}
import {useRocket} from "./useRocket";

type RocketProps = {
    initialX: number;
    initialY: number;
    extraSpeed?: number;
    texture?: string;
}
export const Rocket = (props: RocketProps) => {

    const box = useRocket(props)

    return (
        <div style={{...box.cssStyles, background: props.texture ? `url(${props.texture})` : "red", backgroundSize: "100% 100%"}}></div>
    )
}
import {useRocket} from "./useRocket";

type RocketProps = {
    initialX: number;
    initialY: number;
    extraSpeed?: number;
}
export const Rocket = (props: RocketProps) => {

    const box = useRocket(props)

    return (
        <div style={{...box.cssStyles, background: "red"}}></div>
    )
}
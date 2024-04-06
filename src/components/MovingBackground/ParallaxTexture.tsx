import {Screen} from "../Screen";
import {Speeds} from "../../lib/core/ticks/speed";
import React from "react";
import styles from "./ParallaxTexture.module.css";
import config from "../../config/config.json"
export const ParallaxTexture = (props: React.PropsWithChildren<{
    speed: Speeds;
    image: string;
    isRunning: boolean
}>) => {


    return (
        <Screen>
            <div className={styles.animated} style={{animationDuration: `${props.speed * config.tickMs}ms`, backgroundImage: `url(${props.image})`, animationPlayState: props.isRunning ? 'running' : 'paused'}}></div>
            {props.children}
        </Screen>
    )
}
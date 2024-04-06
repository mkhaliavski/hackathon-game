import {useGameStatus} from "../../../lib/core/game/useGameStatus";
import {GameStatus} from "../../../lib/core/game/useGameData";
import classNames from "classnames";

import styles from "./DeadScreen.module.css";
import React from "react";

export const DeadScreen = () => {

    const gameStatus = useGameStatus();

    if (gameStatus !== GameStatus.DEAD) {
        return null;
    }

    const onHereClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.location.reload()
    }

    return (
        <div className={styles.container}>
            <div className={classNames(styles.modal, {[styles.hidden]: gameStatus !== GameStatus.DEAD})}>
                <h1>You're dead :( </h1>
                <p>Give it one more try! - Click <a href="#" onClick={onHereClick}>here</a></p>
            </div>
        </div>
    )
}
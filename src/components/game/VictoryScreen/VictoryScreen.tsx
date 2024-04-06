import {useGameStatus} from "../../../lib/core/game/useGameStatus";
import {GameStatus} from "../../../lib/core/game/useGameData";
import React from "react";
import styles from "./VictoryScreen.module.css";
import classNames from "classnames";
import {useNavigate, useParams} from "react-router-dom";

export const VictoryScreen = () => {
    const gameStatus = useGameStatus();
    const navigate = useNavigate();
    const {id} = useParams<{id: string}>()

    if (gameStatus !== GameStatus.VICTORY) {
        return null;
    }

    const onHereClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const nextLevel = Number(id) + 1

        navigate("/game/" + nextLevel)
    }

    return (
        <div className={styles.container}>
            <div className={classNames(styles.modal, {[styles.hidden]: gameStatus !== GameStatus.VICTORY})}>
                <h1>You did it! </h1>
                <p>Let's rock on the next level! - <a href="#" onClick={onHereClick}>Next</a></p>
            </div>
        </div>
    )
}
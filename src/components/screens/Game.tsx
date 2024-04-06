import {Screen} from "../Screen";
import {GameContextProvider} from "../../lib/core/game/useGameData";
import {Level} from "../game/Level";
import {useParams} from "react-router-dom";
import {useLevel} from "../../lib/core/game/level/useLevel";
import {useEffect} from "react";
import {useQuery} from "react-query";
import {LevelType} from "../../lib/core/game/level/types";

export const Game = () => {

    const {id} = useParams<{id: string}>();

    const levelData = useQuery<LevelType>({
        queryKey: [id],
        queryFn: async () => {
            return fetch(`/levels/${id}.json`).then(res => res.json() as unknown as LevelType)
        }
    })

    if (levelData.isLoading) {
        return (
            <Screen>
                <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h1>Loading...</h1>
                </div>
            </Screen>
        )
    }


    return (
        <Screen>
                <GameContextProvider>
                    <Level data={levelData.data!}/>
                </GameContextProvider>
        </Screen>
    )
}
import {Screen} from "../Screen";
import {GameContextProvider} from "../../lib/core/game/useGameData";
import {Level} from "../game/Level";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {LevelType} from "../../lib/core/game/level/types";

export const Game = () => {

    const {id} = useParams<{id: string}>();
    const navigate = useNavigate()

    const levelData = useQuery<LevelType>({
        queryKey: [id],
        queryFn: async () => {
            return fetch(`/levels/${id}.json`).then(res => res.json() as unknown as LevelType)
        },
        retry: false
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

    const onRetryClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/game/1")
    }

    if (levelData.error) {
        return (
            <Screen>
                <div style={{width: "100%", height: "100%", display: "flex",  flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <h1>Hey, you finished everything we did so far, good job!</h1>
                    <p>If you want to make it one more time - click <a href="#" onClick={onRetryClick}>here</a></p>
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
import {Screen} from "../Screen";
import {NavLink} from "react-router-dom";

export const MainMenu = () => {
    return (
        <Screen>
            <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}}>
                <NavLink to={"/game/1"}>New Game</NavLink>
                <NavLink to={"/levels"}>Pick Level</NavLink>
                <NavLink to={"/settings"}>Settings</NavLink>
                <NavLink to={"/about"}>About</NavLink>
            </div>
        </Screen>
    )
}
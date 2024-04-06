import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainMenu} from "./screens/MainMenu";
import {Game} from "./screens/Game";

export const Root  = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index={true} element={<MainMenu/>}/>
                <Route path={"/game/:id"} element={<Game/>}/>
            </Routes>
        </BrowserRouter>
    )
}
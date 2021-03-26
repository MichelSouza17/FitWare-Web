import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Login />
                </Route>
                <Route path="/Register">

                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
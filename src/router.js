import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Login />
                </Route>
                <Route path="/register"></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;

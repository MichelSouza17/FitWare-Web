import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Register />
                </Route>
                <Route path="/register">{/* <Login /> */}</Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;

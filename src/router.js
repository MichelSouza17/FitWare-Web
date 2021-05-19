import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Agendamentos from "./pages/Agendamentos";
import Clients from "./pages/Clients";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/agendamentos">
          <Agendamentos />
        </Route>
        <Route path="/clientes">
          <Clients />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

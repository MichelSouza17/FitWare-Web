import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Aulas from "./pages/Aulas";
import Agendamentos from "./pages/Agendamentos";

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
        <Route path="/aulas">
          <Aulas />
        </Route>
        <Route path="/clientes">
          <Clients />
        </Route>
        <Route path="/agendamentos">
          <Agendamentos />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

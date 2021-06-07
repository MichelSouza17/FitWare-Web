import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import HomeAdmin from "./pages/HomeAdmin";
import Clients from "./pages/Clients";
import Aulas from "./pages/Aulas";
import Agendamentos from "./pages/Agendamentos";
import { isSignedIn } from "./services/security";

function PrivateRoute({ children, ...rest }) {
  if (isSignedIn()) {
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Redirect to="/" />;
  }
}

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <HomeAdmin />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <PrivateRoute path="/aulas">
          <Aulas />
        </PrivateRoute>
        <Route path="/clientes">
          <Clients />
        </Route>
        <Route path="/agendamentos">
          <Agendamentos />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

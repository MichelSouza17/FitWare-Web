import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterAcademy from "./pages/RegisterAcademy";
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
        <PrivateRoute path="/home">
          <HomeAdmin />
        </PrivateRoute>
        <Route path="/registerAcademy">
          <RegisterAcademy />
        </Route>
        <PrivateRoute path="/register">
          <Register />
        </PrivateRoute>
        <PrivateRoute path="/aulas">
          <Aulas />
        </PrivateRoute>
        <PrivateRoute path="/clientes">
          <Clients />
        </PrivateRoute>
        <PrivateRoute path="/agendamentos">
          <Agendamentos />
        </PrivateRoute>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

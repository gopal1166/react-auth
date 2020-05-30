import React, { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "../auth/Login";
import Dashboard from "../dashboard/Dashboard";
import Test from '../components/Test';

const Routes = (props) => {
  const [isAuth, setAuth] = React.useState(
    JSON.parse(localStorage.getItem("isAuth"))
  );
  useEffect(() => {
      console.log("inside Routes", isAuth);
  }, [])
  return (
    <>
      <Route
        path="/dashboard"
        render={() => {
          if (isAuth) {
            return <Route component={Dashboard} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    <Switch>
      <Route exact path="/Login" component={Login}></Route>
      <Route path={'/dashboard/mail'} render={() => <h2>mail</h2>} />
      <Route path={'/dashboard/app'} render={() => <h2>app</h2>} />
      <Route path={'/dashboard/setting-1'} render={() => <h2>setting - 1</h2>} />
      <Route path={'/dashboard/setting-2'} render={() => <h2>setting - 2</h2>} />
      <Route path={'/dashboard/setting-3'} render={() => <h2>setting - 3</h2>} />
      <Route path={'/dashboard/setting-4'} render={() => <h2>setting - 4</h2>} />
      <Route path={'/dashboard/alipay'} render={() => <h2>alipay</h2>} />
      <Route exact path="/" component={Login}></Route>
      <Route render={() => "401 Not found!"} />
      </Switch>
    </>
  );
};

export default Routes;

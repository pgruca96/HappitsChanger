import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HabitsList from "./habits_list/HabitsList";

const MainRoutes = () => {
  const mainPanel = "/main";
  return (
    <Switch>
      <Route path={`${mainPanel}/habits`} exact component={HabitsList} />
      <Route path={`${mainPanel}/create`} exact component={HabitsList} />
      <Route path={`${mainPanel}/rules`} exact component={HabitsList} />
      <Route path={`${mainPanel}/awards`} exact component={HabitsList} />
      <Route path={`${mainPanel}`}>
        <Redirect to={`${mainPanel}/habits`} />
      </Route>
    </Switch>
  );
};

export default MainRoutes;

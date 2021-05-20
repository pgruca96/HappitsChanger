import React from "react";
import { Switch, Route } from "react-router-dom";
import HabitsList from "./habits_list/HabitsList";

const MainRoutes = () => {
  return (
    <Switch>
      <Route path={`/main/habits`} exact component={HabitsList} />
      <Route path={`/main/create`} exact component={HabitsList} />
      <Route path={`/main/rules`} exact component={HabitsList} />
      <Route path={`/main/awards`} exact component={HabitsList} />
    </Switch>
  );
};

export default MainRoutes;

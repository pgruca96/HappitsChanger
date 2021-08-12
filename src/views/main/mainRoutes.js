import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HabitsList from './MainPage/habits_list/HabitsList';
import CreateHabitForm from './MainPage/CreateHabitForm';

const MainRoutes = () => {
  const mainPanel = '/main';
  return (
    <Switch>
      <Route path={`${mainPanel}/habits`} exact component={HabitsList} />
      <Route path={`${mainPanel}/create`} exact component={CreateHabitForm} />
      <Route path={`${mainPanel}/rules`} exact component={HabitsList} />
      <Route path={`${mainPanel}/awards`} exact component={HabitsList} />
      <Route path={`${mainPanel}/settings`} exact component={HabitsList} />
      <Route path={`${mainPanel}/notifications`} exact component={HabitsList} />
      <Route path={`${mainPanel}`}>
        <Redirect to={`${mainPanel}/habits`} />
      </Route>
    </Switch>
  );
};

export default MainRoutes;

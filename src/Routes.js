import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReduxCounter from './pages/redux-counter';
import Home from './pages/home/home';
import { Loader } from './components/loader/Loader';
import * as routes from './utils/routePaths';
// Code Splitting
const Counter = React.lazy(() => import('./pages/counter/counter'));
const TodoHome = React.lazy(() => import('./pages/todo/todo-home'));
const AuthPage = React.lazy(() => import('./pages/auth'));
const Profile = React.lazy(() => import('./pages/profile'));
const FakerBooks = React.lazy(() => import('./pages/faker-books'));

const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={routes.TODO_PATH}>
          <TodoHome />
        </Route>
        <Route path={routes.COUNTER_PATH}>
          <Counter />
        </Route>
        <Route path={routes.AUTH_PATH}>
          <AuthPage />
        </Route>
        <Route path={routes.PROFILE_PATH}>
          <Profile title="Profile Page" />
        </Route>

        <Route path={routes.FAKER_BOOKS_PATH}>
          <FakerBooks />
        </Route>

        <Route path={routes.REDUX_COUNTER_PATH}>
          <ReduxCounter />
        </Route>

        {/* Direct Load */}
        <Route path={routes.HOME}>
          <Home />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;

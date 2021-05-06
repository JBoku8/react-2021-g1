import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/home';

import Theme from './components/theme';
import Navigation from './components/navigation/navigation';

import './App.css';

// Code Splitting
const Counter = React.lazy(() => import('./pages/counter/counter'));
const TodoHome = React.lazy(() => import('./pages/todo/todo-home'));
const AuthPage = React.lazy(() => import('./pages/auth'));
const Profile = React.lazy(() => import('./pages/profile'));
const FakerBooks = React.lazy(() => import('./pages/faker-books'));

const Loader = () => {
  return (
    <div className="row">
      <h2 className="text-center text-success">Page is Loading...</h2>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <Navigation />
      <Theme>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/todos">
              <TodoHome />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/auth">
              <AuthPage />
            </Route>
            <Route path="/profile">
              <Profile title="Profile Page" />
            </Route>

            <Route path="/faker-books">
              <FakerBooks />
            </Route>

            {/* Direct Load */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </Theme>
    </div>
  );
}

export default App;

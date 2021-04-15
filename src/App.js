import { Switch, Route } from 'react-router-dom';

import Counter from './pages/counter/counter';
import TodoHome from './pages/todo/todo-home';
import Home from './pages/home/home';
import Profile from './pages/profile';

import Theme from './components/theme';
import Navigation from './components/navigation/navigation';
// import Welcome from "./components/welcome";

import './App.css';

function App() {
  return (
    <div className="container">
      <Navigation />
      <Theme>
        <Switch>
          <Route path="/todos">
            <TodoHome />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/profile">
            <Profile title="Profile Page" />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Theme>
    </div>
  );
}

export default App;

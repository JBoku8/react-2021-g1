import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Theme from './components/theme';
import Navigation from './components/navigation/navigation';

import { autoLoginAction } from './redux/actions';
import Routes from './Routes';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLoginAction());
  }, [dispatch]);

  return (
    <div className="container">
      <Navigation />
      <Theme>
        <Routes />
      </Theme>
    </div>
  );
}

export default App;

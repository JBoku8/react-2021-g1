import { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const defaultSettings = {
  notifications: 'daily',
};

function Home() {
  const [value, setValue] = useState('');
  const [appSettings, setAppSettings] = useLocalStorage('app-settings', defaultSettings);

  return (
    <div className="row mt-4">
      <div className="col-6">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            setValue(Math.random().toString());
            setAppSettings(() => {
              console.log('ajax call');
              return {
                notifications: 'weekly',
              };
            });
          }}>
          Re Render Home component
        </button>
        <h1>{value}</h1>
        <pre className="bg-light p-4">{JSON.stringify(appSettings)}</pre>
      </div>
    </div>
  );
}

export default Home;

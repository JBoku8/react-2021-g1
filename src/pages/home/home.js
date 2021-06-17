import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FetchData from '../../components/fetch-data/FetchData';
import ParentComponent from '../../components/perf-optimization/ParentComponent';
import Welcome from '../../components/welcome/Welcome';
import useBackgroundColor from '../../hooks/useBackgroundColor';
import useFetch from '../../hooks/useFetch';
import useLocalStorage from '../../hooks/useLocalStorage';
import { getCompaniesAsync } from '../../redux/actions';

const defaultSettings = {
  notifications: 'daily',
};

function Home() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const [appSettings, setAppSettings] = useLocalStorage('app-settings', defaultSettings);
  useBackgroundColor('white');

  const { loading, data, error } = useFetch(
    `${process.env.REACT_APP_FAKER_API}/companies?_quantity=1`,
  );

  return (
    <div className="row mt-4">
      <div className="col-12 my-4 shadow">
        <FetchData />
      </div>

      <div className="col-12 my-4">
        <ParentComponent />
      </div>
      <div className="col-12 my-4">
        <Welcome title="Testing title" startNumber={0} />
      </div>
      <div className="col-6">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            dispatch(getCompaniesAsync());
          }}>
          Redux Companies
        </button>
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
      <div className="col-6">
        {loading && <h3>Loading</h3>}
        {error && <h3 className="text-danger">{JSON.stringify(error, null, 2)}</h3>}
        {data && <pre className="bg-light p-4">{JSON.stringify(data.data, null, 2)}</pre>}
      </div>
    </div>
  );
}

export default Home;

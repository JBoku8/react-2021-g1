import { useState } from 'react';

function Home(props) {
  const [value, setValue] = useState('');

  return (
    <div className="row mt-4">
      <div className="col-6">
        <button
          className="btn btn-primary"
          onClick={() => {
            setValue(Math.random().toString());
          }}>
          Re Render Home component
        </button>
        <h1>{value}</h1>
      </div>
    </div>
  );
}

export default Home;

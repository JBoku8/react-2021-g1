import { useState } from 'react';

function Home() {
  const [value, setValue] = useState('');

  return (
    <div className="row mt-4">
      <div className="col-6">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            setValue(Math.random().toString());
          }}
        >
          Re Render Home component
        </button>
        <h1>{value}</h1>
      </div>
    </div>
  );
}

export default Home;

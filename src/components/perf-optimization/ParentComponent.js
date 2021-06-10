import { useCallback, useEffect, useState } from 'react';
import ChildComponent from './ChildComponent';

const numbers = [1, 2, 3, 4];

function ParentComponent() {
  const [num, setNum] = useState(0);

  const randomize = useCallback((endpoint) => {
    fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  useEffect(() => {
    randomize('posts');
  }, []);

  return (
    <div className="row">
      <h2>Num {num}</h2>
      <button
        className="btn btn-danger"
        onClick={() => {
          setNum((prevNum) => prevNum + 1);
        }}>
        SetNum + 1
      </button>
      <ChildComponent
        title="this is child component title"
        numbers={numbers}
        randomize={randomize}
      />
    </div>
  );
}

export default ParentComponent;

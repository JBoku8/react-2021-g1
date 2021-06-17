import { useEffect, useState } from 'react';
import { getTodoItemsAsync } from '../../services/faker';
import { TEST_IDS } from '../../utils/testids';

function FetchData() {
  const [state, setState] = useState([]);
  const getBooks = async () => {
    const result = await getTodoItemsAsync();
    setState(result);
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div className="row">
      <h2 data-testid={TEST_IDS.fetchData.title}>{state.length}</h2>
    </div>
  );
}

export default FetchData;

import axios from 'axios';
// import { act, render } from '@testing-library/react';
import { getTodoItemsAsync } from '../../services';
// import { TEST_IDS } from '../../utils/testids';

// import FetchData from './FetchData';

jest.mock('axios');

describe('Fetch Data component testing', () => {
  beforeEach(() => {
    axios.get = jest.fn().mockResolvedValueOnce({
      data: [1, 2, 3, 4, 5],
    });
  });

  test('fetches data correctly', async () => {
    const result = await getTodoItemsAsync();
    expect(result).toHaveLength(5);
  });
});

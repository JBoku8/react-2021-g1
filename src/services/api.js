const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

export class API_SERVICE {
  static async getTodoListAsync({ start = 0, limit = 10 }) {
    try {
      const response = await fetch(
        baseUrl + `?_start=${start}&_limit=${limit}&`,
      );

      const result = await response.json();
      return result;
    } catch (err) {
      console.trace(err);
    }
  }
  static getTodoList({ start = 0, limit = 10, callback }) {
    fetch(baseUrl + `?_start=${start}&_limit=${limit}&`)
      .then((response) => response.json())
      .then((result) => {
        callback(result);
      })
      .catch((err) => {
        console.trace(err);
      });
  }

  static async getTodoItemAsync(todoId) {
    try {
      const item = await fetch(baseUrl + `/${todoId}`);
      const result = await item.json();
      console.log('[api@getTodoItemAsync]', result);
    } catch (err) {}
  }
}

export default API_SERVICE;

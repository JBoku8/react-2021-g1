export class API_SERVICE {
  static async getTodoListAsync({ start = 0, limit = 10 }) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/todos?_start=${start}&_limit=${limit}&`,
      );

      const result = await response.json();
      return result;
    } catch (err) {
      console.trace(err);
      return [];
    }
  }

  static getTodoList({ start = 0, limit = 10, callback }) {
    fetch(
      `${process.env.REACT_APP_API_URL}/todos?_start=${start}&_limit=${limit}&`,
    )
      .then((response) => response.json())
      .then((result) => {
        callback(result);
      })
      .catch((err) => {
        console.trace(err);
        return [];
      });
  }

  static async getTodoItemAsync(todoId) {
    try {
      const item = await fetch(
        `${process.env.REACT_APP_API_URL}/todos/${todoId}`,
      );
      const result = await item.json();
      console.log('[api@getTodoItemAsync]', result);
      return result;
    } catch (err) {
      console.trace(err);
      return [];
    }
  }
}

export default API_SERVICE;

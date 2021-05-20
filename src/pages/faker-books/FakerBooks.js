import { useEffect, useReducer } from 'react';
import { getFakerBooks } from '../../services';

const SET_BOOKS = 'SET_BOOKS';
const CLEAN_BOOKS = 'CLEAN_BOOKS';
const SET_FILTER = 'SET_FILTER';
const CLEAR_FILTER = 'CLEAR_FILTER';

const bookReducer = (state, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };

    case CLEAN_BOOKS:
      return {
        ...state,
        books: [],
      };
    case SET_FILTER:
      // eslint-disable-next-line no-case-declarations
      const filtered = state.books.filter((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        filter: action.payload,
        oldBooks: [...state.books],
        books: filtered,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        books: [...state.oldBooks],
        filter: '',
      };
    default:
      throw new Error();
  }
};

const initialState = {
  error: null,
  books: [],
  oldBooks: [],
  filter: '',
};

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function FakerBooks() {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  const loadBooks = async () => {
    const bookData = await getFakerBooks({ quantity: 3 });
    dispatch({
      type: SET_BOOKS,
      payload: bookData,
    });
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const onSearch = debounce(({ target }) => {
    if (target.value.length > 2) {
      dispatch({
        type: SET_FILTER,
        payload: target.value,
      });
    } else if (state.filter) {
      dispatch({
        type: CLEAR_FILTER,
      });
    }
  });

  const { books } = state;
  return (
    <div className="row">
      <div className="col-12">
        <h2>Faker Books -{books.length}</h2>

        <input
          className="form-control mb-2"
          placeholder="search"
          name="search"
          onKeyUp={onSearch}
        />
      </div>

      <div className="row border pt-3 justify-content-between">
        {state.books.map((item) => (
          <div
            key={item.isbn}
            className="card mb-2 p-3 me-1"
            style={{
              maxWidth: '20rem',
            }}>
            <h2 className="card-title">{item.title}</h2>
            <img src={item.image} alt={item.title} className="card-image-top img-fluid w-50" />
            <div className="card-body">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FakerBooks;

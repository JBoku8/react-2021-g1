import { useState } from 'react';

import Theme from './components/theme';
import Counter from './pages/counter/counter';
import TodoHome from './pages/todo/todo-home';
import Navigation from './components/navigation/navigation';
// import Home from "./pages/home/home";
// import Welcome from "./components/welcome";

import './App.css';

function App() {
  const [page, setPage] = useState({
    todoHome: false,
    counterHome: true,
  });
  const [currentPage, setCurrentPage] = useState('counterHome');

  const onPageChange = (pageKey) => {
    const updateActivePage = { ...page };
    let newCurrentPage = '';
    Object.keys(updateActivePage).forEach((key) => {
      if (key === pageKey) {
        updateActivePage[pageKey] = true;
        newCurrentPage = pageKey;
      } else {
        updateActivePage[key] = false;
      }
    });

    setCurrentPage(newCurrentPage);
    setPage(updateActivePage);
  };

  return (
    <div className="container">
      <Navigation onPageChange={onPageChange} pages={page} />
      <Theme page={currentPage}>
        {page.todoHome && <TodoHome />}
        {page.counterHome && <Counter />}
      </Theme>
    </div>
  );
}

export default App;

import Welcome from "./components/welcome";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Welcome title="Lecture 2" startNumber={100} />
      </div>
    </div>
  );
}

export default App;

import Welcome from "./Welcome";
import "./App.css";

function App() {
  // const hello = <h1 className="title">Hello World...</h1>;
  // const message = <h2>Message text</h2>;

  return (
    <div className="App">
      <Welcome title="Lecture 1" />
      <Welcome title="ReactJs" />
      <Welcome title="Webpack" />
      <Welcome title="BabelJs" />
      <Welcome title="NPM && Yarn" />
    </div>
  );
}

export default App;

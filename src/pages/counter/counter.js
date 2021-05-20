import React from 'react';

class Counter extends React.Component {
  state = {
    title: 'Loading...',
    prevTitle: '',
    count: 0,
  };

  componentDidMount() {
    this.timerId = setTimeout(() => {
      // AJAX call imitation
      this.setState((prevState) => ({
        ...prevState,
        prevTitle: document.title,
        title: 'Counter Page',
      }));
      document.title = 'Counter Page';
    }, 2000);
  }

  componentWillUnmount() {
    const { prevTitle } = this.state;
    document.title = prevTitle;
    clearTimeout(this.timerId);
  }

  onPlus = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  onReset = () => {
    throw new SyntaxError('Reset Exception');
    // this.setState({
    //   ...this.state,
    //   count: 0,
    // });
  };

  onMinus = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count - 1,
    }));
  };

  render() {
    const { title, count } = this.state;

    return (
      <div className="row mt-3">
        <h2>
          {title}
          {' '}
          -
          {count}
        </h2>
        <div className="col-2 d-flex justify-content-between">
          <button
            className="btn btn-primary btn-lg"
            onClick={this.onPlus}
            type="button"
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-lg"
            onClick={this.onReset}
            type="button"
          >
            0
          </button>
          <button
            className="btn btn-warning btn-lg"
            onClick={this.onMinus}
            type="button"
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;

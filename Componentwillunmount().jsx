//The componentWillUnmount() method is a React lifecycle method that is called just before a component is removed (unmounted) from the DOM.
//When componentwillunmount() is called: when a component is about to destroy
import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimer: true
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Tick...");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Timer cleared");
  }

  handleRemove = () => {
    clearInterval(this.timer); // Clear timer manually
    this.setState({ showTimer: false });
    console.log("Timer cleared manually");
  };

  render() {
    return (
      <div>
        {this.state.showTimer ? (
          <h1>Timer is running...</h1>
        ) : (
          <h1>Timer has been stopped.</h1>
        )}
        <button onClick={this.handleRemove} disabled={!this.state.showTimer}>
          Remove Timer
        </button>
      </div>
    );
  }
}

export default Timer;

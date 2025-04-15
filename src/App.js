import React, { Component } from "react";
import './App.css';

class Counter extends Component{
 state = {
  count: 0
 }

  increment = () => {
    this.setState(state => ({ count: state.count + 1 }));
  }

  decrement= () => {
    this.setState(state => ({ count: state.count - 1 }));
  }
  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button name="Increment" onClick={this.increment}>Increment</button>
        <button name="Decrement" onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
// function App() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h1>Counter App</h1>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

export default Counter;

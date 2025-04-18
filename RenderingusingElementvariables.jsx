//Conditional Rendering using Element Variables
//Message.jsx
function Message() {
    let message1 = <h1>Pass message 1</h1>
    let message2 = <h1>Pass message 2</h1>
    const count = true
    if(count) {
        return (message1);
    }
    else {
        return (message2);
    }
}
export default Message
//App.jsx
import Message from "./components/Condition"
function App() {
  return (
    <div>
      <Message />
    </div>
  );
}
export default App

//Instead of passing two return statements in Message.jsx we can use only one return statement
//Condition.jsx
function Message() {
    let message;
    const count = true
    if(count) {
        message = <h1>Pass message 1</h1>
    }
    else {
        message = <h1>Pass message 2</h1>
    }
    return message;
}
export default Message

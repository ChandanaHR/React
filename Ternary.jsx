//Using Ternary operator in React
//Condition.jsx
function Message() {
    const count = false
    return count ? <h1>Pass message 1</h1> : <h2>Pass message 2</h2>
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

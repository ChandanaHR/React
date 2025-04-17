//Condition.jsx
function Condition() {
    const display = false;
    if(display) {
        return (
            <div>Condition is met</div>
        );
    }
    else {
        return (
            <div>Condition is not met</div>
        );
    }
}
export default Condition

//App.jsx
import Condition from "./components/Condition"
function App() {
  return (
    <div>
      <Fruits />
      <Condition />
    </div>
  );
}
export default App

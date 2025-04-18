//Conditionally rendering list of objects
//Fruits.jsx
import Condition from "./Condition"
function Fruits() {
    const fruits = [
        {name:"Apple",price:30,emoji:"🍎"},
        {name:"Strawberry",price:40,emoji:"🍓"},
        {name:"cherry",price:50,emoji:"🍒"},
        {name:"Mango",price:60,emoji:"🥭"},
        {name:"Watermelon",price:20,emoji:"🍉"},
    ]
    return (
        <div>
            <ul>
                {
                   fruits.map((value)=> <Condition name={value.name} 
                                        price={value.price}
                                        emoji={value.emoji}/>) 
                }
            </ul>
        </div>
    )
}
export default Fruits

//Condition.jsx
function Condition({name, price, emoji}) {
    return (
        <>
            {price>20 ? <li key={name}>{emoji} {name} {price}</li>
                        : ""}
        </>
    );
}
export default Condition

//App.jsx
import Fruits from "./components/Fruits"
function App() {
  return (
    <div>
      <Fruits />
    </div>
  );
}
export default App

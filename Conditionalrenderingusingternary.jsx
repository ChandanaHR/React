//Conditionally rendering a message using Ternary
//Fruits.jsx
import Condition from "./Condition"
function Fruits() {
    const fruits = [
        {name:"Apple",price:30,emoji:"🍎",soldout: false},
        {name:"Strawberry",price:40,emoji:"🍓",soldout: true},
        {name:"cherry",price:50,emoji:"🍒",soldout: false},
        {name:"Mango",price:60,emoji:"🥭",soldout: true},
        {name:"Watermelon",price:20,emoji:"🍉",soldout: true},
    ]
    return (
        <div>
            <ul>
                {
                   fruits.map((value)=> <Condition name={value.name} 
                                        price={value.price}
                                        emoji={value.emoji}
                                        soldout = {value.soldout}/>) 
                }
            </ul>
        </div>
    );
}
export default Fruits

//Condition.jsx
function Condition({name, price, emoji, soldout}) {
    return (
        <>
            <li key = {name}>
                {emoji} {name} {price} {soldout ? "soldout": ""}
            </li>
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

//Fruits.jsx
function Fruits() {
    const objects = [
        {name:"Apple",price:10,emoji:"🍎"},
        {name:"Mango",price:20,emoji:"🥭"},
        {name:"cherry",price:30,emoji:"🍒"},
        {name:"strawberry",price:40,emoji:"🍓"},
        {name:"watermelon",price:50,emoji:"🍉"},
    ];
    return (
        <div>
            <ul>
                {
                    objects.map((fruit)=>(<li>{fruit.name}{" "}{fruit.price}{" "}{fruit.emoji}</li>))
                }
            </ul>
        </div>
    )
}
export default Fruits


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

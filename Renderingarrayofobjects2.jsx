//Rendering array of objects through different components not in single file
//Fruits.jsx
import Second from "./Second"

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
                    objects.map((fruit)=> (<Second name={fruit.name} price={fruit.price} emoji={fruit.emoji}/>))
                }
            </ul>
        </div>
    );
}
export default Fruits


//Second.jsx
function Second({name,price,emoji}) {
    return (
        <li>
            {name} {price} {emoji}
        </li>
    );
} 
export default Second

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

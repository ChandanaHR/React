//Conditional Rendering by rendering separate components using props
//Condition.jsx
import Government from "./Government"
import Ac from "./Ac"
function Condition() {
    const display = 40;
    if(display===25) {
        return (
            <div>
                <Government typeofbus="Government" charge={25}/>
            </div>
        );
    }
    else if(display===30){
        return (
            <div>
                <Ac typeofbus="Ac" charge={30}/>
            </div>
        );
    }
    else {
        return (
            <h1>Invalid input</h1>
        )
    }
}
export default Condition

//Government.jsx
function Government(props) {
    return (
        <div>{props.typeofbus} {props.charge} </div>
    )
}
export default Government

//Ac.jsx
function Ac(props) {
    return (
        <div>{props.typeofbus} {props.charge} </div>
    )
}
export default Ac

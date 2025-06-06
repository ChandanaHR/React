/*componentDidUpdate() - is a React lifecycle method that runs after the component has been updated (i.e., after a re-render caused by a change in state or props).*/
/*After components updates have been done and have been applied to DOM, then after immediately componentDidUpdate() will be called*/
/* This method is called immediately after a component’s updates are applied to the DOM, making it a key tool for performing post-update tasks like fetching new data, updating external APIs, or logging changes.*/

Syntax: componentDidUpdate(prevProps,prevState,snapshot) {}
/*prevProps: This parameter contains the props that the component had before the update.
/*prevState: This parameter contains the state of the component before the update.

/*When is componentDidUpdate() called
//1) When the component’s props or state has changed, causing a re-render.
//2) After React applies these updates to the DOM and ensures the user sees the new UI.
//3) As a phase to handle side-effects that rely on the updated DOM or new state values.*/

import React from 'react'
class Componentdidupdate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {count : 0}
        console.log("Component created")
    }
    componentDidMount() {
        console.log("Component Mounted")
    }
    componentDidUpdate(prevstate) {
        console.log("Component did update")
        console.log("Previous count value",prevstate.count)
        console.log("Current count value",this.state.count)
    }
    handlechange=()=>{
        this.setState((prevstate)=>({
            count: prevstate.count + 1
        }));
    };
    render() {
        return (
            <div>
                <h1>Count is : {this.state.count} </h1>
                <button onClick={this.handlechange}>Click me</button>
            </div>
        )
    }
}
export default Componentdidupdate

/*Component creation using constructor
  rendering component
  After the component is logged into DOM: ComponentDidMount will be mounted
  Updating the state variable in component new state variable will be logged in DOM
  After each updation componentdidupdate will be called

//React2.jsx
import {useState} from "react"
import "../App1.css"
export function React2() {
    const[move,setmove] = useState(false)
    const[email,setemail] = useState(" ")
    const[password,setpassword] = useState(" ")
    function handleclick() {
        setmove(!move)
    }
    return (
        <div className="container">
            <h1>Simple Login form</h1>
            <div className={`box ${move? "right":"left"}`}><br/>
                <label>Email: </label><br/>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setemail(e.target.value)}/><br/>
                <label>Password: </label><br/>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            </div><br/>
            <button onClick={handleclick}>Click me</button>
            {/* <h1>{move && <p>Asha KS</p>}</h1> */}
        </div>
    )
}
//App1.css
.container {
    margin-top: 50px;
    border-radius: 30px;
    width: 1000px;
    background: linear-gradient(to left, rgb(56, 15, 56),black, rgb(76, 21, 76));
}
.box {
    width: 500px;
    height: 300px;
    background: linear-gradient(to right, black,rgb(29, 33, 67),black);
    border-radius: 30px;
    transition: tranform 0.5s ease-in-out;
}
h1 {
    color: white;
}
.right {
    transform: translateX(500px);
}
.left {
    transform: translateX(-10px);
}
button {
    padding: 10px 20px;
}
label {
    color: white;
    font-size: 30px;
}
input {
    width: 300px;
    height: 30px;
}

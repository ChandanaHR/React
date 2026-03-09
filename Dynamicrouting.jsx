//Dynamicrouting.jsx
import {Link,Routes,Route} from "react-router-dom"
import {Quizlist} from "./Quizlist"
import {Quiz} from "./Quiz"
import {Home} from "./Routecomponents"
export function Dynamicrouting() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>{" "}
                <Link to="/quizzes">Quizzess</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/quizzes" element={<Quizlist/>}></Route>
                <Route path="/quiz/:id/:name" element={<Quiz/>}></Route>
            </Routes>
        </div>
    )
}
//Quizlist.jsx
import {Quiz} from "./Quiz"
import {Link} from "react-router-dom"
export function Quizlist() {
    return (
        <div>
            <ul>
                <li><Link to="/quiz/101/asha">Quiz 101</Link></li>
                <li><Link to="/quiz/102/ravi">Quiz 102</Link></li>
                <li><Link to="/quiz/103/chandu">Quiz 103</Link></li>
                <li><Link to="/quiz/104/krishna">Quiz 104</Link></li>
            </ul>
        </div>
    )
}

//Quiz.jsx
import {useParams} from "react-router-dom"
export function Quiz() {
    const {id,name} = useParams();
    return (
        <div>
            <h1>Quiz id : {id}</h1>
            <p>This is a quiz number: {id}</p>
            <h1>Name of the student is {name}</h1>
        </div>
    )
}

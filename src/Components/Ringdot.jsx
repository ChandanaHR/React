import {useState,useEffect} from "react"
import "./Ringdot.css"

const colors = [
"linear-gradient(45deg,rgb(98, 13, 113),rgb(12, 65, 172))",
"linear-gradient(45deg,rgb(12, 65, 172),rgb(111, 8, 8))",
"linear-gradient(45deg,rgb(111, 8, 8),rgb(6, 75, 44))",
"linear-gradient(45deg,rgb(6, 75, 44),rgb(115, 116, 23))",
"linear-gradient(45deg,rgb(115, 116, 23),rgb(7, 93, 89))",
"linear-gradient(45deg,rgb(7, 93, 89),rgb(77, 38, 24))",
"linear-gradient(45deg,rgb(77, 38, 24),rgb(62, 194, 197))",
"linear-gradient(45deg,rgb(62, 194, 197),rgb(142, 20, 128))",
"linear-gradient(45deg,rgb(142, 20, 128),rgb(9, 93, 6))",
];
const radius = 250

export function Ringdot() {
    const[dots,setdots] = useState([]);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setdots(prev=>{
                 let updated = 
                 prev.map(dot=>{

                const angle = Math.random()
                *2*Math.PI;

                return{
                    ...dot,
                    x: radius*Math.cos(angle),
                    y: radius*Math.sin(angle)
                }

                });
                const newangle = 
                Math.random()*2*Math.PI;
                const newdot = {
                    id: Date.now(),
                    color: colors[Math.floor
                        (Math.random()*
                        colors.length)],
                    x: radius*
                    Math.cos(newangle),
                    y: radius*
                    Math.sin(newangle)
                }
                const updateddots = 
                [...updated,newdot]
                if(updateddots.length>100) {
                    updateddots.shift();
                }
                return updateddots;
            })
        },500)
        return ()=>clearInterval(interval)
    },[])
    return (
        <div className="outercircle">
            <div className="innercircle"></div>
            {dots.map((dot,index)=>(
                <div key={dot.id} 
                className="dot" 
                 style={{
                    background: dot.color,
                    // animationDelay:`${index*0.3}s`
                    transform: 
                    `translate(${dot.x}px,
                    ${dot.y}px)`
                 }}/>
            ))}
        </div>
    )
}
//Fire.jsx
import {useState,useEffect,useRef} from "react"
import "./Fire.css"
export function Fire() {
    const canvasRef = useRef(null)
    const[start,setstart] = useState(false)
    useEffect(()=>{
        if(!start) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        let particles = []
        function createFireParticles() {
            particles.push({
                x: Math.random()*canvas.width,
                y: canvas.height,
                size: Math.random()*10+5,
                speedY: Math.random()*10+5,
                color: `hsl(${Math.random()*30},100%,50%)`,
                opacity: 1
            })
        }
        function animate() {
            ctx.fillStyle = "rgba(0,0,0,0.05)"
            ctx.fillRect(0,0,canvas.width,canvas.height);
            particles.forEach((p,i)=>{
                ctx.beginPath();
                ctx.arc(p.x,p.y,p.size,0,Math.PI*2)
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = p.color;
                ctx.fill();
                ctx.globalAlpha = 1;
                p.y -= p.speedY
                p.opacity -= 0.01
                if(p.opacity<=0) particles.splice(i,1);
            });
            for(let i=0;i<20;i++) {
                createFireParticles();
            }
            requestAnimationFrame(animate);
        }
        animate();
    },[start]) //useeffect close
    return (
        <div className="wrapper">
            <button onClick={()=>setstart(true)}>Burn page</button>
            <div className={`secret ${start?"reveal":""}`}>
                Chandana HR
            </div>
            {start && <canvas ref={canvasRef} className="fireCanvas"></canvas>}
            <div className="smoke"></div>
            <div className={`burn-layer ${start ? "burn" : ""}`}></div>
        </div>
    )
}
//Fire.css
.wrapper {
    position: relative;
    height: 100vh;
    background: rgb(9, 9, 10);
    overflow: hidden;
    color: white;
    text-align: center;
    padding-top: 50px;
}
.fireCanvas {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
.burn-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;   /* This creates a full covering screen*/
    clip-path: circle(0% at 50% 100%);
    transition: clip-path 3s ease-out;
}
.fireCanvas {
    z-index: 3;
}

.burn-layer {
    z-index: 2;
}
.burn-layer.burn {
    clip-path: circle(0% at 50% 100%);
    animation: revealburn 4s forwards;
}
@keyframes revealburn {
    0% {
        clip-path: circle(0% at 50% 100%);
    }
    100% {
        clip-path: circle(150% at 50% 100%);
    }
}
.secret {
  position: relative;
  z-index: 4;
  opacity: 0;
  transition: opacity 3s ease;
  font-size: 180px;
  margin-top: 430px;
  background-size: 200%;
  line-height: 1.2;
  background: linear-gradient(to right, red, orange, rgb(243, 230, 51));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
button {
  opacity: 0;        
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;      
  z-index: 10;
  cursor: pointer;
}
.secret.reveal {
  opacity: 1;
}
.smoke {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(circle at bottom, rgba(200,200,200,0.2), transparent 80%);
  z-index: 7;
}
//App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {Fire} from "./Fire"
import './App.css'

function App() {
    return (
        <div>
            <Fire/>
        </div>
    )
}

export default App

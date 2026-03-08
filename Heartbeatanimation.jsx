//Heart.jsx
import "./Heart.css"
export function Heart() {
    return (
        <div className="container">
            <div className="heart">Heart</div>
            <div className="spark spark1"></div>
            <div className="spark spark2"></div>
            <div className="spark spark3"></div>
            <div className="spark spark4"></div>
            <div className="spark spark5"></div>
            <div className="spark spark6"></div>
            <div className="spark spark7"></div>
            <div className="spark spark8"></div>
            <div className="spark spark9"></div>
            <div className="spark spark10"></div>
            <div className="spark spark11"></div>
            <div className="spark spark12"></div>
            <div className="spark spark13"></div>
            <div className="spark spark14"></div>
            <div className="spark spark15"></div>
            <div className="spark spark16"></div>
            <div className="spark spark17"></div>
            <div className="spark spark18"></div>
            <div className="spark spark19"></div>
            <div className="spark spark20"></div>
            <div className="spark spark21"></div>
            <div className="spark spark22"></div>
            <div className="spark spark23"></div>
            <div className="spark spark24"></div>
            <div className="spark spark25"></div>
            <div className="spark spark26"></div>
            <div className="spark spark27"></div>
            <div className="spark spark28"></div>
            <div className="spark spark29"></div>
            <div className="spark spark30"></div>
            <div className="spark spark31"></div>
            <div className="spark spark32"></div>
            <div className="spark spark33"></div>
            <div className="spark spark34"></div>
            <div className="spark spark35"></div>
            <div className="miniheart h1"></div>
            <div className="miniheart h2"></div>
            <div className="miniheart h3"></div>
            <div className="miniheart h4"></div>
            <div className="miniheart h5"></div>
            <div className="miniheart h6"></div>
            <div className="miniheart h7"></div>
            <div className="miniheart h8"></div>
            <div className="miniheart h9"></div>
            <div className="miniheart h10"></div>
            <div className="miniheart h11"></div>
            <div className="miniheart h12"></div>
            <div className="miniheart h13"></div>
            <div className="miniheart h14"></div>
            <div className="miniheart h15"></div>
            <div className="miniheart h16"></div>
            <div className="miniheart h17"></div>
            <div className="miniheart h18"></div>
            <div className="miniheart h19"></div>
            <div className="miniheart h20"></div>
            <div className="miniheart h21"></div>
            <div className="miniheart h22"></div>
            <div className="miniheart h23"></div>
            <div className="miniheart h24"></div>
            <div className="miniheart h25"></div>
            <div className="miniheart h26"></div>
            <div className="miniheart h27"></div>
            <div className="miniheart h28"></div>
            <div className="miniheart h29"></div>
            <div className="miniheart h30"></div>
            <div className="miniheart h31"></div>
            <div className="miniheart h32"></div>
            <div className="miniheart h33"></div>
            <div className="miniheart h34"></div>
            <div className="miniheart h35"></div>
            <div className="miniheart h36"></div>
            <div className="miniheart h37"></div>
            <div className="miniheart h38"></div>
        </div>
    )
}
//Heart.css
.container {
    display:flex;
    width: 600px;
    height: 600px;
    position: relative;
    background-color: black;
    justify-content: center;
    align-items: center;
}
.heart {
    color: rgb(250, 248, 248);
    width: 300px;
    height: 300px;
    background: radial-gradient(circle at 40% 30%, #e60000 0%, #da1010 40%, #cc0000 80%);
    transform: rotate(-45deg);
    position: relative;
    animation: burst 2s infinite;
    filter:
    drop-shadow(0 0 5px white)
    drop-shadow(0 0 10px white)
    drop-shadow(0 0 15px #ff4d88)
    drop-shadow(0 0 30px #ff1e63);
}
.heart::before,.heart::after {
    content: "";
    width: 300px;
    height: 300px;
    /* background: radial-gradient(circle at 30% 30%, #ff4d4d 0%, #ff1a1a 40%, #cc0000 80%); */
    /* border: 12px solid black; */
    background: #e60000;
    border-radius: 50%;
    position: absolute;
}
.heart::before {
    top: -150px;
    left: 0;
    box-shadow: inset -20px -20px 40px #da1010;
}
.heart::after {
    left: 150px;
    top: 0;
    box-shadow: inset -20px -20px 40px #b71616;
}

@keyframes burst {
    0% {
        transform: scale(1) rotate(-45deg)
    }
    50% {
        transform: scale(1.4) rotate(-45deg)
    }
    70% {
        transform: scale(1.2) rotate(-45deg)
    }
    100% {
        transform: scale(1) rotate(-45deg)
    }
}
.spark {
    width: 6px;
    height: 6px;
    background-color: gold;
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    box-shadow: 0 0 8px rgb(248, 224, 91),
                0 0 9px rgb(242, 242, 110),
                0 0 10px rgb(239, 199, 100),
                0 0 11px rgb(246, 223, 95);
    animation: sparkle 2s infinite;
}
.spark1  { top:40px;  left:100px; animation-delay: 0s; }
.spark2  { top:80px;  left:500px; animation-delay: 0.2s; }
.spark3  { top:150px; left:60px; animation-delay: 0.4s;}
.spark4  { top:200px; left:520px; animation-delay: 0.6s;}
.spark5  { top:260px; left:120px; animation-delay: 0.8s;}
.spark6  { top:300px; left:450px; animation-delay: 1s;}
.spark7  { top:350px; left:70px;  animation-delay: 1.2s;}
.spark8  { top:380px; left:520px; animation-delay: 1.4s;}
.spark9  { top:420px; left:200px; animation-delay: 1.6s;}
.spark10 { top:460px; left:500px; animation-delay: 1.8s;}
.spark11 { top:500px; left:100px; animation-delay: 2s;}
.spark12 { top:520px; left:350px; animation-delay: 2.2s;}
.spark13 { top:120px; left:300px; animation-delay: 2.4s;}
.spark14 { top:250px; left:350px; animation-delay: 2.6s;}
.spark15 { top:480px; left:250px; animation-delay: 2.8s;}
.spark16 { top:30px;  left:300px; animation-delay: 3s;}
.spark17 { top:60px;  left:420px; animation-delay: 3.2s;}
.spark18 { top:100px; left:520px; animation-delay: 3.4s;}
.spark19 { top:180px; left:460px; animation-delay: 3.6s;}
.spark20 { top:240px; left:40px; animation-delay: 3.8s;}
.spark21 { top:320px; left:520px; animation-delay: 4s;}
.spark22 { top:360px; left:180px; animation-delay: 4.2s;}
.spark23 { top:420px; left:80px; animation-delay: 4.4s;}
.spark24 { top:470px; left:420px; animation-delay: 4.6s;}
.spark25 { top:540px; left:260px; animation-delay: 4.8s;}
.spark26 { top:440px; left:290px; animation-delay: 5s;}
.spark27 { top:190px; left:470px; animation-delay: 5.2s;}
.spark28 { top:290px; left:80px; animation-delay: 5.4s;}
.spark29 { top:90px; left:210px; animation-delay: 5.6s;}
.spark30 { top:500px; left:300px; animation-delay: 5.8s;}
.spark31 { top:200px; left:320px; animation-delay: 6s;}
.spark32 { top:179px; left:55px; animation-delay: 6.2s;}
.spark33 { top:480px; left:125px; animation-delay: 6.4s;}
.spark34 { top:560px; left:480px; animation-delay: 6.6s;}
.spark35 { top:350px; left:110px; animation-delay: 6.8s;}
@keyframes sparkle {
    0% {
        opacity: 0;
        transform : scale(0);
    }
    60% {
        opacity: 1;
        transform: scale(1.7);
    }
    100% {
        opacity: 0;
        transform : scale(0);
    }
}
.miniheart {
    width: 50px;
    height: 50px;
    background-color: rgb(249, 9, 157);
    position: absolute;
    top: 40%;
    left: 50%;
    transform: rotate(-45deg);
    animation: fly 2s infinite;
     filter:
    drop-shadow(0 0 5px white)
    drop-shadow(0 0 10px white)
    drop-shadow(0 0 15px #ff4d88)
    drop-shadow(0 0 30px #ff1e63);
}
.miniheart::before,.miniheart::after {
    content: "";
    width:50px;
    height: 50px;
    position: absolute;
    border-radius: 50%;
    background-color: rgb(249, 9, 157);
}
.miniheart::before {
    top: -25px;
    left: 0;
}
.miniheart::after {
    left: 25px;
    top: 0;
}

.h1 {--x:80px; --y:-80px;}
.h2 {--x:-80px; --y:80px;}
.h3 {--x:90px; --y:90px;}
.h4 {--x:-90px; --y:-90px;}
.h5 {--x:100px; --y:-170px;}
.h6 {--x:-170px; --y:100px;}
.h7 {--x:-180px; --y:180px;}
.h8 {--x:-100px; --y:-200px;}
.h9 {--x: 0px; --y:-80px;}
.h10 {--x:80px; --y:0px;}
.h11 {--x:-80px; --y:0px;}
.h12 {--x:0px; --y:80px;}
.h13 {--x:100px; --y:200px;}
.h14 {--x:100px; --y:-200px;}
.h15 {--x:-200px; --y:100px;}
.h16 {--x:100px; --y:-30px;}
.h17 {--x:-30px; --y:-100px;}
.h18 {--x:-100px; --y:170px;}
.h19 {--x:170px; --y:100px;}
.h20 {--x:190px; --y:190px;}
.h21 {--x:-140px; --y:-140px;}
.h22 {--x:140px; --y:-140px;}
.h23 {--x:-140px; --y:140px;}
.h24 {--x:140px; --y:140px;}
.h25 {--x:70px; --y:-50px;}
.h26 {--x:-50px; --y:70px;}
.h27 {--x:110px; --y:110px;}
.h28 {--x:50px; --y:70px;}
.h29{ --x:80px; --y:0px; }
.h30{ --x:-80px; --y:0px; }
.h31{ --x:0px; --y:-80px; }
.h32{ --x:0px; --y:80px; }
.h33{ --x:60px; --y:-60px; }
.h34{ --x:-60px; --y:-60px; }
.h35{ --x:60px; --y:60px; }
.h36{ --x:-60px; --y:60px; }
.h37{ --x:100px; --y:-30px; }
.h38{ --x:-100px; --y:-30px; }

@keyframes fly {
    0%{
opacity:1;
transform: translate(-50%, -50%) scale(0.3) rotate(-45deg);
}

100%{
opacity:0;
transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1) rotate(-45deg);
}
}

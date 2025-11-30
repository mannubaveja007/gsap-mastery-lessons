import gsap from "gsap";

const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const resume = document.querySelector('.resume');
const restart = document.querySelector('.restart');
const reverse = document.querySelector('.reverse');
const kill = document.querySelector('.kill');
const yoyo =  document.querySelector('.yoyo');



const animation = gsap.to(".box" , {
    duration : 3,
    x : 750,
    ease : 'power1.inOut',
    scale : 1,
    opacity : 0.5,
    borderRadius : '50%',
    rotation : 180,
    repeat : -1,
    yoyo : true,
    onComplete : ()=>{
        gsap.to('.box' , {
            x : -750,
            ease : 'power1.inOut',
            duration : 6,
            scale : 1,
            opacity : 0.5,
            borderRadius : '50%',
            rotation : 180,
            yoyo : true
        })
    }
})

play.addEventListener('click' , ()=>{
    animation.play();
})

pause.addEventListener('click' , ()=>{
    animation.pause();
})

resume.addEventListener('click' , ()=>{
    animation.resume();
})

restart.addEventListener('click' , ()=>{
    animation.restart();
})

reverse.addEventListener('click' , ()=>{
    animation.reverse();
})


kill.addEventListener('click' , ()=>{
    animation.kill();
})

yoyo.addEventListener('click' , ()=>{
    animation.yoyo();
})

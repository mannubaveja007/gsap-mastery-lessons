import gsap from "gsap";

const repeat = document.querySelector('.repeat');
const animation =  gsap.from('.card' , {
    duration : 2,
    y : 100,
    stagger : 0.5,
    ease : 'expo.out'
})


repeat.addEventListener('click' , ()=>{
    animation.restart();
})
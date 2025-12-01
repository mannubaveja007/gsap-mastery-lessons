import gsap from "gsap";
const card = document.querySelector('#card');
console.log(card)

gsap.from(".card-face" ,{
    duration : 1,
    y : 90,
})

function flipTheGame(){
    gsap.to('.card-face.card-back',{
        x : 400,
        ease : 'power4.inOut',
        backfaceVisibility: 'visible',
        rotateY : 360,
        duration : 1,
        ease : 'sine.out'
    })
}

function NormalTheGame(){
    console.log("Normal the Fucking Game")
    gsap.to('.card-face.card-back',{
        rotateY : 180,
        duration : 1,
        x :0,
        backfaceVisibility : 'hidden',
        ease : 'sine.in',
    })
}

card.addEventListener("mouseover" , ()=>{
    flipTheGame();
})

card.addEventListener('mouseout' , ()=>{
    NormalTheGame();
})
import gsap from "gsap";

gsap.set(".gsap-box" , {
    y : -100
})

gsap.to('.gsap-box' , {
    ease : 'back.out',
    y : 0,
    duration : 1
})


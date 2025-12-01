import gsap from "gsap";

gsap.to('.toast' , {
    duration : 0.7,
    y : -30,
    ease : 'power4.in',
    opacity : 1,
    onComplete : ()=>{
        gsap.to(".toast" , {
            delay : 2.5,
            y : 30,
            opacity : 0,
            ease : 'power4.out',
            duration : 1,
        })
    }
})
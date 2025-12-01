import gsap from "gsap";

gsap.to(".toast.one" , {
    duration : 3,
    y : -70,
    ease : 'power3.out',
    onComplete : () =>{
        gsap.to('.toast.one' , {
            delay : 3,
            duration : 2,
            x : 100,
            opacity : 0,
        })
    }
})

gsap.to(".toast.two" , {
    delay : 7.5,
    duration : 3,
    y : -70,
    ease : 'power3.out',
    onComplete : () =>{
        gsap.to('.toast.two' , {
            delay : 3,
            duration : 2,
            x : 100,
            opacity : 0,
        })
    }
})
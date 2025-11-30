gsap.to('.card' , {
    opacity: 1 ,
    scale : 1,
    duration : 5,
    onComplete : ()=>
        gsap.to('.card' , {
            y : -20,
            duration : 2.1,
            repeat: 4,
            scale : 0 ,
        })
    
});


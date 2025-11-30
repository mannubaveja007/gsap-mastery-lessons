import gsap from 'gsap';

gsap.to('.box' , {
    x : 900,
    rotation : 360,
    duration : 3,
    borderRadius : "100%",
    backgroundColor : "blue",
    yoyo : true,
    // repeat : -1,
    // repeatDelay : 0.3,
    onComplete : ()=>{
        gsap.to('.box', {
            opacity : 0.4,
            yoyo : true,    
            x : -900,
            duration : 6,
            backgroundColor : "white",
            // repeat : -1,
            autoAlpha : 0,
        })
    }
})
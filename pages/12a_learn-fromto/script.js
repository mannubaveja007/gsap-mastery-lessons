import gsap from "gsap";

const bars = document.querySelectorAll('.bar');

bars.forEach((bar , index)=>{
    gsap.fromTo(bar, {
        x : 0,
        scaleY : 0.4,
        duration : 0.7
    },
    {
        // x : 100,
        scaleY : 1.6,
        opacity : 1,
        ease : 'sine.inOut',
        duration : 1.2,
        repeat : -1,
        yoyo : true,
        delay : index * 0.1
    })

})


// }, 
// {
//     x : 20,
//     opacity : 1.5,
//     ease : 'power4.out',
//     duration :1.9,
// },
// {
//     x : 30,
//     opacity : 0.7,
//     ease : 'power4.out',
//     duration : 2.2,
// }, 
// {
//     x : 50,
//     opacity : 0.9,
//     ease : 'power4.out',
//     duration : 2.5
// },
// {
//     x : 100,
//     duration : 3,
//     ease : 'power4.out',
//     opacity : 1,
//})

// remmeber this is not timeline what you are doing in thing that are done in the timeline so remove it and it just take from and to location means two {}
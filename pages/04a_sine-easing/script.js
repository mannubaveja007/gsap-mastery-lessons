import gsap from "gsap";

const button = document.querySelector('.scroll-to-top');

let isShow = false;

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 500){
        button.classList.add('show');

        if(!isShow){
            gsap.to(button,{
                duration : 1,
                y : -10,
                yoyo : true,
                repeat : -1,
                ease : 'sine.out'
            })
            isShow = true;
        }
    } 
    else{
        button.classList.remove('show');
    }
})

button.addEventListener('mouseenter',  ()=>{
    gsap.to(button , {
        scale : 1.1,
        ease : 'circ.out',
        duration : 0.2,
    })
})

button.addEventListener('mouseleave', ()=>{
    gsap.to(button,{
        scale : 1,
        duration : 0.2
    })
})

button.onclick = function() {
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
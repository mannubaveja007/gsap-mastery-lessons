import gsap from "gsap";
const reactions = document.querySelectorAll('.reactions button');
// console.log(reactions);

function popemoji(emoji) {
            console.log(emoji)
            gsap.fromTo(emoji, { y: 0 , scale : 1 , rotation : 0  , opacity : 1},
                {
                    y: -10,
                    duration: 0.3,
                    opacity : 0.9,
                    scale : 1.5,
                    rotation : -10,
                    yoyo: true,
                    repeat: 1,
                    ease: "power1.out"
                }
            )

}


reactions.forEach((react) => {
    react.addEventListener('click', (e) => {
        popemoji(e.currentTarget);
    })
})


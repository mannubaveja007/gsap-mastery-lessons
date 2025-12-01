import gsap from "gsap";

gsap.set(".box", {
  y: 100,
  opacity: 0,
  scale: 0.5,
});

gsap.to(".box", {
  y: 0,
  opacity: 1, 
  scale: 1,
  duration: 1,
  stagger: 0.2,
  ease: "back.out(1.7)",
});

import gsap from 'gsap';

const cards = document.querySelectorAll('.card');
const detailPage = document.querySelector('#detailPage');
const closeBtn = document.querySelector('#closeBtn');
const detailImage = document.querySelector('#detailImage');
const detailTitle = document.querySelector('#detailTitle');
const detailContent = document.querySelector('#detailContent');

const tl = gsap.timeline({ paused: true });

tl.set(detailPage, { display: 'flex' })
  .to(detailPage, { opacity: 1, duration: 0.3 })
  .from(detailImage, { y: -50, opacity: 0, duration: 0.5, ease: 'power2.out' })
  .to(detailContent, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
  .from(closeBtn, { opacity: 0, scale: 0, duration: 0.3, ease: 'back.out(1.7)' }, '-=0.3');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const imgSrc = card.querySelector('img').src;
    const titleText = card.querySelector('h3').innerText;

    detailImage.src = imgSrc;
    detailTitle.innerText = titleText;

    tl.play();
  });
});

closeBtn.addEventListener('click', () => {
  tl.reverse();
});

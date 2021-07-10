
const $navButton = document.querySelector('.nav-button');
const $cover = document.querySelector('.cover');
const $openNav = document.querySelector('.open-nav');

const tl = gsap.timeline({ paused: true, reversed: true }) 
tl.to('.cover', 0.8, {     
    width: '60%',
    ease: Power2.easeOut
})
    .to('nav', 0.8, {
        height: "100%",
        ease: Power2.easeOut
    }, '-=0.5')
    .fromTo('.open-nav', 0.4, {
        opacity: 0,
        x: 50,
        ease: Power2.easeOut
    }, {
        opacity: 1,
        x: 0,
        onComplete: function () {
            $openNav.style.pointerEvents = "auto";
            console.log('done');
        }
    })
$navButton.addEventListener('click', (e) => {
    if (tl.isActive()) {
        e.preventDefault();
        e.stopImmediatePropagation();  
        return false;
    }
    toggleTween(tl);
})
function toggleTween(tween) {              
    tween.reversed() ? tween.play() : tween.reverse();
}
const button = document.querySelector('#cta');
const rule = CSSRulePlugin.getRule('span:after');
const tl = gsap.timeline({ defaults: { duration: 1 } });

// DEFAULT WAY
/*
    gsap.from('.anim1', { 
        opacity: 0, 
        duration: 1, 
        y: -50,
        stagger: 0.6
    });

    gsap.from('img', { 
        opacity: 0, 
        duration: 1, 
        y: 30, 
        delay: 1.4 
    });

    gsap.to(rule, {
        cssRule: {
            scaleY: 0
        },
        duration: 1
    });

    gsap.from('aside', { 
        opacity: 0, 
        duration: 1,
        backgroundPosition: '200px 0px',
        delay: 1.1
    });
*/

// TIMELINE WAY
tl.from('.anim1', { opacity: 0, y: -50, stagger: 0.6 })
    .to(rule, { duration: 1.8, cssRule: { scaleY: 0 } }, '-=2.2')
    .from('aside', { backgroundPosition: '200px 0px', opacity: 0 }, '-=1.5')
    .from('img', { y: 50, opacity: 0 }, '-=.5');

button.addEventListener('click', () => {
    tl.reversed() ? tl.play() : tl.reverse();

    // Automatic reload
    setTimeout(() => {
        location.reload();
    }, 2500);
});
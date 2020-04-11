import gsap from 'gsap';

export const play = (pathname, node, appears) => {
    const timeline = gsap.timeline();

    // Page
    timeline.to(node, { duration: 1, opacity: 1, x: 10, ease: 'power4.Out' });

    // About elements
    const about = node.querySelector('.About');
    if (about) {
        const headline = about.querySelector('h1');
        timeline.from(headline, { duration: 0.2, opacity:0, y: -10, ease: 'elastic.out(0.5,0.3)' });
    }
}

export const exit = (node) => {
    const timeline = gsap.timeline();

    timeline.to(node, { duration: 0.5, y: '50%', scale: 0, ease: 'power2.inOut' });
}

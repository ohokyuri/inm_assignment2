import gsap from 'gsap';

export const play = (pathname, node, appears) => {
    const timeline = gsap.timeline();
    // const text = node.querySelector('p');
    // const link = node.querySelector('.App-link');

    // Page
    timeline.to(node, { duration: 1, opacity: 1, x: 0, ease: 'power2.inOut' });

    // Page elements
    // timeline.from(text, { duration: 0.15, autoAlpha: 0, y: 25, ease: 'power1.inOut' });
    // timeline.from(link, { duration: 0.15, autoAlpha: 0, y: 25, ease: 'power1.inOut' });

    // About elements
    const about = node.querySelector('.About');
    if (about) {
        const headline = about.querySelector('h1');
        timeline.from(headline, { duration: 0.15, autoAlpha: 0, y: 50, ease: 'power2.out' });
    }
}

export const exit = (node) => {
    const timeline = gsap.timeline();

    timeline.to(node, { duration: 0.7, x: '100%', scale: 0, ease: 'power2.inOut' });
    // timeline.to(node, { duration: 1, opacity: 0, ease: 'none' });
}

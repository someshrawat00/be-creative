import {gsap} from 'gsap'

export const pageAnimations = (pageRef) =>{
    const tl = gsap.timeline();

    tl.to(pageRef.current, {
        transformOrigin: "top",
        scaleY: 0,
        duration: 2.5,
        ease: "expo.inOut",
    }).from('[data-title-item]',{
        y: 120,
        duration: 2.5,
        stagger:0.05,
        ease: "expo.inOut",
    })

    return tl;
}
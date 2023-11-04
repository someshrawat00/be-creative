import {gsap} from 'gsap'

export const pageAnimations = (pageRef) =>{
    const tl = gsap.timeline();

    tl.to(pageRef.current, {
        transformOrigin: "top",
        scaleY: 0,
        duration: 2.5,
        ease: "expo.inOut",
    }).from('[data-title-item]',{
        y: 150,
        duration: 2,
        stagger:0.02,
        ease: "expo.inOut",
    },"<50%")

    return tl;
}
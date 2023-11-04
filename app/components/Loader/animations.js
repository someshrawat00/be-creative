import {gsap} from 'gsap'

export const progresBaranimation= (progressBarRef,progressNumberRef) =>{
    const tl = gsap.timeline();

    tl.to(progressBarRef.current, {
        scaleX: 1,
        duration: 5,
        ease: "power3.inOut",
    }).to(progressNumberRef.current,{
        textContent: "100",
        duration: 5,
        roundProps: "textContent"
    },"<")

    return tl;
}
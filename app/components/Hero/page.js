"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap'
import styles from './Hero.module.css'
import { pageAnimations } from './animations'

const Hero = () => {

    const pageRef = useRef(null);

    const timeline = useRef(gsap.timeline());

    useEffect(() => {

        const cxt = gsap.context(() => {

            const tl = timeline.current;
            tl.add(pageAnimations(pageRef));

        })

        return () => cxt.revert();

    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.page__overlay} ref={pageRef} ></div>
            <div className={styles.text__overlay}>
                <div className={styles.text}>
                    <span  className={styles.title}>
                        <span data-title-item>B</span>
                        <span data-title-item>E </span>
                        <span data-title-item>C</span>
                        <span data-title-item>R</span>
                        <span data-title-item>E</span>
                        <span data-title-item>A</span>
                        <span data-title-item>T</span>
                        <span data-title-item>I</span>
                        <span data-title-item>V</span>
                        <span data-title-item>E</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Hero;

"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap'
import styles from './Hero.module.css'
import {pageAnimations} from'./animations'

const Hero = () => {

  const pageRef = useRef(null);

  const timeline = useRef(gsap.timeline());

    useEffect(()=>{
     
        const cxt = gsap.context(()=>{
     
            const tl = timeline.current; 
            tl.add(pageAnimations(pageRef));
    
         })
    
         return () => cxt.revert();
    
      },[])

    return (
        <div className={styles.container}>
            <div className={styles.page__overlay} ref={pageRef} ></div>
            <div className={styles.text__overlay}>
                <div className={styles.text}>
                    <span data-title-item className={styles.title}>BE </span>
                    <span data-title-item className={styles.title}> CREATIVE</span>
                </div>
            </div>
        </div>
    )
}

export default Hero;

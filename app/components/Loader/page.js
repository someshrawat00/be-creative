"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap'
import styles from './Loader.module.css'
import {progresBaranimation} from './animations'

const Loader = ({timeline}) => {

    const progressBarRef = useRef(null);
    const progressNumberRef = useRef(null);

    useEffect(()=>{
     
        timeline &&
          timeline
            .add(progresBaranimation(progressBarRef,progressNumberRef))
    
      },[timeline])
  return (
    <div className={styles.container}>
       <div className={styles.progress_bar} ref={progressBarRef}>
             
       </div>
       <span className={styles.progress_number} ref={progressNumberRef}>0</span>
    </div>
  )
}

export default Loader

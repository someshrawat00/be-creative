"use client"
import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import styles from './page.module.css'
import Loader from './components/Loader/page'
import Hero from "./components/Hero/page";

export default function Home() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);
  return (
    <main className={styles.main}>
      {loaderFinished? <Hero/> : <Loader timeline={timeline} />}
    </main>
  )
}

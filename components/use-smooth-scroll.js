//npm i framer-motion @studio-freight/lenis
import { useState, useRef, useEffect, useLayoutEffect } from 'react';

const useSmoothScroll = () => {

  // 初期状態としてnullを使用
  const [lenis, setLenis] = useState(null);
  const reqIdRef = useRef();

  useEffect(() => {
    const animate = (time) => {
      lenis?.raf(time);
      reqIdRef.current = requestAnimationFrame(animate);
    };

    reqIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqIdRef.current);
  }, [lenis]);

  useLayoutEffect(() => {
    // Lenisインスタンスを生成
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    setLenis(lenis);

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

};

export default useSmoothScroll;
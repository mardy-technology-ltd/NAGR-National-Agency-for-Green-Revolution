'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ value, duration = 1800 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');

  // Extract numeric part and suffix (+ or empty)
  const numericString = value.replace(/[^0-9]/g, '');
  const targetNumber = parseInt(numericString, 10) || 0;
  const hasPlus = value.includes('+');

  useEffect(() => {
    if (!isInView || targetNumber === 0) return;

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease out quad formula for smooth decelerating animation
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentVal = Math.floor(easeOutQuad * targetNumber);

      setDisplayValue(currentVal.toLocaleString() + (hasPlus ? '+' : ''));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(targetNumber.toLocaleString() + (hasPlus ? '+' : ''));
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, targetNumber, hasPlus, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

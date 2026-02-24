import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ number, suffix = '' }) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounter();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = () => {
    // Parse the number (e.g., "1M" -> 1000000, "50" -> 50)
    let targetNum = number;
    let multiplier = 1;

    if (typeof number === 'string') {
      const match = number.match(/^([\d.]+)([MK])?/i);
      if (match) {
        targetNum = parseFloat(match[1]);
        if (match[2]) {
          multiplier = match[2].toUpperCase() === 'M' ? 1000000 : 1000;
        }
      }
    }

    const finalValue = targetNum * multiplier;
    const duration = 1800; // milliseconds
    const frameRate = 60;
    const totalFrames = (duration / 1000) * frameRate;
    const increment = finalValue / totalFrames;

    let currentFrame = 0;
    const interval = setInterval(() => {
      currentFrame++;
      const currentValue = Math.min(increment * currentFrame, finalValue);
      setDisplayValue(currentValue);

      if (currentFrame >= totalFrames) {
        setDisplayValue(finalValue);
        clearInterval(interval);
      }
    }, 1000 / frameRate);
  };

  const formatDisplay = () => {
    if (displayValue >= 1000000) {
      return (displayValue / 1000000).toFixed(1) + 'M';
    } else if (displayValue >= 1000) {
      return (displayValue / 1000).toFixed(1) + 'K';
    }
    return Math.round(displayValue);
  };

  return (
    <span ref={elementRef}>
      {formatDisplay()}
      {suffix}
    </span>
  );
}

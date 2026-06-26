'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let cx = 0, cy = 0, rx = 0, ry = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => { cx = e.clientX; cy = e.clientY; };
    document.addEventListener('mousemove', onMove);

    function loop() {
      rx += (cx - rx) * 0.13;
      ry += (cy - ry) * 0.13;
      dot!.style.transform = `translate(${cx}px,${cy}px)`;
      ring!.style.transform = `translate(${rx}px,${ry}px)`;
      animId = requestAnimationFrame(loop);
    }
    animId = requestAnimationFrame(loop);

    const targets = document.querySelectorAll('a,button,.svc-card,.stat-c');
    const onEnter = () => {
      dot.style.width = '3px'; dot.style.height = '3px'; dot.style.margin = '-1.5px 0 0 -1.5px';
      ring.style.width = '54px'; ring.style.height = '54px'; ring.style.margin = '-27px 0 0 -27px';
      ring.style.borderColor = 'rgba(0,255,136,.8)';
    };
    const onLeave = () => {
      dot.style.width = '8px'; dot.style.height = '8px'; dot.style.margin = '-4px 0 0 -4px';
      ring.style.width = '36px'; ring.style.height = '36px'; ring.style.margin = '-18px 0 0 -18px';
      ring.style.borderColor = 'rgba(0,255,136,.45)';
    };

    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('mousemove', onMove);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cdot" ref={dotRef} />
      <div id="cring" ref={ringRef} />
    </>
  );
}

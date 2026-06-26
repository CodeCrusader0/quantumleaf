'use client';

import { useEffect, useRef, useState } from 'react';

const phrases = [
  'whatever you can think of.',
  'your next website.',
  'your digital presence.',
  'a 3D project showcase.',
  'the impossible.',
  'your competitive edge.',
  "something you're proud of.",
];

export default function Hero() {
  const [typed, setTyped] = useState('');
  const hqRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Typewriter
  useEffect(() => {
    let pi = 0, ci = 0, del = false;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const p = phrases[pi];
      if (del) {
        ci--;
        setTyped(p.slice(0, ci));
        if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; timer = setTimeout(tick, 550); return; }
        timer = setTimeout(tick, 48);
      } else {
        ci++;
        setTyped(p.slice(0, ci));
        if (ci === p.length) { del = true; timer = setTimeout(tick, 2300); return; }
        timer = setTimeout(tick, 72);
      }
    }
    timer = setTimeout(tick, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Glitch effect on QUANTUM every ~8.5s
  useEffect(() => {
    const hq = hqRef.current;
    if (!hq) return;
    const clips = ['inset(10% 0 85% 0)', 'inset(45% 0 45% 0)', 'inset(80% 0 10% 0)'];

    function glitch() {
      let i = 0;
      const iv = setInterval(() => {
        hq.style.clipPath = clips[i % clips.length];
        hq.style.transform = `translateX(${(Math.random() - 0.5) * 8}px)`;
        hq.style.color = i % 2 === 0 ? '#00ff88' : '#ffffff';
        i++;
        if (i > 7) {
          clearInterval(iv);
          hq.style.clipPath = ''; hq.style.transform = ''; hq.style.color = '';
        }
      }, 60);
    }

    const id = setInterval(glitch, 8500);
    return () => clearInterval(id);
  }, []);

  // Parallax fade on scroll
  useEffect(() => {
    const hc = contentRef.current;
    if (!hc) return;
    const onScroll = () => {
      const sy = window.scrollY, ih = window.innerHeight;
      if (sy < ih) {
        hc.style.transform = `translateY(${sy * 0.22}px)`;
        hc.style.opacity = String(1 - sy / (ih * 0.75));
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero">
      <div className="fshape" /><div className="fshape" /><div className="fshape" />
      <div className="fshape" /><div className="fshape" />
      <div className="hero-content" ref={contentRef}>
        <div className="hero-badge">
          <span className="bdot" />
          Ann Arbor, Michigan &mdash; Building for builders
        </div>
        <h1 className="hero-heading">
          <span className="hq" ref={hqRef}>QUANTUM</span>
          <span className="hl">LEAF</span>
        </h1>
        <p className="hero-tag">
          You build houses.<br />
          Let us build&nbsp;<span className="typed">{typed}</span><span className="tblink">_</span>
        </p>
        <p className="hero-sub">
          Web development engineered for home builders &amp; 3D concrete construction pioneers.
          From the ground up, or meet us where you are.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn-p">Start Building Together</a>
          <a href="#services" className="btn-s">See What We Do</a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="sline" />
        <span className="stxt">Scroll</span>
      </div>
    </section>
  );
}

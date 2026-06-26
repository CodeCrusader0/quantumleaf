'use client';

import { useEffect, useRef } from 'react';

const stats = [
  { n: 15, suf: '+', lbl: 'Years Experience' },
  { n: 3,  suf: '',  lbl: 'Core Developers' },
  { n: 100,suf: '%', lbl: 'Client Focused' },
  { n: 24, suf: '/7',lbl: 'Availability' },
];

function countUp(el: HTMLElement, tgt: number) {
  const d = 1900, s = performance.now();
  const go = (t: number) => {
    const p = Math.min((t - s) / d, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = String(Math.floor(ease * tgt));
    if (p < 1) requestAnimationFrame(go); else el.textContent = String(tgt);
  };
  requestAnimationFrame(go);
}

function StatCard({ stat, delay }: { stat: typeof stats[0]; delay: number }) {
  const numRef = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !done.current) {
        done.current = true;
        countUp(el, stat.n);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [stat.n]);

  return (
    <div className="stat-c rev sc" style={{ transitionDelay: `${delay}s` }}>
      <div className="snw">
        <span className="snum" ref={numRef}>0</span>
        {stat.suf && <span className="ssuf">{stat.suf}</span>}
      </div>
      <div className="slbl">{stat.lbl}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="ctr">
        <div className="abt-grid">
          <div>
            <span className="sec-eye rev">About</span>
            <h2 className="sec-title rev d1">Three developers.<br />One obsession.</h2>
            <p className="abt-body rev d2">
              QuantumLeaf started because we were tired of watching builders — people who{' '}
              <strong>shape skylines</strong> — get shortchanged by websites that don&apos;t do them justice.
            </p>
            <p className="abt-body rev d3">
              We&apos;re three developers with <strong>15+ combined years</strong> of experience across stacks,
              industries, and time zones. We&apos;re channeling all of it into the construction industry —
              because builders deserve a digital presence as strong as their work.
            </p>
            <blockquote className="abt-quote rev d4">
              &ldquo;Money was never the priority.<br />
              <em>Building something real together</em> — that is.&rdquo;
            </blockquote>
            <div className="avail-tag rev d5">
              <span className="apulse" />
              Available whenever you are &mdash; no off-hours, no surcharges
            </div>
          </div>
          <div>
            <div className="stats-g">
              {stats.map((s, i) => <StatCard key={s.lbl} stat={s} delay={i * 0.1} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

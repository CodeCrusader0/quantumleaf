'use client';

import React from 'react';

interface Svc { icon: string; t: string; d: string; n: string; }

const svcs: Svc[] = [
  { icon: '🏗️', t: 'Fresh Builds', d: "You've got the vision. We've got the blueprint. From concept to deployed website, we architect every pixel with intention.", n: '01' },
  { icon: '🔧', t: 'Project Rescue', d: "Got something that's not quite... working? We step into existing codebases and make them sing — no judgment, just results.", n: '02' },
  { icon: '🧱', t: '3D Construction Showcases', d: 'Your concrete masterpieces deserve a stage worthy of them. Interactive, jaw-dropping project portfolios that convert.', n: '03' },
  { icon: '⚡', t: 'Performance Overdrive', d: "Slow sites lose customers. Yours won't. Speed audits, Core Web Vitals, CDN optimization — we make fast look easy.", n: '04' },
  { icon: '🌙', t: 'Always-On Support', d: "3am bug? Power outage broke something? We've been awake. Flexible scheduling, zero off-hours attitude.", n: '05' },
  { icon: '🎯', t: 'Custom Web Apps', d: 'Beyond brochure. Quote calculators, booking systems, project trackers — whatever your workflow needs, we build it.', n: '06' },
];

function ServiceCard({ svc, delay }: { svc: Svc; delay: number }) {
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const c = e.currentTarget, r = c.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    c.style.transform = `perspective(900px) rotateX(${(y / r.height) * -16}deg) rotateY(${(x / r.width) * 16}deg) translateY(-5px)`;
  }
  function onLeave(e: React.MouseEvent<HTMLDivElement>) {
    e.currentTarget.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
  }

  return (
    <div className="svc-card rev" style={{ transitionDelay: `${delay}s` }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="svc-icon">{svc.icon}</div>
      <h3>{svc.t}</h3>
      <p>{svc.d}</p>
      <span className="svc-n">{svc.n}</span>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services">
      <div className="ctr">
        <div className="svc-hd">
          <span className="sec-eye rev">Services</span>
          <h2 className="sec-title rev d1">Digital foundations<br />that actually hold.</h2>
          <p className="sec-sub rev d2">Whether you&apos;re pouring the first pixel or rescuing a broken project — we&apos;ve built for it.</p>
        </div>
        <div className="svc-grid">
          {svcs.map((s, i) => <ServiceCard key={s.n} svc={s} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  );
}

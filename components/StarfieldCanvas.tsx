'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number; y: number; r: number; op: number; spd: number;
  hue: string; ph: number; pf: number;
}

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0, stars: Star[] = [];
    let mx = 0, my = 0;
    let lastShoot = 0;
    let animId: number;

    function initStars() {
      W = cv!.width = window.innerWidth;
      H = cv!.height = window.innerHeight;
      stars = Array.from({ length: 220 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.3 + 0.2,
        op: Math.random() * 0.6 + 0.08,
        spd: Math.random() * 0.18 + 0.02,
        hue: Math.random() > 0.9 ? '#00ff88' : Math.random() > 0.76 ? '#00d4ff' : '#ffffff',
        ph: Math.random() * Math.PI * 2,
        pf: Math.random() * 0.9 + 0.1,
      }));
    }

    function shoot() {
      const sx = Math.random() * W * 0.7, sy = Math.random() * H * 0.4;
      const len = 90 + Math.random() * 130;
      const a = Math.PI / 5 + (Math.random() - 0.5) * 0.5;
      const ex = sx + Math.cos(a) * len, ey = sy + Math.sin(a) * len;
      const g = ctx!.createLinearGradient(sx, sy, ex, ey);
      g.addColorStop(0, 'rgba(255,255,255,0)');
      g.addColorStop(0.4, 'rgba(255,255,255,.85)');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx!.save();
      ctx!.globalAlpha = 0.75;
      ctx!.strokeStyle = g;
      ctx!.lineWidth = 1.4;
      ctx!.beginPath();
      ctx!.moveTo(sx, sy);
      ctx!.lineTo(ex, ey);
      ctx!.stroke();
      ctx!.restore();
    }

    function draw(ts: number) {
      ctx!.clearRect(0, 0, W, H);
      const ox = (mx / W - 0.5) * 28, oy = (my / H - 0.5) * 28;
      stars.forEach(s => {
        s.ph += 0.007;
        const po = s.op * (0.55 + 0.45 * Math.sin(s.ph));
        ctx!.beginPath();
        ctx!.arc(s.x + ox * s.pf, s.y + oy * s.pf, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = s.hue;
        ctx!.globalAlpha = po;
        ctx!.fill();
        s.x -= s.spd * 0.12;
        if (s.x < -6) s.x = W + 6;
      });
      if (ts - lastShoot > 4200 + Math.random() * 3000) {
        shoot(); lastShoot = ts;
      }
      ctx!.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    }

    const onMouse = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const onResize = () => initStars();

    initStars();
    animId = requestAnimationFrame(draw);
    window.addEventListener('resize', onResize);
    document.addEventListener('mousemove', onMouse);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return <canvas id="bgc" ref={canvasRef} />;
}

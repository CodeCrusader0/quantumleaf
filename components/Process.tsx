const steps = [
  { n: '01', h: 'Discovery Call', p: "No forms. No pitch deck. Just a real conversation whenever you're ready — day or night." },
  { n: '02', h: 'Deep Dive', p: "We learn your world — your clients, your projects, your language — then map a plan." },
  { n: '03', h: 'We Build', p: "You watch it grow. Regular updates, zero jargon, full transparency throughout." },
  { n: '04', h: 'Launch & Beyond', p: "We don't vanish after go-live. Good builds deserve good people sticking around." },
];

export default function Process() {
  return (
    <section id="process">
      <div className="ctr">
        <span className="sec-eye rev">Process</span>
        <h2 className="sec-title rev d1">How we build together.</h2>
        <p className="sec-sub rev d2">No corporate red tape. Just two parties who want to build something great.</p>
        <div className="proc-steps">
          {steps.map((s, i) => (
            <div className={`pstep rev${i > 0 ? ` d${i}` : ''}`} key={s.n}>
              <div className="pdot">{s.n}</div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

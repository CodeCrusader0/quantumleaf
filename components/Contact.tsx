'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get('name') as string;
    const email = fd.get('email') as string;
    const company = (fd.get('company') as string) || '';
    const msg = fd.get('msg') as string;
    const sub = `QuantumLeaf Inquiry${company ? ' — ' + company : ''} from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${msg}`;
    window.location.href = `mailto:quantumleafteam@gmail.com?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => setSubmitted(true), 400);
  }

  return (
    <section id="contact">
      <div className="ctr">
        <div className="cnt-grid">
          <div>
            <span className="sec-eye rev">Contact</span>
            <h2 className="sec-title rev d1">Let&apos;s build<br />something real.</h2>
            <p className="rev d2" style={{ color: 'var(--g2)', fontSize: '.96rem', lineHeight: '1.75', maxWidth: '440px' }}>
              No matter the time, no matter the stage — reach out. We&apos;ll get back to you faster
              than you&apos;d expect, and we&apos;ll listen harder than anyone else you&apos;ve talked to.
            </p>
            <div className="cinfo">
              <div className="cii rev d3">
                <div className="cion">✉</div>
                <div>
                  <div className="cilbl">Email</div>
                  <div className="cival"><a href="mailto:quantumleafteam@gmail.com">quantumleafteam@gmail.com</a></div>
                </div>
              </div>
              <div className="cii rev d4">
                <div className="cion">📍</div>
                <div>
                  <div className="cilbl">Location</div>
                  <div className="cival">Ann Arbor, Michigan</div>
                </div>
              </div>
              <div className="cii rev d5">
                <div className="cion">🕐</div>
                <div>
                  <div className="cilbl">Hours</div>
                  <div className="cival">Whenever you need us. Seriously.</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {!submitted ? (
              <form className="cnt-form rev" onSubmit={handleSubmit}>
                <div className="frow">
                  <div className="fg"><input type="text" name="name" placeholder="Your name" required /></div>
                  <div className="fg"><input type="email" name="email" placeholder="Email address" required /></div>
                </div>
                <div className="fg"><input type="text" name="company" placeholder="Company / Project name" /></div>
                <div className="fg">
                  <textarea
                    name="msg"
                    placeholder="Tell us what you're building — or what needs fixing. No detail too small."
                    required
                  />
                </div>
                <button type="submit" className="btn-sub">Send it over →</button>
              </form>
            ) : (
              <div className="suc show">
                <div className="suc-ico">⚡</div>
                <h3>Message sent!</h3>
                <p>We&apos;ll be in touch faster than you&apos;d expect. Check your inbox.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

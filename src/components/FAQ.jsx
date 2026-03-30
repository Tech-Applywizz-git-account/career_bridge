import { useState } from 'react';
import useReveal from '../hooks/useReveal';

export default function FAQ() {
  const reveal1 = useReveal();
  const reveal2 = useReveal();
  const reveal3 = useReveal();
  const reveal4 = useReveal();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is the career counseling actually free?",
      a: "Yes, completely. No hidden fees, no subscriptions. Your 1:1 session is entirely on us."
    },
    {
      q: "Who will I speak with on the call?",
      a: "An experienced career advisor who has reviewed your resume in advance and specializes in your domain and the international job market."
    },
    {
      q: "How long is the session?",
      a: "30 to 45 minutes, focused enough to be efficient, long enough to give you a real, personalized action plan."
    },
    {
      q: "I have a career gap. Can you still help?",
      a: "Absolutely. Career gaps are one of our specialties. We help you build a narrative that works in your favor with employers abroad."
    },
    {
      q: "I'm on OPT / STEM OPT. Will this be relevant?",
      a: "Yes, OPT and STEM OPT candidates are a core audience. We'll help you find visa-friendly employers and position your profile effectively."
    },
    {
      q: "Is my resume and data safe?",
      a: "Your data is encrypted and never shared. It's used solely to prepare your advisor for your session."
    }
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '44px', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
          <div ref={reveal1} className="section-label reveal">
            <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.72V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.24,139.93,136,143.28Z"/></svg>
            <span>FAQ'S</span>
          </div>
          <h2 ref={reveal2} className="section-title reveal">Got a Quick Question?</h2>
          <p ref={reveal3} className="section-subtitle reveal">We're here to help you make the right decision. Find answers to the most common questions below.</p>
        </div>
        
        <div ref={reveal4} className="faq-wrap reveal">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`faq-item ${openIndex === idx ? 'open' : ''}`}
              onClick={() => handleToggle(idx)}
            >
              <div className="faq-q">
                <p className="faq-q-text">{faq.q}</p>
                <div className="faq-icon"></div>
              </div>
              <div className="faq-a">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

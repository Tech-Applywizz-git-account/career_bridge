import useReveal from '../hooks/useReveal';
import { useRouter } from '../router';

export default function CTA() {
  const { navigate } = useRouter();
  const reveal1 = useReveal();
  const reveal2 = useReveal();
  const reveal3 = useReveal();
  const reveal4 = useReveal();

  return (
    <section id="cta">
      <div className="cta-border-top"></div>
      <div className="cta-border-bottom"></div>
      
      <svg width="150" height="30" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="cta-logo reveal" ref={reveal1}>
        <text x="0" y="22" fontFamily="'Plus Jakarta Sans',sans-serif" fontWeight="700" fontSize="20" fill="#1d1f13">CareerBridge</text>
      </svg>
      
      <h2 ref={reveal2} className="cta-title reveal">Start Your Career Abroad Journey Today.</h2>
      <p ref={reveal3} className="cta-sub reveal">Create your free profile in under 3 minutes, explore real success stories, and book your expert 1:1 call. No cost. No commitment. Just results.</p>
      
      <div ref={reveal4} className="hero-ctas reveal" style={{ flexDirection: 'column' }}>
        <button id="cta-get-started" onClick={() => navigate('/signup')} className="btn-primary" style={{ cursor: 'pointer' }}>
          <svg className="btn-icon" viewBox="0 0 256 256" fill="currentColor"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"/></svg>
          Get Started
        </button>
        <p className="opacity-60 italic text-[14px]">No commitment, book anytime.</p>
      </div>
    </section>
  );
}

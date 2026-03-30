import useReveal from '../hooks/useReveal';

export default function Benefits() {
  const reveal1 = useReveal();
  const reveal2 = useReveal();
  const reveal3 = useReveal();
  const reveal4 = useReveal();
  const reveal5 = useReveal();
  const reveal6 = useReveal();
  const reveal7 = useReveal();
  const reveal8 = useReveal();
  const reveal9 = useReveal();

  return (
    <section id="benefits" className="section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
          <div ref={reveal1} className="section-label reveal">
            <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z"/></svg>
            <span>BENEFITS</span>
          </div>
          <h2 ref={reveal2} className="section-title reveal">Why We Shine?</h2>
          <p ref={reveal3} className="section-subtitle reveal">Every part of CareerBridge is built to remove friction and maximize your chances — from the moment you sign up to the moment you get the offer.</p>
        </div>

        <div className="benefits-grid">
          <div ref={reveal4} className="benefit-card reveal" style={{ transitionDelay: '0s' }}>
            <div className="benefit-icon">
              <svg viewBox="0 0 256 256"><path d="M104,168V112a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm48-56v56a8,8,0,0,0,16,0V112a8,8,0,0,0-16,0ZM240,88V200a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V88A16,16,0,0,1,32,72H224A16,16,0,0,1,240,88Zm-16,0H32V200H224ZM144,40a8,8,0,0,0-8-8H72a8,8,0,0,0,0,16h64A8,8,0,0,0,144,40Z"/></svg>
            </div>
            <h3>Completely Free Session</h3>
            <p>No subscriptions, no hidden fees. Your 1:1 counseling call is 100% free — because your career shouldn't have a paywall.</p>
          </div>
          <div ref={reveal5} className="benefit-card reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="benefit-icon">
              <svg viewBox="0 0 256 256"><path d="M216,64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H152a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,64ZM160,43.31,196.69,80H160ZM200,216V96H152a8,8,0,0,1-8-8V32H56V216H200Z"/></svg>
            </div>
            <h3>Domain-Specific Advisors</h3>
            <p>Tech, finance, healthcare, engineering — we match you with a counselor who has worked in your exact field abroad.</p>
          </div>
          <div ref={reveal6} className="benefit-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="benefit-icon">
              <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104H176V96a40,40,0,0,0-80,0v32H56a8,8,0,0,1,0-16H96a24,24,0,0,1,0-48h16a56,56,0,0,1,104,0v64A8,8,0,0,1,216,128ZM128,216a88,88,0,0,1-82.68-58.26l59-33.7.83-.49a24,24,0,0,1,11.69-3.55h40V144a8,8,0,0,1-16,0,24,24,0,0,0-48,0v8h24a40,40,0,0,1,0,80h-1.89A88.38,88.38,0,0,1,128,216Z"/></svg>
            </div>
            <h3>Resume-Backed Sessions</h3>
            <p>Upload your resume when you create your profile. Your advisor arrives prepared with specific, tailored observations — not generic questions.</p>
          </div>
          
          <div ref={reveal7} className="benefit-card reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="benefit-icon">
              <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"/></svg>
            </div>
            <h3>Real Case Studies to Build Confidence</h3>
            <p>Browse success stories from people in your exact situation before your call. Same background. Same obstacles. Different outcomes.</p>
          </div>
          <div ref={reveal8} className="benefit-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="benefit-icon">
              <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z"/></svg>
            </div>
            <h3>IST-Friendly Availability</h3>
            <p>8 PM to 5 AM IST. No early mornings, no compromises. Book around your life, not around ours.</p>
          </div>
          <div ref={reveal9} className="benefit-card reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="benefit-icon">
              <svg viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"/></svg>
            </div>
            <h3>Zero Long-Term Commitment</h3>
            <p>One call that changes everything. No packages. No pressure. Just one powerful conversation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

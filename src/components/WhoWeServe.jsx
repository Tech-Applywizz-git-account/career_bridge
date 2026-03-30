import useReveal from '../hooks/useReveal';

export default function WhoWeServe() {
  const reveal1 = useReveal();
  const reveal2 = useReveal();
  const reveal3 = useReveal();
  const reveal4 = useReveal();
  const reveal5 = useReveal();
  const reveal6 = useReveal();
  const reveal7 = useReveal();

  return (
    <section id="who-we-serve" className="section" style={{ background: 'var(--off-white)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
          <div ref={reveal1} className="section-label reveal">
            <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z"/></svg>
            <span>WHO WE SERVE</span>
          </div>
          <h2 ref={reveal2} className="section-title reveal">Built for Every Career Journey</h2>
          <p ref={reveal3} className="section-subtitle reveal">Whether you're just starting out, switching paths, or stuck, CareerBridge has the right advisor and the right approach for you.</p>
        </div>

        <div className="benefits-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          <div ref={reveal4} className="benefit-card reveal" style={{ transitionDelay: '0s', minHeight: 'auto', padding: '24px' }}>
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>🎓</div>
            <h3 style={{ fontSize: '18px' }}>Fresh Graduates</h3>
            <p>Looking for entry-level opportunities and building an international network from scratch.</p>
          </div>
          
          <div ref={reveal5} className="benefit-card reveal" style={{ transitionDelay: '0.1s', minHeight: 'auto', padding: '24px' }}>
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>📋</div>
            <h3 style={{ fontSize: '18px' }}>OPT / STEM OPT</h3>
            <p>Navigating visa-friendly companies and optimizing applications for immediate sponsorship.</p>
          </div>
          
          <div ref={reveal6} className="benefit-card reveal" style={{ transitionDelay: '0.2s', minHeight: 'auto', padding: '24px' }}>
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>🔄</div>
            <h3 style={{ fontSize: '18px' }}>Career Switchers</h3>
            <p>Moving to a new field or industry and needing a compelling narrative to bridge the gap.</p>
          </div>
          
          <div ref={reveal7} className="benefit-card reveal" style={{ transitionDelay: '0.3s', minHeight: 'auto', padding: '24px' }}>
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>⏸️</div>
            <h3 style={{ fontSize: '18px' }}>Career Gaps</h3>
            <p>Returning to the workforce and turning a career break into a powerful talking point.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

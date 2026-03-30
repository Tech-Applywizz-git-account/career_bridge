import useReveal from '../hooks/useReveal';

export default function AvailabilityCallout() {
  const reveal1 = useReveal();
  const reveal2 = useReveal();
  const reveal3 = useReveal();

  return (
    <section className="section" style={{ padding: '40px 20px', background: '#f8fbf4' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '24px' }}>
        <h2 ref={reveal1} className="section-title reveal" style={{ fontSize: '36px' }}>Not sure if we're a fit?</h2>
        <p ref={reveal2} className="section-subtitle reveal">Let's set up a free 30-minute call to see exactly how we can help you.</p>
        
        <div ref={reveal3} className="reveal" style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', padding: '24px 32px', borderRadius: '16px', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '18px', fontWeight: '500', color: 'var(--dark)' }}>
            <span style={{ fontSize: '24px' }}>🇮🇳</span> IST, 8:00 PM to 5:00 AM
          </div>
          <div style={{ width: '1px', background: 'var(--border)' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '18px', fontWeight: '500', color: 'var(--dark)' }}>
            <span style={{ fontSize: '24px' }}>🌍</span> ET, 9:30 AM to 6:30 PM
          </div>
        </div>
        
        <a href="#cta" className="btn-primary" style={{ marginTop: '16px' }}>Book a Call</a>
      </div>
    </section>
  );
}

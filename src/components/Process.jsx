import useReveal from '../hooks/useReveal';

export default function Process() {
  const reveal1 = useReveal();
  const reveal2 = useReveal();
  const reveal3 = useReveal();
  const reveal4 = useReveal();
  const reveal5 = useReveal();
  const reveal6 = useReveal();

  return (
    <section id="process" className="section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
          <div ref={reveal1} className="section-label reveal">
            <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z"/></svg>
            <span>PROCESS</span>
          </div>
          <h2 ref={reveal2} className="section-title reveal text-center">Our Approach</h2>
          <p className="section-subtitle reveal text-center" style={{ maxWidth: '640px', margin: '0 auto' }}>A simple, guided journey from inspiration to career breakthrough, clear steps, full transparency at every stage.</p>
        </div>

        <div className="process-grid">
          <div className="process-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            <div ref={reveal3} className="process-card reveal" style={{ transitionDelay: '0s' }}>
              <div className="process-num"><span>01</span></div>
              <h3>Explore Case Studies</h3>
              <ul>
                <li>Browse real success stories filtered by domain and background.</li>
                <li>See the exact strategies that worked for people like you.</li>
                <li>Build confidence and clarity before signing up.</li>
              </ul>
            </div>
            <div ref={reveal4} className="process-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="process-num"><span>02</span></div>
              <h3>Create Your Profile</h3>
              <ul>
                <li>Fill in your name, phone, domain, and experience.</li>
                <li>Upload your resume securely in under 3 minutes.</li>
                <li>No technical knowledge required to get started.</li>
              </ul>
            </div>
            <div ref={reveal5} className="process-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="process-num"><span>03</span></div>
              <h3>Book Your Free Call</h3>
              <ul>
                <li>Pick a time slot that works for your schedule.</li>
                <li>Available 8 PM–5 AM IST (9:30 AM–6:30 PM ET).</li>
                <li>Get a calendar confirmation instantly.</li>
              </ul>
            </div>
            <div ref={reveal6} className="process-card reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="process-num"><span>04</span></div>
              <h3>Land Your Dream Role</h3>
              <ul>
                <li>Apply your personalized action plan.</li>
                <li>Use insider tips from your abroad-based advisor.</li>
                <li>Join 5,000+ professionals who changed their careers.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

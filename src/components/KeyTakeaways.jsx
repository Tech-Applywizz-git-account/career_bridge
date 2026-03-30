import useReveal from '../hooks/useReveal';

export default function KeyTakeaways() {
  const reveal1 = useReveal();
  const reveal2 = useReveal();
  const reveal3 = useReveal();
  const reveal4 = useReveal();

  const CheckIcon = () => (
    <svg className="takeaway-icon" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"/></svg>
  );

  return (
    <section id="key-takeaways" className="section">
      <div className="container takeaways-layout">
        <div className="takeaways-text">
          <div ref={reveal1} className="section-label reveal">
            <svg viewBox="0 0 256 256"><path d="M228,120c0,22.63-6,36.72-17.93,41.87a27.3,27.3,0,0,1-11,2.13,41.75,41.75,0,0,1-8.4-.93,4.05,4.05,0,0,1-2.52-1.64,368.49,368.49,0,0,0-47.75-55.26,8,8,0,0,0-11,11.62c14.84,13.91,64.13,63.49,78.32,120.27a8,8,0,0,1-5.82,9.7A8.13,8.13,0,0,1,200,248a8,8,0,0,1-7.75-6.06c-4.12-16.47-11.65-32.48-20.46-47.09a25.85,25.85,0,0,1-1.9,7.21C164.72,214,150.63,220,128,220s-36.72-6-41.88-17.94c-5.45-12.58-.39-30.82,15-54.21.68-1,1.36-2,2-3l-3,2C82.84,158.27,68.35,164,56.89,164a27.3,27.3,0,0,1-11-2.13C34,156.72,28,142.63,28,120s6-36.72,17.93-41.88c12.59-5.45,30.83-.39,54.22,15l3,2q-1-1.5-2-3c-15.41-23.39-20.47-41.63-15-54.22C91.28,26,105.37,20,128,20s36.72,6,41.88,17.93c5.45,12.59.39,30.83-15,54.22q-1,1.53-2,3l3-2c23.39-15.41,41.63-20.47,54.22-15C222,83.28,228,97.37,228,120Z"/></svg>
            <span>KEY TAKEAWAYS</span>
          </div>
          <h2 ref={reveal2} className="section-title reveal">Everything You Need to Land the Role You Deserve</h2>
          <p ref={reveal3} className="section-subtitle reveal">One free call. A personalized strategy. A clear path forward.</p>
          <a href="#cta" className="btn-primary" style={{ width: 'fit-content', marginTop: '8px' }}>
            <svg fill="currentColor" width="18" height="18" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"/></svg>
            Get Started
          </a>
        </div>
        <div ref={reveal4} className="takeaways-list reveal-left">
          <div className="takeaways-scroll">
            <div className="takeaway-card"><p>Get expert advice tailored to your exact background</p><CheckIcon /></div>
            <div className="takeaway-card"><p>Identify visa-friendly companies hiring in your domain abroad</p><CheckIcon /></div>
            <div className="takeaway-card"><p>Turn your career gap or switch into a compelling story</p><CheckIcon /></div>
            <div className="takeaway-card"><p>Walk away with a concrete 30-day action plan</p><CheckIcon /></div>
            <div className="takeaway-card"><p>Join 5,000+ professionals who moved their careers forward</p><CheckIcon /></div>
            {/* Duplicates for scrolling */}
            <div className="takeaway-card"><p>Get expert advice tailored to your exact background</p><CheckIcon /></div>
            <div className="takeaway-card"><p>Identify visa-friendly companies hiring in your domain abroad</p><CheckIcon /></div>
            <div className="takeaway-card"><p>Turn your career gap or switch into a compelling story</p><CheckIcon /></div>
            <div className="takeaway-card"><p>Walk away with a concrete 30-day action plan</p><CheckIcon /></div>
            <div className="takeaway-card"><p>Join 5,000+ professionals who moved their careers forward</p><CheckIcon /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

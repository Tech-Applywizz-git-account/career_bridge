import useReveal from '../hooks/useReveal';

export default function Comparison() {
  const reveal1 = useReveal();
  const reveal2 = useReveal();
  const reveal3 = useReveal();
  const reveal4 = useReveal();

  const CheckYes = () => (
    <svg className="check-yes" width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const Dash = () => <span className="comp-dash">—</span>;

  // Icons based on the image provided
  const CloverIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px' }}>
      <path d="M12 21V15M12 15C14.5 15 16.5 13 16.5 10.5C16.5 8 14.5 6 12 6M12 15C9.5 15 7.5 13 7.5 10.5C7.5 8 9.5 6 12 6M12 6C12 3.5 10 1.5 7.5 1.5C5 1.5 3 3.5 3 6C3 8.5 5 10.5 7.5 10.5M12 6C12 3.5 14 1.5 16.5 1.5C19 1.5 21 3.5 21 6C21 8.5 19 10.5 16.5 10.5" stroke="#65a30d" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const NectarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px' }}>
      <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="#1d1f13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22V12L20 7M12 12L4 7" stroke="#1d1f13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ProecoIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px' }}>
       <path d="M12 21.5C12 21.5 12 17.5 12 14.5M12 14.5C15 14.5 18 12.5 18 8.5C18 4.5 15 2.5 12 2.5C9 2.5 6 4.5 6 8.5C6 12.5 9 14.5 12 14.5Z" fill="#1d1f13"/>
       <path d="M12 2.5V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const features = [
    "AI-Powered Savings",
    "Real-Time Insights",
    "Customizable Plans",
    "Customer Support",
    "No Hidden Fees",
    "AI Data Enhancement"
  ];

  return (
    <section id="comparison" className="section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
          <div ref={reveal1} className="section-label reveal">
            <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56A8,8,0,0,1,120,136Zm0,40v-8a8,8,0,0,1,16,0v8A8,8,0,0,1,120,176Z"/></svg>
            <span>COMPARISON</span>
          </div>
          <h2 ref={reveal2} className="section-title reveal">Our Value vs. The Alternatives</h2>
          <p ref={reveal3} className="section-subtitle reveal">Compare CareerBridge to paid coaching, job boards, and going it alone — and see why thousands of professionals choose us first.</p>
        </div>

        <div ref={reveal4} className="comp-table-wrap reveal">
          <div className="comp-row comp-header">
            <div className="comp-cell features-header">FEATURES</div>
            <div className="comp-cell highlight">
              <CloverIcon /> CareerBridge
            </div>
            <div className="comp-cell brand-header">
              <NectarIcon /> Paid Coaches
            </div>
            <div className="comp-cell brand-header">
              <ProecoIcon /> Job Boards
            </div>
          </div>
          
          {features.map((feature, idx) => (
            <div key={idx} className="comp-row">
              <div className="comp-cell feature">{feature}</div>
              <div className="comp-cell center highlight"><CheckYes /></div>
              <div className="comp-cell center"><Dash /></div>
              <div className="comp-cell center"><Dash /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

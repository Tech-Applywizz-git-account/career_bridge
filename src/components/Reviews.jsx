import useReveal from '../hooks/useReveal';

export default function Reviews() {
  const reveal1 = useReveal();
  const reveal2 = useReveal();
  const reveal3 = useReveal();
  const revealCol1 = useReveal();
  const revealCol2 = useReveal();
  const revealMarqueeHeader = useReveal();
  const revealMarquee = useReveal();

  const Star = () => (
    <svg viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"/></svg>
  );

  return (
    <section id="reviews">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '44px', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
          <div ref={reveal1} className="section-label reveal">
            <svg viewBox="0 0 256 256" width="24" height="24" fill="#a9ed42"><path d="M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z"/></svg>
            <span>REVIEWS</span>
          </div>
          <h2 ref={reveal2} className="section-title reveal">Our Valued Clients</h2>
          <p ref={reveal3} className="section-subtitle reveal">We're here to help you make the right decision. Explore what our clients say about their experience.</p>
        </div>
        
        <div className="reviews-grid">
          <div ref={revealCol1} className="review-col reveal" style={{ transitionDelay: '0s' }}>
            
            <div className="review-card">
              <div className="stars"><Star /><Star /><Star /><Star /><Star /></div>
              <p className="review-quote">"A fantastic tool! It saved us time and money beyond expectations."</p>
              <div className="reviewer">
                <div className="reviewer-pic" style={{ background: 'linear-gradient(135deg, #c0dd97, #a9ed42)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '16px', color: '#1d1f13' }}>B</div>
                <div className="reviewer-info"><div className="name">Brendan</div><div className="role">owner of Goog</div></div>
              </div>
            </div>
            
            <div className="review-card">
              <div className="stars"><Star /><Star /><Star /><Star /><Star /></div>
              <p className="review-quote">"An absolute must-have! The intuitive features, real-time insights, and seamless performance have greatly improved our operations."</p>
              <div className="reviewer">
                <div className="reviewer-pic" style={{ background: 'linear-gradient(135deg, #eaf0dd, #c0dd97)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '16px', color: '#1d1f13' }}>W</div>
                <div className="reviewer-info"><div className="name">Wilson</div><div className="role">owner of Talik</div></div>
              </div>
            </div>
            
            <div className="review-card">
              <div className="stars"><Star /><Star /><Star /><Star /><Star /></div>
              <p className="review-quote">"Incredible tool! It helped us save time and resources while improving efficiency."</p>
              <div className="reviewer">
                <div className="reviewer-pic" style={{ background: 'linear-gradient(135deg, #eaf3de, #a9ed42)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '16px', color: '#1d1f13' }}>M</div>
                <div className="reviewer-info"><div className="name">Maya</div><div className="role">owner of Janlo</div></div>
              </div>
            </div>
            
          </div>
          
          <div ref={revealCol2} className="review-col reveal" style={{ transitionDelay: '0.15s' }}>
            
            <div className="review-card">
              <div className="stars"><Star /><Star /><Star /><Star /><Star /></div>
              <p className="review-quote">"Simply exceptional! The platform is fast, efficient, and offers all the essential tools we need."</p>
              <div className="reviewer">
                <div className="reviewer-pic" style={{ background: 'linear-gradient(135deg, #f0ffd1, #c0dd97)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '16px', color: '#1d1f13' }}>J</div>
                <div className="reviewer-info"><div className="name">Jacychan</div><div className="role">owner of Breit</div></div>
              </div>
            </div>
            
            <div className="review-card">
              <div className="stars"><Star /><Star /><Star /><Star /><Star /></div>
              <p className="review-quote">"An amazing platform! It streamlined our workflow and boosted productivity effortlessly."</p>
              <div className="reviewer">
                <div className="reviewer-pic" style={{ background: 'linear-gradient(135deg, #eaf0dd, #a9ed42)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '16px', color: '#1d1f13' }}>J</div>
                <div className="reviewer-info"><div className="name">Jamesli</div><div className="role">owner of Candto</div></div>
              </div>
            </div>
            
            <div className="review-card">
              <div className="stars"><Star /><Star /><Star /><Star /><Star /></div>
              <p className="review-quote">"A true game-changer! This platform offers powerful features, seamless integration, and user-friendly design."</p>
              <div className="reviewer">
                <div className="reviewer-pic" style={{ background: 'linear-gradient(135deg, #f0ffd1, #eaf0dd)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '16px', color: '#1d1f13' }}>A</div>
                <div className="reviewer-info"><div className="name">Anna</div><div className="role">owner of Hanko</div></div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Client logos marquee */}
        <div style={{ width: '100%' }}>
          <p ref={revealMarqueeHeader} className="clients-label reveal">CLIENTS USING GREENCLOVER</p>
          <div ref={revealMarquee} className="clients-marquee reveal">
            <div className="clients-inner">
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-muted)', opacity: 0.6, whiteSpace: 'nowrap' }}>Acme Corp</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-muted)', opacity: 0.6, whiteSpace: 'nowrap' }}>TechFlow</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-muted)', opacity: 0.6, whiteSpace: 'nowrap' }}>Nexus Ltd</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-muted)', opacity: 0.6, whiteSpace: 'nowrap' }}>BrightPath</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-muted)', opacity: 0.6, whiteSpace: 'nowrap' }}>Vertiq</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-muted)', opacity: 0.6, whiteSpace: 'nowrap' }}>CloudBase</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-muted)', opacity: 0.6, whiteSpace: 'nowrap' }}>Synapse</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-muted)', opacity: 0.6, whiteSpace: 'nowrap' }}>Orbit Inc</span>
              {/* Duplicate for scrolling */}
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-muted)', opacity: 0.6, whiteSpace: 'nowrap' }}>Acme Corp</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-muted)', opacity: 0.6, whiteSpace: 'nowrap' }}>TechFlow</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-muted)', opacity: 0.6, whiteSpace: 'nowrap' }}>Nexus Ltd</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-muted)', opacity: 0.6, whiteSpace: 'nowrap' }}>BrightPath</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-muted)', opacity: 0.6, whiteSpace: 'nowrap' }}>Vertiq</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-muted)', opacity: 0.6, whiteSpace: 'nowrap' }}>CloudBase</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-muted)', opacity: 0.6, whiteSpace: 'nowrap' }}>Synapse</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-muted)', opacity: 0.6, whiteSpace: 'nowrap' }}>Orbit Inc</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

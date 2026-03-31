// import useReveal from '../hooks/useReveal';

// export default function Product() {
//   const reveal1 = useReveal();
//   const reveal2 = useReveal();
//   const reveal3 = useReveal();
//   const reveal4 = useReveal();
//   const reveal5 = useReveal();
//   const reveal6 = useReveal();
//   const reveal7 = useReveal();
//   const reveal8 = useReveal();
//   const reveal9 = useReveal();

//   return (
//     <section id="product" className="section">
//       <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>

//         {/* Section A */}
//         <div className="product-section">
//           <div ref={reveal1} className="product-text reveal-left">
//             <div className="section-label">
//               <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z"/></svg>
//               <span>PRODUCT</span>
//             </div>
//             <h3 className="section-title" style={{ fontSize: '32px' }}>Real Stories. Real Results.</h3>
//             <p className="section-subtitle">Browse case studies from professionals in your exact situation. OPT candidates who landed at top global firms. Career switchers who moved industries at 35. Gap-year professionals who got 3 offers in 45 days. Your proof is already here.</p>
//             <a href="#product" className="btn-outline" style={{ width: 'fit-content', marginTop: '16px' }}>View Case Studies</a>
//           </div>
//           <div ref={reveal2} className="product-img reveal-right">
//             <div className="product-img-placeholder"></div>
//           </div>
//         </div>

//         {/* Section B */}
//         <div className="product-section reverse">
//           <div ref={reveal3} className="product-text reveal-right">
//             <div className="section-label">
//               <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z"/></svg>
//               <span>PRODUCT</span>
//             </div>
//             <h3 className="section-title" style={{ fontSize: '32px' }}>Build Your Profile in Minutes</h3>
//             <p className="section-subtitle">Tell us who you are — your field, your experience, and where you want to go. We use your profile to match you with the right advisor and prepare them before your session begins.</p>
//             <a href="#product" className="btn-outline" style={{ width: 'fit-content', marginTop: '16px' }}>Create My Profile</a>
//           </div>
//           <div ref={reveal4} className="product-img reveal-left">
//             <div className="product-img-placeholder"></div>
//           </div>
//         </div>

//         {/* Section C */}
//         <div className="product-section">
//           <div ref={reveal5} className="product-text reveal-left">
//             <div className="section-label">
//               <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z"/></svg>
//               <span>PRODUCT</span>
//             </div>
//             <h3 className="section-title" style={{ fontSize: '32px' }}>Book a Slot. Get a Plan.</h3>
//             <p className="section-subtitle">Pick any available 1:1 slot with a career advisor working live in the international job market. Walk away with a concrete, 30-day action plan , specific to your resume, your domain, and your goals.</p>
//             <a href="#cta" className="btn-primary" style={{ width: 'fit-content', marginTop: '16px' }}>Book My Free Call</a>
//           </div>
//           <div ref={reveal6} className="product-img reveal-right">
//             <div className="product-img-placeholder"></div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }





































import { useState } from 'react';
import useReveal from '../hooks/useReveal';

export default function Product() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <section id="product" className="section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>

        {/* Section A */}
        <div className="product-section">
          <div ref={reveal1} className="product-text reveal-left">
            <div className="section-label">
              <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z" /></svg>
              <span>PRODUCT</span>
            </div>
            <h3 className="section-title" style={{ fontSize: '32px' }}>Real Stories. Real Results.</h3>
            <p className="section-subtitle">Browse case studies from professionals in your exact situation. OPT candidates who landed at top global firms. Career switchers who moved industries at 35. Gap-year professionals who got 3 offers in 45 days. Your proof is already here.</p>
            <button onClick={() => setIsModalOpen(true)} className="btn-outline blinking-btn" style={{ width: 'fit-content', marginTop: '16px' }}>View Case Studies</button>
          </div>
          <div ref={reveal2} className="product-img reveal-right">
            <img
              src="/businessman-silhouette-climbing-stairs-success.jpg"
              alt="Case studies showcase"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Section B */}
        <div className="product-section reverse">
          <div ref={reveal3} className="product-text reveal-right">
            <div className="section-label">
              <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z" /></svg>
              <span>PRODUCT</span>
            </div>
            <h3 className="section-title" style={{ fontSize: '32px' }}>Build Your Profile in Minutes</h3>
            <p className="section-subtitle">Tell us who you are — your field, your experience, and where you want to go. We use your profile to match you with the right advisor and prepare them before your session begins.</p>
            <a href="#product" className="btn-outline" style={{ width: 'fit-content', marginTop: '16px' }}>Create My Profile</a>
          </div>
          <div ref={reveal4} className="product-img reveal-left">
            <img
              src="/hr-human-resources-recruitment-team.jpg"
              alt="Profile builder interface"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Section C */}
        <div className="product-section">
          <div ref={reveal5} className="product-text reveal-left">
            <div className="section-label">
              <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z" /></svg>
              <span>PRODUCT</span>
            </div>
            <h3 className="section-title" style={{ fontSize: '32px' }}>Book a Slot. Get a Plan.</h3>
            <p className="section-subtitle">Pick any available 1:1 slot with a career advisor working live in the international job market. Walk away with a concrete, 30-day action plan , specific to your resume, your domain, and your goals.</p>
            <a href="#cta" className="btn-primary" style={{ width: 'fit-content', marginTop: '16px' }}>Book My Free Call</a>
          </div>
          <div ref={reveal6} className="product-img reveal-right">
            <img
              src="/calendar-agenda-event-meeting.jpg"
              alt="Booking calendar interface"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
            <h3 className="modal-title">Case Studies</h3>
            <div className="modal-links">
              <a href="https://casestudy-rakesh-8r1ingy.gamma.site/" className="modal-link" target="_blank" rel="noopener noreferrer">Case Study: Rakesh's Journey</a>
              <a href="https://casestudyofdeepthi-1l4ogi9.gamma.site/" className="modal-link" target="_blank" rel="noopener noreferrer">Case Study: Deepthi's Transition</a>
              <a href="https://casestudyofakhila-lk6ehkm.gamma.site/" className="modal-link" target="_blank" rel="noopener noreferrer">Case Study: Akhila's Experience</a>
              <a href="https://casestudyofvamshi-8toksnz.gamma.site/" className="modal-link" target="_blank" rel="noopener noreferrer">Case Study: Vamshi's Placement</a>
              <a href="https://casestudyofsandeep-zzlnrt1.gamma.site/" className="modal-link" target="_blank" rel="noopener noreferrer">Case Study: Sandeep's Career Switch</a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
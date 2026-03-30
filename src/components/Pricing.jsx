import useReveal from '../hooks/useReveal';

export default function Pricing() {
  const reveal1 = useReveal();
  const reveal2 = useReveal();
  const reveal3 = useReveal();
  const reveal4 = useReveal();
  const reveal5 = useReveal();

  return (
    <section id="pricing" className="section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
          <div ref={reveal1} className="section-label reveal">
            <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z"/></svg>
            <span>PLANS</span>
          </div>
          <h2 ref={reveal2} className="section-title reveal">Pricing Based on Your Needs</h2>
        </div>

        <div className="pricing-grid">
          <div ref={reveal3} className="price-card reveal" style={{ transitionDelay: '0s' }}>
            <div className="price-plan">Starter</div>
            <div className="price-amount">$0<span>/mo</span></div>
            <p className="price-desc">Perfect for small teams and startups testing the platform features.</p>
            <div className="price-features">
              <div className="price-feat"><svg viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/></svg><span>Up to 5 team members</span></div>
              <div className="price-feat"><svg viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/></svg><span>Standard Cash Back</span></div>
              <div className="price-feat"><svg viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/></svg><span>Basic Reporting</span></div>
            </div>
            <div className="price-cta" style={{ marginTop: 'auto' }}>
              <a href="#" className="btn-outline justify-center">Get Started Free</a>
            </div>
          </div>
          
          <div ref={reveal4} className="price-card featured reveal" style={{ transitionDelay: '0.1s', borderColor: 'var(--green-accent)' }}>
            <div className="price-badge">Most Popular</div>
            <div className="price-plan" style={{ color: 'var(--green-accent)' }}>Pro</div>
            <div className="price-amount">$49<span>/mo</span></div>
            <p className="price-desc">The ideal solution for growing businesses looking to maximize total savings.</p>
            <div className="price-features">
              <div className="price-feat"><svg viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/></svg><span>Unlimited team members</span></div>
              <div className="price-feat"><svg viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/></svg><span>AI Optimized Cash Back</span></div>
              <div className="price-feat"><svg viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/></svg><span>Advanced Integrations</span></div>
              <div className="price-feat"><svg viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/></svg><span>Priority Support</span></div>
            </div>
            <div className="price-cta" style={{ marginTop: 'auto' }}>
              <a href="#" className="btn-primary justify-center">Start Free Trial</a>
              <p className="price-note">14-day free trial. Cancel anytime.</p>
            </div>
          </div>
          
          <div ref={reveal5} className="price-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="price-plan">Enterprise</div>
            <div className="price-amount">Custom</div>
            <p className="price-desc">Tailored limits, dedicated support, and specialized financial modules.</p>
            <div className="price-features">
              <div className="price-feat"><svg viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/></svg><span>Custom Issuance Limits</span></div>
              <div className="price-feat"><svg viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/></svg><span>Dedicated Account Manager</span></div>
              <div className="price-feat"><svg viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/></svg><span>Custom API Connections</span></div>
            </div>
            <div className="price-cta" style={{ marginTop: 'auto' }}>
              <a href="#" className="btn-outline justify-center">Contact Sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

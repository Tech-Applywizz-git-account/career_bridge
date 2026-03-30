import useReveal from '../hooks/useReveal';

export default function WhyUs() {
  const reveal1 = useReveal();
  const reveal2 = useReveal();
  const reveal3 = useReveal();
  const reveal4 = useReveal();

  return (
    <section id="why-us" className="section">
      <div className="container why-us-inner">
        <div className="why-us-heading">
          <div ref={reveal1} className="section-label reveal">
            <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"/></svg>
            <span>THE CAREERBRIDGE ADVANTAGES</span>
          </div>
          <h2 ref={reveal2} className="section-title reveal">Why Choose Us?</h2>
          <p ref={reveal3} className="section-subtitle reveal">We combine real international market expertise with a genuinely personalized approach, so every session drives results, not just advice.</p>
        </div>

        <div ref={reveal4} className="why-card reveal">
          <div className="why-card-row">
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H216ZM216,200H40V80H216Z"/></svg>
              </div>
              <h3>Personalized Guidance, Not Generic Scripts</h3>
              <p>Unlike job boards or paid coaches, our advisors review your actual resume before the call and build a strategy around your specific situation.</p>
            </div>
            <div className="why-divider"></div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z"/></svg>
              </div>
              <h3>Real-Time International Market Intelligence</h3>
              <p>Stay ahead with current insights on which companies are actively sponsoring visas, hiring international candidates, and recruiting in your domain — right now.</p>
            </div>
            <div className="why-divider"></div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"/></svg>
              </div>
              <h3>Flexible, IST-Friendly Slots</h3>
              <p>All calls run 8 PM–5 AM IST (9:30 AM–6:30 PM ET) — so you get expert career advice without sacrificing a single work hour.</p>
            </div>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="marquee-section">
          <div className="marquee-wrap">
            <div className="marquee-row">
              <div className="marquee-inner">
                <div className="tag-pill">No Hidden Fees</div>
                <div className="tag-pill">24/7 Premium Support</div>
                <div className="tag-pill">Universal Acceptance</div>
                <div className="tag-pill">Smart Spend Analytics</div>
                <div className="tag-pill">Virtual & Physical Cards</div>
                <div className="tag-pill">Seamless Integrations</div>
                {/* Duplicates for scrolling */}
                <div className="tag-pill">No Hidden Fees</div>
                <div className="tag-pill">24/7 Premium Support</div>
                <div className="tag-pill">Universal Acceptance</div>
                <div className="tag-pill">Smart Spend Analytics</div>
                <div className="tag-pill">Virtual & Physical Cards</div>
                <div className="tag-pill">Seamless Integrations</div>
              </div>
            </div>
            <div className="marquee-row" style={{ marginTop: '16px' }}>
              <div className="marquee-inner-r">
                <div className="tag-pill">Export Friendly</div>
                <div className="tag-pill">Limit Customization</div>
                <div className="tag-pill">Role-Based Access</div>
                <div className="tag-pill">Automated Receipt Matching</div>
                <div className="tag-pill">Real-Time Alerts</div>
                <div className="tag-pill">Multi-Currency Support</div>
                {/* Duplicates for scrolling */}
                <div className="tag-pill">Export Friendly</div>
                <div className="tag-pill">Limit Customization</div>
                <div className="tag-pill">Role-Based Access</div>
                <div className="tag-pill">Automated Receipt Matching</div>
                <div className="tag-pill">Real-Time Alerts</div>
                <div className="tag-pill">Multi-Currency Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

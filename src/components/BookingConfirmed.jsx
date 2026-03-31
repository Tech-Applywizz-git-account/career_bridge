import { useRouter } from '../router';

export default function BookingConfirmed() {
  const { navigate } = useRouter();

  const phone = sessionStorage.getItem('cb_phone') || 'your number';
  const slot = sessionStorage.getItem('cb_slot') || 'Selected time';

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="auth-page">
      <div className="auth-card confirmed-card">

        <div className="confirmed-check">
          <svg viewBox="0 0 256 256" width="32" height="32" fill="currentColor">
            <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
          </svg>
        </div>

        <div className="section-label" style={{ justifyContent: 'center' }}>
          <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z" /></svg>
          <span>YOU'RE ALL SET</span>
        </div>

        <h1 className="auth-heading">Your Call is Confirmed! 🎉</h1>
        <p className="auth-sub">
          Your advisor will review your resume before the session. Show up ready to talk about your goals — and expect to leave with a clear, personalized action plan.
        </p>

        <div className="confirmed-details">
          <div className="confirmed-row">
            <span className="confirmed-icon">📅</span>
            <div>
              <div className="confirmed-label">Date &amp; Time</div>
              <div className="confirmed-value">{today} · {slot}</div>
            </div>
          </div>
          <div className="confirmed-row">
            <span className="confirmed-icon">⏱</span>
            <div>
              <div className="confirmed-label">Duration</div>
              <div className="confirmed-value">30–45 minutes</div>
            </div>
          </div>
          <div className="confirmed-row">
            <span className="confirmed-icon">📞</span>
            <div>
              <div className="confirmed-label">Format</div>
              <div className="confirmed-value">1:1 Video / Phone Call</div>
            </div>
          </div>
          <div className="confirmed-row">
            <span className="confirmed-icon">📩</span>
            <div>
              <div className="confirmed-label">Confirmation sent to</div>
              <div className="confirmed-value">{phone}</div>
            </div>
          </div>
        </div>

        <div className="expect-box">
          <p className="expect-title">What to expect on your call</p>
          <ul className="expect-list">
            <li>Your advisor will already know your background</li>
            <li>Be ready to share your top career goal</li>
            <li>You'll leave with a concrete next-steps plan</li>
          </ul>
        </div>

        <button id="back-to-home-btn" className="btn-outline auth-submit-btn" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

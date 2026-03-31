import { useState } from 'react';
import { useRouter } from '../router';
import { supabase } from '../lib/supabase';

const SLOTS = [
  { ist: '8:00 PM IST', et: '9:30 AM ET' },
  { ist: '8:30 PM IST', et: '10:00 AM ET' },
  { ist: '9:00 PM IST', et: '10:30 AM ET' },
  { ist: '9:30 PM IST', et: '11:00 AM ET' },
  { ist: '10:00 PM IST', et: '11:30 AM ET' },
  { ist: '10:30 PM IST', et: '12:00 PM ET' },
  { ist: '11:00 PM IST', et: '12:30 PM ET' },
  { ist: '11:30 PM IST', et: '1:00 PM ET' },
  { ist: '12:00 AM IST', et: '1:30 PM ET' },
  { ist: '12:30 AM IST', et: '2:00 PM ET' },
  { ist: '1:00 AM IST', et: '2:30 PM ET' },
  { ist: '1:30 AM IST', et: '3:00 PM ET' },
  { ist: '2:00 AM IST', et: '3:30 PM ET' },
  { ist: '2:30 AM IST', et: '4:00 PM ET' },
  { ist: '3:00 AM IST', et: '4:30 PM ET' },
  { ist: '3:30 AM IST', et: '5:00 PM ET' },
  { ist: '4:00 AM IST', et: '5:30 PM ET' },
  { ist: '4:30 AM IST', et: '6:00 PM ET' },
  { ist: '5:00 AM IST', et: '6:30 PM ET' },
];

function getTodayLabel() {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
}

export default function BookCall() {
  const { navigate } = useRouter();
  const [timezone, setTimezone] = useState('IST');
  const [selected, setSelected] = useState(null);
  const [confirming, setConfirming] = useState(false);
  const [error, setError] = useState('');

  const userId = sessionStorage.getItem('cb_user_id');

  const handleConfirm = async () => {
    if (!selected || confirming) return;
    
    if (!userId) {
      setError('Session expired. Please sign in again.');
      return;
    }
    
    setConfirming(true);
    setError('');
    
    try {
      const slotTime = timezone === 'IST' ? selected.ist : selected.et;
      
      const { error: bookingError } = await supabase
        .from('bookings')
        .upsert([
          {
            user_id: userId,
            slot_time: slotTime,
            timezone: timezone,
          }
        ], { onConflict: 'user_id' });

      if (bookingError) throw bookingError;

      sessionStorage.setItem('cb_slot', slotTime);
      sessionStorage.setItem('cb_timezone', timezone);
      navigate('/booking-confirmed');
    } catch (err) {
      console.error('Error during booking:', err);
      setError(err.message || 'An error occurred during booking. Please try again.');
    } finally {
      setConfirming(false);
    }
  };

  return (
    <div className="auth-page book-page">
      <div className="auth-card book-card">
        <button className="auth-back-btn" onClick={() => navigate('/signup')}>
          <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" /></svg>
          Back
        </button>

        <div className="step-track">
          <div className="step-dot done" />
          <div className="step-connector active" />
          <div className="step-dot active" />
        </div>

        <div className="section-label">
          <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z" /></svg>
          <span>STEP 2 OF 2</span>
        </div>

        <h1 className="auth-heading">Pick a Time That Works for You</h1>
        <p className="auth-sub">All sessions are free, 1:1, and 30–45 minutes long. Choose any available slot below and get an instant calendar confirmation.</p>

        {error && <div className="field-error" style={{ fontSize: '14px', textAlign: 'center', margin: '16px 0' }}>{error} {error.includes('expire') && <span onClick={() => navigate('/signin')} style={{ color: 'var(--green-accent)', cursor: 'pointer', fontWeight: '600', textDecoration: 'underline' }}>Sign In</span>}</div>}

        <div className="tz-toggle">
          <button id="tz-ist" className={`tz-btn ${timezone === 'IST' ? 'active' : ''}`} onClick={() => setTimezone('IST')}>🇮🇳 IST</button>
          <button id="tz-et" className={`tz-btn ${timezone === 'ET' ? 'active' : ''}`} onClick={() => setTimezone('ET')}>🌍 ET</button>
        </div>

        <p className="slots-date">📅 {getTodayLabel()} — All slots available</p>

        <div className="slots-grid">
          {SLOTS.map((slot, i) => (
            <button
              key={i}
              id={`slot-${i}`}
              className={`slot-btn ${selected === slot ? 'selected' : ''}`}
              onClick={() => setSelected(slot)}
            >
              <span className="slot-main">{timezone === 'IST' ? slot.ist : slot.et}</span>
              <span className="slot-alt">{timezone === 'IST' ? slot.et : slot.ist}</span>
            </button>
          ))}
        </div>

        <button
          id="confirm-booking-btn"
          className={`btn-primary auth-submit-btn ${!selected ? 'btn-disabled' : ''}`}
          onClick={handleConfirm}
          disabled={!selected || confirming}
        >
          {confirming
            ? <span className="auth-loading"><span className="auth-spinner" />Confirming…</span>
            : 'Confirm My Booking →'}
        </button>

        {!selected && <p className="slots-hint">↑ Please select a time slot to continue</p>}

        <p className="auth-fine">📩 You'll receive a calendar invite and confirmation on your phone number instantly.</p>
      </div>
    </div>
  );
}

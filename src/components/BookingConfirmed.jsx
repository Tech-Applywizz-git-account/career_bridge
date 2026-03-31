import { useRouter } from '../router';
import { supabase } from '../lib/supabase';
import { useState, useEffect } from 'react';

/**
 * Returns true if the booked slot time has already passed.
 * Handles slot formats like "8:00 PM IST".
 */
function isSlotExpired(slotTime, createdAt) {
  if (!slotTime) return false;
  const now = new Date();
  
  // Parse slotTime (e.g. "8:00 PM IST")
  const timeMatch = slotTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!timeMatch) return false;

  let hours = parseInt(timeMatch[1], 10);
  const minutes = parseInt(timeMatch[2], 10);
  const ampm = timeMatch[3].toUpperCase();
  
  if (ampm === 'PM' && hours !== 12) hours += 12;
  if (ampm === 'AM' && hours === 12) hours = 0;

  // If booking was created on a previous day, it's definitely expired
  if (createdAt) {
    const bookingDay = new Date(createdAt).toDateString();
    if (bookingDay !== now.toDateString()) return true;
  }

  // If created today, create a Date object for the slot time today
  const slotDate = new Date();
  slotDate.setHours(hours, minutes, 0, 0);
  
  return now > slotDate;
}

export default function BookingConfirmed() {
  const { navigate } = useRouter();

  const phone = sessionStorage.getItem('cb_phone') || 'your number';
  const slot = sessionStorage.getItem('cb_slot') || 'Selected time';

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  const [createdAt, setCreatedAt] = useState(null);
  const userId = sessionStorage.getItem('cb_user_id');

  useEffect(() => {
    async function fetchBookingDate() {
      if (!userId) return;
      const { data } = await supabase
        .from('bookings')
        .select('booked_at')
        .eq('user_id', userId)
        .maybeSingle();
      if (data) setCreatedAt(data.booked_at);
    }
    fetchBookingDate();
  }, [userId]);

  const hasExpired = isSlotExpired(slot, createdAt);

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

        <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
          <button id="back-to-home-btn" className="btn-outline" onClick={() => navigate('/')} style={{ flex: 1, padding: '12px 20px' }}>
            Back to Home
          </button>
          <button
            className="btn-primary"
            onClick={hasExpired ? () => navigate('/book') : undefined}
            disabled={!hasExpired}
            title={hasExpired ? "Book another session" : "You can book another slot once your current one has passed"}
            style={{
              flex: 1,
              padding: '12px 20px',
              border: `1px solid ${hasExpired ? 'var(--green-accent)' : '#ccc'}`,
              color: '#fff',
              background: hasExpired ? 'var(--green-accent)' : '#aaa',
              opacity: hasExpired ? 1 : 0.7,
              cursor: hasExpired ? 'pointer' : 'not-allowed',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '15px'
            }}
          >
            {!hasExpired && (
              <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor">
                <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H80v24a8,8,0,0,0,16,0V96h64v24a8,8,0,0,0,16,0V96h32V208Z" />
              </svg>
            )}
            {hasExpired ? 'Book Another Slot →' : 'Book Another Slot (Upcoming)'}
          </button>
        </div>
      </div>
    </div>
  );
}

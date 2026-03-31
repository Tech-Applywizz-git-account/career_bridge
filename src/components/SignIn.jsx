import { useState } from 'react';
import { useRouter } from '../router';
import { supabase } from '../lib/supabase';

/**
 * Returns true if the booked slot time has already passed.
 * Handles slot formats like "8:00 PM IST".
 */
function isSlotExpired(slotTime, bookedAt) {
  if (!slotTime) return false;
  const now = new Date();

  const timeMatch = slotTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!timeMatch) return false;

  let hours = parseInt(timeMatch[1], 10);
  const minutes = parseInt(timeMatch[2], 10);
  const ampm = timeMatch[3].toUpperCase();

  if (ampm === 'PM' && hours !== 12) hours += 12;
  if (ampm === 'AM' && hours === 12) hours = 0;

  // If booking was made on a previous day, slot is definitely expired
  if (bookedAt) {
    const bookingDay = new Date(bookedAt).toDateString();
    if (bookingDay !== now.toDateString()) return true;
  }

  // Booking made today — compare slot time to current time
  const slotDate = new Date();
  slotDate.setHours(hours, minutes, 0, 0);
  return now > slotDate;
}

export default function SignIn() {
  const { navigate } = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [existingBooking, setExistingBooking] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Admin override
    if (email === 'created@applywizz.com' && password === 'Applywizz@2026') {
      sessionStorage.setItem('cb_admin_auth', 'true');
      navigate('/admin');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;

      if (data.user) {
        // Fetch profile to get name/phone for local state
        const { data: profile } = await supabase
          .from('user_profiles')
          .select('full_name, phone')
          .eq('id', data.user.id)
          .single();

        if (profile) {
          sessionStorage.setItem('cb_name', profile.full_name);
          sessionStorage.setItem('cb_phone', profile.phone);
        }

        sessionStorage.setItem('cb_user_id', data.user.id);

        // Check if user has already booked a slot
        const { data: booking } = await supabase
          .from('bookings')
          .select('slot_time, timezone, booked_at')
          .eq('user_id', data.user.id)
          .maybeSingle();

        if (booking) {
          sessionStorage.setItem('cb_slot', booking.slot_time);
          if (booking.timezone) sessionStorage.setItem('cb_timezone', booking.timezone);
          setExistingBooking(booking);
        } else {
          navigate('/booking-confirmed');
        }
      }
    } catch (err) {
      console.error('Error during sign in:', err);
      setError(err.message || 'Invalid email or password');
    } finally {
      setSubmitting(false);
    }
  };

  if (existingBooking) {
    const phone = sessionStorage.getItem('cb_phone') || 'your number';
    const slot = existingBooking.slot_time;
    const today = new Date().toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    });

    return (
      <div className="auth-page" style={{ alignItems: 'flex-start', overflowY: 'auto', padding: '60px 20px' }}>
        <div style={{ maxWidth: '640px', width: '100%', margin: '0 auto', textAlign: 'center' }}>

          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '16px' }}>
            <svg viewBox="0 0 256 256" width="24" height="24"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z" /></svg>
            <span>Welcome Back</span>
          </div>

          <h1 className="auth-heading" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Your Session is Booked 🎉</h1>
          <p className="auth-sub" style={{ fontSize: '1.1rem', marginBottom: '40px' }}>
            Your advisor is preparing for your call. You will receive a reminder email prior to your scheduled time.
          </p>

          <div style={{ background: '#f9fdf8', borderRadius: '16px', padding: '32px', textAlign: 'left', marginBottom: '32px', border: '1px solid #e2f0d9', display: 'flex', flexDirection: 'column', gap: '24px' }}>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <span style={{ fontSize: '24px' }}>📅</span>
              <div>
                <div style={{ fontSize: '13px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Date &amp; Time</div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#111', marginTop: '4px' }}>{today} · {slot}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <span style={{ fontSize: '24px' }}>⏱</span>
              <div>
                <div style={{ fontSize: '13px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Duration</div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#111', marginTop: '4px' }}>30–45 minutes</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <span style={{ fontSize: '24px' }}>📞</span>
              <div>
                <div style={{ fontSize: '13px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Format</div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#111', marginTop: '4px' }}>1:1 Video / Phone Call</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <span style={{ fontSize: '24px' }}>📩</span>
              <div>
                <div style={{ fontSize: '13px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Confirmed to</div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#111', marginTop: '4px' }}>{phone}</div>
              </div>
            </div>

          </div>

          {(() => {
            const hasExpired = isSlotExpired(existingBooking.slot_time, existingBooking.booked_at);
            return (
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '12px', flexWrap: 'wrap' }}>
                <button className="btn-primary" onClick={() => navigate('/')} style={{ padding: '14px 40px', fontSize: '16px' }}>
                  Back to Home
                </button>
                <button
                  className="btn-outline"
                  onClick={hasExpired ? () => navigate('/book') : undefined}
                  disabled={!hasExpired}
                  title={hasExpired ? 'Book a new session' : 'Available once your current slot time has passed'}
                  style={{
                    padding: '14px 40px',
                    fontSize: '16px',
                    border: `1px solid ${hasExpired ? 'var(--green-accent)' : '#ccc'}`,
                    color: hasExpired ? 'var(--green-accent)' : '#aaa',
                    opacity: hasExpired ? 1 : 0.6,
                    cursor: hasExpired ? 'pointer' : 'not-allowed',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'transparent',
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
            );
          })()}
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-card" style={{ maxWidth: '440px' }}>
        <button className="auth-back-btn" onClick={() => navigate('/')}>
          <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" /></svg>
          Back to home
        </button>

        <div className="section-label" style={{ marginTop: '16px' }}>
          <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z" /></svg>
          <span>WELCOME BACK</span>
        </div>

        <h1 className="auth-heading">Sign In to Your Account</h1>
        <p className="auth-sub">Access your career matches and booking details.</p>

        {error && <div className="field-error" style={{ fontSize: '14px', textAlign: 'center' }}>{error}</div>}

        <form className="auth-form" onSubmit={handleSignIn} noValidate>
          <div className="field-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="field-group" style={{ position: 'relative' }}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingRight: '40px' }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '12px',
                bottom: '12px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#666',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0
              }}
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor"><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,128c-57.55,0-85.73-45.33-95.28-60C42.27,109.33,70.45,64,128,64s85.73,45.33,95.28,60C213.73,138.67,185.55,184,128,184Zm0-112a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,72Zm0,88a36,36,0,1,1,36-36A36,36,0,0,1,128,160Z" /></svg>
              ) : (
                <svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor"><path d="M53.94,34.62A8,8,0,0,0,42.62,45.94L71.55,74.87C49.92,89.5,29.93,114.73,16,128c0,0,32,72,112,72,21.94,0,42.45-6.72,60.67-16.38l13.39,13.38a8,8,0,0,0,11.32-11.32ZM128,184c-57.55,0-85.73-45.33-95.28-60,5.65-8.68,16-22.3,31-33.85l23.59,23.59a36,36,0,0,0,48.43,48.43l13.59,13.59A87,87,0,0,1,128,184Zm52-56h0a36.05,36.05,0,0,1-13.84,28.52l-14.7-14.7a20,20,0,0,0-28.16-28.16l-14.7-14.7A36.05,36.05,0,0,1,180,128ZM240,128s-22.31,50.19-75.11,68l-15.68-15.68c43-13.1,64-41.9,69.51-52.32-9.55-14.67-37.73-60-95.28-60a87.75,87.75,0,0,0-35.34,7.69L76.12,63.7C92,58.54,109.58,56,128,56,208,56,240,128,240,128Z" /></svg>
              )}
            </button>
          </div>

          <button type="submit" className="btn-primary auth-submit-btn" disabled={submitting} style={{ marginTop: '12px' }}>
            {submitting ? <span className="auth-loading"><span className="auth-spinner" />Signing In…</span> : 'Sign In →'}
          </button>
        </form>

        <p className="auth-fine" style={{ marginTop: '12px' }}>
          Don't have an account? <span onClick={() => navigate('/signup')} style={{ color: 'var(--green-accent)', cursor: 'pointer', fontWeight: '600' }}>Sign Up</span>
        </p>

        <p className="auth-fine">🔒 Your data is encrypted and secure.</p>
      </div>
    </div>
  );
}

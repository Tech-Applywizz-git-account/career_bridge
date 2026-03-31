import { useState, useEffect } from 'react';
import { useRouter } from '../router';
import { supabase } from '../lib/supabase';

export default function Admin() {
  const { navigate } = useRouter();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(
    sessionStorage.getItem('cb_admin_auth') === 'true'
  );
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAdminLoggedIn) {
      fetchAdminData();
    }
  }, [isAdminLoggedIn]);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminEmail === 'created@applywizz.com' && adminPassword === 'Applywizz@2026') {
      setIsAdminLoggedIn(true);
      sessionStorage.setItem('cb_admin_auth', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid admin credentials.');
    }
  };

  const fetchAdminData = async () => {
    setLoading(true);
    setError('');

    try {
      // 1. Fetch all bookings
      const { data: bookingsData, error: bookingsError } = await supabase
        .from('bookings')
        .select('*');

      if (bookingsError) throw bookingsError;

      if (!bookingsData || bookingsData.length === 0) {
        setBookings([]);
        setLoading(false);
        return;
      }

      // 2. Fetch all profiles via RPC (bypasses RLS to return all rows)
      let profileMap = {};
      const { data: profilesData, error: profilesError } = await supabase
        .rpc('get_all_user_profiles');

      if (!profilesError && profilesData) {
        profilesData.forEach(p => {
          profileMap[p.id] = p;
        });
      }

      // 3. Merge data
      // Sort in-memory if desired, or just show as fetched
      const mergedBookings = bookingsData.map(booking => ({
        ...booking,
        profile: profileMap[booking.user_id] || { full_name: 'Unknown', phone: 'Unknown' }
      })).reverse(); // simple reverse to list newest probably first

      setBookings(mergedBookings);
    } catch (err) {
      console.error('Error fetching admin data:', err);
      setError('Failed to load bookings.');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (bookingId, newStatus) => {
    if (!bookingId) return;

    // Optimistic UI update
    setBookings(prev => prev.map(b =>
      b.id === bookingId ? { ...b, status: newStatus } : b
    ));

    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status: newStatus })
        .eq('id', bookingId);

      if (error) {
        throw error;
      }
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Failed to update status. Please try again.');
      // Revert optimism on error
      fetchAdminData();
    }
  };

  if (!isAdminLoggedIn) {
    return (
      <div className="auth-page">
        <div className="auth-card" style={{ maxWidth: '400px' }}>
          <button className="auth-back-btn" onClick={() => navigate('/')}>
            <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" /></svg>
            Back to home
          </button>

          <div className="section-label" style={{ marginTop: '16px', justifyContent: 'center' }}>
            <svg viewBox="0 0 256 256" width="20" height="20"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z" /></svg>
            <span>ADMIN ACCESS</span>
          </div>

          <h1 className="auth-heading" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Admin Login</h1>
          <p className="auth-sub" style={{ marginBottom: '24px' }}>Please log in to manage bookings.</p>

          {loginError && <div className="field-error" style={{ textAlign: 'center', marginBottom: '16px' }}>{loginError}</div>}

          <form className="auth-form" onSubmit={handleAdminLogin}>
            <div className="field-group">
              <label>Email</label>
              <input type="email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} placeholder="admin@example.com" />
            </div>
            <div className="field-group">
              <label>Password</label>
              <input type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} placeholder="Password" />
            </div>
            <button type="submit" className="btn-primary auth-submit-btn" style={{ marginTop: '12px' }}>Login →</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page" style={{ alignItems: 'flex-start', overflowY: 'auto', padding: '60px 20px', minHeight: '100vh', background: '#f8fdf6' }}>
      <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 className="auth-heading" style={{ fontSize: '2rem', textAlign: 'left', marginBottom: '8px' }}>Admin Dashboard</h1>
            <p className="auth-sub" style={{ textAlign: 'left', margin: 0 }}>Manage booked sessions and connection records.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn-outline" onClick={() => { sessionStorage.removeItem('cb_admin_auth'); setIsAdminLoggedIn(false); navigate('/'); }} style={{ padding: '8px 16px', background: '#fff', color: '#b71c1c', borderColor: '#ffcdd2' }}>
              Logout
            </button>
            <button className="btn-outline" onClick={() => navigate('/')} style={{ padding: '8px 16px', background: '#fff' }}>
              Back to Home
            </button>
          </div>
        </div>

        {error && <div className="field-error" style={{ marginBottom: '20px' }}>{error}</div>}

        <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2f0d9', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          {loading ? (
            <div style={{ padding: '60px 40px', textAlign: 'center', color: '#666' }}>
              <span className="auth-loading" style={{ justifyContent: 'center' }}>
                <span className="auth-spinner"></span> Loading records...
              </span>
            </div>
          ) : bookings.length === 0 ? (
            <div style={{ padding: '60px 40px', textAlign: 'center', color: '#666' }}>No bookings found currently.</div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead style={{ background: '#fcfdfc', borderBottom: '1px solid #e2f0d9' }}>
                  <tr>
                    <th style={{ padding: '16px 24px', fontWeight: '600', color: '#111', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>User</th>
                    <th style={{ padding: '16px 24px', fontWeight: '600', color: '#111', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</th>
                    <th style={{ padding: '16px 24px', fontWeight: '600', color: '#111', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Resume</th>
                    <th style={{ padding: '16px 24px', fontWeight: '600', color: '#111', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Date</th>
                    <th style={{ padding: '16px 24px', fontWeight: '600', color: '#111', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Slot Time</th>
                    <th style={{ padding: '16px 24px', fontWeight: '600', color: '#111', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Timezone</th>
                    <th style={{ padding: '16px 24px', fontWeight: '600', color: '#111', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b, index) => (
                    <tr key={b.id || index} style={{ borderBottom: '1px solid #f2f7ef', transition: 'background 0.2s', ':hover': { background: '#fafdf9' } }}>
                      <td style={{ padding: '16px 24px', fontSize: '15px' }}>{b.profile.full_name}</td>
                      <td style={{ padding: '16px 24px', fontSize: '15px', color: '#555' }}>{b.profile.phone}</td>
                      <td style={{ padding: '16px 24px', fontSize: '14px' }}>
                        {b.profile.resume_filename ? (
                          <a href={b.profile.resume_filename} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-accent)', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216ZM168,144a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,144Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,176Z" /></svg>
                            View PDF
                          </a>
                        ) : (
                          <span style={{ color: '#aaa' }}>No Resume</span>
                        )}
                      </td>
                      <td style={{ padding: '16px 24px', fontSize: '15px', color: '#555', whiteSpace: 'nowrap' }}>
                        {(() => {
                          const rawDate = b.created_at ? new Date(b.created_at) : new Date();
                          const day = String(rawDate.getDate()).padStart(2, '0');
                          const month = String(rawDate.getMonth() + 1).padStart(2, '0');
                          const year = rawDate.getFullYear();
                          return `${day}/${month}/${year}`;
                        })()}
                      </td>
                      <td style={{ padding: '16px 24px', fontSize: '15px', fontWeight: '500', whiteSpace: 'nowrap' }}>{b.slot_time}</td>
                      <td style={{ padding: '16px 24px', fontSize: '14px', color: '#555' }}>{b.timezone}</td>
                      <td style={{ padding: '16px 24px' }}>
                        <select
                          value={b.status || 'Pending'}
                          onChange={(e) => handleStatusChange(b.id, e.target.value)}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '8px',
                            border: '1px solid #d1e2c9',
                            outline: 'none',
                            fontSize: '14px',
                            backgroundColor: '#fff',
                            cursor: 'pointer',
                            color: b.status === 'connected' ? '#1b5e20' : b.status === 'not answered' ? '#b71c1c' : '#555',
                            fontWeight: '500'
                          }}
                        >
                          <option value="Pending">Pending</option>
                          <option value="connected">Connected</option>
                          <option value="not answered">Not Answered</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

// import { useState } from 'react';
// import { useRouter } from '../router';
// import { supabase } from '../lib/supabase';

// export default function SignUp() {
//   const { navigate } = useRouter();
//   const [step, setStep] = useState('form');
//   const [submitting, setSubmitting] = useState(false);
//   const [form, setForm] = useState({
//     email: '',
//     password: '',
//     fullName: '',
//     phone: '',
//     domain: '',
//     experience: '',
//     resume: null,
//   });
//   const [errors, setErrors] = useState({});

//   const domains = [
//     'Software / Engineering',
//     'Finance / Accounting',
//     'Marketing / Growth',
//     'Healthcare / Medical',
//     'Data / Analytics',
//     'Design / UX',
//     'Sales / Business Dev',
//     'Operations / Supply Chain',
//     'Legal / Compliance',
//     'Other',
//   ];

//   const experienceOptions = ['0–1 years', '2–5 years', '5–10 years', '10+ years'];

//   const validate = () => {
//     const e = {};
//     if (!form.email.trim()) e.email = 'Email is required';
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email format';
//     if (!form.password || form.password.length < 6) e.password = 'Password must be at least 6 characters';
//     if (!form.fullName.trim()) e.fullName = 'Full name is required';
//     if (!form.phone.trim()) e.phone = 'Phone number is required';
//     if (!form.domain) e.domain = 'Please select your domain';
//     if (!form.experience) e.experience = 'Please select your experience level';
//     if (!form.resume) e.resume = 'Please upload your resume';
//     return e;
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
//     setErrors((prev) => ({ ...prev, [name]: '' }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const v = validate();
//     if (Object.keys(v).length > 0) { setErrors(v); return; }

//     if (!supabase) {
//       setErrors({ form: 'Supabase is not initialized. Check your credentials in .env' });
//       return;
//     }    setSubmitting(true);
//     try {
//       // 1. Sign Up User in Supabase Auth
//       const { data: authData, error: authError } = await supabase.auth.signUp({
//         email: form.email,
//         password: form.password,
//       });

//       if (authError) {
//         console.error('Supabase Auth Error:', authError);
//         throw authError;
//       }

//       const user = authData.user;

//       if (user) {
//         // 2. Upload Resume to Storage
//         let resumePath = null;
//         if (form.resume) {
//           const fileExt = form.resume.name.split('.').pop();
//           const fileName = `${user.id}/${Date.now()}.${fileExt}`;
//           const { data: uploadData, error: uploadError } = await supabase.storage
//             .from('resume')
//             .upload(fileName, form.resume);

//           if (uploadError) {
//             console.error('Resume upload error:', uploadError);
//           } else {
//             resumePath = uploadData.path;
//           }
//         }

//         // 3. Store in Profiles Table
//         console.log('Inserting profile for user:', user.id);
//         const profileData = {
//           id: user.id,
//           full_name: form.fullName,
//           phone: form.phone,
//           interest_domain: form.domain,
//           experience: form.experience,
//           resume_filename: resumePath,
//         };

//         const { error: profileError } = await supabase
//           .from('user_profiles')
//           .insert([profileData]);

//         if (profileError) {
//           // If this fails but the user was created, it's likely an RLS or Email Confirmation issue
//           console.error('Supabase profile insertion error:', profileError);
//           throw profileError;
//         }

//         sessionStorage.setItem('cb_name', form.fullName);
//         sessionStorage.setItem('cb_phone', form.phone);
//         sessionStorage.setItem('cb_user_id', user.id);

//         setStep('success');
//       }
//     } catch (err) {
//       console.error('Error during sign up:', err);
//       let msg = err.message || 'An error occurred during sign up';
//       if (msg.includes('rate limit')) msg = 'Too many attempts. Please wait 15 minutes or disable rate limits in Supabase.';
//       setErrors({ form: msg });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (step === 'success') {
//     return (
//       <div className="auth-page">
//         <div className="auth-card success-card">
//           <div className="success-emoji">🎉</div>
//           <div className="section-label" style={{ justifyContent: 'center' }}>
//             <svg viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" /></svg>
//             <span>ACCOUNT CREATED</span>
//           </div>
//           <h1 className="auth-heading">Your Profile is Ready!</h1>
//           <p className="auth-sub">Great — your advisor will review your resume before the call. Now let's find you a time slot that works.</p>
//           <button className="btn-primary auth-submit-btn" onClick={() => navigate('/book')}>
//             Book My Free Call →
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="auth-page">
//       <div className="auth-card" style={{ maxWidth: '600px' }}>
//         <button className="auth-back-btn" onClick={() => navigate('/')}>
//           <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" /></svg>
//           Back to home
//         </button>

//         <div className="step-track">
//           <div className="step-dot active" />
//           <div className="step-connector" />
//           <div className="step-dot" />
//         </div>

//         <div className="section-label">
//           <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z" /></svg>
//           <span>STEP 1 OF 2</span>
//         </div>

//         <h1 className="auth-heading">Let's Get You Started</h1>
//         <p className="auth-sub">Tell us a little about yourself so we can match you with the right advisor and prepare them before your session.</p>

//         {errors.form && <div className="field-error" style={{ marginBottom: '16px', fontSize: '14px', textAlign: 'center' }}>{errors.form}</div>}

//         <form className="auth-form" onSubmit={handleSubmit} noValidate>
//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
//             <div className="field-group">
//               <label htmlFor="fullName">Full Name</label>
//               <input id="fullName" name="fullName" type="text" placeholder="Your full name" value={form.fullName} onChange={handleChange} className={errors.fullName ? 'input-error' : ''} />
//               {errors.fullName && <span className="field-error">{errors.fullName}</span>}
//             </div>

//             <div className="field-group">
//               <label htmlFor="email">Email Address</label>
//               <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} className={errors.email ? 'input-error' : ''} />
//               {errors.email && <span className="field-error">{errors.email}</span>}
//             </div>
//           </div>

//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
//             <div className="field-group">
//               <label htmlFor="password">Password</label>
//               <input id="password" name="password" type="password" placeholder="Min 6 characters" value={form.password} onChange={handleChange} className={errors.password ? 'input-error' : ''} />
//               {errors.password && <span className="field-error">{errors.password}</span>}
//             </div>

//             <div className="field-group">
//               <label htmlFor="phone">Phone Number</label>
//               <input id="phone" name="phone" type="tel" placeholder="For booking confirmation" value={form.phone} onChange={handleChange} className={errors.phone ? 'input-error' : ''} />
//               {errors.phone && <span className="field-error">{errors.phone}</span>}
//             </div>
//           </div>

//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
//             <div className="field-group">
//               <label htmlFor="domain">Domain / Field</label>
//               <select id="domain" name="domain" value={form.domain} onChange={handleChange} className={errors.domain ? 'input-error' : ''}>
//                 <option value="">e.g. Software, Finance...</option>
//                 {domains.map((d) => <option key={d} value={d}>{d}</option>)}
//               </select>
//               {errors.domain && <span className="field-error">{errors.domain}</span>}
//             </div>

//             <div className="field-group">
//               <label htmlFor="experience">Years of Experience</label>
//               <select id="experience" name="experience" value={form.experience} onChange={handleChange} className={errors.experience ? 'input-error' : ''}>
//                 <option value="">Select level...</option>
//                 {experienceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
//               </select>
//               {errors.experience && <span className="field-error">{errors.experience}</span>}
//             </div>
//           </div>

//           <div className="field-group">
//             <label htmlFor="resume">Upload Resume</label>
//             <label htmlFor="resume" className={`file-upload-label ${errors.resume ? 'input-error' : ''} ${form.resume ? 'has-file' : ''}`}>
//               <svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-40-80a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V144H104a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,136Z" /></svg>
//               <span>{form.resume ? form.resume.name : 'Choose PDF file · Max 5MB'}</span>
//             </label>
//             <input id="resume" name="resume" type="file" accept=".pdf" onChange={handleChange} style={{ display: 'none' }} />
//             {errors.resume && <span className="field-error">{errors.resume}</span>}
//           </div>

//           <button type="submit" className="btn-primary auth-submit-btn" disabled={submitting}>
//             {submitting
//               ? <span className="auth-loading"><span className="auth-spinner" />Creating Profile…</span>
//               : 'Create My Profile →'}
//           </button>
//         </form>

//         <p className="auth-fine" style={{ marginTop: '12px' }}>
//           Already have an account? <span onClick={() => navigate('/signin')} style={{ color: 'var(--green-accent)', cursor: 'pointer', fontWeight: '600' }}>Sign In</span>
//         </p>

//         <p className="auth-fine">🔒 Your data is encrypted and never shared with third parties.</p>
//       </div>
//     </div>
//   );
// }



































// import { useState } from 'react';
// import { useRouter } from '../router';
// import { supabase } from '../lib/supabase';

// export default function SignUp() {
//   const { navigate } = useRouter();
//   const [step, setStep] = useState('form');
//   const [submitting, setSubmitting] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({
//     email: '',
//     password: '',
//     fullName: '',
//     phone: '',
//     countryCode: '+1',
//     domain: '',
//     experience: '',
//     resume: null,
//   });
//   const [errors, setErrors] = useState({});

//   const domains = [
//     'Software / Engineering',
//     'Finance / Accounting',
//     'Marketing / Growth',
//     'Healthcare / Medical',
//     'Data / Analytics',
//     'Design / UX',
//     'Sales / Business Dev',
//     'Operations / Supply Chain',
//     'Legal / Compliance',
//     'Other',
//   ];

//   const experienceOptions = ['0–1 years', '2–5 years', '5–10 years', '10+ years'];

//   const countryCodes = [
//     { code: '+1', country: '🇺🇸 USA' },
//     { code: '+44', country: '🇬🇧 UK' },
//     { code: '+91', country: '🇮🇳 India' },
//     { code: '+61', country: '🇦🇺 Australia' },
//     { code: '+86', country: '🇨🇳 China' },
//     { code: '+81', country: '🇯🇵 Japan' },
//     { code: '+49', country: '🇩🇪 Germany' },
//     { code: '+33', country: '🇫🇷 France' },
//     { code: '+55', country: '🇧🇷 Brazil' },
//     { code: '+7', country: '🇷🇺 Russia' },
//     { code: '+34', country: '🇪🇸 Spain' },
//     { code: '+39', country: '🇮🇹 Italy' },
//     { code: '+52', country: '🇲🇽 Mexico' },
//     { code: '+82', country: '🇰🇷 South Korea' },
//   ];

//   const validate = () => {
//     const e = {};
//     if (!form.email.trim()) e.email = 'Email is required';
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email format';
//     if (!form.password || form.password.length < 6) e.password = 'Password must be at least 6 characters';
//     if (!form.fullName.trim()) e.fullName = 'Full name is required';
//     if (!form.phone.trim()) e.phone = 'Phone number is required';
//     if (!form.domain) e.domain = 'Please select your domain';
//     if (!form.experience) e.experience = 'Please select your experience level';
//     if (!form.resume) e.resume = 'Please upload your resume';
//     return e;
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
//     setErrors((prev) => ({ ...prev, [name]: '' }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const v = validate();
//     if (Object.keys(v).length > 0) { setErrors(v); return; }

//     if (!supabase) {
//       setErrors({ form: 'Supabase is not initialized. Check your credentials in .env' });
//       return;
//     }
//     setSubmitting(true);
//     try {
//       // 1. Sign Up User in Supabase Auth
//       const { data: authData, error: authError } = await supabase.auth.signUp({
//         email: form.email,
//         password: form.password,
//       });

//       if (authError) {
//         console.error('Supabase Auth Error:', authError);
//         throw authError;
//       }

//       const user = authData.user;

//       if (user) {
//         // 2. Upload Resume to Storage
//         let resumePath = null;
//         if (form.resume) {
//           const fileExt = form.resume.name.split('.').pop();
//           const fileName = `${user.id}/${Date.now()}.${fileExt}`;
//           const { data: uploadData, error: uploadError } = await supabase.storage
//             .from('resume')
//             .upload(fileName, form.resume);

//           if (uploadError) {
//             console.error('Resume upload error:', uploadError);
//           } else {
//             resumePath = uploadData.path;
//           }
//         }

//         // 3. Store in Profiles Table
//         console.log('Inserting profile for user:', user.id);
//         const profileData = {
//           id: user.id,
//           full_name: form.fullName,
//           phone: `${form.countryCode} ${form.phone}`,
//           interest_domain: form.domain,
//           experience: form.experience,
//           resume_filename: resumePath,
//         };

//         const { error: profileError } = await supabase
//           .from('user_profiles')
//           .insert([profileData]);

//         if (profileError) {
//           // If this fails but the user was created, it's likely an RLS or Email Confirmation issue
//           console.error('Supabase profile insertion error:', profileError);
//           throw profileError;
//         }

//         sessionStorage.setItem('cb_name', form.fullName);
//         sessionStorage.setItem('cb_phone', `${form.countryCode} ${form.phone}`);
//         sessionStorage.setItem('cb_user_id', user.id);

//         setStep('success');
//       }
//     } catch (err) {
//       console.error('Error during sign up:', err);
//       let msg = err.message || 'An error occurred during sign up';
//       if (msg.includes('rate limit')) msg = 'Too many attempts. Please wait 15 minutes or disable rate limits in Supabase.';
//       setErrors({ form: msg });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (step === 'success') {
//     return (
//       <div className="auth-page">
//         <div className="auth-card success-card">
//           <div className="success-emoji">🎉</div>
//           <div className="section-label" style={{ justifyContent: 'center' }}>
//             <svg viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" /></svg>
//             <span>ACCOUNT CREATED</span>
//           </div>
//           <h1 className="auth-heading">Your Profile is Ready!</h1>
//           <p className="auth-sub">Great — your advisor will review your resume before the call. Now let's find you a time slot that works.</p>
//           <button className="btn-primary auth-submit-btn" onClick={() => navigate('/book')}>
//             Book My Free Call →
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="auth-page">
//       <div className="auth-card" style={{ maxWidth: '600px' }}>
//         <button className="auth-back-btn" onClick={() => navigate('/')}>
//           <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" /></svg>
//           Back to home
//         </button>

//         <div className="step-track">
//           <div className="step-dot active" />
//           <div className="step-connector" />
//           <div className="step-dot" />
//         </div>

//         <div className="section-label">
//           <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z" /></svg>
//           <span>STEP 1 OF 2</span>
//         </div>

//         <h1 className="auth-heading">Let's Get You Started</h1>
//         <p className="auth-sub">Tell us a little about yourself so we can match you with the right advisor and prepare them before your session.</p>

//         {errors.form && <div className="field-error" style={{ marginBottom: '16px', fontSize: '14px', textAlign: 'center' }}>{errors.form}</div>}

//         <form className="auth-form" onSubmit={handleSubmit} noValidate>
//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
//             <div className="field-group">
//               <label htmlFor="fullName">Full Name</label>
//               <input id="fullName" name="fullName" type="text" placeholder="Your full name" value={form.fullName} onChange={handleChange} className={errors.fullName ? 'input-error' : ''} />
//               {errors.fullName && <span className="field-error">{errors.fullName}</span>}
//             </div>

//             <div className="field-group">
//               <label htmlFor="email">Email Address</label>
//               <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} className={errors.email ? 'input-error' : ''} />
//               {errors.email && <span className="field-error">{errors.email}</span>}
//             </div>
//           </div>

//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
//             <div className="field-group">
//               <label htmlFor="password">Password</label>
//               <div style={{ position: 'relative' }}>
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Min 6 characters"
//                   value={form.password}
//                   onChange={handleChange}
//                   className={errors.password ? 'input-error' : ''}
//                   style={{ paddingRight: '40px' }}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   style={{
//                     position: 'absolute',
//                     right: '12px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     background: 'none',
//                     border: 'none',
//                     cursor: 'pointer',
//                     padding: '0',
//                     display: 'flex',
//                     alignItems: 'center',
//                     color: 'var(--text-muted)',
//                   }}
//                 >
//                   {showPassword ? (
//                     <svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor">
//                       <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" />
//                     </svg>
//                   ) : (
//                     <svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor">
//                       <path d="M53.92,34.61a8,8,0,0,0-11.84,10.78l27.1,29.65c-12.89,9-24,19.76-33.22,31.76a8,8,0,0,0,0,10.4c.35.79,8.82,19.58,27.65,38.41C61.43,194.74,93.12,208,128,208a109.1,109.1,0,0,0,38.88-7.12l21.2,23.21a8,8,0,1,0,11.84-10.78ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128a131.09,131.09,0,0,1,34.46-34.07l30.28,33.16a48,48,0,0,0,66.5,72.84l21.34,23.36A92.25,92.25,0,0,1,128,192Zm56-64a55.41,55.41,0,0,1-8.61,29.7l-12.44-13.62a40,40,0,0,0-51.09-56L97.25,80.8A91.22,91.22,0,0,1,128,72c30.78,0,57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231,128c-7.21,13.46-38.62,64-103,64a95.74,95.74,0,0,1-18.39-1.86l-13.58-14.87A56,56,0,0,0,184,128Z" />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//               {errors.password && <span className="field-error">{errors.password}</span>}
//             </div>

//             <div className="field-group">
//               <label htmlFor="phone">Phone Number</label>
//               <div style={{ display: 'flex', gap: '8px' }}>
//                 <select
//                   id="countryCode"
//                   name="countryCode"
//                   value={form.countryCode}
//                   onChange={handleChange}
//                   style={{ width: '110px', flexShrink: 0 }}
//                   className={errors.phone ? 'input-error' : ''}
//                 >
//                   {countryCodes.map((country) => (
//                     <option key={country.code} value={country.code}>
//                       {country.country} ({country.code})
//                     </option>
//                   ))}
//                 </select>
//                 <input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   placeholder="Phone number"
//                   value={form.phone}
//                   onChange={handleChange}
//                   className={errors.phone ? 'input-error' : ''}
//                   style={{ flex: 1 }}
//                 />
//               </div>
//               {errors.phone && <span className="field-error">{errors.phone}</span>}
//             </div>
//           </div>

//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
//             <div className="field-group">
//               <label htmlFor="domain">Domain / Field</label>
//               <select id="domain" name="domain" value={form.domain} onChange={handleChange} className={errors.domain ? 'input-error' : ''}>
//                 <option value="">e.g. Software, Finance...</option>
//                 {domains.map((d) => <option key={d} value={d}>{d}</option>)}
//               </select>
//               {errors.domain && <span className="field-error">{errors.domain}</span>}
//             </div>

//             <div className="field-group">
//               <label htmlFor="experience">Years of Experience</label>
//               <select id="experience" name="experience" value={form.experience} onChange={handleChange} className={errors.experience ? 'input-error' : ''}>
//                 <option value="">Select level...</option>
//                 {experienceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
//               </select>
//               {errors.experience && <span className="field-error">{errors.experience}</span>}
//             </div>
//           </div>

//           <div className="field-group">
//             <label htmlFor="resume">Upload Resume</label>
//             <label htmlFor="resume" className={`file-upload-label ${errors.resume ? 'input-error' : ''} ${form.resume ? 'has-file' : ''}`}>
//               <svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-40-80a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V144H104a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,136Z" /></svg>
//               <span>{form.resume ? form.resume.name : 'Choose PDF file · Max 5MB'}</span>
//             </label>
//             <input id="resume" name="resume" type="file" accept=".pdf" onChange={handleChange} style={{ display: 'none' }} />
//             {errors.resume && <span className="field-error">{errors.resume}</span>}
//           </div>

//           <button type="submit" className="btn-primary auth-submit-btn" disabled={submitting}>
//             {submitting
//               ? <span className="auth-loading"><span className="auth-spinner" />Creating Profile…</span>
//               : 'Create My Profile →'}
//           </button>
//         </form>

//         <p className="auth-fine" style={{ marginTop: '12px' }}>
//           Already have an account? <span onClick={() => navigate('/signin')} style={{ color: 'var(--green-accent)', cursor: 'pointer', fontWeight: '600' }}>Sign In</span>
//         </p>

//         <p className="auth-fine">🔒 Your data is encrypted and never shared with third parties.</p>
//       </div>
//     </div>
//   );
// }
















import { useState } from 'react';
import { useRouter } from '../router';
import { supabase } from '../lib/supabase';

export default function SignUp() {
  const { navigate } = useRouter();
  const [step, setStep] = useState('form');
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    fullName: '',
    phone: '',
    countryCode: '+1',
    domain: '',
    experience: '',
    resume: null,
  });
  const [errors, setErrors] = useState({});

  const domains = [
    'Software / Engineering',
    'Finance / Accounting',
    'Marketing / Growth',
    'Healthcare / Medical',
    'Data / Analytics',
    'Design / UX',
    'Sales / Business Dev',
    'Operations / Supply Chain',
    'Legal / Compliance',
    'Other',
  ];

  const experienceOptions = ['0–1 years', '2–5 years', '5–10 years', '10+ years'];

  const countryCodes = [
    { code: '+1', country: '🇺🇸 USA' },
    { code: '+44', country: '🇬🇧 UK' },
    { code: '+91', country: '🇮🇳 India' },
    { code: '+61', country: '🇦🇺 Australia' },
    { code: '+86', country: '🇨🇳 China' },
    { code: '+81', country: '🇯🇵 Japan' },
    { code: '+49', country: '🇩🇪 Germany' },
    { code: '+33', country: '🇫🇷 France' },
    { code: '+55', country: '🇧🇷 Brazil' },
    { code: '+7', country: '🇷🇺 Russia' },
    { code: '+34', country: '🇪🇸 Spain' },
    { code: '+39', country: '🇮🇹 Italy' },
    { code: '+52', country: '🇲🇽 Mexico' },
    { code: '+82', country: '🇰🇷 South Korea' },
  ];

  const validate = () => {
    const e = {};
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email format';
    if (!form.password || form.password.length < 6) e.password = 'Password must be at least 6 characters';
    if (!form.fullName.trim()) e.fullName = 'Full name is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (!form.domain) e.domain = 'Please select your domain';
    if (!form.experience) e.experience = 'Please select your experience level';
    if (!form.resume) e.resume = 'Please upload your resume';
    return e;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) { setErrors(v); return; }

    if (!supabase) {
      setErrors({ form: 'Supabase is not initialized. Check your credentials in .env' });
      return;
    }
    setSubmitting(true);
    try {
      // 1. Sign Up User in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
      });

      if (authError) {
        console.error('Supabase Auth Error:', authError);
        throw authError;
      }

      const user = authData.user;

      if (user) {
        // 2. Upload Resume to Storage
        let resumePath = null;
        if (form.resume) {
          const fileExt = form.resume.name.split('.').pop();
          const fileName = `${user.id}/${Date.now()}.${fileExt}`;
          const { data: uploadData, error: uploadError } = await supabase.storage
            .from('resume')
            .upload(fileName, form.resume, {
              cacheControl: '3600',
              upsert: false
            });

          if (uploadError) {
            console.error('Resume upload error:', uploadError);
            throw new Error(`Resume upload failed: ${uploadError.message}. Make sure your 'resume' bucket exists and has public/authenticated INSERT policies enabled in Supabase.`);
          } else {
            const { data: publicUrlData } = supabase.storage
              .from('resume')
              .getPublicUrl(uploadData.path);

            resumePath = publicUrlData.publicUrl;
          }
        }

        // 3. Store in Profiles Table using RPC function
        console.log('Inserting profile for user:', user.id);

        // Make sure parameter names exactly match the function definition
        const { data: rpcResult, error: rpcError } = await supabase.rpc('insert_user_profile', {
          p_id: user.id,
          p_full_name: form.fullName,
          p_phone: `${form.countryCode} ${form.phone}`,
          p_experience: form.experience,
          p_resume_filename: resumePath,
          p_interest_domain: form.domain
        });

        if (rpcError) {
          console.error('Supabase RPC Error:', rpcError);
          throw rpcError;
        }

        if (!rpcResult.success) {
          console.error('Profile insertion failed:', rpcResult.error);
          throw new Error(rpcResult.error);
        }

        console.log('Profile created successfully:', rpcResult);

        sessionStorage.setItem('cb_name', form.fullName);
        sessionStorage.setItem('cb_phone', `${form.countryCode} ${form.phone}`);
        sessionStorage.setItem('cb_user_id', user.id);

        setStep('success');
      }
    } catch (err) {
      console.error('Error during sign up:', err);
      let msg = err.message || 'An error occurred during sign up';
      if (msg.includes('rate limit')) msg = 'Too many attempts. Please wait 15 minutes or disable rate limits in Supabase.';
      setErrors({ form: msg });
    } finally {
      setSubmitting(false);
    }
  };

  if (step === 'success') {
    return (
      <div className="auth-page">
        <div className="auth-card success-card">
          <div className="success-emoji">🎉</div>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <svg viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" /></svg>
            <span>ACCOUNT CREATED</span>
          </div>
          <h1 className="auth-heading">Your Profile is Ready!</h1>
          <p className="auth-sub">Great — your advisor will review your resume before the call. Now let's find you a time slot that works.</p>
          <button className="btn-primary auth-submit-btn" onClick={() => navigate('/book')}>
            Book My Free Call →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-card" style={{ maxWidth: '600px' }}>
        <button className="auth-back-btn" onClick={() => navigate('/')}>
          <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" /></svg>
          Back to home
        </button>

        <div className="step-track">
          <div className="step-dot active" />
          <div className="step-connector" />
          <div className="step-dot" />
        </div>

        <div className="section-label">
          <svg viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h24A8,8,0,0,1,168,128Z" /></svg>
          <span>STEP 1 OF 2</span>
        </div>

        <h1 className="auth-heading">Let's Get You Started</h1>
        <p className="auth-sub">Tell us a little about yourself so we can match you with the right advisor and prepare them before your session.</p>

        {errors.form && <div className="field-error" style={{ marginBottom: '16px', fontSize: '14px', textAlign: 'center' }}>{errors.form}</div>}

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="field-group">
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" name="fullName" type="text" placeholder="Your full name" value={form.fullName} onChange={handleChange} className={errors.fullName ? 'input-error' : ''} />
              {errors.fullName && <span className="field-error">{errors.fullName}</span>}
            </div>

            <div className="field-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} className={errors.email ? 'input-error' : ''} />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="field-group">
              <label htmlFor="password">Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Min 6 characters"
                  value={form.password}
                  onChange={handleChange}
                  className={errors.password ? 'input-error' : ''}
                  style={{ paddingRight: '40px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'var(--text-muted)',
                  }}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor">
                      <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor">
                      <path d="M53.92,34.61a8,8,0,0,0-11.84,10.78l27.1,29.65c-12.89,9-24,19.76-33.22,31.76a8,8,0,0,0,0,10.4c.35.79,8.82,19.58,27.65,38.41C61.43,194.74,93.12,208,128,208a109.1,109.1,0,0,0,38.88-7.12l21.2,23.21a8,8,0,1,0,11.84-10.78ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128a131.09,131.09,0,0,1,34.46-34.07l30.28,33.16a48,48,0,0,0,66.5,72.84l21.34,23.36A92.25,92.25,0,0,1,128,192Zm56-64a55.41,55.41,0,0,1-8.61,29.7l-12.44-13.62a40,40,0,0,0-51.09-56L97.25,80.8A91.22,91.22,0,0,1,128,72c30.78,0,57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231,128c-7.21,13.46-38.62,64-103,64a95.74,95.74,0,0,1-18.39-1.86l-13.58-14.87A56,56,0,0,0,184,128Z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <span className="field-error">{errors.password}</span>}
            </div>

            <div className="field-group">
              <label htmlFor="phone">Phone Number</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <select
                  id="countryCode"
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  style={{ width: '110px', flexShrink: 0 }}
                  className={errors.phone ? 'input-error' : ''}
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.country} ({country.code})
                    </option>
                  ))}
                </select>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'input-error' : ''}
                  style={{ flex: 1 }}
                />
              </div>
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="field-group">
              <label htmlFor="domain">Domain / Field</label>
              <select id="domain" name="domain" value={form.domain} onChange={handleChange} className={errors.domain ? 'input-error' : ''}>
                <option value="">e.g. Software, Finance...</option>
                {domains.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
              {errors.domain && <span className="field-error">{errors.domain}</span>}
            </div>

            <div className="field-group">
              <label htmlFor="experience">Years of Experience</label>
              <select id="experience" name="experience" value={form.experience} onChange={handleChange} className={errors.experience ? 'input-error' : ''}>
                <option value="">Select level...</option>
                {experienceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              {errors.experience && <span className="field-error">{errors.experience}</span>}
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="resume">Upload Resume</label>
            <label htmlFor="resume" className={`file-upload-label ${errors.resume ? 'input-error' : ''} ${form.resume ? 'has-file' : ''}`}>
              <svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-40-80a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V144H104a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,136Z" /></svg>
              <span>{form.resume ? form.resume.name : 'Choose PDF file · Max 5MB'}</span>
            </label>
            <input id="resume" name="resume" type="file" accept=".pdf" onChange={handleChange} style={{ display: 'none' }} />
            {errors.resume && <span className="field-error">{errors.resume}</span>}
          </div>

          <button type="submit" className="btn-primary auth-submit-btn" disabled={submitting}>
            {submitting
              ? <span className="auth-loading"><span className="auth-spinner" />Creating Profile…</span>
              : 'Create My Profile →'}
          </button>
        </form>

        <p className="auth-fine" style={{ marginTop: '12px' }}>
          Already have an account? <span onClick={() => navigate('/signin')} style={{ color: 'var(--green-accent)', cursor: 'pointer', fontWeight: '600' }}>Sign In</span>
        </p>

        <p className="auth-fine">🔒 Your data is encrypted and never shared with third parties.</p>
      </div>
    </div>
  );
}
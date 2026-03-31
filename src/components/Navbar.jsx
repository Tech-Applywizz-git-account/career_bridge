import { useState, useEffect } from 'react';
import { useRouter } from '../router';

export default function Navbar() {
  const { navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="navbar" 
      className="fixed top-[20px] left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[1200px] flex items-center justify-between p-[12px_24px] border border-white/40 rounded-xl z-[100] transition-all duration-300"
      style={{
        background: isScrolled ? 'rgba(255,255,255,0.97)' : 'radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.4) 0%, #fff 100%)',
        boxShadow: isScrolled ? '0 2px 20px rgba(29,31,19,0.08)' : 'none'
      }}
    >
      <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="flex items-center gap-[8px] no-underline">
        <svg width="150" height="30" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="22" fontFamily="'Plus Jakarta Sans',sans-serif" fontWeight="700" fontSize="20" fill="#1d1f13">CareerBridge</text>
        </svg>
      </a>

      <div className={`nav-links flex items-center gap-[32px] flex-1 justify-center max-md:hidden max-md:absolute max-md:top-[70px] max-md:left-0 max-md:w-full max-md:flex-col max-md:bg-white max-md:p-[24px] max-md:rounded-[16px] max-md:shadow-nav ${isMenuOpen ? '!flex' : ''}`}>
        <a href="#product" className="text-[14px] font-medium text-dark no-underline transition-opacity duration-200 hover:opacity-[0.6]">Product</a>
        <a href="#reviews" className="text-[14px] font-medium text-dark no-underline transition-opacity duration-200 hover:opacity-[0.6]">Reviews</a>
        <a href="#benefits" className="text-[14px] font-medium text-dark no-underline transition-opacity duration-200 hover:opacity-[0.6]">Benefits</a>
        <a href="#process" className="text-[14px] font-medium text-dark no-underline transition-opacity duration-200 hover:opacity-[0.6]">How It Works</a>
        <a href="#product" className="text-[14px] font-medium text-dark no-underline transition-opacity duration-200 hover:opacity-[0.6]">Case Studies</a>
      </div>

      <div className="flex items-center gap-[12px]">
        <a href="/signin" onClick={(e) => { e.preventDefault(); navigate('/signin'); }} className="text-[14px] font-medium text-dark no-underline transition-opacity duration-200 hover:opacity-[0.6] mr-4">Sign In</a>
        <button id="nav-get-started" onClick={() => navigate('/signup')} className="btn-primary flex items-center gap-[6px] px-[20px] py-[10px] border border-dark-5 rounded-sm text-white text-[15px] font-medium transition-all duration-200 hover:opacity-[0.88] max-md:hidden" style={{ background: 'linear-gradient(125deg, #fff -123%, #1d1f13 74%)', cursor: 'pointer' }}>
          <svg className="w-[18px] h-[18px] inline-block" viewBox="0 0 256 256" fill="currentColor"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"/></svg>
          Get Started
        </button>
        <div className="hamburger hidden max-md:flex flex-col gap-[5px] cursor-pointer p-[8px]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="block w-[20px] h-[2px] bg-dark rounded-[2px]"></span>
          <span className="block w-[20px] h-[2px] bg-dark rounded-[2px]"></span>
        </div>
      </div>
    </nav>
  );
}

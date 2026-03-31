import useReveal from '../hooks/useReveal';
import { useRouter } from '../router';

export default function Hero() {
  const { navigate } = useRouter();
  const revealRef1 = useReveal();
  const revealRef2 = useReveal();

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-[160px] px-[60px] pb-[96px] relative overflow-hidden text-center gap-8">
      <div className="hero-glow absolute inset-0 pointer-events-none z-0">
        <div className="hero-glow-1 absolute w-[717px] h-[627px] top-1/2 left-[36%] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="hero-glow-2 absolute w-[774px] h-[619px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="hero-glow-3 absolute w-[713px] h-[487px] top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none z-10 max-w-[1240px] mx-auto w-full">
        <div className="animate-fadeUp w-full h-full relative" style={{ animationDelay: '0.5s' }}>
          <img src="https://framerusercontent.com/images/uXEz1rLWGpJlZ46ieqKbaxn0s.png?width=3034&height=2396" alt="" className="animate-float1 absolute bottom-[-12px] left-[-26px] w-[251px] z-10 pointer-events-auto cursor-grab" />
        </div>
        <div className="animate-fadeUp w-full h-full absolute top-0 left-0" style={{ animationDelay: '0.7s' }}>
          <img src="https://framerusercontent.com/images/V5YJlEtdhadO7vujOvPN6WJ47I.png?width=2469&height=2288" alt="" className="animate-float2 absolute top-[112px] right-[-34px] w-[251px] z-10 pointer-events-auto cursor-grab" />
        </div>
      </div>

      <div className="hero-content relative z-10 flex flex-col items-center gap-6 w-full max-w-[1240px]">
        <div className="hero-badge flex items-center justify-center gap-[6px] bg-green-light rounded-[18px] py-[6px] px-[20px] max-w-[340px]">
          <p className="text-[14px] font-medium text-dark text-center">5,000+ Careers Transformed Worldwide</p>
        </div>
        
        <div className="flex flex-col items-center gap-[16px]">
          <h1 className="font-display text-[72px] font-medium italic leading-[1.2] tracking-[-0.01em] text-dark max-w-[880px] animate-fadeUp" style={{ animationDelay: '0.2s' }}>
            Land Your Dream Job<br />Abroad. Faster.
          </h1>
          <p className="text-[16px] font-normal leading-[1.5] text-dark max-w-[640px] opacity-[0.85] animate-fadeUp" style={{ animationDelay: '0.4s' }}>
            CareerBridge gives you a free, expert-led 1:1 career counseling session — personalized to your background, domain, and goals. No cost. No catch. Just clarity.
          </p>
        </div>
        
        <div className="flex items-center gap-[16px] flex-wrap justify-center animate-fadeUp" style={{ animationDelay: '0.6s' }}>
          <a href="#process" className="btn-outline flex items-center gap-[6px] px-[20px] py-[10px] bg-transparent border border-dark-5 rounded-sm text-dark text-[15px] font-medium transition-all duration-200 hover:opacity-[0.88]">
            <svg className="w-[18px] h-[18px] inline-block" viewBox="0 0 256 256" fill="currentColor"><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Z"/></svg>
            See How It Works
          </a>
          <button id="hero-get-started" onClick={() => navigate('/signup')} className="btn-primary flex items-center gap-[6px] px-[20px] py-[10px] border border-dark-5 rounded-sm text-white text-[15px] font-medium transition-all duration-200 hover:opacity-[0.88]" style={{ background: 'linear-gradient(125deg, #fff -123%, #1d1f13 74%)', cursor: 'pointer' }}>
            <svg className="w-[18px] h-[18px] inline-block" viewBox="0 0 256 256" fill="currentColor"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"/></svg>
            Get Started, It's Free
          </button>
        </div>
        
        <div className="flex flex-col gap-[8px] opacity-60 italic text-[15px] animate-fadeUp mt-4" style={{ animationDelay: '0.8s' }}>
          <p>*No commitment required, cancel anytime.*</p>
          <p>*Resume reviewed before your call, every time.*</p>
        </div>
        
        <a href="#why-us" className="flex items-center justify-center w-[36px] h-[36px] bg-green-mid rounded-full text-dark no-underline mt-[32px] animate-bounce-custom" style={{ animationDelay: '1.5s' }}>
          <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>
        </a>
      </div>
    </section>
  );
}

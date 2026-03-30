// Scroll reveal
const reveals=document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:0.1,rootMargin:'0px 0px -60px 0px'});
reveals.forEach(r=>obs.observe(r));

// FAQ toggle
function toggleFaq(el){
  const wasOpen=el.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(f=>f.classList.remove('open'));
  if(!wasOpen)el.classList.add('open');
}

// Mobile menu
function toggleMenu(){document.querySelector('.nav-links').style.display=document.querySelector('.nav-links').style.display==='flex'?'none':'flex'}

// Navbar scroll effect
window.addEventListener('scroll',()=>{
  const nb=document.getElementById('navbar');
  nb.style.background=window.scrollY>50?'rgba(255,255,255,0.97)':'radial-gradient(50% 50% at 50% 50%,rgba(255,255,255,0.4) 0%,#fff 100%)';
  nb.style.boxShadow=window.scrollY>50?'0 2px 20px rgba(29,31,19,0.08)':'none';
});

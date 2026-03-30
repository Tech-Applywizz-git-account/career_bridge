export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-left">
          <a href="#" className="footer-logo pl-2">
            <svg width="150" height="30" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="22" fontFamily="'Plus Jakarta Sans',sans-serif" fontWeight="700" fontSize="20" fill="#1d1f13">CareerBridge</text>
            </svg>
          </a>
          <div className="footer-nav">
            <a href="#product">Product</a>
            <a href="#benefits">Benefits</a>
            <a href="#reviews">Reviews</a>
            <a href="#process">How It Works</a>
            <a href="#product">Case Studies</a>
          </div>
        </div>
        <div className="footer-socials">
          <a href="#" className="footer-social"><svg viewBox="0 0 256 256"><path d="M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L246.33,35.6A9,9,0,0,0,236.88,26.19ZM96,155.62l42.66,35.13L96,165V155.62ZM185.06,206.52.88,142l151.05-18.73A8,8,0,0,0,154,110.16L48.24,123.3,212.44,55Z"/></svg></a>
          <a href="#" className="footer-social"><svg viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg></a>
          <a href="#" className="footer-social"><svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2025 CareerBridge · Free Career Counseling</div>
        <div className="footer-made">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

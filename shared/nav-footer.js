/* Softroni Shared Navigation & Footer
   Usage: <script src="/shared/nav-footer.js"></script>
   
   For app product pages, add data attributes to <nav>:
   <nav class="site-nav" data-cta-text="Download" data-cta-href="#download" data-cta-class="btn btn-accent"></nav>
*/

(function () {
  const css = `
    /* ── Navigation ── */
    .site-nav {
      position: sticky;
      top: 0;
      z-index: 100;
      border-bottom: 1px solid var(--color-border, #E4E9F2);
      background: rgba(255,255,255,0.92);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }
    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
      max-width: 1180px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .nav-brand {
      font-family: var(--font-mono, 'Geist Mono', monospace);
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 700;
      font-size: 18px;
      color: var(--color-text, #101828);
      text-decoration: none;
      z-index: 102;
    }
    .nav-brand img {
      height: 32px;
      width: 32px;
      object-fit: contain;
    }
    .nav-right {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    /* Desktop nav links */
    .nav-links {
      display: flex;
      align-items: center;
      gap: 28px;
    }
    .nav-links a {
      font-size: 14px;
      font-weight: 500;
      color: var(--color-text-secondary, #475467);
      transition: color 0.2s;
      text-decoration: none;
    }
    .nav-links a:hover { color: var(--color-accent, #3B6BF5); }
    .nav-links .btn-primary,
    .nav-links .btn-accent,
    .nav-links .btn-sage { color: #fff !important; }
    .nav-links .btn-primary:hover,
    .nav-links .btn-accent:hover,
    .nav-links .btn-sage:hover { color: #fff !important; }

    /* Hamburger button */
    .nav-hamburger {
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 44px;
      height: 44px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      z-index: 102;
    }
    .nav-hamburger span {
      display: block;
      width: 22px;
      height: 2px;
      background: #1A1A1A;
      border-radius: 2px;
      transition: all 0.3s ease;
    }
    .nav-hamburger.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    .nav-hamburger.active span:nth-child(2) {
      opacity: 0;
    }
    .nav-hamburger.active span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }

    /* Mobile menu overlay */
    .nav-mobile-menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #FFFFFF;
      z-index: 99;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.25s ease, visibility 0.25s ease;
    }
    .nav-mobile-menu.open {
      opacity: 1;
      visibility: visible;
    }
    .nav-mobile-menu a {
      font-size: 22px;
      font-weight: 600;
      color: var(--color-text, #101828);
      text-decoration: none;
      padding: 14px 32px;
      transition: color 0.2s;
      font-family: var(--font-sans, 'Geist', -apple-system, BlinkMacSystemFont, sans-serif);
    }
    .nav-mobile-menu a:hover {
      color: var(--color-accent, #3B6BF5);
    }
    .nav-mobile-menu .btn {
      margin-top: 24px;
      font-size: 16px;
      padding: 14px 40px;
    }
    .nav-mobile-menu .btn-primary,
    .nav-mobile-menu .btn-accent,
    .nav-mobile-menu .btn-sage { color: #fff !important; }

    /* Responsive */
    @media (max-width: 639px) {
      .nav-links { display: none; }
      .nav-hamburger { display: flex; }
    }

    /* ── Shared button styles ── */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 44px;
      padding: 10px 24px;
      border-radius: var(--radius-btn, 8px);
      font-size: 14px;
      font-weight: 600;
      font-family: var(--font-sans, 'Geist', -apple-system, BlinkMacSystemFont, sans-serif);
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      text-decoration: none;
    }
    .btn-primary {
      background: var(--color-accent, #2F66E8);
      color: #fff;
    }
    .btn-primary:hover {
      background: var(--color-accent-hover, #2454C6);
      transform: translateY(-1px);
      box-shadow: 0 10px 24px rgba(47, 102, 232, 0.24);
    }
    .btn-accent {
      background: var(--color-accent, #3B6BF5);
      color: #fff;
    }
    .btn-accent:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    /* ── Footer ── */
    .site-footer {
      border-top: 1px solid var(--color-border, #F0F0F0);
      padding: 48px 0 32px;
    }
    .footer-top {
      display: flex;
      flex-direction: column;
      gap: 32px;
      max-width: 1024px;
      margin: 0 auto;
      padding: 0 24px;
    }
    @media (min-width: 768px) {
      .footer-top { flex-direction: row; align-items: center; justify-content: space-between; }
    }
    .footer-brand {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 700;
      font-size: 16px;
      color: #1A1A1A;
      text-decoration: none;
    }
    .footer-brand img {
      height: 28px;
      width: 28px;
      object-fit: contain;
    }
    .footer-links { display: flex; flex-wrap: wrap; gap: 24px; }
    .footer-links a {
      font-size: 14px;
      color: var(--color-text-secondary, #999);
      text-decoration: none;
      transition: color 0.2s;
    }
    .footer-links a:hover { color: var(--color-accent, #3B6BF5); }
    .footer-bottom {
      max-width: 1024px;
      margin: 32px auto 0;
      padding: 24px 24px 0;
      border-top: 1px solid var(--color-border, #F0F0F0);
    }
    .footer-bottom p {
      font-size: 14px;
      color: var(--color-text-secondary, #999);
    }
  `;

  // Inject CSS
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ── Navigation ──
  const nav = document.querySelector('.site-nav');
  if (nav) {
    const ctaText = nav.getAttribute('data-cta-text') || 'Start a Project';
    const ctaHref = nav.getAttribute('data-cta-href') || '/support.html';
    const ctaClass = nav.getAttribute('data-cta-class') || 'btn btn-primary';

    nav.innerHTML = `
      <div class="nav-inner">
        <a href="/" class="nav-brand"><img src="/logo.png" alt="Softroni logo">Softroni</a>
        <div class="nav-links">
          <a href="/#services">Services</a>
          <a href="/#process">Process</a>
          <a href="/about.html">About</a>
          <a href="/support.html">Contact</a>
          <a href="${ctaHref}" class="${ctaClass}">${ctaText}</a>
        </div>
        <button class="nav-hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    `;

    // Create mobile menu as sibling of nav (not inside)
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'nav-mobile-menu';
    mobileMenu.innerHTML = '<a href="/">Home</a>'
      + '<a href="/#services">Services</a>'
      + '<a href="/#process">Process</a>'
      + '<a href="/about.html">About</a>'
      + '<a href="/support.html">Contact</a>'
      + '<a href="' + ctaHref + '" class="' + ctaClass + '">' + ctaText + '</a>';
    document.body.appendChild(mobileMenu);

    // Hamburger toggle
    const hamburger = nav.querySelector('.nav-hamburger');
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Footer ──
  const footer = document.querySelector('.site-footer');
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `
      <div class="footer-top">
        <a href="/" class="footer-brand"><img src="/logo.png" alt="Softroni logo">Softroni</a>
        <nav class="footer-links">
          <a href="/about.html">About</a>
          <a href="/privacy-policy.html">Privacy Policy</a>
          <a href="/terms-of-service.html">Terms of Service</a>
          <a href="/support.html">Support</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${year} Softroni LLC. All rights reserved.</p>
      </div>
    `;
  }

  // end
})();

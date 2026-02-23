/* Softroni Shared Navigation & Footer
   Include this script on any page to get consistent header/footer.
   Usage: <script src="/shared/nav-footer.js"></script>
   
   The script will:
   1. Inject shared CSS (nav, footer, buttons)
   2. Replace <nav class="site-nav"></nav> with the standard nav
   3. Replace <footer class="site-footer"></footer> with the standard footer
   
   For app product pages, add data-cta-text and data-cta-href to <nav>:
   <nav class="site-nav" data-cta-text="Download" data-cta-href="#download" data-cta-class="btn btn-accent"></nav>
*/

(function () {
  // ── Shared CSS ──
  const css = `
    .site-nav {
      position: sticky;
      top: 0;
      z-index: 100;
      border-bottom: 1px solid var(--color-border, #F0F0F0);
      background: rgba(255,255,255,0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }
    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
      max-width: 1024px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .nav-brand {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 700;
      font-size: 18px;
      color: #1A1A1A;
      text-decoration: none;
    }
    .nav-brand img {
      height: 32px;
      width: 32px;
      object-fit: contain;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 24px;
    }
    .nav-links a {
      font-size: 14px;
      font-weight: 500;
      color: var(--color-text-secondary, #999);
      transition: color 0.2s;
      text-decoration: none;
    }
    .nav-links a:hover { color: var(--color-accent, #3B6BF5); }
    .nav-links .btn-primary, .nav-links .btn-accent, .nav-links .btn-sage { color: #fff !important; }
    .nav-links .btn-primary:hover, .nav-links .btn-accent:hover, .nav-links .btn-sage:hover { color: #fff !important; }
    @media (max-width: 639px) {
      .nav-hide-mobile { display: none; }
    }

    /* Shared button styles */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 24px;
      border-radius: var(--radius-btn, 8px);
      font-size: 14px;
      font-weight: 600;
      font-family: var(--font-sans, -apple-system, BlinkMacSystemFont, sans-serif);
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      text-decoration: none;
    }
    .btn-primary {
      background: var(--gradient-brand, linear-gradient(135deg, #1E3A8A, #3B82F6, #60A5FA));
      color: #fff;
    }
    .btn-primary:hover {
      opacity: 0.9;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(59, 107, 245, 0.35);
    }
    .btn-accent {
      background: var(--color-accent, #3B6BF5);
      color: #fff;
    }
    .btn-accent:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    /* Footer */
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
    const ctaText = nav.getAttribute('data-cta-text') || 'Get in Touch';
    const ctaHref = nav.getAttribute('data-cta-href') || '/support.html';
    const ctaClass = nav.getAttribute('data-cta-class') || 'btn btn-primary';

    nav.innerHTML = `
      <div class="nav-inner">
        <a href="/" class="nav-brand"><img src="/logo.png" alt="Softroni logo">Softroni</a>
        <div class="nav-links">
          <a href="/apps.html" class="nav-hide-mobile">Apps</a>
          <a href="/blog/" class="nav-hide-mobile">Blog</a>
          <a href="/about.html" class="nav-hide-mobile">About</a>
          <a href="/support.html" class="nav-hide-mobile">Support</a>
          <a href="${ctaHref}" class="${ctaClass}">${ctaText}</a>
        </div>
      </div>
    `;
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
          <a href="/blog/">Blog</a>
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
})();

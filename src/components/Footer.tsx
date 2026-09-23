import React from 'react';

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="page-container footer-inner">
        <div className="footer-identity">
          <span className="footer-brand">Pranav Gorwade</span>
          <p className="footer-copy">
            Computer Science student and MERN Stack developer focused on responsive web applications.
            Building practical projects with JavaScript, React, Node.js, and databases.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <div className="footer-section-links">
            {FOOTER_LINKS.map(link => (
              <a key={link.href} className="footer-link" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer-social-links">
            <a
              className="footer-link external"
              href="https://github.com/Pranavgorwade"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="footer-link external"
              href="https://www.linkedin.com/in/pranav-gorwade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="footer-link external"
              href="https://leetcode.com/u/PranavGorwade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
            <a
              className="footer-link external"
              href="mailto:gorwadepranav4@gmail.com"
            >
              Email
            </a>
            <a
              className="footer-link external"
              href="https://www.instagram.com/pgorwade/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>

          <button
            type="button"
            className="footer-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Top</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </nav>

        <div className="footer-legal">
          <span>&copy; {new Date().getFullYear()} Pranav Gorwade. Built with React, TypeScript &amp; Vanilla CSS.</span>
        </div>
      </div>
    </footer>
  );
};